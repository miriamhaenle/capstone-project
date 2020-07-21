import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Registration from './Register'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Registration form', () => {
  it('renders the form', () => {
    const renderedComponent = render(<Registration />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should load three input fields', () => {
    render(<Registration />)
    const inputFields = screen.findAllByRole('textbox')
    expect(inputFields).toHaveLength(3)
  })

  it('should render the register button', () => {
    render(<Registration />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render the terms and conditions text', () => {
    render(<Registration />)
    expect(screen.getByText('Terms and Conditions')).toBeInTheDocument()
  })

  it('should have a disabled button by default', () => {
    render(<Registration />)
    expect(screen.getByText('Register').closest('button')).toBeInTheDocument()
  })

  it('should be possible to write to input field', () => {
    render(<Registration />)
    userEvent.type(screen.getByRole('textbox', 'Jan Frodeno'))
    expect(screen.getByRole('textbox').toHaveValue('Jan Frodeno'))
  })
})
