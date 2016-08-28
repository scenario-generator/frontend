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
  // Lifecycle

  componentDidMount() {
    this.getFetchScenarioFunction(this.props.params)()
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.id !== newProps.params.id ||
       this.props.params.uuid !== newProps.params.uuid) {
      this.getFetchScenarioFunction(newProps.params)(newProps.params.id, newProps.params.uuid)
    }
  }

  // Getters

  getGeneratorId() {
    return this.props.generator.slug || this.props.params.id || 'random'
  }

  getUUID() {
    return this.props.params.uuid
  }

  getScenario() {
    return this.props.scenario;
  }

  getScenarioActionsHash(id = false, uuid = false, scenario = false) {
    return {
      id: id || this.getGeneratorId(),
      uuid: uuid || this.getUUID(),
      scenario: scenario || this.getScenario()
    }
  }

  // Fetchers

  getFetchScenarioFunction(params) {
    if(params.uuid) { return this.fetchExistingScenario.bind(this) }
    return this.fetchNewScenario.bind(this)
  }

  fetchNewScenario(id = false) {
    this.props.actions.newScenario(this.getScenarioActionsHash(id))
  }

  fetchExistingScenario(id = false, uuid = false) {
    this.props.actions.loadScenario(this.getScenarioActionsHash(id, uuid))
  }

  // Callbacks

  onReroll() {
    if(this.props.params.uuid) {
      browserHistory.push(`/generators/${this.props.params.slug}`)
    } else {
      this.fetchNewScenario()
    }
  }

  getOnSaveFunction() {
    if(this.props.params.uuid) { return () => this.onSaveExisting() }
    return () => this.onSaveNew()
  }

  onSaveNew(id = false, scenario = false) {
    this.props.actions.saveScenario(this.getScenarioActionsHash(id, false, scenario))
  }

  onSaveExisting(id = false, uuid = false, scenario = false) {
    this.props.actions.updateScenario(this.getScenarioActionsHash(id, uuid, scenario))
  }

  // Renderers

  documentTitle() {
    if(this.props.generator) {
      let type = this.props.generator.name || 'Scenario'
      return `${type} generator for ${this.props.generator.name}`
    }
    return Strings.rootPageTitle
  }

  renderTitle() {
    return (
      <div style={Styles.title}>
        {this.props.generator.name}
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
        onClick={() => this.onReroll()}
        color={'orange'}>
        Reroll Scenario
      </Button>
    )
  }


  renderSaveButton() {
    return (
      <Button
        color={'purple'}
        onClick={this.getOnSaveFunction()}>
        Save Scenario
      </Button>
    )
  }

  renderBuyButton() {
    if(this.props.generator.ad_link) {
      return (
        <Button
          href={this.props.generator.ad_link}
          color={'red'}>
          Get This Game
        </Button>
      )
    }
    return <Button color='' />
  }

  render() {
    let generatorName, image;
    if(this.props.generator) {
      generatorName = this.props.generator.name
      image = Backgrounds[generatorName];
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
