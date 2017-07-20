// src/reducers/index.js

import { combineReducers } from 'redux'
import steps from './steps'
import droneMap from './droneMap'
import {configure, authStateReducer} from "redux-auth";
import {
    addStep,
    setCursorPosition,
    removeStep,
    fetchPosition
} from '../actions'

const ardupilotWeb = combineReducers({
    auth: authStateReducer,
    steps,
    droneMap
})


export default ardupilotWeb
