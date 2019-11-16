import React, { Component } from 'react'
import Radium               from 'radium';
import { Link }             from 'react-router';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faSyncAlt }        from '@fortawesome/free-solid-svg-icons'

import Styles                from './styles'
import StyleConstants        from '../../../constants/styles/css'
import rerollScenario        from '../../../utils/rerollScenario'
import getScenarioActionHash from '../../../utils/scenarioActionHash'

export default Radium(class MobileHeader extends Component {
  onSave() {
    this.props.actions.saveScenario(getScenarioActionHash(this.props))
  }

  onGeneratorPage() {
    return this.props.path !== '/generators' && this.props.path !== '/subscribe'
  }

  saveButtonVisible() {
    return this.onGeneratorPage()
  }

  rerollButtonVisible() {
    return this.onGeneratorPage()
  }

  renderSaveButton() {
    if(!this.onGeneratorPage()) { return }

    let extraStyles;
    if(this.props.isFetching) {
      extraStyles = Styles.hidden
    }

    return (
      <span
        style={[Styles.button, extraStyles]}
        onClick={this.onSave.bind(this)}>
        Save
      </span>
    )
  }

  renderRerollButton() {
    if(!this.onGeneratorPage()) { return }

    if(this.props.isFetching) {
      return this.renderSpinner(true)
    } else {
      return (
        <span
          style={Styles.button}
          onClick={() => rerollScenario(this.props)}>
          Reroll
        </span>
      )
    }
  }

  renderTitle() {
    return (
      <span style={Styles.titleContainer}>
        <Link
          to={`/`}
          style={Styles.title}>
          {this.props.title}
        </Link>
      </span>
    )
  }

  renderSpinner() {
    if(this.props.isFetching) {
      return (
        <span>
          <FontAwesomeIcon
            icon={faSyncAlt}
            alt='Loading'
            style={Styles.icon}
            spin
          />
        </span>
      )
    }
  }

  render() {
    return (
      <div style={[Styles.container, StyleConstants.mobile]}>
        {this.renderSaveButton()}
        {this.renderTitle()}
        {this.renderRerollButton()}
      </div>
    )
  }
})
