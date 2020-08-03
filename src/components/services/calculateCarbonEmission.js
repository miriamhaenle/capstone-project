import axios from 'axios'
import PropTypes from 'prop-types'

export async function calculateCarbonEmission(distance, transportationType) {
  const distanceInMiles = distance * 0.62
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL, {
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

calculateCarbonEmission.propTypes = {
  distance: PropTypes.string,
  transportationType: PropTypes.string,
}
