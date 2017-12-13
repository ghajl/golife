'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Generation.js';

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _colors = require('../helpers/colors');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Generation = function Generation(_ref) {
  var generationCount = _ref.generationCount;

  return _react2.default.createElement('div', {
    className: 'jsx-1755330407' + ' ' + 'generation',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, generationCount, _react2.default.createElement(_style2.default, {
    styleId: '1755330407',
    css: '.generation{color:' + _colors.colors.GENERATION + ';font-size:1.5em;text-align:right;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdlbmVyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3NCLEFBR3lDLG1DQUNuQixnQkFDTyxpQkFDWiIsImZpbGUiOiJjb21wb25lbnRzXFxHZW5lcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtjb2xvcnMgYXMgY29sb3J9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcblxyXG5jb25zdCBHZW5lcmF0aW9uID0oe2dlbmVyYXRpb25Db3VudH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRpb25cIj5cclxuXHQgICAgICBcdHtnZW5lcmF0aW9uQ291bnR9XHJcblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZ2VuZXJhdGlvbiB7XHJcblx0XHRcdFx0XHRjb2xvcjogJHtjb2xvci5HRU5FUkFUSU9OfTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41ZW07XHJcblx0XHRcdCAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0oe2dlbmVyYXRpb25Db3VudH0pID0+ICh7Z2VuZXJhdGlvbkNvdW50fSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdlbmVyYXRpb24pKTtcclxuXHJcblxyXG5HZW5lcmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICBnZW5lcmF0aW9uQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuIl19 */\n/*@ sourceURL=components\\Generation.js */'
  }));
};
var mapStateToProps = function mapStateToProps(_ref2) {
  var generationCount = _ref2.generationCount;
  return { generationCount: generationCount };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Generation);

Generation.propTypes = {
  generationCount: _propTypes2.default.number.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdlbmVyYXRpb24uanMiXSwibmFtZXMiOlsiR2VuZXJhdGlvbiIsImdlbmVyYXRpb25Db3VudCIsIkdFTkVSQVRJT04iLCJtYXBTdGF0ZVRvUHJvcHMiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBR0EsSUFBTSxhQUFZLFNBQVosQUFBWSxpQkFBdUI7TUFBckIsQUFBcUIsdUJBQXJCLEFBQXFCLEFBRXJDOzt5QkFDQyxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0k7QUFESjtBQUFBLEdBQUEsRUFBQTthQUFBO2dDQUlTLGVBSlQsQUFJZSxhQUxoQixBQUNDLEFBWUo7QUFaSTtBQUhMO0FBZ0JBLElBQU0sa0JBQWlCLFNBQWpCLEFBQWlCLHVCQUFBO01BQUEsQUFBRSx3QkFBRixBQUFFO1NBQXNCLEVBQUMsaUJBQXpCLEFBQXdCO0FBQS9DOztrQkFFZ0IseUJBQUEsQUFBUSxpQkFBUixBQUF5QixBOztBQUd6QyxXQUFBLEFBQVc7bUJBQ1Esb0JBQUEsQUFBVSxPQUQ3QixBQUF1QixBQUNhO0FBRGIsQUFDckIiLCJmaWxlIjoiR2VuZXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9