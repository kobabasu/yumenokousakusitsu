import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

let overlay;
let items;

// テンプレートファイルのサイズ

const pageWidth  = 2480;
const pageHeight = 3510;

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
      <div className="drawCont fbox">
      
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
    }
  }

  checkPrint() {
    let chk = window.matchMedia("print");
    chk.addListener(getOrientationValue);

    function getOrientationValue (mediaQueryList) {
      if (mediaQueryList.matches) {
      }
    }
  }

  resizeCanvas(canvas) {
    canvas.style.width = '95%';
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

  openPrint(e) {
    e.preventDefault();
    window.print();
  }
}