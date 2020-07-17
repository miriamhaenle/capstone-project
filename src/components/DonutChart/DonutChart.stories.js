import React from 'react'
import DonutChart from './DonutChart'
import { withKnobs, object } from '@storybook/addon-knobs'

export default {
  title: 'Donut Chart',
  component: DonutChart,
  decorators: [withKnobs],
}

const footprintData = [
  { label: 'car', y: 80 },
  { label: 'bus', y: 20 },
  { label: 'train', y: 100 },
  { label: 'plane', y: 300 },
]

export const donutChart = () => (
  <DonutChart footprintData={object('footprint data', footprintData)} />
)
