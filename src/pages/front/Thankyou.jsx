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
    console.log(id);
  }

  render() {
    return (
      <div className="drawCont fbox alignCenter">

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
          <ul>
            <li>
              <a onClick={this.back.bind(this)} href="#">
                完了ページへ戻る
              </a>
            </li>

            <li>
              <Link to="/drawing/">
                塗り絵トップへ戻る
              </Link>
            </li>

            <li>
              <Link to="/drawing/">
                みんなの塗り絵をみる
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    );
  }

  back() {
    this.context.history.pushState(
      null,
      '/drawing/drawing01_comp.html'
    );
  }
}

Thankyou.contextTypes = {
  history: React.PropTypes.object.isRequired
}
