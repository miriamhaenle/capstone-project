import React from 'react'
import DonutChart from './DonutChart'
import { render, screen } from '@testing-library/react'

const mockDataObject = { label: 'car', y: 2 }
const mockDataArrayOfObjects = [
  { label: 'car', y: 2 },
  { label: 'bus', y: 32 },
  { label: 'train', y: 222 },
  { label: 'plane', y: 12 },
]

describe('Donut chart', () => {
  it('should render the chart', () => {
    render(<DonutChart footprintData={[mockDataObject]} />)
    expect(screen.getByTestId('donut-chart')).toBeInTheDocument()
  })

  it('should render one label when one data set is present', () => {
    render(<DonutChart footprintData={[mockDataObject]} />)
    expect(screen.getByRole('list').childElementCount).toBe(1)
  })

  it('should render 4 labels when all objects are present', () => {
    render(<DonutChart footprintData={mockDataArrayOfObjects} />)
    expect(screen.getByRole('list').childElementCount).toBe(4)
  })

  it('should render the component with empty array', () => {
    render(<DonutChart footprintData={[]} />)
    expect(screen.getByTestId('donut-chart')).toBeInTheDocument()
  })
  it('should not render the labels when no data is present', () => {
    render(<DonutChart footprintData={[]} />)
    expect(screen.getByRole('list').childElementCount).toBe(0)
  })
})
