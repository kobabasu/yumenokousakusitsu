'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouter = require('react-router');

var _NoMatch = require('./layouts/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _Front = require('./layouts/front/Front');

var _Front2 = _interopRequireDefault(_Front);

var _Home = require('./pages/front/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Draw = require('./pages/front/Draw');

var _Draw2 = _interopRequireDefault(_Draw);

var _Comp = require('./pages/front/Comp');

var _Comp2 = _interopRequireDefault(_Comp);

var _Temp = require('./pages/front/Temp');

var _Temp2 = _interopRequireDefault(_Temp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = { www: '/drawing' };

// layouts

// layouts/front

// pages/front

var routes = _react2.default.createElement(
  _reactRouter.Router,
  { history: new _createBrowserHistory2.default(), __source: {
      fileName: '../../../src/Routes.jsx',
      lineNumber: 20
    },
    __source: {
      fileName: '../../../src/Routes.jsx',
      lineNumber: 20
    }
  },
  _react2.default.createElement(
    _reactRouter.Route,
    {
      component: _Front2.default,
      __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 21
      },
      __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 21
      }
    },
    _react2.default.createElement(_reactRouter.Route, { path: root.www + '/',
      components: {
        main: _Home2.default
      }, __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 24
      },
      __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 24
      }
    }),
    _react2.default.createElement(_reactRouter.Route, { path: root.www + '/drawing0(:id)_comp.html',
      components: {
        main: _Comp2.default
      }, __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 29
      },
      __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 29
      }
    }),
    _react2.default.createElement(_reactRouter.Route, { path: root.www + '/drawing0(:id).html',
      components: {
        main: _Draw2.default
      }, __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 34
      },
      __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 34
      }
    }),
    _react2.default.createElement(_reactRouter.Route, { path: root.www + '/template0(:id).html',
      components: {
        main: _Temp2.default
      }, __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 39
      },
      __source: {
        fileName: '../../../src/Routes.jsx',
        lineNumber: 39
      }
    })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: '*', components: _NoMatch2.default, global: root, __source: {
      fileName: '../../../src/Routes.jsx',
      lineNumber: 46
    },
    __source: {
      fileName: '../../../src/Routes.jsx',
      lineNumber: 46
    }
  })
);

module.exports = routes;