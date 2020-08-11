import React, { useContext, useState } from 'react'
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import AuthUserContext from '../../components/auth/AuthUserContext'
import Navigation from '../../components/Navigation/Navigation'
import SumCarbonFootPrint from '../../components/SumCarbonFootprint/SumCarbonFootprint'
import useDeviceDetect from '../../services/useDeviceDetect'
import * as ROUTES from '../../constants/routes'
import settings from '../../images/settings.svg'
import homeIcon from '../../images/sustainable.svg'
import SportsActivitiesPage from '../SportsActivitiesPage/SportsActivitiesPage'
import TripsPage from '../TripsPage/TripsPage'
import PropTypes from 'prop-types'
import ThemeToggler from '../../components/ThemeToggler/ThemeToggler'

export default function HomePage({
  initialFootprintValue,
  totalCarbonFootprint,
  updateCarbonFootprint,
  updateFootprintPerTransportationType,
  toggleTheme,
  theme,
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
        <ThemeToggler toggleTheme={toggleTheme} theme={theme} />

        <Link to={ROUTES.PROFILE}>
          <StyledImage src={settings} alt="profile" />
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
          sumCarbonFootprint={totalCarbonFootprint.toFixed(2) || 0}
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

HomePage.propTypes = {
  initialFootprintValue: PropTypes.number,
  totalCarbonFootprint: PropTypes.number,
  updateCarbonFootprint: PropTypes.func,
  updateFootprintPerTransportationType: PropTypes.func,
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    padding: 20px;
  }
`
const StyledImage = styled.img`
  width: 30px;
  :hover {
    transform: rotate(90deg);
  }
  :active {
    transform: rotate(180deg);
  }
`

const StyledWelcomeMessage = styled.div`
  color: var(--sand);
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  img {
    width: 80px;
    align-self: center;
  }
`
