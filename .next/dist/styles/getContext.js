'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContext;

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _jss = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _styles = require('material-ui/styles');

var _purple = require('material-ui/colors/purple');

var _purple2 = _interopRequireDefault(_purple);

var _green = require('material-ui/colors/green');

var _green2 = _interopRequireDefault(_green);

var _createGenerateClassName = require('material-ui/styles/createGenerateClassName');

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak
/* eslint-disable no-underscore-dangle */

var theme = (0, _styles.createMuiTheme)({
  palette: {
    type: 'light' // Switching the dark mode on is a single property value change.
  }
});

// Configure JSS

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
var jss = (0, _jss.create)((0, _jssPresetDefault2.default)());
jss.options.createGenerateClassName = _createGenerateClassName2.default;

function createContext() {
  return {
    jss: jss,
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new _map2.default(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry()
  };
}

function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createContext();
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcZ2V0Q29udGV4dC5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJTaGVldHNSZWdpc3RyeSIsInByZXNldCIsImNyZWF0ZU11aVRoZW1lIiwicHVycGxlIiwiZ3JlZW4iLCJjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSIsInRoZW1lIiwicGFsZXR0ZSIsInR5cGUiLCJqc3MiLCJvcHRpb25zIiwiY3JlYXRlQ29udGV4dCIsInNoZWV0c01hbmFnZXIiLCJzaGVldHNSZWdpc3RyeSIsImdldENvbnRleHQiLCJwcm9jZXNzIiwiYnJvd3NlciIsImdsb2JhbCIsIl9fSU5JVF9NQVRFUklBTF9VSV9fIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLEFBQVMsQUFBUTs7QUFDakIsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7Ozs7QUFUUDtBQUNBOztBQVVBLElBQU07O1VBQ0ssQUFDRCxRQUZWLEFBQWMsQUFBZSxBQUNsQixBQUNRO0FBRFIsQUFDUDtBQUZ5QixBQUMzQixDQURZOztBQU1kOztBQVRBO0FBVUEsSUFBTSxNQUFNLGlCQUFaLEFBQVksQUFBTztBQUNuQixJQUFBLEFBQUksUUFBSixBQUFZLEFBQTBCOztBQUV0QyxTQUFBLEFBQVMsZ0JBQWdCLEFBQ3ZCOztTQUFPLEFBRUw7V0FGSyxBQUdMO0FBQ0E7bUJBSkssQUFJVSxBQUNmO0FBQ0E7b0JBTkYsQUFBTyxBQU1XLEFBQUksQUFFdkI7QUFSUSxBQUNMO0FBU0o7O0FBQWUsU0FBQSxBQUFTLGFBQWEsQUFDbkM7QUFDQTtBQUNBO01BQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNwQjtXQUFBLEFBQU8sQUFDUjtBQUVEOztBQUNBO01BQUksQ0FBQyxPQUFMLEFBQVksc0JBQXNCLEFBQ2hDO1dBQUEsQUFBTyx1QkFBUCxBQUE4QixBQUMvQjtBQUVEOztTQUFPLE9BQVAsQUFBYyxBQUNmIiwiZmlsZSI6ImdldENvbnRleHQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==