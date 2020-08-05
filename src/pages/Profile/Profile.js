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
import logoutFromFirebase from '../../components/auth/logoutFromFirebase'
import updateEmailWithFirebase from '../../components/auth/updateEmailWithFirebase'
import updateEmailForm from '../../components/auth/updateEmailForm'
import updateUserProfileFirebase from '../../components/auth/updateUserProfileFirebase.js'

export default function ProfilePage() {
  const { user, firebaseApp } = useContext(AuthUserContext)

  const history = useHistory()

  const [userData, setUserData] = useState({
    displayName: user.displayName,
    email: user.email,
  })
  const [confirmationPassword, setConfirmationPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  /*  async function updateUserProfileFirebase(userData) {
    const user = firebase.auth().currentUser
    try {
      await user.updateProfile({
        displayName: userData.displayName,
      })
      if (userData.email !== user.email) {
        openModal()
      }
    } catch (error) {
      console.error('error')
      setErrorMessage(`Updating ${user.displayName} failed. `)
    }
  } */

  return (
    <StyledMain>
      {showConfirmPassword && (
        <ConfirmPasswordModal
          confirmationPassword={confirmationPassword}
          updateEmailWithFirebase={() =>
            updateEmailWithFirebase(
              firebase,
              user,
              userData,
              confirmationPassword,
              setErrorMessage,
              closeModal
            )
          }
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
        updateUserProfileFirebase={() =>
          updateUserProfileFirebase(
            firebase,
            userData,
            openModal,
            setErrorMessage
          )
        }
        userData={userData}
        setUserData={updateUserData}
        errorMessage={errorMessage}
      />
      <Button
        onClick={() =>
          logoutFromFirebase(history, firebaseApp, setErrorMessage)
        }
        text="Log out"
      />
    </StyledMain>
  )

  function closeModal() {
    updateEmailForm(firebase, userData, setUserData, setConfirmationPassword)
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
    width: 115px;
    height: 115px;
  }
`
