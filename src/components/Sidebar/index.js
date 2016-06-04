import React, { Component } from 'react'
import { Link } from 'react-router'
import Styles from './styles'

export default class Sidebar extends Component {
  componentDidMount() {
    this.props.actions.fetchGenerators()
  }

  renderGenerator(generator) {
    return (
      <Link
        to={`/generators/${generator.id}`}
        key={generator.id}
        style={Styles.link}>
        {generator.id}: {generator.subject.name}
      </Link>
    )
  }

  render() {
    return (
      <div>
        {this.props.generators.map(this.renderGenerator)}
      </div>
    );
  }
}
