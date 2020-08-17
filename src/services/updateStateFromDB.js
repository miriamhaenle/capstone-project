import { getFromStorage } from './handleStorage'
import { APP_STORAGE_KEYS } from './storageKeys'
import { ACTIONS } from '../states/actions'

export default async function updateStateFromDB(dispatch, userId, key) {
  const dataFromDB = await getFromStorage(userId, key)
  if (!dataFromDB) {
    return
  }

  if (key === APP_STORAGE_KEYS.footprintHistory) {
    dispatch({
      type: ACTIONS.UPDATE_FOOTPRINT,
      payload: dataFromDB.reduce((acc, curr) => acc + curr, 0),
    })
  }
  if (key === APP_STORAGE_KEYS.totalCarbonFootprint) {
    dispatch({
      type: ACTIONS.UPDATE_TOTAL_FOOTPRINT,
      payload: dataFromDB,
    })
  }
  if (key === APP_STORAGE_KEYS.footprintPerTransportType) {
    dispatch({
      type: ACTIONS.UPDATE_PER_TRANSPORTATIONTYPE,
      payload: dataFromDB,
    })
  }
}
