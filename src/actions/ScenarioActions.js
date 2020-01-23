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

function handleSuccessfulNewScenario(dispatch, response, currentId) {
  dispatch(receiveScenario(response.data))

  let canonicalSlug = response.data.generator.slug
  if (currentId !== canonicalSlug) {
    browserHistory.replace(`/generators/${canonicalSlug}`)
  }
}

function catchErroredNewScenario () {
  browserHistory.push('/generators/random')
}

export function newScenario(actionsHash) {
  return function (dispatch) {
    dispatch(requestScenario())

    return axios.get(RollScenarioPath(actionsHash.id))
      .then((response) => handleSuccessfulNewScenario(dispatch, response, actionsHash.id))
      .catch(catchErroredNewScenario)
  }
}

function handleSuccessfulLoadScenario(dispatch, response, currentId, currentUuid) {
  dispatch(receiveScenario(response.data))

  let canonicalSlug = response.data.generator.slug
  if (currentId !== canonicalSlug) {
    browserHistory.replace(`/generators/${canonicalSlug}/scenario/${currentUuid}`)
  }
}

function catchErroredLoadScenario (generatorId) {
  browserHistory.push(`/generators/${generatorId}`)
}

export function loadScenario(actionsHash) {
  return function (dispatch) {
    dispatch(requestScenario())
    return axios.get(LoadScenarioPath(actionsHash.id, actionsHash.uuid))
      .then((response) => handleSuccessfulLoadScenario(dispatch, response, actionsHash.id, actionsHash.uuid))
      .catch((error) => catchErroredLoadScenario(actionsHash.id))
  }
}

export function saveScenario(actionsHash) {
  if(actionsHash.uuid) { return updateScenario(actionsHash) }

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
