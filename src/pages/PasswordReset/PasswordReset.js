import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PasswordResetForm from 'components/PasswordResetForm/PasswordResetForm'
import * as ROUTES from 'constants/routes'
import TriathleteIcon from 'images/TriathleteIcon'

export default function PasswordResetPage() {
  const [passwordResetted, setPasswordResetted] = useState(false)
  return (
    <StyledMain>
      <Link to={ROUTES.SIGN_IN}>
        <span>Go back</span>
      </Link>
      <h2>Password reset</h2>
      <TriathleteIcon />

      {passwordResetted ? (
        <>
          <p>We send you a link to reset your password.</p>
          <Link to={ROUTES.SIGN_IN}>Cool! I want to log in again!</Link>
        </>
      ) : (
        <PasswordResetForm passwordReset={passwordReset} />
      )}
    </StyledMain>
  )

  function passwordReset(bool) {
    setPasswordResetted(bool)
  }
}

const StyledMain = styled.main`
  padding: 30px 30px;
  background: ${({ theme }) => theme.backgroundProfileRelated};
  height: 100vh;
  color: ${({ theme }) => theme.textProfileRelated};

  h2 {
    font-weight: 800;
  }
  svg {
    width: 76px;
    display: block;
    padding: 0;
    margin: 60px auto 0;
    animation: drive 2s cubic-bezier(0.23, 1, 0.23, 1);

    path {
      fill: ${({ theme }) => theme.textProfileRelated};
    }
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
    color: ${({ theme }) => theme.radioButtonsText};
  }
`
