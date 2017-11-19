'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _recompose = require('recompose');

var _About = require('../components/About');

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { addCount } from 'actions'
// import { selectLight, selectLastUpdate, selectCount } from 'selectors'
// import { createSelector } from 'reselect';
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setStopped: function setStopped(stopped, name) {
      dispatch((0, _actions.setStopped)(stopped, name));
    }

  };
};

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('AboutContainer'), (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps), _recompose.pure)(_About2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEFib3V0LmpzIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJzZXRTdG9wcGVkIiwiY29tcG9zZSIsInNldERpc3BsYXlOYW1lIiwicHVyZSIsIkFib3V0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwic3RvcHBlZCIsIm5hbWUiLCJkaXNwYXRjaCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVM7O0FBSVQsQUFBUyxBQUFTLEFBQWdCOztBQUNsQyxBQUFPOzs7Ozs7QUFKUDtBQUNBO0FBQ0E7QUFLQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQiw2QkFBWSxBQUNyQzs7Z0JBQ2Msb0JBQUEsQUFBQyxTQUFELEFBQVUsTUFBUyxBQUM5QjtlQUFTLHlCQUFBLEFBQVcsU0FBcEIsQUFBUyxBQUFvQixBQUM3QjtBQUhILEFBQU8sQUFNUjs7QUFOUSxBQUNMO0FBRkosQUFVQTs7a0JBQWUsd0JBQ2IsK0JBRGEsQUFDYixBQUFlLDRDQUNQLGlCQUFBO1NBQUEsQUFBUztBQUFqQixDQUFBLEVBRkYsQUFBZSxBQUViLEFBQXdCLEFBQ3hCLEFBQ0EiLCJmaWxlIjoiQWJvdXQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==