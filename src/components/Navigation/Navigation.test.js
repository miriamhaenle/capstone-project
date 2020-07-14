import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Navigation from './Navigation'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Navigation', () => {
  it('should render the navigation', () => {
    const history = createMemoryHistory()
    const renderedNavigation = render(
      <Router history={history}>
        <Navigation />
      </Router>
    )
    expect(renderedNavigation).toBeTruthy()
  })

  it('should render Activity page on click add activity', () => {
    const history = createMemoryHistory()
    const { container, getByText } = render(
      <Router history={history}>
        <Navigation />
      </Router>
    )

    fireEvent.click(screen.getByText('Add activity'))
    expect(container.innerHTML).toMatch('class="selected"')
  })
})
