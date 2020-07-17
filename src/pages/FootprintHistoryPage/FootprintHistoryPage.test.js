import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import FootprintHistoryPage from './FootprintHistoryPage'
import { render, screen } from '@testing-library/react'
import DonutChart from '../../components/DonutChart/DonutChart'

describe('Footprint history page', () => {
  let renderedPage
  const mockDataArrayOfObjects = [
    { label: 'bus', y: 2 },
    { label: 'plane', y: 32 },
    { label: 'car', y: 222 },
    { label: 'train', y: 12 },
  ]
  beforeEach(() => {
    const history = createMemoryHistory()
    renderedPage = render(
      <Router history={history}>
        <FootprintHistoryPage footprintPerTransportationType={[]} />
      </Router>
    )
    renderedPage = render(
      <Router history={history}>
        <FootprintHistoryPage
          footprintPerTransportationType={mockDataArrayOfObjects}
        />
      </Router>
    )
  })

  it('should render the page', () => {
    expect(renderedPage).toBeTruthy()
  })
  it('should render text if no footprint data is present', () => {
    expect(
      screen.getByText('No data yet. Start tracking your trips!')
    ).toBeInTheDocument()
  })
  it('should render the chart when data is present', () => {
    expect(screen.getByTestId('donut-chart')).toBeInTheDocument()
  })
})
