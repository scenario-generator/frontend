import {
  RECEIVE_SCENARIO,
  REQUEST_SCENARIO,
  RECEIVE_COLUMN,
  REQUEST_COLUMN,
} from '../constants/ActionTypes';
import ScenarioPath from '../constants/api/ScenarioPath.js';
import ColumnPath from '../constants/api/ColumnPath.js';

export function receiveScenario(json) {
  return {
    type: RECEIVE_SCENARIO,
    scenario: json.scenario,
    generator: json.generator,
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
export function receiveColumn(json) {
  return {
    type: RECEIVE_COLUMN,
    replacementColumn: json.scenario.columns[0],
  };
}

export function requestColumn(fetchingColumnId) {
  return {
    type: REQUEST_COLUMN,
    fetchingColumnId: fetchingColumnId,
  };
}

export function fetchColumn(generatorId, columnId) {
  return function (dispatch) {
    dispatch(requestColumn(columnId))
    return fetch(ColumnPath(generatorId, columnId))
      .then(response => response.json())
      .then(json =>
        dispatch(receiveColumn(json))
      )
  }
}