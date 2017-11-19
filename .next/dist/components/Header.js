'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _withRoot = require('../components/withRoot');

var _withRoot2 = _interopRequireDefault(_withRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Header.js';
// import { NavLink } from 'react-router-dom';

// const isSmall = props.screen.width < 768;
// import browserHistory from 'history/createBrowserHistory';

// import { withStyles } from 'material-ui/styles';

// const history = browserHistory();


var styles = {
    nav: {

        display: 'flex',
        flexWrap: 'wrap',
        'text-transform': 'uppercase',
        justifyContent: 'space-between',
        '@global a': {
            color: '#A9A9A9',

            display: 'block',
            padding: '1em',
            transition: '.2s',
            fontFamily: 'Julius Sans One',
            fallbacks: {
                fontFamily: 'sans-serif'
            },
            '&:hover': {
                color: '#A2D729'
                // background: '#3b80d1',  
            }
        }

    },
    title: {

        fontWeight: 900,
        'text-transform': 'none',
        fontSize: '1.1em',
        '@media (min-width: 768px)': {
            fontSize: '1.5em'
        },
        '@media (min-width: 480px)': {
            'text-transform': 'uppercase'
        }
    },
    authorName: {
        color: '#011627'
    },
    gameName: {
        color: '#A2D729'
    },
    about: {
        display: 'flex',
        fontWeight: 900,
        '@global a': {
            '&:hover': {
                color: '#016FB9'
                // background: '#3b80d1',  
            }
        },

        fontSize: '1.1em',

        '@media (min-width: 768px)': {
            fontSize: '1.5em'
        }
    },
    active: {
        color: '#016FB9'
    }
};

var Header = function Header(props) {
    var classes = props.classes;
    var isSmall = props.screen.width < 480;
    console.log(props.url.pathname === '/');
    return _react2.default.createElement('div', { className: classes.nav, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, isSmall ? _react2.default.createElement('div', { className: classes.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }, _react2.default.createElement('span', { className: classes.gameName, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }, 'GoL')))) : _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, _react2.default.createElement('a', { className: classes.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, _react2.default.createElement('span', { className: classes.authorName, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, 'John Conway`s'), _react2.default.createElement('span', { className: classes.gameName, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, 'Game of Life')))), props.url.pathname === '/' ? _react2.default.createElement('div', { className: classes.about, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement('span', { className: classes.active, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, 'Play'))), _react2.default.createElement(_link2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, 'Read'))) : _react2.default.createElement('div', { className: classes.about, __source: {
            fileName: _jsxFileName,
            lineNumber: 105
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    }, 'Play')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, _react2.default.createElement('span', { className: classes.active, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, 'Read')))));
};

exports.default = (0, _reactJss2.default)(styles)((0, _pure2.default)(Header));


Header.propTypes = {
    classes: _propTypes2.default.object.isRequired,
    screen: _propTypes2.default.shape({
        width: _propTypes2.default.number,
        height: _propTypes2.default.number,
        ratio: _propTypes2.default.number
    })
};
// <Link href="/about">Read</Link>
// const linkStyle = {
//   marginRight: 15
// }

// const Header = () => (
//     <div>
//         <Link href="/">
//           <a style={linkStyle}>Home</a>
//         </Link>
//         <Link href="/about">
//           <a style={linkStyle}>About</a>
//         </Link>
//     </div>
// )

