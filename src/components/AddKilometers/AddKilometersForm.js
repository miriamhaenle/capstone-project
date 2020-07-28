import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import useForm from '../utils/useForm'
import TransportationTypes from '../TransportationTypes/TransportationTypes'
import SportTypes from '../SportTypes/SportTypes'

export default function AddKilometersForm({
  paragraph,
  type,
  updateData,
  getKilometers,
  transportationType,
  sportsType,
}) {
  const [values, handleChange, handleSubmit] = useForm(getKilometers)

  const getSelectionTemplate = (type) => {
    switch (type) {
      case 'sportsType':
        return (
          <SportTypes
            name="sportsType"
            updateSportsType={updateData}
            sportsType={sportsType}
          ></SportTypes>
        )

      default:
        return (
          <TransportationTypes
            updateTransportationType={updateData}
            data-test="child"
            name="transportationType"
            transportationType={transportationType}
          ></TransportationTypes>
        )
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        {getSelectionTemplate(type)}
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
          disabled={values.distance >= 0.1 ? false : true}
          text="Add"
          onClick={scrollToTop}
        />
      </StyledForm>
    </>
  )

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
AddKilometersForm.propTypes = {
  paragraph: PropTypes.string,
  type: PropTypes.string,
  updateData: PropTypes.func,
  getKilometers: PropTypes.func,
  transportationType: PropTypes.string,
  sportsType: PropTypes.string,
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
  }

  label {
    padding: 30px 0;
  }
`
const KilometerInput = styled.input`
  border: none;
  border-radius: 3px;
  width: 315px;
  background: var(--sand);
  color: var(--dusk);
  margin: 10px 0;
  padding: 9px;
`
