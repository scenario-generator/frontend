import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import _ from 'lodash'
import Radium from 'radium'
import { Link } from 'react-router'
import Styles from './styles'

let Sidebar = class Sidebar extends Component {
  componentDidMount() {
    this.props.generatorActions.fetchGenerators()
  }

  randomGeneratorID() {
    return _.sample(this.props.generators).slug;
  }

  navigateToRandomGenerator() {
    browserHistory.push(`/generators/${this.randomGeneratorID()}`)
    this.props.actions.closeSidebar()
  }

  containerStyles() {
    let styles = [Styles.container]
    if(this.props.isOpen) {
      styles = styles.concat(Styles.open)
    } else {
      styles = styles.concat(Styles.closed)
    }
    return styles
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

  renderGenerator(generator) {
    return (
      <div
        style={Styles.linkContainer}
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
      <div style={this.containerStyles()}>
        <div style={Styles.content}>
          {this.renderRandomGenerator()}
          {this.renderSteamRandomizerLink()}
          {this.props.generators.map(this.renderGenerator.bind(this))}
        </div>
      </div>
    );
  }
}

export default Radium(Sidebar)