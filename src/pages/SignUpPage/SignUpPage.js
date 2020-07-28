import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SignUpForm } from '../../components/auth/SignUpForm'
import * as ROUTES from '../../constants/routes'
import triathlete from '../../images/triathlete.svg'

export default function SignUpPage() {
  return (
    <StyledMain>
      <Link to={ROUTES.WELCOME}>
        <span>Go back</span>
      </Link>
      <h2>Registration</h2>
      <img src={triathlete} alt="triathlete" />
      <SignUpForm />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding: 30px 30px;
  background: var(--sand);
  height: 100%;
  color: var(--woodland);

  h2 {
    font-weight: 800;
  }
  img {
    width: 76px;
    display: block;
    margin: 50px auto;
  }
  a {
    color: var(--woodland);
  }
`
