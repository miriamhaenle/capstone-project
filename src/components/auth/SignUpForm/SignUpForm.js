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

  const [user, setUser] = useState(INITIAL_VALUE)
  const [showPassword, setShowPassword] = useState(false)

  const isInvalid =
    user.passwordOne !== user.passwordTwo ||
    user.passwordOne === '' ||
    user.email === '' ||
    user.username === ''

  async function registerToFirebase(username, email, passwordOne) {
    try {
      const newUser = await firebaseApp.createUserWithEmailAndPassword(
        email,
        passwordOne
      )
      setUser(INITIAL_VALUE)
      await newUser.user.updateProfile({
        displayName: username,
      })

      history.push(ROUTES.HOME)
    } catch (error) {
      console.error(error)
      setUser({ ...user, error })
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
            value={user.username}
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
            value={user.email}
            onChange={handleChange}
            type="text"
            required
            autoComplete="username"
          />
        </label>
        <label>
          Select a password
          {showPassword ? (
            <img src={eyeIconHide} alt="" onClick={togglePassword} />
          ) : (
            <img src={eyeIcon} alt="" onClick={togglePassword} />
          )}
          <input
            name="passwordOne"
            value={user.passwordOne}
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete="new-password"
          />
        </label>
        <label>
          Confirm your password
          {showPassword ? (
            <img src={eyeIconHide} alt="" onClick={togglePassword} />
          ) : (
            <img src={eyeIcon} alt="" onClick={togglePassword} />
          )}
          <input
            name="passwordTwo"
            value={user.passwordTwo}
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete="new-password"
          />
        </label>
        {user.error && <p>{user.error.message}</p>}
        <Button
          text="Register"
          color={'var(--woodland)'}
          type="submit"
          disabled={isInvalid}
        />
      </StyledForm>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    registerToFirebase(user.username, user.email, user.passwordOne)
  }
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
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
`
