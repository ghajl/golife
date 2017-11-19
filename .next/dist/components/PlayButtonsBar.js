'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = require('material-ui/styles');

var _Button = require('./Button1');

var _Button2 = _interopRequireDefault(_Button);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\PlayButtonsBar.js';


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
            lineNumber: 119
        }
    }, _react2.default.createElement('div', { className: props.classes.controls, __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, _react2.default.createElement('div', { className: props.classes.item, __source: {
            fileName: _jsxFileName,
            lineNumber: 121
        }
    }, _react2.default.createElement(_IconButton2.default, { className: props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
            return props.handlePlayToggle();
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
        }
    }, _react2.default.createElement(_materialUiToggleIcon2.default, {
        on: props.on,
        onIcon: _react2.default.createElement(_PlayArrow2.default, { className: props.classes.icon, __source: {
                fileName: _jsxFileName,
                lineNumber: 125
            }
        }),
        offIcon: _react2.default.createElement(_Pause2.default, { className: props.classes.icon, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
            }
        }),
        color: props.color,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    }))), _react2.default.createElement('div', { className: props.classes.item, __source: {
            fileName: _jsxFileName,
            lineNumber: 132
        }
    }, _react2.default.createElement(_IconButton2.default, { className: props.classes.button, onClick: function onClick() {
            return props.step();
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 133
        }
    }, _react2.default.createElement(_SkipNext2.default, { className: props.classes.icon, color: props.color, __source: {
            fileName: _jsxFileName,
            lineNumber: 134
        }
    }))), _react2.default.createElement('div', { className: props.classes.item, __source: {
            fileName: _jsxFileName,
            lineNumber: 138
        }
    }, _react2.default.createElement(_IconButton2.default, { className: props.classes.button, onClick: function onClick() {
            return props.clear();
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 139
        }
    }, _react2.default.createElement(_Clear2.default, { className: props.classes.icon, color: props.color, __source: {
            fileName: _jsxFileName,
            lineNumber: 140
        }
    }))), _react2.default.createElement('div', { className: props.classes.slider, __source: {
            fileName: _jsxFileName,
            lineNumber: 143
        }
    }, _react2.default.createElement(_SpeedSlider2.default, { value: props.fps, onChange: function onChange(v) {
            return props.setInterval(v);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 144
        }
    }))), _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 147
        }
    }, _react2.default.createElement('div', { className: props.classes.generation, __source: {
            fileName: _jsxFileName,
            lineNumber: 148
        }
    }, _react2.default.createElement(_Generation2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 149
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBsYXlCdXR0b25zQmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiR3JpZCIsIndpdGhTdHlsZXMiLCJCdXR0b24xIiwiU3BlZWRTbGlkZXIiLCJHZW5lcmF0aW9uIiwiUGxheUFycm93IiwiUGF1c2UiLCJDbGVhciIsIlNraXBOZXh0IiwiSWNvbiIsIkljb25CdXR0b24iLCJUb2dnbGVJY29uIiwicHVyZSIsInN0eWxlcyIsInJvb3QiLCJyb290MSIsImJ1dHRvbiIsIndpZHRoIiwiaGVpZ2h0IiwiaWNvbiIsIml0ZW0iLCJ2ZXJ0aWNhbCIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1hcmdpblRvcCIsImJhciIsIm1hcmdpbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbnRyb2xzIiwic2xpZGVyIiwibWFyZ2luTGVmdCIsImdlbmVyYXRpb24iLCJhbGlnbiIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJ0cmFuc2Zvcm0iLCJ0ZXh0Q29sb3IiLCJQbGF5QnV0dG9uc0JhciIsInByb3BzIiwiY2xhc3NlcyIsImhhbmRsZVBsYXlUb2dnbGUiLCJvbiIsInN0ZXAiLCJjbGVhciIsImZwcyIsInYiLCJzZXRJbnRlcnZhbCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBR1AsSUFBTSxTQUFTLFNBQVQs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QUEvQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxzQ0FBVyxXQUFXLE1BQUEsQUFBTSxRQUE3QixBQUFxQyxRQUFRLFNBQVcsbUJBQUE7bUJBQU0sTUFBTixBQUFNLEFBQU07QUFBcEU7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsaUNBQU8sV0FBVyxNQUFBLEFBQU0sUUFBekIsQUFBaUMsTUFBTSxPQUFTLE1BQWhELEFBQXNEO3NCQUF0RDt3QkFwQlosQUFrQkksQUFDSSxBQUNJLEFBR1I7QUFIUTswQkFHUixjQUFBLFNBQUssV0FBVyxNQUFBLEFBQU0sUUFBdEIsQUFBOEI7c0JBQTlCO3dCQUFBLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHVDQUFZLE9BQU8sTUFBcEIsQUFBMEIsS0FBSyxVQUFVLGtCQUFBLEFBQUMsR0FBRDttQkFBTyxNQUFBLEFBQU0sWUFBYixBQUFPLEFBQWtCO0FBQWxFO3NCQUFBO3dCQXpCUixBQUNJLEFBdUJJLEFBQ0EsQUFHSjtBQUhJOzBCQUdKLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsU0FBSyxXQUFXLE1BQUEsQUFBTSxRQUF0QixBQUE4QjtzQkFBOUI7d0JBQUEsQUFDQTtBQURBO3VCQUNBLEFBQUM7O3NCQUFEO3dCQWpDbkIsQUFHVyxBQTRCSSxBQUNJLEFBQ0EsQUFRbkI7QUFSbUI7QUFBQTtBQXBDcEIsQUE4Q0E7O2tCQUFlLHdCQUFBLEFBQVcsUUFBUSxvQkFBbEMsQUFBZSxBQUFtQixBQUFLOzs7QUFHdkMsZUFBQSxBQUFlO2FBQ0Ysb0JBQUEsQUFBVSxPQURJLEFBQ0csQUFDMUI7c0JBQWtCLG9CQUFBLEFBQVUsS0FGTCxBQUVVLEFBQ2pDO1FBQUksb0JBQUEsQUFBVSxLQUhTLEFBR0osQUFDbkI7V0FBTyxvQkFBQSxBQUFVLE9BSk0sQUFJQyxBQUN4QjtVQUFNLG9CQUFBLEFBQVUsS0FMTyxBQUtGLEFBQ3JCO1dBQU8sb0JBQUEsQUFBVSxLQU5NLEFBTUQsQUFDdEI7U0FBSyxvQkFBQSxBQUFVLE9BUFEsQUFPRCxBQUN0QjtpQkFBYSxvQkFBQSxBQUFVLEtBQUssQUFDNUI7QUFUSixBQUEyQjtBQUFBLEFBQ3ZCO0FBVVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IlBsYXlCdXR0b25zQmFyLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=