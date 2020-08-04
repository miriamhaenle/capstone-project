import { mapFootprintPerTransportTypeToDonutChartData } from './mapFootprintPerTransportTypeToDonutChartData'

describe('Mapping function api data structure to donut chart data structure', () => {
  it('should map the transportation type to label and footprintSum to y', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: 'car',
        footprintSum: 200,
      })
    ).toEqual({ label: 'car', y: 200 })
  })
  it('should map empty strings if transportation type is empty', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: '',
        footprintSum: 22,
      })
    ).toEqual({ label: '', y: '' })
  })
  it('should map empty strings if transportation sum is empty', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: 'car',
        footprintSum: '',
      })
    ).toEqual({ label: '', y: '' })
  })
  it('should map empty strings if no sum is send', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        transportationType: 'car',
      })
    ).toEqual({ label: '', y: '' })
  })
  it('should map empty strings if no transportation Type is send', () => {
    expect(
      mapFootprintPerTransportTypeToDonutChartData({
        footprintSum: '30',
      })
    ).toEqual({ label: '', y: '' })
  })
})
