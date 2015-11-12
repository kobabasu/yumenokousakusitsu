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
      
        <div id="Palette" className="drawIllust"></div>
        
        <div className="drawTmp">
          <img
            src="../imgs/print_template01.gif"
            alt="塗り絵イラスト"
            width="100%"
            />
        </div>
      
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
//let el = document.getElementById('Palette');
//let canvas = this.state.canvas;
//el.appendChild(canvas);
  }

  openPrint(e) {
    e.preventDefault();
    window.print();
  }
}
