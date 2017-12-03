'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _recompose = require('recompose');

var _About = require('../components/About');

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEFib3V0LmpzIl0sIm5hbWVzIjpbIm1hcERpc3BhdGNoVG9Qcm9wcyIsInNldFN0b3BwZWQiLCJzdG9wcGVkIiwibmFtZSIsImRpc3BhdGNoIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUlBOztBQUNBOzs7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUtBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztnQkFDYyxvQkFBQSxBQUFDLFNBQUQsQUFBVSxNQUFTLEFBQzlCO2VBQVMseUJBQUEsQUFBVyxTQUFwQixBQUFTLEFBQW9CLEFBQzdCO0FBSEgsQUFBTyxBQU1SOztBQU5RLEFBQ0w7QUFGSjs7a0JBVWUsd0JBQ2IsK0JBRGEsQUFDYixBQUFlLDRDQUNQLGlCQUFBO1NBQUEsQUFBUztBQUFqQixDQUFBLEVBRmEsQUFFYixBQUF3Qiw4QyIsImZpbGUiOiJBYm91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9