import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GeneratorActions from '../actions/GeneratorActions'
import Header from '../components/Header'
import SidebarContainer from './Sidebar'

let App = class App extends Component {
  render() {
    const { generators, actions, children } = this.props
    return (
      <div>
        <Header />
        <div>
          <SidebarContainer />
          {children}
        </div>
      </div>
    )
  }
}

export default App
