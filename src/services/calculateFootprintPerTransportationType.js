export function calculateFootprintPerTransportionType(
  currentState,
  { transportationTypeToUpdate, footprintSum }
) {
  if (!transportationTypeToUpdate) {
    return currentState
  }
  if (!footprintSum) {
    return currentState
  }
  if (transportationTypeExists(currentState, transportationTypeToUpdate)) {
    return stateWithUpdatForExistingTransportationType(currentState, {
      transportationTypeToUpdate,
      footprintSum,
    })
  }

  return stateWithAddedTransportationType(currentState, {
    transportationTypeToUpdate,
    footprintSum,
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
  { transportationTypeToUpdate, footprintSum }
) {
  return currentState.map((transportationType) =>
    transportationType.transportationType === transportationTypeToUpdate
      ? {
          ...transportationType,
          footprintSum: transportationType.footprintSum + footprintSum,
        }
      : transportationType
  )
}

function stateWithAddedTransportationType(
  currentState,
  { transportationTypeToUpdate, footprintSum }
) {
  return [
    ...currentState,
    { transportationType: transportationTypeToUpdate, footprintSum },
  ]
}
