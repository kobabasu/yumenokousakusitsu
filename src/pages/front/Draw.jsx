import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasActions from '../../actions/CanvasActions'
import canvasStore from '../../stores/CanvasStore'

let clipboard = [];

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
                    onClick={this.reset.bind(this)}
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
                    onClick={this.undo.bind(this)}
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
    this.saveClipboard(canvas);
  }

  updateState() {
    this.setState( canvasStore.read() );
  }

  fill(e) {
    let canvas = this.state.canvas;
    let ctx = this.state.ctx;
    let px = this.state.px;
    let w = this.state.w;
    let h = this.state.h;

    let sel = this.getPos(e);
    let pos = [{ x:sel.x, y:sel.y }];

    let cnt = 0;
    while(pos.length) {
      //cnt++; if (cnt > 100000) { return; }
      let p = pos.pop();
      let idx = ( p.y * w + p.x ) * 4;
      let now = [];
      now[0] = px.data[idx+0];
      now[1] = px.data[idx+1];
      now[2] = px.data[idx+2];
      now[3] = px.data[idx+3];
      now = now.toString();

      let hex = this.hexToRGB(this.state.color);

      px.data[idx+0] = hex.r;
      px.data[idx+1] = hex.g;
      px.data[idx+2] = hex.b;
      px.data[idx+3] = 255;

      if (!isEqual(now, p)) {
        let next;

        // up
        next = { x: (p.x), y: (p.y - 1) };
        if (isEqual(now, next)) pos.push(next)

        // left
        next = { x: (p.x - 1), y: (p.y) };
        if (isEqual(now, next)) pos.push(next)

        // right
        next = { x: (p.x), y: (p.y + 1) };
        if (isEqual(now, next)) pos.push(next)

        // down
        next = { x: (p.x + 1), y: (p.y) };
        if (isEqual(now, next)) pos.push(next)
      }
    }

    function isEqual(now, next) {
      if (next.x < 0 || next.y < 0) return false;
      if (next.x > w || next.y > h) return false;
      
      let idxi = ( next.y * w + next.x ) * 4;
      let n = [];
      n[0] = px.data[idxi+0];
      n[1] = px.data[idxi+1];
      n[2] = px.data[idxi+2];
      n[3] = px.data[idxi+3];

      let f = (now == n.toString()) ? true : false;
      return f;
    }

    ctx.putImageData(px, 0, 0);

    this.saveClipboard(canvas);
    this.setStoreImage(canvas);
  }

  saveClipboard(canvas) {
    let buf = document.createElement('canvas');
    let w = canvas.width, h = canvas.height;
    buf.width = w; buf.height = h;
    buf.getContext('2d').drawImage(canvas, 0, 0);
    clipboard.push(buf);
  }

  hexToRGB(hex) {
    let r;
    r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r ? {
        r: parseInt(r[1], 16),
        g: parseInt(r[2], 16),
        b: parseInt(r[3], 16)
    } : null;
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
    canvasActions.update({ color: e.target.alt });
  }

  undo() {
    if (clipboard.length > 1) {
      clipboard.pop();
      let canvas = this.state.canvas;
      let i = clipboard.length - 1;
      canvas.getContext('2d').drawImage(clipboard[i], 0, 0);
      this.setStoreImage(canvas);
    }
  }

  reset() {
    let ctx = this.state.ctx;
    let canvas = this.state.canvas;
    canvas.getContext('2d').drawImage(clipboard[0], 0, 0);
    this.setStoreImage(canvas);
  }

  setStoreImage(canvas) {
    let ctx = canvas.getContext('2d');
    let w = canvas.width, h = canvas.height;
    let px  = ctx.getImageData(0, 0, w, h);

    canvasActions.update({
      canvas: canvas,
      ctx: ctx,
      px: px,
    });
  }

  save() {
  }
}
