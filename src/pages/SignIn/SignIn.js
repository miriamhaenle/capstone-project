import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SignInForm from '../../components/auth/SignInForm/SignInForm'
import triathlete from '../../images/triathlete.svg'
import * as ROUTES from '../../constants/routes'

export default function SignInPage() {
  return (
    <StyledMain>
      <Link to={ROUTES.WELCOME}>
        <span>Go back</span>
      </Link>
      <h2>Login</h2>
      <img src={triathlete} alt="triathlete" />
      <SignInForm />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding: 30px 30px;
  background: var(--sand);
  height: 100vh;
  color: var(--woodland);

  h2 {
    font-weight: 800;
  }
  img {
    width: 76px;
    display: block;
    margin: 60px auto;
  }

  a {
    color: var(--woodland);
  }
`
