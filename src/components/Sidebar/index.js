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

  renderGenerator(generator) {
    return (
      <div
        style={Styles.linkContainer}
        key={generator.id}>
        <Link
          to={`/generators/${generator.slug}`}
          style={Styles.link}>
          {generator.name}
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div style={Styles.container}>
        <div style={Styles.content}>
          {this.renderRandomGenerator()}
          {this.props.generators.map(this.renderGenerator)}
        </div>
      </div>
    );
  }
}

export default Radium(Sidebar)