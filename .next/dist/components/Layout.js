'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Layout.js';

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

var _Game = require('../containers/Game');

var _Game2 = _interopRequireDefault(_Game);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

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

var _index = require('../static/rc-slider/index.css');

var _index2 = _interopRequireDefault(_index);

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
var styles = {
    // App: {
    //     display: 'flex',
    // flexDirection: 'column',
    //  minHeight: '100%',
    //  margin: 0,
    // },
    // Content: {

    //     flex: '1 0 auto',
    //     width: '100%',
    //     '&:after': {
    //             content: '""',
    //           display: 'block',
    //           // margin-top: var(--space);
    //           height: 0,
    //           visibility: 'hidden',
    //         }
    // },
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

        // const DynamicComponentWithNoSSR = dynamic(
        //   import('../containers/Game'),
        //   { ssr: false }
        // )


    } };
var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

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
            console.log(_this.main);
            console.log(_this.push);
            _this.setHeight(_this.footer);
            // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.ratio;
        };

        _this.state = {
            screen: {}
            // this.main = null;
            // this.push=null;
        };_this.setHeight = _this.setHeight.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.footer);
            window.addEventListener('resize', this.handleWindowSizeChange);
            this.setState({
                screen: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    ratio: window.devicePixelRatio || 1
                }
            });
            // this.setHeight(this.footer)
        }
    }, {
        key: 'setHeight',
        value: function setHeight(el) {
            if (!this.footer) this.footer = el;
            if (el && this.push && this.main) {
                console.log("das");

                var _el$getBoundingClient = el.getBoundingClientRect(),
                    topFooter = _el$getBoundingClient.top,
                    bottomFooter = _el$getBoundingClient.bottom;

                var _main$getBoundingClie = this.main.getBoundingClientRect(),
                    topMain = _main$getBoundingClie.top,
                    bottomMain = _main$getBoundingClie.bottom;

                var heightMain = bottomMain - topMain;
                var heightFooter = bottomFooter - topFooter;
                var height = this.state.screen.height - Math.floor(heightFooter) - Math.floor(heightMain);
                if (height < 0) {
                    this.push.style.height = 0;
                } else {
                    this.push.style.height = height + 'px';
                }
                // console.log(heightFooter)
                // console.log(bottomPush)

                // console.log(screen.height)
                // if (Math.floor(heightFooter) + Math.floor(heightPush) + Math.floor(topPush) <= screen.height){
                //  console.log("cc")
                //  push.style.height = screen.height - Math.floor(heightFooter) - Math.floor(topPush) + 'px';
                // } else {
                //  console.log("cc2")
                //  push.style.height = 0;
                // }
                // console.log(push.style.height)
                // console.log(screen.height)
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("ind");
            var HeaderSSR1 = function HeaderSSR1() {
                return _react2.default.createElement(_HeaderSSR2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 152
                    }
                });
            };
            // const HeaderSSR1 = () => ( 
            //        <div className={this.props.classes.navbar}>
            //         <HeaderSSR/>
            //     </div>);        
            return _react2.default.createElement('div', {
                className: 'jsx-4201896442' + ' ' + 'App',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }), _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement(HeaderSSR1, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 160
                    }
                }), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4201896442' + ' ' + 'Content',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4201896442' + ' ' + (this.props.classes.navbar || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, _react2.default.createElement(_Header2.default, { url: this.props.url, screen: this.state.screen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, this.props.children)), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }, _react2.default.createElement(_Footer2.default, { screen: this.state.screen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '4201896442',
                css: '.App{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.Content{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTG1DLEFBR3NDLEFBS0Msc0RBRUgsV0FDZixTQVAwQiw4RUFDVixZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWREYXRhfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9jb250YWluZXJzL0dhbWUnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCBIZWFkZXJTU1IgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXJTU1InXHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge3dpdGhSZWR1eFNhZ2F9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgeyBjb21wb3NlLCBzZXREaXNwbGF5TmFtZSwgcHVyZSwgbGlmZWN5Y2xlLCB3aXRoUHJvcHMgfSBmcm9tICdyZWNvbXBvc2UnXHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZSdcclxuaW1wb3J0IHdpdGhSb290IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aFJvb3QnO1xyXG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3RhdGljL3JjLXNsaWRlci9pbmRleC5jc3MnXHJcbi8vIGltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuLy8gY29uc3QgQ291bnRlciA9IGNvbXBvc2UoXHJcbi8vICAgICBzZXREaXNwbGF5TmFtZSgnSW5kZXhQYWdlJyksXHJcbi8vICAgICB3aXRoUHJvcHMoe1xyXG4vLyAgICAgICAgIHRpdGxlOiAnSW5kZXggcGFnZScsXHJcbi8vICAgICAgICAgLy8gbGlua1RvOiAnL290aGVyJ1xyXG4vLyAgICAgfSksXHJcbi8vICAgICAvLyBsaWZlY3ljbGUoe1xyXG4vLyAgICAgLy8gICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuLy8gICAgIC8vICAgICAgICAgdGhpcy50aW1lciA9IHRoaXMucHJvcHMuc3RhcnRDbG9jaygpXHJcbi8vICAgICAvLyAgICAgfSxcclxuLy8gICAgIC8vICAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbi8vICAgICAvLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcclxuLy8gICAgIC8vICAgICB9XHJcbi8vICAgICAvLyB9KSxcclxuLy8gICAgIHB1cmVcclxuLy8gKShHYW1lKVxyXG5cclxuLy8gQ291bnRlci5nZXRJbml0aWFsUHJvcHMgPSAoeyBzdG9yZSB9KSA9PiB7XHJcbi8vICAgICBzdG9yZS5kaXNwYXRjaChsb2FkRGF0YSgpKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUsIG51bGwsIG51bGwpKENvdW50ZXIpXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIC8vIEFwcDoge1xyXG4gICAgLy8gICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIC8vIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgLy8gIG1pbkhlaWdodDogJzEwMCUnLFxyXG4gICAgLy8gIG1hcmdpbjogMCxcclxuICAgIC8vIH0sXHJcbiAgICAvLyBDb250ZW50OiB7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgZmxleDogJzEgMCBhdXRvJyxcclxuICAgIC8vICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgLy8gICAgICcmOmFmdGVyJzoge1xyXG4gICAgLy8gICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgLy8gICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAvLyAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UpO1xyXG4gICAgLy8gICAgICAgICAgIGhlaWdodDogMCxcclxuICAgIC8vICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBib3hTaGFkb3c6IFswLCAzLCAxNSwgLTYsICcjMjIyJ10sXHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICd6LWluZGV4JzogMyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogMzAsXHJcbiAgICAgICAgJ3otaW5kZXgnOiAyLFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBEeW5hbWljQ29tcG9uZW50V2l0aE5vU1NSID0gZHluYW1pYyhcclxuLy8gICBpbXBvcnQoJy4uL2NvbnRhaW5lcnMvR2FtZScpLFxyXG4vLyAgIHsgc3NyOiBmYWxzZSB9XHJcbi8vIClcclxuXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNjcmVlbjoge30sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMubWFpbiA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5wdXNoPW51bGw7XHJcbiAgICAgICAgdGhpcy5zZXRIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb290ZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzY3JlZW4gOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnNldEhlaWdodCh0aGlzLmZvb3RlcilcclxuICAgIH1cclxuICAgIHNldEhlaWdodChlbCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmZvb3RlcikgdGhpcy5mb290ZXIgPSBlbDtcclxuICAgICAgICBpZihlbCAmJiB0aGlzLnB1c2ggJiYgdGhpcy5tYWluKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXNcIilcclxuICAgICAgICAgICAgICAgIGxldCB7dG9wOiB0b3BGb290ZXIsIGJvdHRvbTogYm90dG9tRm9vdGVyfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHt0b3A6IHRvcE1haW4sIGJvdHRvbTogYm90dG9tTWFpbn0gPSB0aGlzLm1haW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0TWFpbiA9IGJvdHRvbU1haW4gLSB0b3BNYWluO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodEZvb3RlciA9IGJvdHRvbUZvb3RlciAtIHRvcEZvb3RlcjtcclxuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnN0YXRlLnNjcmVlbi5oZWlnaHQgLSBNYXRoLmZsb29yKGhlaWdodEZvb3RlcikgLSBNYXRoLmZsb29yKGhlaWdodE1haW4pO1xyXG4gICAgICAgICAgICAgICAgaWYoaGVpZ2h0IDwgMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoLnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGVpZ2h0Rm9vdGVyKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYm90dG9tUHVzaClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NyZWVuLmhlaWdodClcclxuICAgICAgICAgICAgICAgIC8vIGlmIChNYXRoLmZsb29yKGhlaWdodEZvb3RlcikgKyBNYXRoLmZsb29yKGhlaWdodFB1c2gpICsgTWF0aC5mbG9vcih0b3BQdXNoKSA8PSBzY3JlZW4uaGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcImNjXCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgcHVzaC5zdHlsZS5oZWlnaHQgPSBzY3JlZW4uaGVpZ2h0IC0gTWF0aC5mbG9vcihoZWlnaHRGb290ZXIpIC0gTWF0aC5mbG9vcih0b3BQdXNoKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiY2MyXCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgcHVzaC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHVzaC5zdHlsZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzY3JlZW4uaGVpZ2h0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzY3JlZW4gOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY2FudmFzQm9hcmQud2lkdGg9KCh0aGlzLmdyaWRXaWR0aCArIDEpICogdGhpcy5zcXVhcmVTaXplKSAqIHRoaXMucmF0aW87XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy5ncmlkV2lkdGh9ICsgJHt0aGlzLnNxdWFyZVNpemV9ICogJHt0aGlzLnN0YXRlLnNjcmVlbi5yYXRpb31gKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFpbilcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnB1c2gpXHJcbiAgICAgICAgdGhpcy5zZXRIZWlnaHQodGhpcy5mb290ZXIpXHJcbiAgICAgICAgLy8gdGhpcy5jYW52YXNCb2FyZC5oZWlnaHQ9KCh0aGlzLmdyaWRIZWlnaHQgKyAxKSAqIHRoaXMuc3F1YXJlU2l6ZSkgKiB0aGlzLnJhdGlvO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZFwiKVxyXG4gICAgICAgIGNvbnN0IEhlYWRlclNTUjEgPSAoKSA9PiAoPEhlYWRlclNTUiAvPik7XHJcbiAgICAgICAgLy8gY29uc3QgSGVhZGVyU1NSMSA9ICgpID0+ICggXHJcbiAgICAgICAgLy8gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMubmF2YmFyfT5cclxuICAgICAgICAvLyAgICAgICAgIDxIZWFkZXJTU1IvPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj4pOyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Tm9TU1Igb25TU1I9ezxIZWFkZXJTU1IxIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSBzY3JlZW49e3RoaXMuc3RhdGUuc2NyZWVufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgc2NyZWVuPXt0aGlzLnN0YXRlLnNjcmVlbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L05vU1NSPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvOyAvKiAyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IHZhcigtLXNwYWNlKSB2YXIoLS1zcGFjZSkgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmplY3RTaGVldChzdHlsZXMpKExheW91dCkiXX0= */\n/*@ sourceURL=components\\Layout.js */'
            }));
        }
    }]);
    return Layout;
}(_react2.default.Component);

exports.default = (0, _reactJss2.default)(styles)(Layout);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJuYXZiYXIiLCJvdmVyZmxvdyIsImJveFNoYWRvdyIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluIiwibWFyZ2luVG9wIiwiTGF5b3V0IiwicHJvcHMiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwic2V0U3RhdGUiLCJzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInNldEhlaWdodCIsImZvb3RlciIsInN0YXRlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcEZvb3RlciIsImJvdHRvbUZvb3RlciIsImJvdHRvbSIsInRvcE1haW4iLCJib3R0b21NYWluIiwiaGVpZ2h0TWFpbiIsImhlaWdodEZvb3RlciIsIk1hdGgiLCJmbG9vciIsInN0eWxlIiwiSGVhZGVyU1NSMSIsIl9faHRtbCIsImNsYXNzZXMiLCJ1cmwiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNO0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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