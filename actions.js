export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  CHANGE_PATTERN: 'CHANGE_PATTERN',
  CHANGE_BOARD_SIZE: 'CHANGE_BOARD_SIZE',
  SET_STOPPED: 'SET_STOPPED',
  INCREMENT_GENERATION: 'INCREMENT_GENERATION',
  SET_SPEED: 'SET_SPEED',
  SET_CLEAR: 'SET_CLEAR',
  SAVE_STATE: 'SAVE_STATE',
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE
  }
}



export function loadData () {
  return {type: actionTypes.LOAD_DATA}
}

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  }
}

export function changePattern(index) {
  return {
    type: actionTypes.CHANGE_PATTERN,
    index
  }
}

export function changeBoardSize(index) {
  return {
    type: actionTypes.CHANGE_BOARD_SIZE,
    index
  }


}

export function setStopped(stopped, name) {
  return {
    type: actionTypes.SET_STOPPED,
    stopped,
    name
  }
}
export function incrementGeneration() {
  return { type: actionTypes.INCREMENT_GENERATION }
}

export function setSpeed(fps) {
  return {type: actionTypes.SET_SPEED,
    fps
  }

}

export function setClear() {
  return {type: actionTypes.SET_CLEAR}
}

export function saveState(savedState) {
  return {
    type: actionTypes.SAVE_STATE,
    savedState
  }
}