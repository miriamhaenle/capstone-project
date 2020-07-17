export function mapTransportationTypeDataToDonutChartData({
  transportationType,
  sum,
}) {
  return { label: transportationType, y: sum }
}
