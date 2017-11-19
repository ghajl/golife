'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\HeaderSSR.js';
// import { NavLink } from 'react-router-dom';
// import injectSheet from 'react-jss';
// const isSmall = props.screen.width < 768;
// import browserHistory from 'history/createBrowserHistory';

// import { withStyles } from 'material-ui/styles';
// import withRoot from '../components/withRoot';
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
    navbar: {
        overflow: 'hidden',
        boxShadow: [0, 3, 15, -6, '#222'],
        position: 'fixed',
        top: 0,
        width: '100%',
        'z-index': 3,
        backgroundColor: "#fff"
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
        // about: {
        //     display: 'flex',
        //     fontWeight: 900,
        //     '@global a': {
        //         '&:hover': {
        //             color: '#016FB9',
        //             // background: '#3b80d1',  
        //         }
        //     },     

        //     fontSize: '1.1em',
        //     '& .active': {
        //         color: '#016FB9',
        //     },
        //     '@media (min-width: 768px)': {
        //         fontSize: '1.5em',
        //     }
        // }
    } };

var HeaderSSR = function HeaderSSR() {
    // const classes = props.classes;

    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, _react2.default.createElement('div', { className: 'navbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, _react2.default.createElement('div', { className: 'nav', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, _react2.default.createElement('div', { className: 'title', __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, _react2.default.createElement('span', { className: 'authorName', __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, 'John Conway`s'), _react2.default.createElement('span', { className: 'gameName', __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, 'Game of Life')))));
};

exports.default = HeaderSSR;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlclNTUi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJzdHlsZXMiLCJuYXYiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwicGFkZGluZyIsInRyYW5zaXRpb24iLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwibmF2YmFyIiwib3ZlcmZsb3ciLCJib3hTaGFkb3ciLCJwb3NpdGlvbiIsInRvcCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJhdXRob3JOYW1lIiwiZ2FtZU5hbWUiLCJIZWFkZXJTU1IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFLUCxBQUFPOzs7Ozs7O0FBSlA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFJQSxJQUFNOzs7aUJBQ0csQUFHUSxBQUNUO2tCQUpDLEFBSVMsQUFDVjswQkFMQyxBQUtpQixBQUNsQjt3QkFOQyxBQU1lLEFBQ2hCOzttQkFBYSxBQUNGLEFBRVA7O3FCQUhTLEFBR0EsQUFDVDtxQkFKUyxBQUlBLEFBQ1Q7d0JBTFMsQUFLRyxBQUNaO3dCQU5TLEFBTUcsQUFDWjs7NEJBUFMsQUFPQyxBQUNNLEFBRWhCO0FBSFUsQUFDTjs7dUJBR08sQUFDUDtBQXBCRCxBQUNOLEFBT1ksQUFVRSxBQVFmO0FBUmUsQUFDUDtBQVhLLEFBQ1Q7O0FBUkgsQUFHRCxLQUpPLEFBQ1g7O2tCQXlCWSxBQUNFLEFBQ1Y7bUJBQVcsQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFKLEFBQU8sSUFBSSxDQUFYLEFBQVksR0FGZixBQUVHLEFBQWUsQUFDMUI7a0JBSFEsQUFHRSxBQUNWO2FBSlEsQUFJSCxBQUNMO2VBTFEsQUFLRCxBQUNOO21CQU5PLEFBTUksQUFDWjt5QkFqQ08sQUEwQkMsQUFPUSxBQUVwQjtBQVRZLEFBQ1I7OztvQkFRRyxBQUVTLEFBQ3BCOzBCQUhXLEFBR08sQUFDVjtrQkFKRyxBQUlPLEFBQ1Y7O3NCQUxHLEFBSzBCLEFBQ2YsQUFFZDtBQUg2QixBQUN6Qjs7OEJBekNHLEFBbUNKLEFBUTBCLEFBQ1AsQUFHMUI7QUFKaUMsQUFDekI7QUFURCxBQUVIOztlQXJDTyxBQStDQyxBQUNELEFBRVg7QUFIWSxBQUNSOztlQUVNLEFBQ0MsQUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRFSixBQUFlO0FBa0RELEFBQ047O0FBc0JSLElBQU0sWUFBWSxTQUFaLEFBQVksWUFBTSxBQUNoQjtBQUVBOzsyQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNKO0FBREk7QUFBQSxLQUFBLGtCQUNKLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDQTtBQURBO3VCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFFUTtBQUZSO3VCQUVRLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFBdUI7QUFBdkI7dUJBQXVCLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQTtBQUFBO09BQXZCLEFBQXVCLEFBQ3ZCLGtDQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQTtBQUFBO09BTlIsQUFDSSxBQUNKLEFBQ0EsQUFFUSxBQUNBLEFBUWY7QUFqQkQsQUFvQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyU1NSLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=