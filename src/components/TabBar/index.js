import React, { Component } from 'react'
import Radium from 'radium';
import { Link } from 'react-router';
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
  render() {
    return (
      <div style={Styles.container}>
        <Tab
          active={this.props.isOpen}
          onClick={this.props.actions.openSidebar}
          icon={'list'}
          text='Games List'
        />

        <Tab
          active={!this.props.isOpen}
          icon={'dice'}
          onClick={this.props.actions.closeSidebar}
          text='Scenario'
        />
      </div>
    );
  }
})
