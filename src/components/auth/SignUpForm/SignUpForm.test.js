import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { SignUpForm } from './SignUpForm'

describe('Sign up form renders correctly', () => {
  beforeEach(() => {
    render(<SignUpForm />)
  })
  it('renders the form', () => {
    const renderedComponent = render(<SignUpForm />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the name input field', () => {
    const nameInput = screen.findByRole('textbox', 'username')
    expect(nameInput).toBeTruthy()
  })

  it('should render the email input field', () => {
    const mailInput = screen.findByRole('textbox', 'email')
    expect(mailInput).toBeTruthy()
  })

  it('should render two password input fields', () => {
    const passwordOneInput = screen.findByRole('textbox', 'passwordOne')
    const passwordTwoInput = screen.findByRole('textbox', 'passwordTwp')

    expect(passwordOneInput && passwordTwoInput).toBeInTheDocument
  })

  it('should render the sign up button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should have a disabled sign up button by default', () => {
    expect(screen.getByText('Sign up').closest('button')).toHaveAttribute(
      'disabled'
    )
  })

  it('should render the terms and conditions text', () => {
    expect(
      screen.getByText(
        'By creating an account you agree to our Terms & Conditions.'
      )
    ).toBeInTheDocument()
  })
})

describe('Input tests', () => {
  beforeEach(() => {
    const { getAllByRole } = render(<SignUpForm />)
  })
  it('should be possible to write to name input field', async () => {
    await userEvent.type(screen.getAllByRole('textbox')[0], 'Jan Frodeno')
    expect(screen.getAllByRole('textbox')[0]).toHaveAttribute(
      'value',
      'Jan Frodeno'
    )
  })

  it('should be possible to write to email input field', async () => {
    await userEvent.type(
      screen.getAllByRole('textbox')[1],
      'jan@frodissimo.com'
    )
    expect(screen.getAllByRole('textbox')[1]).toHaveAttribute(
      'value',
      'jan@frodissimo.com'
    )
  })

  it('should be possible to write to password input fields', async () => {
    await userEvent.type(screen.getByTestId('passwordOne'), '12345678')

    expect(screen.getByTestId('passwordOne')).toHaveAttribute(
      'value',
      '12345678'
    )
  })

  it('should be possible to write to password input fields', async () => {
    await userEvent.type(screen.getByTestId('passwordTwo'), '12345678')

    expect(screen.getByTestId('passwordTwo')).toHaveAttribute(
      'value',
      '12345678'
    )
  })

  it('should have disabled button if email is formatted invalidly', async () => {
    await userEvent.type(screen.getAllByRole('textbox')[0], 'Jan Frodeno')
    await userEvent.type(screen.getAllByRole('textbox')[1], 'jan@frodissimo')
    await userEvent.type(screen.getByTestId('passwordOne'), '12345678')
    await userEvent.type(screen.getByTestId('passwordTwo'), '12345678')
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })

  it('should have disabled button if passwords do not match', async () => {
    await userEvent.type(screen.getAllByRole('textbox')[0], 'Jan Frodeno')
    await userEvent.type(
      screen.getAllByRole('textbox')[1],
      'jan@frodissimo.com'
    )
    await userEvent.type(screen.getByTestId('passwordOne'), '12345678')
    await userEvent.type(screen.getByTestId('passwordTwo'), '87654321')
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })

  it('should enable button if input fields are filled correctly', async () => {
    await userEvent.type(screen.getAllByRole('textbox')[0], 'Jan Frodeno')
    await userEvent.type(
      screen.getAllByRole('textbox')[1],
      'jan@frodissimo.com'
    )
    await userEvent.type(screen.getByTestId('passwordOne'), '12345678')
    await userEvent.type(screen.getByTestId('passwordTwo'), '12345678')
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
  })
})
