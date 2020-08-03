import PropTypes from 'prop-types'

export function calculateFootprintPerTransportionType(oldState, { type, sum }) {
  if (transportationTypeExists(oldState, type)) {
    return stateWithUpdatForExistingTransportationType(oldState, { type, sum })
  }

  return stateWithAddedTransportationType(oldState, { type, sum })
}

function transportationTypeExists(oldState, type) {
  return oldState.find(
    (transportationType) => transportationType.transportationType === type
  )
}

function stateWithUpdatForExistingTransportationType(oldState, { type, sum }) {
  return oldState.map((transportationType) =>
    transportationType.transportationType === type
      ? { ...transportationType, sum: transportationType.sum + sum }
      : transportationType
  )
}

function stateWithAddedTransportationType(oldState, { type, sum }) {
  return [...oldState, { transportationType: type, sum }]
}

calculateFootprintPerTransportionType.propTypes = {
  oldState: PropTypes.array,
  type: PropTypes.string,
  sum: PropTypes.number,
}
