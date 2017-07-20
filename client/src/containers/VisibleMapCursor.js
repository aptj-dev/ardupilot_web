// src/containers/VisibleMapCursor.js

import { connect } from 'react-redux'
import { addStep } from '../actions'
import CursorMap from '../components/CursorMap'

const mapStateToProps = (state) => {
  return {
    cursorPosition: state.droneMap.cursorPosition
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddStep: () => {
      dispatch(addStep())
    }
  }
}

const VisibleMapCursor = connect(
  mapStateToProps,
  mapDispatchToProps
)(CursorMap)

export default VisibleMapCursor
