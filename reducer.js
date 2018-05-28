import {actionTypes} from './actions';
import {patternNames} from './util/patternNames';


export const initialState = {
	error: false,
	patterns: [],
  generation: 0,   
  running: {
    'main': false,
  },
  pattern: 0,
  fps: 2,
  size: 1,
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
        ...{patterns: action.data}
      }

    case actionTypes.CHANGE_PATTERN:
      return {
        ...state,
        ...{pattern: action.index,
            generation: 0
          }
      }


    case actionTypes.CHANGE_BOARD_SIZE:
      return {
        ...state,
        ...{size: action.size,
            generation: 0,
            pattern: -1,
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
            pattern:-1,
          }
      }   

    case actionTypes.SAVE_CELLS:
    
      return {
        ...state,
        ...{
            cells: action.cells, 
            
            generation: state.generation -  1,
            }
          }
        


    default:
      return state
  }
}

export default reducer