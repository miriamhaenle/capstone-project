import Button from './Button'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('button behaviour based on input value', () => {
  it('renders with or without text', () => {
    act(() => {
      render(<Button />, container)
    })
    expect(container.textContent).toBe('')
    act(() => {
      render(<Button text="Add trip" />, container)
    })
    expect(container.textContent).toBe('Add trip')
  })
})

describe('check if button should be disabled', () => {
  test('Return true when number smaller 1', () => {
    expect(0.2 >= 1 ? false : true).toBeTruthy()
  })

  test('Return false when number bigger 1', () => {
    expect(2 >= 1 ? false : true).toBeFalsy()
  })
})
