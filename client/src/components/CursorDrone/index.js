// src/components/CursorDrone/index.js

import React, {PropTypes, Component } from 'react'
import { Marker, LatLng } from 'react-leaflet'
import { Icon } from 'leaflet'
import classnames from 'classnames'

export default class CursorDrone extends Component {
    componentDidMount() {
	setInterval(this.props.requestPosition, 1000)
    }
   
    render() {
	if (typeof this.props.dronePosition !== 'undefined'){
	    let icon = new Icon ({iconUrl: 'https://d30y9cdsu7xlg0.cloudfront.net/png/156824-200.png', iconSize: [40, 40]})
	    return (
		    <Marker position={this.props.dronePosition} icon={icon}>
		    </Marker>
	    )}
	else {
	    return false
	}
    }
}
