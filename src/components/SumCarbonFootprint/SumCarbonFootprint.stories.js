import React from 'react'
import SumCarbonFootprint from './SumCarbonFootprint'

export default {
  title: 'Key Visual',
  component: SumCarbonFootprint,
}

export const sumCarbonFootprintNoTransition = () => (
  <SumCarbonFootprint
    sumCarbonFootprint="1234"
    bubbleStatus={{
      active: false,
      timestamp: Date.now(),
    }}
  ></SumCarbonFootprint>
)

export const sumCarbonFootprintWithTransition = () => (
  <SumCarbonFootprint
    sumCarbonFootprint="1234"
    bubbleStatus={{
      active: true,
      timestamp: Date.now(),
    }}
  ></SumCarbonFootprint>
)
