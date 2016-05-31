import { RECEIVE_SCENARIO, REQUEST_SCENARIO } from '../constants/ActionTypes';
import ScenarioPath from '../constants/api/ScenarioPath.js';

export function receiveScenario(json) {
  return {
    type: RECEIVE_SCENARIO,
    scenario: json.scenario,
  };
}

export function requestScenario() {
  return {
    type: REQUEST_SCENARIO,
  };
}

export function fetchScenario(id) {
  return function (dispatch) {
    dispatch(requestScenario())
    return fetch(ScenarioPath(id))
      .then(response => response.json())
      .then(json =>
        dispatch(receiveScenario(json))
      )
  }
}