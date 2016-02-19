import { EventEmitter } from 'events'
import { http } from '../components/Http'

import PageDispatcher from '../dispathcer/PageDispatcher'
import PageConstants from '../constants/PageConstants'

const CHANGE_EVENT = 'change';

const URL = '/api/pages/';

let _pages = {
  page:  1,
  pages: null,
  limit: null,
  total: null
};

function load(data) {
  _pages = data;
}

class PageStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _pages;
  }

  update() {
    this.emit(CHANGE_EVENT);
  }
}

PageDispatcher.register( function(action) {
  switch(action.actionType) {

    case PageConstants.LOAD:
      let url = URL;
      if (action.page) {
        url = URL + action.page;
      }
      http.get(url).then(res => {
        load(res);
        pageStore.update();
      }).catch(e => {
        console.error(e);
      });
      break;

    default:
      // no OP
  }
});

const pageStore = new PageStore();
export default pageStore;
