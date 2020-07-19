import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddKilometersForm from '../../components/AddKilometers/AddKilometersForm'
import { calculateCarbonEmission } from '../../components/utils/calculateCarbonEmission'

export default function TripsPage({
  updateCarbonFootprint,
  updateFootprintPerTransportationType,
}) {
  const [transportationType, setTransportationType] = useState('anyCar')

  return (
    <AddKilometersForm
      headline="Add new trip"
      paragraph="How many kilometers did it take you to get to your last race / training
        camp?"
      type="transportation"
      updateData={updateTransportationType}
      getKilometers={calculateAndUpdateCarbonEmission}
      transportationType={transportationType}
    ></AddKilometersForm>
  )
  function updateTransportationType(value) {
    setTransportationType(value)
  }

  async function calculateAndUpdateCarbonEmission({ distance }) {
    const carbonFootprint = await calculateCarbonEmission(
      distance,
      transportationType
    )
    updateCarbonFootprint(carbonFootprint)
    updateFootprintPerTransportationType(transportationType, carbonFootprint)
  }
}

TripsPage.propTypes = {
  updateCarbonFootprint: PropTypes.func,
  updateFootprintPerTransportationType: PropTypes.func,
}
