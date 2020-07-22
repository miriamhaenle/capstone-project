import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import SumCarbonFootPrint from '../../components/SumCarbonFootprint/SumCarbonFootprint'
import useDeviceDetect from '../../components/utils/useDeviceDetect'
import TripsPage from '../TripsPage/TripsPage'

export default function HomePage({
  initialFootprintValue,
  totalCarbonFootprint,
  carbonFootprint,
  footprintPerTransportationType,
  updateCarbonFootprint,
  updateFootprintPerTransportationType,
}) {
  const { isMobile } = useDeviceDetect()

  const [bubbleStatus, setBubbleStatus] = useState({
    active: false,
    timestamp: Date.now(),
  })

  const location = useLocation()
  const history = useHistory()

  return (
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
      <TripsPage
        updateCarbonFootprint={updateCarbonFootprint}
        updateFootprintPerTransportationType={
          updateFootprintPerTransportationType
        }
      />
    </>
  )

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
