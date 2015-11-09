import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Comp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.init();
  }

  render() {
    let id = this.props.params.id;

    return (
    <div className="drawCont fbox">
    
      <div className="drawIllust">
        <img
          src={'../imgs/illust0' + id + '.jpg'}
          alt="塗り絵イラスト"
          width="510"
          height="510"
        />
      </div>
      
      <div className="drawTool">
        <div className="drawPrint">
          <div className="printBtn01">
            <a href="#">
              <img
                src="../imgs/clear.gif"
                alt="ノーマル印刷"
                width="330"
                height="120"
              />
            </a>
          </div>

          <div className="printBtn02">
            <a href="#">
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
    let _this = this;
    let id = this.props.params.id;
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    let img = new Image();
    img.src = '../imgs/illust0' + id + '.jpg';

    img.onload = function() {
    }
  }
}
