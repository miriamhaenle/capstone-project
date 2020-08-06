import PropTypes from 'prop-types'
import React, { useState } from 'react'
import AddKilometersForm from '../../components/AddKilometers/AddKilometersForm'
import { calculateCarbonEmission } from '../../services/calculateCarbonEmission'

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
      templateType="transportation"
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
