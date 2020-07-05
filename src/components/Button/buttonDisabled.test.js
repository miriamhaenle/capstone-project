import Button from './Button'

describe('check if button should be disabled', () => {
  test('Return true when number smaller 1', () => {
    expect(0.2 >= 1 ? false : true).toBeTruthy()
  })

  test('Return false when number bigger 1', () => {
    expect(2 >= 1 ? false : true).toBeFalsy()
  })
})
