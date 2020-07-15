import React from 'react'
import DonutChart from './DonutChart'
import { withKnobs, object, array } from '@storybook/addon-knobs'

export default {
  title: 'Donut Chart',
  component: DonutChart,
  decorators: [withKnobs],
}

const footprintData = [
  { x: 'car', y: 890, label: 'car' },
  { x: 'bus', y: 200, label: 'bus' },
  { x: 'train', y: 100, label: 'train' },
  { x: 'plane', y: 300, label: 'plane' },
]

export const donutType = () => (
  <DonutChart footprintData={object('footprint data', footprintData)} />
)
