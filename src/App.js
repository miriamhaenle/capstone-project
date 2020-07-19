import React, { useState, useEffect } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import TripsPage from './pages/TripsPage/TripsPage'
import SportsActivitiesPage from './pages/SportsActivitiesPage/SportsActivitiesPage'
import Navigation from './components/Navigation/Navigation'
import FootprintHistoryPage from './pages/FootprintHistoryPage/FootprintHistoryPage'
import { Switch, Route, Link, useLocation, useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { calculateTotalFootprintSum } from './components/utils/calculateTotalFootprintSum'
import { calculateFootprintPerTransportionType } from './components/utils/calculateFootprintPerTransportationType'
import useDeviceDetect from './components/utils/useDeviceDetect'
import { saveToStorage, getFromStorage } from './components/utils/handleStorage'

export default function App() {
  const { isMobile } = useDeviceDetect()
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

  const [bubbleStatus, setBubbleStatus] = useState({
    active: false,
    timestamp: Date.now(),
  })
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const historicCarbonFootprint = getFromStorage('Carbon Footprint History')

    historicCarbonFootprint && setCarbonFootprint(historicCarbonFootprint)

    const historicTotalCarbonFootprint = getFromStorage(
      'Total Carbon Footprint'
    )

    const historyFootprintPerTransportationType = getFromStorage(
      'Footprint per Transportation Type'
    )

    setTotalCarbonFootprint(historicTotalCarbonFootprint)
    setFootprintPerTransportationType(
      historyFootprintPerTransportationType || []
    )
  }, [])

  useEffect(() => {
    saveToStorage('Carbon Footprint History', carbonFootprint)
    setTotalCarbonFootprint(calculateTotalFootprintSum(carbonFootprint))

    saveToStorage('Total Carbon Footprint', totalCarbonFootprint)

    saveToStorage(
      'Footprint per Transportation Type',
      footprintPerTransportationType
    )
  }, [carbonFootprint, totalCarbonFootprint, footprintPerTransportationType])

  return (
    <main>
      <ToastContainer autoClose={6000} draggablePercent={60} />

      {location.pathname !== '/footprint-history' && (
        <>
          <Link
            to=""
            style={{ textDecoration: 'none' }}
            onClick={(event) => event.preventDefault()}
            onTouchStart={startTransition}
            onTouchEnd={endTransition}
            onMouseDown={startTransition}
            onMouseUp={endTransition}
          >
            <SumCarbonFootPrint
              sumCarbonFootprint={
                totalCarbonFootprint.toFixed(2) || initialFootprintValue
              }
              bubbleStatus={bubbleStatus}
              isMobile={isMobile}
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
    setBubbleStatus({ active: true, timestamp: Date.now() })
  }

  function endTransition() {
    if (shouldNavigate(bubbleStatus.timestamp)) {
      history.push('/footprint-history')
    }
    setBubbleStatus({ active: false, timestamp: Date.now() })
  }

  function shouldNavigate(timeButtonClicked) {
    if (isMobile) {
      return Date.now()
    }
    return Date.now() - timeButtonClicked > 200
  }
}
