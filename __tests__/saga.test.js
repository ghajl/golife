import sagaHelper from 'redux-saga-testing';
import * as saga from '../saga';
import { call, put } from 'redux-saga/effects';
import {actionTypes, failure, loadDataSuccess} from '../actions';
import 'isomorphic-unfetch';


describe('succesfull fetch', () => {
	const test = sagaHelper(saga.loadDataSaga());
	test('get data', result  => {
		 
		expect(result).toEqual(call(saga.fetchPatterns));
		return {'name': 'somePattern'};
	})

	test('dispatch action', result => {
		let data = {'name': 'somePattern'}
		expect(result).toEqual( put(loadDataSuccess(data)));
	})	
})

describe('unsuccesfull fetch', () => {
	const test = sagaHelper(saga.loadDataSaga());
	test('get data', result  => {
		 
		expect(result).toEqual(call(saga.fetchPatterns));
		return new Error('Can`t connect to server');
	})

	test('dispatch action', result => {
		let err = 'Can`t connect to server';
		expect(result).toEqual( put(failure(err)));
	})	
})
