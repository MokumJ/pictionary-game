import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()

export default (game, index, type, currentPlayer) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.patch(`/games/${game._id}`, { draw, type, currentPlayer })
      .then(() => {
        console.log(...game, index, type, currentPlayer)
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
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
