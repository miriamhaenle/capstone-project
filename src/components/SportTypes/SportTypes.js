import React from 'react'
import styled from 'styled-components'

import swim from '../../images/swim.svg'
import bike from '../../images/bike.svg'
import run from '../../images/run.svg'

export default function SportTypes() {
  return (
    <Container>
      <p>Select sport type</p>
      <div name="sportSelection">
        <input type="radio" name="sports" id="swim" value="swim" />
        <label htmlFor="swim" name="sports">
          <img src={swim} alt="swim" />
          Swim
        </label>
        <input type="radio" name="sports" id="bike" value="bike" />
        <label htmlFor="bike" name="sports">
          <img src={bike} alt="bike" />
          Bike
        </label>
        <input type="radio" name="sports" id="run" value="run" />

        <label htmlFor="run" name="sports">
          <img src={run} alt="run" />
          Run
        </label>
      </div>
    </Container>
  )
}

const Container = styled.section`
  padding: 30px 0;

  div {
    display: flex;
    padding: 20px 0;
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
  }

  img {
    width: 30px;
  }

  input[type='radio']:checked + label {
    background: var(--sunset);
  }
`
