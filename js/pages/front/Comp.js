import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

let ctx;

export default class Comp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.init();
  }

  render() {
    let id = this.props.params.id;

    return React.createElement(
      'div',
      { className: 'drawCont fbox' },
      React.createElement(
        'div',
        { className: 'drawIllust' },
        React.createElement('img', {
          src: '../imgs/illust0' + id + '.jpg',
          alt: '塗り絵イラスト',
          width: '510',
          height: '510'
        })
      ),
      React.createElement(
        'div',
        { className: 'drawTool' },
        React.createElement(
          'div',
          { className: 'drawPrint' },
          React.createElement(
            'div',
            { className: 'printBtn01' },
            React.createElement(
              'a',
              { href: '#' },
              React.createElement('img', {
                src: '../imgs/clear.gif',
                alt: 'ノーマル印刷',
                width: '330',
                height: '120'
              })
            )
          ),
          React.createElement(
            'div',
            { className: 'printBtn02' },
            React.createElement(
              'a',
              { href: '#' },
              React.createElement('img', {
                src: '../imgs/clear.gif',
                alt: 'テンプレート印刷',
                width: '330',
                height: '120'
              })
            )
          ),
          React.createElement(
            'div',
            { className: 'drawTop' },
            React.createElement(
              Link,
              { to: '/drawing/' },
              React.createElement('img', {
                src: '../imgs/btn_draw_top.gif',
                alt: 'ぬりえトップへ戻る',
                width: '230',
                height: '50'
              })
            )
          )
        )
      )
    );
  }

  init() {
    let _this = this;
    let id = this.props.params.id;
    let canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');

    let img = new Image();
    img.src = '../imgs/illust0' + id + '.jpg';

    img.onload = function () {};
  }
}