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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWUuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY2hhbmdlUGF0dGVybiIsImRpc3BhdGNoIiwiaW5kZXgiLCJjaGFuZ2VCb2FyZFNpemUiLCJpbmNyZW1lbnRHZW5lcmF0aW9uIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJuYW1lIiwic2V0U3BlZWQiLCJmcHMiLCJzZXRDbGVhciIsInNldEdhbWVWYWx1ZXMiLCJjZWxsc0xpc3QiLCJzaXplIiwibWFwU3RhdGVUb1Byb3BzIiwicGF0dGVybnMiLCJwYXR0ZXJuTmFtZXNJbmRleCIsImdyaWRTaXplc0luZGV4IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUdBOztBQUNBOzs7Ozs7OztBQUhBO0FBQ0E7QUFJQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQiw2QkFBWSxBQUNyQzs7bUJBQ2lCLDhCQUFTLEFBQ3BCO2VBQVMsNEJBQVQsQUFBUyxBQUFjLEFBQzFCO0FBSEksQUFJTDtxQkFBaUIsZ0NBQVMsQUFDdEI7ZUFBUyw4QkFBVCxBQUFTLEFBQWdCLEFBQzVCO0FBTkksQUFPTDt5QkFBcUIsK0JBQU0sQUFDMUI7ZUFBUyxhQUFULEFBQ0E7QUFUSSxBQVVMO2dCQUFZLG9CQUFBLEFBQUMsU0FBRCxBQUFVLE1BQVMsQUFDOUI7ZUFBUyx5QkFBQSxBQUFXLFNBQXBCLEFBQVMsQUFBb0IsQUFDN0I7QUFaSSxBQWFMO2NBQVUsdUJBQU8sQUFDaEI7ZUFBUyx1QkFBVCxBQUFTLEFBQVMsQUFDbEI7QUFmSSxBQWdCTDtjQUFVLG9CQUFNLEFBQ2Y7ZUFBUyxhQUFULEFBQ0E7QUFsQkksQUFtQkw7bUJBQWUsdUJBQUEsQUFBQyxXQUFELEFBQVksTUFBUyxBQUNuQztlQUFTLDRCQUFBLEFBQWMsV0FBdkIsQUFBUyxBQUF5QixBQUNsQztBQXJCSCxBQUFPLEFBdUJSO0FBdkJRLEFBQ0w7QUFGSjs7QUEwQkEsSUFBTSxrQkFBaUIsU0FBakIsQUFBaUIsc0JBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztNQUFILEFBQVksWUFBWixBQUFZO01BQVosQUFBa0IsaUJBQWxCLEFBQWtCO01BQWxCLEFBQTZCLGdCQUE3QixBQUE2QjtNQUE3QixBQUF1Qyx5QkFBdkMsQUFBdUM7TUFBdkMsQUFBMEQsc0JBQTFELEFBQTBEO01BQTFELEFBQTBFLFdBQTFFLEFBQTBFO01BQTFFLEFBQStFLGFBQS9FLEFBQStFO1NBQVksRUFBRSxTQUFGLFNBQVcsTUFBWCxNQUFpQixXQUFqQixXQUE0QixVQUE1QixVQUFzQyxtQkFBdEMsbUJBQXlELGdCQUF6RCxnQkFBeUUsS0FBekUsS0FBOEUsT0FBekssQUFBMkY7QUFBbEg7a0JBQ2Usd0JBQ2QsK0JBRGMsQUFDZCxBQUFlLGtCQUNmLHlCQUFBLEFBQVEsaUJBRk0sQUFFZCxBQUF5Qiw2QyIsImZpbGUiOiJHYW1lLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=