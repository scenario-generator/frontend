let generatorID = function(props) {
  return props.generator.slug || props.params.id || 'random'
}

let getScenarioActionHash = function(props, id = false, uuid = false) {
  return {
    id: id || generatorID(props),
    uuid: uuid || props.params.uuid,
    scenario: props.scenario,
  }
}

export default getScenarioActionHash;