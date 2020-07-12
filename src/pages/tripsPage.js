import React, { useState } from 'react'
import AddKilometersForm from '../components/AddKilometers/AddKilometersForm'

export default function TripsPage({ updateCarbonFootprint }) {
  const [transportationType, setTransportationType] = useState('')

  return (
    <AddKilometersForm
      headline="Add new trip"
      paragraph="How many kilometers did it take you to get to your last race / training
        camp?"
      type="transportation"
      updateCarbonFootprint={updateCarbonFootprint}
    ></AddKilometersForm>
  )
  function updateTransportationType(value) {
    setTransportationType(value)
  }
}
