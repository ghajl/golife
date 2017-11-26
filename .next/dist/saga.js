'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.fetchPatterns = fetchPatterns;
exports.loadDataSaga = loadDataSaga;
exports.rootSaga = rootSaga;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actions = require('./actions');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var _marked = /*#__PURE__*/_regenerator2.default.mark(loadDataSaga),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(rootSaga); /* global fetch */

// import es6promise from 'es6-promise';
// import 'isomorphic-unfetch';


// es6promise.polyfill();

function fetchPatterns() {
	return (0, _isomorphicFetch2.default)('https://gist.githubusercontent.com/ghajl/d873bcb8d32128b32618c7468dc6ca43/raw/0b4862bb8e1245a263d0c36802c9c0864321f13d/patterns.json').then(function (res) {
		return res.json();
	});
}

function loadDataSaga() {
	var data;
	return _regenerator2.default.wrap(function loadDataSaga$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.prev = 0;
					_context.next = 3;
					return (0, _effects.call)(fetchPatterns);

				case 3:
					data = _context.sent;
					_context.next = 6;
					return (0, _effects.put)((0, _actions.loadDataSuccess)(data));

				case 6:
					_context.next = 12;
					break;

				case 8:
					_context.prev = 8;
					_context.t0 = _context['catch'](0);
					_context.next = 12;
					return (0, _effects.put)((0, _actions.failure)(_context.t0));

				case 12:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[0, 8]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZ2EuanMiXSwibmFtZXMiOlsiZmV0Y2hQYXR0ZXJucyIsImxvYWREYXRhU2FnYSIsInJvb3RTYWdhIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiTE9BRF9EQVRBIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBV2dCLEEsZ0JBQUEsQTtRLEFBS0UsZSxBQUFBO1FBY0EsQSxXQUFBLEE7O0FBNUJsQjs7QUFDQTs7QUFHQTs7OztBQUNBOzs7Ozs7c0RBU2tCLEE7dURBY0EsQSxXQTlCbEI7O0FBSUE7QUFDQTs7O0FBSUE7O0FBRU8sU0FBQSxBQUFTLGdCQUFnQixBQUMvQjt1Q0FBTyxBQUFNLHdJQUFOLEFBQ04sS0FBSyxlQUFBO1NBQU8sSUFBUCxBQUFPLEFBQUk7QUFEakIsQUFBTyxBQUVQLEVBRk87OztBQUlELFNBQUEsQUFBVyxlQUFYO0tBQUE7b0VBQUE7WUFBQTtvQ0FBQTtTQUFBO3FCQUFBO3FCQUFBO1lBRWtCLG1CQUZsQixBQUVrQixBQUFLOztTQUFsQjtBQUZMLHFCQUFBO3FCQUFBO1lBTUssa0JBQUksOEJBTlQsQUFNSyxBQUFJLEFBQWdCOztTQU56QjtxQkFBQTtBQUFBOztTQUFBO3FCQUFBO3FDQUFBO3FCQUFBO1lBU1Esa0JBQUksK0JBVFosQUFTUTs7U0FUUjtTQUFBO3FCQUFBOztBQUFBO3dCQUFBOzs7QUFjQSxTQUFBLEFBQVcsV0FBWDtpRUFBQTtZQUFBO3NDQUFBO1NBQUE7c0JBQUE7WUFDRyx5QkFBVyxxQkFBWCxBQUF1QixXQUQxQixBQUNHLEFBQWtDOztTQURyQztTQUFBO3NCQUFBOztBQUFBO2NBQUEiLCJmaWxlIjoic2FnYS5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9