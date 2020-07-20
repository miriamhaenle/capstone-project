import { saveToStorage, getFromStorage } from './handleStorage'
import { render, fireEvent, waitForElement } from '@testing-library/react'

describe('get data from storage', () => {
  beforeEach(() => {
    window.localStorage = localStorage
  })
  it('should return null if no dataset is present', () => {
    const foo = getFromStorage('foo')
    expect(foo).toBe(null)
  })
})
