import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import ConfirmPasswordModal from './ConfirmPasswordModal'

describe('Confirm Password Modal', () => {
  let renderedComponent
  beforeEach(() => {
    renderedComponent = render(<ConfirmPasswordModal />)
  })
  it('should render the component', () => {
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the input field', () => {
    expect(screen.getByTestId('passwordInput')).toBeInTheDocument()
  })

  it('should render the Confirm button', () => {
    expect(screen.getByText('Confirm').closest('button')).toBeInTheDocument()
  })

  it('should render the Close button', () => {
    expect(screen.getByText('Close').closest('button')).toBeInTheDocument()
  })
})
