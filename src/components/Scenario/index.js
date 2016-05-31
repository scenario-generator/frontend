import React, { Component } from 'react';

export default class Sidebar extends Component {
  componentDidMount() {
    this.props.actions.fetchScenario(this.props.params.id)
  }

  render() {
    return (
      <div>
        {`${this.props.scenario}`}
      </div>
    );
  }
}
