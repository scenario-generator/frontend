import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import ReactGA from 'react-ga';
import DocumentTitle from 'react-document-title';
import Strings from '../constants/strings';
import {StyleRoot} from 'radium';
import App from './App';
import ScenarioContainer from './Scenario';
import SidebarContainer from './Sidebar';
import SubscribeContainer from './Subscribe';
import NotFound from '../components/NotFound';
import ENV from '../../env'

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Routes extends Component {
  componentDidMount() {
    ReactGA.initialize(ENV.analytics.google);
  }

  logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <DocumentTitle title={Strings.rootPageTitle}>
        <StyleRoot>
          <Router history={browserHistory} onUpdate={this.logPageView}>
            <Route path="/" component={App}>
              <IndexRoute component={ScenarioContainer}/>
              <Route path="generators" component={SidebarContainer} />
              <Route path="subscribe" component={SubscribeContainer} />
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
