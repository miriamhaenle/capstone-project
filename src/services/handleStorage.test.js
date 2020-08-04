import { getFromStorage, saveToStorage } from './handleStorage'

describe('save to storage', () => {
  beforeEach(() => {
    const mockSaveToStorage = jest.fn(saveToStorage)

    const USERID = 'huha72hjkasz1'
    const KEY = 'foo'
    const DATASET = { foo: 'bar' }

    mockSaveToStorage(USERID, KEY, DATASET)
  })
  it('should save dataset to storage', () => {
    expect(mockSaveToStorage.mock.calls.length).toBe(1)
  })

  it('should call function with all arguments', () => {
    expect(mockSaveToStorage).toHaveBeenCalledWith(USERID, KEY, DATASET)
  })
})

describe('get from storage', () => {
  beforeEach(() => {
    const mockGetFromStorage = jest.fn(getFromStorage)
    const USERID = 'huha72hjkasz1'
    const KEY = 'foo'

    mockGetFromStorage(USERID, KEY)
  })
  it('should get dataset from storage', () => {
    expect(mockGetFromStorage.mock.calls.length).toBe(1)
  })

  it('should call function with all arguments', () => {
    expect(mockGetFromStorage).toHaveBeenCalledWith(USERID, KEY)
  })
})
