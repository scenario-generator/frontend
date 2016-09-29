import React, { Component } from 'react'
import Radium from 'radium';
import { Link } from 'react-router';
import Styles from './styles'
import StyleConstants from '../../constants/styles/css'
import Icons from '../../constants/images/icons'
import rerollScenario from '../../utils/rerollScenario'
import Button from '../Button'
import Strings from '../../constants/strings'

export default Radium(class Header extends Component {
  mobileTitle() {
    if(this.props.generator) {
      return this.props.generator.name
    }
    return Strings.rootPageTitle
  }

  renderSaveButton() {
    return (
      <span
        style={[Styles.mobileButton, StyleConstants.mobile]}
        onClick={() => rerollScenario(this.props)}>
        Save
      </span>
    )
  }

  renderRerollButton() {
    if(!this.props.isFetching) {
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

  renderSpinner() {
    if(this.props.isFetching) {
      return (
        <span>
          <img
            src={Icons.spinner}
            style={Styles.icon}
          />
        </span>
      )
    }
  }

  render() {
    if(this.props.isOpen) {
      return (
        <div style={Styles.container}>
          {this.renderTitle()}
          {this.renderMobileTitle()}
          {this.renderSpinner()}
        </div>
      )
    } else {
      return (
        <div style={Styles.container}>
          {this.renderSaveButton()}
          {this.renderTitle()}
          {this.renderMobileTitle()}
          {this.renderRerollButton()}
          {this.renderSpinner()}
        </div>
      )
    }
  }
})
