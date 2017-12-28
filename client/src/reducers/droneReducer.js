// src/reducers/droneReducer.js

import * as types from '../actions/actionTypes'
import initialState from './initialState'

const droneReducer = (state=initialState, action) => {
    switch(action.type) {
    case types.FETCH_ALL_DRONES_SUCCESS:
//	console.log("Updated drone state\nFROM:\n" + JSON.stringify(state.drones) + "\nWITH:\n" + JSON.stringify(action.drones))
	return Object.assign({}, state, {
	    drones: action.drones
	})
    default:
	return state;
    }
};

export default droneReducer
