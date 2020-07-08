import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import useForm from '../utils/useForm'
import TransportationType from '../transportationType/TransportationType'
import axios from 'axios'

export default function AddKilometers({ updateCarbonFootprint }) {
  const [values, handleChange] = useForm({})
  const [transportationType, setTransportationType] = useState('')

  return (
    <StyledAddKilometers onSubmit={submitHandler}>
      <h2>Add new trip</h2>
      <TransportationType
        updateTransportationType={updateTransportationType}
      ></TransportationType>
      <p>
        How many kilometers did it take you to get to your last race / training
        camp?
      </p>
      <label>
        Kilometers
        <KilometerInput
          required
          value={values.distance || ''}
          type="number"
          name="distance"
          autoFocus
          ref={(input) => input && input.focus()}
          onChange={(event) => handleChange(event)}
        ></KilometerInput>
      </label>
      <Button
        disabled={values.distance >= 1 ? false : true}
        text="Add"
      ></Button>
    </StyledAddKilometers>
  )

  function submitHandler(event) {
    event.preventDefault()
    const carbonFootprint = calculateCarbonEmission(
      values.distance,
      transportationType
    )
    updateCarbonFootprint(carbonFootprint)
    console.log(carbonFootprint)
  }

  function updateTransportationType(value) {
    setTransportationType(value)
  }
}

async function calculateCarbonEmission(distance, transportationType) {
  console.log({ transportationType })
  const calculateMiles = distance * 0.62

  const emissionsInPound = await axios
    .get(
      'http://localhost:5001/capstone-project-c74dc/europe-west3/app/my-carbon-footprint',
      {
        params: {
          activity: Number(calculateMiles),
          activityType: 'miles',
          country: 'def',
          mode: 'anyCar',
        },
      }
    )
    .then((response) =>
      console.log({ Footprint: response.data.carbonFootprint })
    )
    .catch((error) => console.log(error))

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
`

const KilometerInput = styled.input`
  border: none;
  border-radius: 3px;
  width: 315px;
  background: var(--sand);
  color: var(--dusk);
  margin: 30px 0;
  padding: 5px;
`
