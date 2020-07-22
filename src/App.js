import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import * as ROUTES from '../src/constants/routes'
import Navigation from './components/Navigation/Navigation'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import { calculateFootprintPerTransportionType } from './components/utils/calculateFootprintPerTransportationType'
import { calculateTotalFootprintSum } from './components/utils/calculateTotalFootprintSum'
import { getFromStorage, saveToStorage } from './components/utils/handleStorage'
import { APP_STORAGE_KEYS } from './components/utils/storageKeys'
import useDeviceDetect from './components/utils/useDeviceDetect'
import FootprintHistoryPage from './pages/FootprintHistoryPage/FootprintHistoryPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import SportsActivitiesPage from './pages/SportsActivitiesPage/SportsActivitiesPage'
import TripsPage from './pages/TripsPage/TripsPage'

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
    const historicCarbonFootprint = getFromStorage(
      APP_STORAGE_KEYS.footprintHistory
    )

    historicCarbonFootprint && setCarbonFootprint(historicCarbonFootprint)

    const historicTotalCarbonFootprint = getFromStorage(
      APP_STORAGE_KEYS.footprintTotal
    )

    const historyFootprintPerTransportationType = getFromStorage(
      APP_STORAGE_KEYS.footprintPerTransportType
    )

    setTotalCarbonFootprint(historicTotalCarbonFootprint)
    setFootprintPerTransportationType(
      historyFootprintPerTransportationType || []
    )
  }, [])

  useEffect(() => {
    saveToStorage(APP_STORAGE_KEYS.footprintHistory, carbonFootprint)
    setTotalCarbonFootprint(calculateTotalFootprintSum(carbonFootprint))

    saveToStorage(APP_STORAGE_KEYS.footprintTotal, totalCarbonFootprint)

    saveToStorage(
      APP_STORAGE_KEYS.footprintPerTransportType,
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
        <Route exact path={ROUTES.HOME}>
          <TripsPage
            updateCarbonFootprint={updateCarbonFootprint}
            updateFootprintPerTransportationType={
              updateFootprintPerTransportationType
            }
          />
        </Route>
        <Route path={ROUTES.ADD_ACTIVITY}>
          <SportsActivitiesPage />
        </Route>
        <Route path={ROUTES.FOOTPRINT_HISTORY}>
          <FootprintHistoryPage
            footprintPerTransportationType={footprintPerTransportationType}
          />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUpPage />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          Login
        </Route>
        <Route exact path={ROUTES.PROFILE}>
          Profile
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
