import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../Button/Button'
import styled from 'styled-components'
import firebaseApp from '../../../firebase'
import * as ROUTES from '../../../constants/routes'

export default function SignInForm() {
  let history = useHistory()
  const userMail = useRef(null)
  const userPassword = useRef(null)

  async function loginWithFirebase(email, password) {
    await firebaseApp.signInWithEmailAndPassword(email, password)
    return history.push(ROUTES.HOME)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Email
        <input name="email" type="text" ref={userMail} />
      </label>
      <label>
        Password
        <input name="password" type="password" ref={userPassword} />
      </label>
      <Button
        data-cy="signUp"
        text="Sign in"
        color={'var(--woodland)'}
        type="submit"
        disabled
      />
    </StyledForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    loginWithFirebase(userMail.current.value, userPassword.current.value)
  }
}

const StyledForm = styled.form`
  background: var(--sand);

  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;

  input {
    border: none;
    border-radius: 3px;
    width: 315px;
    height: 30px;
    background: var(--orange-yellow);
    color: var(--dusk);
    margin: 20px 0;
    padding: 5px;
    font-size: 16px;
  }
  label {
    position: relative;
  }

  label > img {
    margin: 0;
    width: 23px;
    position: absolute;
    cursor: pointer;
    top: 47px;
    right: 30px;
  }

  p {
    font-size: 12px;
  }
`
