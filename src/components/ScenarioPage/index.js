// Libs
import Radium               from 'radium'
import DocumentTitle        from 'react-document-title'
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
  get urlIDIsRandom() {
    return this.props.params.id && this.props.params.id === 'random'
  }

  get generatorLoaded() {
    return this.props.generator.id
  }

  get generatorSlugMatchesURLId() {
    return this.props.generator.slug === this.props.params.id
  }

  // Lifecycle

  componentDidMount() {
    if (!this.generatorSlugMatchesURLId) {
      if (!this.urlIDIsRandom || !this.generatorLoaded) {
        fetchScenario(this.props, this.props.params.id, this.props.params.uuid)
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.shouldReload(newProps.params.id, newProps.params.uuid)) {
      let id = newProps.params.id || 'random';
      fetchScenario(this.props, id, newProps.params.uuid)
    }
  }

  shouldReload(newId, newUUID) {
    let idChanged = this.props.params.id !== newId
    let uuidChanged = this.props.params.uuid !== newUUID
    return idChanged || uuidChanged
  }

  // Callbacks

  onSave() {
    this.props.actions.saveScenario(getScenarioActionHash(this.props))
  }

  // Renderers

  documentTitle() {
    if (this.props.params.id && !this.urlIDIsRandom) {
      let type = this.props.generator.kind || 'Scenario'
      return Strings.generatorPageTitle(type, this.props.generator.name)
    }

    return Strings.rootPageTitle
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
        color={'orange'}
        text={Strings.buttons.reroll}
      />
    )
  }

  renderSaveButton() {
    return (
      <Button
        color={'purple'}
        onClick={this.onSave.bind(this)}
        text={Strings.buttons.save}
      />
    )
  }

  renderBuyButton() {
    if(this.props.generator.ad_link) {
      return (
        <Button
          href={this.props.generator.ad_link}
          color={'red'}
          text={Strings.buttons.getGame}
        />
      )
    }
    return <Button hidden />
  }

  renderAd(key) {
    return (
      <Ad
        key={key}
        ckey={key}
      />
    )
  }

  render() {
    let generatorName, image;
    if(this.props.generator) {
      generatorName = this.props.generator.name;
      image = Backgrounds[generatorName];
    }

    return (
      <DocumentTitle title={this.documentTitle()}>
        <FadedBackground image={image}>
          {this.renderAd(generatorName)}
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
