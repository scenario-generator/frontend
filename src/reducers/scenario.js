import {
  RECEIVE_SCENARIO,
  REQUEST_SCENARIO,
  RECEIVE_COLUMN,
  REQUEST_COLUMN,
} from '../constants/ActionTypes';
import 'whatwg-fetch'

const initialState = {
  isFetching: false,
  scenario: {},
  generator: {
    name: '',
  },
  receivedAt: null,
}

const requestScenario = (state, action) =>
  Object.assign({}, state, {
    isFetching: true,
  });

const requestColumn = (state, action) =>
  Object.assign({}, state, {
    isFetching: true,
    fetchingColumnId: action.replacementColumn,
  });

const receiveScenario = (state, action) =>
  Object.assign({}, state, {
    isFetching: false,
    generator: action.generator,
    scenario: action.scenario,
    receivedAt: Date.now(),
  });

const replaceColumn = function(scenario, replacementColumn, replacementColumnId) {
  let columns = scenario.columns
  if(!columns) { return false }

  for(let i = 0; i < columns.length; i += 1) {
    let column = columns[i]
    if(column.id == replacementColumnId) {
      scenario.columns[i] = replacementColumn
      return true
    }
    if(replaceColumn(scenario.columns[i], replacementColumn, replacementColumnId)) {
      return true
    }
  }
  return false
}

const getScenarioWithNewColumn = function(scenario, replacementColumn) {
  let updatedScenario = Object.assign({}, scenario)
  let replacementColumnId = replacementColumn.id
  replaceColumn(updatedScenario, replacementColumn, replacementColumnId)
  return updatedScenario
}

const receiveColumn = (state, action) =>
  Object.assign({}, state, {
    isFetching: false,
    fetchingColumnId: null,
    scenario: getScenarioWithNewColumn(state.scenario, action.replacementColumn),
    receivedAt: Date.now(),
  });

export default function scenario(state = initialState, action) {
  switch (action.type) {
  case REQUEST_SCENARIO:
    return requestScenario(state, action)
  case RECEIVE_SCENARIO:
    return receiveScenario(state, action)
  case REQUEST_COLUMN:
    return requestColumn(state, action)
  case RECEIVE_COLUMN:
    return receiveColumn(state, action)
  default:
    return state;
  }
}
