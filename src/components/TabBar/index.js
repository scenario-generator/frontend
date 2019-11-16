import React, { Component } from 'react'
import Radium from 'radium';
import { browserHistory } from 'react-router';
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faDiceD20, faListUl } from '@fortawesome/free-solid-svg-icons'
import Styles from './styles'

const Tab = Radium(props => (
  <div
    style={[Styles.tab, props.active ? Styles.active : {}]}
    onClick={props.onClick}>
    <div style={Styles.tabImage}>
      <FontAwesomeIcon icon={props.icon} />
    </div>
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
          icon={faGamepad}
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
          icon={faListUl}
          text='All Games'
        />

        { this.renderPreviousGeneratorTab() }

        <Tab
          active={this.active('subscribe')}
          icon={faDiceD20}
          onClick={this.navigateToRandomGenerator.bind(this)}
          text='Random Game'
        />
      </div>
    );
  }
})
