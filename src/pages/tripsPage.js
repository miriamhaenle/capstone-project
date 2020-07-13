import React, { useState } from 'react'
import AddKilometersForm from '../components/AddKilometers/AddKilometersForm'
import { calculateCarbonEmission } from '../components/utils/calculateCarbonEmission'

export default function TripsPage({ updateCarbonFootprint }) {
  const [transportationType, setTransportationType] = useState('')

  return (
    <AddKilometersForm
      headline="Add new trip"
      paragraph="How many kilometers did it take you to get to your last race / training
        camp?"
      type="transportation"
      updateData={updateTransportationType}
      getKilometers={calculateAndUpdateCarbonEmission}
    ></AddKilometersForm>
  )
  function updateTransportationType(value) {
    setTransportationType(value)
  }

  async function calculateAndUpdateCarbonEmission({ distance }) {
    const carbonFootprint = await calculateCarbonEmission(
      distance,
      transportationType
    )
    updateCarbonFootprint(carbonFootprint)
  }
}
