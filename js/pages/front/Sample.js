import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

export default class Sample extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'article',
      { id: 'Sample' },
      React.createElement(DocumentTitle, { title: 'Front Sample' }),
      React.createElement(
        'h1',
        null,
        'Sample'
      )
    );
  }
}