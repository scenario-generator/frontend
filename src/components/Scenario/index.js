import React, { Component } from 'react'
import _ from 'lodash'
import Styles from './styles'

export default class Sidebar extends Component {
  componentDidMount() {
    this.fetchNewScenario()
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.id != newProps.params.id) {
      this.fetchNewScenario(newProps.params.id)
    }
  }

  fetchNewScenario(id = false) {
    id = id ? id : this.props.params.id
    this.props.actions.fetchScenario(id)
  }

  renderColumn(column) {
    return (
      <div key={`${column.id}-${column.name}`}>
        <span>{column.name}: </span>
        {_.map(column.options, (option) => <span key={`${option.id}-${option.text}`}>{option.text}</span>)}
      </div>
    )
  }

  gatherColumns(columns) {
    let columnArray = [];
    _.each(columns, function(column){
      columnArray = columnArray.concat(column)
      columnArray = columnArray.concat(this.gatherColumns(column.columns))
    }.bind(this))
    return columnArray
  }

  renderScenario() {
    let columns = this.gatherColumns(this.props.scenario.columns)
    return _.map(columns, this.renderColumn)
  }

  renderRerollButton() {
    return (
      <div
        onClick={() => this.fetchNewScenario()}
        style={Styles.rerollButton}>
        Reroll!
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderRerollButton()}
        {this.renderScenario()}
      </div>
    );
  }
}
