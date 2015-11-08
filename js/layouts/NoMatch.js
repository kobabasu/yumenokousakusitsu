import React from 'react';
import { Link } from 'react-router';

export default class NoMatch extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'section',
      { id: 'NoMatch' },
      React.createElement(
        'p',
        null,
        'No Match'
      ),
      this.props.children
    );
  }
}