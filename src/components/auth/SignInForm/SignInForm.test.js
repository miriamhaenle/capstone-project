import React from 'react'
import SignInForm from './SignInForm'
import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Sign In form renders correctly', () => {
  beforeEach(() => {
    render(<SignInForm />)
  })

  it('should render the form', () => {
    const renderedComponent = render(<SignInForm />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the email input field', () => {
    const emailInput = screen.findByRole('textbox', 'email')
    expect(nameInput).toBeInTheDocument()
  })

  it('should render the password input field', () => {
    const passwordInput = screen.findByRole('textbox', 'password')
    expect(passwordInput).toBeInTheDocument()
  })

  it('should render the sign in button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should have a disabled button by default', () => {
    expect(screen.getByText('Sign in').closest('button')).toHaveAttribute(
      'disabled'
    )
  })

  it('should render the forgot password link', () => {
    expect(screen.getByText('Forgot password?')).toBeInTheDocument()
  })
})

describe('Input tests', () => {
  beforeEach(() => {
    const { getAllByRole } = render(<SignInForm />)
  })

  it('should be possible to write into the email field', async () => {
    await userEvent.type(
      screen.getAllByRole('textbox')[0],
      'jan@frodissimo.com'
    )
    expect(screen.getAllByRole('textbox')[0]).toHaveAttribute(
      'value',
      'jan@frodissimo.com'
    )
  })

  it('should be possible to write to password input field', async () => {
    await userEvent.type(screen.getByTestId('password'), '12345678')
    expect(screen.getByTestId('password')).toHaveAttribute('value', '12345678')
  })

  it('should have disabled button if email is not formatted correctly', async () => {
    await userEvent.type(screen.getAllByRole('textbox')[1], 'jan@frodissimo')
    expect(screen.getByRole('button')).toHaveAttribute
  })

  it('should enable button if input fields are filled correctly', async () => {
    await userEvent.type(
      screen.getAllByRole('textbox')[0],
      'jan@frodissimo.com'
    )
    await userEvent.type(screen.getByTestId('password'), '12345678')
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
  })
})
