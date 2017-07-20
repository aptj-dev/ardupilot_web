// src/StepList/index.js

import React from 'react'
import PropTypes from 'prop-types'
import StepMarker from '../StepMarker'

const StepList = ({ stepList, onStepClick }) => {
  if(typeof stepList !== 'undefined'){
      console.log('StepList is:' + JSON.stringify(stepList))
      return(
	      <div>
              { stepList.map(step => {
		  return (
			  <StepMarker
		      key={step.id}
		      coord={step.coord}
		      stepId={step.id}
		      removeStep={() => onStepClick(step.id)}
			  />)
              })
              }
	  </div>
      )} else {
	  return false
    }
}

// StepList.PropTypes = {
//   stepList: PropTypes.arrayOf(PropTypes.shape({
//     stepId: PropTypes.number.isRequired,
//     coord: PropTypes.LatLong.isRequired
//   }).isRequired).isRequired,
//   onStepClick: PropTypes.func.isRequired
// }

export default StepList
