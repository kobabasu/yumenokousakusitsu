import { EventEmitter } from 'events'
import CanvasDispatcher from '../dispathcer/CanvasDispatcher'
import CanvasConstants from '../constants/CanvasConstants'

const CHANGE_EVENT = 'change';

let _canvases = {
  id: null,
  color: '#ffffff',
  comp: null,
  sample: null,
  w: 510,
  h: 510,
  canvas: null,
  ctx: null,
  px: null
};

function create(id, callback) {
  let w = _canvases.w;
  let h = _canvases.h;
  let comp = '/drawing/drawing0' + id + '_comp.html';
  let sample = '../imgs/illust0' + id + '_sample.jpg';

  _canvases.id = id;
  _canvases.comp = comp;
  _canvases.sample = sample;

  let img = new Image();
  img.src = '../imgs/illust0' + id + '.gif';

  img.onload = function() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width  = w;
    canvas.height = h;

    ctx.drawImage(img, 0, 0, w, h);
    _canvases.canvas = canvas;
    _canvases.ctx = ctx;
    _canvases.px = ctx.getImageData(0, 0, w, h);

    canvasStore.update();
    callback();
  }
}

function update(data) {
  Object.keys(data).map((f) => {
    _canvases[f] = data[f];
  });
}

function destroy() {
  _canvases = {};
}

class CanvasStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _canvases;
  }
  
  update() {
    this.emit(CHANGE_EVENT);
  }

  destroy(callback) {
    this.removeAllListeners(CHANGE_EVENT, callback);
  }
}

CanvasDispatcher.register( function(action) {
  switch(action.actionType) {
    case CanvasConstants.CREATE:
      create(action.id, action.callback);
      break;

    case CanvasConstants.UPDATE:
      update(action.data);
      canvasStore.update();
      break;

    case CanvasConstants.DESTROY:
      destroy();
      canvasStore.destroy();
      break;

    default:
      // no OP
  }
});

const canvasStore = new CanvasStore();
export default canvasStore;
