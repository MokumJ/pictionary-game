
import {updateDrawing} from '../actions/pictionary/draw';

const INITIAL_STATE = {
  current: null
};

const drawing = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_DRAW:
      return {...state, current: action.payload};
  }
  return state;
};

export default drawing;
