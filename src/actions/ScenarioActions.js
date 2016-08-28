import { browserHistory } from 'react-router'
import axios from 'axios';

import {
  RECEIVE_SCENARIO,
  REQUEST_SCENARIO,
  SAVE_SCENARIO,
  RECEIVE_COLUMN,
  REQUEST_COLUMN,
} from '../constants/ActionTypes';

import UpdateScenarioPath from '../constants/api/scenarios/UpdatePath.js';
import SaveScenarioPath   from '../constants/api/scenarios/CreatePath.js';
import LoadScenarioPath   from '../constants/api/scenarios/ShowPath.js';
import RollScenarioPath   from '../constants/api/scenarios/NewPath.js';
import RerollColumnPath   from '../constants/api/columns/scenarios/NewPath.js';

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

export function saveScenarioEvent() {
  return {
    type: SAVE_SCENARIO,
  };
}

export function newScenario(actionsHash) {
  return function (dispatch) {
    dispatch(requestScenario())
    return axios.get(RollScenarioPath(actionsHash.id))
      .then(function(json) {
        dispatch(receiveScenario(json.data))
      })
  }
}

export function loadScenario(actionsHash) {
  return function (dispatch) {
    dispatch(requestScenario())
    return axios.get(LoadScenarioPath(actionsHash.id, actionsHash.uuid))
      .then(json =>
        dispatch(receiveScenario(json.data))
      )
  }
}

export function saveScenario(actionsHash) {
  return function (dispatch) {
    dispatch(saveScenarioEvent())
    return (
      axios.post(SaveScenarioPath(actionsHash.id), {
        scenario: actionsHash.scenario
      })
      .then(function(json) {
        browserHistory.push(`/generators/${actionsHash.id}/scenario/${json.data.uuid}`)
        dispatch(receiveScenario(json.data))
      })
    )
  }
}

export function updateScenario(actionsHash) {
  return function (dispatch) {
    dispatch(saveScenarioEvent())
    return (
      axios.patch(UpdateScenarioPath(actionsHash.id, actionsHash.uuid), {
        scenario: actionsHash.scenario
      })
      .then(function(json) {
        browserHistory.push(`/generators/${actionsHash.id}/scenario/${json.data.uuid}`)
        dispatch(receiveScenario(json.data))
      })
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
    return axios.get(RerollColumnPath(generatorId, columnId))
      .then(json =>
        dispatch(receiveColumn(json.data))
      )
  }
}