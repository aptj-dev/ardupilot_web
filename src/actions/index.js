

export const addStep = () => {
  return {
    type: 'ADD_STEP'
  }
}

export const setCursorPosition = (coord) => {
  return {
    type: 'SET_CURSOR_POSITION',
    coord
  }
}

export const removeStep = (stepId) => {
  return {
    type: 'REMOVE_STEP',
    stepId
  }
}
