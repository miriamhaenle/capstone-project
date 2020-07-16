const mappingObject = {
  anyCar: 'car',
  anyFlight: 'plane',
  transitRail: 'train',
  bus: 'bus',
}

export function tripToCarbonActivityTypeToDonutChartLabel(
  tripToCarbonActivityType
) {
  return mappingObject[tripToCarbonActivityType] || tripToCarbonActivityType
}
