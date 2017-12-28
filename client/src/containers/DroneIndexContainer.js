// src/containers/DroneIndexContainer.js

import { connect } from 'react-redux'
import { fetchAllDrones } from '../actions/droneActions'
import DroneIndex from '../components/Drones/Index'

const mapStateToProps = (state) => {
    return {
	drones: state.droneReducer.drones
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	requestAllDrones: () => {
	     dispatch(fetchAllDrones())
	}
    }
}

const DroneIndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DroneIndex)

export default DroneIndexContainer
