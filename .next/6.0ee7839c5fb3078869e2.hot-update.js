webpackHotUpdate(6,{

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(32);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(95);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\SpeedSlider.js';

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(387);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcSlider = __webpack_require__(727);

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _head = __webpack_require__(197);

var _head2 = _interopRequireDefault(_head);

var _Handle = __webpack_require__(769);

var _Handle2 = _interopRequireDefault(_Handle);

var _reactRedux = __webpack_require__(498);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
    width: 60,
    height: 40
};

var handle = function handle(_ref) {
    var fps = _ref.fps,
        Props = (0, _objectWithoutProperties3.default)(_ref, ['fps']);

    return _react2.default.createElement(_Handle2.default, (0, _extends3.default)({ value: fps, style: { borderColor: 'black' } }, Props, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }));
};

var SpeedSlider = function (_Component) {
    (0, _inherits3.default)(SpeedSlider, _Component);

    function SpeedSlider() {
        (0, _classCallCheck3.default)(this, SpeedSlider);
        return (0, _possibleConstructorReturn3.default)(this, (SpeedSlider.__proto__ || (0, _getPrototypeOf2.default)(SpeedSlider)).apply(this, arguments));
    }

    (0, _createClass3.default)(SpeedSlider, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.onChange(this.props.fps);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', { style: style, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_rcSlider2.default, {

                min: 2,
                max: 60,
                step: 2,
                value: this.props.fps,
                onChange: function onChange(v) {
                    return _this2.props.onChange(v);
                },
                handle: handle,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }));
        }
    }]);
    return SpeedSlider;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
    var fps = _ref2.fps;
    return { fps: fps };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SpeedSlider);

SpeedSlider.propTypes = {
    value: _propTypes2.default.number.isRequired,
    onChange: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNwZWVkU2xpZGVyLmpzIl0sIm5hbWVzIjpbInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJoYW5kbGUiLCJmcHMiLCJQcm9wcyIsImJvcmRlckNvbG9yIiwiU3BlZWRTbGlkZXIiLCJwcm9wcyIsIm9uQ2hhbmdlIiwidiIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb3BUeXBlcyIsInZhbHVlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFJQSxJQUFNO1dBQVEsQUFDSCxBQUNQO1lBRkosQUFBYyxBQUVGO0FBRkUsQUFDVjs7QUFPSixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQXVCO1FBQXBCLEFBQW9CLFdBQXBCLEFBQW9CO1FBQVosQUFBWSxzREFDbEM7O29GQUVZLE9BQVIsQUFBZSxLQUFLLE9BQU8sRUFBQyxhQUE1QixBQUEyQixBQUFjLGFBQXpDLEFBQXdEOztzQkFBeEQ7d0JBRkosQUFFSSxBQUdQO0FBSE87QUFBQSxNQUFBO0FBSFI7O0lBUU0sQTs7Ozs7Ozs7Ozs2Q0FFbUIsQUFDakI7aUJBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxLQUFBLEFBQUssTUFBekIsQUFBK0IsQUFDbEM7Ozs7aUNBRVE7eUJBQ0w7O21DQUNJLGNBQUEsU0FBSyxPQUFMLEFBQVk7OEJBQVo7Z0NBQUEsQUFFSTtBQUZKO2FBQUE7O3FCQUVJLEFBRU8sQUFDTDtxQkFIRixBQUdPLEFBQ0w7c0JBSkYsQUFJUSxBQUNOO3VCQUFPLEtBQUEsQUFBSyxNQUxkLEFBS29CLEFBQ2xCOzBCQUFVLGtCQUFBLEFBQUMsR0FBRDsyQkFBTyxPQUFBLEFBQUssTUFBTCxBQUFXLFNBQWxCLEFBQU8sQUFBb0I7QUFOdkMsQUFPRTt3QkFQRixBQU9VOzs4QkFQVjtnQ0FIUixBQUNJLEFBRUksQUFhWDtBQWJXO0FBRUU7Ozs7OztBQWNsQixJQUFNLGtCQUFpQixTQUFqQixBQUFpQix1QkFBQTtRQUFBLEFBQUUsWUFBRixBQUFFO1dBQVUsRUFBQyxLQUFiLEFBQVk7QUFBbkM7O2tCQUVnQix5QkFBQSxBQUFRLGlCQUFSLEEsQUFBeUI7O0FBRXpDLFlBQUEsQUFBWTtXQUNELG9CQUFBLEFBQVUsT0FERyxBQUNJLEFBQ3hCO2NBQVUsb0JBQUEsQUFBVSxLQUZ4QixBQUF3QixBQUVLO0FBRkwsQUFDcEIiLCJmaWxlIjoiU3BlZWRTbGlkZXIuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\folder\\new\\gol\\components\\SpeedSlider.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\folder\\new\\gol\\components\\SpeedSlider.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wZWU3ODM5YzVmYjMwNzg4NjllMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVlZFNsaWRlci5qcz9mYTgwMTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JjLXNsaWRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIYW5kbGUgZnJvbSAnLi9IYW5kbGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHsgICAgXHJcbiAgICB3aWR0aDogNjAsXHJcbiAgICBoZWlnaHQ6IDQwLFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgaGFuZGxlID0gKHsgZnBzLCAuLi5Qcm9wcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8SGFuZGxlIHZhbHVlPXtmcHN9IHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICdibGFjaycsfX0gey4uLlByb3BzfSAvPlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuY2xhc3MgU3BlZWRTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuZnBzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBtaW49ezJ9XHJcbiAgICAgICAgICAgICAgICAgIG1heD17NjB9XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZwc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKHYpfVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGU9e2hhbmRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0oe2Zwc30pID0+ICh7ZnBzfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNwZWVkU2xpZGVyKSk7XHJcblxyXG5TcGVlZFNsaWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TcGVlZFNsaWRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFHQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTtBQUhBO0FBQ0E7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBUEE7QUFhQTtBQWJBO0FBRUE7Ozs7OztBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==