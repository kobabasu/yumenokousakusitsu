import { EventEmitter } from 'events'
import { http } from '../components/Http'

import UserDispatcher from '../dispathcer/UserDispatcher'
import UserConstants from '../constants/UserConstants'

const CHANGE_EVENT = 'change';

const URL = '/api/users/pages/';

let _users = {
  page:  1,
  pages: null,
  limit: null,
  total: null
};

function load(data) {
  _users = data;
}

class UserStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _users;
  }

  update() {
    this.emit(CHANGE_EVENT);
  }
}

UserDispatcher.register( function(action) {
  switch(action.actionType) {

    case UserConstants.LOAD:
      let url = URL;
      if (action.page) {
        url = URL + action.page;
      }
      http.get(url).then(res => {
        load(res);
        userStore.update();
      }).catch(e => {
        console.error(e);
      });
      break;

    default:
      // no OP
  }
});

const userStore = new UserStore();
export default userStore;
