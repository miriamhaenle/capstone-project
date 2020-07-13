import React, { useState } from 'react'
import AddKilometersForm from '../components/AddKilometers/AddKilometersForm'
import { calculateCarbonEmission } from '../components/utils/calculateCarbonEmission'

export default function SportsActivitiesPage() {
  const [sportsType, setSportsType] = useState('')
  const [footPrintSaved, setfootPrintSaved] = useState(0)

  return (
    <>
      <p>You're awesome! You just saved {footPrintSaved} kg CO2</p>

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
    console.log(distance, sportsType, carbonFootprint)
    setfootPrintSaved(carbonFootprint)
  }
}
