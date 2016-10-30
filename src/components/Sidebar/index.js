import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import _ from 'lodash'
import Radium from 'radium'
import { Link } from 'react-router'
import Styles from './styles'

let Sidebar = class Sidebar extends Component {
  componentDidMount() {
    this.props.actions.fetchGenerators()
  }

  randomGeneratorID() {
    return _.sample(this.props.generators).slug;
  }

  navigateToRandomGenerator() {
    browserHistory.push(`/generators/${this.randomGeneratorID()}`)
    this.props.actions.closeSidebar()
  }

  activeStyles(buttonKey) {
    if(this.props.path == `/${buttonKey}`) {
      return Styles.activeLinkContainer
    }
    if(this.props.id == buttonKey) {
      return Styles.activeLinkContainer
    }
    return {}
  }

  renderRandomGenerator() {
    return (
      <div
        style={Styles.linkContainer}
        key={'random'}>
        <span
          onClick={this.navigateToRandomGenerator.bind(this)}
          style={Styles.link}>
          Random Generator
        </span>
      </div>
    )
  }

  renderSteamRandomizerLink() {
    return (
      <div
        style={Styles.linkContainer}
        key={'steam'}>
        <a
          href={'http://steam.scenariogenerator.net/'}
          style={Styles.link}>
          Random Steam Game
        </a>
      </div>
    )
  }

  renderFAQLink() {
    return (
      <div
        style={[Styles.linkContainer, this.activeStyles('faq')]}
        key={'faq'}>
        <Link
          to={'/faq'}
          style={Styles.link}>
          FAQ
        </Link>
      </div>
    )
  }

  renderGenerator(generator) {
    return (
      <div
        style={[Styles.linkContainer, this.activeStyles(generator.slug)]}
        key={generator.id}>
        <Link
          to={`/generators/${generator.slug}`}
          onClick={this.props.actions.closeSidebar}
          style={Styles.link}>
          {generator.name}
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div style={[Styles.container]}>
        <div style={Styles.content}>
          {this.renderRandomGenerator()}
          {this.renderSteamRandomizerLink()}
          {this.props.generators.map(this.renderGenerator.bind(this))}
          {this.renderFAQLink()}
        </div>
      </div>
    );
  }
}

export default Radium(Sidebar)