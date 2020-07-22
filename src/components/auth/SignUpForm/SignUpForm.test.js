import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import SignUpForm from './SignUpForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Sign up form', () => {
  it('renders the form', () => {
    const renderedComponent = render(<SignUpForm />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should load three input fields', () => {
    render(<SignUpForm />)
    const inputFields = screen.findAllByRole('textbox')
    expect(inputFields).toHaveLength(3)
  })

  it('should render the register button', () => {
    render(<SignUpForm />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render the terms and conditions text', () => {
    render(<SignUpForm />)
    expect(screen.getByText('Terms and Conditions')).toBeInTheDocument()
  })

  it('should have a disabled button by default', () => {
    render(<SignUpForm />)
    expect(screen.getByText('Register').closest('button')).toBeInTheDocument()
  })

  it('should be possible to write to input field', () => {
    render(<SignUpForm />)
    userEvent.type(screen.getByRole('textbox', 'Jan Frodeno'))
    expect(screen.getByRole('textbox').toHaveValue('Jan Frodeno'))
  })
})
