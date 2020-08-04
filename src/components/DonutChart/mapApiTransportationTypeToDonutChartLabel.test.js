import { mapApiTransportationTypeToDonutChartLabel } from './mapApiTransportationTypeToDonutChartLabel'

describe('Map transportation types from API to donut chart label', () => {
  it('should map the data correctly(car)', () => {
    expect(mapApiTransportationTypeToDonutChartLabel('anyCar')).toEqual('car')
  })
  it('should map the data correctly(flight)', () => {
    expect(mapApiTransportationTypeToDonutChartLabel('anyFlight')).toEqual(
      'plane'
    )
  })
  it('should map the data correctly(train)', () => {
    expect(mapApiTransportationTypeToDonutChartLabel('transitRail')).toEqual(
      'train'
    )
  })
  it('should map the data correctly(bus)', () => {
    expect(mapApiTransportationTypeToDonutChartLabel('bus')).toEqual('bus')
  })
  it('should return empty string if no corresponding map object is defined', () => {
    expect(mapApiTransportationTypeToDonutChartLabel('foo')).toEqual('')
  })
  it('should return empty string if empty string was provided', () => {
    expect(mapApiTransportationTypeToDonutChartLabel('')).toEqual('')
  })

  it('should return empty string if nothing was provided', () => {
    expect(mapApiTransportationTypeToDonutChartLabel()).toEqual('')
  })
  it('should return empty string if object was provided', () => {
    expect(mapApiTransportationTypeToDonutChartLabel({ foo: 'baz' })).toEqual(
      ''
    )
  })
  it('should return empty string if number was provided', () => {
    expect(mapApiTransportationTypeToDonutChartLabel(2)).toEqual('')
  })

  it('should return empty string if boolean was provided', () => {
    expect(mapApiTransportationTypeToDonutChartLabel(false)).toEqual('')
  })
  it('should return empty string if undefined was provided', () => {
    expect(mapApiTransportationTypeToDonutChartLabel(undefined)).toEqual('')
  })
  it('should return empty string if null was provided', () => {
    expect(mapApiTransportationTypeToDonutChartLabel(null)).toEqual('')
  })
  it('should return empty string if array was provided', () => {
    expect(
      mapApiTransportationTypeToDonutChartLabel(['anyCar', 'bus', 'anyFlight'])
    ).toEqual('')
  })
})
