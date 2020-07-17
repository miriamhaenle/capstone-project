import { calculateFootprintPerTransportionType } from './calculateFootprintPerTransportationType'

describe('Calculate footprint per transportation type', () => {
  it('should update existing state', () => {
    expect(
      calculateFootprintPerTransportionType(
        [{ transportationType: 'car', sum: 200 }],
        { type: 'car', sum: 200 }
      )
    ).toEqual([{ transportationType: 'car', sum: 400 }])
  })
  it('should update add a new state', () => {
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
})
