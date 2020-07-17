const mappingObject = {
  anyCar: 'car',
  anyFlight: 'plane',
  transitRail: 'train',
  bus: 'bus',
}

export function mapApiActivityTypeToDonutChartLabel(tripToCarbonActivityType) {
  return mappingObject[tripToCarbonActivityType] || tripToCarbonActivityType
}
