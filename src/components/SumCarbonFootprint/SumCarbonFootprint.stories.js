import React from 'react'
import SumCarbonFootprint from './SumCarbonFootprint'
import { withKnobs, object } from '@storybook/addon-knobs'

export default {
  title: 'Key Visual',
  component: SumCarbonFootprint,
  decorators: [withKnobs],
}

export const sumCarbonFootprintNoTransition = () => (
  <SumCarbonFootprint
    sumCarbonFootprint="1234"
    bubbleStatus={object('Toogle transition', {
      active: false,
      timestamp: Date.now(),
    })}
  ></SumCarbonFootprint>
)

export const sumCarbonFootprintWithTransition = () => (
  <SumCarbonFootprint
    sumCarbonFootprint="1234"
    bubbleStatus={object('Toggle transition', {
      active: true,
      timestamp: Date.now(),
    })}
  ></SumCarbonFootprint>
)
