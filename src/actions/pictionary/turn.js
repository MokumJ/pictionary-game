import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const TURN = 'turn'

const api = new API()

export const turn = (game) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.patch(`/games/${game._id}`, game )
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type : turn})

      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
}
}
