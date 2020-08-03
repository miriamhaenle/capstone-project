import { saveToStorage, getFromStorage } from './handleStorage'
import { render, fireEvent, waitForElement } from '@testing-library/react'

describe('save to storage', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  it('should save dataset to storage', () => {
    const KEY = 'foo',
      DATASET = { foo: 'bar' }

    saveToStorage(KEY, DATASET)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })
})

describe('get from storage', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  it('should get dataset from storage', () => {
    const KEY = 'foo'
    const DATASET = ''
    getFromStorage(KEY)
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  })
})
