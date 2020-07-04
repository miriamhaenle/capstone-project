import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import useForm from './utils/useForm'

export default function AddKilometers({ updateCarbonFootprint }) {
  const [values, handleChange] = useForm({})

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
          value={values.distance || ''}
          type="number"
          name="distance"
          onChange={(event) => handleChange(event)}
        ></input>
      </label>
      <Button
        disabled={values.distance >= 1 ? false : true}
        text="Add"
      ></Button>
    </StyledAddKilometers>
  )

  function submitHandler(event) {
    event.preventDefault()
    const carbonFootprint = calculateCarbonEmission(values.distance)
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
    padding: 40px 0 30px 0;
    margin: 0;
  }
  p {
    width: 315px;
    margin: 0;
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
