import React, { useState, useEffect } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import TripsPage from './pages/tripsPage'
import SportsActivitiesPage from './pages/SpotsActivitiesPage'
import { calculateTotalFootprintSum } from './components/utils/calculateTotalFootprintSum'
import Navigation from './components/Navigation/Navigation'
import { Switch, Route } from 'react-router-dom'

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

      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <TripsPage updateCarbonFootprint={updateCarbonFootprint} />
        </Route>
        <Route path="/add-activity">
          <SportsActivitiesPage />
        </Route>
      </Switch>
    </main>
  )
  function updateCarbonFootprint(value) {
    setCarbonFootprint([...carbonFootprint, value])
  }
}
