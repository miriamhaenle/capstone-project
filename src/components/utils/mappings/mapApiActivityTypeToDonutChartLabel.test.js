import { mapApiActivityTypeToDonutChartLabel } from './mapApiActivityTypeToDonutChartLabel'

describe('', () => {
  it('should...', () => {
    expect(mapApiActivityTypeToDonutChartLabel({ anyCar: 200 })).toEqual({
      car: 200,
    })
    console.log(typeof mapApiActivityTypeToDonutChartLabel)
  })
})
