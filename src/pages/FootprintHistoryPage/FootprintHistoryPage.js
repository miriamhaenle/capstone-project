import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DonutChart from '../../components/DonutChart/DonutChart'
import { Link, useHistory } from 'react-router-dom'
import { mapFootprintPerTransportTypeToDonutChartData } from '../../components/DonutChart/mapFootprintPerTransportTypeToDonutChartData'
import * as ROUTES from '../../constants/routes'
import useDeviceDetect from '../../services/useDeviceDetect'

FootprintHistoryPage.propTypes = {
  footprintPerTransportationType: PropTypes.array,
}

export default function FootprintHistoryPage({
  footprintPerTransportationType,
}) {
  const [donutData, setDonutData] = useState([])
  const [backButtonClicked, setBackButtonClicked] = useState({
    active: false,
    timestamp: Date.now(),
  })
  const { isMobile } = useDeviceDetect()
  const history = useHistory()

  useEffect(() => {
    const donutData = (footprintPerTransportationType || []).map((footprint) =>
      mapFootprintPerTransportTypeToDonutChartData(footprint)
    )
    setDonutData(donutData)
  }, [footprintPerTransportationType])

  return (
    <StyledSection backButtonClicked={backButtonClicked.active}>
      <Link to={ROUTES.ADD_TRIP}>
        <span onTouchStart={startTransition} onTouchEnd={endTransition}>
          Go back
        </span>
      </Link>
      <h2>Breakdown of your carbon footprint</h2>
      {donutData.length >= 1 ? (
        <DonutChart footprintData={donutData} />
      ) : (
        <p>No data yet. Start tracking your trips!</p>
      )}
    </StyledSection>
  )
  function startTransition() {
    setBackButtonClicked({ active: true, timestamp: Date.now() })
  }

  function endTransition() {
    if (shouldNavigate(setBackButtonClicked.timestamp)) {
      history.push(ROUTES.HOME)
    }
    setBackButtonClicked({ active: false, timestamp: Date.now() })
  }

  function shouldNavigate(timeButtonClicked) {
    if (isMobile) {
      return Date.now()
    }
    return Date.now() - timeButtonClicked > 50
  }
}

const StyledSection = styled.main`
  background: var(--sand);
  height: 100vh;
  padding: 30px;
  animation: ${(props) =>
    props.backButtonClicked ? 'shrink 500ms forwards' : 'none'};

  @keyframes shrink {
    0% {
      background: var(--sand);
      color: var(--sand);
    }

    100% {
      background: var(--woodland);
      color: var(--sand);
      transform: scale(0);
    }
  }
  h2 {
    font-family: var(--headlineFont);
  }

  a {
    color: var(--woodland);
  }
  p {
    padding-top: 30px;
  }
`
