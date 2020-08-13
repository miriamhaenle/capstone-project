import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PasswordResetForm from '../../components/PasswordResetForm/PasswordResetForm'
import * as ROUTES from '../../constants/routes'
import TriathleteIcon from '../../images/TriathleteIcon'

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
  img {
    width: 76px;
    display: block;
    margin: 60px auto;
  }

  a {
    color: ${({ theme }) => theme.radioButtonsText};
  }
`
