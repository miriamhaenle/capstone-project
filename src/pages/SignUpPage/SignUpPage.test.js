import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import SignUpPage from './SignUpPage'

describe('Sign up page', () => {
  let renderedPage

  beforeEach(() => {
    renderedPage = render(<SignUpPage />)
  })

  it('should render the page', () => {
    expect(renderedPage).toBeTruthy()
  })
  it('should render the headline', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
