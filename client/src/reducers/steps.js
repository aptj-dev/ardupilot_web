// src/reducers/steps.js
//
// const steps = (state={}, action) => {
//   console.log('state is: ' + JSON.stringify(state))
//   switch (action.type){
//     case 'REMOVE_STEP':
//       let i = 1
//       let removeStepList = state.stepList.filter(function(step) {
//         if(step.id !== action.stepId) {
//           step.id = i
//           i++
//           return true
//         }
//         return false
//       })
//       return Object.assign({}, state, {
//         stepList: removeStepList
//       })
//
//     case 'ADD_STEP':
//       let addStepList = state.stepList
//       if (typeof addStepList === 'undefined') {
//           addStepList = []
//       }
//       return Object.assign({}, state, {
//         stepList: [...addStepList, {
//               id: addStepList.length + 1,
//               coord: state.cursorPosition
//           }]
//       })
//     default:
//       return state
//     }
// }
//
// export default steps
