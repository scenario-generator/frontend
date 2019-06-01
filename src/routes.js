import React from 'react';
import { Route, Redirect, IndexRedirect } from 'react-router';
import App from './containers/App';
import ScenarioContainer from './containers/Scenario';
import SidebarContainer from './containers/Sidebar';
import SubscribeContainer from './containers/Subscribe';
import Faq from './components/Faq';
import NotFound from './components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="generators/random" />
    <Route path="generators" component={SidebarContainer} />
    <Route path="subscribe" component={SubscribeContainer} />
    <Route path="generators/:id" component={ScenarioContainer} />
    <Route path="generators/:id/scenario/:uuid" component={ScenarioContainer} />
    <Route path="faq" component={Faq} />
    <Redirect from="game/:id" to="generators/:id" />
    <Redirect from="game/:id/scenario/:uuid" to="generators/:id/scenario/:uuid" />
    <Route path="*" component={NotFound} />
  </Route>
);
