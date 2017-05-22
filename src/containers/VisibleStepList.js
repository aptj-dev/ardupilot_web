// src/containers/VisibleStepList.js

import { connect } from 'react-redux'
import { removeStep } from '../actions'
import StepList from '../components/StepList'

const mapStateToProps = (state) => {
  return {
    stepList: state.droneMap.stepList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStepClick: (stepId) => {
      dispatch(removeStep(stepId))
    }
  }
}

const VisibleStepList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList)

export default VisibleStepList
