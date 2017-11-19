'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _HeaderSSR = require('../components/HeaderSSR');

var _HeaderSSR2 = _interopRequireDefault(_HeaderSSR);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _recompose = require('recompose');

var _withRoot = require('../components/withRoot');

var _withRoot2 = _interopRequireDefault(_withRoot);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _index = require('../statics/rc-slider/index.css');

var _index2 = _interopRequireDefault(_index);

var _dynamic = require('next\\dist\\lib\\dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\pages\\about.js?entry';
// import About from '../containers/About'

// const Counter = compose(
//     setDisplayName('IndexPage'),
//     withProps({
//         title: 'Index page',
//         // linkTo: '/other'
//     }),
//     // lifecycle({
//     //     componentDidMount () {
//     //         this.timer = this.props.startClock()
//     //     },
//     //     componentWillUnmount () {
//     //         clearInterval(this.timer)
//     //     }
//     // }),
//     pure
// )(Game)

// Counter.getInitialProps = ({ store }) => {
//     store.dispatch(loadData())
// }

// export default withRedux(configureStore, null, null)(Counter)
var styles = {
    navbar: {
        overflow: 'hidden',
        boxShadow: [0, 3, 15, -6, '#222'],
        position: 'fixed',
        top: 0,
        width: '100%',
        'z-index': 3,
        backgroundColor: "#fff"
    },
    main: {
        marginTop: 30,
        'z-index': 2
    }
};

var DynamicComponentWithNoSSR = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next\\dist\\lib\\dynamic.js').SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    require.ensure([], function (require) {
        var m = require('../containers/About');

        m.__webpackChunkName = 'containers_About_23db813ce1c211fe47ddec7b3f3a6ff3.js';
        resolve(m);
    }, 'chunks/containers_About_23db813ce1c211fe47ddec7b3f3a6ff3.js');
}) : new (require('next\\dist\\lib\\dynamic.js').SameLoopPromise)(function (resolve, reject) {
    var weakId = require.resolveWeak('../containers/About');

    try {
        var weakModule = __webpack_require__(weakId);

        return resolve(weakModule);
    } catch (err) {}

    require.ensure([], function (require) {
        try {
            var m = require('../containers/About');

            resolve(m);
        } catch (error) {
            reject(error);
        }
    }, 'chunks/containers_About_23db813ce1c211fe47ddec7b3f3a6ff3.js');
}), { ssr: false });

var AboutPage = function (_React$Component) {
    (0, _inherits3.default)(AboutPage, _React$Component);

    function AboutPage(props) {
        (0, _classCallCheck3.default)(this, AboutPage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).call(this, props));

        _this.handleWindowSizeChange = function () {
            _this.setState({
                screen: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    ratio: window.devicePixelRatio || 1
                }
            });
            //         this.canvasBoard.width=((this.gridWidth + 1) * this.squareSize) * this.ratio;
            // console.log(`${this.gridWidth} + ${this.squareSize} * ${this.state.screen.ratio}`)
            console.log("vvv1");
            // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.ratio;
        };

        _this.state = {
            screen: {}
            // console.log(props);
        };return _this;
    }

    (0, _createClass3.default)(AboutPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.handleWindowSizeChange);
            this.setState({
                screen: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    ratio: window.devicePixelRatio || 1
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("ind");
            var HeaderSSR1 = function HeaderSSR1() {
                return _react2.default.createElement(_HeaderSSR2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                    }
                });
            };
            // const HeaderSSR1 = () => ( 
            //        <div className={this.props.classes.navbar}>
            //         <HeaderSSR/>
            //     </div>);

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }), _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement(HeaderSSR1, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                    }
                }), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement('div', { className: this.props.classes.navbar, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement(_Header2.default, { url: this.props.url, screen: this.state.screen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }))), _react2.default.createElement(DynamicComponentWithNoSSR, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var store = _ref.store;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(store.getState().patterns.length);
                                if (store.getState().patterns.length === 0) {
                                    store.dispatch((0, _actions.loadData)());
                                }

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return AboutPage;
}(_react2.default.Component);

exports.default = (0, _store.withReduxSaga)((0, _withRoot2.default)((0, _reactJss2.default)(styles)(AboutPage)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhYm91dC5qcyJdLCJuYW1lcyI6WyJsb2FkRGF0YSIsIkhlYWRlciIsIkhlYWRlclNTUiIsIk5vU1NSIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSIsImNvbXBvc2UiLCJzZXREaXNwbGF5TmFtZSIsInB1cmUiLCJsaWZlY3ljbGUiLCJ3aXRoUHJvcHMiLCJjb25maWd1cmVTdG9yZSIsIndpdGhSb290IiwiaW5qZWN0U2hlZXQiLCJzdHlsZXNoZWV0IiwiZHluYW1pYyIsInN0eWxlcyIsIm5hdmJhciIsIm92ZXJmbG93IiwiYm94U2hhZG93IiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIm1haW4iLCJtYXJnaW5Ub3AiLCJEeW5hbWljQ29tcG9uZW50V2l0aE5vU1NSIiwic3NyIiwiQWJvdXRQYWdlIiwicHJvcHMiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwic2V0U3RhdGUiLCJzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiSGVhZGVyU1NSMSIsIl9faHRtbCIsImNsYXNzZXMiLCJ1cmwiLCJzdG9yZSIsImdldFN0YXRlIiwicGF0dGVybnMiLCJsZW5ndGgiLCJkaXNwYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7O0FBRVIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVE7Ozs7QUFDUixBQUFTLEFBQVMsQUFBZ0IsQUFBTSxBQUFXLEFBQ25ELEFBQU87O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7OztBQVhQOztB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