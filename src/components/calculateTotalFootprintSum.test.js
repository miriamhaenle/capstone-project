import { calculateTotalFootprintSum } from '../App'

test('adds up items of array', () => {
  expect(calculateTotalFootprintSum([3, 2, 1])).toBe(6)
})
