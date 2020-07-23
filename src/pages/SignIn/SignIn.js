import React from 'react'
import styled from 'styled-components'
import SignInForm from '../../components/auth/SignInForm/SignInForm'
import triathlete from '../../images/triathlete.svg'

export default function SignInPage() {
  return (
    <StyledMain>
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
  p {
  }
`
