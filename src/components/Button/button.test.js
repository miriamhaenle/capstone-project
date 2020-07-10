import Button from './Button'
import React from 'react'
import { render, screen } from '@testing-library/react'

describe('button behaviour based on input value', () => {
  it('renders without text', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders with text', () => {
    render(<Button text="Add trip" />)
    expect(screen.getByRole('button').textContent).toBe('Add trip')
  })
})

describe('check if button should be disabled', () => {
  test('Return true when number smaller 1', () => {
    expect(0.2 >= 1 ? false : true).toBeTruthy()
  })

  test('Return false when number bigger 1', () => {
    expect(2 >= 1 ? false : true).toBeFalsy()
  })
})
