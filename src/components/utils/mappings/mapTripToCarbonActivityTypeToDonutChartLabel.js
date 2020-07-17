const mappingObject = {
  anyCar: 'car',
  anyFlight: 'plane',
  transitRail: 'train',
  bus: 'bus',
}

export function mapTripToCarbonActivityTypeToDonutChartLabel(
  tripToCarbonActivityType
) {
  return mappingObject[tripToCarbonActivityType] || tripToCarbonActivityType
}