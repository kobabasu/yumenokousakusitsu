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

  update: data => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.UPDATE,
      data: data
    });
  },

  destroy: () => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.DESTROY
    });
  }
};