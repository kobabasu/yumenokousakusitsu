import { EventEmitter } from 'events'
import CanvasDispatcher from '../dispathcer/CanvasDispatcher'
import CanvasConstants from '../constants/CanvasConstants'

const CHANGE_EVENT = 'change';

let _canvases = {};

function create() {
  let id = ((Math.random() * 999999) | 0).toString(36);
  _canvases = { id: id, canvas: 1 }
}

function update(id, updates) {
  _canvases = { id: id, canvas: updates };
}

function destroy() {
  _canvases = {};
}

class CanvasStore extends EventEmitter {
  create(callback) {
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
      create();
      canvasStore.update();
      break;

    case CanvasConstants.UPDATE:
      update(action.id, action.canvas + 1);
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
