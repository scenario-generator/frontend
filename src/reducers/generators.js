import { REQUEST_GENERATORS, RECEIVE_GENERATORS } from '../constants/ActionTypes';
import 'whatwg-fetch'

const initialState = {
  isFetching: false,
  generators: [],
  receivedAt: null,
}

export default function generator(state = initialState, action) {
  switch (action.type) {
  case REQUEST_GENERATORS:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case RECEIVE_GENERATORS:
    return Object.assign({}, state, {
      isFetching: false,
      generators: action.generators,
      receivedAt: Date.now(),
    });
  default:
    return state;
  }
}
