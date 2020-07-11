import { calculateCarbonEmission } from './calculateCarbonEmission'
import axios from 'axios'

jest.mock('axios')

describe('GET /my-carbon-footprint', () => {
  it('should return carbon footprint data correctly', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '16.60',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      distance: '40',
      transportationType: 'anyCar',
    })
    expect(carbonFootprint).toEqual(16.6)
  })

  it('should return 0 on false request', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      distance: '',
      transportationType: 'anyCar',
    })
    expect(carbonFootprint).toEqual(0)
  })
})
