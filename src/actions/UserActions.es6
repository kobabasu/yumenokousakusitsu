import UserDispatcher from '../dispathcer/UserDispatcher'
import UserConstants from '../constants/UserConstants'

export default {
  update: (data) => {
    UserDispatcher.dispatch({
      actionType: UserConstants.UPDATE,
      data: data
    })
  },
  save: (callback) => {
    UserDispatcher.dispatch({
      actionType: UserConstants.SAVE,
      callback: callback
    })
  }
}
