import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

export default function AddKilometers({ disabled, updateCarbonFootprint }) {
  const [kilometers, setKilometers] = useState('')

  return (
    <StyledAddKilometers onSubmit={submitHandler}>
      <h2>Add new trip</h2>
      <p>
        How many kilometers did it take you to get to your last race / trainings
        camp?
      </p>
      <label>
        Kilometers
        <input
          required
          type="number"
          name="distance"
          onChange={(event) => setKilometers(event.target.value)}
        ></input>
      </label>
      <Button disabled={kilometers >= 1 ? false : true} text="Add"></Button>
    </StyledAddKilometers>
  )

  function submitHandler(event) {
    event.preventDefault()
    const carbonFootprint = calculateCarbonEmission(kilometers)
    updateCarbonFootprint(carbonFootprint)
    console.log(carbonFootprint)
  }
}

function calculateCarbonEmission(distance) {
  const calculateMiles = distance * 0.62
  const emissionsInPound = Math.round(
    ((calculateMiles * 52) / 19.4) * (100 / 95)
  )
  return emissionsInPound
}

const StyledAddKilometers = styled.form`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  color: var(--sand);
  margin-bottom: 50px;

  h2 {
    color: var(--seafoam);
    font-family: var(--headlineFont);
    font-size: 32px;
    padding: 30px 0;
  }
  p {
    width: 315px;
  }

  input {
    border: none;
    border-radius: 3px;
    width: 315px;
    background: var(--sand);
    color: var(--dusk);
    margin: 30px 0;
    padding: 5px;
  }
`
