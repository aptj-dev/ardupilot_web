// src/saga/drone.js

import { take, takeEvery, call, fork, put, cancelled, select } from 'redux-saga/effects'
import { droneApi}  from '../api/droneApi'
import { push } from 'react-router-redux'
import * as actions from '../actions/actionTypes'

function* createDrone(params) {
    try {
	const response = yield call(droneApi.createDrone, params)
	yield call(createDroneSuccess, response)
    } catch(error) {
	alert('TODO: HANDLE CREATE DRONE ERROR ' + error.stack)
	yield put({type: 'CREATE_DRONE_ERROR ', error })
    }
}

function* fetchAllDrones() {
    try {
	const response = yield call(droneApi.getAllDrones)
	yield put({type: actions.FETCH_ALL_DRONES_SUCCESS, drones: response})
    } catch(error) {
	yield put({ type: 'FETCH_DRONE_ERROR ', error })
    }
}

function* createDroneSuccess(response) {
    yield put(push('/drones'))
    //    alert('TODO: HANDLE CREATE DRONE SUCCESS ' + JSON.stringify(response))
}

export function* watchFetchAllDrones() {
    while(true) {
	const request = yield take(actions.FETCH_ALL_DRONES)
	yield fork(fetchAllDrones)
    }
}

export function* watchDronePositionFlow() {
    while(true) {
	const request = yield take('DRONE_MAP_REQUEST')
	const task = yield fork(udpateDronePosition)
    }
}

export function* createDroneFlow() {
    while(true) {
	const request = yield take('DRONE_CREATE_REQUEST')
	const task = yield fork(createDrone, request.data)
    }
}
