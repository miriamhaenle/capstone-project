import React from 'react'
import FootprintHistoryPage from './FootprintHistoryPage'

export default {
  title: 'Footprint History Page',
  component: FootprintHistoryPage,
}

export const footprintHistoryPage = () => (
  <FootprintHistoryPage
    data={[
      { label: 'car', y: 90 },
      { label: 'bus', y: 200 },
      { label: 'train', y: 300 },
      { label: 'plane', y: 400 },
    ]}
  />
)
