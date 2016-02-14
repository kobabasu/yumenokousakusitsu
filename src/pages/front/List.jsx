import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

export default class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let id = this.props.params.id;
  }

  render() {
    let tmp = [
      {
        'path': '/drawing/upload/20160215-012544.png',
        'name': 'ニックちゃん'
      },
      {
        'path': '/drawing/upload/20160215-012544.png',
        'name': 'ニックちゃん2'
      }
    ];

    let items = Object.keys(tmp).map((i) => {
      return (
        <ListItems
          key={i}
          path={tmp[i].path}
          name={tmp[i].name}
          />
      );
    });

    return (
      <div className="drawCont fbox alignCenter" id="List">

        <img
          src="/imgs/title_h2_list.gif"
          width="1140"
          height="80"
          alt="ご掲載いただきありがとうございました"
        />

        <p className="pdnTop10 mgnBtm20 f20 alignLeft">
          みんなが遊んでくれた塗り絵を掲載しているよ。
        </p>

        <div className="drawTable alignLeft">
          {items}
        </div>

        <nav className="alignCenter">
          <div className="drawList01">
            <a
              href="/drawing/"
              >
              <img
                src="../imgs/clear.gif"
                alt="前へ戻る"
                width="150"
                height="50"
                />
            </a>
          </div>

          <div className="drawList02">
            <a
              href="/drawing/"
              >
              <img
                src="../imgs/clear.gif"
                alt="次へ進む"
                width="150"
                height="50"
                />
            </a>
          </div>

          <div className="drawList03">
            <a
              href="/drawing/"
              >
              <img
                src="../imgs/clear.gif"
                alt="塗り絵トップに戻る"
                width="230"
                height="50"
                />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

List.contextTypes = {
  history: React.PropTypes.object.isRequired
}

class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          src={this.props.path}
          width="200"
          height="200"
          alt={this.props.name}
        />
        <p>{this.props.name}</p>
      </div>
    );
  }
}
