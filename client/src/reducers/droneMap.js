// src/reducers/droneMap.js

import * as types from '../actions/actionTypes'
import initialState from './initialState'

const droneMap = (state=initialState, action) => {
    console.log('droneMap state is: ' + JSON.stringify(state))
    switch (action.type){
    case 'REMOVE_STEP':
	let i = 1
	let removeStepList = state.stepList.filter(function(step) {
        if(step.id !== action.stepId) {
            step.id = i
            i++
            return true
        }
            return false
	})
      return Object.assign({}, state, {
          stepList: removeStepList
      })
    case 'ADD_STEP':
	let addStepList = state.stepList
      if (typeof addStepList === 'undefined') {
          addStepList = []
      }
	return Object.assign({}, state, {
            stepList: [...addStepList, {
		id: addStepList.length + 1,
		coord: state.cursorPosition
            }]
	})
    case 'SET_CURSOR_POSITION':
	return Object.assign({}, state, {
            cursorPosition: action.coord
	})
	
  case 'UPDATE_POSITION':
	return Object.assign({}, state, {
	    dronePosition: action.position
	})
    default:
	return state
    }
}

export default droneMap
