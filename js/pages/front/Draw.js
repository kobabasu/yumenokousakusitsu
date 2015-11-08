import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

export default class Draw extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.params.id);
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
                  alt: '#feecd2',
                  width: '50',
                  height: '50'
                })
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'selectColor' },
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
              src: '../imgs/illust0' + id + '_sample.jpg',
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
                'a',
                { href: 'drawing01_comp.html' },
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
}