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

var _Game = require('../containers/Game');

var _Game2 = _interopRequireDefault(_Game);

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

var _jsxFileName = 'C:\\folder\\new\\gol\\pages\\index.js?entry';

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
        var m = require('../containers/Game');

        m.__webpackChunkName = 'containers_Game_68628700669206fecaae52a74f1939fa.js';
        resolve(m);
    }, 'chunks/containers_Game_68628700669206fecaae52a74f1939fa.js');
}) : new (require('next\\dist\\lib\\dynamic.js').SameLoopPromise)(function (resolve, reject) {
    var weakId = require.resolveWeak('../containers/Game');

    try {
        var weakModule = __webpack_require__(weakId);

        return resolve(weakModule);
    } catch (err) {}

    require.ensure([], function (require) {
        try {
            var m = require('../containers/Game');

            resolve(m);
        } catch (error) {
            reject(error);
        }
    }, 'chunks/containers_Game_68628700669206fecaae52a74f1939fa.js');
}), { ssr: false });

var Counter = function (_React$Component) {
    (0, _inherits3.default)(Counter, _React$Component);

    function Counter(props) {
        (0, _classCallCheck3.default)(this, Counter);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call(this, props));

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
        };

        return _this;
    }

    (0, _createClass3.default)(Counter, [{
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
                    lineNumber: 112
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }), _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement(HeaderSSR1, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                    }
                }), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('div', { className: this.props.classes.navbar, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement(_Header2.default, { url: this.props.url, screen: this.state.screen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }))), _react2.default.createElement(DynamicComponentWithNoSSR, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
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

    return Counter;
}(_react2.default.Component);

exports.default = (0, _store.withReduxSaga)((0, _withRoot2.default)((0, _reactJss2.default)(styles)(Counter)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJsb2FkRGF0YSIsIkdhbWUiLCJIZWFkZXIiLCJIZWFkZXJTU1IiLCJOb1NTUiIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJjb21wb3NlIiwic2V0RGlzcGxheU5hbWUiLCJwdXJlIiwibGlmZWN5Y2xlIiwid2l0aFByb3BzIiwiY29uZmlndXJlU3RvcmUiLCJ3aXRoUm9vdCIsImluamVjdFNoZWV0Iiwic3R5bGVzaGVldCIsImR5bmFtaWMiLCJzdHlsZXMiLCJuYXZiYXIiLCJvdmVyZmxvdyIsImJveFNoYWRvdyIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluIiwibWFyZ2luVG9wIiwiRHluYW1pY0NvbXBvbmVudFdpdGhOb1NTUiIsInNzciIsIkNvdW50ZXIiLCJwcm9wcyIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJzZXRTdGF0ZSIsInNjcmVlbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJIZWFkZXJTU1IxIiwiX19odG1sIiwiY2xhc3NlcyIsInVybCIsInN0b3JlIiwiZ2V0U3RhdGUiLCJwYXR0ZXJucyIsImxlbmd0aCIsImRpc3BhdGNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7QUFDUixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVE7Ozs7QUFDUixBQUFTLEFBQVMsQUFBZ0IsQUFBTSxBQUFXLEFBQ25ELEFBQU87O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1As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