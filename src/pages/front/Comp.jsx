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
            <img
              src="/imgs/title_h2_comp_01.gif"
              width="325"
              height="50"
              className="mgnBtm20"
              alt="印刷について"
            />

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

          <div className="drawForm">
            <img
              src="/imgs/title_h2_comp_02.gif"
              width="325"
              height="50"
              className="mgnBtm20"
              alt="掲載について"
            />

            <p>
              ぬりえ画像を当ホームページに掲載していただけるお客様は、
              下記の情報を入力の上、送信ボタンを押して下さい。
            </p>

            <table>
              <tbody>
                <tr>
                  <td className="drawFormLabel">ニックネーム</td>
                  <td className="drawFormElement">
                    <input
                      type="text"
                      minLength="1"
                      maxLength="8"
                      placeholder="8文字で入力"
                      />
                  </td>
                </tr>
                
                <tr>
                  <td className="drawFormLabel">掲載する</td>
                  <td className="drawFormElement">
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        />
                      掲載する
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="drawForm01">
              <Link
                to="/drawing/thankyou01.html"
                >
                <img
                  src="../imgs/clear.gif"
                  alt="送信する"
                  width="330"
                  height="50"
                  />
              </Link>
            </div>

            <div className="drawForm02">
              <Link
                to="/drawing/pages01.html"
                >
                <img
                  src="../imgs/clear.gif"
                  alt="みんなのぬりえをみる"
                  width="330"
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
