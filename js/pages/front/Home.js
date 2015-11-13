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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var el = document.getElementsByClassName('drawTitle');
      el[0].style.marginLeft = '70px';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'drawCont', id: 'Home', __source: {
            fileName: '../../../src/pages/front/Home.jsx',
            lineNumber: 18
          },
          __source: {
            fileName: '../../../src/pages/front/Home.jsx',
            lineNumber: 18
          }
        },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: '夢の工作室', __source: {
            fileName: '../../../src/pages/front/Home.jsx',
            lineNumber: 19
          },
          __source: {
            fileName: '../../../src/pages/front/Home.jsx',
            lineNumber: 19
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'drawDesc', __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 21
            },
            __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 21
            }
          },
          _react2.default.createElement('img', {
            src: '../imgs/draw_description.gif',
            alt: 'ぬりえのせつめい',
            width: '800',
            height: '100',
            __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 22
            },
            __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 22
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'drawList', __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 30
            },
            __source: {
              fileName: '../../../src/pages/front/Home.jsx',
              lineNumber: 30
            }
          },
          _react2.default.createElement(
            'ul',
            {
              __source: {
                fileName: '../../../src/pages/front/Home.jsx',
                lineNumber: 31
              },
              __source: {
                fileName: '../../../src/pages/front/Home.jsx',
                lineNumber: 31
              }
            },
            _react2.default.createElement(
              'li',
              {
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 32
                },
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 32
                }
              },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/drawing/drawing01.html', __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 33
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 33
                  }
                },
                _react2.default.createElement(
                  'span',
                  { className: 'name', __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 34
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 34
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/draw01_name.gif',
                    alt: 'ニックちゃん',
                    width: '300',
                    height: '40',
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 35
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 35
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
                    lineNumber: 43
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 43
                  }
                })
              )
            ),
            _react2.default.createElement(
              'li',
              {
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 52
                },
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 52
                }
              },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/drawing/drawing02.html', __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 53
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 53
                  }
                },
                _react2.default.createElement(
                  'span',
                  { className: 'name', __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 54
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 54
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/draw02_name.gif',
                    alt: 'ウサ子',
                    width: '300',
                    height: '40',
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 55
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 55
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
                    lineNumber: 63
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 63
                  }
                })
              )
            ),
            _react2.default.createElement(
              'li',
              {
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 72
                },
                __source: {
                  fileName: '../../../src/pages/front/Home.jsx',
                  lineNumber: 72
                }
              },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/drawing/drawing03.html', __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 73
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 73
                  }
                },
                _react2.default.createElement(
                  'span',
                  { className: 'name', __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 74
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 74
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/draw03_name.gif',
                    alt: 'ウサギとニックくん',
                    width: '300',
                    height: '40',
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 75
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Home.jsx',
                      lineNumber: 75
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
                    lineNumber: 83
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Home.jsx',
                    lineNumber: 83
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