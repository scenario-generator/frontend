import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';

/**
 * Component is exported for conditional usage in Root.js
 */
class Root extends Component {
  componentDidMount() {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: process.env.REACT_APP_PAGE_ADS_CLIENT,
        enable_page_level_ads: true
      });
    }
    catch(err) {}
  }

  render() {
    const { store, history } = this.props;
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    );
  }
};

export default Root;
