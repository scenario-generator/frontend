import {
  RECEIVE_SUBSCRIPTION,
  CREATE_SUBSCRIPTION,
} from '../constants/ActionTypes';

const initialState = {
  isCreating:      false,
  subscribed:      false,
  subscribedEmail: '',
}

const createSubscription = (state, action) =>
  Object.assign({}, state, {
    isCreating: true,
  });

const receiveSubscription = (state, action) =>
  Object.assign({}, state, {
    isCreating:      false,
    subscribed:      true,
    subscribedEmail: action.subscribedEmail,
  });

export default function scenario(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_SUBSCRIPTION:
    return receiveSubscription(state, action)
  case CREATE_SUBSCRIPTION:
    return createSubscription(state, action)
  default:
    return state;
  }
}
