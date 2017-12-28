// src/saga/auth.js

import { take, call, fork, put, cancelled } from 'redux-saga/effects'
import { sessionApi } from '../api/sessionApi' 
import { userApi } from '../api/userApi'

function* authorize(credentials) {
    try{
	const response = yield call(sessionApi.login, credentials)
 	alert('TODO HANDLE RESPONSE: ' + JSON.stringify(response.content))
	yield call(loginSucess)
    } catch(error) {
	yield (put({type: 'LOGIN_ERROR', error}))
    }
}

function* sign_up(credentials) {
    try {
	const response = yield call(userApi.sign_up, credentials)
	yield call(signUpSuccess)
    } catch (error) {
	yield(put({type: 'SIGN_UP_ERROR', error}))
    }
}

function* loginSucess(token){
    yield take('LOGIN_SUCCESS')
    console.log('TODO: STORE SESSION TOKEN ' + JSON.stringify(token))
}

function* signUpSuccess(){
}

export function* signUpFlow(credentials){
    while(true) {
	const request = yield take('SIGN_UP_REQUEST')
	yield fork(sign_up, request.data)
    }
}

export function* loginFlow() {
    while(true) {
	const request = yield take('LOG_IN_REQUEST')
	const task = yield fork(authorize, request.data)
	const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
	if (action.type === 'LOGOUT')
	    yield cancel(task)
//	yield call(sessionApi.clearItem, 'token')
    }
}

