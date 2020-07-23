import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import SignUpPage from './SignUpPage'

describe('Sign up page', () => {
  it('should render the page', () => {
    let history = createMemoryHistory()

    const renderedPage = render(
      <Router history={history}>
        <SignUpPage />
      </Router>
    )
    expect(renderedPage).toBeTruthy()
  })
  it('should render the headline', () => {
    const logoHeadline = screen.findByTestId('logoHeadline')
    expect(logoHeadline).toBeTruthy()
  })
})
