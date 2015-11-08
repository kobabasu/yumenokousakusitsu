import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'drawCont', id: 'Home' },
      React.createElement(DocumentTitle, { title: '夢の工作室' }),
      React.createElement(
        'div',
        { className: 'drawDesc' },
        React.createElement('img', {
          src: '../imgs/draw_description.gif',
          alt: 'ぬりえのせつめい',
          width: '800',
          height: '100'
        })
      ),
      React.createElement(
        'div',
        { className: 'drawList' },
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              Link,
              { to: '/drawing/drawing01.html' },
              React.createElement(
                'span',
                { className: 'name' },
                React.createElement('img', {
                  src: '../imgs/draw01_name.gif',
                  alt: 'ニックちゃん',
                  width: '300',
                  height: '40'
                })
              ),
              React.createElement('img', {
                src: '../imgs/draw01_illust.gif',
                alt: 'ニックちゃん',
                width: '300',
                height: '300'
              })
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              Link,
              { to: '/drawing/drawing02.html' },
              React.createElement(
                'span',
                { className: 'name' },
                React.createElement('img', {
                  src: '../imgs/draw02_name.gif',
                  alt: 'ウサ子',
                  width: '300',
                  height: '40'
                })
              ),
              React.createElement('img', {
                src: '../imgs/draw02_illust.gif',
                alt: 'ウサ子',
                width: '300',
                height: '300'
              })
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              Link,
              { to: '/drawing/drawing03.html' },
              React.createElement(
                'span',
                { className: 'name' },
                React.createElement('img', {
                  src: '../imgs/draw03_name.gif',
                  alt: 'ウサギとニックくん',
                  width: '300',
                  height: '40'
                })
              ),
              React.createElement('img', {
                src: '../imgs/draw03_illust.gif',
                alt: 'ウサギとニックくん',
                width: '300',
                height: '300'
              })
            )
          )
        )
      )
    );
  }
}