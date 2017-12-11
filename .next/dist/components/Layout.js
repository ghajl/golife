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

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _HeaderSSR = require('../components/HeaderSSR');

var _HeaderSSR2 = _interopRequireDefault(_HeaderSSR);

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
            _this.setHeight(_this.footer);
        };

        _this.state = {
            screen: {}
        };

        _this.setHeight = _this.setHeight.bind(_this);
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
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-4201896442' + ' ' + 'App',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }), _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement(_HeaderSSR2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                    }
                }), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4201896442' + ' ' + 'Content',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-4201896442' + ' ' + (this.props.classes.navbar || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_Header2.default, { url: this.props.url, screen: this.state.screen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, this.props.children)), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-4201896442',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement(_Footer2.default, { screen: this.state.screen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '4201896442',
                css: '.App{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.Content{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR21DLEFBR3NDLEFBS0Msc0RBRUgsV0FDZixTQVAwQiw4RUFDVixZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWREYXRhfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9jb250YWluZXJzL0dhbWUnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InXHJcbmltcG9ydCBIZWFkZXJTU1IgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXJTU1InXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge3dpdGhSZWR1eFNhZ2F9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgeyBjb21wb3NlLCBzZXREaXNwbGF5TmFtZSwgcHVyZSwgbGlmZWN5Y2xlLCB3aXRoUHJvcHMgfSBmcm9tICdyZWNvbXBvc2UnXHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZSdcclxuaW1wb3J0IHdpdGhSb290IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aFJvb3QnO1xyXG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3RhdGljL3JjLXNsaWRlci9pbmRleC5jc3MnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZiYXI6IHtcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgYm94U2hhZG93OiBbMCwgMywgMTUsIC02LCAnIzIyMiddLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAnei1pbmRleCc6IDMsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIG1haW46IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IDMwLFxyXG4gICAgICAgICd6LWluZGV4JzogMixcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2NyZWVuOiB7fSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9vdGVyKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2NyZWVuIDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRIZWlnaHQodGhpcy5mb290ZXIpXHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoZWwpIHtcclxuICAgICAgICBpZighdGhpcy5mb290ZXIpIHRoaXMuZm9vdGVyID0gZWw7XHJcbiAgICAgICAgaWYoZWwgJiYgdGhpcy5wdXNoICYmIHRoaXMubWFpbil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGFzXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQge3RvcDogdG9wRm9vdGVyLCBib3R0b206IGJvdHRvbUZvb3Rlcn0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCB7dG9wOiB0b3BNYWluLCBib3R0b206IGJvdHRvbU1haW59ID0gdGhpcy5tYWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodE1haW4gPSBib3R0b21NYWluIC0gdG9wTWFpbjtcclxuICAgICAgICAgICAgICAgIGxldCBoZWlnaHRGb290ZXIgPSBib3R0b21Gb290ZXIgLSB0b3BGb290ZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5zdGF0ZS5zY3JlZW4uaGVpZ2h0IC0gTWF0aC5mbG9vcihoZWlnaHRGb290ZXIpIC0gTWF0aC5mbG9vcihoZWlnaHRNYWluKTtcclxuICAgICAgICAgICAgICAgIGlmKGhlaWdodCA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2guc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2NyZWVuIDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRIZWlnaHQodGhpcy5mb290ZXIpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5vU1NSIG9uU1NSPXs8SGVhZGVyU1NSIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSBzY3JlZW49e3RoaXMuc3RhdGUuc2NyZWVufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgc2NyZWVuPXt0aGlzLnN0YXRlLnNjcmVlbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L05vU1NSPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvOyAvKiAyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IHZhcigtLXNwYWNlKSB2YXIoLS1zcGFjZSkgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmplY3RTaGVldChzdHlsZXMpKExheW91dClcclxuXHJcblxyXG4iXX0= */\n/*@ sourceURL=components\\Layout.js */'
            }));
        }
    }]);
    return Layout;
}(_react2.default.Component);

