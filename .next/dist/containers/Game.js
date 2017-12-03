'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _recompose = require('recompose');

var _Game = require('../components/Game');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { selectLight, selectLastUpdate, selectCount } from 'selectors'
// import { createSelector } from 'reselect';
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changePattern: function changePattern(index) {
      dispatch((0, _actions.changePattern)(index));
    },
    changeBoardSize: function changeBoardSize(index) {
      dispatch((0, _actions.changeBoardSize)(index));
    },
    toggleStopped: function toggleStopped() {
      dispatch((0, _actions.toggleStopped)());
    },
    incrementGeneration: function incrementGeneration() {
      dispatch((0, _actions.incrementGeneration)());
    },
    setStopped: function setStopped(stopped, name) {
      dispatch((0, _actions.setStopped)(stopped, name));
    },
    setSpeed: function setSpeed(fps) {
      dispatch((0, _actions.setSpeed)(fps));
    },
    setClear: function setClear() {
      dispatch((0, _actions.setClear)());
    },
    setGameValues: function setGameValues(cellsList, size) {
      dispatch((0, _actions.setGameValues)(cellsList, size));
    }
  };
};

var mapStateToProps = function mapStateToProps(_ref) {
  var stopped = _ref.stopped,
      size = _ref.size,
      cellsList = _ref.cellsList,
      patterns = _ref.patterns,
      patternNamesIndex = _ref.patternNamesIndex,
      gridSizesIndex = _ref.gridSizesIndex,
      fps = _ref.fps,
      error = _ref.error;
  return { stopped: stopped, size: size, cellsList: cellsList, patterns: patterns, patternNamesIndex: patternNamesIndex, gridSizesIndex: gridSizesIndex, fps: fps, error: error };
};
exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('GameContainer'), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _recompose.pure)(_Game2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWUuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY2hhbmdlUGF0dGVybiIsImRpc3BhdGNoIiwiaW5kZXgiLCJjaGFuZ2VCb2FyZFNpemUiLCJ0b2dnbGVTdG9wcGVkIiwiaW5jcmVtZW50R2VuZXJhdGlvbiIsInNldFN0b3BwZWQiLCJzdG9wcGVkIiwibmFtZSIsInNldFNwZWVkIiwiZnBzIiwic2V0Q2xlYXIiLCJzZXRHYW1lVmFsdWVzIiwiY2VsbHNMaXN0Iiwic2l6ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhdHRlcm5zIiwicGF0dGVybk5hbWVzSW5kZXgiLCJncmlkU2l6ZXNJbmRleCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7QUFIQTtBQUNBO0FBSUEsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQVksQUFDckM7O21CQUNpQiw4QkFBUyxBQUNwQjtlQUFTLDRCQUFULEFBQVMsQUFBYyxBQUMxQjtBQUhJLEFBSUw7cUJBQWlCLGdDQUFTLEFBQ3RCO2VBQVMsOEJBQVQsQUFBUyxBQUFnQixBQUM1QjtBQU5JLEFBT0w7bUJBQWUseUJBQU0sQUFDcEI7ZUFBUyxhQUFULEFBQ0E7QUFUSSxBQVVMO3lCQUFxQiwrQkFBTSxBQUMxQjtlQUFTLGFBQVQsQUFDQTtBQVpJLEFBYUw7Z0JBQVksb0JBQUEsQUFBQyxTQUFELEFBQVUsTUFBUyxBQUM5QjtlQUFTLHlCQUFBLEFBQVcsU0FBcEIsQUFBUyxBQUFvQixBQUM3QjtBQWZJLEFBZ0JMO2NBQVUsdUJBQU8sQUFDaEI7ZUFBUyx1QkFBVCxBQUFTLEFBQVMsQUFDbEI7QUFsQkksQUFtQkw7Y0FBVSxvQkFBTSxBQUNmO2VBQVMsYUFBVCxBQUNBO0FBckJJLEFBc0JMO21CQUFlLHVCQUFBLEFBQUMsV0FBRCxBQUFZLE1BQVMsQUFDbkM7ZUFBUyw0QkFBQSxBQUFjLFdBQXZCLEFBQVMsQUFBeUIsQUFDbEM7QUF4QkgsQUFBTyxBQTBCUjtBQTFCUSxBQUNMO0FBRko7O0FBNkJBLElBQU0sa0JBQWlCLFNBQWpCLEFBQWlCLHNCQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7TUFBSCxBQUFZLFlBQVosQUFBWTtNQUFaLEFBQWtCLGlCQUFsQixBQUFrQjtNQUFsQixBQUE2QixnQkFBN0IsQUFBNkI7TUFBN0IsQUFBdUMseUJBQXZDLEFBQXVDO01BQXZDLEFBQTBELHNCQUExRCxBQUEwRDtNQUExRCxBQUEwRSxXQUExRSxBQUEwRTtNQUExRSxBQUErRSxhQUEvRSxBQUErRTtTQUFZLEVBQUUsU0FBRixTQUFXLE1BQVgsTUFBaUIsV0FBakIsV0FBNEIsVUFBNUIsVUFBc0MsbUJBQXRDLG1CQUF5RCxnQkFBekQsZ0JBQXlFLEtBQXpFLEtBQThFLE9BQXpLLEFBQTJGO0FBQWxIO2tCQUNlLHdCQUNkLCtCQURjLEFBQ2QsQUFBZSxrQkFDZix5QkFBQSxBQUFRLGlCQUZNLEFBRWQsQUFBeUIsNkMiLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9