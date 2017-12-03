'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Button1.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PlayArrow = require('material-ui-icons/PlayArrow');

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Pause = require('material-ui-icons/Pause');

var _Pause2 = _interopRequireDefault(_Pause);

var _Clear = require('material-ui-icons/Clear');

var _Clear2 = _interopRequireDefault(_Clear);

var _SkipNext = require('material-ui-icons/SkipNext');

var _SkipNext2 = _interopRequireDefault(_SkipNext);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Icon = require('material-ui/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _materialUiToggleIcon = require('material-ui-toggle-icon');

var _materialUiToggleIcon2 = _interopRequireDefault(_materialUiToggleIcon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var styles = function styles(theme) {
  return {
    button: {
      // border: '1px solid blue',
      // padding: 0,
      // margin: 0,
    },

    icon: {
      //   [theme.breakpoints.up('sm')]: {
      //       width: 25,
      //       height: 25,
      //   },
      //   [theme.breakpoints.up('md')]: {
      //       width: 35,
      //       height: 35,
      //   },
      //   [theme.breakpoints.up('lg')]: {
      //       width: 45,
      //       height: 45,
      //   },
      //       width: 40,
      //       height: 40,

      // }
      width: 25,
      height: 25

    }
  };
};
// const styles = {
//   smallIcon: {
//     width: 45,
//     height: 45,
//   },
//   small: {
//     width: 52,
//     height: 52,
//     padding: 1,
//     marginTop: 20,
//     marginBottom: 20
//   }
// };

var Button1 = function Button1(props) {
  var classes = props.classes;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement(_IconButton2.default, {
    className: classes.button, 'aria-label': 'Play', onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, props.buttonType == 'play' && _react2.default.createElement(_PlayArrow2.default, { className: classes.icon, color: props.color, __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), props.buttonType == 'step' && _react2.default.createElement(_SkipNext2.default, { className: classes.icon, color: props.color, __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), props.buttonType == 'pause' && _react2.default.createElement(_Pause2.default, { className: classes.icon, color: props.color, __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }), props.buttonType == 'clear' && _react2.default.createElement(_Clear2.default, { className: classes.icon, color: props.color, __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  })));
};

exports.default = (0, _styles.withStyles)(styles)(Button1);

Button1.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  color: _propTypes2.default.string.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEJ1dHRvbjEuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiYnV0dG9uIiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiQnV0dG9uMSIsInByb3BzIiwiY2xhc3NlcyIsIm9uQ2xpY2siLCJidXR0b25UeXBlIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7OztBQUdkO0FBQ0E7QUFKd0IsQUFDZixBQU1SO0FBTlEsQUFDVDs7O0FBT0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDSTthQWpCRSxBQWlCSyxBQUNQO2NBekJTLEFBQVUsQUFPakIsQUFrQk07O0FBbEJOLEFBQ047QUFSdUIsQUFDdkI7QUFERjtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxPQUFVLEFBQ3pCO01BQU0sVUFBVSxNQUFoQixBQUFzQixBQUVwQjs7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDQTtBQURBO0FBQUEsR0FBQSxrQkFDQSwyQkFBQTtlQUNnQixRQURoQixBQUN3QixRQUFRLGNBRGhDLEFBQzJDLFFBQU8sU0FBVyxNQUQ3RCxBQUNtRTs7Z0JBRG5FO2tCQUFBLEFBR087QUFIUDtBQUNLLFdBRUUsQUFBTSxjQUFOLEFBQW9CLCtEQUNOLFdBQVcsUUFBdEIsQUFBOEIsTUFBTSxPQUFTLE1BQTdDLEFBQW1EO2dCQUFuRDtrQkFKVixBQUlVLEFBRUg7QUFGRztHQUFBLFNBRUgsQUFBTSxjQUFOLEFBQW9CLDhEQUNQLFdBQVcsUUFBckIsQUFBNkIsTUFBTSxPQUFTLE1BQTVDLEFBQWtEO2dCQUFsRDtrQkFQVixBQU9VLEFBRUg7QUFGRztHQUFBLFNBRUgsQUFBTSxjQUFOLEFBQW9CLDREQUNWLFdBQVcsUUFBbEIsQUFBMEIsTUFBTSxPQUFTLE1BQXpDLEFBQStDO2dCQUEvQztrQkFWVixBQVVVLEFBRUg7QUFGRztHQUFBLFNBRUgsQUFBTSxjQUFOLEFBQW9CLDREQUNWLFdBQVcsUUFBbEIsQUFBMEIsTUFBTSxPQUFTLE1BQXpDLEFBQStDO2dCQUEvQztrQkFmWixBQUNFLEFBQ0EsQUFhVSxBQU1mO0FBTmU7R0FBQTtBQWxCaEI7O2tCQTJCZSx3QkFBQSxBQUFXLFFBQVgsQSxBQUFtQjs7QUFHbEMsUUFBQSxBQUFRO1dBQ0csb0JBQUEsQUFBVSxPQURELEFBQ1EsQUFDMUI7V0FBUyxvQkFBQSxBQUFVLEtBRkQsQUFFTSxBQUN4QjtTQUFPLG9CQUFBLEFBQVUsT0FIbkIsQUFBb0IsQUFHTTtBQUhOLEFBQ2xCIiwiZmlsZSI6IkJ1dHRvbjEuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==