import React, { useContext } from 'react'
import styled from 'styled-components'
import LoginContext from '../../components/auth/LoginContext'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import profileIcon from '../../images/profileIcon.svg'
import Button from '../../components/Button/Button'

export default function ProfilePage() {
  const { user } = useContext(LoginContext)
  console.log({ user })
  return (
    <StyledMain>
      <Link to={ROUTES.ADD_TRIP}>
        <span>Go back</span>
      </Link>
      <h2>User Profile</h2>
      <ProfileIcon>
        <img src={profileIcon} alt="profile" />
      </ProfileIcon>
      <StyledSection>
        <div>
          Name: <span>{user ? user.displayName : ''}</span>{' '}
        </div>
        <div>
          Email: <span>{user ? user.email : ''}</span>
        </div>
      </StyledSection>

      <Button text="Edit" color="var(--sunset)" />
      <Button text="Log out" color="var(--woodland)" />
    </StyledMain>
  )
}

const StyledMain = styled.main`
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
