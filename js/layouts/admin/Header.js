import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let root = this.props.route.global.documentRoot;

    return React.createElement(
      'header',
      { id: 'Header' },
      React.createElement(
        'p',
        null,
        'Header'
      ),
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            { to: root + '/'
            },
            'front home'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            { to: root + '/sample'
            },
            'front sample'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            { to: root + '/admin/'
            },
            'admin home'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            { to: root + '/admin/count'
            },
            'admin count'
          )
        )
      )
    );
  }
}