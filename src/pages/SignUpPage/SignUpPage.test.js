import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
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
