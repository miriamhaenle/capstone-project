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
  it('should map empty strings if transportation type is empty', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: '',
        sum: 22,
      })
    ).toEqual({ label: '', y: '' })
  })
  it('should map empty strings if transportation sum is empty', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: 'car',
        sum: '',
      })
    ).toEqual({ label: '', y: '' })
  })
  it('should map empty stringsp if no sum is send', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: '',
      })
    ).toEqual({ label: '', y: '' })
  })
  it('should map empty strings if no transportation Type is send', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        sum: '',
      })
    ).toEqual({ label: '', y: '' })
  })
})
