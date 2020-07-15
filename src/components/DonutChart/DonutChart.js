import React from 'react'
import styled from 'styled-components'
import { VictoryPie } from 'victory'

export default function DonutChart({ footprintData }) {
  const colors = ['#A2D5D8', '#091A1A', '#F7EEDF', '#164036']

  return (
    <ChartContainer>
      <VictoryPie data={footprintData} colorScale={colors} innerRadius={110} />
    </ChartContainer>
  )
}

const ChartContainer = styled.section`
  align-items: center;
  background: var(--sunset);
  border: none;
  border-radius: 50%;
  color: var(--sand);
  display: flex;
  font-family: var(--headlineFont);
  font-size: 30px;
  height: 228px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
  width: 228px;
  overflow: hidden;
`
