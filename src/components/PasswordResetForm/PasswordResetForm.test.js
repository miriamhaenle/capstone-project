import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import PasswordResetForm from './PasswordResetForm'
import React from 'react'

describe('Password reset form', () => {
  let renderedForm
  beforeEach(() => {
    renderedForm = render(<PasswordResetForm />)
  })
  it('should render the form', () => {
    expect(renderedForm).toBeTruthy()
  })

  it('should render the email input field', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render the button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
