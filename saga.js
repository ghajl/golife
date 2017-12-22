import {call, put, takeLatest} from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch'
import {actionTypes, failure, loadDataSuccess} from './actions';

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

export function * rootSaga () {
    yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga);
}

