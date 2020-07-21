import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import firebaseApp from '../../../firebase'
import Button from '../../Button/Button'
import triathlete from '../../../images/triathlete.svg'
import eyeIcon from '../../../images/eye.svg'
//import eyeIconHide from '../../../images/eye.svg'

export default function Register() {
  const [isRegistered, setIsRegistered] = useState(false)

  const userName = useRef(null)
  const userMail = useRef(null)
  const userPassword = useRef(null)

  async function registerToFirebase(name, email, password) {
    const newUser = await firebaseApp.createUserWithEmailAndPassword(
      email.current.value,
      password.current.value
    )

    await newUser.user.updateProfile({
      displayName: name.current.value,
    })

    return setIsRegistered(true)
  }

  return (
    <StyledMain>
      <h2>Registration</h2>
      <img src={triathlete} alt="triathlete" />
      {isRegistered ? 'You are registered!' : 'not registered'}
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Your name
          <input required type="text" name="userName" ref={userName} />
        </label>
        <label>
          Your mail
          <input required type="text" name="userMail" ref={userMail} />
        </label>
        <label>
          Password
          <img src={eyeIcon} alt="" />
          <input
            required
            type="password"
            name="userPassword"
            ref={userPassword}
          />
        </label>
        <Button text="Register" color={'var(--woodland)'} type="submit" />
      </StyledForm>
    </StyledMain>
  )

  function handleSubmit(event) {
    event.preventDefault()
    registerToFirebase(userName, userMail, userPassword)
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
    margin: 25px 0;
    padding: 5px;
    font-size: 16px;
  }

  img {
    width: 23px;
    position: absolute;
    margin: 0 0 0 270px;
    padding-top: 27px;
  }
`
