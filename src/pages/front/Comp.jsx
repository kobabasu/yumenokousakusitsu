import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

import userStore from '../../stores/UserStore'
import userActions from '../../actions/UserActions'

export default class Comp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ user: userStore.read() });
    this.setState( canvasStore.read(), this.init );
    userStore.subscribe( this.updateUser.bind(this) );
  }

  componentWillUnmount() {
    userStore.destroy(this.updateUser.bind(this));
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

            <div className="printBtn03">
              <Link
                to="/drawing/preview01.html"
                >
                <img
                  src="../imgs/clear.gif"
                  alt="3Dプレビューを見る"
                  width="330"
                  height="60"
                  />
              </Link>
            </div>

            <div className="drawTop">
              <a href="/drawing/">
                <img
                  src="../imgs/btn_draw_top.gif"
                  alt="ぬりえトップへ戻る"
                  width="230"
                  height="50"
                  />
              </a>
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
                      name="name"
                      type="text"
                      minLength="1"
                      maxLength="8"
                      placeholder="8文字で入力"
                      onChange={this.onChange.bind(this)}
                      value={this.state.user.name}
                      />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="drawForm01">
              <Link
                to="/drawing/thankyou01.html"
                onClick={this.onSubmit.bind(this)}
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

    var obj = {};
    obj['canvas'] = this.convertBase64();
    userActions.update(obj);
  }

  openPrint(e) {
    e.preventDefault();
    window.print();
  }

  onChange(e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    userActions.update(obj);
  }

  updateUser() {
    this.setState({ user: userStore.read() });
  }

  onSubmit(e) {
    if (
      this.state.user.name != null &&
      this.state.user.canvas != null
    ) {
      if (!this.state.user.registered) {
        userActions.save(
          this.state.user,
          this.transition.bind(
            this,
            '/drawing/thankyou01.html'
          )
        );
      } else {
        this.transition('/drawing/thankyou01.html');
      }
    }
  }

  transition(url) {
    this.context.history.pushState(null, url);
  }

  convertBase64() {
    let canvas = this.state.canvas;
    let ctx = canvas.getContext('2d'); 
    let base64 = canvas.toDataURL('image/jpeg');
    
    return base64.replace(/^.*,/, '');
  }
}

Comp.contextTypes = {
  history: React.PropTypes.object.isRequired
}
