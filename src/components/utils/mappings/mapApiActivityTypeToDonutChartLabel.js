const mappingObject = {
  anyCar: 'car',
  anyFlight: 'plane',
  transitRail: 'train',
  bus: 'bus',
}

export function mapApiActivityTypeToDonutChartLabel(apiActivityType) {
  return mappingObject[apiActivityType] || apiActivityType
}
