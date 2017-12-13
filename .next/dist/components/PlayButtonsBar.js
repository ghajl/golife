'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\PlayButtonsBar.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = require('material-ui/styles');

var _SpeedSlider = require('./SpeedSlider');

var _SpeedSlider2 = _interopRequireDefault(_SpeedSlider);

var _Generation = require('./Generation');

var _Generation2 = _interopRequireDefault(_Generation);

var _PlayArrow = require('material-ui-icons/PlayArrow');

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Pause = require('material-ui-icons/Pause');

var _Pause2 = _interopRequireDefault(_Pause);

var _Clear = require('material-ui-icons/Clear');

var _Clear2 = _interopRequireDefault(_Clear);

var _SkipNext = require('material-ui-icons/SkipNext');

var _SkipNext2 = _interopRequireDefault(_SkipNext);

var _Icon = require('material-ui/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _materialUiToggleIcon = require('material-ui-toggle-icon');

var _materialUiToggleIcon2 = _interopRequireDefault(_materialUiToggleIcon);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _colors = require('../helpers/colors');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var styles = function styles(theme) {
    var _vertical;

    return {
        root: {
            // flexGrow: 1,

            // width: 60,

        },
        root1: {
            // border: '1px solid red',

            // width: 60,

        },
        button: {
            // border: '1px solid blue',
            // padding: 0,
            // margin: 0,
            color: _colors.colors.BUTTON,
            width: 35,
            height: 35
        },

        icon: {
            //   [theme.breakpoints.up('sm')]: {
            //       width: 25,
            //       height: 25,
            //   },
            //   [theme.breakpoints.up('md')]: {
            //       width: 35,
            //       height: 35,
            //   },
            //   [theme.breakpoints.up('lg')]: {
            //       width: 45,
            //       height: 45,
            //   },
            //       width: 40,
            //       height: 40,

            // }
            width: 25,
            height: 25

        },
        item: {
            // flexGrow: 1,
        },
        vertical: (_vertical = {}, (0, _defineProperty3.default)(_vertical, theme.breakpoints.up('xs'), {
            marginTop: 10
        }), (0, _defineProperty3.default)(_vertical, theme.breakpoints.up('lg'), {
            marginTop: 20
        }), _vertical),
        bar: {
            // border: '1px solid',
            // borderColor: 'rgba(0,0,0,.2)',
            // borderRadius: 25,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between'
            // flexDirection: 'row',

            // 'flex-flow': 'row',
            // height: 50,
            //         flex: {
            //   // basis: null,
            //   direction: 'row',
            //   // flow: 'row',
            //   // grow: null,
            //   // shrink: null,
            //   // wrap: null
            // }
        },
        controls: {
            display: 'flex'
        },
        slider: {
            marginTop: 10,
            marginLeft: 15
        },

        generation: {
            align: 'flex-end',
            marginTop: 5,
            marginRight: 15,
            color: 'rgba(231,166,26,.1)',
            transform: 'skew(-10deg)'
            // boxShadow: '0px 0px 30px -8px rgba(0,0,0,0.5)',


        }
    };
};

var textColor = 'white';

var PlayButtonsBar = function PlayButtonsBar(props) {

    return _react2.default.createElement('div', { className: props.classes.bar, __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, _react2.default.createElement('div', { className: props.classes.controls, __source: {
            fileName: _jsxFileName,
            lineNumber: 121
        }
    }, _react2.default.createElement('div', { className: props.classes.item, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
        }
    }, _react2.default.createElement(_IconButton2.default, { className: props.classes.button, title: props.on ? "Start" : "Pause", onClick: function onClick() {
            return props.handlePlayToggle();
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    }, _react2.default.createElement(_materialUiToggleIcon2.default, {
        on: props.on,
        onIcon: _react2.default.createElement(_PlayArrow2.default, { className: props.classes.icon, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
            }
        }),
        offIcon: _react2.default.createElement(_Pause2.default, { className: props.classes.icon, __source: {
                fileName: _jsxFileName,
                lineNumber: 127
            }
        }),

        __source: {
            fileName: _jsxFileName,
            lineNumber: 124
        }
    }))), _react2.default.createElement('div', { className: props.classes.item, __source: {
            fileName: _jsxFileName,
            lineNumber: 133
        }
    }, _react2.default.createElement(_IconButton2.default, { className: props.classes.button, title: 'Next Generation', onClick: function onClick() {
            return props.step();
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 134
        }
    }, _react2.default.createElement(_SkipNext2.default, { className: props.classes.icon, __source: {
            fileName: _jsxFileName,
            lineNumber: 135
        }
    }))), _react2.default.createElement('div', { className: props.classes.item, __source: {
            fileName: _jsxFileName,
            lineNumber: 139
        }
    }, _react2.default.createElement(_IconButton2.default, { className: props.classes.button, title: 'Clear', onClick: function onClick() {
            return props.clear();
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 140
        }
    }, _react2.default.createElement(_Clear2.default, { className: props.classes.icon, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
        }
    }))), _react2.default.createElement('div', { className: props.classes.slider, title: 'Set Speed', __source: {
            fileName: _jsxFileName,
            lineNumber: 144
        }
    }, _react2.default.createElement(_SpeedSlider2.default, { onChange: function onChange(v) {
            return props.setInterval(v);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 145
        }
    }))), _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 148
        }
    }, _react2.default.createElement('div', { className: props.classes.generation, title: 'Generation', __source: {
            fileName: _jsxFileName,
            lineNumber: 149
        }
    }, _react2.default.createElement(_Generation2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 150
        }
    }))));
};

