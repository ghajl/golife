'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _actions = require('./actions');

var _boardNames = require('./helpers/boardNames');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stopped;

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
      return (0, _extends4.default)({}, state, { error: true });

    case _actions.actionTypes.LOAD_DATA_SUCCESS:
      // console.log(action.data)
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
        var _extends3;

        return (0, _extends4.default)({}, state, { stopped: (0, _extends4.default)({}, state.stopped, (_extends3 = {}, (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.MAIN, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BLOCK, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BOAT, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.LOAF, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BEEHIVE, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BLINKER, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.BEACON, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.TOAD, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.GLIDER, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.SPACESHIP, true), (0, _defineProperty3.default)(_extends3, _boardNames.boardNames.GUN, true), _extends3))
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
      console.log("sfd");
      return (0, _extends4.default)({}, state, {
        cellsList: action.cellsList,
        size: action.size,
        generationCount: state.generationCount - 1
      });

    default:
      return state;
  }
}

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXIuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJib2FyZE5hbWVzIiwiaW5pdGlhbFN0YXRlIiwiZXJyb3IiLCJwYXR0ZXJucyIsImdlbmVyYXRpb25Db3VudCIsInN0b3BwZWQiLCJNQUlOIiwiQkxPQ0siLCJCT0FUIiwiTE9BRiIsIkJFRUhJVkUiLCJCTElOS0VSIiwiQkVBQ09OIiwiVE9BRCIsIkdMSURFUiIsIlNQQUNFU0hJUCIsIkdVTiIsInBhdHRlcm5OYW1lc0luZGV4IiwiZnBzIiwiZ3JpZFNpemVzSW5kZXgiLCJjZWxsc0xpc3QiLCJzaXplIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkZBSUxVUkUiLCJMT0FEX0RBVEFfU1VDQ0VTUyIsImRhdGEiLCJDSEFOR0VfUEFUVEVSTiIsImluZGV4IiwiQ0hBTkdFX0JPQVJEX1NJWkUiLCJUT0dHTEVfU1RPUFBFRCIsIlNFVF9TVE9QUEVEIiwibmFtZSIsIklOQ1JFTUVOVF9HRU5FUkFUSU9OIiwiU0VUX1NQRUVEIiwiU0VUX0NMRUFSIiwiU0VUX0dBTUVfVkFMVUVTIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7QUFDUixBQUFRLEFBR1I7Ozs7OztBQUFPLElBQU07U0FBZSxBQUNwQixBQUNQO1lBRjJCLEFBRWxCLEFBQ1I7bUJBQWlCLENBSFMsQUFHUixBQUNsQjttRUFDRyx1QkFESCxBQUNjLE1BRGQsQUFDcUIsK0NBQ2xCLHVCQUZILEFBRWMsT0FGZCxBQUVzQiwrQ0FDbkIsdUJBSEgsQUFHYyxNQUhkLEFBR3FCLCtDQUNsQix1QkFKSCxBQUljLE1BSmQsQUFJcUIsK0NBQ2xCLHVCQUxILEFBS2MsU0FMZCxBQUt3QiwrQ0FDckIsdUJBTkgsQUFNYyxTQU5kLEFBTXdCLCtDQUNyQix1QkFQSCxBQU9jLFFBUGQsQUFPdUIsK0NBQ3BCLHVCQVJILEFBUWMsTUFSZCxBQVFxQiwrQ0FDbEIsdUJBVEgsQUFTYyxR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