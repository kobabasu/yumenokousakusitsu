'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'drawCont', id: 'Home', __source: {
            fileName: '../../../src/pages/front/Home.jsx',
            lineNumber: 13
          },
          __source: {
            fileName: '../../../src/pages/front/Home.jsx',
            lineNumber: 13
          }
        },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: '夢の工作室', __source: {
            fileName: '../../../src/pages/front/Home.jsx',
            lineNumber: 14
          },
          __source: {
            fileName: '../../../src/pages/front/Home.jsx',
            lineNumber: 14
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'drawDesc', __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 16
            },
            __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 16
            }
          },
          _react2.default.createElement('img', {
            src: '../imgs/draw_description.gif',
            alt: 'ぬりえのせつめい',
            width: '800',
            height: '100',
            __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 17
            },
            __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 17
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'drawList', __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 25
            },
            __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 25
            }
          },
          _react2.default.createElement(
            'ul',
            {
              __source: {
                fileName: '../../../src/pages/front/Home.jsx',
                lineNumber: 26
              },
              __source: {
                fileName: '../../../src/pages/front/Home.jsx',
                lineNumber: 26
              }
            },
            _react2.default.createElement(
              'li',
              {
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 27
                },
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 27
                }
              },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/drawing/drawing01.html', __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 28
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 28
                  }
                },
                _react2.default.createElement(
                  'span',
                  { className: 'name', __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 29
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 29
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/draw01_name.gif',
                    alt: 'ニックちゃん',
                    width: '300',
                    height: '40',
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 30
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 30
                    }
                  })
                ),
                _react2.default.createElement('img', {
                  src: '../imgs/draw01_illust.gif',
                  alt: 'ニックちゃん',
                  width: '300',
                  height: '300',
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 38
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 38
                  }
                })
              )
            ),
            _react2.default.createElement(
              'li',
              {
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 47
                },
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 47
                }
              },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/drawing/drawing02.html', __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 48
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 48
                  }
                },
                _react2.default.createElement(
                  'span',
                  { className: 'name', __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 49
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 49
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/draw02_name.gif',
                    alt: 'ウサ子',
                    width: '300',
                    height: '40',
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 50
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 50
                    }
                  })
                ),
                _react2.default.createElement('img', {
                  src: '../imgs/draw02_illust.gif',
                  alt: 'ウサ子',
                  width: '300',
                  height: '300',
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 58
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 58
                  }
                })
              )
            ),
            _react2.default.createElement(
              'li',
              {
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 67
                },
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 67
                }
              },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/drawing/drawing03.html', __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 68
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 68
                  }
                },
                _react2.default.createElement(
                  'span',
                  { className: 'name', __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 69
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 69
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/draw03_name.gif',
                    alt: 'ウサギとニックくん',
                    width: '300',
                    height: '40',
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 70
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 70
                    }
                  })
                ),
                _react2.default.createElement('img', {
                  src: '../imgs/draw03_illust.gif',
                  alt: 'ウサギとニックくん',
                  width: '300',
                  height: '300',
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 78
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 78
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
})(_react2.default.Component);

exports.default = Home;