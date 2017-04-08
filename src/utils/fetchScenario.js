import getScenarioActionHash from './scenarioActionHash'

let fetchNewScenario = function(props, id = false) {
  return props.actions.newScenario(getScenarioActionHash(props, id))
}

let fetchExistingScenario = function(props, id = false, uuid = false) {
  return props.actions.loadScenario(getScenarioActionHash(props, id, uuid))
}

let fetchScenario = function(props, id = false, uuid = false) {
  console.log('fetching scenario')
  if(uuid) {
    return fetchExistingScenario(props, id, uuid);
  } else {
    return fetchNewScenario(props, id);
  }
}

export default fetchScenario
