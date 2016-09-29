// Libs
import _                    from 'lodash'
import Radium               from 'radium'
import DocumentTitle        from 'react-document-title'
import { browserHistory }   from 'react-router'
import React, { Component } from 'react'

// Constants
import Styles          from './styles'
import Strings         from '../../constants/strings'
import Backgrounds     from '../../constants/images/backgrounds'
import StyleConstants  from '../../constants/styles/css'

// Components
import Button          from '../Button'
import Scenario        from '../Scenario'
import FadedBackground from '../FadedBackground'
import Ad              from '../Ad'

// Utilities
import fetchScenario         from '../../utils/fetchScenario'
import rerollScenario        from '../../utils/rerollScenario'
import getScenarioActionHash from '../../utils/scenarioActionHash'

export default Radium(class ScenarioPage extends Component {
  // Lifecycle

  componentDidMount() {
    fetchScenario(this.props, false, this.props.params.uuid)
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.id !== newProps.params.id ||
       this.props.params.uuid !== newProps.params.uuid) {
      let id = newProps.params.id || 'random';
      fetchScenario(this.props, id, newProps.params.uuid)
    }
  }

  // Callbacks

  onSave() {
    this.props.actions.saveScenario(getScenarioActionHash(this.props))
  }

  // Renderers

  documentTitle() {
    if(this.props.generator) {
      let type = this.props.generator.kind || 'Scenario'
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
      <div style={[Styles.buttonBar, StyleConstants.desktop]}>
        {this.renderSaveButton()}
        {this.renderRerollButton()}
        {this.renderBuyButton()}
      </div>
    )
  }

  renderRerollButton() {
    return (
      <Button
        onClick={() => rerollScenario(this.props)}
        color={'orange'}>
        Reroll
      </Button>
    )
  }


  renderSaveButton() {
    return (
      <Button
        color={'purple'}
        onClick={this.onSave.bind(this)}>
        Save
      </Button>
    )
  }

  renderBuyButton() {
    if(this.props.generator.ad_link) {
      return (
        <Button
          href={this.props.generator.ad_link}
          color={'red'}>
          Get Game
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
          <Ad
            size='halfBanner'
            key={this.props.generator.name}
          />
          <Scenario
            {...this.props}
            scenario={this.props.scenario}
          />
        </FadedBackground>
      </DocumentTitle>
    );
  }
})
