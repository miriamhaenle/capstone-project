import { calculateFootprintPerTransportionType } from './calculateFootprintPerTransportationType'

describe('Calculate footprint per transportation type', () => {
  it('should add a new state', () => {
    expect(
      calculateFootprintPerTransportionType([], { type: 'car', sum: 200 })
    ).toEqual([{ transportationType: 'car', sum: 200 }])
  })
  it('should update existing state', () => {
    expect(
      calculateFootprintPerTransportionType(
        [{ transportationType: 'car', sum: 200 }],
        { type: 'car', sum: 200 }
      )
    ).toEqual([{ transportationType: 'car', sum: 400 }])
  })

  it('should add a new state for additional transportation type (one existing)', () => {
    expect(
      calculateFootprintPerTransportionType(
        [{ transportationType: 'car', sum: 200 }],
        { type: 'bus', sum: 400 }
      )
    ).toEqual([
      { transportationType: 'car', sum: 200 },
      { transportationType: 'bus', sum: 400 },
    ])
  })

  it('should add a new state for additional transportation type (two existing)', () => {
    expect(
      calculateFootprintPerTransportionType(
        [
          { transportationType: 'car', sum: 200 },
          { transportationType: 'bus', sum: 400 },
        ],
        { type: 'train', sum: 300 }
      )
    ).toEqual([
      { transportationType: 'car', sum: 200 },
      { transportationType: 'bus', sum: 400 },
      { transportationType: 'train', sum: 300 },
    ])
  })

  it('should add a new state for additional transportation type (three existing)', () => {
    expect(
      calculateFootprintPerTransportionType(
        [
          { transportationType: 'car', sum: 200 },
          { transportationType: 'bus', sum: 400 },
          { transportationType: 'train', sum: 300 },
        ],
        { type: 'plane', sum: 1000 }
      )
    ).toEqual([
      { transportationType: 'car', sum: 200 },
      { transportationType: 'bus', sum: 400 },
      { transportationType: 'train', sum: 300 },
      { transportationType: 'plane', sum: 1000 },
    ])
  })

  it('should update state of existing transportation type (several existing)', () => {
    expect(
      calculateFootprintPerTransportionType(
        [
          { transportationType: 'car', sum: 200 },
          { transportationType: 'bus', sum: 400 },
          { transportationType: 'train', sum: 300 },
          { transportationType: 'plane', sum: 1000 },
        ],
        { type: 'car', sum: 300 }
      )
    ).toEqual([
      { transportationType: 'car', sum: 500 },
      { transportationType: 'bus', sum: 400 },
      { transportationType: 'train', sum: 300 },
      { transportationType: 'plane', sum: 1000 },
    ])
  })

  it('should not update a state with empty strings', () => {
    expect(
      calculateFootprintPerTransportionType(
        [
          {
            transportationType: 'car',
            sum: 200,
          },
          { transportationType: 'bus', sum: 400 },
        ],
        { type: '', sum: '' }
      )
    ).toEqual([
      { transportationType: 'car', sum: 200 },
      { transportationType: 'bus', sum: 400 },
    ])
  })

  it('should not update a state with missing data', () => {
    expect(
      calculateFootprintPerTransportionType(
        [
          {
            transportationType: 'car',
            sum: 200,
          },
          { transportationType: 'bus', sum: 400 },
        ],
        { type: '' }
      )
    ).toEqual([
      { transportationType: 'car', sum: 200 },
      { transportationType: 'bus', sum: 400 },
    ])
  })

  it('should not update a state with invalid data ([array])', () => {
    expect(
      calculateFootprintPerTransportionType(
        [
          {
            transportationType: 'car',
            sum: 200,
          },
          { transportationType: 'bus', sum: 400 },
        ],
        [{ type: 20 }]
      )
    ).toEqual([
      { transportationType: 'car', sum: 200 },
      { transportationType: 'bus', sum: 400 },
    ])
  })

  it('should not update a state with invalid data (number)', () => {
    expect(
      calculateFootprintPerTransportionType(
        [
          {
            transportationType: 'car',
            sum: 200,
          },
          { transportationType: 'bus', sum: 400 },
        ],
        20
      )
    ).toEqual([
      { transportationType: 'car', sum: 200 },
      { transportationType: 'bus', sum: 400 },
    ])
  })

  it('should not update a state with invalid data (string)', () => {
    expect(
      calculateFootprintPerTransportionType(
        [
          {
            transportationType: 'car',
            sum: 200,
          },
          { transportationType: 'bus', sum: 400 },
        ],
        'foo'
      )
    ).toEqual([
      { transportationType: 'car', sum: 200 },
      { transportationType: 'bus', sum: 400 },
    ])
  })
})
