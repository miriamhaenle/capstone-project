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

  it('should return 0 on request with empty data', async () => {
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

  it('should return 0 on request with missing data', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      transportationType: 'anyCar',
    })
    expect(carbonFootprint).toEqual(0)
  })

  it('should return 0 on badly formatted request(additional param)', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      distance: '',
      transportationType: 'anyCar',
      additionalParamThatShouldNotExist: 'bus',
    })
    expect(carbonFootprint).toEqual(0)
  })

  it('should return 0 on request with wrong data type(data type: object)', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      distance: { kilometers: 20 },
      transportationType: 'anyCar',
    })
    expect(carbonFootprint).toEqual(0)
  })

  it('should return 0 on request with wrong data type(data type: array)', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      distance: [20, 120, 50],
      transportationType: 'anyCar',
    })
    expect(carbonFootprint).toEqual(0)
  })

  it('should return 0 on request with wrong data type(data type: number)', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      distance: 30,
      transportationType: 'anyCar',
    })
    expect(carbonFootprint).toEqual(0)
  })

  it('should return 0 on request with wrong data type(data type: boolen)', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      distance: true,
      transportationType: 'anyCar',
    })
    expect(carbonFootprint).toEqual(0)
  })

  it('should return 0 on request with wrong data type(data type: undefined)', async () => {
    axios.get.mockResolvedValue({
      data: {
        carbonFootprint: '',
      },
    })
    const carbonFootprint = await calculateCarbonEmission({
      distance: undefined,
      transportationType: 'anyCar',
    })
    expect(carbonFootprint).toEqual(0)
  })
})
