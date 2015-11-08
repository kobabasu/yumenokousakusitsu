import React from 'react'
import BrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route } from 'react-router'

const root = { documentRoot: '/drawing' };

// layouts
import NoMatch      from './layouts/NoMatch'

// layouts/front
import Front        from './layouts/front/Front'

// pages/front
import FrontHome    from './pages/front/Home'
import FrontDraw    from './pages/front/Draw'

const routes = (
  <Router history={new BrowserHistory}>
    <Route
      component={Front}
      >
      <Route path={root.documentRoot + '/'}
        components={{
          main: FrontHome
        }} />

      <Route path={root.documentRoot + '/drawing0(:id).html'}
        components={{
          main: FrontDraw
        }} />
    </Route>

    <Route path="*" components={NoMatch} global={root} />
  </Router>
);

module.exports = routes;
