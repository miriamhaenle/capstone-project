import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import SportTypes from '../SportTypes/SportTypes'
import { render, screen } from '@testing-library/react'

describe('Sports Types selection', () => {
  it('renders the component', () => {
    const renderedComponent = render(<SportTypes />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the swim button', () => {
    render(<SportTypes />)
    expect(screen.queryAllByLabelText('swim')).toBeTruthy()
  })

  it('should render the bike button', () => {
    render(<SportTypes />)
    expect(screen.queryAllByLabelText('bike')).toBeTruthy()
  })

  it('should render the run button', () => {
    render(<SportTypes />)
    expect(screen.queryAllByLabelText('run')).toBeTruthy()
  })
})
