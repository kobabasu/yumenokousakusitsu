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
    let el = document.getElementById('Palette');
    let canvas = document.createElement('canvas');

    let item = this.state.canvas;

    let bg = new Image();
    bg.src = '../imgs/print_template0' + id + '.gif';
    
    let _this = this;
    bg.onload = function() {
      let ctx = _this.attachTemp(canvas, bg);
      el.appendChild(canvas);
    }
  }

  attachTemp(canvas, bg) {
    let ctx = canvas.getContext('2d');
    
    let w = canvas.width = 602;
    let h = canvas.height = 855;

    ctx.drawImage(bg, 0, 0, w, h);
    
    return ctx;
  }

  openPrint(e) {
    e.preventDefault();
    window.print();
  }
}
