import React from 'react'
import styled from 'styled-components'
import DonutChart from '../../components/DonutChart/DonutChart'
import { Link } from 'react-router-dom'

export default function FootprintHistoryPage() {
  const footprintData = [
    { label: 'car', y: 80 },
    { label: 'bus', y: 50 },
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

  h2 {
    font-family: var(--headlineFont);
  }

  a {
    color: var(--woodland);
  }
`
