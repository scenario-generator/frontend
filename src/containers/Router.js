import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import { Router, browserHistory } from 'react-router';
import ReactGA from 'react-ga';
import DocumentTitle from 'react-document-title';
import Strings from '../constants/strings';
import routes from '../routes';

/**
 * Component is exported for conditional usage in Root.js
 */
class RouterComponent extends Component {
  componentDidMount() {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);
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

export default RouterComponent;
