import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import useForm from '../utils/useForm'
import car from '../../images/car.svg'
import bus from '../../images/bus.svg'
import train from '../../images/train.svg'
import plane from '../../images/plane.svg'

export default function AddKilometers({ updateCarbonFootprint }) {
  const [values, handleChange] = useForm({})

  return (
    <StyledAddKilometers onSubmit={submitHandler}>
      <h2>Add new trip</h2>
      <p>Select mode of transportation</p>
      <TransportationSelection>
        <TransportationType>
          <img src={car} alt="car" />
          Car
        </TransportationType>
        <TransportationType>
          <img src={bus} alt="bus" />
          Bus
        </TransportationType>
        <TransportationType>
          <img src={train} alt="train" />
          Train
        </TransportationType>
        <TransportationType>
          <img src={plane} alt="plane" />
          Plane
        </TransportationType>
      </TransportationSelection>
      <p>
        How many kilometers did it take you to get to your last race / training
        camp?
      </p>

      <label>
        Kilometers
        <input
          required
          value={values.distance || ''}
          type="number"
          name="distance"
          autoFocus
          ref={(input) => input && input.focus()}
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
  }
}

function calculateCarbonEmission(distance) {
  //Formular below is just interims solution, will be changed for API call to carbon footprint API
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
const TransportationSelection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 38px 0;
`

const TransportationType = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  background-color: var(--sand);
  font-size: 14px;
  color: var(--woodland);

  img {
    width: 26px;
    height: 26px;
  }
`
