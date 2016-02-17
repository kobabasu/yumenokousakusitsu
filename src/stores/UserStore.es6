import { EventEmitter } from 'events'
import UserDispatcher from '../dispathcer/UserDispatcher'
import UserConstants from '../constants/UserConstants'

const CHANGE_EVENT = 'change';

let _users = {
  id: null,
  color: '#ffffff',
  comp: null,
  sample: null,
  w: 677,
  h: 677,
  user: null,
  ctx: null,
  px: null
};

function create(id, callback) {
  let w = _users.w;
  let h = _users.h;
  let comp = '/drawing/drawing0' + id + '_comp.html';
  let sample = '../imgs/illust0' + id + '_sample.jpg';

  _users.id = id;
  _users.comp = comp;
  _users.sample = sample;

  let img = new Image();
  img.src = '../imgs/illust0' + id + '.gif';

  img.onload = function() {
    let user = document.createElement('user');
    let ctx = user.getContext('2d');

    user.width  = w;
    user.height = h;

    ctx.drawImage(img, 0, 0, w, h);
    _users.user = user;
    _users.ctx = ctx;
    _users.px = ctx.getImageData(0, 0, w, h);

    userStore.update();
    callback();
  }
}

function read(data) {
  Object.keys(data).map((f) => {
    _users[f] = data[f];
  });
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
    case UserConstants.CREATE:
      create(action.id, action.callback);
      break;

    case UserConstants.READ:
      read(action.data);
      userStore.update();
      break;

    default:
      // no OP
  }
});

const userStore = new UserStore();
export default userStore;
