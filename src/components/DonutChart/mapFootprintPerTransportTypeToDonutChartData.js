export function mapFootprintPerTransportTypeToDonutChartData({
  transportationType,
  sum,
}) {
  return { label: transportationType, y: sum }
}
