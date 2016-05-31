import { REQUEST_SCENARIO, RECEIVE_SCENARIO } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  scenario: {},
  receivedAt: null,
}

export default function scenario(state = initialState, action) {
  switch (action.type) {
  case REQUEST_SCENARIO:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case RECEIVE_SCENARIO:
    return Object.assign({}, state, {
      isFetching: false,
      scenario: action.scenario,
      receivedAt: Date.now(),
    });
  default:
    return state;
  }
}
