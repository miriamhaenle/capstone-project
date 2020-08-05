import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DonutChart from '../../components/DonutChart/DonutChart'
import { Link, useHistory } from 'react-router-dom'
import { mapFootprintPerTransportTypeToDonutChartData } from '../../components/DonutChart/mapFootprintPerTransportTypeToDonutChartData'
import * as ROUTES from '../../constants/routes'

FootprintHistoryPage.propTypes = {
  footprintPerTransportationType: PropTypes.array,
}

export default function FootprintHistoryPage({
  footprintPerTransportationType,
}) {
  const [donutData, setDonutData] = useState([])

  const history = useHistory()

  useEffect(() => {
    const donutData = (footprintPerTransportationType || []).map((footprint) =>
      mapFootprintPerTransportTypeToDonutChartData(footprint)
    )
    setDonutData(donutData)
  }, [footprintPerTransportationType])

  return (
    <StyledSection>
      <Link to={ROUTES.ADD_TRIP}>
        <span>Go back</span>
      </Link>
      <h2>Breakdown of your carbon footprint</h2>
      {donutData.length >= 1 ? (
        <DonutChart footprintData={donutData} />
      ) : (
        <p>No data yet. Start tracking your trips!</p>
      )}
    </StyledSection>
  )
}

const StyledSection = styled.main`
  background: var(--sand);
  height: 100vh;
  padding: 30px;

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
