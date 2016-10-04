import { browserHistory } from 'react-router'
import axios from 'axios';

import {
  RECEIVE_SUBSCRIPTION,
  CREATE_SUBSCRIPTION,
} from '../constants/ActionTypes';

import SubscribePath from '../constants/api/SubscribePath.js';

export function receiveSubscription(json) {
  return {
    type: RECEIVE_SUBSCRIPTION,
    subscribedEmail: json.email,
  };
}

export function createSubscriptionEvent() {
  return {
    type: CREATE_SUBSCRIPTION,
  };
}

export function createSubscription(actionsHash) {
  return function (dispatch) {
    dispatch(createSubscriptionEvent())
    return (
      axios.post(SubscribePath, {
        email: actionsHash.email
      })
      .then(function(json) {
        dispatch(receiveSubscription(json.data))
      })
    )
  }
}
