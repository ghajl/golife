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

var _jsxFileName = 'C:\\folder\\new\\gol\\pages\\_document.js?entry'; //  weak

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _getContext = require('../styles/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import stylesheet from 'rc-slider/assets/index.css';
var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);
    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'en', dir: 'ltr', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'My page'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: this.props.stylesContext.theme.palette.primary[500], __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans|Codystar|Julius+Sans+One|Montserrat+Alternates|Oxygen|Playfair+Display+SC|Press+Start+2P|Syncopate|VT323',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_document.Main, { className: 'alma', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })));
    }
  }]);
  return MyDocument;
}(_document2.default);

MyDocument.getInitialProps = function (ctx) {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context to collected side effects.
  var context = (0, _getContext2.default)();
  var page = ctx.renderPage(function (Component) {
    return function (props) {
      return _react2.default.createElement(_JssProvider2.default, { registry: context.sheetsRegistry, jss: context.jss, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })));
    };
  });

  return (0, _extends3.default)({}, page, {
    stylesContext: context,
    styles: _react2.default.createElement('style', {
      id: 'jss-server-side'
      // eslint-disable-next-line react/no-danger
      , dangerouslySetInnerHTML: { __html: context.sheetsRegistry.toString() },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    })
  });
};

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiTXlEb2N1bWVudCIsInByb3BzIiwic3R5bGVzQ29udGV4dCIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicGFnZSIsImN0eCIsInJlbmRlclBhZ2UiLCJzaGVldHNSZWdpc3RyeSIsImpzcyIsInN0eWxlcyIsIl9faHRtbCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0VBQUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7SSxBQUNNOzs7Ozs7Ozs7OzZCQUNLLEFBQ1A7NkJBQ0UsY0FBQSxVQUFNLE1BQU4sQUFBVyxNQUFLLEtBQWhCLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSx3QkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG9EQUFNLFNBQU4sQUFBYztvQkFBZDtzQkFGRixBQUVFLEFBRUE7QUFGQTs7Y0FFQSxBQUNPLEFBQ0w7aUJBRkYsQUFHSTs7b0JBSEo7c0JBSkYsQUFJRSxBQVVBO0FBVkE7QUFDRSxrREFTSSxLQUFOLEFBQVUsWUFBVyxNQUFyQixBQUEwQjtvQkFBMUI7c0JBZEYsQUFjRSxBQUVBO0FBRkE7a0RBRU0sTUFBTixBQUFXLGVBQWMsU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsTUFBekIsQUFBK0IsUUFBL0IsQUFBdUMsUUFBekUsQUFBa0MsQUFBK0M7b0JBQWpGO3NCQWhCRixBQWdCRSxBQUdBO0FBSEE7O2FBR0EsQUFDTSxBQUNKO2NBRkYsQUFFTzs7b0JBRlA7c0JBbkJGLEFBbUJFLEFBSUE7QUFKQTtBQUNFO2FBR0YsQUFDSyxBQUNMO2NBRkEsQUFFSzs7b0JBRkw7c0JBeEJKLEFBQ0UsQUF1QkUsQUFNQTtBQU5BO0FBQ0MsMkJBS0QsY0FBQTs7b0JBQUE7c0JBQUEsQUFHQTtBQUhBO0FBQUEseURBR00sV0FBTixBQUFnQjtvQkFBaEI7c0JBSEEsQUFHQSxBQUVBO0FBRkE7OztvQkFFQTtzQkFwQ04sQUFDRSxBQThCSSxBQUtBLEFBTVA7QUFOTztBQUFBOzs7Ozs7QUFTVixXQUFBLEFBQVcsa0JBQWtCLGVBQU8sQUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtNQUFNLFVBQVUsaUJBQWhCLEFBQ0E7TUFBTSxXQUFPLEFBQUksV0FBVyxxQkFBQTtXQUFhLGlCQUFBOzZCQUN2Qyw0QkFBQSxXQUFhLFVBQVUsUUFBdkIsQUFBK0IsZ0JBQWdCLEtBQUssUUFBcEQsQUFBNEQ7b0JBQTVEO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGdDQUNFLEFBQUMsc0NBQUQsQUFBZTs7b0JBQWY7c0JBRnFDLEFBQ3ZDLEFBQ0U7QUFBQTtBQUFBO0FBRndCO0FBQTVCLEFBQWEsQUFNYixHQU5hOztvQ0FNYixBQUNLO21CQURMLEFBRWlCLEFBQ2Y7O1VBRU8sQUFDSDtBQUZGO0FBQ0UsUUFFQSx5QkFBeUIsRUFBRSxRQUFRLFFBQUEsQUFBUSxlQUg3QyxBQUcyQixBQUFVLEFBQXVCOztrQkFINUQ7b0JBSkosQUFJSSxBQU9MO0FBUEs7S0FBQTtBQUZGO0FBNUJKOztrQkF1Q2UsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==