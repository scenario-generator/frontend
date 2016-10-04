import React, { Component } from 'react'
import Radium from 'radium';
import { Link, browserHistory } from 'react-router';
import Styles from './styles'
import Button from '../Button'
import Strings from '../../constants/strings'
import Icons from '../../constants/images/icons'

const Tab = Radium(props => (
  <div
    style={[Styles.tab, props.active ? Styles.active : {}]}
    onClick={props.onClick}>
    <img
      style={Styles.tabImage}
      src={Icons[props.icon][props.active ? 'white' : 'blue']}
    />
    {props.text}
  </div>
));

export default Radium(class TabBar extends Component {
  active(tab) {
    return (
      (tab == 'list' && this.props.path == '/generators') ||
      (tab == 'subscribe' && this.props.path == '/subscribe') ||
      (tab == 'scenario' && this.props.path != '/subscribe' && this.props.path != '/generators')
    )
  }

  previousGenerator() {
    return this.props.generator && this.props.generator.slug ? this.props.generator.slug : 'random'
  }

  transitionToScenario() {
    browserHistory.push(`/generators/${this.previousGenerator()}`)
  }

  render() {
    return (
      <div style={Styles.container}>
        <Tab
          active={this.active('list')}
          onClick={() => browserHistory.push(`/generators`)}
          icon={'list'}
          text='Games List'
        />

        <Tab
          active={this.active('scenario')}
          icon={'dice'}
          onClick={this.transitionToScenario.bind(this)}
          text='Scenario'
        />

        <Tab
          active={this.active('subscribe')}
          icon={'dice'}
          onClick={() => browserHistory.push(`/subscribe`)}
          text='Subscribe'
        />
      </div>
    );
  }
})
