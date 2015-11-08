import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Draw extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
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
                    alt="#c40d23"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color02">
                  <img
                    src="../imgs/color02.png"
                    alt="#ee7700"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color03">
                  <img
                    src="../imgs/color03.png"
                    alt="#fff100"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color04">
                  <img
                    src="../imgs/color04.png"
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
                    alt="#006935"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color06">
                  <img
                    src="../imgs/color06.png"
                    alt="#18adae"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color07">
                  <img
                    src="../imgs/color07.png"
                    alt="#7acdf4"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color08">
                  <img
                    src="../imgs/color08.png"
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
                    alt="#014099"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color10">
                  <img
                    src="../imgs/color10.png"
                    alt="#f29ca6"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color11">
                  <img
                    src="../imgs/color11.png"
                    alt="#7e2f8e"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color12">
                  <img
                    src="../imgs/color12.png"
                    alt="#c6584d"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color13">
                  <img
                    src="../imgs/color13.png"
                    alt="#804f22"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color14">
                  <img
                    src="../imgs/color14.png"
                    alt="#ffffff"
                    width="50"
                    height="50"
                    />
                </li>

                <li className="color15">
                  <img
                    src="../imgs/color15.png"
                    alt="#feecd2"
                    width="50"
                    height="50"
                    />
                </li>
              </ul>

            </div>
            
            <div className="selectColor">
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
                src={'../imgs/illust0' + id + '_sample.jpg'}
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
                    alt="ひとつずつもどる"
                    width="180"
                    height="60"
                    />
                </a>
              </div>

              <div className="compBtn">
                <Link to={'/drawing/drawing0' + id + '_comp.html'}>
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
}