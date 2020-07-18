import React, { useState, useEffect } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import TripsPage from './pages/TripsPage/TripsPage'
import SportsActivitiesPage from './pages/SportsActivitiesPage/SportsActivitiesPage'
import Navigation from './components/Navigation/Navigation'
import FootprintHistoryPage from './pages/FootprintHistoryPage/FootprintHistoryPage'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { calculateTotalFootprintSum } from './components/utils/calculateTotalFootprintSum'
import { calculateFootprintPerTransportionType } from './components/utils/calculateFootprintPerTransportationType'

export default function App() {
  const initialFootprintValue = 0

  const [carbonFootprint, setCarbonFootprint] = useState([
    initialFootprintValue,
  ])
  const [totalCarbonFootprint, setTotalCarbonFootprint] = useState(
    initialFootprintValue
  )
  const [
    footprintPerTransportationType,
    setFootprintPerTransportationType,
  ] = useState([])

  const [bubbleIsClicked, setBubbleIsClicked] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const historicCarbonFootprint = JSON.parse(
      localStorage.getItem('Carbon Footprint History')
    )
    historicCarbonFootprint && setCarbonFootprint(historicCarbonFootprint)
    const historicTotalCarbonFootprint = JSON.parse(
      localStorage.getItem('Total Carbon Footprint')
    )
    const historyFootprintPerTransportationType = JSON.parse(
      localStorage.getItem('Footprint per Transportation Type')
    )
    setTotalCarbonFootprint(historicTotalCarbonFootprint)
    setFootprintPerTransportationType(historyFootprintPerTransportationType)
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

    localStorage.setItem(
      'Footprint per Transportation Type',
      JSON.stringify(footprintPerTransportationType)
    )
  }, [carbonFootprint, totalCarbonFootprint, footprintPerTransportationType])

  return (
    <main>
      <ToastContainer autoClose={6000} draggablePercent={60} />

      {location.pathname !== '/footprint-history' && (
        <>
          <Link
            to="/footprint-history"
            style={{ textDecoration: 'none' }}
            onClick={startTransition}
          >
            <SumCarbonFootPrint
              sumCarbonFootprint={
                totalCarbonFootprint.toFixed(2) || initialFootprintValue
              }
            />
          </Link>
          <Navigation />
        </>
      )}

      <Switch>
        <Route exact path="/">
          <TripsPage
            updateCarbonFootprint={updateCarbonFootprint}
            updateFootprintPerTransportationType={
              updateFootprintPerTransportationType
            }
          />
        </Route>
        <Route path="/add-activity">
          <SportsActivitiesPage />
        </Route>
        <Route path="/footprint-history">
          <FootprintHistoryPage
            footprintPerTransportationType={footprintPerTransportationType}
          />
        </Route>
      </Switch>
    </main>
  )
  function updateCarbonFootprint(value) {
    setCarbonFootprint([...carbonFootprint, value])
  }

  function updateFootprintPerTransportationType(type, sum) {
    setFootprintPerTransportationType(
      calculateFootprintPerTransportionType(footprintPerTransportationType, {
        type,
        sum,
      })
    )
  }
  function startTransition() {
    setBubbleIsClicked(true)
    console.log('Transition time', bubbleIsClicked)
  }
}
