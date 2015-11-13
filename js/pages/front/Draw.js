'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _CanvasActions = require('../../actions/CanvasActions');

var _CanvasActions2 = _interopRequireDefault(_CanvasActions);

var _CanvasStore = require('../../stores/CanvasStore');

var _CanvasStore2 = _interopRequireDefault(_CanvasStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clipboard = [];
var listener = undefined;

var Draw = (function (_React$Component) {
  _inherits(Draw, _React$Component);

  function Draw(props) {
    _classCallCheck(this, Draw);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Draw).call(this, props));
  }

  _createClass(Draw, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var id = this.props.params.id;
      _CanvasStore2.default.subscribe(this.updateState.bind(this));
      _CanvasActions2.default.create(id, this.init.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _CanvasStore2.default.destroy(this.updateState.bind(this));
      clipboard = [];
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state) return false;

      return _react2.default.createElement(
        'div',
        { className: 'drawCont fbox', __source: {
            fileName: '../../../src/pages/front/Draw.jsx',
            lineNumber: 32
          },
          __source: {
            fileName: '../../../src/pages/front/Draw.jsx',
            lineNumber: 32
          }
        },
        _react2.default.createElement('div', { id: 'Palette', className: 'drawIllust', __source: {
            fileName: '../../../src/pages/front/Draw.jsx',
            lineNumber: 34
          },
          __source: {
            fileName: '../../../src/pages/front/Draw.jsx',
            lineNumber: 34
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'drawTool', __source: {
              fileName: '../../../src/pages/front/Draw.jsx',
              lineNumber: 36
            },
            __source: {
              fileName: '../../../src/pages/front/Draw.jsx',
              lineNumber: 36
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'drawPallet', __source: {
                fileName: '../../../src/pages/front/Draw.jsx',
                lineNumber: 37
              },
              __source: {
                fileName: '../../../src/pages/front/Draw.jsx',
                lineNumber: 37
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'head', __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 38
                },
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 38
                }
              },
              _react2.default.createElement('img', {
                src: '../imgs/color_head.png',
                alt: 'ひだりのイラストをいろをえらんでぬってね♪',
                width: '410',
                height: '60',
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 39
                },
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 39
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'colorList', __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 47
                },
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 47
                }
              },
              _react2.default.createElement(
                'ul',
                { className: 'pdnBtm10', __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 48
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 48
                  }
                },
                _react2.default.createElement(
                  'li',
                  {
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 49
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 49
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    alt: 'space',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 50
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 50
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  {
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 58
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 58
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    alt: 'space',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 59
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 59
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  {
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 67
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 67
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    alt: 'space',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 68
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 68
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color01', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 76
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 76
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color01.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#c40d23',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 77
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 77
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color02', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 86
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 86
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color02.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#ee7700',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 87
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 87
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color03', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 96
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 96
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color03.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#fff100',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 97
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 97
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color04', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 106
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 106
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color04.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#8ec31f',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 107
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 107
                    }
                  })
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'pdnBtm10', __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 117
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 117
                  }
                },
                _react2.default.createElement(
                  'li',
                  {
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 118
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 118
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    alt: 'space',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 119
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 119
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  {
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 127
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 127
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    alt: 'space',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 128
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 128
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  {
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 136
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 136
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    alt: 'space',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 137
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 137
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color05', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 145
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 145
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color05.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#006935',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 146
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 146
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color06', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 155
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 155
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color06.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#18adae',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 156
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 156
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color07', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 165
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 165
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color07.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#7acdf4',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 166
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 166
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color08', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 175
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 175
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color08.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#00a1e9',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 176
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 176
                    }
                  })
                )
              ),
              _react2.default.createElement(
                'ul',
                {
                  __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 186
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 186
                  }
                },
                _react2.default.createElement(
                  'li',
                  { className: 'color09', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 187
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 187
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color09.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#014099',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 188
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 188
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color10', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 197
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 197
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color10.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#f29ca6',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 198
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 198
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color11', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 207
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 207
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color11.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#7e2f8e',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 208
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 208
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color12', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 217
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 217
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color12.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#c6584d',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 218
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 218
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color13', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 227
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 227
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color13.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#804f22',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 228
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 228
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color14', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 237
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 237
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color14.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#ffffff',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 238
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 238
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'color15', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 247
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 247
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/color15.png',
                    onClick: this.changeColor.bind(this),
                    alt: '#feecd2',
                    width: '50',
                    height: '50',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 248
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 248
                    }
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'SelectColor', className: 'selectColor', __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 260
                },
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 260
                }
              },
              _react2.default.createElement('img', {
                src: '../imgs/color_select.png',
                alt: 'いまのいろ',
                width: '170',
                height: '110',
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 261
                },
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 261
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'drawItem', __source: {
                fileName: '../../../src/pages/front/Draw.jsx',
                lineNumber: 270
              },
              __source: {
                fileName: '../../../src/pages/front/Draw.jsx',
                lineNumber: 270
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'drawSample', __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 271
                },
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 271
                }
              },
              _react2.default.createElement('img', {
                src: this.state.sample,
                alt: 'みほん',
                width: '230',
                height: '230',
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 272
                },
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 272
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'drawAction', __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 280
                },
                __source: {
                  fileName: '../../../src/pages/front/Draw.jsx',
                  lineNumber: 280
                }
              },
              _react2.default.createElement(
                'div',
                { className: 'actionBtn01', __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 281
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 281
                  }
                },
                _react2.default.createElement(
                  'a',
                  { href: '#', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 282
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 282
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    onClick: this.reset.bind(this),
                    alt: 'はじめにもどる',
                    width: '180',
                    height: '60',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 283
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 283
                    }
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'actionBtn02', __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 293
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 293
                  }
                },
                _react2.default.createElement(
                  'a',
                  { href: '#', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 294
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 294
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    onClick: this.undo.bind(this),
                    alt: 'ひとつずつもどる',
                    width: '180',
                    height: '60',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 295
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 295
                    }
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'compBtn', __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 305
                  },
                  __source: {
                    fileName: '../../../src/pages/front/Draw.jsx',
                    lineNumber: 305
                  }
                },
                _react2.default.createElement(
                  'a',
                  { href: '#', __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 306
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 306
                    }
                  },
                  _react2.default.createElement('img', {
                    src: '../imgs/clear.gif',
                    onClick: this.save.bind(this),
                    alt: 'かんせい！',
                    width: '180',
                    height: '90',
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 307
                    },
                    __source: {
                      fileName: '../../../src/pages/front/Draw.jsx',
                      lineNumber: 307
                    }
                  })
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'init',
    value: function init() {
      var el = document.getElementById('Palette');
      var canvas = this.state.canvas;

      listener = this.fill.bind(this);
      canvas.addEventListener('click', listener, false);

      el.appendChild(canvas);
      this.saveClipboard(canvas);
    }
  }, {
    key: 'updateState',
    value: function updateState() {
      this.setState(_CanvasStore2.default.read());
    }
  }, {
    key: 'fill',
    value: function fill(e) {
      var canvas = this.state.canvas;
      var ctx = this.state.ctx;
      var px = this.state.px;
      var w = this.state.w;
      var h = this.state.h;

      var sel = this.getPos(e);
      var pos = [{ x: sel.x, y: sel.y }];

      var cnt = 0;
      while (pos.length) {
        //cnt++; if (cnt > 100000) { return; }
        var p = pos.pop();
        var idx = (p.y * w + p.x) * 4;
        var now = [];
        now[0] = px.data[idx + 0];
        now[1] = px.data[idx + 1];
        now[2] = px.data[idx + 2];
        now[3] = px.data[idx + 3];

        var hex = this.hexToRGB(this.state.color);

        px.data[idx + 0] = hex.r;
        px.data[idx + 1] = hex.g;
        px.data[idx + 2] = hex.b;
        px.data[idx + 3] = 255;

        if (!isEqual(now, p)) {
          var next = undefined;

          // up
          next = { x: p.x, y: p.y - 1 };
          if (isEqual(now, next)) pos.push(next);

          // left
          next = { x: p.x - 1, y: p.y };
          if (isEqual(now, next)) pos.push(next);

          // right
          next = { x: p.x, y: p.y + 1 };
          if (isEqual(now, next)) pos.push(next);

          // down
          next = { x: p.x + 1, y: p.y };
          if (isEqual(now, next)) pos.push(next);
        }
      }

      function isEqual(now, next) {
        if (next.x < 0 || next.y < 0) return false;
        if (next.x > w || next.y > h) return false;

        if (now[0] < 10 && now[1] < 10 && now[2] < 10) {
          return false;
        } else {
          now = now.toString();
        }

        var idxi = (next.y * w + next.x) * 4;
        var n = [];
        n[0] = px.data[idxi + 0];
        n[1] = px.data[idxi + 1];
        n[2] = px.data[idxi + 2];
        n[3] = px.data[idxi + 3];

        var f = now == n.toString() ? true : false;
        return f;
      }

      ctx.putImageData(px, 0, 0);

      this.saveClipboard(canvas);
      this.setStoreImage(canvas);
    }
  }, {
    key: 'saveClipboard',
    value: function saveClipboard(canvas) {
      var buf = document.createElement('canvas');
      var w = canvas.width,
          h = canvas.height;
      buf.width = w;buf.height = h;
      buf.getContext('2d').drawImage(canvas, 0, 0);
      clipboard.push(buf);
    }
  }, {
    key: 'hexToRGB',
    value: function hexToRGB(hex) {
      var r = undefined;
      r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return r ? {
        r: parseInt(r[1], 16),
        g: parseInt(r[2], 16),
        b: parseInt(r[3], 16)
      } : null;
    }
  }, {
    key: 'getPos',
    value: function getPos(e) {
      var rect = e.target.getBoundingClientRect();

      var obj = {
        x: Math.floor(e.clientX - rect.left),
        y: Math.floor(e.clientY - rect.top)
      };
      _CanvasActions2.default.update(obj);

      return obj;
    }
  }, {
    key: 'changeColor',
    value: function changeColor(e) {
      var el = document.getElementById('SelectColor');
      el.style.backgroundColor = e.target.alt;
      _CanvasActions2.default.update({ color: e.target.alt });
    }
  }, {
    key: 'undo',
    value: function undo() {
      if (clipboard.length > 1) {
        clipboard.pop();
        var canvas = this.state.canvas;
        var i = clipboard.length - 1;
        canvas.getContext('2d').drawImage(clipboard[i], 0, 0);
        this.setStoreImage(canvas);
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      var ctx = this.state.ctx;
      var canvas = this.state.canvas;
      canvas.getContext('2d').drawImage(clipboard[0], 0, 0);
      this.setStoreImage(canvas);
    }
  }, {
    key: 'setStoreImage',
    value: function setStoreImage(canvas) {
      var ctx = canvas.getContext('2d');
      var w = canvas.width,
          h = canvas.height;
      var px = ctx.getImageData(0, 0, w, h);

      _CanvasActions2.default.update({
        canvas: canvas,
        ctx: ctx,
        px: px
      });
    }
  }, {
    key: 'save',
    value: function save() {
      var canvas = this.state.canvas;
      canvas.removeEventListener('click', listener, false);
      _CanvasActions2.default.update({ canvas: canvas });

      this.context.history.pushState(null, this.state.comp);
    }
  }]);

  return Draw;
})(_react2.default.Component);

exports.default = Draw;

Draw.contextTypes = {
  history: _react2.default.PropTypes.object.isRequired
};