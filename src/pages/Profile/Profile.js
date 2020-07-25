import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LoginContext from '../../components/auth/LoginContext'
import Button from '../../components/Button/Button'
import * as ROUTES from '../../constants/routes'
import profileIcon from '../../images/profileIcon.svg'

export default function ProfilePage() {
  let history = useHistory()

  const { user, firebaseApp } = useContext(LoginContext)
  const [userData, setUserData] = useState({
    username: user ? user.displayName : '',
    email: user ? user.email : '',
  })
  const [editProfile, setEditProfile] = useState(false)

  const navigateTo = (path) => history.push(path)

  async function logoutFromFirebase() {
    await firebaseApp.signOut()
    navigateTo(ROUTES.WELCOME)
  }
  return (
    <StyledMain>
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
            name="username"
            disabled={editProfile ? false : true}
            type="text"
            value={userData.username}
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

      <Button onClick={handleClick} text={editProfile ? 'Save' : 'Edit'} />
      <Button
        onClick={logoutFromFirebase}
        text="Log out"
        color="var(--woodland)"
      />
    </StyledMain>
  )

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  function handleClick() {
    setEditProfile(!editProfile)
  }
}

const StyledMain = styled.main`
  background: var(--sand);
  height: 100%;
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
    font-size: 18px;
    color: var(--dust);
    width: 200px;
  }
  input:disabled {
    background: var(--sand);
  }
`
