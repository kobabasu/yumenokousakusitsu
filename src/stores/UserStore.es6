import { EventEmitter } from 'events'
import { http } from '../components/Http'

import UserDispatcher from '../dispathcer/UserDispatcher'
import UserConstants from '../constants/UserConstants'

const CHANGE_EVENT = 'change';

const URL = '/api/users/';

let _users = {
  name:  null,
  approved: 1,
  canvas: null
};

function update(data) {
  Object.keys(data).map((k) => {
    _users[k] = data[k];
  });
}

function save(callback) {
  callback();
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

    case UserConstants.UPDATE:
      update(action.data);
      userStore.update();
      break;

    case UserConstants.SAVE:
      http.post(URL, action.data).then(res => {
        save(action.callback);
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
