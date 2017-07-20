// src/containersVisibleDroneMap.js

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addStep, setCursorPosition} from '../actions'
import DroneMap from '../components/DroneMap'

const mapStateToProps = (state) => {
  return {
      mapCenter: [36.321444, 138.59667],
      zoom: 15
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onDroneMapClick: (position) => {
	  dispatch(setCursorPosition(position))
      },
  }
}

const VisibleDroneMap = connect(
   mapStateToProps,
   mapDispatchToProps
 )(DroneMap)

export default VisibleDroneMap
