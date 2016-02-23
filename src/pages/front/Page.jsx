import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import canvasStore from '../../stores/CanvasStore'

import pageActions from '../../actions/PageActions'
import pageStore from '../../stores/PageStore'

export default class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    pageStore.subscribe(this.update.bind(this));
    pageActions.load(this.props.params.id);
  }

  render() {
    if (!this.state) return false

    let items = Object.keys(this.state.pages).map((i) => {
      let path = this.state.pages[i].path;
      return (
        <ListItems
          key={i}
          path={'/upload/' + path + '_s.jpg'}
          name={this.state.pages[i].name}
          />
      );
    });

    let disableBack = 1;
    let disableNext = 1;
    let pageBack = null;
    let pageNext = null;

    let id = parseInt(this.props.params.id);

    let limit = this.state.limit;
    let total = this.state.total;

    switch (id) {
      case 1:
        disableBack = 1;
        if (total > limit * 1) {
          disableNext = 0;
        } else {
          disableNext = 1;
        }
        pageBack = null;
        pageNext = 2;
        break;

      case 2:
        disableBack = 0;
        if (total > limit * 2) {
          disableNext = 0;
        } else {
          disableNext = 1;
        }
        pageBack = 1;
        pageNext = 3;
        break;

      case 3:
        disableBack = 0;
        if (total > limit * 3) {
          disableNext = 1;
        } else {
          disableNext = 1;
        }
        pageBack = 2;
        pageNext = null;
        break;

      default:
        // no OP
        break;
    }

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
    let pages = pageStore.read();
    this.setState({
      pages: pages.pages,
      limit: pages.limit,
      total: pages.total
    });
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
    this.state = props;
  }

  render() {
    if (this.props.disable == 1) return (
      <div className="drawList01">
        <img
          src="../imgs/btn_list_01_disable.png"
          alt="前へ戻る"
          width="150"
          height="50"
          className="mgnBtm20"
          />
      </div>
    );

    let path = '/drawing/pages0' + this.props.page + '.html';
    return (
      <div className="drawList01">
        <Link
          to={path}
          params={{id:this.props.page}}
          >
          <img
            src="../imgs/clear.gif"
            alt="前へ戻る"
            width="150"
            height="50"
            onClick={this.update.bind(this)}
            />
        </Link>
      </div>
    );
  }

  update() {
    let pages = pageActions.load(this.props.page);
  }
}

class ListNext extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.disable == 1) return (
        <div className="drawList02">
          <img
            src="../imgs/btn_list_02_disable.png"
            alt="次へ進む"
            width="150"
            height="50"
            className="mgnBtm20"
            />
        </div>
    );

    let path = '/drawing/pages0' + this.props.page + '.html';
    return (
      <div className="drawList02">
        <Link
          to={path}
          params={{id:this.props.page}}
          >
          <img
            src="../imgs/clear.gif"
            alt="次へ進む"
            width="150"
            height="50"
            onClick={this.update.bind(this)}
            />
        </Link>
      </div>
    );
  }

  update() {
    let pages = pageActions.load(this.props.page);
  }
}
