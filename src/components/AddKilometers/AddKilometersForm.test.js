import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import AddKilometersForm from './AddKilometersForm'
import { render, screen } from '@testing-library/react'

describe('AddKilometersForm.test.js', () => {
  it('exist an h2 with content add new trip', () => {
    const { queryByText } = render(<AddKilometersForm />)
    expect(queryByText('Add new trip')).toBeTruthy
  })

  it('wraps headline in h2 html tag', () => {
    const { queryByText } = render(<AddKilometersForm />)
    expect(queryByText('Add new trip').tagName).toBe('H2')
  })

  it('renders a child element', () => {
    const testChildren = 'Select mode of transportation'
    render(<AddKilometersForm>{testChildren}</AddKilometersForm>)
    expect(screen.getByText(testChildren)).toBeInTheDocument()
  })
})
