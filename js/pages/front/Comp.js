import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

import canvasStore from '../../stores/CanvasStore';

export default class Comp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState(canvasStore.read(), this.init);
  }

  componentWillUnmount() {}

  render() {
    if (!this.state) return false;

    return React.createElement(
      'div',
      { className: 'drawCont fbox' },
      React.createElement('div', { id: 'Palette', className: 'drawIllust' }),
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
              {
                href: '#',
                onClick: this.openPrint.bind(this)
              },
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
              {
                href: '#',
                onClick: this.openTemplate.bind(this)
              },
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
    let el = document.getElementById('Palette');
    let canvas = this.state.canvas;
    el.appendChild(canvas);
  }

  openPrint(e) {
    e.preventDefault();
    window.print();
  }

  openTemplate(e) {
    e.preventDefault();
    window.print();
  }
}