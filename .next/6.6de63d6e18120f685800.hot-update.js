webpackHotUpdate(6,{

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(91);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.fetchPatterns = fetchPatterns;
exports.loadDataSaga = loadDataSaga;
exports.rootSaga = rootSaga;

var _reduxSaga = __webpack_require__(505);

var _effects = __webpack_require__(542);

var _isomorphicFetch = __webpack_require__(815);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actions = __webpack_require__(494);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\folder\\new\\gol\\saga.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\folder\\new\\gol\\saga.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi42ZGU2M2Q2ZTE4MTIwZjY4NTgwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2FnYS5qcz81YWI0ZDI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBmZXRjaCAqL1xyXG5cclxuaW1wb3J0IHtkZWxheX0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7YWxsLCBjYWxsLCBwdXQsIHRha2UsIHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbi8vIGltcG9ydCBlczZwcm9taXNlIGZyb20gJ2VzNi1wcm9taXNlJztcclxuLy8gaW1wb3J0ICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IHthY3Rpb25UeXBlcywgZmFpbHVyZSwgbG9hZERhdGFTdWNjZXNzfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuLy8gZXM2cHJvbWlzZS5wb2x5ZmlsbCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGF0dGVybnMoKSB7XHJcblx0cmV0dXJuIGZldGNoKCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2doYWpsL2Q4NzNiY2I4ZDMyMTI4YjMyNjE4Yzc0NjhkYzZjYTQzL3Jhdy8wYjQ4NjJiYjhlMTI0NWEyNjNkMGMzNjgwMmM5YzA4NjQzMjFmMTNkL3BhdHRlcm5zLmpzb24nKVxyXG5cdC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufSBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAqIGxvYWREYXRhU2FnYSAoKSB7XHJcblx0ICAgIHRyeSB7XHJcblx0XHQgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoZmV0Y2hQYXR0ZXJucyk7Ly9mZXRjaCgnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9naGFqbC9kODczYmNiOGQzMjEyOGIzMjYxOGM3NDY4ZGM2Y2E0My9yYXcvMGI0ODYyYmI4ZTEyNDVhMjYzZDBjMzY4MDJjOWMwODY0MzIxZjEzZC9wYXR0ZXJucy5qc29uJykudGhlbihyZXMgPT4gcmUuanNvbigpKTtcclxuXHRcdCAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdCAgICAvLyBjb25zdCBkYXRhID0geWllbGQgcmVzLmpzb24oKTtcclxuXHRcdCAgICBcclxuXHRcdCAgICB5aWVsZCBwdXQobG9hZERhdGFTdWNjZXNzKGRhdGEpKTtcclxuXHQgICAgfSBjYXRjaCAoZXJyKSB7XHJcblx0ICAgIFxyXG5cdCAgICAgICAgeWllbGQgcHV0KGZhaWx1cmUoZXJyKSk7XHJcblx0ICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAqIHJvb3RTYWdhICgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuTE9BRF9EQVRBLCBsb2FkRGF0YVNhZ2EpO1xyXG4gXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NhZ2EuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFSQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBTUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBVkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7OztBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==