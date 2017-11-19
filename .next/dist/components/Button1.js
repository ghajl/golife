'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Button1.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEJ1dHRvbjEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQbGF5QXJyb3ciLCJQYXVzZSIsIkNsZWFyIiwiU2tpcE5leHQiLCJQcm9wVHlwZXMiLCJ3aXRoU3R5bGVzIiwiSWNvbiIsIkljb25CdXR0b24iLCJUb2dnbGVJY29uIiwic3R5bGVzIiwiYnV0dG9uIiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiQnV0dG9uMSIsInByb3BzIiwiY2xhc3NlcyIsIm9uQ2xpY2siLCJidXR0b25UeXBlIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTs7O0FBR2Q7QUFDQTtBQUp3QixBQUNmLEFBTVI7QUFOUSxBQUNUOzs7QUFPQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNJO2FBakJFLEFBaUJLLEFBQ1A7Y0F6QlMsQUFBVSxBQU9qQixBQWtCTTs7QUFsQk4sQUFDTjtBQVJ1QixBQUN2QjtBQURGO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU0sVUFBVSxTQUFWLEFBQVUsUUFBQSxBQUFDLE9BQVUsQUFDekI7TUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBRXBCOzt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNBO0FBREE7QUFBQSxHQUFBLGtCQUNBLEFBQUM7ZUFDZSxRQURoQixBQUN3QixRQUFRLGNBRGhDLEFBQzJDLFFBQU8sU0FBVyxNQUQ3RCxBQUNtRTs7Z0JBRG5FO2tCQUFBLEFBR087QUFIUDtBQUNLLFdBRUUsQUFBTSxjQUFOLEFBQW9CLDBCQUNqQixBQUFDLHFDQUFVLFdBQVcsUUFBdEIsQUFBOEIsTUFBTSxPQUFTLE1BQTdDLEFBQW1EO2dCQUFuRDtrQkFKVixBQUlVLEFBRUg7QUFGRztHQUFBLFNBRUgsQUFBTSxjQUFOLEFBQW9CLDBCQUNqQixBQUFDLG9DQUFTLFdBQVcsUUFBckIsQUFBNkIsTUFBTSxPQUFTLE1BQTVDLEFBQWtEO2dCQUFsRDtrQkFQVixBQU9VLEFBRUg7QUFGRztHQUFBLFNBRUgsQUFBTSxjQUFOLEFBQW9CLDJCQUNqQixBQUFDLGlDQUFNLFdBQVcsUUFBbEIsQUFBMEIsTUFBTSxPQUFTLE1BQXpDLEFBQStDO2dCQUEvQztrQkFWVixBQVVVLEFBRUg7QUFGRztHQUFBLFNBRUgsQUFBTSxjQUFOLEFBQW9CLDJCQUNqQixBQUFDLGlDQUFNLFdBQVcsUUFBbEIsQUFBMEIsTUFBTSxPQUFTLE1BQXpDLEFBQStDO2dCQUEvQztrQkFmWixBQUNFLEFBQ0EsQUFhVSxBQU1mO0FBTmU7R0FBQTtBQWxCaEIsQUEyQkE7O2tCQUFlLHdCQUFBLEFBQVcsUUFBMUIsQUFBZSxBQUFtQjs7O0FBR2xDLFFBQUEsQUFBUTtXQUNHLG9CQUFBLEFBQVUsT0FERCxBQUNRLEFBQzFCO1dBQVMsb0JBQUEsQUFBVSxLQUZELEFBRU0sQUFDeEI7U0FBTyxvQkFBQSxBQUFVLE9BSG5CLEFBQW9CLEFBR007QUFITixBQUNsQiIsImZpbGUiOiJCdXR0b24xLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=