import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

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
    let id = this.props.params.id;
    let canvas = document.createElement('canvas');
    canvas.width = 620;
    canvas.height = 877;
    let ctx = canvas.getContext('2d');
    
    let item = this.state.px;

    let bg = new Image();
    bg.src = '../imgs/print_template0' + id + '.png';
    
    let _this = this;
    bg.onload = function() {
      let items = _this.placeItems(canvas, ctx);
      ctx.drawImage(items, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'darken';
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

      let el = document.getElementById('Palette');
      el.appendChild(canvas);
    }
  }

  placeItems() {
    let canvas = document.createElement('canvas');
    canvas.width = 620;
    canvas.height = 877;
    let ctx = canvas.getContext('2d');

    let item = new Image();
    item.src = this.state.canvas.toDataURL('image/png');
    let w = item.width / 3;
    let h = item.height / 3;

    ctx.drawImage( item,
      0, 0, item.width, item.height,
      225, 122, w, h
    );

    ctx.drawImage( item,
      0, 0, item.width, item.height,
      225, 122 + 169, w, h
    );

    ctx.drawImage( item,
      0, 0, item.width, item.height,
      225, 122 + 169, w, h
    );


    let items = new Image();
    items.src = canvas.toDataURL('image/png');
    return items;
  }

  openPrint(e) {
    e.preventDefault();
    window.print();
  }
}
