/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import {actionTypes, failure, loadDataSuccess} from './actions'

es6promise.polyfill()

function * loadDataSaga () {
  try {
    const res = yield fetch('https://gist.githubusercontent.com/ghajl/d873bcb8d32128b32618c7468dc6ca43/raw/0b4862bb8e1245a263d0c36802c9c0864321f13d/patterns.json')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    
    yield put(failure(err))
  }
}


function * rootSaga () {
  yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
 
}

export default rootSaga