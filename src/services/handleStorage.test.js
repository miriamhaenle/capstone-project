import { getFromStorage, saveToStorage } from './handleStorage'

describe('save to storage', () => {
  it('should save dataset to storage', () => {
    const mockSaveToStorage = jest.fn(saveToStorage)

    const USERID = 'huha72hjkasz1'
    const KEY = 'foo'
    const DATASET = { foo: 'bar' }

    mockSaveToStorage(USERID, KEY, DATASET)
    expect(mockSaveToStorage.mock.calls.length).toBe(1)
  })

  it('should call function with all arguments', () => {
    const mockSaveToStorage = jest.fn(saveToStorage)

    const USERID = 'huha72hjkasz1'
    const KEY = 'foo'
    const DATASET = { foo: 'bar' }

    mockSaveToStorage(USERID, KEY, DATASET)
    expect(mockSaveToStorage).toHaveBeenCalledWith(USERID, KEY, DATASET)
  })
})

describe('get from storage', () => {
  it('should get dataset from storage', () => {
    const mockGetFromStorage = jest.fn(getFromStorage)
    const USERID = 'huha72hjkasz1'
    const KEY = 'foo'

    mockGetFromStorage(USERID, KEY)
    expect(mockGetFromStorage.mock.calls.length).toBe(1)
  })

  it('should call function with all arguments', () => {
    const mockGetFromStorage = jest.fn(getFromStorage)
    const USERID = 'huha72hjkasz1'
    const KEY = 'foo'

    mockGetFromStorage(USERID, KEY)
    expect(mockGetFromStorage).toHaveBeenCalledWith(USERID, KEY)
  })
})
