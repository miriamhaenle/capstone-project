import React, { useState } from 'react'
import styled from 'styled-components'
import firebaseApp from '../../../firebase'
import Button from '../../Button/Button'
import * as ROUTES from '../../../constants/routes'
import triathlete from '../../../images/triathlete.svg'
import eyeIcon from '../../../images/eye.svg'
import { Switch, Route, Link, useLocation, useHistory } from 'react-router-dom'

export default function Register() {
  let history = useHistory()
  const INITIAL_VALUE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: '',
  }

  const [isRegistered, setIsRegistered] = useState(false)
  const [user, setUser] = useState(INITIAL_VALUE)

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
      await setUser(INITIAL_VALUE)
      await newUser.user.updateProfile({
        displayName: username,
      })

      history.push(ROUTES.HOME)
      return setIsRegistered(true)
    } catch (error) {
      console.error(error)
      setUser({ ...user, error })
    }
  }

  return (
    <StyledMain>
      <h2>Registration</h2>

      <img src={triathlete} alt="triathlete" />
      {isRegistered ? (
        'You are registered!'
      ) : (
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
            <img src={eyeIcon} alt="" />
            <input
              name="passwordOne"
              value={user.passwordOne}
              onChange={handleChange}
              type="password"
              required
              autoComplete="new-password"
            />
          </label>
          <label>
            Confirm your password
            <img src={eyeIcon} alt="" />
            <input
              name="passwordTwo"
              value={user.passwordTwo}
              onChange={handleChange}
              type="password"
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
      )}
    </StyledMain>
  )

  function handleSubmit(event) {
    event.preventDefault()
    registerToFirebase(user.username, user.email, user.passwordOne)
  }
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
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
  p {
  }
`

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

  img {
    width: 23px;
    position: absolute;
    margin: 0 0 0 270px;
    padding-top: 23px;
  }
`
