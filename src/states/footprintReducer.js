import React from 'react'
import { ACTIONS } from './actions'

export default function footprintReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FOOTPRINT: {
      return { ...state, carbonFootprint: action.payload }
    }

    default:
      return state
  }
}
