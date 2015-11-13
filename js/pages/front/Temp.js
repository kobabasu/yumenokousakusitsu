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

var page = undefined,
    pageContext = undefined;
var overlay = undefined,
    overlayContext = undefined;
var items = undefined,
    itemsContext = undefined;

var pageWidth = 620;
var pageHeight = 877;

var templateFile = '../imgs/print_template0';

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
            lineNumber: 31
          },
          __source: {
            fileName: '../../../src/pages/front/Temp.jsx',
            lineNumber: 31
          }
        },
        _react2.default.createElement('div', { id: 'Palette', className: 'drawtmp', __source: {
            fileName: '../../../src/pages/front/Temp.jsx',
            lineNumber: 33
          },
          __source: {
            fileName: '../../../src/pages/front/Temp.jsx',
            lineNumber: 33
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'printTmp', __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 35
            },
            __source: {
              fileName: '../../../src/pages/front/Temp.jsx',
              lineNumber: 35
            }
          },
          _react2.default.createElement(
            'a',
            {
              href: '',
              onClick: this.openPrint.bind(this),
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 36
              },
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 36
              }
            },
            _react2.default.createElement('img', {
              src: '../imgs/clear.gif',
              alt: 'テンプレート印刷',
              width: '330',
              height: '80',
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 40
              },
              __source: {
                fileName: '../../../src/pages/front/Temp.jsx',
                lineNumber: 40
              }
            })
          )
        )
      );
    }
  }, {
    key: 'init',
    value: function init() {
      var bg = new Image();
      bg.src = templateFile + this.props.params.id + '.png';

      var _this = this;
      bg.onload = function () {
        _this.createPage();
        _this.createOverlay(bg);
        _this.createItems();

        pageContext.drawImage(items, 0, 0, pageWidth, pageHeight);
        pageContext.globalCompositeOperation = 'darken';
        pageContext.drawImage(overlay, 0, 0, pageWidth, pageHeight);

        var el = document.getElementById('Palette');
        el.appendChild(page);
      };
    }
  }, {
    key: 'createPage',
    value: function createPage() {
      var canvas = document.createElement('canvas');
      canvas.width = pageWidth;
      canvas.height = pageHeight;
      var ctx = canvas.getContext('2d');

      page = canvas;
      pageContext = ctx;
    }
  }, {
    key: 'createOverlay',
    value: function createOverlay(bg) {
      var canvas = document.createElement('canvas');
      canvas.width = pageWidth;
      canvas.height = pageHeight;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(bg, 0, 0, pageWidth, pageHeight);

      overlay = canvas;
      overlayContext = ctx;
    }
  }, {
    key: 'createItems',
    value: function createItems() {
      var canvas = document.createElement('canvas');
      var w = canvas.width = pageWidth;
      var h = canvas.height = pageHeight;
      var ctx = canvas.getContext('2d');

      var imgs = [{ pos: { x: 225, y: 122 }, deg: 180 }];

      for (var i in imgs) {
        var item = this.createItem(imgs[i].deg);
        ctx.drawImage(item, 0, 0, w, h, imgs[i].pos.x, imgs[i].pos.y, w, h);
      }

      items = new Image();
      items.src = canvas.toDataURL('image/png');
    }
  }, {
    key: 'createItem',
    value: function createItem(deg) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var source = this.state.canvas;
      var w = canvas.width = source.width / 3;
      var h = canvas.height = source.height / 3;

      ctx.translate(w / 2, h / 2);
      ctx.rotate(deg / 180 * Math.PI);
      ctx.translate(-(w / 2), -(h / 2));
      ctx.drawImage(source, 0, 0, w, h);

      var item = new Image();
      item.src = canvas.toDataURL('image/png');

      return item;
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