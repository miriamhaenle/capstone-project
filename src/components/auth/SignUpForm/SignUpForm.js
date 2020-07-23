import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as ROUTES from '../../../constants/routes'
import firebaseApp from '../../../firebase'
import eyeIcon from '../../../images/eye.svg'
import eyeIconHide from '../../../images/eyeIconHide.svg'
import Button from '../../Button/Button'

export function SignUpForm() {
  let history = useHistory()
  const INITIAL_VALUE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: '',
  }

  const [userForm, setUserForm] = useState(INITIAL_VALUE)
  const [showPassword, setShowPassword] = useState(false)

  const isInvalid =
    userForm.passwordOne !== userForm.passwordTwo ||
    !userForm.passwordOne.length ||
    !userForm.email.length ||
    !/([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})/.test(userForm.email) ||
    !userForm.username.length

  const resetForm = () => setUserForm(INITIAL_VALUE)
  const navigateTo = (path) => history.push(path)

  async function registerToFirebase(username, email, passwordOne) {
    try {
      const newUser = await firebaseApp.createUserWithEmailAndPassword(
        email,
        passwordOne
      )
      await newUser.user.updateProfile({
        displayName: username,
      })

      navigateTo(ROUTES.HOME)
      resetForm()
    } catch (error) {
      console.error(error)
      setUserForm({ ...userForm, error })
    }
  }

  return (
    <>
      {' '}
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            name="username"
            value={userForm.username}
            onChange={handleChange}
            type="text"
            required
            autoComplete="username"
          />
        </label>
        <label>
          Your mail
          <input
            name="email"
            value={userForm.email}
            onChange={handleChange}
            type="text"
            required
            autoComplete="email"
          />
        </label>
        <label>
          Select a password
          <img
            src={showPassword ? eyeIconHide : eyeIcon}
            alt="show Password"
            onClick={togglePassword}
          />
          <input
            name="passwordOne"
            value={userForm.passwordOne}
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            data-testid="passwordOne"
            required
            autoComplete="new-password"
          />
        </label>
        <label>
          Confirm your password
          <img
            src={showPassword ? eyeIconHide : eyeIcon}
            alt="show Password"
            onClick={togglePassword}
          />
          <input
            name="passwordTwo"
            value={userForm.passwordTwo}
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            data-testid="passwordTwo"
            required
            autoComplete="new-password"
          />
        </label>
        {userForm.error && <StyledError>{userForm.error.message}</StyledError>}
        <Button
          text="Sign up"
          color={'var(--woodland)'}
          type="submit"
          disabled={isInvalid}
        />
        <p>By creating an account you agree to our Terms & Conditions.</p>
      </StyledForm>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    registerToFirebase(userForm.username, userForm.email, userForm.passwordOne)
  }
  function handleChange(event) {
    setUserForm({ ...userForm, [event.target.name]: event.target.value })
  }
  function togglePassword() {
    setShowPassword(!showPassword)
  }
}

const StyledForm = styled.form`
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

  label > img {
    width: 23px;
    position: absolute;
    margin: 0 0 0 270px;
    padding-top: 23px;
    cursor: pointer;
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
