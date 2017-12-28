// src/actions/index.js

import fetch from 'isomorphic-fetch'
import * as ActionTypes from './actionTypes'

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
	return fetch('https://localhost/v1/drones/1/get_drone_position.json')
    	    .then(response => response.json())
    	    .then(json => dispatch(updatePosition(json)))
	    .catch((err) => console.log(err))
    }
}
