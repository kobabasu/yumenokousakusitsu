import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let el = document.getElementsByClassName('drawTitle');
    el[0].style.marginLeft = '70px';
  }

  render() {
    return (
    <div className="drawCont" id="Home">
      <DocumentTitle title="夢の工作室" />

      <div className="drawDesc">
        <img
          src="../imgs/draw_description.gif"
          alt="ぬりえのせつめい"
          width="800"
          height="100"
          />
      </div>

      <div className="drawList mgnBtm30">
        <ul>
          <li>
            <Link to="/drawing/drawing01.html">
              <span className="name">
                <img
                  src="../imgs/draw01_name.gif"
                  alt="ニックちゃん"
                  width="300"
                  height="40"
                  />
              </span>

              <img
                src="../imgs/draw01_illust.gif"
                alt="ニックちゃん"
                width="300"
                height="300"
                />
            </Link>
          </li>

          <li>
            <Link to="/drawing/drawing02.html">
              <span className="name">
                <img
                  src="../imgs/draw02_name.gif"
                  alt="ウサ子"
                  width="300"
                  height="40"
                  />
              </span>

              <img
                src="../imgs/draw02_illust.gif"
                alt="ウサ子"
                width="300"
                height="300"
                />
            </Link>
          </li>

          <li>
            <Link to="/drawing/drawing03.html">
              <span className="name">
                <img
                  src="../imgs/draw03_name.gif"
                  alt="ウサギとニックくん"
                  width="300"
                  height="40"
                  />
              </span>

            <img
              src="../imgs/draw03_illust.gif"
              alt="ウサギとニックくん"
              width="300"
              height="300"
              />
            </Link>
          </li>
        </ul>
      </div>

      <div className="drawHome01 alignCenter">
        <a
          href="/drawing/list01.html"
          >
          <img
            src="../imgs/clear.gif"
            alt="みんなのぬりえをみる"
            width="430"
            height="60"
            />
        </a>
      </div>

    </div>
    );
  }
}
