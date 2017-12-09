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
            // console.log(this.main)
            // console.log(this.push)
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
            // console.log(this.footer);
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
            // console.log("ind")
            //         let glider = convert(text);
            // console.log(glider)
            var HeaderSSR1 = function HeaderSSR1() {
                return _react2.default.createElement(_HeaderSSR2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 155
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
                    lineNumber: 161
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }), _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement(HeaderSSR1, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 163
                    }
                }), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4201896442' + ' ' + 'Content',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4201896442' + ' ' + (this.props.classes.navbar || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, _react2.default.createElement(_Header2.default, { url: this.props.url, screen: this.state.screen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            }, this.props.children)), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, _react2.default.createElement(_Footer2.default, { screen: this.state.screen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '4201896442',
                css: '.App{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.Content{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTG1DLEFBR3NDLEFBS0Msc0RBRUgsV0FDZixTQVAwQiw4RUFDVixZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWREYXRhfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9jb250YWluZXJzL0dhbWUnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCBIZWFkZXJTU1IgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXJTU1InXHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge3dpdGhSZWR1eFNhZ2F9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgeyBjb21wb3NlLCBzZXREaXNwbGF5TmFtZSwgcHVyZSwgbGlmZWN5Y2xlLCB3aXRoUHJvcHMgfSBmcm9tICdyZWNvbXBvc2UnXHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZSdcclxuaW1wb3J0IHdpdGhSb290IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aFJvb3QnO1xyXG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3RhdGljL3JjLXNsaWRlci9pbmRleC5jc3MnXHJcbi8vIGltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuLy8gY29uc3QgQ291bnRlciA9IGNvbXBvc2UoXHJcbi8vICAgICBzZXREaXNwbGF5TmFtZSgnSW5kZXhQYWdlJyksXHJcbi8vICAgICB3aXRoUHJvcHMoe1xyXG4vLyAgICAgICAgIHRpdGxlOiAnSW5kZXggcGFnZScsXHJcbi8vICAgICAgICAgLy8gbGlua1RvOiAnL290aGVyJ1xyXG4vLyAgICAgfSksXHJcbi8vICAgICAvLyBsaWZlY3ljbGUoe1xyXG4vLyAgICAgLy8gICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuLy8gICAgIC8vICAgICAgICAgdGhpcy50aW1lciA9IHRoaXMucHJvcHMuc3RhcnRDbG9jaygpXHJcbi8vICAgICAvLyAgICAgfSxcclxuLy8gICAgIC8vICAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbi8vICAgICAvLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcclxuLy8gICAgIC8vICAgICB9XHJcbi8vICAgICAvLyB9KSxcclxuLy8gICAgIHB1cmVcclxuLy8gKShHYW1lKVxyXG5cclxuLy8gQ291bnRlci5nZXRJbml0aWFsUHJvcHMgPSAoeyBzdG9yZSB9KSA9PiB7XHJcbi8vICAgICBzdG9yZS5kaXNwYXRjaChsb2FkRGF0YSgpKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUsIG51bGwsIG51bGwpKENvdW50ZXIpXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIC8vIEFwcDoge1xyXG4gICAgLy8gICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIC8vIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgLy8gIG1pbkhlaWdodDogJzEwMCUnLFxyXG4gICAgLy8gIG1hcmdpbjogMCxcclxuICAgIC8vIH0sXHJcbiAgICAvLyBDb250ZW50OiB7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgZmxleDogJzEgMCBhdXRvJyxcclxuICAgIC8vICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgLy8gICAgICcmOmFmdGVyJzoge1xyXG4gICAgLy8gICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgLy8gICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAvLyAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UpO1xyXG4gICAgLy8gICAgICAgICAgIGhlaWdodDogMCxcclxuICAgIC8vICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBib3hTaGFkb3c6IFswLCAzLCAxNSwgLTYsICcjMjIyJ10sXHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICd6LWluZGV4JzogMyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogMzAsXHJcbiAgICAgICAgJ3otaW5kZXgnOiAyLFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBEeW5hbWljQ29tcG9uZW50V2l0aE5vU1NSID0gZHluYW1pYyhcclxuLy8gICBpbXBvcnQoJy4uL2NvbnRhaW5lcnMvR2FtZScpLFxyXG4vLyAgIHsgc3NyOiBmYWxzZSB9XHJcbi8vIClcclxuXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNjcmVlbjoge30sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMubWFpbiA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5wdXNoPW51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9vdGVyKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2NyZWVuIDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRIZWlnaHQodGhpcy5mb290ZXIpXHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoZWwpIHtcclxuICAgICAgICBpZighdGhpcy5mb290ZXIpIHRoaXMuZm9vdGVyID0gZWw7XHJcbiAgICAgICAgaWYoZWwgJiYgdGhpcy5wdXNoICYmIHRoaXMubWFpbil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGFzXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQge3RvcDogdG9wRm9vdGVyLCBib3R0b206IGJvdHRvbUZvb3Rlcn0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCB7dG9wOiB0b3BNYWluLCBib3R0b206IGJvdHRvbU1haW59ID0gdGhpcy5tYWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodE1haW4gPSBib3R0b21NYWluIC0gdG9wTWFpbjtcclxuICAgICAgICAgICAgICAgIGxldCBoZWlnaHRGb290ZXIgPSBib3R0b21Gb290ZXIgLSB0b3BGb290ZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5zdGF0ZS5zY3JlZW4uaGVpZ2h0IC0gTWF0aC5mbG9vcihoZWlnaHRGb290ZXIpIC0gTWF0aC5mbG9vcihoZWlnaHRNYWluKTtcclxuICAgICAgICAgICAgICAgIGlmKGhlaWdodCA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2guc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhlaWdodEZvb3RlcilcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJvdHRvbVB1c2gpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjcmVlbi5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoTWF0aC5mbG9vcihoZWlnaHRGb290ZXIpICsgTWF0aC5mbG9vcihoZWlnaHRQdXNoKSArIE1hdGguZmxvb3IodG9wUHVzaCkgPD0gc2NyZWVuLmhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJjY1wiKVxyXG4gICAgICAgICAgICAgICAgLy8gIHB1c2guc3R5bGUuaGVpZ2h0ID0gc2NyZWVuLmhlaWdodCAtIE1hdGguZmxvb3IoaGVpZ2h0Rm9vdGVyKSAtIE1hdGguZmxvb3IodG9wUHVzaCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcImNjMlwiKVxyXG4gICAgICAgICAgICAgICAgLy8gIHB1c2guc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHB1c2guc3R5bGUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NyZWVuLmhlaWdodClcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2NyZWVuIDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNhbnZhc0JvYXJkLndpZHRoPSgodGhpcy5ncmlkV2lkdGggKyAxKSAqIHRoaXMuc3F1YXJlU2l6ZSkgKiB0aGlzLnJhdGlvO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMuZ3JpZFdpZHRofSArICR7dGhpcy5zcXVhcmVTaXplfSAqICR7dGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW99YClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1haW4pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wdXNoKVxyXG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMuZm9vdGVyKVxyXG4gICAgICAgIC8vIHRoaXMuY2FudmFzQm9hcmQuaGVpZ2h0PSgodGhpcy5ncmlkSGVpZ2h0ICsgMSkgKiB0aGlzLnNxdWFyZVNpemUpICogdGhpcy5yYXRpbztcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbmRcIilcclxuICAgICAgICAvLyAgICAgICAgIGxldCBnbGlkZXIgPSBjb252ZXJ0KHRleHQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdsaWRlcilcclxuICAgICAgICBjb25zdCBIZWFkZXJTU1IxID0gKCkgPT4gKDxIZWFkZXJTU1IgLz4pO1xyXG4gICAgICAgIC8vIGNvbnN0IEhlYWRlclNTUjEgPSAoKSA9PiAoIFxyXG4gICAgICAgIC8vICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLm5hdmJhcn0+XHJcbiAgICAgICAgLy8gICAgICAgICA8SGVhZGVyU1NSLz5cclxuICAgICAgICAvLyAgICAgPC9kaXY+KTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5vU1NSIG9uU1NSPXs8SGVhZGVyU1NSMSAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMubmF2YmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdXJsPXt0aGlzLnByb3BzLnVybH0gc2NyZWVuPXt0aGlzLnN0YXRlLnNjcmVlbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHNjcmVlbj17dGhpcy5zdGF0ZS5zY3JlZW59Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Ob1NTUj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bzsgLyogMiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiB2YXIoLS1zcGFjZSkgdmFyKC0tc3BhY2UpIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0U2hlZXQoc3R5bGVzKShMYXlvdXQpXHJcblxyXG5cclxuIl19 */\n/*@ sourceURL=components\\Layout.js */'
            }));
        }
    }]);
    return Layout;
}(_react2.default.Component);

exports.default = (0, _reactJss2.default)(styles)(Layout);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJuYXZiYXIiLCJvdmVyZmxvdyIsImJveFNoYWRvdyIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluIiwibWFyZ2luVG9wIiwiTGF5b3V0IiwicHJvcHMiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwic2V0U3RhdGUiLCJzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRIZWlnaHQiLCJmb290ZXIiLCJzdGF0ZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcEZvb3RlciIsImJvdHRvbUZvb3RlciIsImJvdHRvbSIsInRvcE1haW4iLCJib3R0b21NYWluIiwiaGVpZ2h0TWFpbiIsImhlaWdodEZvb3RlciIsIk1hdGgiLCJmbG9vciIsInN0eWxlIiwiSGVhZGVyU1NSMSIsIl9faHRtbCIsImNsYXNzZXMiLCJ1cmwiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNO0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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