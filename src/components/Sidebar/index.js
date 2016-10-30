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
    let styles = _.merge({}, Styles.linkContainer, this.activeStyles('random'))

    return (
      <div
        style={styles}
        onClick={this.navigateToRandomGenerator.bind(this)}
        key={'random'}>
        Random Generator
      </div>
    )
  }

  renderSteamRandomizerLink() {
    return (
      <a
        style={Styles.linkContainer}
        href={'http://steam.scenariogenerator.net/'}
        key={'steam'}>
        Random Steam Game
      </a>
    )
  }

  renderFAQLink() {
    let styles = _.merge({}, Styles.linkContainer, this.activeStyles('faq'))

    return (
      <Link
        style={styles}
        to={'/faq'}
        key={'faq'}>
        FAQ
      </Link>
    )
  }

  renderGenerator(generator) {
    let styles = _.merge({}, Styles.linkContainer, this.activeStyles(generator.slug))

    return (
      <Link
        to={`/generators/${generator.slug}`}
        style={styles}
        key={generator.id}>
        {generator.name}
      </Link>
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