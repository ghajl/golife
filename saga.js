/* global fetch */

import {delay} from 'redux-saga';
import {all, call, put, take, takeLatest} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch'
import {actionTypes, failure, loadDataSuccess} from './actions';

export function fetchPatterns() {
	return fetch('https://gist.githubusercontent.com/ghajl/d873bcb8d32128b32618c7468dc6ca43/raw/0b4862bb8e1245a263d0c36802c9c0864321f13d/patterns.json')
	.then(res => res.json());
} 

export function * loadDataSaga () {
	    try {
		    const data = yield call(fetchPatterns);
		    // const data = [{ name: 'Glider',
		    //   pattern: [ [0,1], [0,2] ] }]
		    // console.log(data) 
		    yield put(loadDataSuccess(data));
	    } catch (err) {
	    // console.log("data") 
	        yield put(failure(err));
	    }
}

export function * rootSaga () {
    yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga);
 
}

