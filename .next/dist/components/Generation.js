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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Generation = function Generation(_ref) {
  var generationCount = _ref.generationCount;

  var generation = ("0000000" + generationCount).substr(-7).replace(/(\w)(\w)(\w)(\w)/, '$1:$2$3$4:');

  return _react2.default.createElement('div', {
    className: 'jsx-3510164456' + ' ' + 'generation',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, generation, _react2.default.createElement(_style2.default, {
    styleId: '3510164456',
    css: '.generation{color:rgba(1,111,185,.8);font-size:20px;text-align:left;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdlbmVyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXNCLEFBRytCLHlCQUNWLGVBQ08sZ0JBQ1YiLCJmaWxlIjoiY29tcG9uZW50c1xcR2VuZXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuY29uc3QgR2VuZXJhdGlvbiA9KHtnZW5lcmF0aW9uQ291bnR9KSA9PiB7XHJcblxyXG5cdGNvbnN0IGdlbmVyYXRpb24gPSAoXCIwMDAwMDAwXCIgKyBnZW5lcmF0aW9uQ291bnQpLnN1YnN0cigtNykucmVwbGFjZSgvKFxcdykoXFx3KShcXHcpKFxcdykvLCckMTokMiQzJDQ6Jyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHQgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0aW9uXCI+XHJcblx0ICAgICAgXHR7Z2VuZXJhdGlvbn1cclxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAuZ2VuZXJhdGlvbiB7XHJcblx0XHRcdFx0XHRjb2xvcjogcmdiYSgxLDExMSwxODUsLjgpO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHQgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9KHtnZW5lcmF0aW9uQ291bnR9KSA9PiAoe2dlbmVyYXRpb25Db3VudH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShHZW5lcmF0aW9uKSk7XHJcblxyXG5cclxuR2VuZXJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgZ2VuZXJhdGlvbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=components\\Generation.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdlbmVyYXRpb24uanMiXSwibmFtZXMiOlsiR2VuZXJhdGlvbiIsImdlbmVyYXRpb25Db3VudCIsImdlbmVyYXRpb24iLCJzdWJzdHIiLCJyZXBsYWNlIiwibWFwU3RhdGVUb1Byb3BzIiwicHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU0sYUFBWSxTQUFaLEFBQVksaUJBQXVCO01BQXJCLEFBQXFCLHVCQUFyQixBQUFxQixBQUV4Qzs7TUFBTSxhQUFhLENBQUMsWUFBRCxBQUFhLGlCQUFiLEFBQThCLE9BQU8sQ0FBckMsQUFBc0MsR0FBdEMsQUFBeUMsUUFBekMsQUFBaUQsb0JBQXBFLEFBQW1CLEFBQW9FLEFBRXBGOzt5QkFDQyxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0k7QUFESjtBQUFBLEdBQUEsRUFBQTthQUFBO1NBREQsQUFDQyxBQVlKO0FBWkk7QUFMTDtBQWtCQSxJQUFNLGtCQUFpQixTQUFqQixBQUFpQix1QkFBQTtNQUFBLEFBQUUsd0JBQUYsQUFBRTtTQUFzQixFQUFDLGlCQUF6QixBQUF3QjtBQUEvQzs7a0JBRWdCLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsQTs7QUFHekMsV0FBQSxBQUFXO21CQUNRLG9CQUFBLEFBQVUsT0FEN0IsQUFBdUIsQUFDYTtBQURiLEFBQ3JCIiwiZmlsZSI6IkdlbmVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==