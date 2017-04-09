import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import { Router, browserHistory } from 'react-router';
import ReactGA from 'react-ga';
import DocumentTitle from 'react-document-title';
import Strings from '../constants/strings';
import ENV from '../../env'
import routes from '../routes';

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class RouterComponent extends Component {
  componentDidMount() {
    ReactGA.initialize(ENV.analytics.google);
  }

  logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    var history = this.props.history;

    return (
      <DocumentTitle title={Strings.rootPageTitle}>
        <StyleRoot>
          <Router
            history={history}
            onUpdate={this.logPageView}>
            { routes }
          </Router>
        </StyleRoot>
      </DocumentTitle>
    );
  }
};
