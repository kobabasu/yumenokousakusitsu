import React from 'react';
import BrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';

const root = { www: '/drawing' };

// layouts
import NoMatch from './layouts/NoMatch';

// layouts/front
import Front from './layouts/front/Front';

// pages/front
import FrontHome from './pages/front/Home';
import FrontDraw from './pages/front/Draw';
import FrontComp from './pages/front/Comp';

const routes = React.createElement(
  Router,
  { history: new BrowserHistory() },
  React.createElement(
    Route,
    {
      component: Front
    },
    React.createElement(Route, { path: root.www + '/',
      components: {
        main: FrontHome
      } }),
    React.createElement(Route, { path: root.www + '/drawing0(:id)_comp.html',
      components: {
        main: FrontComp
      } }),
    React.createElement(Route, { path: root.www + '/drawing0(:id).html',
      components: {
        main: FrontDraw
      } })
  ),
  React.createElement(Route, { path: '*', components: NoMatch, global: root })
);

module.exports = routes;