import React from 'react';
import { StyleRoot } from 'radium';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';
import routes from './routes';
import { configureStore } from './store/configureStore';

const store = configureStore(window.__data);
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
    <StyleRoot>
  		<Router history={history}>
  			{ routes }
  		</Router>
    </StyleRoot>
	</Provider>,
	document.getElementById('app')
);

if(process.env.NODE_ENV == 'development' && module.hot) {
	module.hot.accept('./reducers', () => {
		store.replaceReducer(require('./reducers').default);
	});
}
