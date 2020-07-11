import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import useForm from '../utils/useForm'
import TransportationTypes from '../TransportationTypes/TransportationTypes'
import { calculateCarbonEmission } from '../utils/calculateCarbonEmission'

export default function AddKilometersForm({ updateCarbonFootprint }) {
  const [values, handleChange, handleSubmit] = useForm(
    calculateAndUpdateCarbonEmission
  )
  const [transportationType, setTransportationType] = useState('')

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Add new trip</h2>
      <TransportationTypes
        updateTransportationType={updateTransportationType}
        data-test="child"
        name="Selection of transportation type"
      ></TransportationTypes>
      <p>
        How many kilometers did it take you to get to your last race / training
        camp?
      </p>
      <label>
        Kilometers
        <KilometerInput
          required
          value={values.distance || ''}
          type="tel"
          name="distance"
          onChange={(event) => handleChange(event)}
        ></KilometerInput>
      </label>
      <Button
        disabled={values.distance >= 1 ? false : true}
        text="Add"
      ></Button>
    </StyledForm>
  )
  async function calculateAndUpdateCarbonEmission() {
    const carbonFootprint = await calculateCarbonEmission(
      values.distance,
      transportationType
    )
    updateCarbonFootprint(carbonFootprint)
  }

  function updateTransportationType(value) {
    setTransportationType(value)
  }
}

const StyledForm = styled.form`
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
