import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DonutChart from '../../components/DonutChart/DonutChart'
import { Link } from 'react-router-dom'
import { mapTransportationTypeDataToDonutChartData } from '../../components/utils/mappings/mapTransportationTypeDataToDonutChartData'

export default function FootprintHistoryPage({
  footprintPerTransportationType,
}) {
  const [donutData, setDonutData] = useState([])

  useEffect(() => {
    const donutData = (footprintPerTransportationType || []).map((footprint) =>
      mapTransportationTypeDataToDonutChartData(footprint)
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
