import getScenarioActionHash from './scenarioActionHash'

let fetchNewScenario = function(props, id = false) {
  props.actions.newScenario(getScenarioActionHash(props, id))
}

let fetchExistingScenario = function(props, id = false, uuid = false) {
  props.actions.loadScenario(getScenarioActionHash(props, id, uuid))
}

let fetchScenario = function(props, id = false, uuid = false) {
  if(uuid) {
    fetchExistingScenario(props, id, uuid);
  } else {
    fetchNewScenario(props, id);
  }
}

export default fetchScenario