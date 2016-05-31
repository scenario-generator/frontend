import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import * as GeneratorActions from '../actions/GeneratorActions'
import Header from '../components/Header'
import SidebarContainer from './Sidebar'
import ScenarioContainer from './Scenario'

export default class App extends Component {
  render() {
    const { generators, actions, children } = this.props
    return (
      <div>
        <Header />
        <div>
          <SidebarContainer />
          <Router history={browserHistory} >
            <Route path="generators/:id" component={ScenarioContainer} />
          </Router>
        </div>
      </div>
    )
  }
}

export default App
