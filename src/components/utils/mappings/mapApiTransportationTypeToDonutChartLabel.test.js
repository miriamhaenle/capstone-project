import { mapApiTransportationTypeToDonutChartLabel } from './mapApiTransportationTypeToDonutChartLabel'

describe('Map transportation types from API to donut chart label', () => {
  it('should map the data correctly', () => {
    expect(mapApiTransportationTypeToDonutChartLabel('anyCar')).toEqual('car')
  })
})
