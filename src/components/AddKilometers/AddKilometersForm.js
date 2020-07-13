import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import useForm from '../utils/useForm'
import TransportationTypes from '../TransportationTypes/TransportationTypes'
import SportTypes from '../SportTypes/SportTypes'
import { calculateCarbonEmission } from '../utils/calculateCarbonEmission'

export default function AddKilometersForm({
  headline,
  paragraph,
  type,

  updateData,
  updateCarbonEmission,
  getValues,
}) {
  const [values, handleChange, handleSubmit] = useForm(updateCarbonEmission)
  //const [transportationType, setTransportationType] = useState('')
  const [sportsType, setSportsType] = useState('')

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>{headline}</h2>
      {type === 'transportation' ? (
        <TransportationTypes
          updateTransportationType={updateData}
          data-test="child"
          name="Selection of transportation type"
        ></TransportationTypes>
      ) : (
        <SportTypes
          name="Selection of sport type"
          updateSportsType={updateData}
        ></SportTypes>
      )}

      <p>{paragraph}</p>
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

  /*   async function calculateAndUpdateCarbonEmission() {
    const carbonFootprint = await calculateCarbonEmission(
      values.distance,
      transportationType
    )
    updateCarbonFootprint(carbonFootprint)
  } */

  /*   function updateTransportationType(value) {
    setTransportationType(value)
  } */
  function updateSportsType(value) {
    console.log(value)
    setSportsType(value)
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
    padding: 25px 0 20px 0;
    margin: 0;
  }
  p {
    width: 315px;
    margin: 0;
    padding-bottom: 10px;
  }
`

const KilometerInput = styled.input`
  border: none;
  border-radius: 3px;
  width: 315px;
  background: var(--sand);
  color: var(--dusk);
  margin: 25px 0;
  padding: 5px;
`
