'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;
exports.withReduxSaga = withReduxSaga;

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _nextReduxSaga = require('next-redux-saga');

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _saga = require('./saga');

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();
// import { createLogger } from 'redux-logger'
function configureStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _reducer.initialState;

  // const middlewares = [thunkMiddleware, createLogger()]
  var store = (0, _redux.createStore)(_reducer2.default, state, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware)));

  store.sagaTask = sagaMiddleware.run(_saga2.default);
  return store;
}

function withReduxSaga(BaseComponent) {
  return (0, _nextReduxWrapper2.default)(configureStore)((0, _nextReduxSaga2.default)(BaseComponent));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJuZXh0UmVkdXhTYWdhIiwid2l0aFJlZHV4Iiwicm9vdFNhZ2EiLCJzYWdhTWlkZGxld2FyZSIsImNvbmZpZ3VyZVN0b3JlIiwic3RhdGUiLCJzdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwid2l0aFJlZHV4U2FnYSIsIkJhc2VDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBV08sQUFBUztRQWFULEFBQVM7O0FBeEJoQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFhLEFBQWlCOztBQUV2QyxBQUFROztBQUNSLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7OztBQUVQLElBQU0saUJBQU4sQUFBdUIsQUFFdkI7QUFUQTtBQVNPLDBCQUE4QztNQUFyQixBQUFxQix1RUFBYixBQUFhLEFBRW5EOztBQUNBO01BQU0sUUFBUSxBQUNaLDJDQURZLEFBRVosT0FDQSxpREFBb0IsNEJBSHRCLEFBQWMsQUFHWixBQUFvQixBQUFnQixBQUd0Qzs7UUFBQSxBQUFNLFdBQVcsZUFBakIsQUFBaUIsQUFBZSxBQUFJLEFBQ3BDO1NBQUEsQUFBTyxBQUNSO0FBRUQ7O0FBQU8sdUJBQUEsQUFBd0IsZUFBZSxBQUM1QztTQUFPLGdDQUFBLEFBQVUsZ0JBQWdCLDZCQUFqQyxBQUFPLEFBQTBCLEFBQWMsQUFDaEQiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==