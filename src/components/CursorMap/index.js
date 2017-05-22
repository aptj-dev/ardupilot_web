// src/components/CursorMap/index.js

import React, {PropTypes, Component } from 'react'
import { Marker, Popup, LatLng } from 'react-leaflet'
import classnames from 'classnames'

const CursorMap = ({cursorPosition, onAddStep}) => {
  if (typeof cursorPosition !== 'undefined'){
    return (
      <div>
        <Marker position={cursorPosition}>
          <Popup>
            <div className="popup-content">
              <p>Do you want to move here</p>
              <button onClick={onAddStep} id="add-step-button">固定する</button>
            </div>
          </Popup>
        </Marker>
      </div>
    )} else {
      return false
    }
  }

export default CursorMap
