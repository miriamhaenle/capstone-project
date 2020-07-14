import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import AddKilometersForm from '../components/AddKilometers/AddKilometersForm'
import { calculateCarbonEmission } from '../components/utils/calculateCarbonEmission'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SportsActivitiesPage() {
  const [sportsType, setSportsType] = useState('')
  const [footPrintSaved, setfootPrintSaved] = useState(0)
  const Msg = () => (
    <div>
      <StyledToastHeader>Woho! </StyledToastHeader>
      <StyledToastText>
        You saved <b>{footPrintSaved}kg CO2</b> through pure muscle strength in
        your {sportsType} session!
      </StyledToastText>
    </div>
  )

  useEffect(() => {
    footPrintSaved &&
      toast(<Msg />, {
        position: toast.POSITION.TOP_CENTER,
        draggablePercent: 60,
        style: {},
      })
  }, [footPrintSaved])

  return (
    <>
      <AddKilometersForm
        headline="Add new activity"
        paragraph="How many kilometers did you move outside today?"
        updateData={updateSportsType}
        type="sportsType"
        getKilometers={calculateCarbonSaved}
      ></AddKilometersForm>
    </>
  )

  function updateSportsType(value) {
    setSportsType(value)
  }

  async function calculateCarbonSaved({ distance }) {
    const carbonFootprint = await calculateCarbonEmission(distance, 'anyCar')

    setfootPrintSaved(carbonFootprint)
  }
}

const StyledToastHeader = styled.h6`
  margin: 0;
  font-size: 15px;
  color: hotpink;
`

const StyledToastText = styled.p`
  margin: 0;
  font-size: 12px;
`
