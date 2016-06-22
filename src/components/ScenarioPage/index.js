import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'
import { browserHistory } from 'react-router'
import DocumentTitle from 'react-document-title'
import Strings from '../../constants/strings'
import Backgrounds from '../../constants/images/backgrounds'
import Styles from './styles'
import FadedBackground from '../FadedBackground'
import Button from '../Button'
import Scenario from '../Scenario'

export default Radium(class ScenarioPage extends Component {
  componentDidMount() {
    this.fetchScenarioFunction(this.props.params)(this.props.params.id, this.props.params.uuid)
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.id !== newProps.params.id ||
       this.props.params.uuid !== newProps.params.uuid) {
      this.fetchScenarioFunction(newProps.params)(newProps.params.id, newProps.params.uuid)
    }
  }

  fetchScenarioFunction(params) {
    if(params.uuid) { return this.fetchSavedScenario.bind(this) }
    return this.fetchNewScenario.bind(this)
  }

  fetchNewScenario(id = false) {
    id = id ? id : this.props.params.id
    if(this.props.params.uuid) { browserHistory.push(`/generators/${id}`) }
    this.props.actions.fetchScenario(id || 'random')
  }

  fetchSavedScenario(id = false, uuid = false) {
    id = id ? id : this.props.params.id
    uuid = uuid ? uuid : this.props.params.uuid
    this.props.actions.fetchSavedScenario(id, uuid)
  }

  rerollColumnFunction(generatorId, columnId) {
    return function() {
      if(this.props.params.uuid) { browserHistory.push(`/generators/${id}`) }
      this.props.actions.fetchColumn(generatorId, columnId)
    }
  }

  documentTitle() {
    if(this.props.generator) {
      let type = this.props.generator.name || 'Scenario'
      return `${type} generator for ${this.props.generator.subject.name}`
    }
    return Strings.rootPageTitle
  }

  renderTitle() {
    return (
      <div style={Styles.title}>
        {this.props.generator.subject.name}
      </div>
    )
  }

  renderButtons() {
    return (
      <div style={Styles.buttonBar}>
        {this.renderSaveButton()}
        {this.renderRerollButton()}
        {this.renderBuyButton()}
      </div>
    )
  }

  renderRerollButton() {
    return (
      <Button
        onClick={() => this.fetchNewScenario()}
        color={'orange'}>
        Reroll Scenario
      </Button>
    )
  }


  renderSaveButton() {
    return (
      <Button
        color={'purple'}>
        Save Scenario
      </Button>
    )
  }

  renderBuyButton() {
    if(this.props.generator.subject.ad_link) {
      return (
        <Button
          href={this.props.generator.subject.ad_link}
          color={'red'}>
          Get This Game
        </Button>
      )
    }
    return <Button color='' />
  }

  render() {
    let subjectName, image;
    if(this.props.generator) {
      subjectName = this.props.generator.subject.name
      image = Backgrounds[subjectName];
    }

    return (
      <DocumentTitle title={this.documentTitle()}>
        <FadedBackground image={image}>
          {this.renderTitle()}
          {this.renderButtons()}
          <Scenario
            {...this.props}
            scenario={this.props.scenario}
          />
        </FadedBackground>
      </DocumentTitle>
    );
  }
})
