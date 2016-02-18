import UserDispatcher from '../dispathcer/UserDispatcher'
import UserConstants from '../constants/UserConstants'

export default {
  load: (page, callback) => {
    UserDispatcher.dispatch({
      actionType: UserConstants.LOAD,
      page: page,
      callback: callback
    })
  },

  create: (id, callback) => {
    UserDispatcher.dispatch({
      actionType: UserConstants.CREATE,
      id: id,
      callback: callback
    })
  }
}
