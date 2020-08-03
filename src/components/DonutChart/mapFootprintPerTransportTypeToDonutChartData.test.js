import { mapFootprintPerTransportTypeToDonutChartData } from './mapFootprintPerTransportTypeToDonutChartData'

describe('Mapping function api data structure to donut chart data structure', () => {
  it('should map the transportation type to label and sum to y', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: 'car',
        sum: 200,
      })
    ).toEqual({ label: 'car', y: 200 })
  })
  it('should also map if transportation type is empty', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: '',
        sum: 22,
      })
    ).toEqual({ label: '', y: 22 })
  })
})
