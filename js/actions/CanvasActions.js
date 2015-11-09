import CanvasDispatcher from '../dispathcer/CanvasDispatcher';
import CanvasConstants from '../constants/CanvasConstants';

export default {
  create: (id, callback) => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.CREATE,
      id: id,
      callback: callback
    });
  },

  update: id => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.UPDATE
    });
  },

  destroy: () => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.DESTROY
    });
  }
};