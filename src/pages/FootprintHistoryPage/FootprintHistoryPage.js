import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DonutChart from 'components/DonutChart/DonutChart'
import { mapFootprintPerTransportTypeToDonutChartData } from 'components/DonutChart/mapFootprintPerTransportTypeToDonutChartData'
import * as ROUTES from 'constants/routes'

FootprintHistoryPage.propTypes = {
  footprintPerTransportationType: PropTypes.array,
}

export default function FootprintHistoryPage({
  footprintPerTransportationType,
}) {
  const [donutData, setDonutData] = useState([])

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
  background: ${({ theme }) => theme.historyBackground};
  color: ${({ theme }) => theme.textProfileRelated};
  height: 100vh;
  padding: 30px;

  h2 {
    font-family: var(--headlineFont);
    color: ${({ theme }) => theme.textProfileRelated};
  }

  a {
    color: ${({ theme }) => theme.textProfileRelated};
  }
  p {
    padding-top: 30px;
  }
`
