import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'
import DocumentTitle from 'react-document-title'
import Strings from '../../constants/strings'
import ImagePath from '../../constants/styles/images'
import Styles from './styles'

export default Radium(class Scenario extends Component {
  componentDidMount() {
    this.fetchNewScenario()
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.id !== newProps.params.id) {
      this.fetchNewScenario(newProps.params.id)
    }
  }

  fetchNewScenario(id = false) {
    id = id ? id : this.props.params.id
    this.props.actions.fetchScenario(id)
  }

  documentTitle() {
    if(this.props.generator) {
      let type = this.props.generator.name || 'Scenario'
      return `${type} generator for ${this.props.generator.subject.name}`
    }
    return Strings.rootPageTitle
  }

  backgroundStyles() {
    let backgroundImageStyles;
    if(this.props.generator) {
      let imagified_name = `${this.props.generator.subject.name.replace(/\s+/g, '_').toLowerCase()}.jpg`
      backgroundImageStyles = {
        backgroundImage: ImagePath(imagified_name)
      }
    }
    return [
      Styles.backgroundStyles,
      backgroundImageStyles
    ]
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
      <DocumentTitle title={this.documentTitle()}>
        <div style={this.backgroundStyles()}>
          {this.renderRerollButton()}
          {this.renderScenario()}
        </div>
      </DocumentTitle>
    );
  }
})
