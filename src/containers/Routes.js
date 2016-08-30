import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
import DocumentTitle from 'react-document-title'
import Strings from '../constants/strings'
import {StyleRoot} from 'radium';
import App from './App';
import ScenarioContainer from './Scenario'
import NotFound from '../components/NotFound'

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Routes extends Component {
  render() {
    return (
      <DocumentTitle title={Strings.rootPageTitle}>
        <StyleRoot>
          <Router history={browserHistory} >
            <Route path="/" component={App}>
              <IndexRoute component={ScenarioContainer}/>
              <Route path="generators/:id" component={ScenarioContainer} />
              <Route path="generators/:id/scenario/:uuid" component={ScenarioContainer} />
              <Redirect from="game/:id" to="generators/:id" />
              <Redirect from="game/:id/scenario/:uuid" to="generators/:id/scenario/:uuid" />
              <Route path="*" component={NotFound} />
            </Route>
          </Router>
        </StyleRoot>
      </DocumentTitle>
    );
  }
};
