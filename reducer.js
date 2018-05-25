import {actionTypes} from './actions';
import {patternNames} from './util/patternNames';


export const initialState = {
	error: false,
	patterns: [],
  generationCount: -1,   
  running: {},
  currentPatternNameIndex: 0,
  fps: 2,
  currentGridSizeIndex: 1,
  savedState: null, 
  size: null,
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
        ...{currentPatternNameIndex: action.index,
            generationCount: -1
          }
      }


    case actionTypes.CHANGE_BOARD_SIZE:
      return {
        ...state,
        ...{currentGridSizeIndex: action.index,
            generationCount: 0,
            currentPatternNameIndex: -1,
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
        ...{generationCount: state.generationCount + 1}
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
            generationCount: -1,
            currentPatternNameIndex:-1,
          }
      }   

    case actionTypes.SAVE_STATE:
    
      return {
        ...state,
        ...{
            savedState: action.savedState, 
            
            generationCount: state.generationCount -  1,
            }
          }
        


    default:
      return state
  }
}

export default reducer