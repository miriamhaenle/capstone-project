import { calculateTotalFootprintSum } from '../services/calculateTotalFootprintSum'

test('adding up numbers of array', () => {
  expect(calculateTotalFootprintSum([3, 2, 1])).toBe(6)
})

test('adding up numbers of array with negative numbers', () => {
  expect(calculateTotalFootprintSum([-5, 3, 1])).toBe(-1)
})

test('if value is null undefined is returned', () => {
  expect(calculateTotalFootprintSum(null)).toBeUndefined()
})

test('returning empty array', () => {
  expect(calculateTotalFootprintSum([])).toBe(0)
})
