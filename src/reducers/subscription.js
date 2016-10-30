import {
  RECEIVE_SUBSCRIPTION,
  CREATE_SUBSCRIPTION,
  FAILED_SUBSCRIPTION,
} from '../constants/ActionTypes';

const initialState = {
  isCreating:      false,
  subscribed:      false,
  subscribedEmail: '',
  errors:     null,
}

const createSubscription = (state, action) =>
  Object.assign({}, state, {
    isCreating: true,
    status:     null,
    errors:     null,
  });

const receiveSubscription = (state, action) =>
  Object.assign({}, state, {
    isCreating:      false,
    subscribed:      true,
    subscribedEmail: action.subscribedEmail,
    status:          200,
    errors:          null,
  });

const failedSubscription = (state, action) =>
  Object.assign({}, state, {
    isCreating: false,
    subscribed: false,
    errors:     action.errors,
    status:     action.status,
  });

export default function scenario(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_SUBSCRIPTION:
    return receiveSubscription(state, action)
  case CREATE_SUBSCRIPTION:
    return createSubscription(state, action)
  case FAILED_SUBSCRIPTION:
    return failedSubscription(state, action)
  default:
    return state;
  }
}
