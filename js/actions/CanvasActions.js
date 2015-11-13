'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CanvasDispatcher = require('../dispathcer/CanvasDispatcher');

var _CanvasDispatcher2 = _interopRequireDefault(_CanvasDispatcher);

var _CanvasConstants = require('../constants/CanvasConstants');

var _CanvasConstants2 = _interopRequireDefault(_CanvasConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function create(id, callback) {
    _CanvasDispatcher2.default.dispatch({
      actionType: _CanvasConstants2.default.CREATE,
      id: id,
      callback: callback
    });
  },

  update: function update(data) {
    _CanvasDispatcher2.default.dispatch({
      actionType: _CanvasConstants2.default.UPDATE,
      data: data
    });
  },

  destroy: function destroy() {
    _CanvasDispatcher2.default.dispatch({
      actionType: _CanvasConstants2.default.DESTROY
    });
  }
};