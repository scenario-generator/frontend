import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './store/configureStore';
import Root from './containers/Root'

const store = configureStore(window.__data);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);

if(process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
}
