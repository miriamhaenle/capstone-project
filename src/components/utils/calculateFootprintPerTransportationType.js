export function calculateFootprintPerTransportionType(oldState, { type, sum }) {
  if (transportationTypeExists(oldState, type)) {
    return stateWithUpdatedTransportationType(oldState, { type, sum })
  }

  return stateWithAddedTransportationType(oldState, { type, sum })
}

function transportationTypeExists(oldState, type) {
  return oldState.find(
    (transportationType) => transportationType.transportationType === type
  )
}

function stateWithUpdatedTransportationType(oldState, { type, sum }) {
  return oldState.map((transportationType) =>
    transportationType.transportationType === type
      ? { ...transportationType, sum: transportationType.sum + sum }
      : transportationType
  )
}

function stateWithAddedTransportationType(oldState, { type, sum }) {
  return [...oldState, { transportationType: type, sum }]
}
