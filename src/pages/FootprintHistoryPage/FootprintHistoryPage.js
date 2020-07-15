import React from 'react'
import styled from 'styled-components'
import DonutChart from '../../components/DonutChart/DonutChart'

export default function FootprintHistoryPage() {
  const footprintData = [
    { label: 'car', y: 8 },
    { label: 'bus', y: 20 },
    { label: 'train', y: 100 },
    { label: 'plane', y: 300 },
  ]

  return <DonutChart footprintData={footprintData} />
}
