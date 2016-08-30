import fetchScenario from './fetchScenario'
import { browserHistory } from 'react-router'

let reroll = function(props) {
  if(props.params.uuid) {
    browserHistory.push(`/generators/${props.params.id}`)
  } else {
    fetchScenario(props)
  }
}

export default fetchScenario