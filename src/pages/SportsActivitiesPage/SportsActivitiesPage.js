import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import AddKilometersForm from '../../components/AddKilometers/AddKilometersForm'
import { calculateCarbonEmission } from '../../services/calculateCarbonEmission'

export default function SportsActivitiesPage() {
  const [sportsType, setSportsType] = useState('swim')
  const [footPrintSaved, setFootPrintSaved] = useState(0)
  const Msg = () => (
    <ToastMessage data-cy="toast">
      <h6>Woho! </h6>
      <p>
        You saved <b>{footPrintSaved}kg CO2</b> through pure muscle strength in
        your {sportsType} session!
      </p>
    </ToastMessage>
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
    <AddKilometersForm
      headline="Add new activity"
      paragraph="How many kilometers did you move outside today?"
      updateData={updateSportsType}
      templateType="sportsType"
      getKilometers={calculateCarbonSaved}
      sportsType={sportsType}
    ></AddKilometersForm>
  )

  function updateSportsType(value) {
    setSportsType(value)
  }

  async function calculateCarbonSaved({ distance }) {
    const carbonFootprint = await calculateCarbonEmission(distance, 'anyCar')
    setFootPrintSaved(carbonFootprint)
  }
}

const ToastMessage = styled.div`
  padding: 2px;
  h6 {
    margin: 0;
    font-size: 15px;
    color: var(--woodland);
    padding: 5px 0;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`
