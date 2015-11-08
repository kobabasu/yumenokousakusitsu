import React from 'react';
import CountActions from '../actions/CountActions';
import CountStore from '../stores/CountStore';

function getCountState() {
  return CountStore.read();
}

export default class Count extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counts: getCountState };
  }

  componentWillMount() {
    CountStore.create(this._onChange.bind(this));
  }

  componentWillUnmount() {
    CountStore.destroy(this._onChange.bind(this));
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: CountActions.create },
        'model set'
      ),
      React.createElement(
        'button',
        { onClick: this._countUp.bind(this) },
        'countup'
      ),
      React.createElement(
        'button',
        { onClick: CountActions.destroy },
        'model clear'
      ),
      React.createElement(
        'p',
        null,
        'id: ',
        this.state.counts.id
      ),
      React.createElement(
        'p',
        null,
        'count: ',
        this.state.counts.count
      )
    );
  }

  _countUp() {
    let id = this.state.counts.id;
    let count = this.state.counts.count;
    CountActions.update(id, count);
  }

  _onChange() {
    this.setState({ counts: getCountState() });
  }
}