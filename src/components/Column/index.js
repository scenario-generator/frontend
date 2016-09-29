import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'
import ReactTooltip from 'react-tooltip'
import StyleConstants from '../../constants/styles/css'
import Icons from '../../constants/images/icons'
import Styles from './styles'

export default Radium(class ScenarioPage extends Component {
  rerollColumnFunction(generatorId, columnId) {
    return () => this.props.actions.fetchColumn(generatorId, columnId)
  }

  renderIcons(column) {
    if(!column.id) { return }
    return (
      <div style={Styles.iconsContainer}>
        {this.renderHelp(column)}
        {this.renderReroll(column)}
      </div>
    )
  }

  renderReroll(column) {
    if(this.props.fetching) {
      return this.renderSpinner()
    }

    return (
      <span>
        <img
          src={Icons.refresh}
          style={Styles.icon}
          onClick={this.rerollColumnFunction(this.props.generator.id, column.id)}
        />
      </span>
    )
  }

  renderHelp(column) {
    if(column.help) {
      let columnTooltipID = `column-info-${column.id}`
      return (
        <span>
          <img
            src={Icons.info}
            style={Styles.icon}
            data-tip={column.help}
            data-for={columnTooltipID}
          />
          <ReactTooltip
            type="info"
            id={columnTooltipID}
          />
        </span>
      )
    }
  }

  renderOption(text, id) {
    return (
      <div
        style={Styles.option}
        key={`option-${id}-${text}-${Math.floor((Math.random() * 100000))}`}>
        {text}
      </div>
    )
  }

  renderSpinner() {
    return (
      <span>
        <img
          src={Icons.spinner}
          style={Styles.icon}
        />
      </span>
    )
  }

  renderOptions(column) {

    if(column.options.length < 1) {
      return this.renderOption('None', column.id)
    }

    return _.map(column.options, (option) => (
      this.renderOption(option.text, option.id)
    ))
  }

  render() {
    let column = this.props.column;

    return (
      <div style={Styles.column}>
        <div style={Styles.columnName}>
          {column.name}
          {this.renderIcons(column)}
        </div>
        {this.renderOptions(column)}
      </div>
    )
  }
})
