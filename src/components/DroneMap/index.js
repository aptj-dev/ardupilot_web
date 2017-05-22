// src/components/DroneMap/index.js

import React, { PropTypes, Component } from 'react'
import { Map, TileLayer} from 'react-leaflet'
import setCursorPosition from '../../actions'
import classnames from 'classnames'
import VisibleStepList from '../../containers/VisibleStepList'
import VisibleMapCursor from '../../containers/VisibleMapCursor'
import './style.css'

const centerMap = [36.321444, 138.59667]

// class DroneMap extends Component {
//     constructor() {
//       super()
//       this.onClickMap = this.onClickMap.bind(this)
//     }
//
//     onClickMap(event){
//       let position = [event.latlng.lat, event.latlng.lng];
//       this.setState((prevState, props) => ({
//         cursorPosition: position
//     }));
//   }

const DroneMap = ({mapCenter, onDroneMapClick}) => (
  <Map center={mapCenter} zoom={15} onClick={(e) => onDroneMapClick(e.latlng)}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <VisibleMapCursor />
    <VisibleStepList />
  </Map>
)

export default DroneMap
