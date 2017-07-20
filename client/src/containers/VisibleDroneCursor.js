// src/containers/VisibleDroneCursor.js

import { connect } from 'react-redux'
import { removeStep } from '../actions'
import CursorDrone from '../components/CursorDrone'
import { fetchPosition} from '../actions'

const mapStateToProps = (state) => {
  return {
      dronePosition: state.droneMap.dronePosition,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
	requestPosition: () => {
	    dispatch(fetchPosition())
	}
    }
}

const VisibleDroneCursor = connect(
    mapStateToProps,
    mapDispatchToProps
)(CursorDrone)

export default VisibleDroneCursor
