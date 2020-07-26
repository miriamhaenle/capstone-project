import React, { useContext, useState } from 'react'
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import AuthUserContext from '../../components/auth/AuthUserContext'
import Navigation from '../../components/Navigation/Navigation'
import SumCarbonFootPrint from '../../components/SumCarbonFootprint/SumCarbonFootprint'
import useDeviceDetect from '../../components/utils/useDeviceDetect'
import * as ROUTES from '../../constants/routes'
import profileIcon from '../../images/profileIcon.svg'
import SportsActivitiesPage from '../SportsActivitiesPage/SportsActivitiesPage'
import TripsPage from '../TripsPage/TripsPage'

export default function HomePage({
  initialFootprintValue,
  totalCarbonFootprint,
  updateCarbonFootprint,
  updateFootprintPerTransportationType,
}) {
  const { user } = useContext(AuthUserContext)
  const { isMobile } = useDeviceDetect()
  const [bubbleStatus, setBubbleStatus] = useState({
    active: false,
    timestamp: Date.now(),
  })
  const history = useHistory()
  let location = useLocation()

  return (
    <>
      <StyledHeader>
        <Link to={ROUTES.PROFILE}>
          <StyledImage src={profileIcon} alt="profile" />
        </Link>
      </StyledHeader>

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
      {location.pathname !== ROUTES.ADD_TRIP &&
      location.pathname !== ROUTES.ADD_ACTIVITY &&
      user ? (
        <StyledWelcomeMessage>
          Welcome {user.displayName}
          <p>Start tracking your trips and activities!</p>
        </StyledWelcomeMessage>
      ) : null}
      <Switch>
        <Route path={ROUTES.ADD_TRIP}>
          <TripsPage
            updateCarbonFootprint={updateCarbonFootprint}
            updateFootprintPerTransportationType={
              updateFootprintPerTransportationType
            }
          />
        </Route>
        <Route path={ROUTES.ADD_ACTIVITY}>
          <SportsActivitiesPage
            totalCarbonFootprint={totalCarbonFootprint}
            initialFootprintValue={initialFootprintValue}
            bubbleStatus
            isMobile
          />
        </Route>
      </Switch>
    </>
  )

  function startTransition() {
    setBubbleStatus({ active: true, timestamp: Date.now() })
  }

  function endTransition() {
    if (shouldNavigate(bubbleStatus.timestamp)) {
      history.push(ROUTES.FOOTPRINT_HISTORY)
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

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  a {
    padding: 20px;
  }
`
const StyledImage = styled.img`
  width: 30px;
`

const StyledWelcomeMessage = styled.p`
  color: var(--sand);
  padding: 30px;
`
