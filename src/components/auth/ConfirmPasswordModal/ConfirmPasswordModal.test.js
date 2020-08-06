import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import ConfirmPasswordModal from './ConfirmPasswordModal'
import { render, screen } from '@testing-library/react'
import { iteratee } from 'lodash'

describe('Confirm Password Modal', () => {
  beforeEach(() => {
    const renderedComponent = render(<ConfirmPasswordModal />)
  })
  it('should render the component', () => {
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the input field', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render the Confirm button', () => {
    expect(screen.getByText('Confirm').closest('button')).toBeInTheDocument()
  })
  it('should render the Close button', () => {
    expect(screen.getByText('Close').closest('button')).toBeInTheDocument()
  })
})
