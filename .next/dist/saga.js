'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

require('isomorphic-unfetch');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(loadDataSaga),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

/* global fetch */

_es6Promise2.default.polyfill();

function loadDataSaga() {
  var res, data;
  return _regenerator2.default.wrap(function loadDataSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://gist.githubusercontent.com/ghajl/d873bcb8d32128b32618c7468dc6ca43/raw/0b4862bb8e1245a263d0c36802c9c0864321f13d/patterns.json');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          _context.next = 9;
          return (0, _effects.put)((0, _actions.loadDataSuccess)(data));

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](0);
          _context.next = 15;
          return (0, _effects.put)((0, _actions.failure)(_context.t0));

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 11]]);
}

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_actions.actionTypes.LOAD_DATA, loadDataSaga);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

exports.default = rootSaga;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZ2EuanMiXSwibmFtZXMiOlsibG9hZERhdGFTYWdhIiwicm9vdFNhZ2EiLCJkZWxheSIsImFsbCIsImNhbGwiLCJwdXQiLCJ0YWtlIiwidGFrZUxhdGVzdCIsImVzNnByb21pc2UiLCJhY3Rpb25UeXBlcyIsImZhaWx1cmUiLCJsb2FkRGF0YVN1Y2Nlc3MiLCJwb2x5ZmlsbCIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJMT0FEX0RBVEEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxBQUFROztBQUNSLEFBQVEsQUFBSyxBQUFNLEFBQUssQUFBTTs7QUFDOUIsQUFBTzs7OztBQUNQOztBQUVBLEFBQVEsQUFBYSxBQUFTOzs7O3NEQUluQixBO3VELEFBWUE7O0FBdkJYOztBQVNBLHFCQUFBLEFBQVc7O0FBRVgsU0FBQSxBQUFXLGVBQVg7V0FBQTtxRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7MEJBQUE7aUJBRXNCLE1BRnRCLEFBRXNCLEFBQU07O2FBQWxCO0FBRlYseUJBQUE7MEJBQUE7aUJBR3VCLElBSHZCLEFBR3VCLEFBQUk7O2FBQWpCO0FBSFYsMEJBQUE7MEJBQUE7aUJBSVUsa0JBQUksOEJBSmQsQUFJVSxBQUFJLEFBQWdCOzthQUo5QjswQkFBQTtBQUFBOzthQUFBOzBCQUFBOzBDQUFBOzBCQUFBO2lCQU9VLGtCQUFJLCtCQVBkLEFBT1U7O2FBUFY7YUFBQTswQkFBQTs7QUFBQTt5QkFBQTs7O0FBWUEsU0FBQSxBQUFXLFdBQVg7a0VBQUE7Y0FBQTt5Q0FBQTthQUFBOzJCQUFBO2lCQUNRLHlCQUFXLHFCQUFYLEFBQXVCLFdBRC9CLEFBQ1EsQUFBa0M7O2FBRDFDO2FBQUE7MkJBQUE7O0FBQUE7ZUFBQTtBQUtBOztrQkFBQSxBQUFlIiwiZmlsZSI6InNhZ2EuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==