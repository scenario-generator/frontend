import React, { Component, PropTypes } from 'react'
import Radium from 'radium';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GeneratorActions from '../actions/GeneratorActions'
import Colors from '../constants/styles/colors'
import StyleConstants from '../constants/styles/css'
import Sizes from '../constants/styles/sizes'
import HeaderContainer from './Header'
import TabBarContainer from './TabBar'
import SidebarContainer from './Sidebar'

let App = class App extends Component {
  renderHeader(path) {
    return (
      <HeaderContainer
        params={this.props.params}
        path={path}
      />
    )
  }

  renderSidebar(path) {
    return (
      <span style={StyleConstants.desktop}>
        <SidebarContainer path={path} id={this.props.params.id} />
      </span>
    )
  }

  renderContent(content) {
    return (
      <div style={Styles.childrenContainer}>
        {content}
      </div>
    )
  }

  renderTabBar(path) {
    return (
      <TabBarContainer path={path} />
    )
  }

  render() {
    document.body.style.backgroundColor = Colors.blue.primary;

    const { generators, actions, children } = this.props;

    let path = this.props.location.pathname;

    return (
      <div style={Styles.container}>
        {this.renderHeader(path)}

        <div style={Styles.body}>
          {this.renderSidebar(path)}
          {this.renderContent(children)}
        </div>

        {this.renderTabBar(path)}
      </div>
    )
  }
}

const Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap',
    height: '100%',
    position: 'absolute',
  },
  body: {
    position: 'relative',
    top: Sizes.headerCompensation,
    flexGrow: 1,
    background: Colors.blue.primary,
    marginBottom: Sizes.headerCompensation,
    '@media (max-device-width: 992px)': {
      marginBottom: Sizes.tabBarHeight + Sizes.headerCompensation,
    },
  },
  childrenContainer: {
    position: 'absolute',
    left: `${Sizes.sidebar}%`,
    width: `${100 - Sizes.sidebar}%`,
    height: '100%',
    overflowY: 'scroll',
    '@media (max-device-width: 992px)': {
      left: 0,
      width: '100%',
    },
  },
}

export default Radium(App)
