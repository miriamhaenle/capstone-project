export function footprintPerTransportationTypeToDonutChartData({
  transportationType,
  sum,
}) {
  return { label: transportationType, y: sum }
}
