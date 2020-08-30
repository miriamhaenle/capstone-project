import { ACTIONS } from 'states/actions'

export default function updateCarbonFootprint(dispatch, value) {
  dispatch({ type: ACTIONS.UPDATE_FOOTPRINT, payload: value })
}
