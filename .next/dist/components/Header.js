'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Header.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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
            lineNumber: 78
        }
    }, isSmall ? _react2.default.createElement('div', { className: classes.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, _react2.default.createElement('span', { className: classes.gameName, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, 'GoL')))) : _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, _react2.default.createElement('a', { className: classes.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, _react2.default.createElement('span', { className: classes.authorName, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, 'John Conway`s'), _react2.default.createElement('span', { className: classes.gameName, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, 'Game of Life')))), props.url.pathname === '/' ? _react2.default.createElement('div', { className: classes.about, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, _react2.default.createElement('span', { className: classes.active, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, 'Play'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, 'Read'))) : _react2.default.createElement('div', { className: classes.about, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, 'Play')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement('span', { className: classes.active, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, 'Read')))));
};

exports.default = (0, _reactJss2.default)(styles)(Header);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJuYXYiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwicGFkZGluZyIsInRyYW5zaXRpb24iLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJhdXRob3JOYW1lIiwiZ2FtZU5hbWUiLCJhYm91dCIsImFjdGl2ZSIsIkhlYWRlciIsInByb3BzIiwiY2xhc3NlcyIsImlzU21hbGwiLCJzY3JlZW4iLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJwYXRobmFtZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIm51bWJlciIsImhlaWdodCIsInJhdGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBSUEsSUFBTTs7O2lCQUNHLEFBR1EsQUFDVDtrQkFKQyxBQUlTLEFBQ1Y7MEJBTEMsQUFLaUIsQUFDbEI7d0JBTkMsQUFNZSxBQUNoQjs7bUJBQWEsQUFDRixBQUVQOztxQkFIUyxBQUdBLEFBQ1Q7cUJBSlMsQUFJQSxBQUNUO3dCQUxTLEFBS0csQUFDWjt3QkFOUyxBQU1HLEFBQ1o7OzRCQVBTLEFBT0MsQUFDTSxBQUVoQjtBQUhVLEFBQ047O3VCQUdPLEFBQ1A7QUFwQkQsQUFDTixBQU9ZLEFBVUUsQUFRbkI7QUFSbUIsQUFDUDtBQVhLLEFBQ1Q7O0FBUkgsQUFHRDs7O29CQXNCRyxBQUVTLEFBQ1o7MEJBSEcsQUFHZSxBQUNsQjtrQkFKRyxBQUlPLEFBQ1Y7O3NCQUxHLEFBSzBCLEFBQ2YsQUFFZDtBQUg2QixBQUN6Qjs7OEJBaENHLEFBMEJKLEFBUTBCLEFBQ1AsQUFHMUI7QUFKaUMsQUFDekI7QUFURCxBQUVIOztlQTVCTyxBQXNDQyxBQUNELEFBRVg7QUFIWSxBQUNSOztlQXZDTyxBQXlDRCxBQUNDLEFBRVg7QUFIVSxBQUNOOztpQkFFRyxBQUNNLEFBQ1Q7b0JBRkcsQUFFUyxBQUNaOzs7dUJBRWUsQUFDUDtBQU5MLEFBR1UsQUFDRSxBQU1mO0FBTmUsQUFDUDtBQUZLLEFBQ1Q7O2tCQUpELEFBVU8sQUFFVjs7O3NCQXhETyxBQTRDSixBQVkwQixBQUNmLEFBR2xCO0FBSmlDLEFBQ3pCO0FBYkQsQUFDSDs7ZUE3Q1IsQUFBZSxBQTRESCxBQUNPO0FBRFAsQUFDQTtBQTdERyxBQUNYOztBQWdFSixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFVLEFBQ2xCO1FBQU0sVUFBVSxNQUFoQixBQUFzQixBQUN0QjtRQUFNLFVBQVUsTUFBQSxBQUFNLE9BQU4sQUFBYSxRQUE3QixBQUFxQyxBQUNyQztZQUFBLEFBQVEsSUFBSSxNQUFBLEFBQU0sSUFBTixBQUFVLGFBQXRCLEFBQW1DLEFBQ25DOzJCQUNBLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCO3NCQUF4Qjt3QkFBQSxBQUNLO0FBREw7S0FBQSw0QkFFSSxjQUFBLFNBQUssV0FBVyxRQUFoQixBQUF3QjtzQkFBeEI7d0JBQUEsQUFBK0I7QUFBL0I7S0FBQSxrQkFBK0IscUJBQUEsV0FBTSxVQUFOLE1BQWUsTUFBZixBQUFvQjtzQkFBcEI7d0JBQUEsQUFFM0I7QUFGMkI7dUJBRTNCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUc7QUFBSDtBQUFBLHVCQUFHLGNBQUEsVUFBTSxXQUFXLFFBQWpCLEFBQXlCO3NCQUF6Qjt3QkFBQTtBQUFBO09BSE4sQUFDRCxBQUErQixBQUUzQixBQUFHLDRCQUdQLGNBQUE7O3NCQUFBO3dCQUFBLEFBQU07QUFBTjtBQUFBLEtBQUEsa0JBQU0scUJBQUEsV0FBTSxVQUFOLE1BQWUsTUFBZixBQUFvQjtzQkFBcEI7d0JBQUEsQUFDRjtBQURFO3VCQUNGLGNBQUEsT0FBRyxXQUFXLFFBQWQsQUFBc0I7c0JBQXRCO3dCQUFBLEFBQTZCO0FBQTdCO3VCQUE2QixjQUFBLFVBQU0sV0FBVyxRQUFqQixBQUF5QjtzQkFBekI7d0JBQUE7QUFBQTtPQUE3QixBQUE2QixBQUM3QixrQ0FBQSxjQUFBLFVBQU0sV0FBVyxRQUFqQixBQUF5QjtzQkFBekI7d0JBQUE7QUFBQTtPQVRSLEFBT0ksQUFBTSxBQUNGLEFBQ0EsQUFLSCwwQkFBQSxBQUFNLElBQU4sQUFBVSxhQUFWLEFBQXVCLHNCQUNwQixjQUFBLFNBQUssV0FBVyxRQUFoQixBQUF3QjtzQkFBeEI7d0JBQUEsQUFDQTtBQURBO0tBQUEsa0JBQ0EscUJBQUEsV0FBTSxVQUFOLE1BQWUsTUFBZixBQUFvQjtzQkFBcEI7d0JBQUEsQUFBd0I7QUFBeEI7dUJBQXdCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUc7QUFBSDtBQUFBLHVCQUFHLGNBQUEsVUFBTSxXQUFXLFFBQWpCLEFBQXlCO3NCQUF6Qjt3QkFBQTtBQUFBO09BRDNCLEFBQ0EsQUFBd0IsQUFBRyxBQUMzQiwyQkFBQSxxQkFBQSxXQUFNLFVBQU4sTUFBZSxNQUFmLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUE2QjtBQUE3Qjt1QkFBNkIsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSGhDLEFBQ0csQUFFQSxBQUE2Qiw0QkFHN0IsY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0I7c0JBQXhCO3dCQUFBLEFBQ0E7QUFEQTtLQUFBLGtCQUNBLHFCQUFBLFdBQU0sVUFBTixNQUFlLE1BQWYsQUFBb0I7c0JBQXBCO3dCQUFBLEFBQXdCO0FBQXhCO3VCQUF3QixjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FEeEIsQUFDQSxBQUF3QixBQUN4QiwwQkFBQSxxQkFBQSxXQUFNLFVBQU4sTUFBZSxNQUFmLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUE2QjtBQUE3Qjt1QkFBNkIsY0FBQTs7c0JBQUE7d0JBQUEsQUFBRztBQUFIO0FBQUEsdUJBQUcsY0FBQSxVQUFNLFdBQVcsUUFBakIsQUFBeUI7c0JBQXpCO3dCQUFBO0FBQUE7T0F2QnhDLEFBQ0EsQUFvQlEsQUFFQSxBQUE2QixBQUFHLEFBTS9DO0FBakNEOztrQkFxQ2Usd0JBQUEsQUFBWSxRQUFaLEEsQUFBb0I7O0FBR25DLE9BQUEsQUFBTzthQUNNLG9CQUFBLEFBQVUsT0FESixBQUNXLEFBQzFCO2dDQUFRLEFBQVU7ZUFDUCxvQkFEYSxBQUNILEFBQ2pCO2dCQUFRLG9CQUZZLEFBRUYsQUFDbEI7ZUFBTyxvQkFMZixBQUFtQixBQUVQLEFBQWdCLEFBR0g7QUFIRyxBQUNwQixLQURJO0FBRk8sQUFDZjtBQU9KO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9