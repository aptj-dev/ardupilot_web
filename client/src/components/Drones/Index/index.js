// src/components/Drone/Index/index.js

import React, { PropTypes, Component } from 'react'
import DroneList from './DroneList/'

export default class DroneIndex extends Component {
    constructor(props) {
	super(props)
    }
    
    componentDidMount() {
     	this.props.requestAllDrones()
     }

    render() {
	let rows = []
	if (typeof this.props.drones !== 'undefined')
	    rows = this.props.drones
	return(
		<div>
		<p>Drones Index</p>
		<button
	    type="button"
	    onClick={() => this.props.requestAllDrones()}>
		refresh
	    </button>
		<DroneList drones={rows} />
		</div>
	)
    }
}
