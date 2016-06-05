import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import Styles from './styles'

let Sidebar = class Sidebar extends Component {
  componentDidMount() {
    this.props.actions.fetchGenerators()
  }

  renderGenerator(generator) {
    return (
      <div
        style={Styles.linkContainer}
        key={generator.id}>
        <Link
          to={`/generators/${generator.id}`}
          style={Styles.link}>
          {generator.subject.name}
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div style={Styles.container}>
        <div style={Styles.content}>
          {this.props.generators.map(this.renderGenerator)}
        </div>
      </div>
    );
  }
}

export default Radium(Sidebar)