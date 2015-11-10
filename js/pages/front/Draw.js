import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

import canvasActions from '../../actions/CanvasActions';
import canvasStore from '../../stores/CanvasStore';

let undo = [];

export default class Draw extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let id = this.props.params.id;
    canvasStore.subscribe(this.updateState.bind(this));
    canvasActions.create(id, this.init.bind(this));
  }

  componentWillUnmount() {
    canvasStore.destroy(this.updateState.bind(this));
  }

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
          { className: 'drawPallet' },
          React.createElement(
            'div',
            { className: 'head' },
            React.createElement('img', {
              src: '../imgs/color_head.png',
              alt: 'ひだりのイラストをいろをえらんでぬってね♪',
              width: '410',
              height: '60'
            })
          ),
          React.createElement(
            'div',
            { className: 'colorList' },
            React.createElement(
              'ul',
              { className: 'pdnBtm10' },
              React.createElement(
                'li',
                null,
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'space',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                null,
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'space',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                null,
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'space',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color01' },
                React.createElement('img', {
                  src: '../imgs/color01.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#c40d23',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color02' },
                React.createElement('img', {
                  src: '../imgs/color02.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#ee7700',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color03' },
                React.createElement('img', {
                  src: '../imgs/color03.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#fff100',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color04' },
                React.createElement('img', {
                  src: '../imgs/color04.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#8ec31f',
                  width: '50',
                  height: '50'
                })
              )
            ),
            React.createElement(
              'ul',
              { className: 'pdnBtm10' },
              React.createElement(
                'li',
                null,
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'space',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                null,
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'space',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                null,
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'space',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color05' },
                React.createElement('img', {
                  src: '../imgs/color05.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#006935',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color06' },
                React.createElement('img', {
                  src: '../imgs/color06.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#18adae',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color07' },
                React.createElement('img', {
                  src: '../imgs/color07.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#7acdf4',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color08' },
                React.createElement('img', {
                  src: '../imgs/color08.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#00a1e9',
                  width: '50',
                  height: '50'
                })
              )
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                { className: 'color09' },
                React.createElement('img', {
                  src: '../imgs/color09.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#014099',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color10' },
                React.createElement('img', {
                  src: '../imgs/color10.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#f29ca6',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color11' },
                React.createElement('img', {
                  src: '../imgs/color11.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#7e2f8e',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color12' },
                React.createElement('img', {
                  src: '../imgs/color12.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#c6584d',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color13' },
                React.createElement('img', {
                  src: '../imgs/color13.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#804f22',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color14' },
                React.createElement('img', {
                  src: '../imgs/color14.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#ffffff',
                  width: '50',
                  height: '50'
                })
              ),
              React.createElement(
                'li',
                { className: 'color15' },
                React.createElement('img', {
                  src: '../imgs/color15.png',
                  onClick: this.changeColor.bind(this),
                  alt: '#feecd2',
                  width: '50',
                  height: '50'
                })
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'SelectColor', className: 'selectColor' },
            React.createElement('img', {
              src: '../imgs/color_select.png',
              alt: 'いまのいろ',
              width: '170',
              height: '110'
            })
          )
        ),
        React.createElement(
          'div',
          { className: 'drawItem' },
          React.createElement(
            'div',
            { className: 'drawSample' },
            React.createElement('img', {
              src: this.state.sample,
              alt: 'みほん',
              width: '230',
              height: '230'
            })
          ),
          React.createElement(
            'div',
            { className: 'drawAction' },
            React.createElement(
              'div',
              { className: 'actionBtn01' },
              React.createElement(
                'a',
                { href: '#' },
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  onClick: this.reset,
                  alt: 'はじめにもどる',
                  width: '180',
                  height: '60'
                })
              )
            ),
            React.createElement(
              'div',
              { className: 'actionBtn02' },
              React.createElement(
                'a',
                { href: '#' },
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  onClick: this.undo,
                  alt: 'ひとつずつもどる',
                  width: '180',
                  height: '60'
                })
              )
            ),
            React.createElement(
              'div',
              { className: 'compBtn' },
              React.createElement(
                Link,
                {
                  to: this.state.comp,
                  onClick: this.save.bind(this)
                },
                React.createElement('img', {
                  src: '../imgs/clear.gif',
                  alt: 'かんせい！',
                  width: '180',
                  height: '90'
                })
              )
            )
          )
        )
      )
    );
  }

  init() {
    let el = document.getElementById('Palette');
    let canvas = this.state.canvas;
    canvas.addEventListener('click', this.fill.bind(this), false);

    el.appendChild(canvas);
  }

  updateState() {
    this.setState(canvasStore.read());
  }

  fill(e) {
    let ctx = this.state.ctx;
    let pos = this.getPos(e);
    let sel = ctx.getImageData(pos.x, pos.y, 1, 1).data;
  }

  getPos(e) {
    let rect = event.target.getBoundingClientRect();

    let obj = {
      x: Math.floor(e.clientX - rect.left),
      y: Math.floor(e.clientY - rect.top)
    };
    canvasActions.update(obj);

    return obj;
  }

  changeColor(e) {
    let el = document.getElementById('SelectColor');
    el.style.backgroundColor = e.target.alt;
    this.setState({ color: e.target.alt });
  }

  undo() {
    let num = undo.length - 1;
    ctx.putImageData(undo[num], 0, 0);
    undo.pop();
  }

  reset() {
    ctx.putImageData(undo[0], 0, 0);
    undo = [];
  }

  save() {}
}