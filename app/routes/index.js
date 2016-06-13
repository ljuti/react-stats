import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, Redirect } from 'react-router';
import App from '../containers/App.jsx';
import Dashboard from '../containers/Dashboard.jsx';
import Platform from '../containers/Platform.jsx';

export default function() {
  return (
    <Router history={ browserHistory } onUpdate={() => window.scrollTo(0,0)}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Dashboard } />
        <Route path="stats" component={ Dashboard }>
        </Route>
        <Route path="stats/:platform" component={ Platform } />
      </Route>
    </Router>
  )
};
