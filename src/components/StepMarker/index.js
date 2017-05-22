// src/components/StepMarker/index.js

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { CircleMarker, Popup, Tooltip } from 'react-leaflet'

// class StepMarker extends Component {
//   constructor (){
//     super()
//   }
//
//   render(props){
//     return(
//       <CircleMarker center={props.coord} radius={5}>
//         <div className="step-detail">
//           <Popup>
//             <div className="step-popup">
//               <p> Remove this step?</p>
//               <button onClick={props.onStepClick}>削除</button>
//             </div>
//           </Popup>
//           <Tooltip permanent={true} direction="bottom">
//             <p>{props.stepId}</p>
//           </Tooltip>
//         </div>
//       </CircleMarker>
//     )
//   }
// }

const StepMarker = ({removeStep, coord, stepId }) => (
  <CircleMarker center={coord} radius={5}>
    <div className="step-detail">
      <Popup>
        <div className="step-popup">
          <p> Remove this step?</p>
          <button onClick={removeStep}>削除</button>
        </div>
      </Popup>
      <Tooltip permanent={true} direction="bottom">
        <p>{stepId}</p>
      </Tooltip>
    </div>
  </CircleMarker>
)

// StepMarker.PropTypes =  {
//   coord: PropTypes.arrayOf(PropTypes.shape({
//     lat: PropTypes.number.isRequired,
//     lng: PropTypes.number.isRequired
//   }).isRequired).isRequired,
//   stepId: PropTypes.number.isRequired,
//   removeStep: PropTypes.func.isRequired
// }



export default StepMarker