exports.default = (0, _reactJss2.default)(styles)(Layout);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJuYXZiYXIiLCJvdmVyZmxvdyIsImJveFNoYWRvdyIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluIiwibWFyZ2luVG9wIiwiTGF5b3V0IiwicHJvcHMiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwic2V0U3RhdGUiLCJzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRIZWlnaHQiLCJmb290ZXIiLCJzdGF0ZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcEZvb3RlciIsImJvdHRvbUZvb3RlciIsImJvdHRvbSIsInRvcE1haW4iLCJib3R0b21NYWluIiwiaGVpZ2h0TWFpbiIsImhlaWdodEZvb3RlciIsIk1hdGgiLCJmbG9vciIsInN0eWxlIiwiX19odG1sIiwiY2xhc3NlcyIsInVybCIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNOztrQkFDTSxBQUNNLEFBQ1Y7bUJBQVcsQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFKLEFBQU8sSUFBSSxDQUFYLEFBQVksR0FGbkIsQUFFTyxBQUFlLEFBQzFCO2tCQUhJLEFBR00sQUFDVjthQUpJLEFBSUMsQUFDTDtlQUxJLEFBS0csQUFDTjttQkFORyxBQU1RLEFBQ1o7eUJBUk8sQUFDSCxBQU9ZLEFBRXBCO0FBVFEsQUFDSjs7bUJBUUUsQUFDUyxBQUNYO21CQVpSLEFBQWUsQUFVTCxBQUVTO0FBRlQsQUFDRjtBQVhPLEFBQ1g7O0ksQUFnQkU7b0NBRUY7O29CQUFBLEFBQVksT0FBTTs0Q0FBQTs7MElBQUEsQUFDUjs7Y0FEUSxBQXdDbEIseUJBQXlCLFlBQU0sQUFDM0I7a0JBQUEsQUFBSzs7MkJBRVUsT0FERixBQUNTLEFBQ2Q7NEJBQVEsT0FGSCxBQUVVLEFBQ2Y7MkJBQU8sT0FBQSxBQUFPLG9CQUp0QixBQUFjLEFBQ0QsQUFHNkIsQUFHMUM7QUFOYSxBQUNMO0FBRk0sQUFDVjtrQkFNSixBQUFLLFVBQVUsTUFBZixBQUFvQixBQUN2QjtBQWpEaUIsQUFFZDs7Y0FBQSxBQUFLO29CQUFMLEFBQVcsQUFDQyxBQUdaO0FBSlcsQUFDUDs7Y0FHSixBQUFLLFlBQVksTUFBQSxBQUFLLFVBQUwsQUFBZSxLQU5sQixBQU1kO2VBQ0g7Ozs7OzRDQUtrQixBQUNmO0FBQ0E7bUJBQUEsQUFBTyxpQkFBUCxBQUF3QixVQUFVLEtBQWxDLEFBQXVDLEFBQ3ZDO2lCQUFBLEFBQUs7OzJCQUVVLE9BREYsQUFDUyxBQUNkOzRCQUFRLE9BRkgsQUFFVSxBQUNmOzJCQUFPLE9BQUEsQUFBTyxvQkFKdEIsQUFBYyxBQUNELEFBRzZCLEFBRzFDO0FBTmEsQUFDTDtBQUZNLEFBQ1Y7QUFPUDs7OztrQ0FDUyxBLElBQUksQUFDVjtnQkFBRyxDQUFDLEtBQUosQUFBUyxRQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsQUFDL0I7Z0JBQUcsTUFBTSxLQUFOLEFBQVcsUUFBUSxLQUF0QixBQUEyQixNQUFLLEFBQzVCO3dCQUFBLEFBQVEsSUFEb0IsQUFDNUIsQUFBWTs7NENBQ3FDLEdBRnJCLEFBRXFCLEFBQUc7b0JBRnhCLEFBRWQsa0NBRmMsQUFFbkI7b0JBRm1CLEFBRUsscUNBRkwsQUFFSDs7NENBQ29CLEtBQUEsQUFBSyxLQUh0QixBQUdpQixBQUFVO29CQUgzQixBQUdkLGdDQUhjLEFBR25CO29CQUhtQixBQUdHLG1DQUhILEFBR0wsQUFDbkI7O29CQUFJLGFBQWEsYUFBakIsQUFBOEIsQUFDOUI7b0JBQUksZUFBZSxlQUFuQixBQUFrQyxBQUNsQztvQkFBSSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQUFTLEtBQUEsQUFBSyxNQUFoQyxBQUEyQixBQUFXLGdCQUFnQixLQUFBLEFBQUssTUFBeEUsQUFBbUUsQUFBVyxBQUM5RTtvQkFBRyxTQUFILEFBQVksR0FBRSxBQUNWO3lCQUFBLEFBQUssS0FBTCxBQUFVLE1BQVYsQUFBZ0IsU0FBaEIsQUFBeUIsQUFDNUI7QUFGRCx1QkFFTyxBQUNIO3lCQUFBLEFBQUssS0FBTCxBQUFVLE1BQVYsQUFBZ0IsU0FBUyxTQUF6QixBQUFrQyxBQUNyQztBQUNKO0FBQ1I7Ozs7aUNBYVMsQUFDTjttQ0FDSSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsMkNBQ1cseUJBQXlCLEVBQUUsZ0JBQWxDLEFBQWdDOzhCQUFoQztnQ0FESixBQUNJLEFBQ0k7QUFESjtnQ0FDSSwyQkFBQSxXQUFPOztrQ0FBTztvQ0FBZCxBQUFjO0FBQUE7QUFBQSxpQkFBQTs4QkFBZDtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUdJO0FBSEo7QUFBQSwrQkFHSSxjQUFBO3FEQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLFFBQTNCLEFBQW1DLFVBQW5DOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxpRUFDWSxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLFFBQVEsS0FBQSxBQUFLLE1BQTFDLEFBQWdEOzhCQUFoRDtnQ0FKUixBQUdJLEFBQ0ksQUFHUjtBQUhRO2lDQUdSLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLEFBQUssTUFUTixBQUNBLEFBT0EsQUFDWSxBQUloQjsyQkFBQTs7OEJBQUE7Z0NBYkksQUFhSixBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSxpRUFDUSxRQUFRLEtBQUEsQUFBSyxNQUFyQixBQUEyQjs4QkFBM0I7Z0NBakJKLEFBRVEsQUFjSixBQUNBO0FBQUE7O3lCQWpCSjtxQkFESixBQUNJLEFBa0NQO0FBbENPOzs7O0VBeERTLGdCQUFNLEE7O2tCQTZGWix3QkFBQSxBQUFZLFFBQVosQUFBb0IsQSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==