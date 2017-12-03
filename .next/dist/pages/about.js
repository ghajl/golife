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

var _jsxFileName = 'C:\\folder\\new\\gol\\pages\\about.js?entry';
// import About from '../containers/About'

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

var _dynamic = require('next\\dist\\lib\\dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// import dynamic from 'next/dynamic'
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
// const styles = {
//     navbar: {
//         overflow: 'hidden',
//         boxShadow: [0, 3, 15, -6, '#222'],
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//          'z-index': 3,
//         backgroundColor:"#fff",
//     },
//     main: {
//         marginTop: 30,
//         'z-index': 2,
//     }
// }

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
}));

// class AboutPage extends React.Component {

//     constructor(props){
//         super(props);
//         this.state={
//             screen: {},
//         }
// // console.log(props);
//     }

//     static async getInitialProps ({store}) {
//         console.log(store.getState().patterns.length)
//         if (store.getState().patterns.length === 0) {
//             store.dispatch(loadData())

//         }

//     }


//     componentDidMount(){
//         window.addEventListener('resize', this.handleWindowSizeChange);
//         this.setState({
//             screen : {
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//                 ratio: window.devicePixelRatio || 1,
//               }
//         });
//     }

//     handleWindowSizeChange = () => {
//         this.setState({
//             screen : {
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//                 ratio: window.devicePixelRatio || 1,
//               }
//         });
//         //         this.canvasBoard.width=((this.gridWidth + 1) * this.squareSize) * this.ratio;
//         // console.log(`${this.gridWidth} + ${this.squareSize} * ${this.state.screen.ratio}`)
//         console.log("vvv1")
//         // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.ratio;
//     };


//     render () {
//         console.log("ind")
//         const HeaderSSR1 = () => (<HeaderSSR />);
//         // const HeaderSSR1 = () => ( 
//         //        <div className={this.props.classes.navbar}>
//         //         <HeaderSSR/>
//         //     </div>);

//         return (
//             <div>
//                 <div>
//                     <NoSSR onSSR={<HeaderSSR1 />}>
//                         <div className={this.props.classes.navbar}>
//                             <Header url={this.props.url} screen={this.state.screen}/>
//                         </div>
//                     </NoSSR>

//                     <DynamicComponentWithNoSSR />
//                 </div>
//                 <NoSSR>
//                     <Footer screen={this.state.screen}/>
//                 </NoSSR>
//             </div>
//             )
//     }
// }

var AboutPage = function (_Component) {
    (0, _inherits3.default)(AboutPage, _Component);

    function AboutPage() {
        (0, _classCallCheck3.default)(this, AboutPage);
        return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(AboutPage, [{
        key: 'render',

        // console.log(props)
        value: function render() {
            return _react2.default.createElement(_Layout2.default, { url: this.props.url, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement(DynamicComponentWithNoSSR, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
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
                                // console.log(store.getState().patterns.length)
                                if (store.getState().patterns.length === 0) {
                                    store.dispatch((0, _actions.loadData)());
                                }
                            case 1:
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
}(_react.Component);

exports.default = (0, _store.withReduxSaga)((0, _withRoot2.default)(AboutPage));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhYm91dC5qcyJdLCJuYW1lcyI6WyJEeW5hbWljQ29tcG9uZW50V2l0aE5vU1NSIiwiQWJvdXRQYWdlIiwicHJvcHMiLCJ1cmwiLCJzdG9yZSIsImdldFN0YXRlIiwicGF0dGVybnMiLCJsZW5ndGgiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFGQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU0sMktBQTRCO1NBQUE7OzBDQUFBO3dCQUFBOzsrQkFBQTtnQkFBQTtPQUFBOzZGQUFBO3FDQUFBOztRQUFBOzZDQUFBOzt1QkFBQTttQkFBQTs7MENBQUE7WUFBQTs0QkFBQTs7b0JBQUE7d0JBQUE7bUJBQUE7QUFBQTtPQUFBO0FBQWxDLEVBQWtDOztBQUtsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNLEE7Ozs7Ozs7OzthQVNGOzs7aUNBQ1MsQUFDTDttQ0FDSSx1QkFBQSxXQUFTLEtBQUssS0FBQSxBQUFLLE1BQW5CLEFBQXlCOzhCQUF6QjtnQ0FBQSxBQUVRO0FBRlI7YUFBQSxnQ0FFUSxBQUFDOzs4QkFBRDtnQ0FIWixBQUNJLEFBRVEsQUFHUDtBQUhPO0FBQUE7Ozs7OztvQkFiZSxBLGFBQUEsQTs7OztpQ0FDL0I7QUFDQTtvQ0FBSSxNQUFBLEFBQU0sV0FBTixBQUFpQixTQUFqQixBQUEwQixXQUE5QixBQUF5QyxHQUFHLEFBQ3hDOzBDQUFBLEFBQU0sU0FBUyxhQUFmLEFBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWNVLDBCQUFjLHdCQUFkLEFBQWMsQUFBUyxBIiwiZmlsZSI6ImFib3V0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=