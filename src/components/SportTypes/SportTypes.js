import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SwimIcon from '../../images/SwimIcon.js'
import BikeIcon from '../../images/BikeIcon.js'
import RunIcon from '../../images/RunIcon.js'

export default function SportTypes({ updateSportsType, sportsType }) {
  return (
    <Container>
      <p>Select sports type</p>
      <div name="sportSelection">
        <input
          type="radio"
          name="sports"
          id="swim"
          value="swim"
          onChange={handleChange}
          checked={'swim' === sportsType}
        />
        <label htmlFor="swim" name="sports">
          <SwimIcon />
          Swim
        </label>
        <input
          type="radio"
          name="sports"
          id="bike"
          value="bike"
          onChange={handleChange}
          checked={'bike' === sportsType}
        />
        <label htmlFor="bike" name="sports">
          <BikeIcon />
          Bike
        </label>
        <input
          type="radio"
          name="sports"
          id="run"
          value="run"
          onChange={handleChange}
          checked={'run' === sportsType}
        />

        <label htmlFor="run" name="sports">
          <RunIcon />
          Run
        </label>
      </div>
    </Container>
  )
  function handleChange(event) {
    updateSportsType(event.target.value)
  }
}

SportTypes.propTypes = {
  updateSportType: PropTypes.func,
}

const Container = styled.section`
  div {
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
  }

  input {
    visibility: hidden;
    margin: 0;
  }

  svg {
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
