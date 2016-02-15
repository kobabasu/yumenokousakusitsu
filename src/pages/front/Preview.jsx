import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import getBrowser from 'ua-parser-js'
import TraqballFnc from '../../..//lib/traqball/traqball.js'

import canvasStore from '../../stores/CanvasStore'

export default class Preview extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState( canvasStore.read(), this.init );
  }

  componentDidMount() {
    var config = {
      stage: 'stage'
    };

    let mytraqball = new Traqball(config);
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

        <section id="stage" className="stage">
          <div className="view">
            <div className="panel p1">
              <img
                src="/drawing/upload/20160215-012544.png"
                alt="canvas"
                width="200"
                height="200"
                />
            </div>

            <div className="panel p2">
              <img
                src="/drawing/upload/20160215-012544.png"
                alt="canvas"
                width="200"
                height="200"
                />
            </div>

            <div className="panel p3">3</div>
            <div className="panel p4">4</div>
            <div className="panel p5">5</div>
            <div className="panel p6">6</div>
          </div>
        </section>

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
