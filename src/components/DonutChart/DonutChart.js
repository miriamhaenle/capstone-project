import React from 'react'
import styled from 'styled-components'
import { VictoryPie } from 'victory'
import { mapTripToCarbonActivityTypeToDonutChartLabel } from '../utils/mappings/mapTripToCarbonActivityTypeToDonutChartLabel'

export default function DonutChart({ footprintData }) {
  const colors = [
    'var(--seafoam)',
    'var(-dusk)',
    'var(--sunset)',
    'var(--woodland)',
  ]

  return (
    <ChartContainer data-testid="donut-chart">
      <VictoryPie
        data={footprintData}
        colorScale={colors}
        innerRadius={85}
        padAngle={2}
        style={{
          labels: {
            visibility: 'hidden',
          },
        }}
        animate={{ duration: 2000 }}
        labelRadius={({ innerRadius }) => innerRadius + 65}
      />
      <ul>
        {footprintData.map((data) => (
          <FootprintLegendListItem key={data.label}>
            {mapTripToCarbonActivityTypeToDonutChartLabel(data.label)}
          </FootprintLegendListItem>
        ))}
      </ul>
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  background: var(--sand);

  height: 228px;
  margin: 0 auto;
  width: 228px;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    background: var(--sand);
  }
`
const FootprintLegendListItem = styled.li`
  display: inline-block;
  list-style: none;
  border-radius: 3px;
  width: 60px;
  padding: 2px;
  text-align: center;
  margin: 20px 10px;

  :first-child {
    background: var(--seafoam);
  }
  :nth-child(2) {
    background: var(--dusk);
    color: var(--sand);
  }
  :nth-child(3) {
    background: var(--sunset);
  }
  :nth-child(4) {
    background: var(--woodland);
    color: var(--sand);
  }
`
