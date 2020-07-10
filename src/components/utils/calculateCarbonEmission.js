import axios from 'axios'
const apiURL =
  'http://localhost:5001/capstone-project-c74dc/europe-west3/app/my-carbon-footprint'

export async function calculateCarbonEmission(distance, transportationType) {
  const distanceInMiles = distance * 0.62
  try {
    const response = await axios.get(apiURL, {
      params: {
        activity: Number(distanceInMiles),
        activityType: 'miles',
        country: 'def',
        mode: transportationType,
      },
    })

    if (!response.data) {
      return Math.round(((distanceInMiles * 52) / 19.4) * (100 / 95))
    }

    const carbonEmission = Number(response.data.carbonFootprint)

    return carbonEmission
  } catch (error) {
    console.error(error)
  }
}
