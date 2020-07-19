import React from 'react'
import styled from 'styled-components'

import car from '../../images/car.svg'
import bus from '../../images/bus.svg'
import train from '../../images/train.svg'
import plane from '../../images/plane.svg'

export default function TransportationType({
  updateTransportationType,
  transportationType,
}) {
  return (
    <Container role="transportationTypes">
      <p>Select mode of transportation</p>
      <div name="transportationSelection">
        <input
          type="radio"
          name="transportation"
          id="car"
          value="anyCar"
          onChange={handleChange}
          checked={'anyCar' === transportationType}
        />
        <label htmlFor="car" name="transportation">
          <img src={car} alt="car" id="carIcon" />
          Car
        </label>
        <input
          type="radio"
          name="transportation"
          id="bus"
          value="bus"
          onChange={handleChange}
          checked={'bus' === transportationType}
        />
        <label htmlFor="bus">
          <img src={bus} alt="bus" id="busIcon" />
          Bus
        </label>
        <input
          type="radio"
          name="transportation"
          id="train"
          value="transitRail"
          onChange={handleChange}
          checked={'transitRail' === transportationType}
        />
        <label htmlFor="train">
          <img src={train} alt="train" id="trainIcon" />
          Train
        </label>
        <input
          type="radio"
          name="transportation"
          id="plane"
          value="anyFlight"
          onChange={handleChange}
          checked={'anyFlight' === transportationType}
        />
        <label htmlFor="plane">
          {' '}
          <img src={plane} alt="plane" id="planeIcon" />
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
  padding: 0;

  div {
    display: flex;
    padding: 25px 0;
  }

  input {
    visibility: hidden;
    margin: 0;
  }

  img {
    width: 30px;
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
    :hover {
      cursor: pointer;
    }
  }

  input[type='radio']:checked + label {
    background: var(--sunset);
  }

  #carIcon {
    margin-bottom: -5px;
  }

  #busIcon {
    margin-bottom: -5px;
  }
  #trainIcon {
    margin-bottom: -2px;
  }
`
