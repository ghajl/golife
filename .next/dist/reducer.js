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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImVycm9yIiwicGF0dGVybnMiLCJnZW5lcmF0aW9uQ291bnQiLCJzdG9wcGVkIiwiaW5pdEJvYXJkcyIsInBhdHRlcm5OYW1lc0luZGV4IiwiZnBzIiwiZ3JpZFNpemVzSW5kZXgiLCJjZWxsc0xpc3QiLCJzaXplIiwiYm9hcmRzIiwibmFtZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkZBSUxVUkUiLCJMT0FEX0RBVEFfU1VDQ0VTUyIsImRhdGEiLCJDSEFOR0VfUEFUVEVSTiIsImluZGV4IiwiQ0hBTkdFX0JPQVJEX1NJWkUiLCJTRVRfU1RPUFBFRCIsIklOQ1JFTUVOVF9HRU5FUkFUSU9OIiwiU0VUX1NQRUVEIiwiU0VUX0NMRUFSIiwiU0VUX0dBTUVfVkFMVUVTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7UUF5QmdCLEEsVSxBQUFBOztBQXpCaEI7O0FBQ0E7Ozs7OztBQUdPLElBQU07U0FBZSxBQUNwQixBQUNQO1lBRjJCLEFBRWxCLEFBQ1I7bUJBQWlCLENBSFMsQUFHUixBQUNsQjtXQUowQixBQUlqQixBQUVUOztxQkFOMEIsQUFNUixBQUNsQjtPQVAwQixBQU9yQixBQUNMO2tCQVIwQixBQVFYLEFBQ2Y7YUFUMEIsQUFTZixBQUNYO1FBVkssQUFBcUIsQUFVcEI7QUFWb0IsQUFDM0I7O0FBWUQsU0FBQSxBQUFTLGFBQWMsQUFDckI7TUFBSSxTQUFKLEFBQWEsQUFDYjtPQUFLLElBQUwsQUFBUyxnQ0FBcUIsQUFDNUI7V0FBQSxBQUFPLFFBQVAsQUFBZSxBQUNoQjtBQUNEO1NBQUEsQUFBTyxBQUNSOzs7QUFFTSxTQUFBLEFBQVMsVUFBdUM7TUFBOUIsQUFBOEIsNEVBQXRCLEFBQXNCO01BQVIsQUFBUSxtQkFDckQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBSyxxQkFBTCxBQUFpQixBQUNmO3dDQUFBLEFBQ0ssT0FDQSxFQUFDLE9BRk4sQUFFSyxBQUFRLEFBR2Y7O1NBQUsscUJBQUwsQUFBaUIsQUFDZjt3Q0FBQSxBQUNLLE9BQ0EsRUFBQyxVQUFVLE9BRmhCLEFBRUssQUFBa0IsQUFHekI7O1NBQUsscUJBQUwsQUFBaUIsQUFDZjt3Q0FBQSxBQUNLLFNBQ0MsbUJBQW1CLE9BQXBCLEFBQTJCLEFBQzFCO3lCQUFpQixDQUh2QixBQUVLLEFBQ21CLEFBSzFCO0FBTk87O1NBTUYscUJBQUwsQUFBaUIsQUFDZjt3Q0FBQSxBQUNLLFNBQ0MsZ0JBQWdCLE9BQWpCLEFBQXdCLEFBQ3ZCO3lCQURELEFBQ2tCLEFBQ2pCOzJCQUFrQixDQUp4QixBQUVLLEFBRW9CLEFBRzNCO0FBTE87U0FLRixxQkFBTCxBQUFpQixBQUNmO1VBQUcsT0FBSCxBQUFVLE1BQUssQUFDVDswQ0FBQSxBQUNLLE9BQ0EsRUFBQyxvQ0FBYSxNQUFiLEFBQW1CLDJDQUFjLE9BQWpDLEFBQXdDLE1BQU8sT0FGckQsQUFFSyxBQUFDLEFBQXNELEFBRTdEO0FBTEwsYUFNSyxBQUNIOzBDQUFBLEFBQ1MsU0FDQyxvQ0FFSyxNQUZMLEFBRVcsU0FKckIsQUFFUyxBQUFDLEFBR0ssQUFJWjtBQVBNO0FBUWI7U0FBSyxxQkFBTCxBQUFpQixBQUNmO3dDQUFBLEFBQ0ssT0FDQSxFQUFDLGlCQUFpQixNQUFBLEFBQU0sa0JBRjdCLEFBRUssQUFBMEMsQUFHakQ7O1NBQUsscUJBQUwsQUFBaUIsQUFFZjs7d0NBQUEsQUFDSyxPQUNBLEVBQUMsS0FBSyxPQUZYLEFBRUssQUFBYSxBQUdwQjs7U0FBSyxxQkFBTCxBQUFpQixBQUVmOzt3Q0FBQSxBQUNLO3lCQUVrQixDQURsQixBQUNtQixBQUNsQjsyQkFBa0IsQ0FKeEIsQUFFSyxBQUVvQixBQUkzQjtBQU5PLEFBQ0M7O1NBS0gscUJBQUwsQUFBaUIsQUFFZjs7d0NBQUEsQUFDSzttQkFFWSxPQURaLEFBQ21CLEFBRWxCOzt5QkFBaUIsTUFBQSxBQUFNLGtCQUw3QixBQUVLLEFBRzJDLEFBTWxEO0FBVE8sQUFDQzs7QUFTTjthQXJGSixBQXFGSSxBQUFPLEFBRVo7Ozs7a0JBRWMsQSIsImZpbGUiOiJyZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=