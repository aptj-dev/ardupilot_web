// src/components/MarkerList/index.js

import React, {PropTypes} from 'react'
import StepMarker from '../StepMarker'

const MarkerList = ({stepMarkers, onRemoveStep}) => (
  <div>
    { stepMarkers.map(stepMarker =>
      <StepMarker
        key={marker.id}
        {...stepMarker}
        markerId={marker.id}
        removeStep={() => onRemoveStep(stepMarker.id)}
      />
      )
    }
  </div>
)

MarkerList.PropTypes = {
  stepMarkers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    pos: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  }).isRequired).isRequired.
  removeStep: PropTypes.func.isRequired
}

export default MarkerList
