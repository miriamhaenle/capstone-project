import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import SignIn from './SignIn'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('Sign In page', () => {
  let renderedPage
  beforeEach(() => {
    const history = createMemoryHistory()

    renderedPage = render(
      <Router history={history}>
        <SignIn />
      </Router>
    )
  })

  it('should render the page', () => {
    expect(renderedPage).toBeTruthy()
  })

  it('should render the headline', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
