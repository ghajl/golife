/* global fetch */

import {delay} from 'redux-saga';
import {all, call, put, take, takeLatest} from 'redux-saga/effects';
// import es6promise from 'es6-promise';
// import 'isomorphic-unfetch';
import fetch from 'isomorphic-fetch'
import {actionTypes, failure, loadDataSuccess} from './actions';

// es6promise.polyfill();
 // const path = require('path')
export function fetchPatterns() {
	return fetch('https://gist.githubusercontent.com/ghajl/d873bcb8d32128b32618c7468dc6ca43/raw/0b4862bb8e1245a263d0c36802c9c0864321f13d/patterns.json')
	.then(res => res.json());
} 

export function * loadDataSaga () {
	    try {
		    const data = yield call(fetchPatterns);
		    
		    yield put(loadDataSuccess(data));
	    } catch (err) {
	    
	        yield put(failure(err));
	    }
}

// function * loadText() {
// 	console.log(path.resolve('../static/patterns.txt'));
// const resu = yield fetch('http://localhost:3000/static/patterns.txt').then(res => res.text());
// 		    console.log(resu)	
// }

export function * rootSaga () {
    yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga);
 
}

