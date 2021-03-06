import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer, { initialState } from './reducer'
import nextReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import {rootSaga} from './saga'

const sagaMiddleware = createSagaMiddleware();

export function configureStore (state = initialState){
  
  const store = createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function withReduxSaga (BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}