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

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\SpeedSlider.js'; // import 'rc-slider/assets/index.css';
// import styleSheet from '../statics/rc-slider/index.css';
// import Tooltip from 'rc-tooltip';

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

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// import Slider from 'react-rangeslider'
// import Slider from 'react-bootstrap-slider';
// import ReactBootstrapSlider from 'react-bootstrap-slider';


var style = {
    width: 60,
    height: 40
    // marginTop: 20,
    // marginLeft: 20
};
var styleSmall = {
    // width: 52,
    // height: 32,
    // paddingTop: 40,
    // marginLeft: 20
};

var handle = function handle(props) {
    var value = props.value,
        dragging = props.dragging,
        index = props.index,
        restProps = (0, _objectWithoutProperties3.default)(props, ['value', 'dragging', 'index']);

    return _react2.default.createElement(_Handle2.default, (0, _extends3.default)({ value: value, style: { borderColor: 'black' } }, restProps, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
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
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.value !== this.props.value;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', { style: style, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_rcSlider2.default, {

                min: 2,
                max: 60,
                step: 2,
                value: this.props.value,
                handleStyle: { borderColor: 'black' },
                onChange: function onChange(v) {
                    return _this2.props.onChange(v);
                },
                handle: handle,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }));
        }
    }]);
    return SpeedSlider;
}(_react.Component);

exports.default = SpeedSlider;

SpeedSlider.propTypes = {
    value: _propTypes2.default.number.isRequired,
    onChange: _propTypes2.default.func.isRequired

    // return ( 
    // <div>
    // {this.props.size == 'small'? (
    //     <Slider style={styleSmall} min={2} max={60} step={2} handleStyle={{borderColor: 'black',}} value={this.props.value} handle={handle}  onChange={(e,v) => this.props.onChange(e,v)}/>
    // ) : (
    //     <Slider style={style} min={2} max={60} step={2} value={this.props.value} handle={handle} onChange={(v) => this.props.onChange(v)}/>
    // )}
    // </div>

    // );

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNwZWVkU2xpZGVyLmpzIl0sIm5hbWVzIjpbInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZVNtYWxsIiwiaGFuZGxlIiwicHJvcHMiLCJ2YWx1ZSIsImRyYWdnaW5nIiwiaW5kZXgiLCJyZXN0UHJvcHMiLCJib3JkZXJDb2xvciIsIlNwZWVkU2xpZGVyIiwibmV4dFByb3BzIiwidiIsIm9uQ2hhbmdlIiwicHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBQUE7QUFDQTtBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUlBLElBQU07V0FBUSxBQUNILEFBQ1A7WUFBUSxBQUNSO0FBQ0E7QUFKSixBQUFjO0FBQUEsQUFDVjtBQUtKLElBQU07QUFFRjtBQUNBO0FBQ0E7QUFKSixBQUFtQjtBQUFBLEFBQ2Y7O0FBU0osSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBVTtRQUFBLEFBQ2hCLFFBRGdCLEFBQ3lCLE1BRHpCLEFBQ2hCO1FBRGdCLEFBQ1QsV0FEUyxBQUN5QixNQUR6QixBQUNUO1FBRFMsQUFDQyxRQURELEFBQ3lCLE1BRHpCLEFBQ0M7UUFERCxBQUNXLG1EQURYLEFBQ3lCLDZCQUNqRDs7b0ZBRVksT0FBUixBQUFlLE9BQU8sT0FBTyxFQUFDLGFBQTlCLEFBQTZCLEFBQWMsYUFBM0MsQUFBMEQ7O3NCQUExRDt3QkFGSixBQUVJLEFBR0w7QUFISztBQUFBLE1BQUE7QUFKTjs7SUFVcUIsQTs7Ozs7Ozs7Ozs4Q0FHSyxBLFdBQVcsQUFDN0I7bUJBQU8sVUFBQSxBQUFVLFVBQVcsS0FBQSxBQUFLLE1BQWpDLEFBQXVDLEFBQzFDOzs7O2lDQUVRO3lCQUNMOzttQ0FDRSxjQUFBLFNBQUssT0FBTCxBQUFZOzhCQUFaO2dDQUFBLEFBRUU7QUFGRjthQUFBOztxQkFFRSxBQUVPLEFBQ0w7cUJBSEYsQUFHTyxBQUNMO3NCQUpGLEFBSVEsQUFDTjt1QkFBTyxLQUFBLEFBQUssTUFMZCxBQUtvQixBQUNqQjs2QkFBYSxFQUFDLGFBTmpCLEFBTWdCLEFBQWMsQUFDNUI7MEJBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFPLE9BQUEsQUFBSyxNQUFMLEFBQVcsU0FBbEIsQUFBTyxBQUFvQjtBQVB2QyxBQVFFO3dCQVJGLEFBUVU7OzhCQVJWO2dDQUhKLEFBQ0UsQUFFRSxBQWNQO0FBZE87QUFFRTs7Ozs7O2tCQWJPLEE7O0FBOEJyQixZQUFBLEFBQVk7V0FDRCxvQkFBQSxBQUFVLE9BREcsQUFDSSxBQUN4QjtjQUFVLG9CQUFBLEFBQVUsS0FBSyxBQUdyQjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWRSLEFBQXdCOztBQUFBLEFBQ3BCIiwiZmlsZSI6IlNwZWVkU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=