import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'
import Styles from './styles'
import Column from '../Column'

export default Radium(class Scenario extends Component {
  gatherColumns(columns) {
    let columnArray = [];
    _.each(columns, function(column){
      columnArray = columnArray.concat(column)
      columnArray = columnArray.concat(this.gatherColumns(column.columns))
    }.bind(this))
    return columnArray
  }

  renderColumn(column) {
    return (
      <Column
        {...this.props}
        key={`column-${column.id || Math.random()}-${column.name}-${Math.random()}`}
        column={column}
        fetching={column.id === this.props.fetchingColumnId}
      />
    )
  }

  render() {
    let columns = this.gatherColumns(this.props.scenario.columns)
    return (
      <div style={Styles.scenario}>
        {_.map(columns, (column) => this.renderColumn(column))}
      </div>
    )
  }
})
