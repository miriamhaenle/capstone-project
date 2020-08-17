import { ACTIONS } from './actions'

export default function footprintReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FOOTPRINT: {
      return {
        ...state,
        carbonFootprint: [...state.carbonFootprint, action.payload],
      }
    }
    case ACTIONS.UPDATE_TOTAL_FOOTPRINT: {
      return {
        ...state,
        totalCarbonFootprint: action.payload,
      }
    }
    default:
      return state
  }
}
