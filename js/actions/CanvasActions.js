import CanvasDispatcher from '../dispathcer/CanvasDispatcher';
import CanvasConstants from '../constants/CanvasConstants';

export default {
  create: () => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.CREATE
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