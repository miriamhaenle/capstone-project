import React, { useState } from 'react'
import AddKilometersForm from '../components/AddKilometers/AddKilometersForm'

export default function SportsActivitiesPage() {
  const [sportsType, setSportsType] = useState('')

  return (
    <AddKilometersForm
      headline="Add new activity"
      paragraph="How many kilometers did you move outside today?"
      updateData={updateSportsType}
      type="sportsType"
      getKilometers={calculateCarbonSaved}
    ></AddKilometersForm>
  )

  function updateSportsType(value) {
    console.log(value)
    setSportsType(value)
  }

  function calculateCarbonSaved({ distance }) {
    console.log(distance, sportsType)
  }
}
