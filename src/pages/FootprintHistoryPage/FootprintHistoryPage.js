import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DonutChart from '../../components/DonutChart/DonutChart'
import { Link } from 'react-router-dom'
import { footprintPerTransportationTypeToDonutChartData } from '../../components/utils/mappings/footprintPerTransportationTypeToDonutChartData'

export default function FootprintHistoryPage({
  footprintPerTransportationType,
}) {
  const [donutData, setDonutData] = useState([])

  useEffect(() => {
    const donutData = (footprintPerTransportationType || []).map((footprint) =>
      footprintPerTransportationTypeToDonutChartData(footprint)
    )
    setDonutData(donutData)
  }, [footprintPerTransportationType])

  return (
    <StyledSection>
      <Link to="/">
        <span>Go Back</span>
      </Link>
      <h2>Breakdown of your carbon footprint</h2>
      {donutData.length >= 1 ? (
        <DonutChart footprintData={donutData} />
      ) : (
        'No data yet'
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
`
