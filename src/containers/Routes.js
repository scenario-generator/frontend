import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import DocumentTitle from 'react-document-title'
import Strings from '../constants/strings'
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
        <Router history={browserHistory} >
          <Route path="/" component={App}>
            <IndexRoute component={ScenarioContainer}/>
            <Route path="generators/:id" component={ScenarioContainer} />
            <Route path="generators/:id/scenario/:uuid" component={ScenarioContainer} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </DocumentTitle>
    );
  }
};
