const mappingObject = {
  anyCar: 'car',
  anyFlight: 'plane',
  transitRail: 'train',
  bus: 'bus',
}
export function mapApiTransportationTypeToDonutChartLabel(apiActivityType) {
  return mappingObject[apiActivityType] || ''
}
