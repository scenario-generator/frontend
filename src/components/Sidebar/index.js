import React, { Component } from 'react';

export default class Sidebar extends Component {
  componentDidMount() {
    this.props.actions.fetchGenerators()
  }

  renderGenerator(generator) {
    return (
      <div key={generator.id}>{generator.id}: {generator.subject.name}</div>
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
