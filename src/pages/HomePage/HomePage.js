import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import AuthUserContext from 'components/auth/AuthUserContext'
import Header from 'components/Header/Header'
import Navigation from 'components/Navigation/Navigation'
import SumCarbonFootPrint from 'components/SumCarbonFootprint/SumCarbonFootprint'
import * as ROUTES from 'constants/routes'
import homeIcon from 'images/sustainable.svg'
import useDeviceDetect from 'services/useDeviceDetect'
import SportsActivitiesPage from '../SportsActivitiesPage/SportsActivitiesPage'
import TripsPage from '../TripsPage/TripsPage'
import StateContext from 'states/StateContext'

export default function HomePage({ toggleTheme, theme }) {
  const { user } = useContext(AuthUserContext)
  const { totalCarbonFootprint } = useContext(StateContext)

  const { isMobile } = useDeviceDetect()
  const [bubbleStatus, setBubbleStatus] = useState({
    active: false,
    timestamp: Date.now(),
  })
  const history = useHistory()
  let location = useLocation()

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />

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
            (typeof totalCarbonFootprint === 'number' &&
              totalCarbonFootprint.toFixed(2)) ||
            0
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
          <h4>Welcome {user.displayName}</h4>
          <p>
            Start tracking your travels for events or training camps and see how
            they impact your carbon footprint.
          </p>
          <img src={homeIcon} alt="cyclist" />
        </StyledWelcomeMessage>
      ) : null}
      <Switch>
        <Route path={ROUTES.ADD_TRIP}>
          <TripsPage />
        </Route>
        <Route path={ROUTES.ADD_ACTIVITY}>
          <SportsActivitiesPage />
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

HomePage.propTypes = {
  initialFootprintValue: PropTypes.number,
  totalCarbonFootprint: PropTypes.number,
  updateCarbonFootprint: PropTypes.func,
  updateFootprintPerTransportationType: PropTypes.func,
}

const StyledWelcomeMessage = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  img {
    width: 80px;
    align-self: center;
  }
`
