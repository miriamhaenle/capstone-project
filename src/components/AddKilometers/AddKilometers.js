import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import useForm from '../utils/useForm'
import TransportationType from '../transportationType/TransportationType'
import axios from 'axios'

export default function AddKilometers({ updateCarbonFootprint }) {
  async function calculateAndUpdateCarbonEmission() {
    const carbonFootprint = await calculateCarbonEmission(
      values.distance,
      transportationType
    )
    updateCarbonFootprint(carbonFootprint)
  }

  const [values, handleChange, handleSubmit] = useForm(
    calculateAndUpdateCarbonEmission
  )
  const [transportationType, setTransportationType] = useState('')

  return (
    <StyledAddKilometers onSubmit={handleSubmit}>
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
          onChange={(event) => handleChange(event)}
        ></KilometerInput>
      </label>
      <Button
        disabled={values.distance >= 1 ? false : true}
        text="Add"
      ></Button>
    </StyledAddKilometers>
  )

  function updateTransportationType(value) {
    setTransportationType(value)
  }
}

async function calculateCarbonEmission(distance, transportationType) {
  const calculateMiles = distance * 0.62

  try {
    const response = await axios.get(
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

    if (!response.data) {
      return Math.random() * distance * 10
    }

    const carbonEmission = Number(response.data.carbonFootprint)

    return carbonEmission
  } catch (error) {
    console.error(error)
  }
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
