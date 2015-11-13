import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

export default class Comp extends React.Component {

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
        
        <div className="drawTool">
          <div className="drawPrint">
            <div className="printBtn01">
              <a
                href="#"
                onClick={this.openPrint.bind(this)}
                >
                <img
                  src="../imgs/clear.gif"
                  alt="ノーマル印刷"
                  width="330"
                  height="120"
                />
              </a>
            </div>

            <div className="printBtn02">
              <Link
                to="/drawing/template01.html"
                >
                <img
                  src="../imgs/clear.gif"
                  alt="テンプレート印刷"
                  width="330"
                  height="120"
                  />
              </Link>
            </div>

            <div className="drawTop">
              <Link to="/drawing/">
                <img
                  src="../imgs/btn_draw_top.gif"
                  alt="ぬりえトップへ戻る"
                  width="230"
                  height="50"
                  />
              </Link>
            </div>
          </div>
        </div>
      </div>
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
}
