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
    expect(screen.queryAllByLabelText('car')).toBeTruthy()
  })
  it('should render the bus button', () => {
    render(<TransportationTypes />)
    expect(screen.queryAllByLabelText('bus')).toBeTruthy()
  })
  it('should render the train button', () => {
    render(<TransportationTypes />)
    expect(screen.queryAllByLabelText('train')).toBeTruthy()
  })
  it('should render the plane button', () => {
    render(<TransportationTypes />)
    expect(screen.queryAllByLabelText('plane')).toBeTruthy()
  })
})
