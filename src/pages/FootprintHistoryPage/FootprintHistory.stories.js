import React from 'react'
import FootprintHistoryPage from './FootprintHistoryPage'
import { withKnobs, object } from '@storybook/addon-knobs'

export default {
  title: 'Footprint History Page',
  component: FootprintHistoryPage,
  decorators: [withKnobs],
}
const footprintData = [
  { label: 'car', y: 80 },
  { label: 'bus', y: 20 },
  { label: 'train', y: 100 },
  { label: 'plane', y: 300 },
]
export const footprintHistoryPage = () => (
  <FootprintHistoryPage data={object('footprint data', footprintData)} />
)
