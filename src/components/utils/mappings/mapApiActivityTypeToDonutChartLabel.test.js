import { mapApiActivityTypeToDonutChartLabel } from './mapApiActivityTypeToDonutChartLabel'

const mockDataFromApi = {
  anyCar: 'car',
}

describe('Map api data to donut chart data', () => {
  it('should map the values needed for api to the values needed for the donut chart', () => {
    const result = mapApiActivityTypeToDonutChartLabel(mockDataFromApi)

    expect(result).toEqual({ car: 'car' })
  })
})
