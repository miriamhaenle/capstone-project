import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DonutChart from '../../components/DonutChart/DonutChart'
import { Link } from 'react-router-dom'

export default function FootprintHistoryPage({ data }) {
  const [footprintData, setFootprintData] = useState([])

  /*   const testData = [
    { label: 'car', y: 100 },
    { label: 'bus', y: 200 },
    { label: 'train', y: 300 },
    { label: 'plane', y: 400 },
  ] */

  useEffect(() => {
    const sum = mapDataForDonutChart()
    console.log({ sum })
    setFootprintData([
      {
        label: 'car',
        y: 299,
      },
      { label: 'bus', y: 200 },
      { label: 'train', y: 300 },
      { label: 'plane', y: 400 },
    ])
  }, [])

  function mapDataForDonutChart() {
    data.map((singleData) => {
      console.log({ inFunction: singleData.sum })
      return singleData.sum
    })
  }

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
