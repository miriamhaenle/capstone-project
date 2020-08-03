export function mapFootprintPerTransportTypeToDonutChartData({
  transportationType,
  sum,
}) {
  if (!transportationType) {
    return { label: '', y: '' }
  }
  if (!sum) {
    return { label: '', y: '' }
  }
  return { label: transportationType, y: sum }
}
