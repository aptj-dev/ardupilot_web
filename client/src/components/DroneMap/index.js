// src/components/DroneMap/index.js

import React, { PropTypes, Component } from 'react'
import { Map, TileLayer} from 'react-leaflet'
import classnames from 'classnames'
import VisibleStepList from '../../containers/VisibleStepList'
import VisibleDroneCursor from '../../containers/VisibleDroneCursor'
import VisibleMapCursor from '../../containers/VisibleMapCursor'
import './style.css'

export default class DroneMap extends Component {

    componentDidMount() {
	setInterval(this.props.updatePosition, 1000)
    }
    
    render() {
	return (
		<Map center={this.props.mapCenter} zoom={this.props.zoom} onClick={(e) => this.props.onDroneMapClick(e.latlng)}>
		<TileLayer
	    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
	    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		/>
		<VisibleDroneCursor />
		<VisibleMapCursor />
		<VisibleStepList />
		</Map>
	)
    }
}
// const DroneMap = ({mapCenter, onDroneMapClick}) => (
//   <Map center={mapCenter} zoom={15} onClick={(e) => onDroneMapClick(e.latlng)}>
//     <TileLayer
//       url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     />
//     <VisibleMapCursor />
//     <VisibleStepList />
//   </Map>
// )

// export default DroneMap
