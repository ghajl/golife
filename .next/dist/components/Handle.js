'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Handle.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var handle = {
  position: "absolute",
  transform: 'translate(-35%, -35%)',
  width: "15px",
  height: "15px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "solid 3px",
  borderColor: 'rgba(0, 0, 0, .7)',
  backgroundColor: "white"
};

var Handle = function (_Component) {
  (0, _inherits3.default)(Handle, _Component);

  function Handle() {
    (0, _classCallCheck3.default)(this, Handle);
    return (0, _possibleConstructorReturn3.default)(this, (Handle.__proto__ || (0, _getPrototypeOf2.default)(Handle)).apply(this, arguments));
  }

  (0, _createClass3.default)(Handle, [{
    key: 'render',
    value: function render() {
      var handleStyle = (0, _assign2.default)({ left: this.props.offset + '%' }, handle);

      return _react2.default.createElement('div', { style: handleStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      });
    }
  }]);
  return Handle;
}(_react.Component);

exports.default = Handle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhhbmRsZS5qcyJdLCJuYW1lcyI6WyJoYW5kbGUiLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsIndpZHRoIiwiaGVpZ2h0IiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIYW5kbGUiLCJoYW5kbGVTdHlsZSIsImxlZnQiLCJwcm9wcyIsIm9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFHQSxJQUFNO1lBQVMsQUFDSCxBQUNWO2FBRmEsQUFFRixBQUNYO1NBSGEsQUFHTixBQUNQO1VBSmEsQUFJTCxBQUNSO1VBTGEsQUFLTCxBQUNSO2dCQU5hLEFBTUMsQUFDZDtVQVBhLEFBT0wsQUFDUjtlQVJhLEFBUUEsQUFDYjttQkFURixBQUFlLEFBU0k7QUFUSixBQUNiOztJQWFtQixBOzs7Ozs7Ozs7OzZCQUNYLEFBQ047VUFBTSxjQUFjLHNCQUFjLEVBQUUsTUFBUyxLQUFBLEFBQUssTUFBZCxBQUFvQixTQUFwQyxBQUFjLE9BQWxDLEFBQW9CLEFBQWlELEFBRXJFOztvREFDTyxPQUFMLEFBQVk7b0JBQVo7c0JBREYsQUFDRSxBQUVIO0FBRkc7T0FBQTs7Ozs7O2tCQUxlLEEiLCJmaWxlIjoiSGFuZGxlLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=