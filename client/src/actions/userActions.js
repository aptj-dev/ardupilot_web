// src/actions/userActions.js

import * as types from './actionTypes';  

export const signUpRequest = (data) => {
    return {
	type: types.SIGN_UP_REQUEST,
	data
    }
}

export const loginRequest = (data) => {
    return {
	type: types.LOG_IN_REQUEST,
	data
    }
}

export function signUpSuccess(token){
    return {
	type: types.SIGN_UP_SUCCESS,
	token
    }
}

// export function signUpError(error){
//     return {
// 	type: types.SIGN_UP_ERROR,
// 	error
//     }
// }

// export function loginSuccess(token){
//     return {
// 	type: types.SIGN_UP_SUCCESS,
// 	token
//     }
// }

// export function loginError(error) {
//     return {
// 	type: types.LOGIN_ERROR,
// 	error
//     }
// }

// export function signUpUser(credentials) {
//     return function(dispatch) {
// 	return userApi.sign_up(credentials).then(response => {
// 	    sessionStorage.setItem('jwt', response.jwt);
// 	    dispatch(signUpSuccess());
// 	}).catch(error => {
// 	    throw(error);
// 	});
//     };
// }
