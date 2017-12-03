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

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\withRoot.js'; /* eslint-disable flowtype/require-valid-file-annotation */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _getContext = require('../styles/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
        // marginTop:'160px',
        // paddingTop: '60px', 
        display: 'flex',
        'flex-direction': 'column',
        height: '100%',
        '& > div:first-child': {
          height: '100%',
          flex: '1 0 auto',
          '& > div': {
            // height: '100%',
            // flex: '1 0 auto',
            '&:first-child': {
              height: '100%',
              // flex: '1 0 auto',
              '& > div': {
                height: '100%'
              }
            }
          }
        }
      },

      a: {
        'text-decoration': 'none !important',
        outline: 'none'

        // ol: {
        //     paddingLeft: '30px',


        // },
        // ul: {
        //     paddingLeft: '30px',


        // },
        // label: {
        //     fontWeight: 'normal !important',
        // },
        // navbar: {
        //     overflow: 'hidden',
        //     boxShadow: [0, 3, 15, -6, '#222'],
        //     position: 'fixed',
        //     top: 0,
        //     width: '100%',
        //      'z-index': 3,
        //     backgroundColor:"#fff",
        // },
      } }
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
            lineNumber: 109
          }
        }, _react2.default.createElement(AppWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHdpdGhSb290LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImh0bWwiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJib2R5IiwiZm9udEZhbWlseSIsImZhbGxiYWNrcyIsImRpc3BsYXkiLCJmbGV4IiwiYSIsIm91dGxpbmUiLCJBcHBXcmFwcGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIndpdGhSb290IiwiQmFzZUNvbXBvbmVudCIsIldpdGhSb290Iiwic3R5bGVDb250ZXh0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidGhlbWUiLCJzaGVldHNNYW5hZ2VyIiwiY3R4IiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRUFBQTs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7Ozs7O29CQUdELEFBQ1UsQUFDWjtBQUNBO0FBQ0E7Z0JBSkUsQUFJTSxBQUNSO2tCQU5HLEFBQ0QsQUFLUSxBQUVkO0FBUE0sQUFDRixPQUZHLEFBQ1A7OztvQkFPTSxBQUVVLEFBQ1o7O3NCQUhFLEFBR1EsQUFDTSxBQUVkO0FBSFEsQUFDTjtBQUdGO0FBQ0Y7QUFDQTtBQUNBO2lCQVZFLEFBVU8sQUFDRzswQkFYVixBQVc0QixBQUNsQjtnQkFaVixBQVlrQixBQUNwQjs7a0JBQXVCLEFBQ2IsQUFDUjtnQkFGcUIsQUFFZixBQUNOOztBQUVBO0FBQ0E7O3NCQUFpQixBQUNULEFBQ1I7QUFDQTs7d0JBOUJDLEFBUUQsQUFhcUIsQUFHVixBQUdNLEFBR04sQUFDRCxBQU9oQjtBQVJpQixBQUNUO0FBSmUsQUFDakI7QUFKVyxBQUNYO0FBSnFCLEFBQ3JCO0FBZEEsQUFFRjs7OzJCQTRCRCxBQUNvQixBQUNuQjtpQkFGRCxBQUVVLEFBR2I7O0FBQ0E7QUFHQTs7O0FBQ0E7QUFDQTtBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsRVcsQUFBVSxBQUVWO0FBc0NKLEFBQ0M7QUF6Q2EsQUFFckI7QUFGSjs7QUFzRUEsSUFBSSxhQUFhLDJCQUFBO1NBQVMsTUFBVCxBQUFlO0FBQWhDOztBQUVBLGFBQWEsd0JBQUEsQUFBVyxRQUF4QixBQUFhLEFBQW1COztBQUVoQyxTQUFBLEFBQVMsU0FBVCxBQUFrQixlQUFlO01BQUEsQUFDekIsaUNBRHlCO3NDQUFBOzt3QkFBQTswQ0FBQTt3SUFBQTtBQUFBOzs7V0FBQTsyQ0FVUixBQUNuQjthQUFBLEFBQUssZUFBZSxpQkFBcEIsQUFDRDtBQVo0QjtBQUFBO1dBQUE7MENBY1QsQUFDbEI7QUFDQTtZQUFNLFlBQVksU0FBQSxBQUFTLGNBQTNCLEFBQWtCLEFBQXVCLEFBQ3pDO1lBQUksYUFBYSxVQUFqQixBQUEyQixZQUFZLEFBQ3JDO29CQUFBLEFBQVUsV0FBVixBQUFxQixZQUFyQixBQUFpQyxBQUNsQztBQUNGO0FBcEI0QjtBQUFBO1dBQUE7K0JBc0JwQixBQUVQOzsrQkFFRSxzQkFBQTtpQkFDUyxLQUFBLEFBQUssYUFEZCxBQUMyQixBQUN6Qjt5QkFBZSxLQUFBLEFBQUssYUFGdEIsQUFFbUM7O3NCQUZuQzt3QkFBQSxBQUlFO0FBSkY7QUFDRSxTQURGLGtCQUlHLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLHlDQUNFLEFBQUMsMENBQWtCLEtBQW5CLEFBQXdCOztzQkFBeEI7d0JBUE4sQUFFRSxBQUlFLEFBQ0UsQUFLUDtBQUxPO0FBQUE7QUEvQnFCO0FBQUE7V0FBQTtzQ0FBQSxBQUVOLEtBQUssQUFDMUI7WUFBSSxjQUFKLEFBQWtCLGlCQUFpQixBQUNqQztpQkFBTyxjQUFBLEFBQWMsZ0JBQXJCLEFBQU8sQUFBOEIsQUFDdEM7QUFFRDs7ZUFBQSxBQUFPLEFBQ1I7QUFSNEI7QUFBQTtXQUFBO1dBdUMvQjs7TUFBSSxRQUFBLEFBQVEsSUFBUixBQUFZLGFBQWhCLEFBQTZCLGNBQWMsQUFDekM7YUFBQSxBQUFTLGNBQWMsK0JBQUEsQUFBZ0IsZUFBdkMsQUFBdUIsQUFBK0IsQUFDdkQ7QUFFRDs7U0FBQSxBQUFPLEFBQ1I7OztrQkFFYyxBIiwiZmlsZSI6IndpdGhSb290LmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=