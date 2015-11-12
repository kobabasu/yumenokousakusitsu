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

var Temp = (function (_React$Component) {
  _inherits(Temp, _React$Component);

  function Temp(props) {
    _classCallCheck(this, Temp);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Temp).call(this, props));
  }

  _createClass(Temp, [{
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
            fileName: '../../../src/pages/front/Temp.jsx',
            lineNumber: 21
          },
          __source: {
            fileName: '../../../src/pages/front/Temp.jsx',
            lineNumber: 21
          }
        },
        _react2.default.createElement('div', { id: 'Palette', className: 'drawIllust', __source: {
            fileName: '../../../src/pages/front/Temp.jsx',
            lineNumber: 23
          },
          __source: {
            fileName: '../../../src/pages/front/Temp.jsx',
            lineNumber: 23
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'drawTmp', __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 25
            },
            __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 25
            }
          },
          _react2.default.createElement('img', {
            src: '../imgs/print_template_l.gif',
            alt: '塗り絵イラスト',
            width: '100%',
            __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 26
            },
            __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 26
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'printTmp', __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 33
            },
            __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 33
            }
          },
          _react2.default.createElement(
            'a',
            { href: '', __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 34
              },
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 34
              }
            },
            _react2.default.createElement('img', {
              src: '../imgs/clear.gif',
              alt: 'テンプレート印刷',
              width: '330',
              height: '80',
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 35
              },
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 35
              }
            })
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

  return Temp;
})(_react2.default.Component);

exports.default = Temp;