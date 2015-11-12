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
        _react2.default.createElement('div', { id: 'Palette', className: 'drawtmp', __source: {
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
          { className: 'printTmp', __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 25
            },
            __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 25
            }
          },
          _react2.default.createElement(
            'a',
            {
              href: '',
              onClick: this.openPrint.bind(this),
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 26
              },
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 26
              }
            },
            _react2.default.createElement('img', {
              src: '../imgs/clear.gif',
              alt: 'テンプレート印刷',
              width: '330',
              height: '80',
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 30
              },
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 30
              }
            })
          )
        )
      );
    }
  }, {
    key: 'init',
    value: function init() {
      var id = this.props.params.id;
      var canvas = document.createElement('canvas');
      canvas.width = 620;
      canvas.height = 877;
      var ctx = canvas.getContext('2d');

      var item = this.state.px;

      var bg = new Image();
      bg.src = '../imgs/print_template0' + id + '.png';

      var _this = this;
      bg.onload = function () {
        var items = _this.placeItems(canvas, ctx);
        ctx.drawImage(items, 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'darken';
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

        var el = document.getElementById('Palette');
        el.appendChild(canvas);
      };
    }
  }, {
    key: 'placeItems',
    value: function placeItems() {
      var canvas = document.createElement('canvas');
      canvas.width = 620;
      canvas.height = 877;
      var ctx = canvas.getContext('2d');

      var item = new Image();
      item.src = this.state.canvas.toDataURL('image/png');
      var w = item.width / 3;
      var h = item.height / 3;

      ctx.drawImage(item, 0, 0, item.width, item.height, 225, 122, w, h);

      ctx.drawImage(item, 0, 0, item.width, item.height, 225, 122 + 169, w, h);

      ctx.drawImage(item, 0, 0, item.width, item.height, 225, 122 + 169, w, h);

      var items = new Image();
      items.src = canvas.toDataURL('image/png');
      return items;
    }
  }, {
    key: 'openPrint',
    value: function openPrint(e) {
      e.preventDefault();
      window.print();
    }
  }]);

  return Temp;
})(_react2.default.Component);

exports.default = Temp;