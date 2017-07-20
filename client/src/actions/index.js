import fetch from 'isomorphic-fetch'

export const ADD_STEP = 'ADD_STEP'
export const SET_CURSOR_POSITION  = 'SET_CURSOR_POSITION'
export const REMOVE_STEP = 'REMOVE_STEP'
export const UPDATE_POSITION = 'UPDATE_POSITION'

export function addStep() {
  return {
      type: 'ADD_STEP'
  }
}

export function setCursorPosition(coord) {
  return {
    type: 'SET_CURSOR_POSITION',
    coord
  }
}

function updatePosition(position) {
    return {
	type: 'UPDATE_POSITION',
	position
    }
}

export function removeStep(stepId) {
    return {
	type: 'REMOVE_STEP',
	stepId
    }
}

export function fetchPosition() {
    return dispatch => {
	return fetch('http://localhost:3000/drones/1/get_drone_position')
    	    .then(response => response.json())
    	    .then(json => dispatch(updatePosition(json)))
	    .catch((err) => console.log(err))
    }
}
