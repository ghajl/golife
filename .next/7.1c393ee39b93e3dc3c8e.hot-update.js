webpackHotUpdate(7,{

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(162);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\PlayButtonsBar.js';

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = __webpack_require__(499);

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = __webpack_require__(451);

var _SpeedSlider = __webpack_require__(745);

var _SpeedSlider2 = _interopRequireDefault(_SpeedSlider);

var _Generation = __webpack_require__(789);

var _Generation2 = _interopRequireDefault(_Generation);

var _PlayArrow = __webpack_require__(529);

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Pause = __webpack_require__(530);

var _Pause2 = _interopRequireDefault(_Pause);

var _Clear = __webpack_require__(584);

var _Clear2 = _interopRequireDefault(_Clear);

var _SkipNext = __webpack_require__(585);

var _SkipNext2 = _interopRequireDefault(_SkipNext);

var _Icon = __webpack_require__(509);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(531);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _materialUiToggleIcon = __webpack_require__(532);

var _materialUiToggleIcon2 = _interopRequireDefault(_materialUiToggleIcon);

var _pure = __webpack_require__(494);

var _pure2 = _interopRequireDefault(_pure);

var _colors = __webpack_require__(828);

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
    }, _react2.default.createElement(_SpeedSlider2.default, { value: props.fps, onChange: function onChange(v) {
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
    fps: _propTypes2.default.number.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBsYXlCdXR0b25zQmFyLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJyb290MSIsImJ1dHRvbiIsImNvbG9yIiwiQlVUVE9OIiwid2lkdGgiLCJoZWlnaHQiLCJpY29uIiwiaXRlbSIsInZlcnRpY2FsIiwidGhlbWUiLCJicmVha3BvaW50cyIsInVwIiwibWFyZ2luVG9wIiwiYmFyIiwibWFyZ2luIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY29udHJvbHMiLCJzbGlkZXIiLCJtYXJnaW5MZWZ0IiwiZ2VuZXJhdGlvbiIsImFsaWduIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iLCJ0ZXh0Q29sb3IiLCJQbGF5QnV0dG9uc0JhciIsInByb3BzIiwiY2xhc3NlcyIsIm9uIiwiaGFuZGxlUGxheVRvZ2dsZSIsInN0ZXAiLCJjbGVhciIsImZwcyIsInYiLCJzZXRJbnRlcnZhbCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBO1FBQUE7Ozs7QUFJUDs7QUFKaUIsQUFDZixBQU1OOztBQU5NLEFBQ0w7O0FBUUc7O0FBVmlCLEFBT2QsQUFNUDs7QUFOTyxBQUNIOztBQU9DO0FBQ0E7QUFDQTttQkFBTSxlQUpILEFBSVMsQUFDWjttQkFMRyxBQUtJLEFBQ047b0JBbkJlLEFBYWIsQUFNTSxBQUdoQjtBQVRVLEFBQ0g7OztBQVVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\folder\\new\\gol\\components\\PlayButtonsBar.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\folder\\new\\gol\\components\\PlayButtonsBar.js"); } } })();

/***/ }),

/***/ 741:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4xYzM5M2VlMzliOTNlM2RjM2M4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5QnV0dG9uc0Jhci5qcz81ZGJiZGE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBTcGVlZFNsaWRlciBmcm9tICcuL1NwZWVkU2xpZGVyJztcclxuaW1wb3J0IEdlbmVyYXRpb24gZnJvbSAnLi9HZW5lcmF0aW9uJztcclxuaW1wb3J0IFBsYXlBcnJvdyBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9QbGF5QXJyb3cnO1xyXG5pbXBvcnQgUGF1c2UgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvUGF1c2UnO1xyXG5pbXBvcnQgQ2xlYXIgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvQ2xlYXInO1xyXG5pbXBvcnQgU2tpcE5leHQgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvU2tpcE5leHQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdtYXRlcmlhbC11aS9JY29uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBUb2dnbGVJY29uIGZyb20gJ21hdGVyaWFsLXVpLXRvZ2dsZS1pY29uJztcclxuaW1wb3J0IHB1cmUgZnJvbSAncmVjb21wb3NlL3B1cmUnXHJcbmltcG9ydCB7Y29sb3JzIGFzIGNvbG9yfSBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycyc7XHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgXHRcdC8vIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHdpZHRoOiA2MCxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICByb290MToge1xyXG4gICAgICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHdpZHRoOiA2MCxcclxuXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcclxuICAgICAgICAgLy8gcGFkZGluZzogMCxcclxuICAgICAgICAgLy8gbWFyZ2luOiAwLFxyXG4gICAgICAgICBjb2xvcjpjb2xvci5CVVRUT04sXHJcbiAgICAgICAgIHdpZHRoOiAzNSxcclxuICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICBpY29uOiB7XHJcbiAgLy8gICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgLy8gICAgICAgd2lkdGg6IDI1LFxyXG4gIC8vICAgICAgIGhlaWdodDogMjUsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gIC8vICAgICAgIHdpZHRoOiAzNSxcclxuICAvLyAgICAgICBoZWlnaHQ6IDM1LFxyXG4gIC8vICAgfSxcclxuICAvLyAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAvLyAgICAgICB3aWR0aDogNDUsXHJcbiAgLy8gICAgICAgaGVpZ2h0OiA0NSxcclxuICAvLyAgIH0sXHJcbiAgLy8gICAgICAgd2lkdGg6IDQwLFxyXG4gIC8vICAgICAgIGhlaWdodDogNDAsXHJcblxyXG4gIC8vIH1cclxuICAgICAgd2lkdGg6IDI1LFxyXG4gICAgICBoZWlnaHQ6IDI1LFxyXG5cclxuICAgIH0sXHJcbiAgICBpdGVtOiB7XHJcbi8vIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpXToge1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMjBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFyOiB7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICAvLyBib3JkZXJDb2xvcjogJ3JnYmEoMCwwLDAsLjIpJyxcclxuICAgICAgICAvLyBib3JkZXJSYWRpdXM6IDI1LFxyXG4gICAgICAgIG1hcmdpbjogNSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAvLyBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuXHJcbiAgICAgICAgLy8gJ2ZsZXgtZmxvdyc6ICdyb3cnLFxyXG4gICAgICAgIC8vIGhlaWdodDogNTAsXHJcbi8vICAgICAgICAgZmxleDoge1xyXG4vLyAgIC8vIGJhc2lzOiBudWxsLFxyXG4vLyAgIGRpcmVjdGlvbjogJ3JvdycsXHJcbi8vICAgLy8gZmxvdzogJ3JvdycsXHJcbi8vICAgLy8gZ3JvdzogbnVsbCxcclxuLy8gICAvLyBzaHJpbms6IG51bGwsXHJcbi8vICAgLy8gd3JhcDogbnVsbFxyXG4vLyB9XHJcbiAgICB9LFxyXG4gICAgY29udHJvbHM6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgc2xpZGVyOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAxMCxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAxNSxcclxuICAgIH0sXHJcblxyXG4gICAgZ2VuZXJhdGlvbjoge1xyXG4gICAgICAgIGFsaWduOiAnZmxleC1lbmQnLFxyXG4gICAgICAgIG1hcmdpblRvcDogNSxcclxuICAgICAgICBtYXJnaW5SaWdodDogMTUsXHJcbiAgICAgICAgY29sb3I6J3JnYmEoMjMxLDE2NiwyNiwuMSknLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NrZXcoLTEwZGVnKScsXHJcbiAgICAgICAgLy8gYm94U2hhZG93OiAnMHB4IDBweCAzMHB4IC04cHggcmdiYSgwLDAsMCwwLjUpJyxcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdGV4dENvbG9yID0gJ3doaXRlJztcclxuXHJcbmNvbnN0IFBsYXlCdXR0b25zQmFyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgXHJcblx0cmV0dXJuIChcclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5iYXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuY29udHJvbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbn0gdGl0bGU9e3Byb3BzLm9uP1wiU3RhcnRcIjpcIlBhdXNlXCJ9IG9uQ2xpY2sgPSB7KCkgPT4gcHJvcHMuaGFuZGxlUGxheVRvZ2dsZSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3Byb3BzLm9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSWNvbj17PFBsYXlBcnJvdyBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuaWNvbn0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZJY29uPXs8UGF1c2UgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmljb259IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b259IHRpdGxlPVwiTmV4dCBHZW5lcmF0aW9uXCIgb25DbGljayA9IHsoKSA9PiBwcm9wcy5zdGVwKCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lwTmV4dCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuYnV0dG9ufSB0aXRsZT1cIkNsZWFyXCIgb25DbGljayA9IHsoKSA9PiBwcm9wcy5jbGVhcigpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXIgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5zbGlkZXJ9IHRpdGxlPVwiU2V0IFNwZWVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwZWVkU2xpZGVyIHZhbHVlPXtwcm9wcy5mcHN9IG9uQ2hhbmdlPXsodikgPT4gcHJvcHMuc2V0SW50ZXJ2YWwodil9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5nZW5lcmF0aW9ufSB0aXRsZT1cIkdlbmVyYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8R2VuZXJhdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFxyXG5cdCk7XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykocHVyZShQbGF5QnV0dG9uc0JhcikpO1xyXG5cclxuXHJcblBsYXlCdXR0b25zQmFyLnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIGhhbmRsZVBsYXlUb2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBzdGVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY2xlYXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBmcHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHNldEludGVydmFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgLy8gZ2VuZXJhdGlvbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuYmFyfT5cclxuICAgICAgICAgICAgLy8gICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBkaXJlY3Rpb249e3RoaXMucHJvcHMuZGlyZWN0aW9ufSBhbGlnbj17dGhpcy5wcm9wcy5hbGlnbn0ganVzdGlmeT17dGhpcy5wcm9wcy5qdXN0aWZ5fSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8R3JpZCBpdGVtICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZXN9PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5idXR0b259IGFyaWEtbGFiZWw9XCJQbGF5XCIgIG9uQ2xpY2sgPSB7KGUpID0+IHRoaXMuaGFuZGxlVG9nZ2xlKGUpfT5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxUb2dnbGVJY29uXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMuc3RhdGUub259XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgb25JY29uPXs8UGxheUFycm93IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmljb259IC8+fVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG9mZkljb249ezxQYXVzZSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5pY29ufSAvPn1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb2xvciA9IHt0aGlzLnByb3BzLmNvbG9yfSBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPEdyaWQgaXRlbSAgY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWVzfT5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuYnV0dG9ufSBvbkNsaWNrID0geygpID0+IHRoaXMucHJvcHMuc3RlcCgpfSA+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8U2tpcE5leHQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuaWNvbn0gY29sb3IgPSB7dGhpcy5wcm9wcy5jb2xvcn0vPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxHcmlkIGl0ZW0gIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lc30+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmJ1dHRvbn0gb25DbGljayA9IHsoKSA9PiB0aGlzLnByb3BzLmNsZWFyKCl9ID5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxDbGVhciAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuaWNvbn0gY29sb3IgPSB7dGhpcy5wcm9wcy5jb2xvcn0vPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxHcmlkIGl0ZW0gIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lc30+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPFNwZWVkU2xpZGVyIHZhbHVlPXt0aGlzLnByb3BzLmZwc30gb25DaGFuZ2U9eyh2KSA9PiB0aGlzLnByb3BzLnNldFNwZWVkKHYpfS8+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxHcmlkIGl0ZW0gIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmdlbmVyYXRpb259PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxHZW5lcmF0aW9uIHZhbHVlPXt0aGlzLnByb3BzLmdlbmVyYXRpb259IHNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAvLyAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAvLyA8L2Rpdj5cclxuXHJcbiAgICAgICAgLy8gPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5yb290fSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgLy8gICAgIDxHcmlkIGl0ZW0geHMgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJhcn0+XHJcbiAgICAgICAgLy8gICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gZGlyZWN0aW9uPXtwcm9wcy5kaXJlY3Rpb259IGFsaWduPXtwcm9wcy5hbGlnbn0ganVzdGlmeT17cHJvcHMuanVzdGlmeX0gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLnJvb3QxfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lc30+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPEJ1dHRvbjEgYnV0dG9uVHlwZSA9IFwicGxheVwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5yZXN1bWUoZSl9IGNvbG9yPXtwcm9wcy5jb2xvcn0vPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lc30+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPEJ1dHRvbjEgYnV0dG9uVHlwZSA9IFwic3RlcFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnN0ZXAoKX0gY29sb3I9e3Byb3BzLmNvbG9yfS8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWVzfT4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPEJ1dHRvbjEgYnV0dG9uVHlwZSA9IFwicGF1c2VcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zdG9wKCl9IGNvbG9yPXtwcm9wcy5jb2xvcn0vPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lc30+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPEJ1dHRvbjEgYnV0dG9uVHlwZSA9IFwiY2xlYXJcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbGVhcigpfSBjb2xvcj17cHJvcHMuY29sb3J9Lz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZXN9PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxTcGVlZFNsaWRlciB2YWx1ZT17cHJvcHMuZnBzfSBvbkNoYW5nZT17KHYpID0+IHByb3BzLnNldFNwZWVkKHYpfS8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmdlbmVyYXRpb259PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxHZW5lcmF0aW9uIHZhbHVlPXtwcm9wcy5nZW5lcmF0aW9ufSBzaXplPSdsYXJnZScvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAvLyAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAvLyAgICAgPC9HcmlkPlxyXG4gICAgICAgIC8vIDwvR3JpZD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BsYXlCdXR0b25zQmFyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBTkE7O0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFOQTs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFSQTtBQUNBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBckJBOztBQXVCQTtBQUZBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFBQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFuQkE7O0FBc0JBO0FBRkE7O0FBSUE7QUFHQTtBQUpBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQURBO0FBbEZBO0FBREE7QUFDQTtBQTZGQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBSkE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQVFBO0FBUkE7QUFBQTtBQXBDQTtBQUNBO0FBNkNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=