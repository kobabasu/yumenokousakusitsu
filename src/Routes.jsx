import React from 'react'
import BrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route } from 'react-router'

const root = { www: '/drawing' };

// layouts
import NoMatch      from './layouts/NoMatch'

// layouts/front
import Front        from './layouts/front/Front'

// pages/front
import FrontHome     from './pages/front/Home'
import FrontDraw     from './pages/front/Draw'
import FrontComp     from './pages/front/Comp'
import FrontTemp     from './pages/front/Temp'
import FrontThankyou from './pages/front/Thankyou'

const routes = (
  <Router history={new BrowserHistory}>
    <Route
      component={Front}
      >
      <Route path={root.www + '/'}
        components={{
          main: FrontHome
        }} />

      <Route path={root.www + '/drawing0(:id)_comp.html'}
        components={{
          main: FrontComp
        }} />

      <Route path={root.www + '/thankyou0(:id).html'}
        components={{
          main: FrontThankyou
        }} />

      <Route path={root.www + '/drawing0(:id).html'}
        components={{
          main: FrontDraw
        }} />

      <Route path={root.www + '/template0(:id).html'}
        components={{
          main: FrontTemp
        }} />

    </Route>

    <Route path="*" components={NoMatch} global={root} />
  </Router>
);

module.exports = routes;
