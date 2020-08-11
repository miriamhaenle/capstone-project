import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SignInForm from '../../components/SignInForm/SignInForm'
import * as ROUTES from '../../constants/routes'
import triathlete from '../../images/triathlete.svg'

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
    margin: 50px auto;
    animation: shake 0.2s cubic-bezier(0.23, 1, 0.23, 1);
  }

  @keyframes shake {
    0% {
      transform: rotate(2deg);
    }
    20% {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(2deg);
    }
    70% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  a {
    color: var(--woodland);
  }
`
