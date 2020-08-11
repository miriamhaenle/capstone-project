import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as ROUTES from '../../constants/routes'
import eyeIcon from '../../../images/eye.svg'
import eyeIconHide from '../../../images/eyeIconHide.svg'
import Button from '../Button/Button'
import loginWithFirebase from '../auth/loginWithFirebase'

export default function SignInForm() {
  let history = useHistory()

  const INITIAL_VALUE = {
    email: '',
    password: '',
    error: '',
  }
  const [userForm, setUserForm] = useState(INITIAL_VALUE)
  const [showPassword, setShowPassword] = useState(false)

  const isInvalid =
    !userForm.password.length ||
    !userForm.email.length ||
    !/([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})/.test(userForm.email)

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Email
        <input
          name="email"
          value={userForm.email}
          onChange={handleChange}
          type="text"
          required
        />
      </label>
      <label>
        Password
        <img
          src={showPassword ? eyeIconHide : eyeIcon}
          alt="show Password"
          onClick={togglePassword}
          data-cy="eyeIcon"
        />
        <input
          name="password"
          value={userForm.password}
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          data-testid="password"
          required
        />
      </label>
      <Link to={ROUTES.PASSWORD_FORGET}>
        <p>Forgot password?</p>
      </Link>
      {userForm.error && (
        <StyledError data-cy="errorMessage">
          {userForm.error.message}
        </StyledError>
      )}
      <Button
        data-cy="signUp"
        text="Sign in"
        color={'var(--woodland)'}
        type="submit"
        disabled={isInvalid}
      />
    </StyledForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    loginWithFirebase(
      history,
      userForm.email,
      userForm.password,
      userForm,
      setUserForm
    )
  }

  function handleChange(event) {
    setUserForm({ ...userForm, [event.target.name]: event.target.value })
  }
  function togglePassword() {
    setShowPassword(!showPassword)
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
    padding: 9px;
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
const StyledError = styled.p`
  font-size: 14px;
  color: var(--sunset);
  margin: 0 0 20px;
`
