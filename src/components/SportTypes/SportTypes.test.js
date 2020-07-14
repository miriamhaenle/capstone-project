import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import SportTypes from '../SportTypes/SportTypes'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Sports Types selection', () => {
  it('renders the component', () => {
    const renderedComponent = render(<SportTypes />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the swim button', () => {
    render(<SportTypes />)
    expect(screen.getAllByRole('img', 'swim')).toBeTruthy()
  })

  it('should render the bike button', () => {
    render(<SportTypes />)
    expect(screen.getAllByRole('img', 'bike')).toBeTruthy()
  })

  it('should render the run button', () => {
    render(<SportTypes />)
    expect(screen.getAllByRole('img', 'run')).toBeTruthy()
  })

  it('should render all 3 buttons', () => {
    render(<SportTypes />)
    expect(screen.getAllByRole('img').length).toBe(3)
  })
})
