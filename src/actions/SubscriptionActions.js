import axios from 'axios';

import {
  RECEIVE_SUBSCRIPTION,
  CREATE_SUBSCRIPTION,
  FAILED_SUBSCRIPTION,
} from '../constants/ActionTypes';

import SubscribePath from '../constants/api/SubscribePath.js';

export function receiveSubscription(json) {
  return {
    type: RECEIVE_SUBSCRIPTION,
    subscribedEmail: json.email,
  };
}

export function failedSubscription(json) {
  return {
    type: FAILED_SUBSCRIPTION,
    errors: json.errors,
    status: json.status,
  }
}

export function createSubscriptionEvent() {
  return {
    type: CREATE_SUBSCRIPTION,
  };
}

export function createSubscription(email) {
  return function (dispatch) {
    dispatch(createSubscriptionEvent())
    return (
      axios.post(SubscribePath, {
        email: email
      })
      .then(
        function(json) {
          dispatch(receiveSubscription(json.data))
        },
        function(error) {
          dispatch(failedSubscription(error.response.data))
        }
      )
    )
  }
}
