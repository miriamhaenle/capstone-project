import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AddKilometersForm from '../../components/AddKilometers/AddKilometersForm'
import { calculateCarbonEmission } from '../../components/utils/calculateCarbonEmission'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SumCarbonFootPrint from '../../components/SumCarbonFootprint/SumCarbonFootprint'
import Navigation from '../../components/Navigation/Navigation'

export default function SportsActivitiesPage({
  totalCarbonFootprint,
  initialFootprintValue,
  bubbleStatus,
  isMobile,
}) {
  const [sportsType, setSportsType] = useState('swim')
  const [footPrintSaved, setFootPrintSaved] = useState(0)
  const Msg = () => (
    <div data-cy="toast">
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
      <SumCarbonFootPrint
        sumCarbonFootprint={
          totalCarbonFootprint.toFixed(2) || initialFootprintValue
        }
        bubbleStatus={bubbleStatus}
        isMobile={isMobile}
      />
      <Navigation />

      <AddKilometersForm
        headline="Add new activity"
        paragraph="How many kilometers did you move outside today?"
        updateData={updateSportsType}
        type="sportsType"
        getKilometers={calculateCarbonSaved}
        sportsType={sportsType}
      ></AddKilometersForm>
    </>
  )

  function updateSportsType(value) {
    setSportsType(value)
  }

  async function calculateCarbonSaved({ distance }) {
    const carbonFootprint = await calculateCarbonEmission(distance, 'anyCar')
    setFootPrintSaved(carbonFootprint)
  }
}

const StyledToastHeader = styled.h6`
  margin: 0;
  font-size: 15px;
  color: var(--woodland);
`

const StyledToastText = styled.p`
  margin: 0;
  font-size: 12px;
`