exports.default = (0, _styles.withStyles)(styles)((0, _pure2.default)(PlayButtonsBar));

PlayButtonsBar.propTypes = {
    classes: _propTypes2.default.object.isRequired,
    handlePlayToggle: _propTypes2.default.func.isRequired,
    on: _propTypes2.default.bool.isRequired,
    color: _propTypes2.default.string.isRequired,
    step: _propTypes2.default.func.isRequired,
    clear: _propTypes2.default.func.isRequired,
    setInterval: _propTypes2.default.func.isRequired
    // generationCount: PropTypes.number.isRequired,
};
// <div className={this.props.classes.bar}>
//     <Grid container spacing={0} direction={this.props.direction} align={this.props.align} justify={this.props.justify} className={this.props.classes.root}>
//         <Grid item  className={buttonClassNames}>
//             <IconButton className={this.props.classes.button} aria-label="Play"  onClick = {(e) => this.handleToggle(e)}>
//                 <ToggleIcon
//                     on={this.state.on}
//                     onIcon={<PlayArrow className={this.props.classes.icon} />}
//                     offIcon={<Pause className={this.props.classes.icon} />}
//                     color = {this.props.color} 
//                   />
//             </IconButton>

//         </Grid>
//         <Grid item  className={buttonClassNames}>
//             <IconButton className={this.props.classes.button} onClick = {() => this.props.step()} >
//                 <SkipNext className={this.props.classes.icon} color = {this.props.color}/>
//             </IconButton>

//         </Grid>
//         <Grid item  className={buttonClassNames}>
//             <IconButton className={this.props.classes.button} onClick = {() => this.props.clear()} >
//                 <Clear  className={this.props.classes.icon} color = {this.props.color}/>
//             </IconButton>
//         </Grid>
//         <Grid item  className={buttonClassNames}>
//         <SpeedSlider value={this.props.fps} onChange={(v) => this.props.setSpeed(v)}/>
//         </Grid>
//         <Grid item  className={this.props.classes.generation}>
//         <Generation value={this.props.generation} size='large'/>
//         </Grid>
//     </Grid>
// </div>

// <Grid container className={props.classes.root} justify="center">
//     <Grid item xs className={props.classes.bar}>
//         <Grid container spacing={0} direction={props.direction} align={props.align} justify={props.justify} className={props.classes.root1}>
//             <Grid item xs className={buttonClassNames}>
//             <Button1 buttonType = "play" onClick={(e) => props.resume(e)} color={props.color}/>
//             </Grid>
//             <Grid item xs className={buttonClassNames}>
//             <Button1 buttonType = "step" onClick={() => props.step()} color={props.color}/>
//             </Grid>
//             <Grid item xs className={buttonClassNames}> 
//             <Button1 buttonType = "pause" onClick={() => props.stop()} color={props.color}/>
//             </Grid>
//             <Grid item xs className={buttonClassNames}>
//             <Button1 buttonType = "clear" onClick={() => props.clear()} color={props.color}/>
//             </Grid>
//             <Grid item xs className={buttonClassNames}>
//             <SpeedSlider value={props.fps} onChange={(v) => props.setSpeed(v)}/>
//             </Grid>
//             <Grid item xs className={props.classes.generation}>
//             <Generation value={props.generation} size='large'/>
//             </Grid>
//         </Grid>
//     </Grid>
// </Grid>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBsYXlCdXR0b25zQmFyLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJyb290MSIsImJ1dHRvbiIsImNvbG9yIiwiQlVUVE9OIiwid2lkdGgiLCJoZWlnaHQiLCJpY29uIiwiaXRlbSIsInZlcnRpY2FsIiwidGhlbWUiLCJicmVha3BvaW50cyIsInVwIiwibWFyZ2luVG9wIiwiYmFyIiwibWFyZ2luIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY29udHJvbHMiLCJzbGlkZXIiLCJtYXJnaW5MZWZ0IiwiZ2VuZXJhdGlvbiIsImFsaWduIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iLCJ0ZXh0Q29sb3IiLCJQbGF5QnV0dG9uc0JhciIsInByb3BzIiwiY2xhc3NlcyIsIm9uIiwiaGFuZGxlUGxheVRvZ2dsZSIsInN0ZXAiLCJjbGVhciIsInYiLCJzZXRJbnRlcnZhbCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBO1FBQUE7Ozs7QUFJUDs7QUFKaUIsQUFDZixBQU1OOztBQU5NLEFBQ0w7O0FBUUc7O0FBVmlCLEFBT2QsQUFNUDs7QUFOTyxBQUNIOztBQU9DO0FBQ0E7QUFDQTttQkFBTSxlQUpILEFBSVMsQUFDWjttQkFMRyxBQUtJLEFBQ047b0JBbkJlLEFBYWIsQUFNTSxBQUdoQjtBQVRVLEFBQ0g7OztBQVVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0k7bUJBakJF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