import PageDispatcher from '../dispathcer/PageDispatcher'
import PageConstants from '../constants/PageConstants'

export default {
  load: (page, callback) => {
    PageDispatcher.dispatch({
      actionType: PageConstants.LOAD,
      page: page,
      callback: callback
    })
  }
}
