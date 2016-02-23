import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import getBrowser from 'ua-parser-js'

import canvasStore from '../../stores/CanvasStore'

let completeImage = new Image();
let overlay;
let items;
let frame;

// テンプレートファイルのサイズ

const pageWidth  = 2480;
const pageHeight = 3310;

// テンプレートファイルのパス 拡張子はinit内

const templatePath = '../imgs/print_template0';

// イラストの座標と回転度数を設定
// ひとつのイラストは677
// 900の3は微調整

const imgs = [
        { pos: { x:903, y:488 + 677 * 0 }, deg: -90 },
        { pos: { x:903, y:488 + 677 * 1 }, deg: -90 },
        { pos: { x:903, y:488 + 677 * 2 }, deg: -90 },
        { pos: { x:903, y:488 + 677 * 3 }, deg: -90 }
      ];


export default class Temp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState( canvasStore.read(), this.init );
  }

  render() {
    if (!this.state) return false

    return (
      <div className="drawCont fbox alignCenter">
      
        <div id="Palette" className="drawtmp"></div>
        
        <div className="printTmp">
          <a
            href=""
            onClick={this.openPrint.bind(this)}
            >
            <img
              src="../imgs/clear.gif"
              alt="テンプレート印刷"
              width="330"
              height="80"
              />
          </a>
        </div>

        <div className="printTmpTop">
          <a href="/drawing/">
            <img
              src="../imgs/btn_draw_top.gif"
              alt="ぬりえトップへ戻る"
              width="230"
              height="50"
              />
          </a>
        </div>

      </div>
    );
  }

  init() {
    let canvas = document.createElement('canvas');
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    let ctx = canvas.getContext('2d');

    let bg = new Image();
    bg.src = templatePath + this.props.params.id + '.png';
    
    let _this = this;
    bg.onload = function() {
      _this.createOverlay(bg);
      _this.createItems();

      ctx.drawImage(items, 0, 0, pageWidth, pageHeight);
      ctx.globalCompositeOperation = 'darken';
      ctx.drawImage(overlay, 0, 0, pageWidth, pageHeight);

      let el = document.getElementById('Palette');
      el.appendChild(_this.resizeCanvas(canvas));

      completeImage.src = canvas.toDataURL('image/png');
      _this.createFrame();
    }
  }

  resizeCanvas(canvas) {
    canvas.style.width = '100%';
    canvas.style.height = 'auto';

    return canvas;
  }

  createOverlay(bg) {
    let canvas = document.createElement('canvas');
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    let ctx = canvas.getContext('2d');
    ctx.drawImage( bg, 0, 0, pageWidth, pageHeight ); 
    
    overlay = canvas;
  }

  createItems() {
    let canvas = document.createElement('canvas');
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    let ctx = canvas.getContext('2d');

    for (let i in imgs) {
      let item = this.createItem(imgs[i].deg);
      let w = item.width;
      let h = item.height;
      ctx.drawImage( item,
        0, 0, w, h,
        imgs[i].pos.x, imgs[i].pos.y, w, h 
      );
    }

    items = canvas;
  }

  createItem(deg) {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let source = this.state.canvas;
    let w = canvas.width = source.width;
    let h = canvas.height = source.height;

    ctx.translate( w / 2, h / 2 );
    ctx.rotate( deg/180*Math.PI );
    ctx.translate( -(w / 2), -(h / 2) );
    ctx.drawImage( source, 0, 0, w, h );

    return canvas;
  }

  createFrame() {
    frame = document.createElement('iframe');
    document.body.appendChild(frame);

    frame.style.display = 'none';

    let srcdoc = this.setSrcdoc(frame);
    srcdoc.body.appendChild(completeImage);

    let img = srcdoc.getElementsByTagName('img');
    img[0].style.width = '670px';
    img[0].style.height = 'auto';
  }

  setSrcdoc(iframe) {
    let ua = getBrowser().browser.name;

    let srcdoc;
    if (ua == 'Firefox') {
      srcdoc = frame.contentDocument;
      srcdoc.writeln('<body></body>');
    } else {
      srcdoc = frame.contentWindow.document;
    }

    return srcdoc;
  }

  openPrint(e) {
    e.preventDefault();

    let ua = getBrowser().browser.name;

    let content = frame.contentWindow;
    if (ua == 'IE' || ua == 'Edge') {
      content.document.execCommand('print', false, null);
    } else {
      content.focus();
      content.print();
    }
  }
}
