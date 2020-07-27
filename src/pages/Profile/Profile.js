import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AuthUserContext from '../../components/auth/AuthUserContext'
import Button from '../../components/Button/Button'
import * as ROUTES from '../../constants/routes'
import profileIcon from '../../images/profileIcon.svg'
import * as firebase from 'firebase'

export default function ProfilePage() {
  const history = useHistory()

  const { user, firebaseApp } = useContext(AuthUserContext)
  const [userData, setUserData] = useState({
    displayName: user.displayName,
    email: user.email,
  })
  const [editProfile, setEditProfile] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigateTo = (path) => history.push(path)

  async function logoutFromFirebase() {
    try {
      navigateTo(ROUTES.WELCOME)
      await firebaseApp.signOut()
    } catch (error) {
      console.error(error)
    }
  }

  function openModal() {
    setShowConfirmPassword(true)
  }

  function closeModal() {
    updateEmailForm()
    setShowConfirmPassword(false)
  }

  async function updateEmail() {
    if (!confirmPassword) {
      window.alert('Password not confirmed')
      return
    }

    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      confirmPassword
    )
    try {
      await user.reauthenticateWithCredential(credentials)
      await user.updateEmail(userData.email)
    } catch (err) {
      console.warn(`Error: Email Address could not be updated. Message: ${err}`)
    } finally {
      closeModal()
    }
  }

  function updateEmailForm() {
    const user = firebase.auth().currentUser
    setUserData({ ...userData, email: user.email })
    setConfirmPassword('')
  }

  async function updateUserProfileFirebase(userData) {
    const user = firebase.auth().currentUser

    try {
      await user.updateProfile({
        displayName: userData.displayName,
      })
      if (userData.email !== user.email) {
        openModal()
      }
    } catch (err) {
      console.error(
        `Updating ${user.displayName} failed. Error Message: ${err}`
      )
    }
  }

  return (
    <StyledMain>
      {showConfirmPassword && (
        <StyledModal>
          <div>
            Please confirm your password to change your email address.
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <Button
              color="var(--woodland)"
              text="Confirm"
              onClick={updateEmail}
            />
            <Button text="Close" onClick={closeModal} />
          </div>
        </StyledModal>
      )}
      <Link to={ROUTES.ADD_TRIP}>
        <span>Go back</span>
      </Link>
      <h2>User Profile</h2>
      <ProfileIcon>
        <img src={profileIcon} alt="profile" />
      </ProfileIcon>

      <StyledForm>
        <label>
          Name
          <input
            name="displayName"
            disabled={editProfile ? false : true}
            type="text"
            value={userData.displayName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            disabled={editProfile ? false : true}
            type="text"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
      </StyledForm>

      <Button
        onClick={() => handleClick(!!editProfile)}
        text={editProfile ? 'Save' : 'Edit'}
        color="var(--woodland)"
      />
      <Button onClick={logoutFromFirebase} text="Log out" />
    </StyledMain>
  )

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  function handleClick(shouldSave) {
    setEditProfile(!editProfile)
    if (shouldSave) {
      updateUserProfileFirebase(userData)
    }
  }
}

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);

  div {
    align-items: center;
    border-radius: 2px;
    position: absolute;
    background: var(--sand);
    height: 50%;
    width: 80%;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    padding: 30px;
    color: var(--dusk);
  }

  input {
    margin: 20px;
  }
`

const StyledMain = styled.main`
  position: relative;
  background: var(--sand);
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: var(--headlineFont);
  }
  a {
    color: var(--woodland);
  }
  button {
    margin: 10px;
    padding: 10px;
  }
`
const ProfileIcon = styled.div`
  margin: 50px auto 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--orange-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  img {
    width: 120px;
    height: 120px;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  font-family: var(--headlineFont);
  font-weight: 500;
  font-size: 18px;

  label {
    padding: 20px 0;
  }
  input {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    margin-left: 20px;
    border: none;
    font-size: 16px;
    color: var(--dust);
    width: 220px;
  }
  input:disabled {
    background: var(--sand);
  }
`
