import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'

export default class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    userStore.subscribe(this.update.bind(this));
    userActions.read();
  }

  render() {
    if (!this.state) return false

    let items = Object.keys(this.state.pages).map((i) => {
      return (
        <ListItems
          key={i}
          path={'/drawing/upload/' + this.state.pages[i].path}
          name={this.state.pages[i].name}
          />
      );
    });

    let disableBack = 1;
    let disableNext = 1;
    let pageBack = null;
    let pageNext = null;

    let id = parseInt(this.props.params.id);
    switch (id) {
      case 1:
        disableBack = 1;
        disableNext = 0;
        pageBack = null;
        pageNext = 2;
        break;

      case 2:
        disableBack = 0;
        disableNext = 0;
        pageBack = 1;
        pageNext = 3;
        break;

      case 3:
        disableBack = 0;
        disableNext = 1;
        pageBack = 2;
        pageNext = null;
        break;

      default:
        // no OP
        break;
    }

    let disable = 0;
    let page = this.props.params.id - 1;

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
          <ListBack
            disable={disableBack}
            page={pageBack}
            />

          <ListNext
            disable={disableNext}
            page={pageNext}
            />

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

  update() {
    this.setState({ pages: userStore.read() });
  }

  getPages() {
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

class ListBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.disable == 1) return false

    return (
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
    );
  }
}

class ListNext extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.disable == 1) return false

    return (
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
    );
  }
}
