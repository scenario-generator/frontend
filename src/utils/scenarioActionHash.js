let generatorID = function(props) {
  if(props.generator && props.generator.slug) {
  	return props.generator.slug
  } else if(props.params && props.params.id) {
  	return props.params.id
  }

  return 'random'
}

let getScenarioActionHash = function(props, id = false, uuid = false) {
  return {
    id: id || generatorID(props),
    uuid: uuid || props.params.uuid,
    scenario: props.scenario,
  }
}

export default getScenarioActionHash;