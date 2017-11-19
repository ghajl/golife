'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _recompose = require('recompose');

var _Game = require('../components/Game');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWUuanMiXSwibmFtZXMiOlsiY29ubmVjdCIsImNoYW5nZVBhdHRlcm4iLCJjaGFuZ2VCb2FyZFNpemUiLCJ0b2dnbGVTdG9wcGVkIiwiaW5jcmVtZW50R2VuZXJhdGlvbiIsInNldFN0b3BwZWQiLCJzZXRTcGVlZCIsInNldENsZWFyIiwic2V0R2FtZVZhbHVlcyIsImNvbXBvc2UiLCJzZXREaXNwbGF5TmFtZSIsInB1cmUiLCJHYW1lIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJpbmRleCIsInN0b3BwZWQiLCJuYW1lIiwiZnBzIiwiY2VsbHNMaXN0Iiwic2l6ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhdHRlcm5zIiwicGF0dGVybk5hbWVzSW5kZXgiLCJncmlkU2l6ZXNJbmRleCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVMsQUFBZSxBQUFpQixBQUFlLEFBQXFCLEFBQVksQUFBVSxBQUFVOztBQUc3RyxBQUFTLEFBQVMsQUFBZ0I7O0FBQ2xDLEFBQU87Ozs7OztBQUhQO0FBQ0E7QUFJQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQiw2QkFBWSxBQUNyQzs7bUJBQ2lCLDhCQUFTLEFBQ3BCO2VBQVMsNEJBQVQsQUFBUyxBQUFjLEFBQzFCO0FBSEksQUFJTDtxQkFBaUIsZ0NBQVMsQUFDdEI7ZUFBUyw4QkFBVCxBQUFTLEFBQWdCLEFBQzVCO0FBTkksQUFPTDttQkFBZSx5QkFBTSxBQUNwQjtlQUFBLEFBQVMsQUFDVDtBQVRJLEFBVUw7eUJBQXFCLCtCQUFNLEFBQzFCO2VBQUEsQUFBUyxBQUNUO0FBWkksQUFhTDtnQkFBWSxvQkFBQSxBQUFDLFNBQUQsQUFBVSxNQUFTLEFBQzlCO2VBQVMseUJBQUEsQUFBVyxTQUFwQixBQUFTLEFBQW9CLEFBQzdCO0FBZkksQUFnQkw7Y0FBVSx1QkFBTyxBQUNoQjtlQUFTLHVCQUFULEFBQVMsQUFBUyxBQUNsQjtBQWxCSSxBQW1CTDtjQUFVLG9CQUFNLEFBQ2Y7ZUFBQSxBQUFTLEFBQ1Q7QUFyQkksQUFzQkw7bUJBQWUsdUJBQUEsQUFBQyxXQUFELEFBQVksTUFBUyxBQUNuQztlQUFTLDRCQUFBLEFBQWMsV0FBdkIsQUFBUyxBQUF5QixBQUNsQztBQXhCSCxBQUFPLEFBMEJSO0FBMUJRLEFBQ0w7QUFGSjs7QUE2QkEsSUFBTSxrQkFBaUIsU0FBakIsQUFBaUIsc0JBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztNQUFILEFBQVksWUFBWixBQUFZO01BQVosQUFBa0IsaUJBQWxCLEFBQWtCO01BQWxCLEFBQTZCLGdCQUE3QixBQUE2QjtNQUE3QixBQUF1Qyx5QkFBdkMsQUFBdUM7TUFBdkMsQUFBMEQsc0JBQTFELEFBQTBEO01BQTFELEFBQTBFLFdBQTFFLEFBQTBFO01BQTFFLEFBQStFLGFBQS9FLEFBQStFO1NBQVksRUFBRSxTQUFGLFNBQVcsTUFBWCxNQUFpQixXQUFqQixXQUE0QixVQUE1QixVQUFzQyxtQkFBdEMsbUJBQXlELGdCQUF6RCxnQkFBeUUsS0FBekUsS0FBOEUsT0FBekssQUFBMkY7QUFBbEgsQUFDQTtrQkFBZSx3QkFDZCwrQkFEYyxBQUNkLEFBQWUsa0JBQ2YseUJBQUEsQUFBUSxpQkFGVCxBQUFlLEFBRWQsQUFBeUIsQUFDekIsQUFDQyIsImZpbGUiOiJHYW1lLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=