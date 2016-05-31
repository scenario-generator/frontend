import { REQUEST_GENERATORS, RECEIVE_GENERATORS } from '../constants/ActionTypes';
import GeneratorIndexPath from '../constants/api/GeneratorIndexPath.js';

export function receiveGenerators(json) {
  return {
    type: RECEIVE_GENERATORS,
    generators: json.generators,
  };
}

export function requestGenerators() {
  return {
    type: REQUEST_GENERATORS,
  };
}

export function fetchGenerators() {
  return function (dispatch) {
    dispatch(requestGenerators())
    return fetch(GeneratorIndexPath)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveGenerators(json))
      )
  }
}