import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import swim from '../../images/swim.svg'
import bike from '../../images/bike.svg'
import run from '../../images/run.svg'

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
          <img src={swim} alt="swim" />
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
          <img src={bike} alt="bike" />
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
          <img src={run} alt="run" />
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

  img {
    width: 30px;
  }

  input[type='radio']:checked + label {
    background: var(--sunset);
  }
`
