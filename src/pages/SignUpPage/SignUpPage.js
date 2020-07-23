import React from 'react'
import styled from 'styled-components'

import { SignUpForm } from '../../components/auth/SignUpForm'
import triathlete from '../../images/triathlete.svg'

export default function SignUpPage() {
  return (
    <StyledMain>
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
    margin: 60px auto;
  }
`
