export function calculateFootprintPerTransportionType(
  currentState,
  { transportationTypeToUpdate, sum }
) {
  if (!transportationTypeToUpdate) {
    return currentState
  }
  if (!sum) {
    return currentState
  }
  if (transportationTypeExists(currentState, transportationTypeToUpdate)) {
    return stateWithUpdatForExistingTransportationType(currentState, {
      transportationTypeToUpdate,
      sum,
    })
  }

  return stateWithAddedTransportationType(currentState, {
    transportationTypeToUpdate,
    sum,
  })
}

function transportationTypeExists(currentState, transportationTypeToUpdate) {
  return currentState.find(
    (transportationType) =>
      transportationType.transportationType === transportationTypeToUpdate
  )
}

function stateWithUpdatForExistingTransportationType(
  currentState,
  { transportationTypeToUpdate, sum }
) {
  return currentState.map((transportationType) =>
    transportationType.transportationType === transportationTypeToUpdate
      ? { ...transportationType, sum: transportationType.sum + sum }
      : transportationType
  )
}

function stateWithAddedTransportationType(
  currentState,
  { transportationTypeToUpdate, sum }
) {
  return [
    ...currentState,
    { transportationType: transportationTypeToUpdate, sum },
  ]
}
