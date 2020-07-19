import { saveToStorage, getFromStorage } from './handleStorage'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import React from 'react'

describe('Save to storage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    })
    saveToStorage('foo', 'Bar Baz')
  })

  it('should call function on render ', () => {
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
  })

  it('should call function on state change', () => {})
})

/* describe('Get from storage', () => {})
 */
