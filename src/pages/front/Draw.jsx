import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasActions from '../../actions/CanvasActions'
import canvasStore from '../../stores/CanvasStore'

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
    if (!this.state) return false

    return (
      <div className="drawCont fbox">
      
        <div id="Palette" className="drawIllust"></div>
        
        <div className="drawTool">
          <div className="drawPallet">
            <div className="head">
              <img
                src="../imgs/color_head.png"
                alt="ひだりのイラストをいろをえらんでぬってね♪"
                width="410"
                height="60"
                />
            </div>
            
            <div className="colorList">
              <ul className="pdnBtm10">
                <li>
                  <img
                    src="../imgs/clear.gif"
                    alt="space"
                    width="50"
                    height="50"
                    />
                </li>

                <li>
                  <img
                    src="../imgs/clear.gif"
                    alt="space"
                    width="50"
                    height="50"
                    />
                </li>

                <li>
                  <img
                    src="../imgs/clear.gif"
                    alt="space"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color01">
                  <img
                    src="../imgs/color01.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#c40d23"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color02">
                  <img
                    src="../imgs/color02.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#ee7700"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color03">
                  <img
                    src="../imgs/color03.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#fff100"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color04">
                  <img
                    src="../imgs/color04.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#8ec31f"
                    width="50"
                    height="50"
                    />
                </li>
              </ul>

              <ul className="pdnBtm10">
                <li>
                  <img
                    src="../imgs/clear.gif"
                    alt="space"
                    width="50"
                    height="50"
                    />
                </li>

                <li>
                  <img
                    src="../imgs/clear.gif"
                    alt="space"
                    width="50"
                    height="50"
                    />
                </li>

                <li>
                  <img
                    src="../imgs/clear.gif"
                    alt="space"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color05">
                  <img
                    src="../imgs/color05.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#006935"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color06">
                  <img
                    src="../imgs/color06.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#18adae"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color07">
                  <img
                    src="../imgs/color07.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#7acdf4"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color08">
                  <img
                    src="../imgs/color08.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#00a1e9"
                    width="50"
                    height="50"
                    />
                </li>
              </ul>

              <ul>
                <li className="color09">
                  <img
                    src="../imgs/color09.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#014099"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color10">
                  <img
                    src="../imgs/color10.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#f29ca6"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color11">
                  <img
                    src="../imgs/color11.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#7e2f8e"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color12">
                  <img
                    src="../imgs/color12.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#c6584d"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color13">
                  <img
                    src="../imgs/color13.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#804f22"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color14">
                  <img
                    src="../imgs/color14.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#ffffff"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color15">
                  <img
                    src="../imgs/color15.png"
                    onClick={this.changeColor.bind(this)}
                    alt="#feecd2"
                    width="50"
                    height="50"
                    />
                </li>
              </ul>

            </div>
            
            <div id="SelectColor" className="selectColor">
              <img
                src="../imgs/color_select.png"
                alt="いまのいろ"
                width="170"
                height="110"
                />
            </div>
          </div>
          
          <div className="drawItem">
            <div className="drawSample">
              <img
                src={this.state.sample}
                alt="みほん"
                width="230"
                height="230"
                />
            </div>

            <div className="drawAction">
              <div className="actionBtn01">
                <a href="#">
                  <img
                    src="../imgs/clear.gif"
                    onClick={this.reset}
                    alt="はじめにもどる"
                    width="180"
                    height="60"
                    />
                </a>
              </div>

              <div className="actionBtn02">
                <a href="#">
                  <img
                    src="../imgs/clear.gif"
                    onClick={this.undo}
                    alt="ひとつずつもどる"
                    width="180"
                    height="60"
                    />
                </a>
              </div>

              <div className="compBtn">
                <Link
                  to={this.state.comp}
                  onClick={this.save.bind(this)}
                  >
                  <img
                    src="../imgs/clear.gif"
                    alt="かんせい！"
                    width="180"
                    height="90"
                    />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  init() {
    let el = document.getElementById('Palette');
    let canvas = this.state.canvas;
    canvas.addEventListener(
      'click',
      this.fill.bind(this),
      false
    );

    el.appendChild(canvas);
  }

  updateState() {
    this.setState( canvasStore.read() );
  }

  fill(e) {
    var ctx = this.state.ctx;
    let w = this.state.w;
    let h = this.state.h;

    let sel = this.getPos(e);
    let pos = [{ x:sel.x, y:sel.y }];

    while(pos.length) {
      let p = pos.pop();

      let now = ctx.getImageData(p.x, p.y, 1, 1).data;
      now = now.toString();

      let next;

      // top
      next = { x: (p.x), y: (p.y - 1) };
      if (isEqual(now, next)) pos.push(next)
    }
    
    function isEqual(now, next) {
      if (next.x < 0 || next.y < 0) return false;
      if (next.x > w || next.y > h) return false;

      let n = ctx.getImageData(next.x, next.y, 1, 1).data;
      let f = (now == n.toString()) ? true : false;
      return f;
    }
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

  save() {
  }
}
