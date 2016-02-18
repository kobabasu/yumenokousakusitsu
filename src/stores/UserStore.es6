import { EventEmitter } from 'events'
import { http } from '../components/Http'

import UserDispatcher from '../dispathcer/UserDispatcher'
import UserConstants from '../constants/UserConstants'

const CHANGE_EVENT = 'change';

const URL = '/api/users/pages/';

let _users = {};

function read(data) {
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

    case UserConstants.READ:
      let url = URL;
      if (action.page) {
        url = URL + action.page;
      }
      http.get(url).then(res => {
        read(res);
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
