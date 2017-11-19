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

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _getContext = require('../styles/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\pages\\_document.js?entry';
//  weak

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
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
          lineNumber: 73
        }
      }, _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
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
        lineNumber: 82
      }
    })
  });
};

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkpzc1Byb3ZpZGVyIiwiZ2V0Q29udGV4dCIsIk15RG9jdW1lbnQiLCJwcm9wcyIsInN0eWxlc0NvbnRleHQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInBhZ2UiLCJjdHgiLCJyZW5kZXJQYWdlIiwic2hlZXRzUmVnaXN0cnkiLCJqc3MiLCJzdHlsZXMiLCJfX2h0bWwiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUFMUDs7QUFNQTs7SSxBQUNNOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQOzZCQUNFLGNBQUEsVUFBTSxNQUFOLEFBQVcsTUFBSyxLQUFoQixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG9EQUFNLFNBQU4sQUFBYztvQkFBZDtzQkFGRixBQUVFLEFBRUE7QUFGQTs7Y0FFQSxBQUNPLEFBQ0w7aUJBRkYsQUFHSTs7b0JBSEo7c0JBSkYsQUFJRSxBQVVBO0FBVkE7QUFDRSxrREFTSSxLQUFOLEFBQVUsWUFBVyxNQUFyQixBQUEwQjtvQkFBMUI7c0JBZEYsQUFjRSxBQUVBO0FBRkE7a0RBRU0sTUFBTixBQUFXLGVBQWMsU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsTUFBekIsQUFBK0IsUUFBL0IsQUFBdUMsUUFBekUsQUFBa0MsQUFBK0M7b0JBQWpGO3NCQWhCRixBQWdCRSxBQUdBO0FBSEE7O2FBR0EsQUFDTSxBQUNKO2NBRkYsQUFFTzs7b0JBRlA7c0JBbkJGLEFBbUJFLEFBSUE7QUFKQTtBQUNFO2FBR0YsQUFDSyxBQUNMO2NBRkEsQUFFSzs7b0JBRkw7c0JBeEJKLEFBQ0UsQUF1QkUsQUFNQTtBQU5BO0FBQ0MsMkJBS0QsY0FBQTs7b0JBQUE7c0JBQUEsQUFHQTtBQUhBO0FBQUEseUJBR0EsQUFBQzs7b0JBQUQ7c0JBSEEsQUFHQSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFuQ04sQUFDRSxBQThCSSxBQUlBLEFBSVA7QUFKTztBQUFBOzs7OztBLEFBckNlOztBQTRDekIsV0FBQSxBQUFXLGtCQUFrQixlQUFPLEFBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7TUFBTSxVQUFOLEFBQWdCLEFBQ2hCO01BQU0sV0FBTyxBQUFJLFdBQVcscUJBQUE7V0FBYSxpQkFBQTs2QkFDdkMsQUFBQyx1Q0FBWSxVQUFVLFFBQXZCLEFBQStCLGdCQUFnQixLQUFLLFFBQXBELEFBQTREO29CQUE1RDtzQkFBQSxBQUNFO0FBREY7T0FBQSxnQ0FDRSxBQUFDLHNDQUFELEFBQWU7O29CQUFmO3NCQUZxQyxBQUN2QyxBQUNFO0FBQUE7QUFBQTtBQUZ3QjtBQUE1QixBQUFhLEFBTWIsR0FOYTs7b0NBTWIsQUFDSzttQkFETCxBQUVpQixBQUNmOztVQUVPLEFBQ0g7QUFGRjtBQUNFLFFBRUEseUJBQXlCLEVBQUUsUUFBUSxRQUFBLEFBQVEsZUFIN0MsQUFHMkIsQUFBVSxBQUF1Qjs7a0JBSDVEO29CQUpKLEFBSUksQUFPTDtBQVBLO0tBQUE7QUFGRjtBQTVCSixBQXVDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==