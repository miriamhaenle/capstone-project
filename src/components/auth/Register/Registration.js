import React from 'react'
import styled from 'styled-components'
import Button from '../../Button/Button'
import useForm from '../../utils/useForm'
import triathlete from '../../../images/triathlete.svg'

export default function Registration() {
  return (
    <StyledMain>
      <h2>Registration</h2>
      <img src={triathlete} alt="triathlete" />
      <StyledForm>
        <label>
          Your name
          <input type="text"></input>
        </label>
        <label>
          Your mail
          <input type="text"></input>
        </label>
        <label>
          Password
          <input type="text"></input>
        </label>
        <Button text="Register" color={'var(--woodland)'} disabled />
      </StyledForm>
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
    background: var(--orange-yellow);
    color: var(--dusk);
    margin: 25px 0;
    padding: 5px;
  }
`
