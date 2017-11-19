'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _getContext = require('../styles/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\withRoot.js';
/* eslint-disable flowtype/require-valid-file-annotation */

// Apply some reset
var styles = function styles(theme) {
  return {
    '@global': {
      html: {
        background: 'white',
        // WebkitFontSmoothing: 'antialiased', // Antialiasing.
        // MozOsxFontSmoothing: 'grayscale', // Antialiasing.
        height: '100%',
        fontSize: '14px'
      },
      body: {

        fontFamily: 'Century Gothic',
        fallbacks: {
          fontFamily: 'sans-serif'
        },
        // font: 14px "Century Gothic", Futura, sans-serif;
        // height: '100%',
        margin: 0,
        paddingTop: '60px'
      },
      a: {
        'text-decoration': 'none !important',
        outline: 'none'
      },
      ol: {
        paddingLeft: '30px'

      },
      ul: {
        paddingLeft: '30px'

      },
      label: {
        fontWeight: 'normal !important'
      },
      navbar: {
        overflow: 'hidden',
        boxShadow: [0, 3, 15, -6, '#222'],
        position: 'fixed',
        top: 0,
        width: '100%',
        'z-index': 3,
        backgroundColor: "#fff"
      }
    }
  };
};

var AppWrapper = function AppWrapper(props) {
  return props.children;
};

AppWrapper = (0, _styles.withStyles)(styles)(AppWrapper);

function withRoot(BaseComponent) {
  var WithRoot = function (_Component) {
    (0, _inherits3.default)(WithRoot, _Component);

    function WithRoot() {
      (0, _classCallCheck3.default)(this, WithRoot);

      return (0, _possibleConstructorReturn3.default)(this, (WithRoot.__proto__ || (0, _getPrototypeOf2.default)(WithRoot)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithRoot, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.styleContext = (0, _getContext2.default)();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_styles.MuiThemeProvider, {
          theme: this.styleContext.theme,
          sheetsManager: this.styleContext.sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement(AppWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }))));
      }
    }], [{
      key: 'getInitialProps',
      value: function getInitialProps(ctx) {
        if (BaseComponent.getInitialProps) {
          return BaseComponent.getInitialProps(ctx);
        }

        return {};
      }
    }]);

    return WithRoot;
  }(_react.Component);

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withRoot');
  }

  return WithRoot;
}

