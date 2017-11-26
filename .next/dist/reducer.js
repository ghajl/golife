'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stopped;

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
  stopped: (_stopped = {}, (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.MAIN, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.BLOCK, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.BOAT, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.LOAF, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.BEEHIVE, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.BLINKER, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.BEACON, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.TOAD, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.GLIDER, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.SPACESHIP, true), (0, _defineProperty3.default)(_stopped, _boardNames.boardNames.GUN, true), _stopped),

  patternNamesIndex: 0,
  fps: 2,
  gridSizesIndex: 1,
  cellsList: null,
  size: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.actionTypes.FAILURE:
      return (0, _extends5.default)({}, state, { error: true });

    case _actions.actionTypes.LOAD_DATA_SUCCESS:
      return (0, _extends5.default)({}, state, { patterns: action.data });

    case _actions.actionTypes.CHANGE_PATTERN:
      return (0, _extends5.default)({}, state, { patternNamesIndex: action.index,
        generationCount: -1
      });

    case _actions.actionTypes.CHANGE_BOARD_SIZE:
      return (0, _extends5.default)({}, state, { gridSizesIndex: action.index,
        generationCount: 0,
        patternNamesIndex: -1
      });
    case _actions.actionTypes.TOGGLE_STOPPED:
      return (0, _extends5.default)({}, state, { stopped: !state.stopped });
    case _actions.actionTypes.SET_STOPPED:
      if (action.name) {
        return (0, _extends5.default)({}, state, { stopped: (0, _extends5.default)({}, state.stopped, (0, _defineProperty3.default)({}, action.name, action.stopped)) });
      } else {
        var _extends3;

        return (0, _extends5.default)({}, state, { stopped: (0, _extends5.default)({}, state.stopped, (_extends3 = {}, (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.MAIN, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BLOCK, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BOAT, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.LOAF, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BEEHIVE, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BLINKER, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BEACON, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.TOAD, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.GLIDER, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.SPACESHIP, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.GUN, true), _extends3))
        });
      }
    case _actions.actionTypes.INCREMENT_GENERATION:
      return (0, _extends5.default)({}, state, { generationCount: state.generationCount + 1 });

    case _actions.actionTypes.SET_SPEED:

      return (0, _extends5.default)({}, state, { fps: action.fps });

    case _actions.actionTypes.SET_CLEAR:

      return (0, _extends5.default)({}, state, {
        generationCount: -1,
        patternNamesIndex: -1
      });

    case _actions.actionTypes.SET_GAME_VALUES:

      return (0, _extends5.default)({}, state, {
        cellsList: action.cellsList,

        generationCount: state.generationCount - 1
      });

    default:
      return state;
  }
}

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImVycm9yIiwicGF0dGVybnMiLCJnZW5lcmF0aW9uQ291bnQiLCJzdG9wcGVkIiwiTUFJTiIsIkJMT0NLIiwiQk9BVCIsIkxPQUYiLCJCRUVISVZFIiwiQkxJTktFUiIsIkJFQUNPTiIsIlRPQUQiLCJHTElERVIiLCJTUEFDRVNISVAiLCJHVU4iLCJwYXR0ZXJuTmFtZXNJbmRleCIsImZwcyIsImdyaWRTaXplc0luZGV4IiwiY2VsbHNMaXN0Iiwic2l6ZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkZBSUxVUkUiLCJMT0FEX0RBVEFfU1VDQ0VTUyIsImRhdGEiLCJDSEFOR0VfUEFUVEVSTiIsImluZGV4IiwiQ0hBTkdFX0JPQVJEX1NJWkUiLCJUT0dHTEVfU1RPUFBFRCIsIlNFVF9TVE9QUEVEIiwibmFtZSIsIklOQ1JFTUVOVF9HRU5FUkFUSU9OIiwiU0VUX1NQRUVEIiwiU0VUX0NMRUFSIiwiU0VUX0dBTUVfVkFMVUVTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztRQTZCZ0IsQSxVQUFBLEE7O0FBN0JoQjs7QUFDQTs7Ozs7O0FBR08sSUFBTTtTQUFlLEFBQ3BCLEFBQ1A7WUFGMkIsQUFFbEIsQUFDUjttQkFBaUIsQ0FIUyxBQUdSLEFBQ2xCO21FQUNHLHVCQURILEFBQ2MsTUFEZCxBQUNxQiwrQ0FDbEIsdUJBRkgsQUFFYyxPQUZkLEFBRXNCLCtDQUNuQix1QkFISCxBQUdjLE1BSGQsQUFHcUIsK0NBQ2xCLHVCQUpILEFBSWMsTUFKZCxBQUlxQiwrQ0FDbEIsdUJBTEgsQUFLYyxTQUxkLEFBS3dCLCtDQUNyQix1QkFOSCxBQU1jLFNBTmQsQUFNd0IsK0NBQ3JCLHVCQVBILEFBT2MsUUFQZCxBQU91QiwrQ0FDcEIsdUJBUkgsQUFRYyxNQVJkLEFBUXFCLCtDQUNsQix1QkFUSCxBQVNjLFFBVGQsQUFTdUIsK0NBQ3BCLHVCQVZILEFBVWMsV0FWZCxBQVUw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