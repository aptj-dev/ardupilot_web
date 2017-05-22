// src/reducers/index.js

import { combineReducers } from 'redux'
import steps from './steps'
import droneMap from './droneMap'

const ardupilotWeb = combineReducers({
  // steps,
  droneMap
})

export default ardupilotWeb
