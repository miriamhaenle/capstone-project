import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import AddKilometersForm from './AddKilometersForm'
import { render, screen, mount } from '@testing-library/react'

describe('AddKilometersForm', () => {
  it('renders the form', () => {
    const renderedResult = render(<AddKilometersForm />)
    expect(renderedResult).toBeTruthy()
  })

  it('should render Transportation Selection as child element', () => {
    const transportationSelection = 'Select mode of transportation'
    render(<AddKilometersForm>{transportationSelection}</AddKilometersForm>)
    expect(screen.getByText(transportationSelection)).toBeInTheDocument()
  })

  it('should render the add Kilometer input', () => {
    render(<AddKilometersForm />)
    expect(
      screen.getByRole('spinbutton', { name: 'Kilometers' })
    ).toBeInTheDocument()
  })

  it('should render the button', () => {
    render(<AddKilometersForm />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should have a disabled button by default', () => {
    render(<AddKilometersForm />)
    expect(screen.getByText('Add').closest('button')).toBeDisabled()
  })

  it('should have a clickable button if input is present', () => {
    render(<AddKilometersForm />)
    expect(screen.getByText('Add').closest('button')).toBeDisabled()
  })
})
