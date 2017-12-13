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
      error = _ref.error;
  return { stopped: stopped, size: size, cellsList: cellsList, patterns: patterns, patternNamesIndex: patternNamesIndex, gridSizesIndex: gridSizesIndex, error: error };
};
exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('GameContainer'), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _recompose.pure)(_Game2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWUuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY2hhbmdlUGF0dGVybiIsImRpc3BhdGNoIiwiaW5kZXgiLCJjaGFuZ2VCb2FyZFNpemUiLCJpbmNyZW1lbnRHZW5lcmF0aW9uIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJuYW1lIiwic2V0U3BlZWQiLCJmcHMiLCJzZXRDbGVhciIsInNldEdhbWVWYWx1ZXMiLCJjZWxsc0xpc3QiLCJzaXplIiwibWFwU3RhdGVUb1Byb3BzIiwicGF0dGVybnMiLCJwYXR0ZXJuTmFtZXNJbmRleCIsImdyaWRTaXplc0luZGV4IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOzttQkFDaUIsOEJBQVMsQUFDcEI7ZUFBUyw0QkFBVCxBQUFTLEFBQWMsQUFDMUI7QUFISSxBQUlMO3FCQUFpQixnQ0FBUyxBQUN0QjtlQUFTLDhCQUFULEFBQVMsQUFBZ0IsQUFDNUI7QUFOSSxBQU9MO3lCQUFxQiwrQkFBTSxBQUMxQjtlQUFTLGFBQVQsQUFDQTtBQVRJLEFBVUw7Z0JBQVksb0JBQUEsQUFBQyxTQUFELEFBQVUsTUFBUyxBQUM5QjtlQUFTLHlCQUFBLEFBQVcsU0FBcEIsQUFBUyxBQUFvQixBQUM3QjtBQVpJLEFBYUw7Y0FBVSx1QkFBTyxBQUNoQjtlQUFTLHVCQUFULEFBQVMsQUFBUyxBQUNsQjtBQWZJLEFBZ0JMO2NBQVUsb0JBQU0sQUFDZjtlQUFTLGFBQVQsQUFDQTtBQWxCSSxBQW1CTDttQkFBZSx1QkFBQSxBQUFDLFdBQUQsQUFBWSxNQUFTLEFBQ25DO2VBQVMsNEJBQUEsQUFBYyxXQUF2QixBQUFTLEFBQXlCLEFBQ2xDO0FBckJILEFBQU8sQUF1QlI7QUF2QlEsQUFDTDtBQUZKOztBQTBCQSxJQUFNLGtCQUFpQixTQUFqQixBQUFpQixzQkFBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO01BQUgsQUFBWSxZQUFaLEFBQVk7TUFBWixBQUFrQixpQkFBbEIsQUFBa0I7TUFBbEIsQUFBNkIsZ0JBQTdCLEFBQTZCO01BQTdCLEFBQXVDLHlCQUF2QyxBQUF1QztNQUF2QyxBQUEwRCxzQkFBMUQsQUFBMEQ7TUFBMUQsQUFBMkUsYUFBM0UsQUFBMkU7U0FBWSxFQUFFLFNBQUYsU0FBVyxNQUFYLE1BQWlCLFdBQWpCLFdBQTRCLFVBQTVCLFVBQXNDLG1CQUF0QyxtQkFBeUQsZ0JBQXpELGdCQUEwRSxPQUFqSyxBQUF1RjtBQUE5RztrQkFDZSx3QkFDZCwrQkFEYyxBQUNkLEFBQWUsa0JBQ2YseUJBQUEsQUFBUSxpQkFGTSxBQUVkLEFBQXlCLDZDIiwiZmlsZSI6IkdhbWUuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==