// export default Header
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImluamVjdFNoZWV0IiwiUHJvcFR5cGVzIiwiTGluayIsInB1cmUiLCJ3aXRoUm9vdCIsInN0eWxlcyIsIm5hdiIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsImZvbnRGYW1pbHkiLCJmYWxsYmFja3MiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImF1dGhvck5hbWUiLCJnYW1lTmFtZSIsImFib3V0IiwiYWN0aXZlIiwiSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwiaXNTbWFsbCIsInNjcmVlbiIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsInVybCIsInBhdGhuYW1lIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwibnVtYmVyIiwiaGVpZ2h0IiwicmF0aW8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUdQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7Ozs7OztBQVJQOztBQUdBO0FBQ0E7O0FBR0E7O0FBRUE7OztBQUlBLElBQU07OztpQkFDRyxBQUdRLEFBQ1Q7a0JBSkMsQUFJUyxBQUNWOzBCQUxDLEFBS2lCLEFBQ2xCO3dCQU5DLEFBTWUsQUFDaEI7O21CQUFhLEFBQ0YsQUFFUDs7cUJBSFMsQUFHQSxBQUNUO3FCQUpTLEFBSUEsQUFDVDt3QkFMUyxBQUtHLEFBQ1o7d0JBTlMsQUFNRyxBQUNaOzs0QkFQUyxBQU9DLEFBQ00sQUFFaEI7QUFIVSxBQUNOOzt1QkFHTyxBQUNQO0FBcEJELEFBQ04sQUFPWSxBQVVFLEFBUW5CO0FBUm1CLEFBQ1A7QUFYSyxBQUNUOztBQVJILEFBR0Q7OztvQkFzQkcsQUFFUyxBQUNwQjswQkFIVyxBQUdPLEFBQ1Y7a0JBSkcsQUFJTyxBQUNWOztzQkFMRyxBQUswQixBQUNmLEFBRWQ7QUFINkIsQUFDekI7OzhCQWhDRyxBQTBCSixBQVEwQixBQUNQLEFBRzFCO0FBSmlDLEFBQ3pCO0FBVEQsQUFFSDs7ZUE1Qk8sQUFzQ0MsQUFDRCxBQUVYO0FBSFksQUFDUjs7ZUF2Q08sQUF5Q0QsQUFDQyxBQUVYO0FBSFUsQUFDTjs7aUJBRUcsQUFDTSxBQUNUO29CQUZHLEFBRVMsQUFDWjs7O3VCQUVlLEFBQ1A7QUFOTCxBQUdVLEFBQ0UsQUFNZjtBQU5lLEFBQ1A7QUFGSyxBQUNUOztrQkFKRCxBQVVPLEFBRVY7OztzQkF4RE8sQUE0Q0osQUFZMEIsQUFDZixBQUdsQjtBQUppQyxBQUN6QjtBQWJELEFBQ0g7O2VBN0NSLEFBQWUsQUE0REgsQUFDTztBQURQLEFBQ0E7QUE3REcsQUFDWDs7QUFnRUosSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBVSxBQUNsQjtRQUFNLFVBQVUsTUFBaEIsQUFBc0IsQUFDdEI7UUFBTSxVQUFVLE1BQUEsQUFBTSxPQUFOLEFBQWEsUUFBN0IsQUFBcUMsQUFDckM7WUFBQSxBQUFRLElBQUksTUFBQSxBQUFNLElBQU4sQUFBVSxhQUF0QixBQUFtQyxBQUNuQzsyQkFDQSxjQUFBLFNBQUssV0FBVyxRQUFoQixBQUF3QjtzQkFBeEI7d0JBQUEsQUFDSztBQURMO0tBQUEsNEJBRUksY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0I7c0JBQXhCO3dCQUFBLEFBQStCO0FBQS9CO0tBQUEsa0JBQStCLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBRTNCO0FBRjJCO3VCQUUzQixjQUFBOztzQkFBQTt3QkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxjQUFBLFVBQU0sV0FBVyxRQUFqQixBQUF5QjtzQkFBekI7d0JBQUE7QUFBQTtPQUhOLEFBQ0QsQUFBK0IsQUFFM0IsQUFBRyw0QkFHUCxjQUFBOztzQkFBQTt3QkFBQSxBQUFNO0FBQU47QUFBQSxLQUFBLGtCQUFNLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQ0Y7QUFERTt1QkFDRixjQUFBLE9BQUcsV0FBVyxRQUFkLEFBQXNCO3NCQUF0Qjt3QkFBQSxBQUE2QjtBQUE3Qjt1QkFBNkIsY0FBQSxVQUFNLFdBQVcsUUFBakIsQUFBeUI7c0JBQXpCO3dCQUFBO0FBQUE7T0FBN0IsQUFBNkIsQUFDN0Isa0NBQUEsY0FBQSxVQUFNLFdBQVcsUUFBakIsQUFBeUI7c0JBQXpCO3dCQUFBO0FBQUE7T0FUUixBQU9JLEFBQU0sQUFDRixBQUNBLEFBS0gsMEJBQUEsQUFBTSxJQUFOLEFBQVUsYUFBVixBQUF1QixzQkFDcEIsY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0I7c0JBQXhCO3dCQUFBLEFBQ0E7QUFEQTtLQUFBLGtCQUNBLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQWU7QUFBZjt1QkFBZSxjQUFBOztzQkFBQTt3QkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxjQUFBLFVBQU0sV0FBVyxRQUFqQixBQUF5QjtzQkFBekI7d0JBQUE7QUFBQTtPQURsQixBQUNBLEFBQWUsQUFBRyxBQUNsQiwyQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUFvQjtBQUFwQjt1QkFBb0IsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSHZCLEFBQ0csQUFFQSxBQUFvQiw0QkFHcEIsY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0I7c0JBQXhCO3dCQUFBLEFBQ0E7QUFEQTtLQUFBLGtCQUNBLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQWU7QUFBZjt1QkFBZSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FEZixBQUNBLEFBQWUsQUFDZiwwQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUFvQjtBQUFwQjt1QkFBb0IsY0FBQTs7c0JBQUE7d0JBQUEsQUFBRztBQUFIO0FBQUEsdUJBQUcsY0FBQSxVQUFNLFdBQVcsUUFBakIsQUFBeUI7c0JBQXpCO3dCQUFBO0FBQUE7T0F2Qi9CLEFBQ0EsQUFvQlEsQUFFQSxBQUFvQixBQUFHLEFBTXRDO0FBakNELEFBcUNBOztrQkFBZSx3QkFBQSxBQUFZLFFBQVEsb0JBQW5DLEFBQWUsQUFBb0IsQUFBSzs7O0FBR3hDLE9BQUEsQUFBTzthQUNNLG9CQUFBLEFBQVUsT0FESixBQUNXLEFBQzFCO2dDQUFRLEFBQVU7ZUFDUCxvQkFEYSxBQUNILEFBQ2pCO2dCQUFRLG9CQUZZLEFBRUYsQUFDbEI7ZUFBTyxvQkFMZixBQUFtQixBQUVQLEFBQWdCLEFBR0g7QUFIRyxBQUNwQixLQURJO0FBRk8sQUFDZjtBQU9KO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9