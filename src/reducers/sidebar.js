import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../constants/ActionTypes';

const initialState = {
  isOpen: false,
}

export default function sidebar(state = initialState, action) {
  switch (action.type) {
  case OPEN_SIDEBAR:
    return Object.assign({}, state, {
      isOpen: true,
    });
  case CLOSE_SIDEBAR:
    return Object.assign({}, state, {
      isOpen: false,
    });
  default:
    return state;
  }
}
