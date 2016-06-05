import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'
import DocumentTitle from 'react-document-title'
import Strings from '../../constants/strings'
import Colors from '../../constants/styles/colors'
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
      let imagifiedName = `${this.props.generator.subject.name.replace(/\s+/g, '_').toLowerCase()}.jpg`
      let imagePath = ImagePath(imagifiedName)
      backgroundImageStyles = {
        height: '100%',
        backgroundColor: Colors.blue.primary,
        backgroundSize: 'contain',
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        backgroundImage: imagePath,
        backgroundImage: `-moz-linear-gradient(top, transparent 0%, ${Colors.blue.primary} 50%), ${imagePath}`,
        backgroundImage: `-webkit-gradient(linear, left top, left bottom, color-stop(0%, transparent), color-stop(50%, ${Colors.blue.primary})), ${imagePath}`,
        backgroundImage: `linear-gradient(to bottom, transparent, ${Colors.blue.primary}, ${Colors.blue.primary}), ${imagePath}`,
        filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr='transparent', endColorstr='${Colors.blue.primary}', GradientType=0)`
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
