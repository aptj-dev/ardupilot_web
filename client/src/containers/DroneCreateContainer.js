// src/containers/DroneCreateContainer.js

import { connect } from 'react-redux'
import { createDrone, updateDrone } from '../actions/droneActions'
import DroneCreate from '../components/Drones/Create'

const mapStateToProps = (state) => {
    return {
	drone: {
	    name: '',
	    drone_type: ''
	}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	requestCreate: (droneParams) => {
	    dispatch(createDrone(droneParams))
	},

	requestUpdate: (droneParams) => {
	    dispatch(updateDrone(droneParams))
	}
    }
}

const DroneCreateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DroneCreate)

export default DroneCreateContainer
