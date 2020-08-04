export function mapFootprintPerTransportTypeToDonutChartData({
  transportationType,
  footprintSum,
}) {
  if (!transportationType) {
    return { label: '', y: '' }
  }
  if (!footprintSum) {
    return { label: '', y: '' }
  }
  return { label: transportationType, y: footprintSum }
}
