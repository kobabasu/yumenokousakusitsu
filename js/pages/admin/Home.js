import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'article',
      { id: 'Home' },
      React.createElement(DocumentTitle, { title: 'Admin Home' }),
      React.createElement(
        'h1',
        null,
        'Admin Home'
      )
    );
  }
}