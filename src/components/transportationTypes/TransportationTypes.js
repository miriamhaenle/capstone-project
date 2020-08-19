import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CarIcon from 'images/CarIcon'
import BusIcon from 'images/BusIcon'
import TrainIcon from 'images/TrainIcon'
import PlaneIcon from 'images/PlaneIcon'

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
          <CarIcon />
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
          <BusIcon />
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
          <TrainIcon />
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
          <PlaneIcon />
          Plane
        </label>
      </div>
    </Container>
  )
  function handleChange(event) {
    updateTransportationType(event.target.value)
  }
}

TransportationType.propTypes = {
  updateTransportationType: PropTypes.func,
  transportationType: PropTypes.string,
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

  svg {
    margin-top: 5px;
    g {
      fill: ${({ theme }) => theme.inputColor};
    }
  }

  label {
    background: ${({ theme }) => theme.input};
    border-radius: 50%;
    color: ${({ theme }) => theme.inputColor};
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
    background: ${({ theme }) => theme.radioButtonsChecked};
  }
`
