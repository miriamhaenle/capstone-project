import React, { useState, useEffect } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import tripsPage from './pages/tripsPage'
import sportsActivitiesPage from './pages/sportsActivitiesPage'
import AddKilometersForm from './components/AddKilometers/AddKilometersForm'
import { calculateTotalFootprintSum } from './components/utils/calculateTotalFootprintSum'

export default function App() {
  const initialFootprintValue = 0
  const [carbonFootprint, setCarbonFootprint] = useState([
    initialFootprintValue,
  ])
  const [totalCarbonFootprint, setTotalCarbonFootprint] = useState(
    initialFootprintValue
  )

  useEffect(() => {
    const historicCarbonFootprint = JSON.parse(
      localStorage.getItem('Carbon Footprint History')
    )
    historicCarbonFootprint && setCarbonFootprint(historicCarbonFootprint)
    const historicTotalCarbonFootprint = JSON.parse(
      localStorage.getItem('Total Carbon Footprint')
    )
    setTotalCarbonFootprint(historicTotalCarbonFootprint)
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'Carbon Footprint History',
      JSON.stringify(carbonFootprint)
    )
    setTotalCarbonFootprint(calculateTotalFootprintSum(carbonFootprint))

    localStorage.setItem(
      'Total Carbon Footprint',
      JSON.stringify(totalCarbonFootprint)
    )
  }, [carbonFootprint, totalCarbonFootprint])

  return (
    <main>
      <SumCarbonFootPrint
        sumCarbonFootprint={
          totalCarbonFootprint.toFixed(2) || initialFootprintValue
        }
      ></SumCarbonFootPrint>

      <AddKilometersForm
        headline="Add new trip"
        paragraph="How many kilometers did it take you to get to your last race / training
        camp?"
        updateCarbonFootprint={updateCarbonFootprint}
      ></AddKilometersForm>
    </main>
  )
  function updateCarbonFootprint(value) {
    setCarbonFootprint([...carbonFootprint, value])
  }
}
