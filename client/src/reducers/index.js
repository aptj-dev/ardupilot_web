// src/reducers/index.js

import { combineReducers } from 'redux'
import droneMap from './droneMap'
import droneReducer from './droneReducer'
import { routerReducer } from 'react-router-redux'
// import {configure, authStateReducer} from "redux-auth";
// import {
//     addStep,
//     setCursorPosition,
//     removeStep,
//     fetchPosition
// } from '../actions'

const ardupilotWeb = combineReducers({
    droneReducer,
    droneMap,
    routing: routerReducer
})


export default ardupilotWeb
