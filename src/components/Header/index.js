import React, { Component } from 'react'
import Radium from 'radium';
import { Link } from 'react-router';
import Styles from './styles'
import StyleConstants from '../../constants/styles/css'
import Icons from '../../constants/images/icons'
import rerollScenario from '../../utils/rerollScenario'
import getScenarioActionHash from '../../utils/scenarioActionHash'
import Button from '../Button'
import Strings from '../../constants/strings'

export default Radium(class Header extends Component {
  mobileTitle() {
    if(this.props.generator) {
      return this.props.generator.name
    }
    return Strings.rootPageTitle
  }

  onSave() {
    this.props.actions.saveScenario(getScenarioActionHash(this.props))
  }

  renderSaveButton() {
    let extraStyles;
    if(this.props.isFetching) {
      extraStyles = Styles.hidden
    }

    return (
      <span
        style={[Styles.mobileButton, extraStyles, StyleConstants.mobile]}
        onClick={this.onSave.bind(this)}>
        Save
      </span>
    )
  }

  renderRerollButton() {
    if(this.props.isFetching) {
      return this.renderSpinner(true)
    } else {
      return (
        <span
          style={[Styles.mobileButton, StyleConstants.mobile]}
          onClick={() => rerollScenario(this.props)}>
          Reroll
        </span>
      )
    }
  }

  renderTitle() {
    return (
      <span style={[Styles.titleContainer, StyleConstants.desktop]}>
        <Link
          to={`/`}
          style={Styles.title}>
          {Strings.headerTitle}
        </Link>
      </span>
    )
  }

  renderSubscribeLink() {
    return (
      <span style={StyleConstants.desktop}>
        <Button
          to={'/subscribe'}
          color='green'>
          Get Email Updates
        </Button>
      </span>
    )
  }

  renderMobileTitle() {
    return (
      <span style={[Styles.titleContainer, StyleConstants.mobile]}>
        <Link
          to={`/`}
          style={Styles.title}>
          {this.props.isOpen ? Strings.headerTitle : this.mobileTitle()}
        </Link>
      </span>
    )
  }

  renderContent() {
    if(this.props.isOpen) {
      return (
        <span>
          {this.renderSaveButton()}
          {this.renderTitle()}
          {this.renderMobileTitle()}
          {this.renderRerollButton()}
        </span>
      )
    }
  }

  renderSpinner(mobile = false) {
    if(this.props.isFetching) {
      return (
        <span>
          <img
            src={Icons.spinner}
            style={[Styles.icon, mobile ? StyleConstants.mobile : StyleConstants.desktop]}
          />
        </span>
      )
    }
  }

  render() {
    return (
      <div style={Styles.container}>
        {this.props.isOpen ? null : this.renderSaveButton() }
        {this.renderTitle()}
        {this.renderMobileTitle()}
        {this.props.isOpen ? null : this.renderRerollButton() }
        <span style={Styles.right}>
          {this.renderSpinner()}
          {this.renderSubscribeLink()}
        </span>
      </div>
    )
  }
})
