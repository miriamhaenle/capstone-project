import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import SumCarbonFootprint from './SumCarbonFootprint'
import { render, screen } from '@testing-library/react'

describe('SumCarbonFootprint', () => {
  it('renders the footprint component', () => {
    const renderedComponent = render(
      <SumCarbonFootprint
        bubbleStatus={{
          active: false,
          timestamp: Date.now(),
        }}
      />
    )
    expect(renderedComponent).toBeTruthy()
  })
  it('renders with carbon footprint numbers (child)', () => {
    const carbonFootprintSum = 90
    render(
      <SumCarbonFootprint
        bubbleStatus={{
          active: false,
          timestamp: Date.now(),
        }}
      >
        {carbonFootprintSum}
      </SumCarbonFootprint>
    )
    expect(screen.getByRole('note')).toBeInTheDocument()
  })
})
