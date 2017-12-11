import { turn } from '../actions/pictionary/turn';

function changeTurn(state = { hasTurn: false}, action) {
  switch(action.type) {
    case turn:
      return { hasTurn: true, action}
    default:
      return state
  }
}
export default changeTurn;
