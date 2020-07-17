import React from 'react'
import FootprintHistoryPage from './FootprintHistoryPage'
import { withKnobs, object } from '@storybook/addon-knobs'

export default {
  title: 'Footprint History Page',
  component: FootprintHistoryPage,
  decorators: [withKnobs],
}
const donutData = [
  { label: 'car', y: 80 },
  { label: 'bus', y: 20 },
  { label: 'train', y: 100 },
  { label: 'plane', y: 300 },
]
export const footprintHistoryPageNoData = () => (
  <FootprintHistoryPage footprintData={[]} />
)

export const footprintHistoryPageWithData = ({ callback }) => (
  <FootprintHistoryPage
    footprintPerTransportationType={object('footprint data', donutData)}
  />
)
