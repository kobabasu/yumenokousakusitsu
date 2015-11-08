import React from 'react';
import { Link } from 'react-router';

export default class Admin extends React.Component {

  constructor(props) {
    super(props);

    document.body.setAttribute('id', 'ready-Admin');
  }

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return React.createElement(
      'div',
      { id: 'Admin' },
      React.createElement(
        'h1',
        null,
        'Admin'
      ),
      this.props.header,
      this.props.main
    );
  }
}