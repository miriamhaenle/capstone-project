import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import passwordResetWithFirebase from '../auth/passwordResetWithFirebase'

export default function PasswordResetForm({ passwordReset }) {
  const INITIAL_VALUE = {
    email: '',
    error: '',
  }

  const [userForm, setUserForm] = useState(INITIAL_VALUE)
  const resetForm = () => setUserForm(INITIAL_VALUE)

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
        ></input>
      </label>
      {userForm.error && (
        <StyledError data-cy="errorMessage">
          {userForm.error.message}
        </StyledError>
      )}
      <Button text="Reset password" color="var(--woodland)" />
    </StyledForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    passwordResetWithFirebase(userForm, setUserForm, resetForm, passwordReset)
  }

  function handleChange(event) {
    setUserForm({ ...userForm, [event.target.name]: event.target.value })
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
    background: ${({ theme }) => theme.profileInputs};
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
