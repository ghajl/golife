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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var sagaMiddleware = (0, _reduxSaga2.default)();
// import { createLogger } from 'redux-logger'
function configureStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _reducer.initialState;

  // const middlewares = [thunkMiddleware, createLogger()]
  var store = (0, _redux.createStore)(_reducer2.default, state, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware)));

  store.sagaTask = sagaMiddleware.run(_saga.rootSaga);
  return store;
}

function withReduxSaga(BaseComponent) {
  return (0, _nextReduxWrapper2.default)(configureStore)((0, _nextReduxSaga2.default)(BaseComponent));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwid2l0aFJlZHV4U2FnYSIsInNhZ2FNaWRkbGV3YXJlIiwic3RhdGUiLCJzdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiQmFzZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXZ0IsQSxpQkFBQSxBO1FBYUEsQSxnQkFBQSxBOztBQXhCaEI7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsZ0JBQXZCO0FBUEE7QUFTTyxTQUFTLEFBQVQsaUJBQThDO01BQXJCLEFBQXFCLHFGQUVuRDs7QUFDQTtNQUFNLFFBQVEsMkNBRVosQUFGWSxPQUdaLGlEQUFvQiw0QkFBZ0IsQUFBaEIsQUFBcEIsQUFIWSxBQUFkLEFBTUE7O1FBQU0sQUFBTixXQUFpQixlQUFlLEFBQWYsVUFBakIsQUFDQTtTQUFPLEFBQVAsQUFDRDs7O0FBRU0sU0FBUyxBQUFULGNBQXdCLEFBQXhCLGVBQXVDLEFBQzVDO1NBQU8sZ0NBQVUsQUFBVixnQkFBMEIsNkJBQWMsQUFBZCxBQUExQixBQUFQLEFBQ0QiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==