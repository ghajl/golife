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

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Select.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360
    }

  };
};

var Select = function (_Component) {
  (0, _inherits3.default)(Select, _Component);

  function Select(props) {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

    _this.state = {
      anchorEl: undefined,
      open: false
      // selectedIndex: this.props.index,

    };
    _this.button = undefined;

    _this.handleClickListItem = function (event) {
      _this.setState({ open: true, anchorEl: event.currentTarget });
    };

    _this.handleMenuItemClick = function (event, index) {

      _this.setState({ open: false });
      _this.props.onChange(index);
    };

    _this.handleRequestClose = function () {
      _this.setState({ open: false });
    };

    _this.options = [];
    if (typeof props.items !== 'undefined') {
      for (var i = 0; i < props.items.length; i++) {
        _this.options.push(props.items[i]);
      }
    }

    return _this;
  }

  (0, _createClass3.default)(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      console.log("ccc");
      this.options.length = 0;
      if (typeof this.props.items !== 'undefined') {
        for (var i = 0; i < this.props.items.length; i++) {
          this.options.push(this.props.items[i]);
        }
      }
      return _react2.default.createElement('div', { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_List2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_List.ListItem, {
        button: true,
        onClick: this.handleClickListItem,

        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.props.index < 0 ? _react2.default.createElement(_List.ListItemText, {
        primary: this.props.label,
        secondary: '',

        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }) : _react2.default.createElement(_List.ListItemText, {
        primary: this.props.label,
        secondary: this.options[this.props.index],

        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }))), _react2.default.createElement(_Menu2.default, {
        id: 'lock-menu',
        anchorEl: this.state.anchorEl,
        open: this.state.open,
        onRequestClose: this.handleRequestClose,
        transitionDuration: 250,

        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, this.options.map(function (option, index) {
        return _react2.default.createElement(_Menu.MenuItem, {
          key: option,
          selected: index === _this2.props.index,
          onClick: function onClick(event) {
            return _this2.handleMenuItemClick(event, index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, option);
      })));
    }
  }]);
  return Select;
}(_react.Component);

Select.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  items: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  label: _propTypes2.default.string.isRequired,
  index: _propTypes2.default.number.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Select);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNlbGVjdC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290Iiwid2lkdGgiLCJtYXhXaWR0aCIsIlNlbGVjdCIsInByb3BzIiwic3RhdGUiLCJhbmNob3JFbCIsInVuZGVmaW5lZCIsIm9wZW4iLCJidXR0b24iLCJoYW5kbGVDbGlja0xpc3RJdGVtIiwic2V0U3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNZW51SXRlbUNsaWNrIiwiaW5kZXgiLCJvbkNoYW5nZSIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIm9wdGlvbnMiLCJpdGVtcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiY2xhc3NlcyIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsIm1hcCIsIm9wdGlvbiIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJzdHJpbmciLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7OzthQUNMLEFBQ0ssQUFDUDtnQkFITyxBQUFVLEFBQ2YsQUFFUTtBQUZSLEFBQ0Y7O0FBRmlCLEFBQ3JCO0FBREo7O0ksQUFXTTtrQ0FDSDs7a0JBQUEsQUFBWSxPQUFNO3dDQUFBOztzSUFBQSxBQUNUOztVQURTLEFBWWxCO2dCQUFRLEFBQ0csQUFDVjtZQUFNLEFBQ047QUFmaUIsQUFZVjs7QUFBQSxBQUNQO1VBYmlCLEFBbUJsQixTQW5Ca0IsQUFtQlQ7O1VBbkJTLEFBcUJsQixzQkFBc0IsaUJBQVMsQUFDOUI7WUFBQSxBQUFLLFNBQVMsRUFBRSxNQUFGLEFBQVEsTUFBTSxVQUFVLE1BQXRDLEFBQWMsQUFBOEIsQUFDNUM7QUF2QmlCOztVQUFBLEFBeUJsQixzQkFBc0IsVUFBQSxBQUFDLE9BQUQsQUFBUSxPQUFVLEFBRXZDOztZ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