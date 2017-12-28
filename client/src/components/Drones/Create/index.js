// src/components/Drones/Create/index.js

import React, { PropTypes, Component } from 'react'
import TextInput from '../../common/TextInput'

export default class DroneCreate extends Component {
    constructor(props){
	super(props)
	this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
	const field = event.target.name
	const drone = this.props.drone
	drone[field] = event.target.value
	return this.setState({'drone': drone})
    }

    render() {
	return (
		<div>
		<p>Drone Create</p>
		<form>
		<TextInput
	    name="name"
	    label="name"
	    value={this.props.drone.name}
	    onChange={this.onChange}/>
		
		<TextInput
	    name="drone_type"
	    label="type"
	    value={this.props.drone.drone_type}
	    onChange={this.onChange}/>
		
		<button
	    type="button"
	    className="btn btn-primary"
	    onClick={() => this.props.requestCreate(this.state.drone)}>
		Create Drone
		</button>
		</form>
		</div>
	)
    }    
}
