import { turn } from '../actions/pictionary/turn';

function reducer(state = { hasTurn: false }, action) {
  switch(action.type) {
    case turn:
      return { hasTurn: true, turn }
    default:
      return state
  }
}
export default turn;
