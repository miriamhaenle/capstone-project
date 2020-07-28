import * as firebase from 'firebase'
import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AuthUserContext from '../../components/auth/AuthUserContext'
import ConfirmPasswordModal from '../../components/auth/ConfirmPasswordModal/ConfirmPasswordModal'
import EditProfileForm from '../../components/auth/EditProfileForm/EditProfileForm'
import Button from '../../components/Button/Button'
import * as ROUTES from '../../constants/routes'
import profileIcon from '../../images/profileIcon.svg'

export default function ProfilePage() {
  const { user, firebaseApp } = useContext(AuthUserContext)

  const history = useHistory()
  const navigateTo = (path) => history.push(path)

  const [userData, setUserData] = useState({
    displayName: user.displayName,
    email: user.email,
  })
  const [editProfile, setEditProfile] = useState(false)
  const [confirmationPassword, setConfirmationPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function updateUserProfileFirebase(userData) {
    const user = firebase.auth().currentUser
    try {
      await user.updateProfile({
        displayName: userData.displayName,
      })
      if (userData.email !== user.email) {
        openModal()
      }
    } catch (error) {
      setErrorMessage(`Updating ${user.displayName} failed. ${error}`)
    }
  }

  async function updateEmailWithFirebase() {
    if (!confirmationPassword) {
      setErrorMessage('Password not confirmed!')
      return
    }

    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      confirmationPassword
    )
    try {
      await user.reauthenticateWithCredential(credentials)
      await user.updateEmail(userData.email)
    } catch (error) {
      console.log(error.message)
      setErrorMessage(`Email Address could not be updated. ${error}`)
    } finally {
      closeModal()
    }
  }

  function updateEmailForm() {
    const user = firebase.auth().currentUser
    setUserData({ ...userData, email: user.email })
    setConfirmationPassword('')
  }

  async function logoutFromFirebase() {
    try {
      navigateTo(ROUTES.WELCOME)
      await firebaseApp.signOut()
    } catch (error) {
      setErrorMessage('error.message')
    }
  }

  return (
    <StyledMain>
      {showConfirmPassword && (
        <ConfirmPasswordModal
          confirmationPassword={confirmationPassword}
          updateEmailWithFirebase={updateEmailWithFirebase}
          updateConfirmationPassword={updateConfirmationPassword}
          closeModal={closeModal}
        />
      )}
      <Link to={ROUTES.ADD_TRIP}>
        <span>Go back</span>
      </Link>
      <h2>User Profile</h2>
      <ProfileIcon>
        <img src={profileIcon} alt="profile" />
      </ProfileIcon>

      <EditProfileForm
        updateUserProfileFirebase={updateUserProfileFirebase}
        userData={userData}
        setUserData={updateUserData}
        errorMessage={errorMessage}
      />
      <Button onClick={logoutFromFirebase} text="Log out" />
    </StyledMain>
  )

  function closeModal() {
    updateEmailForm()
    setShowConfirmPassword(false)
  }
  function openModal() {
    setShowConfirmPassword(true)
  }

  function updateConfirmationPassword(input) {
    setConfirmationPassword(input)
  }

  function updateUserData(input) {
    setUserData(input)
  }
}

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
