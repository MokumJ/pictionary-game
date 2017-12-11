export const UPDATE_DRAW = 'UPDATE_DRAW'
export const updateDrawing = draw => ({
  type: UPDATE_DRAW,
  payload: draw
});


// import API from '../../api/client'
// import {
//   APP_LOADING,
//   APP_DONE_LOADING,
//   LOAD_ERROR,
//   LOAD_SUCCESS
// } from '../loading'
//
// export const UPDATE_DRAW = 'UPDATE_DRAW'
//
// const api = new API()
//
// export const update_draw = (draw) => {
//   return dispatch => {
//     dispatch({ type: APP_LOADING })
//
//     api.patch(`/games/${game._id}`, game )
//       .then((res) => {
//         dispatch({ type: APP_DONE_LOADING })
//         dispatch({ type: LOAD_SUCCESS })
//
//   })
//       .catch((error) => {
//         dispatch({ type: APP_DONE_LOADING })
//         dispatch({
//           type: LOAD_ERROR,
//           payload: error.message
//         })
//       })
//     }
// }
