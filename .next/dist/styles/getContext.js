'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

exports.default = getContext;

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcZ2V0Q29udGV4dC5qcyJdLCJuYW1lcyI6WyJnZXRDb250ZXh0IiwidGhlbWUiLCJwYWxldHRlIiwidHlwZSIsImpzcyIsIm9wdGlvbnMiLCJjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSIsImNyZWF0ZUNvbnRleHQiLCJzaGVldHNNYW5hZ2VyIiwic2hlZXRzUmVnaXN0cnkiLCJwcm9jZXNzIiwiYnJvd3NlciIsImdsb2JhbCIsIl9fSU5JVF9NQVRFUklBTF9VSV9fIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQWdDd0IsQTs7QUE3QnhCOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7OztBQVRBO0FBQ0E7O0FBVUEsSUFBTTs7VUFDSyxBQUNELFFBRlYsQUFBYyxBQUFlLEFBQ2xCLEFBQ1E7QUFEUixBQUNQO0FBRnlCLEFBQzNCLENBRFk7O0FBTWQ7O0FBVEE7QUFVQSxJQUFNLE1BQU0saUJBQU8sdUJBQW5CLEFBQVk7QUFDWixJQUFBLEFBQUksUUFBSixBQUFZOztBQUVaLFNBQUEsQUFBUyxnQkFBZ0IsQUFDdkI7O1NBQU8sQUFFTDtXQUZLLEFBR0w7QUFDQTttQkFBZSxVQUpWLEFBS0w7QUFDQTtvQkFBZ0IsU0FObEIsQUFBTyxBQVFSO0FBUlEsQUFDTDs7O0FBU1csU0FBQSxBQUFTLGFBQWEsQUFDbkM7QUFDQTtBQUNBO01BQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNwQjtXQUFBLEFBQU8sQUFDUjtBQUVEOztBQUNBO01BQUksQ0FBQyxPQUFMLEFBQVksc0JBQXNCLEFBQ2hDO1dBQUEsQUFBTyx1QkFBUCxBQUE4QixBQUMvQjtBQUVEOztTQUFPLE9BQVAsQUFBYyxBQUNmIiwiZmlsZSI6ImdldENvbnRleHQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==