import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import getBrowser from 'ua-parser-js'

import canvasStore from '../../stores/CanvasStore'

export default class Preview extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="drawCont fbox" id="Preview">

        <img
          src="/imgs/title_h2_preview.gif"
          width="1140"
          height="80"
          alt="組立イメージ"
        />

        <p className="pdnTop10 mgnBtm20 f20">
          マウスで動かして全体を見ることができます。
        </p>

        <nav className="alignCenter">
          <div className="drawPreview01">
            <a
              href=""
              onClick={this.back.bind(this)}
              >
              <img
                src="../imgs/clear.gif"
                alt="印刷ページへ戻る"
                width="330"
                height="80"
                />
            </a>
          </div>
        </nav>

      </div>
    );
  }

  back() {
    this.context.history.goBack();
  }
}

Preview.contextTypes = {
  history: React.PropTypes.object.isRequired
}
