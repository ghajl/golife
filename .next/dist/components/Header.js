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

var _colors = require('../helpers/colors');

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
            color: _colors.colors.HEADER_LINK_INACTIVE,

            display: 'block',
            padding: '1em',
            transition: '.2s',
            fontFamily: 'Julius Sans One',
            fallbacks: {
                fontFamily: 'sans-serif'
                // '&:hover': {
                //     color: color.HEADER_LINK_ACTIVE,
                //     // background: '#3b80d1',  
                // }
            } }

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
        color: _colors.colors.TITLE_AUTHOR
    },
    gameName: {
        color: _colors.colors.TITLE_GAME
    },
    about: {
        display: 'flex',
        fontWeight: 900,
        '@global a': {
            '&:hover': {
                color: _colors.colors.HEADER_LINK_ACTIVE
                // background: '#3b80d1',  
            }
        },

        fontSize: '1.1em',

        '@media (min-width: 768px)': {
            fontSize: '1.5em'
        }
    },
    active: {
        color: _colors.colors.HEADER_LINK_ACTIVE
    }
};

var Header = function Header(props) {
    var classes = props.classes;
    var isSmall = props.screen.width < 480;
    console.log(props.url.pathname === '/');
    return _react2.default.createElement('div', { className: classes.nav, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }, isSmall ? _react2.default.createElement('div', { className: classes.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, _react2.default.createElement('span', { className: classes.gameName, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, 'GoL')))) : _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, _react2.default.createElement('a', { className: classes.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement('span', { className: classes.authorName, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, 'John Conway`s'), _react2.default.createElement('span', { className: classes.gameName, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }, 'Game of Life')))), props.url.pathname === '/' ? _react2.default.createElement('div', { className: classes.about, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, _react2.default.createElement('span', { className: classes.active, __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, 'Play'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, 'Read'))) : _react2.default.createElement('div', { className: classes.about, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, 'Play')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJuYXYiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwiSEVBREVSX0xJTktfSU5BQ1RJVkUiLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsImZvbnRGYW1pbHkiLCJmYWxsYmFja3MiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImF1dGhvck5hbWUiLCJUSVRMRV9BVVRIT1IiLCJnYW1lTmFtZSIsIlRJVExFX0dBTUUiLCJhYm91dCIsIkhFQURFUl9MSU5LX0FDVElWRSIsImFjdGl2ZSIsIkhlYWRlciIsInByb3BzIiwiY2xhc3NlcyIsImlzU21hbGwiLCJzY3JlZW4iLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJwYXRobmFtZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIm51bWJlciIsImhlaWdodCIsInJhdGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUEsSUFBTTs7O2lCQUNHLEFBR1EsQUFDVDtrQkFKQyxBQUlTLEFBQ1Y7MEJBTEMsQUFLaUIsQUFDbEI7d0JBTkMsQUFNZSxBQUNoQjs7bUJBQ1csZUFERSxBQUNJLEFBRWI7O3FCQUhTLEFBR0EsQUFDVDtxQkFKUyxBQUlBLEFBQ1Q7d0JBTFMsQUFLRyxBQUNaO3dCQU5TLEFBTUcsQUFDWjs7NEJBQVUsQUFDTSxBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQXJCRyxBQUNOLEFBT1ksQUFrQmpCO0FBWGtCLEFBQ04sYUFSSyxBQUNUOztBQVJILEFBR0Q7OztvQkFzQkcsQUFFUyxBQUNaOzBCQUhHLEFBR2UsQUFDbEI7a0JBSkcsQUFJTyxBQUNWOztzQkFMRyxBQUswQixBQUNmLEFBRWQ7QUFINkIsQUFDekI7OzhCQWhDRyxBQTBCSixBQVEwQixBQUNQLEFBRzFCO0FBSmlDLEFBQ3pCO0FBVEQsQUFFSDs7ZUFXTyxlQXZDQSxBQXNDQyxBQUNLLEFBRWpCO0FBSFksQUFDUjs7ZUFHTyxlQTFDQSxBQXlDRCxBQUNPLEFBRWpCO0FBSFUsQUFDTjs7aUJBRUcsQUFDTSxBQUNUO29CQUZHLEFBRVMsQUFDWjs7O3VCQUVlLGVBQU0sQUFDYjtBQU5MLEFBR1UsQUFDRSxBQU1mO0FBTmUsQUFDUDtBQUZLLEFBQ1Q7O2tCQUpELEFBVU8sQUFFVjs7O3NCQXhETyxBQTRDSixBQVkwQixBQUNmLEFBR2xCO0FBSmlDLEFBQ3pCO0FBYkQsQUFDSDs7ZUFnQlcsZUE3RG5CLEFBQWUsQUE0REgsQUFDYTtBQURiLEFBQ0E7QUE3REcsQUFDWDs7QUFnRUosSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBVSxBQUNsQjtRQUFNLFVBQVUsTUFBaEIsQUFBc0IsQUFDdEI7UUFBTSxVQUFVLE1BQUEsQUFBTSxPQUFOLEFBQWEsUUFBN0IsQUFBcUMsQUFDckM7WUFBQSxBQUFRLElBQUksTUFBQSxBQUFNLElBQU4sQUFBVSxhQUF0QixBQUFtQyxBQUNuQzsyQkFDQSxjQUFBLFNBQUssV0FBVyxRQUFoQixBQUF3QjtzQkFBeEI7d0JBQUEsQUFDSztBQURMO0tBQUEsNEJBRUksY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0I7c0JBQXhCO3dCQUFBLEFBQStCO0FBQS9CO0tBQUEsa0JBQStCLHFCQUFBLFdBQU0sVUFBTixNQUFlLE1BQWYsQUFBb0I7c0JBQXBCO3dCQUFBLEFBRTNCO0FBRjJCO3VCQUUzQixjQUFBOztzQkFBQTt3QkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxjQUFBLFVBQU0sV0FBVyxRQUFqQixBQUF5QjtzQkFBekI7d0JBQUE7QUFBQTtPQUhOLEFBQ0QsQUFBK0IsQUFFM0IsQUFBRyw0QkFHUCxjQUFBOztzQkFBQTt3QkFBQSxBQUFNO0FBQU47QUFBQSxLQUFBLGtCQUFNLHFCQUFBLFdBQU0sVUFBTixNQUFlLE1BQWYsQUFBb0I7c0JBQXBCO3dCQUFBLEFBQ0Y7QUFERTt1QkFDRixjQUFBLE9BQUcsV0FBVyxRQUFkLEFBQXNCO3NCQUF0Qjt3QkFBQSxBQUE2QjtBQUE3Qjt1QkFBNkIsY0FBQSxVQUFNLFdBQVcsUUFBakIsQUFBeUI7c0JBQXpCO3dCQUFBO0FBQUE7T0FBN0IsQUFBNkIsQUFDN0Isa0NBQUEsY0FBQSxVQUFNLFdBQVcsUUFBakIsQUFBeUI7c0JBQXpCO3dCQUFBO0FBQUE7T0FUUixBQU9JLEFBQU0sQUFDRixBQUNBLEFBS0gsMEJBQUEsQUFBTSxJQUFOLEFBQVUsYUFBVixBQUF1QixzQkFDcEIsY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0I7c0JBQXhCO3dCQUFBLEFBQ0E7QUFEQTtLQUFBLGtCQUNBLHFCQUFBLFdBQU0sVUFBTixNQUFlLE1BQWYsQUFBb0I7c0JBQXBCO3dCQUFBLEFBQXdCO0FBQXhCO3VCQUF3QixjQUFBOztzQkFBQTt3QkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxjQUFBLFVBQU0sV0FBVyxRQUFqQixBQUF5QjtzQkFBekI7d0JBQUE7QUFBQTtPQUQzQixBQUNBLEFBQXdCLEFBQUcsQUFDM0IsMkJBQUEscUJBQUEsV0FBTSxVQUFOLE1BQWUsTUFBZixBQUFvQjtzQkFBcEI7d0JBQUEsQUFBNkI7QUFBN0I7dUJBQTZCLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUhoQyxBQUNHLEFBRUEsQUFBNkIsNEJBRzdCLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCO3NCQUF4Qjt3QkFBQSxBQUNBO0FBREE7S0FBQSxrQkFDQSxxQkFBQSxXQUFNLFVBQU4sTUFBZSxNQUFmLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUF3QjtBQUF4Qjt1QkFBd0IsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRHhCLEFBQ0EsQUFBd0IsQUFDeEIsMEJBQUEscUJBQUEsV0FBTSxVQUFOLE1BQWUsTUFBZixBQUFvQjtzQkFBcEI7d0JBQUEsQUFBNkI7QUFBN0I7dUJBQTZCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUc7QUFBSDtBQUFBLHVCQUFHLGNBQUEsVUFBTSxXQUFXLFFBQWpCLEFBQXlCO3NCQUF6Qjt3QkFBQTtBQUFBO09BdkJ4QyxBQUNBLEFBb0JRLEFBRUEsQUFBNkIsQUFBRyxBQU0vQztBQWpDRDs7a0JBcUNlLHdCQUFBLEFBQVksUUFBWixBQUFvQixBOztBQUduQyxPQUFBLEFBQU87YUFDTSxvQkFBQSxBQUFVLE9BREosQUFDVyxBQUMxQjtnQ0FBUSxBQUFVO2VBQ1Asb0JBRGEsQUFDSCxBQUNqQjtnQkFBUSxvQkFGWSxBQUVGLEFBQ2xCO2VBQU8sb0JBTGYsQUFBbUIsQUFFUCxBQUFnQixBQUdIO0FBSEcsQUFDcEIsS0FESTtBQUZPLEFBQ2YiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=