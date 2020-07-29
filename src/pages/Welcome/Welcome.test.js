import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import WelcomePage from './Welcome'

describe('Welcome page', () => {
  let renderedPage

  beforeEach(() => {
    const history = createMemoryHistory()
    renderedPage = render(
      <Router history={history}>
        <WelcomePage />
      </Router>
    )
  })
  it('should render the page', () => {
    expect(renderedPage).toBeTruthy()
  })

  it('should render the logo headline', async () => {
    const logoHeadline = await screen.getByTestId('logoHeadline')
    expect(logoHeadline).toBeTruthy()
  })

  it('should render the sign up button', () => {
    expect(screen.getAllByRole('button')[0]).toBeInTheDocument()
  })

  it('should render the sign in button', () => {
    expect(screen.getAllByRole('button')[1]).toBeInTheDocument()
  })
})
