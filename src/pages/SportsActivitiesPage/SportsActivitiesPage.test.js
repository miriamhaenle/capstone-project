import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import SportsActivitiesPage from './SportsActivitiesPage'
import { render, screen } from '@testing-library/react'

describe('Sports Activities page', () => {
  it('renders the page', () => {
    const renderedPage = render(<SportsActivitiesPage />)
    expect(renderedPage).toBeTruthy()
  })

  it('should render the form with sportsType selection on page', () => {
    render(<SportsActivitiesPage />)
    expect(screen.getByText('Select sports type')).toBeInTheDocument()
  })
})
