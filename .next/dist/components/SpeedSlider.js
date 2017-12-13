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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\SpeedSlider.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Handle = require('./Handle');

var _Handle2 = _interopRequireDefault(_Handle);

var _reactRedux = require('react-redux');

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