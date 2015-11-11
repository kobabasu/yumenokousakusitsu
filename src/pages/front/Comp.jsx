import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasActions from '../../actions/CanvasActions'
import canvasStore from '../../stores/CanvasStore'

export default class Comp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    canvasStore.subscribe(this.updateState.bind(this));
    this.setState( canvasStore.read() );
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    canvasStore.destroy(this.updateState.bind(this));
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
              <a
                href="#"
                onClick={this.openTemplate.bind(this)}
                >
                <img
                  src="../imgs/clear.gif"
                  alt="テンプレート印刷"
                  width="330"
                  height="120"
                  />
              </a>
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

  openTemplate(e) {
    e.preventDefault();
    window.print();
  }

  updateState() {
    this.setState( canvasStore.read() );
  }
}
