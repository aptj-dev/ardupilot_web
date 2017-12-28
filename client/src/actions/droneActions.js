// src/actions/droneActions.js

import * as types from './actionTypes'

export const createDrone = (data) => {
    return {
	type: types.DRONE_CREATE_REQUEST,
	data
    }
}

export const updateDrone = (data) => {
    return {
	type: types.DRONE_UPDATE_REQUEST,
	data
   }
}

export const fetchAllDrones = () => {
    return {
	type: types.FETCH_ALL_DRONES
    }
}


export const fetchDronesSuccess = (drones) => {
    return {
	type: types.FETCH_DRONE_POSITION,
	data: drones
    }
}

export const fetchDronePositionRequest = (data) => {
    return {
	type: types.DRONE_POSITION_REQUEST
    }
}

// export function loadDrones(){
//     return function(dispatch) {
// 	return droneApi.getAllDrones().then( drones => {
// 	    dispatch(loadDronesSuccess(drones))
// 	}).catch(error => {
// 	    throw(error)
// 	})
//     }
// }
