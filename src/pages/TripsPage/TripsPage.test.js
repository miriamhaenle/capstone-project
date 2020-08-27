import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import TripsPage from './TripsPage'
import { render, screen } from '@testing-library/react'
import StateContext from 'states/StateContext'
import updateCarbonFootprint from 'services/updateCarbonFootprint'

describe('Trips page', () => {
  it('renders the page', () => {
    const renderedPage = render(<TripsPage />)
    expect(renderedPage).toBeTruthy()
  })
  it('should render the form with transporation type selection', () => {
    render(
      <StateContext.Provider
        value={
          (carbonFootprint,
          totalCarbonFootprint,
          footprintPerTransportationType,
          updateCarbonFootprint,
          updateFootprintPerTransportationType)
        }
      >
        <TripsPage />
      </StateContext.Provider>
    )
    expect(
      screen.getByText('Select mode of transportation')
    ).toBeInTheDocument()
  })
})
