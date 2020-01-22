import React, { Component } from 'react';
import { StyleRoot }        from 'radium';
import { Router }           from 'react-router';
import ReactGA              from 'react-ga';

// Constants
import Strings from '../constants/strings';

// Components
import routes from '../routes';
import Head   from '../components/Head'

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
      <div>
        <Head title={Strings.rootPageTitle} />

        <StyleRoot>
          <Router
            history={history}
            onUpdate={this.logPageView}>
            { routes }
          </Router>
        </StyleRoot>
      </div>
    );
  }
};

export default RouterComponent;
