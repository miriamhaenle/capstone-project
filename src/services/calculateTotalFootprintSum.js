export function calculateTotalFootprintSum(carbonFootprint) {
  if (carbonFootprint !== null) {
    return carbonFootprint.reduce((acc, curr) => acc + curr, 0)
  }
}
