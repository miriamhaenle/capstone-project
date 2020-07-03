import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

export default function AddKilometers() {
  return (
    <StyledAddKilometers>
      <h2>Add new trip</h2>
      <p>
        How many kilometers did it take you to get to your last race / trainings
        camp?
      </p>
      <label>
        Kilometers<input type="number"></input>
      </label>
      <Button disabled text="Add"></Button>
    </StyledAddKilometers>
  )
}

const StyledAddKilometers = styled.form`
  padding: 30px;
  max-width: 315px;
  color: var(--sand);

  h2 {
    color: var(--seafoam);
    font-family: var(--headlineFont);
    font-size: 32px;
    padding: 30px 0;
  }

  input {
    border: none;
    border-radius: 3px;
    width: 315px;
    background: var(--sand);
    color: var(--dusk);
    margin: 30px 0;
  }
`
