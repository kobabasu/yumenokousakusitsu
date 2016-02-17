import UserDispatcher from '../dispathcer/UserDispatcher'
import UserConstants from '../constants/UserConstants'

export default {
  read: (page, callback) => {
    UserDispatcher.dispatch({
      actionType: UserConstants.READ,
      page: read,
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
