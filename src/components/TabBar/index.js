import React, { Component } from 'react'
import Radium from 'radium';
import { browserHistory } from 'react-router';
import _ from 'lodash'
import Styles from './styles'
import Icons from '../../constants/images/icons'

const Tab = Radium(props => (
  <div
    style={[Styles.tab, props.active ? Styles.active : {}]}
    onClick={props.onClick}>
    <img
      alt='Tab Icon'
      style={Styles.tabImage}
      src={Icons[props.icon][props.active ? 'white' : 'blue']}
    />
    {props.text}
  </div>
));

export default Radium(class TabBar extends Component {
  active(tab) {
    return (
      (tab === 'list' && this.props.path === '/generators') ||
      (tab === 'subscribe' && this.props.path === '/subscribe') ||
      (tab === 'scenario' && this.props.path !== '/subscribe' && this.props.path !== '/generators')
    )
  }

  previousGenerator() {
    if (this.props.generator && this.props.generator.slug) {
      return this.props.generator.slug
    }

    return 'random'
  }

  transitionToScenario() {
    browserHistory.push(`/generators/${this.previousGenerator()}`)
  }

  randomGeneratorID() {
    return _.sample(this.props.generators).slug;
  }

  navigateToRandomGenerator() {
    browserHistory.push(`/generators/${this.randomGeneratorID()}`)
  }

  renderPreviousGeneratorTab () {
    if (this.props.generator.id) {
      return (
        <Tab
          active={this.active('scenario')}
          icon={'dice'}
          onClick={this.transitionToScenario.bind(this)}
          text={'Generator'}
        />
      )
    }
  }

  render() {
    return (
      <div style={Styles.container}>
        <Tab
          active={this.active('list')}
          onClick={() => browserHistory.push(`/generators`)}
          icon={'list'}
          text='All Games'
        />

        { this.renderPreviousGeneratorTab() }

        <Tab
          active={this.active('subscribe')}
          icon={'dice'}
          onClick={this.navigateToRandomGenerator.bind(this)}
          text='Random Game'
        />
      </div>
    );
  }
})
