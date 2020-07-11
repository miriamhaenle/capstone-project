import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import TransportationTypes from './TransportationTypes'
import { render, screen } from '@testing-library/react'

describe('Transportation Types selection', () => {
  it('renders the component', () => {
    const renderedComponent = render(<TransportationTypes />)
    expect(renderedComponent).toBeTruthy()
  })
  it('should render the car button', () => {
    render(<TransportationTypes />)
    expect(screen.getAllByRole('img', 'car')).toBeTruthy()
  })
  it('should render the bus button', () => {
    render(<TransportationTypes />)
    expect(screen.getAllByRole('img', 'bus')).toBeTruthy()
  })
  it('should render the train button', () => {
    render(<TransportationTypes />)
    expect(screen.getAllByRole('img', 'train')).toBeTruthy()
  })
  it('should render the plane button', () => {
    render(<TransportationTypes />)
    expect(screen.getAllByRole('img', 'plane')).toBeTruthy()
  })
})
