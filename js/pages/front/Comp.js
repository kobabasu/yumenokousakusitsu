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

var _CanvasStore = require('../../stores/CanvasStore');

var _CanvasStore2 = _interopRequireDefault(_CanvasStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comp = (function (_React$Component) {
  _inherits(Comp, _React$Component);

  function Comp(props) {
    _classCallCheck(this, Comp);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Comp).call(this, props));
  }

  _createClass(Comp, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState(_CanvasStore2.default.read(), this.init);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state) return false;

      return _react2.default.createElement(
        'div',
        { className: 'drawCont fbox', __source: {
            fileName: '../../../src/pages/front/Comp.jsx',
            lineNumber: 21
          },
          __source: {
            fileName: '../../../src/pages/front/Comp.jsx',
            lineNumber: 21
          }
        },
        _react2.default.createElement('div', { id: 'Palette', className: 'drawIllust', __source: {
            fileName: '../../../src/pages/front/Comp.jsx',
            lineNumber: 23
          },
          __source: {
            fileName: '../../../src/pages/front/Comp.jsx',
            lineNumber: 23
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'drawTool', __source: {
              fileName: '../../../src/pages/front/Comp.jsx',
              lineNumber: 25
            },
            __source: {
              fileName: '../../../src/pages/front/Comp.jsx',
              lineNumber: 25
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'drawPrint', __source: {
                fileName: '../../../src/pages/front/Comp.jsx',
                lineNumber: 26
              },
              __source: {
                fileName: '../../../src/pages/front/Comp.jsx',
                lineNumber: 26
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'printBtn01', __source: {
                  fileName: '../../../src/pages/front/Comp.jsx',
                  lineNumber: 27
                },
                __source: {
                  fileName: '../../../src/pages/front/Comp.jsx',
                  lineNumber: 27
                }
              },
              _react2.default.createElement(
                'a',
                {
                  href: '#',
                  onClick: this.openPrint.bind(this),
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 28
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 28
                  }
                },
                _react2.default.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'ノーマル印刷',
                  width: '330',
                  height: '120',
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 32
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 32
                  }
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'printBtn02', __source: {
                  fileName: '../../../src/pages/front/Comp.jsx',
                  lineNumber: 41
                },
                __source: {
                  fileName: '../../../src/pages/front/Comp.jsx',
                  lineNumber: 41
                }
              },
              _react2.default.createElement(
                'a',
                {
                  href: '#',
                  onClick: this.openTemplate.bind(this),
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 42
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 42
                  }
                },
                _react2.default.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'テンプレート印刷',
                  width: '330',
                  height: '120',
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 46
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 46
                  }
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'drawTop', __source: {
                  fileName: '../../../src/pages/front/Comp.jsx',
                  lineNumber: 55
                },
                __source: {
                  fileName: '../../../src/pages/front/Comp.jsx',
                  lineNumber: 55
                }
              },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/drawing/', __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 56
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 56
                  }
                },
                _react2.default.createElement('img', {
                  src: '../imgs/btn_draw_top.gif',
                  alt: 'ぬりえトップへ戻る',
                  width: '230',
                  height: '50',
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 57
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Comp.jsx',
                    lineNumber: 57
                  }
                })
              )
            )
          )
        )
      );
    }
  }, {
    key: 'init',
    value: function init() {
      var el = document.getElementById('Palette');
      var canvas = this.state.canvas;
      el.appendChild(canvas);
    }
  }, {
    key: 'openPrint',
    value: function openPrint(e) {
      e.preventDefault();
      window.print();
    }
  }, {
    key: 'openTemplate',
    value: function openTemplate(e) {
      e.preventDefault();
      window.print();
    }
  }]);

  return Comp;
})(_react2.default.Component);

exports.default = Comp;