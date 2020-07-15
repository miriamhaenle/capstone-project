import React from 'react'
import styled from 'styled-components'
import DonutChart from '../../components/DonutChart/DonutChart'
import { Link } from 'react-router-dom'

export default function FootprintHistoryPage() {
  const footprintData = [
    { label: 'car', y: 8 },
    { label: 'bus', y: 20 },
    { label: 'train', y: 100 },
    { label: 'plane', y: 300 },
  ]

  return (
    <StyledSection>
      <Link to="/">
        <span>Go Back</span>
      </Link>
      <h2>Breakdown of your carbon footprint</h2>

      <DonutChart footprintData={footprintData} />
    </StyledSection>
  )
}

const StyledSection = styled.main`
  background: var(--sand);
  height: 100vh;
  padding: 30px;
`
