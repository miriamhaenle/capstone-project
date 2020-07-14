import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import TripsPage from './TripsPage'
import { render, screen } from '@testing-library/react'

describe('Trips page', () => {
  it('renders the page', () => {
    const renderedPage = render(<TripsPage />)
    expect(renderedPage).toBeTruthy()
  })
  it('should render the form with transporation type selection', () => {
    render(<TripsPage />)
    expect(
      screen.getByText('Select mode of transportation')
    ).toBeInTheDocument()
  })
  it('should render 4 selection buttons', () => {
    render(<TripsPage />)
    expect(screen.getAllByRole('img').length).toBe(4)
  })
})
