import PropTypes from 'prop-types'

export function mapFootprintPerTransportTypeToDonutChartData({
  transportationType,
  sum,
}) {
  return { label: transportationType, y: sum }
}

mapFootprintPerTransportTypeToDonutChartData.propTypes = {
  transportationType: PropTypes.string,
  sum: PropTypes.number,
}
