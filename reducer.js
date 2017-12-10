import {actionTypes} from './actions';
import {boardNames} from './helpers/boardNames';


export const initialState = {
	error: false,
	patterns:[],
  generationCount: -1,   
  stopped: initBoards(),

  patternNamesIndex:0,
  fps: 2,
  gridSizesIndex:1,
  cellsList: null, 
  size: null
}

function initBoards () {
  let boards = {};
  for( let name in boardNames ) {
    boards[name] = true
  }  
  return boards
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
        ...{patternNamesIndex: action.index,
            generationCount: -1
          }
      }


    case actionTypes.CHANGE_BOARD_SIZE:
      return {
        ...state,
        ...{gridSizesIndex: action.index,
            generationCount: 0,
            patternNamesIndex:-1,
          }
      }
    case actionTypes.TOGGLE_STOPPED:
      return {
        ...state,
        ...{stopped: !state.stopped}
      }
    case actionTypes.SET_STOPPED:
      if(action.name){
            return {
              ...state,
              ...{stopped: {...state.stopped, ...{[action.name]: action.stopped}}}
            }
          }
      else {
        return {
              ...state,
              ...{stopped:
                  {
                    ...state.stopped,
                    ...initBoards()
                  }
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
            patternNamesIndex:-1,
          }
      }   

    case actionTypes.SET_GAME_VALUES:
    
      return {
        ...state,
        ...{
            cellsList: action.cellsList, 
            
            generationCount: state.generationCount -  1,
            }
          }
        


    default:
      return state
  }
}

export default reducer