import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

let page, pageContext;
let overlay, overlayContext;
let items, itemsContext;

let pageWidth = 620;
let pageHeight = 877;

let templateFile = '../imgs/print_template0';


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
    let bg = new Image();
    bg.src = templateFile + this.props.params.id + '.png';
    
    let _this = this;
    bg.onload = function() {
      _this.createPage();
      _this.createOverlay(bg);
      _this.createItems();

      pageContext.drawImage(items, 0, 0, pageWidth, pageHeight);
      pageContext.globalCompositeOperation = 'darken';
      pageContext.drawImage(overlay, 0, 0, pageWidth, pageHeight);

      let el = document.getElementById('Palette');
      el.appendChild(page);
    }
  }

  createPage() {
    let canvas = document.createElement('canvas');
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    let ctx = canvas.getContext('2d');

    page = canvas;
    pageContext = ctx;
  }

  createOverlay(bg) {
    let canvas = document.createElement('canvas');
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    let ctx = canvas.getContext('2d');
    ctx.drawImage( bg, 0, 0, pageWidth, pageHeight ); 
    
    overlay = canvas;
    overlayContext = ctx;
  }

  createItems() {
    let canvas = document.createElement('canvas');
    let w = canvas.width = pageWidth;
    let h = canvas.height = pageHeight;
    let ctx = canvas.getContext('2d');

    let item = this.createItem();

    ctx.drawImage( item,
      0, 0, w, h,
      225, 122, w, h
    );

    items = new Image();
    items.src = canvas.toDataURL('image/png');
  }

  createItem() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let source = this.state.canvas;
    let w = canvas.width = source.width / 3;
    let h = canvas.height = source.height / 3;
    console.log(w, source.width);

    ctx.translate( w / 2, h / 2 );
    ctx.rotate( 180/180*Math.PI );
    ctx.translate( -(w / 2), -(h / 2) );
    ctx.drawImage( source, 0, 0, w, h );

    let item = new Image();
    item.src = canvas.toDataURL('image/png');

    return item;
  }

  openPrint(e) {
    e.preventDefault();
    window.print();
  }
}
