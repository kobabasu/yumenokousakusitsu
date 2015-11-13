'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _CanvasDispatcher = require('../dispathcer/CanvasDispatcher');

var _CanvasDispatcher2 = _interopRequireDefault(_CanvasDispatcher);

var _CanvasConstants = require('../constants/CanvasConstants');

var _CanvasConstants2 = _interopRequireDefault(_CanvasConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHANGE_EVENT = 'change';

var _canvases = {
  id: null,
  color: '#ffffff',
  comp: null,
  sample: null,
  w: 677,
  h: 677,
  canvas: null,
  ctx: null,
  px: null
};

function create(id, callback) {
  var w = _canvases.w;
  var h = _canvases.h;
  var comp = '/drawing/drawing0' + id + '_comp.html';
  var sample = '../imgs/illust0' + id + '_sample.jpg';

  _canvases.id = id;
  _canvases.comp = comp;
  _canvases.sample = sample;

  var img = new Image();
  img.src = '../imgs/illust0' + id + '.gif';

  img.onload = function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = w;
    canvas.height = h;

    ctx.drawImage(img, 0, 0, w, h);
    _canvases.canvas = canvas;
    _canvases.ctx = ctx;
    _canvases.px = ctx.getImageData(0, 0, w, h);

    canvasStore.update();
    callback();
  };
}

function update(data) {
  Object.keys(data).map(function (f) {
    _canvases[f] = data[f];
  });
}

function destroy() {
  _canvases = {};
}

var CanvasStore = (function (_EventEmitter) {
  _inherits(CanvasStore, _EventEmitter);

  function CanvasStore() {
    _classCallCheck(this, CanvasStore);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CanvasStore).apply(this, arguments));
  }

  _createClass(CanvasStore, [{
    key: 'subscribe',
    value: function subscribe(callback) {
      this.on(CHANGE_EVENT, callback);
    }
  }, {
    key: 'read',
    value: function read() {
      return _canvases;
    }
  }, {
    key: 'update',
    value: function update() {
      this.emit(CHANGE_EVENT);
    }
  }, {
    key: 'destroy',
    value: function destroy(callback) {
      this.removeAllListeners(CHANGE_EVENT, callback);
    }
  }]);

  return CanvasStore;
})(_events.EventEmitter);

_CanvasDispatcher2.default.register(function (action) {
  switch (action.actionType) {
    case _CanvasConstants2.default.CREATE:
      create(action.id, action.callback);
      break;

    case _CanvasConstants2.default.UPDATE:
      update(action.data);
      canvasStore.update();
      break;

    case _CanvasConstants2.default.DESTROY:
      destroy();
      canvasStore.destroy();
      break;

    default:
    // no OP
  }
});

var canvasStore = new CanvasStore();
exports.default = canvasStore;