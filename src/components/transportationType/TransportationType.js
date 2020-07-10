import React from 'react'
import styled from 'styled-components'

import car from '../../images/car.svg'
import bus from '../../images/bus.svg'
import train from '../../images/train.svg'
import plane from '../../images/plane.svg'

export default function TransportationType({ updateTransportationType }) {
  return (
    <Container>
      <p>Select mode of transportation</p>
      <div name="transportationSelection">
        <input
          type="radio"
          name="transportation"
          id="car"
          value="anyCar"
          onChange={handleChange}
        />
        <label htmlFor="car" name="transportation">
          <img src={car} alt="car" />
          Car
        </label>
        <input
          type="radio"
          name="transportation"
          id="bus"
          value="bus"
          onChange={handleChange}
        />
        <label htmlFor="bus">
          <img src={bus} alt="bus" />
          Bus
        </label>
        <input
          type="radio"
          name="transportation"
          id="train"
          value="transitRail"
          onChange={handleChange}
        />
        <label htmlFor="train">
          <img src={train} alt="train" />
          Train
        </label>
        <input
          type="radio"
          name="transportation"
          id="plane"
          value="anyFlight"
          onChange={handleChange}
        />
        <label htmlFor="plane">
          {' '}
          <img src={plane} alt="plane" />
          Plane
        </label>
      </div>
    </Container>
  )
  function handleChange(event) {
    updateTransportationType(event.target.value)
  }
}

const Container = styled.section`
  padding: 30px 0;

  div {
    display: flex;
    padding: 20px 0;
  }

  input {
    visibility: hidden;
  }

  label {
    background: var(--sand);
    border-radius: 50%;
    color: var(--woodland);
    display: flex;
    font-size: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 61px;
    width: 61px;
  }

  input[type='radio']:checked + label {
    background: var(--sunset);
  }
`
