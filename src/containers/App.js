import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GeneratorActions from '../actions/GeneratorActions'
import Colors from '../constants/styles/colors'
import Sizes from '../constants/styles/sizes'
import Header from '../components/Header'
import SidebarContainer from './Sidebar'

let App = class App extends Component {
  render() {
    const { generators, actions, children } = this.props
    return (
      <div style={Styles.container}>
        <Header />
        <div style={Styles.body}>
          <SidebarContainer />
          <div style={Styles.childrenContainer}>
              {children}
          </div>
        </div>
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
  },
  body: {
    position: 'relative',
    flexGrow: 1,
    background: Colors.blue.primary,
  },
  childrenContainer: {
    position: 'absolute',
    left: `${Sizes.sidebar}%`,
    width: `${100 - Sizes.sidebar}%`,
    height: '100%',
    overflowY: 'scroll',
  },
}

export default App
