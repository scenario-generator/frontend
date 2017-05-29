import React from 'react';
import { StyleRoot } from 'radium';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import { configureStore } from './store/configureStore';
import serialize from 'serialize-javascript';
import * as GeneratorActions from './actions/GeneratorActions';
import * as ScenarioActions from './actions/ScenarioActions';
import fetchScenario from './utils/fetchScenario';

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    // 500 Error
    if(error) {
      res.status(500).send(error.message);

    // 302 Redirection
    } else if(redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);

    // 200 Valid
    } else if(renderProps) {

      var appHTML = '';
      var store = configureStore();

      store.dispatch(GeneratorActions.fetchGenerators()).then(function () {

        var fetchScenarioProps = {
          params: renderProps.params,
          actions: ScenarioActions,
        }

        store.dispatch(
          fetchScenario(fetchScenarioProps,
                        fetchScenarioProps.params.id,
                        fetchScenarioProps.params.uuid)
        ).then(function () {
          if(process.env.NODE_ENV == 'production') {
            appHTML = renderToString(
              <Provider store={store}>
                <StyleRoot>
                  <RouterContext {...renderProps} />
                </StyleRoot>
              </Provider>
            );
          }

          const html = createPage(appHTML, store)
          res.send(html)
        })
      })

    // 404 Not found
    } else {
      res.status(404).send('Not found');
    }
  });
};

function createPage(html, store) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Scenario Generator | Random Challenges for Popular Games</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css">
        <meta name="viewport" content="initial-scale=1">
        <meta property="og:title" content="Scenario Generator | Random Challenges for Popular Games" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="920748624615968"/>
        <meta name="Description" content="Scenario Generator has challenge randomizers for all your favourite games including Skyrim, Minecraft, and Pokemon." >
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- Redux initial data -->
        <script>window.__data=${serialize(store.getState())}</script>
      </head>
      <body>

        <body style="height: 100%; overflow: hidden">
          <div id="app" style="height: 100%">${html}</div>
          <script src='/bundle.js'></script>
        </body>

      </body>
    </html>
  `
}