exports.default = withRoot;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHdpdGhSb290LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyIsIk11aVRoZW1lUHJvdmlkZXIiLCJ3cmFwRGlzcGxheU5hbWUiLCJnZXRDb250ZXh0Iiwic3R5bGVzIiwiaHRtbCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJmb250U2l6ZSIsImJvZHkiLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImEiLCJvdXRsaW5lIiwib2wiLCJwYWRkaW5nTGVmdCIsInVsIiwibGFiZWwiLCJmb250V2VpZ2h0IiwibmF2YmFyIiwib3ZlcmZsb3ciLCJib3hTaGFkb3ciLCJwb3NpdGlvbiIsInRvcCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiQXBwV3JhcHBlciIsInByb3BzIiwiY2hpbGRyZW4iLCJ3aXRoUm9vdCIsIkJhc2VDb21wb25lbnQiLCJXaXRoUm9vdCIsInN0eWxlQ29udGV4dCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInRoZW1lIiwic2hlZXRzTWFuYWdlciIsImN0eCIsImdldEluaXRpYWxQcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFZOztBQUNyQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7OztBQUxQOztBQU9BO0FBQ0EsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBOzs7O29CQUVELEFBQ1UsQUFDWjtBQUNBO0FBQ0E7Z0JBSkUsQUFJTSxBQUNSO2tCQU5HLEFBQ0QsQUFLUSxBQUVkO0FBUE0sQUFDRjs7O29CQU1FLEFBRVUsQUFDWjs7c0JBSEUsQUFHUSxBQUNNLEFBRWQ7QUFIUSxBQUNOO0FBR0Y7QUFDRjtnQkFSRSxBQVFLLEFBQ1A7b0JBakJHLEFBUUQsQUFTVSxBQUVoQjtBQVhNLEFBRUY7OzJCQVNELEFBQ29CLEFBQ25CO2lCQXJCRyxBQW1CSixBQUVVLEFBRWI7QUFKRyxBQUNDOztxQkFwQkcsQUF1QkgsQUFDYSxBQUlqQjs7QUFMSSxBQUNBOztxQkF4QkcsQUE0QkgsQUFDYSxBQUlqQjs7QUFMSSxBQUNBOztvQkE3QkcsQUFpQ0EsQUFDUyxBQUVwQjtBQUhXLEFBQ0g7O2tCQUVBLEFBQ00sQUFDVjttQkFBVyxDQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxJQUFJLENBQVgsQUFBWSxHQUZuQixBQUVPLEFBQWUsQUFDMUI7a0JBSEksQUFHTSxBQUNWO2FBSkksQUFJQyxBQUNMO2VBTEksQUFLRyxBQUNOO21CQU5HLEFBTVEsQUFDWjt5QkE1Q08sQUFBVSxBQUNWLEFBb0NILEFBT1k7QUFQWixBQUNKO0FBckNPLEFBQ1A7QUFGaUIsQUFDckI7QUFESjs7QUFpREEsSUFBSSxhQUFhLDJCQUFBO1NBQVMsTUFBVCxBQUFlO0FBQWhDOztBQUVBLGFBQWEsd0JBQUEsQUFBVyxRQUF4QixBQUFhLEFBQW1COztBQUVoQyxTQUFBLEFBQVMsU0FBVCxBQUFrQixlQUFlO01BQUEsQUFDekIsaUNBRHlCO3NDQUFBOzt3QkFBQTswQ0FBQTs7d0lBQUE7QUFBQTs7O1dBQUE7MkNBVVIsQUFDbkI7YUFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDckI7QUFaNEI7QUFBQTtXQUFBOzBDQWNULEFBQ2xCO0FBQ0E7WUFBTSxZQUFZLFNBQUEsQUFBUyxjQUEzQixBQUFrQixBQUF1QixBQUN6QztZQUFJLGFBQWEsVUFBakIsQUFBMkIsWUFBWSxBQUNyQztvQkFBQSxBQUFVLFdBQVYsQUFBcUIsWUFBckIsQUFBaUMsQUFDbEM7QUFDRjtBQXBCNEI7QUFBQTtXQUFBOytCQXNCcEIsQUFDUDsrQkFDRSxBQUFDO2lCQUNRLEtBQUEsQUFBSyxhQURkLEFBQzJCLEFBQ3pCO3lCQUFlLEtBQUEsQUFBSyxhQUZ0QixBQUVtQzs7c0JBRm5DO3dCQUFBLEFBSUU7QUFKRjtBQUNFLFNBREYsa0JBSUcsY0FBRDs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEseUNBQ0UsQUFBQywwQ0FBa0IsS0FBbkIsQUFBd0I7O3NCQUF4Qjt3QkFOTixBQUNFLEFBSUUsQUFDRSxBQUlQO0FBSk87QUFBQTtBQTdCcUI7QUFBQTtXQUFBO3NDQUFBLEFBRU4sS0FBSyxBQUMxQjtZQUFJLGNBQUosQUFBa0IsaUJBQWlCLEFBQ2pDO2lCQUFPLGNBQUEsQUFBYyxnQkFBckIsQUFBTyxBQUE4QixBQUN0QztBQUVEOztlQUFBLEFBQU8sQUFDUjtBQVI0QjtBQUFBOztXQUFBO0FBQUEsQUFDUixBQW1DdkI7O01BQUksUUFBQSxBQUFRLElBQVIsQUFBWSxhQUFoQixBQUE2QixjQUFjLEFBQ3pDO2FBQUEsQUFBUyxjQUFjLCtCQUFBLEFBQWdCLGVBQXZDLEFBQXVCLEFBQStCLEFBQ3ZEO0FBRUQ7O1NBQUEsQUFBTyxBQUNSO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2l0aFJvb3QuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==