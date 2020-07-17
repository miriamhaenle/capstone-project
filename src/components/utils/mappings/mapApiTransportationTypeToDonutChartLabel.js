const mappingObject = {
  anyCar: 'car',
  anyFlight: 'plane',
  transitRail: 'train',
  bus: 'bus',
}
// getDonutLabelByApiTransportationType
export function mapApiTransportationTypeToDonutChartLabel(apiActivityType) {
  return mappingObject[apiActivityType] || apiActivityType
}
