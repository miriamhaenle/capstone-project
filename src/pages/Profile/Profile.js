import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LoginContext from '../../components/auth/LoginContext'
import Button from '../../components/Button/Button'
import * as ROUTES from '../../constants/routes'
import profileIcon from '../../images/profileIcon.svg'

export default function ProfilePage() {
  const { user } = useContext(LoginContext)
  const [editProfile, setEditProfile] = useState(false)
  const disabled = false

  return (
    <StyledMain>
      <Link to={ROUTES.ADD_TRIP}>
        <span>Go back</span>
      </Link>
      <h2>User Profile</h2>
      <ProfileIcon>
        <img src={profileIcon} alt="profile" />
      </ProfileIcon>
      {editProfile ? (
        'Profile Form'
      ) : (
        <StyledSection>
          <div>
            Name: <span>{user ? user.displayName : null}</span>{' '}
          </div>
          <div>
            Email: <span>{user ? user.email : null}</span>
          </div>
        </StyledSection>
      )}
      <Button onClick={handleClick} text="Edit" />
    </StyledMain>
  )

  function handleClick() {
    console.log('click')
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
const StyledSection = styled.section`
  padding: 30px 0;
  font-family: var(--headlineFont);
  font-weight: 500;
  font-size: 18px;

  div {
    padding: 20px 0;
  }
  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    padding-left: 20px;
  }
`
