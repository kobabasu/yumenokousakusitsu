import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

export default class Thankyou extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let id = this.props.params.id;
  }

  render() {
    return (
      <div className="drawCont fbox alignCenter" id="Thankyou">

        <img
          src="/imgs/title_h2_thankyou.gif"
          width="1140"
          height="65"
          alt="ご掲載いただきありがとうございました"
        />

        <p className="pdnTop10 mgnBtm20 f20">
          作成していただいた塗り絵については、
          <br />当ホームページの、
          ギャラリーページの方へ掲載させていただきます。
          <br />ご利用いただきありがとうございました。
        </p>

        <nav>
          <div className="drawThankyou01">
            <a
              href=""
              onClick={this.back.bind(this)}
              >
              <img
                src="../imgs/clear.gif"
                alt="完了ページへ戻る"
                width="310"
                height="70"
                />
            </a>
          </div>

          <div className="drawThankyou02">
            <a
              href="/drawing/"
              >
              <img
                src="../imgs/clear.gif"
                alt="ぬりえトップへ戻る"
                width="310"
                height="70"
                />
            </a>
          </div>

          <div className="drawThankyou03">
            <a
              href="/drawing/pages01.html"
              >
              <img
                src="../imgs/clear.gif"
                alt="みんなのぬりえをみる"
                width="310"
                height="70"
                />
            </a>
          </div>
        </nav>

        <img
          src="/imgs/title_h3_thankyou.gif"
          className="mgnTop30 mgnBtm20"
          width="1140"
          height="30"
          alt="日本印刷工業のオススメ情報"
        />

        <img
          src="/imgs/ad.jpg"
          width="1140"
          height="806"
          alt="広告"
        />
      </div>
    );
  }

  back() {
    this.context.history.goBack();
  }
}

Thankyou.contextTypes = {
  history: React.PropTypes.object.isRequired
}
