'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.reducer = reducer;

var _actions = require('./actions');

var _boardNames = require('./helpers/boardNames');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = exports.initialState = {
  error: false,
  patterns: [],
  generationCount: -1,
  stopped: initBoards(),

  patternNamesIndex: 0,
  fps: 2,
  gridSizesIndex: 1,
  cellsList: null,
  size: null
};

function initBoards() {
  var boards = {};
  for (var name in _boardNames.boardNames) {
    boards[name] = true;
  }
  return boards;
}

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.actionTypes.FAILURE:
      return (0, _extends4.default)({}, state, { error: true });

    case _actions.actionTypes.LOAD_DATA_SUCCESS:
      return (0, _extends4.default)({}, state, { patterns: action.data });

    case _actions.actionTypes.CHANGE_PATTERN:
      return (0, _extends4.default)({}, state, { patternNamesIndex: action.index,
        generationCount: -1
      });

    case _actions.actionTypes.CHANGE_BOARD_SIZE:
      return (0, _extends4.default)({}, state, { gridSizesIndex: action.index,
        generationCount: 0,
        patternNamesIndex: -1
      });
    case _actions.actionTypes.TOGGLE_STOPPED:
      return (0, _extends4.default)({}, state, { stopped: !state.stopped });
    case _actions.actionTypes.SET_STOPPED:
      if (action.name) {
        return (0, _extends4.default)({}, state, { stopped: (0, _extends4.default)({}, state.stopped, (0, _defineProperty3.default)({}, action.name, action.stopped)) });
      } else {
        return (0, _extends4.default)({}, state, { stopped: (0, _extends4.default)({}, state.stopped, initBoards())
        });
      }
    case _actions.actionTypes.INCREMENT_GENERATION:
      return (0, _extends4.default)({}, state, { generationCount: state.generationCount + 1 });

    case _actions.actionTypes.SET_SPEED:

      return (0, _extends4.default)({}, state, { fps: action.fps });

    case _actions.actionTypes.SET_CLEAR:

      return (0, _extends4.default)({}, state, {
        generationCount: -1,
        patternNamesIndex: -1
      });

    case _actions.actionTypes.SET_GAME_VALUES:

      return (0, _extends4.default)({}, state, {
        cellsList: action.cellsList,

        generationCount: state.generationCount - 1
      });

    default:
      return state;
  }
}

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImVycm9yIiwicGF0dGVybnMiLCJnZW5lcmF0aW9uQ291bnQiLCJzdG9wcGVkIiwiaW5pdEJvYXJkcyIsInBhdHRlcm5OYW1lc0luZGV4IiwiZnBzIiwiZ3JpZFNpemVzSW5kZXgiLCJjZWxsc0xpc3QiLCJzaXplIiwiYm9hcmRzIiwibmFtZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkZBSUxVUkUiLCJMT0FEX0RBVEFfU1VDQ0VTUyIsImRhdGEiLCJDSEFOR0VfUEFUVEVSTiIsImluZGV4IiwiQ0hBTkdFX0JPQVJEX1NJWkUiLCJUT0dHTEVfU1RPUFBFRCIsIlNFVF9TVE9QUEVEIiwiSU5DUkVNRU5UX0dFTkVSQVRJT04iLCJTRVRfU1BFRUQiLCJTRVRfQ0xFQVIiLCJTRVRfR0FNRV9WQUxVRVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztRQXlCZ0IsQSxVLEFBQUE7O0FBekJoQjs7QUFDQTs7Ozs7O0FBR08sSUFBTTtTQUFlLEFBQ3BCLEFBQ1A7WUFGMkIsQUFFbEIsQUFDUjttQkFBaUIsQ0FIUyxBQUdSLEFBQ2xCO1dBSjBCLEFBSWpCLEFBRVQ7O3FCQU4wQixBQU1SLEFBQ2xCO09BUDBCLEFBT3JCLEFBQ0w7a0JBUjBCLEFBUVgsQUFDZjthQVQwQixBQVNmLEFBQ1g7UUFWSyxBQUFxQixBQVVwQjtBQVZvQixBQUMzQjs7QUFZRCxTQUFBLEFBQVMsYUFBYyxBQUNyQjtNQUFJLFNBQUosQUFBYSxBQUNiO09BQUssSUFBTCxBQUFTLGdDQUFxQixBQUM1QjtXQUFBLEFBQU8sUUFBUCxBQUFlLEFBQ2hCO0FBQ0Q7U0FBQSxBQUFPLEFBQ1I7OztBQUVNLFNBQUEsQUFBUyxVQUF1QztNQUE5QixBQUE4Qiw0RUFBdEIsQUFBc0I7TUFBUixBQUFRLG1CQUNyRDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFLLHFCQUFMLEFBQWlCLEFBQ2Y7d0NBQUEsQUFDSyxPQUNBLEVBQUMsT0FGTixBQUVLLEFBQVEsQUFHZjs7U0FBSyxxQkFBTCxBQUFpQixBQUNmO3dDQUFBLEFBQ0ssT0FDQSxFQUFDLFVBQVUsT0FGaEIsQUFFSyxBQUFrQixBQUd6Qjs7U0FBSyxxQkFBTCxBQUFpQixBQUNmO3dDQUFBLEFBQ0ssU0FDQyxtQkFBbUIsT0FBcEIsQUFBMkIsQUFDMUI7eUJBQWlCLENBSHZCLEFBRUssQUFDbUIsQUFLMUI7QUFOTzs7U0FNRixxQkFBTCxBQUFpQixBQUNmO3dDQUFBLEFBQ0ssU0FDQyxnQkFBZ0IsT0FBakIsQUFBd0IsQUFDdkI7eUJBREQsQUFDa0IsQUFDakI7MkJBQWtCLENBSnhCLEFBRUssQUFFb0IsQUFHM0I7QUFMTztTQUtGLHFCQUFMLEFBQWlCLEFBQ2Y7d0NBQUEsQUFDSyxPQUNBLEVBQUMsU0FBUyxDQUFDLE1BRmhCLEFBRUssQUFBaUIsQUFFeEI7U0FBSyxxQkFBTCxBQUFpQixBQUNmO1VBQUcsT0FBSCxBQUFVLE1BQUssQUFDVDswQ0FBQSxBQUNLLE9BQ0EsRUFBQyxvQ0FBYSxNQUFiLEFBQW1CLDJDQUFjLE9BQWpDLEFBQXdDLE1BQU8sT0FGckQsQUFFSyxBQUFDLEFBQXNELEFBRTdEO0FBTEwsYUFNSyxBQUNIOzBDQUFBLEFBQ1MsU0FDQyxvQ0FFSyxNQUZMLEFBRVcsU0FKckIsQUFFUyxBQUFDLEFBR0ssQUFJWjtBQVBNO0FBUWI7U0FBSyxxQkFBTCxBQUFpQixBQUNmO3dDQUFBLEFBQ0ssT0FDQSxFQUFDLGlCQUFpQixNQUFBLEFBQU0sa0JBRjdCLEFBRUssQUFBMEMsQUFHakQ7O1NBQUsscUJBQUwsQUFBaUIsQUFFZjs7d0NBQUEsQUFDSyxPQUNBLEVBQUMsS0FBSyxPQUZYLEFBRUssQUFBYSxBQUdwQjs7U0FBSyxxQkFBTCxBQUFpQixBQUVmOzt3Q0FBQSxBQUNLO3lCQUVrQixDQURsQixBQUNtQixBQUNsQjsyQkFBa0IsQ0FKeEIsQUFFSyxBQUVvQixBQUkzQjtBQU5PLEFBQ0M7O1NBS0gscUJBQUwsQUFBaUIsQUFFZjs7d0NBQUEsQUFDSzttQkFFWSxPQURaLEFBQ21CLEFBRWxCOzt5QkFBaUIsTUFBQSxBQUFNLGtCQUw3QixBQUVLLEFBRzJDLEFBTWxEO0FBVE8sQUFDQzs7QUFTTjthQTFGSixBQTBGSSxBQUFPLEFBRVo7Ozs7a0JBRWMsQSIsImZpbGUiOiJyZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=