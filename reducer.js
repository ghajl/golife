import {actionTypes} from './actions';

export const initialState = {
  error: false,
  patterns: [
    {
      name: 'random',
      label: 'Random',
    }
  ],
  parameters: [
    {
      name: 'small',
      width: 30,
      height: 20,
      squareSize: 24, 
      label: '20 X 30',
    },
    {
      name: 'medium',
      width: 60,
      height: 40,
      squareSize: 12,
      label: '40 X 60',
    },
    {
      name: 'large', 
      width: 90,
      height: 60,
      squareSize: 8,
      label: '60 X 90',
    }
  ],
  running: {
    'main': false,
  },
  generation: 0,   
  currentPattern: 0,
  currentSize: 1,
  fps: 2,  
  cells: null, 
}

function initBoards () {
  const boards = {};
  for (let name in patternNames) {
    boards[name] = true;
  }  
  return boards;
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{error: true}
      }
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{patterns: [...state.patterns, ...action.data]}
      }
    case actionTypes.CHANGE_PATTERN:
      return {
        ...state,
        ...{currentPattern: action.index,
            generation: 0
          }
      }
    case actionTypes.CHANGE_BOARD_SIZE:
      return {
        ...state,
        ...{currentSize: action.currentSize,
            generation: 0,
            currentPattern: -1,
          }
      }
    case actionTypes.SET_RUNNING:
      if(action.name){
            return {
              ...state,
              ...{running: {...state.running, ...{[action.name]: action.running}}}
            }
          }
      else {
        return {
              ...state,
              ...{running: {}
                 }
              }
          }
    case actionTypes.INCREMENT_GENERATION:
      return {
        ...state,
        ...{generation: state.generation + 1}
      }    
    case actionTypes.SET_SPEED:
      return {
        ...state,
        ...{fps: action.fps}
      }   
    case actionTypes.SET_CLEAR:
      return {
        ...state,
        ...{
            generation: 0,
            currentPattern:-1,
          }
      }   
    case actionTypes.SAVE_CELLS:
      return {
        ...state,
        ...{
            cells: action.cells, 
           }
          }
    default:
      return state
  }
}

export default reducer
