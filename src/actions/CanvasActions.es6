import CanvasDispatcher from '../dispathcer/CanvasDispatcher'
import CanvasConstants from '../constants/CanvasConstants'

export default {
  create: (id) => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.CREATE,
      id: id
    })
  },

  update: (id) => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.UPDATE
    })
  },

  destroy: () => {
    CanvasDispatcher.dispatch({
      actionType: CanvasConstants.DESTROY
    })
  }
}
