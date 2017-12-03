'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

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

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Game.js',
    _PropTypes$shape;
// import Header from './components/Header'


var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _GameGrid = require('../helpers/GameGrid');

var _GameGrid2 = _interopRequireDefault(_GameGrid);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _reactRedux = require('react-redux');

var _withRoot = require('./withRoot');

var _withRoot2 = _interopRequireDefault(_withRoot);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _SelectButtonsBar = require('./SelectButtonsBar');

var _SelectButtonsBar2 = _interopRequireDefault(_SelectButtonsBar);

var _PlayButtonsBar = require('./PlayButtonsBar');

var _PlayButtonsBar2 = _interopRequireDefault(_PlayButtonsBar);

var _boardNames = require('../helpers/boardNames');

var _boardSizes = require('../helpers/boardSizes');

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Game = function (_Component) {
    (0, _inherits3.default)(Game, _Component);

    function Game(props) {
        (0, _classCallCheck3.default)(this, Game);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Game.__proto__ || (0, _getPrototypeOf2.default)(Game)).call(this, props));

        _this.handleWindowSizeChange = function () {
            _this.setState({
                screen: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    ratio: window.devicePixelRatio || 1
                }
            });
            _this.grid.handleWindowSizeChange(_this.canvasBoard);
        };

        _this.handleOpenErrorDialog = function () {
            _this.setState({ showMessage: true });
        };

        _this.handleCloseErrorDialog = function () {
            _this.setState({ showMessage: false });
        };

        console.log(props);
        _this.currentBoardSize = _boardSizes.boardSizes.medium;

        if (props.cellsList) {
            switch (props.gridSizesIndex) {
                case 0:
                    _this.currentBoardSize = _boardSizes.boardSizes.small;break;
                case 2:
                    _this.currentBoardSize = _boardSizes.boardSizes.large;break;
            }
        }

        _this.gridWidth = _this.currentBoardSize.width;
        _this.gridHeight = _this.currentBoardSize.height;
        _this.squareSize = _this.currentBoardSize.squareSize;

        _this.gridSizesLabel = [_boardSizes.boardSizes.small.height + " X " + _boardSizes.boardSizes.small.width, _boardSizes.boardSizes.medium.height + " X " + _boardSizes.boardSizes.medium.width, _boardSizes.boardSizes.large.height + " X " + _boardSizes.boardSizes.large.width];

        _this.patternNames = ["Random"];
        if (props.patterns) {
            _this.patternNames = _this.patternNames.concat(props.patterns.map(function (pattern) {
                return pattern.name;
            }));
        }

        _this.checkList = [];
        _this.mode = {
            drawing: false,
            clear: true
        };
        _this.startPressed = false;
        _this.pausePressed = false;
        _this.clearPressed = false;
        _this.stepPressed = false;

        _this.grid = new _GameGrid2.default(_boardNames.boardNames.MAIN, _this.gridWidth, _this.gridHeight, _this.squareSize);

        _this.changePattern = function (index) {
            return props.changePattern(index);
        };
        _this.changeBoardSize = function (index) {
            return props.changeBoardSize(index);
        };
        _this.start = _this.start.bind(_this);
        _this.toggleStopped = function () {
            return props.toggleStopped();
        };
        _this.setStopped = function (stopped) {
            return props.setStopped(stopped, _this.grid.name);
        };
        _this.incrementGeneration = function () {
            return props.incrementGeneration();
        };
        _this.setSpeed = function (fps) {
            return props.setSpeed(fps);
        };
        _this.setClear = function () {
            return props.setClear();
        };
        _this.setGameValues = function (cellsList, size) {
            return props.setGameValues(cellsList, size);
        };

        _this.state = { showMessage: false };
        return _this;
    }

    (0, _createClass3.default)(Game, [{
        key: 'reload',
        value: function reload(boardSize) {

            this.stop();
            this.startPressed = false;
            this.pausePressed = false;
            this.clearPressed = false;
            this.stepPressed = false;
            this.currentBoardSize = boardSize;
            this.gridWidth = this.currentBoardSize.width;
            this.gridHeight = this.currentBoardSize.height;
            this.squareSize = this.currentBoardSize.squareSize;
            this.grid.reload(this.gridWidth, this.gridHeight, this.squareSize, this.canvasBoard);
            this.mode.clear = true;
            this.mode.drawing = false;
        }
    }, {
        key: 'updateOnce',
        value: function updateOnce() {
            this.grid.update(this.mode);
            if (!this.mode.drawing) this.incrementGeneration();
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            this.now = Date.now();
            this.delta = this.now - this.then;

            if (this.delta > this.interval) {
                this.then = this.now - this.delta % this.interval;

                this.updateOnce();
            }
            this.rAF = requestAnimationFrame(function () {
                _this2.update();
            });
        }
    }, {
        key: 'changePatternEvent',
        value: function changePatternEvent(index) {

            if (index !== this.props.patternNamesIndex) {

                this.grid.changePattern(index, this.props.patterns, this.mode);
                this.changePattern(index);
                if (this.mode.clear) {
                    this.mode.clear = false;
                    this.updateOnce();
                } else {
                    this.stop();

                    this.updateOnce();
                }
            }
        }
    }, {
        key: 'changeBoardSizeEventHandler',
        value: function changeBoardSizeEventHandler(index) {
            if (index !== this.props.gridSizesIndex) {
                var size = void 0;

                if (index === 0) {
                    size = _boardSizes.boardSizes.small;
                } else if (index === 1) {
                    size = _boardSizes.boardSizes.medium;
                } else if (index === 2) {
                    size = _boardSizes.boardSizes.large;
                }

                this.reload(size);
                this.changeBoardSize(index);
            }
        }
    }, {
        key: 'handlePlayToggle',
        value: function handlePlayToggle() {

            if (this.props.stopped[_boardNames.boardNames.MAIN]) {
                this.start();
            } else {

                this.stop();
            }
        }
    }, {
        key: 'setInterval',
        value: function setInterval(value) {
            this.interval = 1000 / value;
            this.setSpeed(value);
        }
    }, {
        key: 'changeButtonPressedStatus',
        value: function changeButtonPressedStatus(buttonPressed) {

            this.startPressed = false;
            this.pausePressed = false;
            this.clearPressed = false;
            this.stepPressed = false;
            switch (buttonPressed) {
                case "start":
                    this.startPressed = true;
                    break;
                case "pause":
                    this.pausePressed = true;
                    break;
                case "clear":
                    this.clearPressed = true;
                    break;
                case "step":
                    this.stepPressed = true;
                    break;
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {

            this.mode.drawing = true;
            if (!this.props.stopped[_boardNames.boardNames.MAIN]) {
                this.stop();
            }

            var isCellClicked = this.grid.handleClick(e);

            if (isCellClicked) {
                this.mode.clear = false;
                this.updateOnce();
            }
        }
    }, {
        key: 'start',
        value: function start() {
            var _this3 = this;

            if (!this.startPressed && !this.mode.clear) {
                this.changeButtonPressedStatus("start");
                this.then = Date.now();
                this.mode.drawing = false;
                this.setStopped(false);
                this.rAF = requestAnimationFrame(function () {
                    _this3.update();
                });
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (!this.pausePressed) {

                this.setStopped(true);
                this.changeButtonPressedStatus("pause");
                cancelAnimationFrame(this.rAF);
            }
        }
    }, {
        key: 'clear',
        value: function clear() {

            if (!this.mode.clear) {
                console.log("da");
                this.stop();
                this.setClear();
                this.mode.clear = true;
                this.mode.drawing = false;
                this.updateOnce();
            }
        }
    }, {
        key: 'step',
        value: function step() {
            if (!this.startPressed && !this.mode.clear) {
                this.changeButtonPressedStatus("step");
                if (this.mode.drawing) {
                    this.mode.drawing = false;
                }
                this.updateOnce();
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            window.addEventListener('resize', this.handleWindowSizeChange);
            this.setState({ screen: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    ratio: window.devicePixelRatio || 1
                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.interval = 1000 / this.props.fps;this.interval = 1000 / this.props.fps;
            var ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1;
            if (!this.props.cellsList) {

                this.mode.clear = false;
                this.grid.makeBoard(this.gridWidth, this.gridHeight, this.squareSize, ratio, this.canvasBoard, null);
                this.updateOnce();
            } else {
                this.mode.clear = false;
                this.grid.makeBoard(this.gridWidth, this.gridHeight, this.squareSize, ratio, this.canvasBoard, this.props.cellsList);
                this.updateOnce();
            }

            if (this.props.error) {
                this.handleOpenErrorDialog();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {

            cancelAnimationFrame(this.rAF);
            var liveCellsList = this.grid.getLiveCells();

            this.setGameValues(liveCellsList);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var patterns = this.props.patterns;
            var Loading = function Loading() {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 331
                    }
                }, 'Loading...');
            };
            var screen = this.state.screen ? this.state.screen : {};

            return _react2.default.createElement('div', {
                className: 'jsx-3402553610' + ' ' + 'gameBoard',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 339
                }
            }, screen.width < screen.height || screen.width > 1280 ? _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 341
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-3402553610' + ' ' + 'paddingSides',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 343
                }
            }, _react2.default.createElement(_SelectButtonsBar2.default, {
                patternNamesIndex: this.props.patternNamesIndex,
                patternNames: this.patternNames,
                changePatternEvent: function changePatternEvent(v) {
                    return _this4.changePatternEvent(v);
                },
                patternLabel: 'Pattern',
                gridSizesIndex: this.props.gridSizesIndex,
                gridSizesLabel: this.gridSizesLabel,
                changeBoardSizeEventHandler: function changeBoardSizeEventHandler(v) {
                    return _this4.changeBoardSizeEventHandler(v);
                },
                gridLabel: 'Board Size',
                justify: 'center',

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 344
                }
            }))) : _react2.default.createElement(_Grid2.default, { item: true, xs: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 360
                }
            }, _react2.default.createElement(_SelectButtonsBar2.default, {
                patternNamesIndex: this.props.patternNamesIndex,
                patternNames: this.patternNames,
                changePatternEvent: function changePatternEvent(v) {
                    return _this4.changePatternEvent(v);
                },
                patternLabel: 'Pattern',
                gridSizesIndex: this.props.gridSizesIndex,
                gridSizesLabel: this.gridSizesLabel,
                changeBoardSizeEventHandler: function changeBoardSizeEventHandler(v) {
                    return _this4.changeBoardSizeEventHandler(v);
                },
                gridLabel: 'Board Size',

                direction: 'column',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 364
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, lg: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 383
                }
            }), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 386
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 387
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, className: 'paddingSides', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 388
                }
            }, _react2.default.createElement('canvas', {
                ref: function ref(canvas) {
                    _this4.canvasBoard = canvas;
                },
                onClick: function onClick(e) {
                    return _this4.handleClick(e);
                },
                className: 'jsx-3402553610',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 389
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 396
                }
            }, _react2.default.createElement(_PlayButtonsBar2.default, {
                on: this.props.stopped[_boardNames.boardNames.MAIN],
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle();
                },
                step: function step() {
                    return _this4.step();
                },
                clear: function clear() {
                    return _this4.clear();
                },
                color: 'rgba(0, 0, 0, .7)',
                fps: this.props.fps,
                setInterval: function setInterval(v) {
                    return _this4.setInterval(v);
                },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 397
                }
            })))), _react2.default.createElement(_Grid2.default, { item: true, lg: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 410
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '3402553610',
                css: '.gameBoard{text-align:center;margin-top:80px;z-index:2;}.paddingSides{padding-left:10px;padding-right:10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOFprQyxBQUcyQyxBQU1BLGtCQUxGLEFBTUcsZ0JBTFQsR0FNZCxPQUpDIiwiZmlsZSI6ImNvbXBvbmVudHNcXEdhbWUuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InO1xyXG5pbXBvcnQgR2FtZUdyaWQgZnJvbSAnLi4vaGVscGVycy9HYW1lR3JpZCc7XHJcblxyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHdpdGhSb290IGZyb20gJy4vd2l0aFJvb3QnO1xyXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBTZWxlY3RCdXR0b25zQmFyIGZyb20gJy4vU2VsZWN0QnV0dG9uc0Jhcic7XHJcbmltcG9ydCBQbGF5QnV0dG9uc0JhciBmcm9tICcuL1BsYXlCdXR0b25zQmFyJztcclxuaW1wb3J0IHtib2FyZE5hbWVzfSBmcm9tICcuLi9oZWxwZXJzL2JvYXJkTmFtZXMnO1xyXG5pbXBvcnQge2JvYXJkU2l6ZXN9IGZyb20gJy4uL2hlbHBlcnMvYm9hcmRTaXplcyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJ21hdGVyaWFsLXVpL1N2Z0ljb24nO1xyXG5pbXBvcnQgRGlhbG9nLCB7XHJcbiAgRGlhbG9nQWN0aW9ucyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gIERpYWxvZ1RpdGxlLFxyXG59IGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbmNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemVzLm1lZGl1bTtcclxuIFxyXG4gICAgICAgIGlmKHByb3BzLmNlbGxzTGlzdCl7XHJcbiAgICAgICAgICAgIHN3aXRjaChwcm9wcy5ncmlkU2l6ZXNJbmRleCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHRoaXMuY3VycmVudEJvYXJkU2l6ZSA9IGJvYXJkU2l6ZXMuc21hbGw7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemVzLmxhcmdlOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFdpZHRoID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZ3JpZEhlaWdodCA9IHRoaXMuY3VycmVudEJvYXJkU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLnNxdWFyZVNpemU7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFNpemVzTGFiZWwgPSBbXHJcbiAgICAgICAgICAgIGJvYXJkU2l6ZXMuc21hbGwuaGVpZ2h0ICsgXCIgWCBcIiArIGJvYXJkU2l6ZXMuc21hbGwud2lkdGgsXHJcbiAgICAgICAgICAgIGJvYXJkU2l6ZXMubWVkaXVtLmhlaWdodCArIFwiIFggXCIgKyBib2FyZFNpemVzLm1lZGl1bS53aWR0aCxcclxuICAgICAgICAgICAgYm9hcmRTaXplcy5sYXJnZS5oZWlnaHQgKyBcIiBYIFwiICsgYm9hcmRTaXplcy5sYXJnZS53aWR0aFxyXG4gICAgICAgIF07XHJcblxyXG5cclxuICAgICAgICB0aGlzLnBhdHRlcm5OYW1lcyA9IFtcIlJhbmRvbVwiXTtcclxuICAgICAgICBpZihwcm9wcy5wYXR0ZXJucyl7XHJcbiAgICAgICAgICAgIHRoaXMucGF0dGVybk5hbWVzID0gdGhpcy5wYXR0ZXJuTmFtZXMuY29uY2F0KHByb3BzLnBhdHRlcm5zLm1hcChwYXR0ZXJuID0+IHBhdHRlcm4ubmFtZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0xpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGUgPSB7XHJcbiAgICAgICAgICAgIGRyYXdpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGVhcjp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0UHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF1c2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGVhclByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBQcmVzc2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLk1BSU4sIHRoaXMuZ3JpZFdpZHRoLCB0aGlzLmdyaWRIZWlnaHQsIHRoaXMuc3F1YXJlU2l6ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlUGF0dGVybiA9IGluZGV4ID0+IHByb3BzLmNoYW5nZVBhdHRlcm4oaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQm9hcmRTaXplID0gaW5kZXggPT4gcHJvcHMuY2hhbmdlQm9hcmRTaXplKGluZGV4KTtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlU3RvcHBlZCA9ICgpID0+IHByb3BzLnRvZ2dsZVN0b3BwZWQoKTtcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQgPSBzdG9wcGVkID0+IHByb3BzLnNldFN0b3BwZWQoc3RvcHBlZCwgdGhpcy5ncmlkLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuaW5jcmVtZW50R2VuZXJhdGlvbiA9ICgpID0+IHByb3BzLmluY3JlbWVudEdlbmVyYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNldFNwZWVkID0gZnBzID0+IHByb3BzLnNldFNwZWVkKGZwcyk7XHJcbiAgICAgICAgdGhpcy5zZXRDbGVhciA9ICgpID0+IHByb3BzLnNldENsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRHYW1lVmFsdWVzID0gIChjZWxsc0xpc3QsIHNpemUpID0+IHByb3BzLnNldEdhbWVWYWx1ZXMoY2VsbHNMaXN0LCBzaXplKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzaG93TWVzc2FnZTogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVsb2FkKGJvYXJkU2l6ZSl7XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZVByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsZWFyUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RlcFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemU7XHJcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSB0aGlzLmN1cnJlbnRCb2FyZFNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ncmlkSGVpZ2h0ID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLmhlaWdodDsgXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLnNxdWFyZVNpemU7XHJcbiAgICAgICAgdGhpcy5ncmlkLnJlbG9hZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHRoaXMuY2FudmFzQm9hcmQpO1xyXG4gICAgICAgIHRoaXMubW9kZS5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGVPbmNlKCl7XHJcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZSh0aGlzLm1vZGUpO1xyXG4gICAgICAgIGlmKCF0aGlzLm1vZGUuZHJhd2luZylcclxuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRHZW5lcmF0aW9uKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWx0YSA+IHRoaXMuaW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZGVsdGEgJSB0aGlzLmludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7IFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2NyZWVuIDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UodGhpcy5jYW52YXNCb2FyZCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjaGFuZ2VQYXR0ZXJuRXZlbnQoaW5kZXgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGluZGV4ICE9PSB0aGlzLnByb3BzLnBhdHRlcm5OYW1lc0luZGV4KXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jaGFuZ2VQYXR0ZXJuKGluZGV4LCB0aGlzLnByb3BzLnBhdHRlcm5zLCB0aGlzLm1vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBhdHRlcm4oaW5kZXgpXHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kZS5jbGVhcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcihpbmRleCl7XHJcbiAgICAgICAgaWYoaW5kZXggIT09IHRoaXMucHJvcHMuZ3JpZFNpemVzSW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHNpemUgPSBib2FyZFNpemVzLnNtYWxsO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHNpemUgPSBib2FyZFNpemVzLm1lZGl1bTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzaXplID0gYm9hcmRTaXplcy5sYXJnZTtcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVsb2FkKHNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJvYXJkU2l6ZShpbmRleClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZVBsYXlUb2dnbGUoKXtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5NQUlOXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfTsgIFxyXG5cclxuICAgIHNldEludGVydmFsKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmludGVydmFsPTEwMDAvdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTcGVlZCh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VCdXR0b25QcmVzc2VkU3RhdHVzKGJ1dHRvblByZXNzZWQpe1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0UHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF1c2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGVhclByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBQcmVzc2VkID0gZmFsc2U7ICAgICAgICBcclxuICAgICAgICBzd2l0Y2goYnV0dG9uUHJlc3NlZCl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXVzZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZVByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFwiY2xlYXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxyXG4gICAgICAgICAgICBjYXNlIFwic3RlcFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhlKXtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vZGUuZHJhd2luZz10cnVlO1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5NQUlOXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpc0NlbGxDbGlja2VkID0gdGhpcy5ncmlkLmhhbmRsZUNsaWNrKGUpO1xyXG5cclxuICAgICAgICBpZihpc0NlbGxDbGlja2VkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhcj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhcnRQcmVzc2VkICYmICF0aGlzLm1vZGUuY2xlYXIpe1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMoXCJzdGFydFwiKTtcclxuICAgICAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnBhdXNlUHJlc3NlZCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInBhdXNlXCIpO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLm1vZGUuY2xlYXIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhXCIpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZS5kcmF3aW5nPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKXtcclxuICAgICAgICBpZighdGhpcy5zdGFydFByZXNzZWQgJiYgIXRoaXMubW9kZS5jbGVhcil7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInN0ZXBcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kZS5kcmF3aW5nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZS5kcmF3aW5nPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzY3JlZW46IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIFxyXG4gICAgdGhpcy5pbnRlcnZhbD0xMDAwL3RoaXMucHJvcHMuZnBzO3RoaXMuaW50ZXJ2YWw9MTAwMC90aGlzLnByb3BzLmZwcztcclxuICAgIGNvbnN0IHJhdGlvID0gdGhpcy5zdGF0ZS5zY3JlZW4gPyB0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyA6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgIGlmKCF0aGlzLnByb3BzLmNlbGxzTGlzdCl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXI9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5tYWtlQm9hcmQodGhpcy5ncmlkV2lkdGgsdGhpcy5ncmlkSGVpZ2h0LHRoaXMuc3F1YXJlU2l6ZSxyYXRpbyx0aGlzLmNhbnZhc0JvYXJkLG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ncmlkLm1ha2VCb2FyZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHJhdGlvLHRoaXMuY2FudmFzQm9hcmQsdGhpcy5wcm9wcy5jZWxsc0xpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVPcGVuRXJyb3JEaWFsb2coKVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7ICAgIFxyXG4gICAgICAgIGxldCBsaXZlQ2VsbHNMaXN0ID0gdGhpcy5ncmlkLmdldExpdmVDZWxscygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0R2FtZVZhbHVlcyhsaXZlQ2VsbHNMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9wZW5FcnJvckRpYWxvZyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TWVzc2FnZTogdHJ1ZX0pO1xyXG4gICAgfTsgICBcclxuICAgIFxyXG4gICAgaGFuZGxlQ2xvc2VFcnJvckRpYWxvZyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TWVzc2FnZTogZmFsc2V9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJucyA9IHRoaXMucHJvcHMucGF0dGVybnM7XHJcbiAgICAgICAgY29uc3QgTG9hZGluZyA9ICgpID0+ICg8ZGl2PkxvYWRpbmcuLi48L2Rpdj4pXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gdGhpcy5zdGF0ZS5zY3JlZW4gPyB0aGlzLnN0YXRlLnNjcmVlbiA6IHt9O1xyXG4gICAgXHJcbiAgICAgIFx0cmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZUJvYXJkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NyZWVuLndpZHRoIDwgc2NyZWVuLmhlaWdodCB8fCAgc2NyZWVuLndpZHRoID4gMTI4MCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmdTaWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEJ1dHRvbnNCYXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzSW5kZXg9e3RoaXMucHJvcHMucGF0dGVybk5hbWVzSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzPXt0aGlzLnBhdHRlcm5OYW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXR0ZXJuRXZlbnQ9eyh2KSA9PiB0aGlzLmNoYW5nZVBhdHRlcm5FdmVudCh2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTGFiZWw9XCJQYXR0ZXJuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkU2l6ZXNJbmRleD17dGhpcy5wcm9wcy5ncmlkU2l6ZXNJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkU2l6ZXNMYWJlbD17dGhpcy5ncmlkU2l6ZXNMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXI9eyh2KSA9PiB0aGlzLmNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcih2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGFiZWw9XCJCb2FyZCBTaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RCdXR0b25zQmFyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzSW5kZXg9e3RoaXMucHJvcHMucGF0dGVybk5hbWVzSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZXM9e3RoaXMucGF0dGVybk5hbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0dGVybkV2ZW50PXsodikgPT4gdGhpcy5jaGFuZ2VQYXR0ZXJuRXZlbnQodil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTGFiZWw9XCJQYXR0ZXJuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRTaXplc0luZGV4PXt0aGlzLnByb3BzLmdyaWRTaXplc0luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFNpemVzTGFiZWw9e3RoaXMuZ3JpZFNpemVzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXI9eyh2KSA9PiB0aGlzLmNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcih2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMYWJlbD1cIkJvYXJkIFNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJwYWRkaW5nU2lkZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoY2FudmFzKSA9PiB7IHRoaXMuY2FudmFzQm9hcmQgPSBjYW52YXN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlCdXR0b25zQmFyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZT17KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsoKSA9PiB0aGlzLnN0ZXAoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyPXsoKSA9PiB0aGlzLmNsZWFyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncmdiYSgwLCAwLCAwLCAuNyknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcHM9e3RoaXMucHJvcHMuZnBzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWw9eyh2KSA9PiB0aGlzLnNldEludGVydmFsKHYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5nYW1lQm9hcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBhZGRpbmdTaWRlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17dGhpcy5zdGF0ZS5zaG93TWVzc2FnZX0gb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VFcnJvckRpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT57XCJDYW5gdCBkb3dubG9hZCBwYXR0ZXJuc1wifTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIFdlIGFyZSBzb3JyeSEgRm9yIHNvbWUgcmVhc29uIHdlIGNvdWRuYHQgZG93bmxvYWQgb3VyIGV4YW1wbGUgcGF0dGVybnMgZnJvbSBnaXRodWIgc2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgQnV0IHlvdSBjYW4gZHJhdyB5b3VyIHBhdHRlcm5zIG9uIHRoZSBib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlRXJyb3JEaWFsb2d9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT0tcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG5cclxuY29uc3QgVFdPX05VTUJFUlNfQVJSQVkgPSBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpe1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BzLnByb3BOYW1lKSB8fCBwcm9wcy5wcm9wTmFtZS5sZW5ndGggIT0gMiB8fCAhcHJvcHMucHJvcE5hbWUuZXZlcnkoTnVtYmVyLmlzSW50ZWdlcikpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGAke3Byb3BOYW1lfSBuZWVkcyB0byBiZSBhbiBhcnJheSBvZiB0d28gbnVtYmVyc2ApO1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuXHJcbkdhbWUucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgc2V0U3RvcHBlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHN0b3BwZWQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgW2JvYXJkTmFtZXMuTUFJTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJMT0NLXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQk9BVF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkxPQUZdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CRUVISVZFXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkxJTktFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJFQUNPTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLlRPQURdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5HTElERVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5TUEFDRVNISVBdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5HVU5dOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbiAgICBjZWxsc0xpc3Q6IFRXT19OVU1CRVJTX0FSUkFZLFxyXG4gICAgcGF0dGVybnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBwYXR0ZXJuOiBUV09fTlVNQkVSU19BUlJBWVxyXG4gICAgICAgIH0pXHJcbiAgICApLFxyXG4gICAgY2hhbmdlUGF0dGVybjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGNoYW5nZUJvYXJkU2l6ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHRvZ2dsZVN0b3BwZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBpbmNyZW1lbnRHZW5lcmF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2V0U3BlZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzZXRDbGVhcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHNldEdhbWVWYWx1ZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBwYXR0ZXJuTmFtZXNJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGdyaWRTaXplc0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZnBzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuIl19 */\n/*@ sourceURL=components\\Game.js */'
            }), _react2.default.createElement(_Dialog2.default, { open: this.state.showMessage, onRequestClose: this.handleCloseErrorDialog, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 428
                }
            }, _react2.default.createElement(_Dialog.DialogTitle, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 429
                }
            }, "Can`t download patterns"), _react2.default.createElement(_Dialog.DialogContent, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 430
                }
            }, _react2.default.createElement(_Dialog.DialogContentText, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 431
                }
            }, 'We are sorry! For some reason we coudn`t download our example patterns from github server. But you can draw your patterns on the board')), _react2.default.createElement(_Dialog.DialogActions, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 436
                }
            }, _react2.default.createElement(_Button2.default, { onClick: this.handleCloseErrorDialog, color: 'primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 437
                }
            }, 'OK'))));
        }
    }]);
    return Game;
}(_react.Component);

exports.default = Game;

var TWO_NUMBERS_ARRAY = function TWO_NUMBERS_ARRAY(props, propName, componentName) {
    if (!Array.isArray(props.propName) || props.propName.length != 2 || !props.propName.every(_isInteger2.default)) {
        return new Error(propName + ' needs to be an array of two numbers');
    }
};

Game.propTypes = {
    classes: _propTypes2.default.object.isRequired,
    setStopped: _propTypes2.default.func.isRequired,
    stopped: _propTypes2.default.shape((_PropTypes$shape = {}, (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.MAIN, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLOCK, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BOAT, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.LOAF, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEEHIVE, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLINKER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEACON, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.TOAD, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GLIDER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.SPACESHIP, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GUN, _propTypes2.default.bool), _PropTypes$shape)).isRequired,
    cellsList: TWO_NUMBERS_ARRAY,
    patterns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string,
        pattern: TWO_NUMBERS_ARRAY
    })),
    changePattern: _propTypes2.default.func.isRequired,
    changeBoardSize: _propTypes2.default.func.isRequired,
    toggleStopped: _propTypes2.default.func.isRequired,
    incrementGeneration: _propTypes2.default.func.isRequired,
    setSpeed: _propTypes2.default.func.isRequired,
    setClear: _propTypes2.default.func.isRequired,
    setGameValues: _propTypes2.default.func.isRequired,
    patternNamesIndex: _propTypes2.default.number,
    gridSizesIndex: _propTypes2.default.number,
    fps: _propTypes2.default.number,
    error: _propTypes2.default.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInByb3BzIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsInNldFN0YXRlIiwic2NyZWVuIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJncmlkIiwiY2FudmFzQm9hcmQiLCJoYW5kbGVPcGVuRXJyb3JEaWFsb2ciLCJzaG93TWVzc2FnZSIsImhhbmRsZUNsb3NlRXJyb3JEaWFsb2ciLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEJvYXJkU2l6ZSIsIm1lZGl1bSIsImNlbGxzTGlzdCIsImdyaWRTaXplc0luZGV4Iiwic21hbGwiLCJsYXJnZSIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJzcXVhcmVTaXplIiwiZ3JpZFNpemVzTGFiZWwiLCJwYXR0ZXJuTmFtZXMiLCJwYXR0ZXJucyIsImNvbmNhdCIsIm1hcCIsInBhdHRlcm4iLCJuYW1lIiwiY2hlY2tMaXN0IiwibW9kZSIsImRyYXdpbmciLCJjbGVhciIsInN0YXJ0UHJlc3NlZCIsInBhdXNlUHJlc3NlZCIsImNsZWFyUHJlc3NlZCIsInN0ZXBQcmVzc2VkIiwiTUFJTiIsImNoYW5nZVBhdHRlcm4iLCJpbmRleCIsImNoYW5nZUJvYXJkU2l6ZSIsInN0YXJ0IiwiYmluZCIsInRvZ2dsZVN0b3BwZWQiLCJzZXRTdG9wcGVkIiwic3RvcHBlZCIsImluY3JlbWVudEdlbmVyYXRpb24iLCJzZXRTcGVlZCIsImZwcyIsInNldENsZWFyIiwic2V0R2FtZVZhbHVlcyIsInNpemUiLCJzdGF0ZSIsImJvYXJkU2l6ZSIsInN0b3AiLCJyZWxvYWQiLCJ1cGRhdGUiLCJub3ciLCJEYXRlIiwiZGVsdGEiLCJ0aGVuIiwiaW50ZXJ2YWwiLCJ1cGRhdGVPbmNlIiwickFGIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGF0dGVybk5hbWVzSW5kZXgiLCJ2YWx1ZSIsImJ1dHRvblByZXNzZWQiLCJlIiwiaXNDZWxsQ2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCb2FyZCIsImVycm9yIiwibGl2ZUNlbGxzTGlzdCIsImdldExpdmVDZWxscyIsIkxvYWRpbmciLCJ2IiwiY2hhbmdlUGF0dGVybkV2ZW50IiwiY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyIiwiY2FudmFzIiwiaGFuZGxlUGxheVRvZ2dsZSIsInN0ZXAiLCJzZXRJbnRlcnZhbCIsIlRXT19OVU1CRVJTX0FSUkFZIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXZlcnkiLCJFcnJvciIsInByb3BUeXBlcyIsImNsYXNzZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwiYm9vbCIsIkJMT0NLIiwiQk9BVCIsIkxPQUYiLCJCRUVISVZFIiwiQkxJTktFUiIsIkJFQUNPTiIsIlRPQUQiLCJHTElERVIiLCJTUEFDRVNISVAiLCJHVU4iLCJhcnJheU9mIiwic3RyaW5nIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7OztBQVRBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SSxBQVVNO2tDQUNGOztrQkFBQSxBQUFZLE9BQU07NENBQUE7O3NJQUFBLEFBQ1I7O2NBRFEsQUFpR2xCLHlCQUF5QixZQUFNLEFBQzNCO2tCQUFBLEFBQUs7OzJCQUVVLE9BREYsQUFDUyxBQUNkOzRCQUFRLE9BRkgsQUFFVSxBQUNmOzJCQUFPLE9BQUEsQUFBTyxvQkFKdEIsQUFBYyxBQUNELEFBRzZCLEFBRzFDO0FBTmEsQUFDTDtBQUZNLEFBQ1Y7a0JBTUosQUFBSyxLQUFMLEFBQVUsdUJBQXVCLE1BQWpDLEFBQXNDLEFBQ3pDO0FBMUdpQjs7Y0FBQSxBQXFTbEIsd0JBQXdCLFlBQU0sQUFDMUI7a0JBQUEsQUFBSyxTQUFTLEVBQUMsYUFBZixBQUFjLEFBQWMsQUFDL0I7QUF2U2lCOztjQUFBLEFBeVNsQix5QkFBeUIsWUFBTSxBQUMzQjtrQkFBQSxBQUFLLFNBQVMsRUFBQyxhQUFmLEFBQWMsQUFBYyxBQUMvQjtBQTNTaUIsQUFFdEI7O2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7Y0FBQSxBQUFLLG1CQUFtQix1QkFBeEIsQUFBbUMsQUFFbkM7O1lBQUcsTUFBSCxBQUFTLFdBQVUsQUFDZjtvQkFBTyxNQUFQLEFBQWEsQUFDVDtxQkFBQSxBQUFLLEFBQUc7MEJBQUEsQUFBSyxtQkFBbUIsdUJBQXhCLEFBQW1DLE1BQU8sQUFDbEQ7cUJBQUEsQUFBSyxBQUFHOzBCQUFBLEFBQUssbUJBQW1CLHVCQUF4QixBQUFtQyxNQUYvQyxBQUVzRCxBQUd6RDs7QUFFRDs7Y0FBQSxBQUFLLFlBQVksTUFBQSxBQUFLLGlCQUF0QixBQUF1QyxBQUN2QztjQUFBLEFBQUssYUFBYSxNQUFBLEFBQUssaUJBQXZCLEFBQXdDLEFBQ3hDO2NBQUEsQUFBSyxhQUFhLE1BQUEsQUFBSyxpQkFBdkIsQUFBd0MsQUFFeEM7O2NBQUEsQUFBSyxpQkFBaUIsQ0FDbEIsdUJBQUEsQUFBVyxNQUFYLEFBQWlCLFNBQWpCLEFBQTBCLFFBQVEsdUJBQUEsQUFBVyxNQUQzQixBQUNpQyxPQUNuRCx1QkFBQSxBQUFXLE9BQVgsQUFBa0IsU0FBbEIsQUFBMkIsUUFBUSx1QkFBQSxBQUFXLE9BRjVCLEFBRW1DLE9BQ3JELHVCQUFBLEFBQVcsTUFBWCxBQUFpQixTQUFqQixBQUEwQixRQUFRLHVCQUFBLEFBQVcsTUFIakQsQUFBc0IsQUFHaUMsQUFJdkQ7O2NBQUEsQUFBSyxlQUFlLENBQXBCLEFBQW9CLEFBQUMsQUFDckI7WUFBRyxNQUFILEFBQVMsVUFBUyxBQUNkO2tCQUFBLEFBQUsscUJBQWUsQUFBSyxhQUFMLEFBQWtCLGFBQU8sQUFBTSxTQUFOLEFBQWUsSUFBSSxtQkFBQTt1QkFBVyxRQUFYLEFBQW1CO0FBQW5GLEFBQW9CLEFBQXlCLEFBQ2hELGFBRGdELENBQXpCO0FBR3hCOztjQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtjQUFBLEFBQUs7cUJBQU8sQUFDQyxBQUNUO21CQUZKLEFBQVksQUFFRixBQUVWO0FBSlksQUFDUjtjQUdKLEFBQUssZUFBTCxBQUFvQixBQUNwQjtjQUFBLEFBQUssZUFBTCxBQUFvQixBQUNwQjtjQUFBLEFBQUssZUFBTCxBQUFvQixBQUNwQjtjQUFBLEFBQUssY0FBTCxBQUFtQixBQUVuQjs7Y0FBQSxBQUFLLE9BQU8sdUJBQWEsdUJBQWIsQUFBd0IsTUFBTSxNQUE5QixBQUFtQyxXQUFXLE1BQTlDLEFBQW1ELFlBQVksTUFBM0UsQUFBWSxBQUFvRSxBQUVoRjs7Y0FBQSxBQUFLLGdCQUFnQixpQkFBQTttQkFBUyxNQUFBLEFBQU0sY0FBZixBQUFTLEFBQW9CO0FBQWxELEFBQ0E7Y0FBQSxBQUFLLGtCQUFrQixpQkFBQTttQkFBUyxNQUFBLEFBQU0sZ0JBQWYsQUFBUyxBQUFzQjtBQUF0RCxBQUNBO2NBQUEsQUFBSyxRQUFRLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FBeEIsQUFDQTtjQUFBLEFBQUssZ0JBQWdCLFlBQUE7bUJBQU0sTUFBTixBQUFNLEFBQU07QUFBakMsQUFDQTtjQUFBLEFBQUssYUFBYSxtQkFBQTttQkFBVyxNQUFBLEFBQU0sV0FBTixBQUFpQixTQUFTLE1BQUEsQUFBSyxLQUExQyxBQUFXLEFBQW9DO0FBQWpFLEFBQ0E7Y0FBQSxBQUFLLHNCQUFzQixZQUFBO21CQUFNLE1BQU4sQUFBTSxBQUFNO0FBQXZDLEFBQ0E7Y0FBQSxBQUFLLFdBQVcsZUFBQTttQkFBTyxNQUFBLEFBQU0sU0FBYixBQUFPLEFBQWU7QUFBdEMsQUFDQTtjQUFBLEFBQUssV0FBVyxZQUFBO21CQUFNLE1BQU4sQUFBTSxBQUFNO0FBQTVCLEFBQ0E7Y0FBQSxBQUFLLGdCQUFpQixVQUFBLEFBQUMsV0FBRCxBQUFZLE1BQVo7bUJBQXFCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLFdBQXpDLEFBQXFCLEFBQStCO0FBQTFFLEFBRUE7O2NBQUEsQUFBSyxRQUFRLEVBQUMsYUFuREEsQUFtRGQsQUFBYSxBQUFjO2VBQzlCOzs7OzsrQkFJTSxBLFdBQVUsQUFFYjs7aUJBQUEsQUFBSyxBQUNMO2lCQUFBLEFBQUssZUFBTCxBQUFvQixBQUNwQjtpQkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7aUJBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCO2lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjtpQkFBQSxBQUFLLG1CQUFMLEFBQXdCLEFBQ3hCO2lCQUFBLEFBQUssWUFBWSxLQUFBLEFBQUssaUJBQXRCLEFBQXVDLEFBQ3ZDO2lCQUFBLEFBQUssYUFBYSxLQUFBLEFBQUssaUJBQXZCLEFBQXdDLEFBQ3hDO2lCQUFBLEFBQUssYUFBYSxLQUFBLEFBQUssaUJBQXZCLEFBQXdDLEFBQ3hDO2lCQUFBLEFBQUssS0FBTCxBQUFVLE9BQU8sS0FBakIsQUFBc0IsV0FBVSxLQUFoQyxBQUFxQyxZQUFXLEtBQWhELEFBQXFELFlBQVcsS0FBaEUsQUFBcUUsQUFDckU7aUJBQUEsQUFBSyxLQUFMLEFBQVUsUUFBVixBQUFrQixBQUNsQjtpQkFBQSxBQUFLLEtBQUwsQUFBVSxVQUFWLEFBQW9CLEFBRXZCOzs7O3FDQUlXLEFBQ1I7aUJBQUEsQUFBSyxLQUFMLEFBQVUsT0FBTyxLQUFqQixBQUFzQixBQUN0QjtnQkFBRyxDQUFDLEtBQUEsQUFBSyxLQUFULEFBQWMsU0FDVixLQUFBLEFBQUssQUFFWjs7OztpQ0FFTzt5QkFDQTs7aUJBQUEsQUFBSyxNQUFNLEtBQVgsQUFBVyxBQUFLLEFBQ2hCO2lCQUFBLEFBQUssUUFBUSxLQUFBLEFBQUssTUFBTSxLQUF4QixBQUE2QixBQUU3Qjs7Z0JBQUksS0FBQSxBQUFLLFFBQVEsS0FBakIsQUFBc0IsVUFBVSxBQUM1QjtxQkFBQSxBQUFLLE9BQU8sS0FBQSxBQUFLLE1BQU8sS0FBQSxBQUFLLFFBQVEsS0FBckMsQUFBMEMsQUFFMUM7O3FCQUFBLEFBQUssQUFFUjtBQUNEO2lCQUFBLEFBQUssNEJBQTRCLFlBQUssQUFBQzt1QkFBQSxBQUFLLEFBQVM7QUFBckQsQUFBVyxBQUVsQixhQUZrQjs7OzsyQyxBQWlCQSxPQUFNLEFBRXJCOztnQkFBRyxVQUFVLEtBQUEsQUFBSyxNQUFsQixBQUF3QixtQkFBa0IsQUFFdEM7O3FCQUFBLEFBQUssS0FBTCxBQUFVLGNBQVYsQUFBd0IsT0FBTyxLQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFBVSxLQUFwRCxBQUF5RCxBQUN6RDtxQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7b0JBQUcsS0FBQSxBQUFLLEtBQVIsQUFBYSxPQUFNLEFBQ2Y7eUJBQUEsQUFBSyxLQUFMLEFBQVUsUUFBVixBQUFrQixBQUNsQjt5QkFBQSxBQUFLLEFBRVI7QUFKRCx1QkFJTyxBQUNIO3lCQUFBLEFBQUssQUFFYjs7eUJBQUEsQUFBSyxBQUNBO0FBRUo7QUFFSjs7OztvRCxBQUUyQixPQUFNLEFBQzlCO2dCQUFHLFVBQVUsS0FBQSxBQUFLLE1BQWxCLEFBQXdCLGdCQUN4QixBQUNJO29CQUFJLFlBQUosQUFFQTs7b0JBQUcsVUFBSCxBQUFhLEdBQUUsQUFDWDsyQkFBTyx1QkFBUCxBQUFrQixBQUNyQjtBQUZELDJCQUVVLFVBQUgsQUFBYSxHQUFHLEFBQ25COzJCQUFPLHVCQUFQLEFBQWtCLEFBQ3JCO0FBRk0saUJBQUEsTUFFQSxJQUFHLFVBQUgsQUFBYSxHQUFHLEFBQ25COzJCQUFPLHVCQUFQLEFBQWtCLEFBQ3JCO0FBRUQ7O3FCQUFBLEFBQUssT0FBTCxBQUFZLEFBQ1o7cUJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUN4QjtBQUNKOzs7OzJDQUdpQixBQUdkOztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsdUJBQXRCLEFBQUcsQUFBOEIsT0FBTSxBQUNuQztxQkFBQSxBQUFLLEFBQ1I7QUFGRCxtQkFFTyxBQUVIOztxQkFBQSxBQUFLLEFBQ1I7QUFHSjs7OztvQ0FFVyxBLE9BQU0sQUFDZDtpQkFBQSxBQUFLLFdBQVMsT0FBZCxBQUFtQixBQUNuQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxBQUNqQjs7OztrRCxBQUV5QixlQUFjLEFBRXBDOztpQkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7aUJBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCO2lCQUFBLEFBQUssZUFBTCxBQUFvQixBQUNwQjtpQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7b0JBQUEsQUFBTyxBQUNIO3FCQUFBLEFBQUssQUFDRDt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7QUFDSjtxQkFBQSxBQUFLLEFBQ0Q7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCO0FBQ0o7cUJBQUEsQUFBSyxBQUNEO3lCQUFBLEFBQUssZUFBTCxBQUFvQixBQUNwQjtBQUNKO3FCQUFBLEFBQUssQUFDRDt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDcEI7QUFaUCxBQWVIOzs7OztvQ0FFVyxBLEdBQUUsQUFFVjs7aUJBQUEsQUFBSyxLQUFMLEFBQVUsVUFBVixBQUFrQixBQUNsQjtnQkFBRyxDQUFDLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSx1QkFBdkIsQUFBSSxBQUE4QixPQUFNLEFBQ3BDO3FCQUFBLEFBQUssQUFDUjtBQUVEOztnQkFBTSxnQkFBZ0IsS0FBQSxBQUFLLEtBQUwsQUFBVSxZQUFoQyxBQUFzQixBQUFzQixBQUU1Qzs7Z0JBQUEsQUFBRyxlQUFjLEFBQ1Q7cUJBQUEsQUFBSyxLQUFMLEFBQVUsUUFBVixBQUFnQixBQUNoQjtxQkFBQSxBQUFLLEFBRVo7QUFHSjs7OztnQ0FJTTt5QkFDSDs7Z0JBQUcsQ0FBQyxLQUFELEFBQU0sZ0JBQWdCLENBQUMsS0FBQSxBQUFLLEtBQS9CLEFBQW9DLE9BQU0sQUFDdEM7cUJBQUEsQUFBSywwQkFBTCxBQUErQixBQUMvQjtxQkFBQSxBQUFLLE9BQU8sS0FBWixBQUFZLEFBQUssQUFDakI7cUJBQUEsQUFBSyxLQUFMLEFBQVUsVUFBVixBQUFrQixBQUNsQjtxQkFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7cUJBQUEsQUFBSyw0QkFBNEIsWUFBSyxBQUFDOzJCQUFBLEFBQUssQUFBUztBQUFyRCxBQUFXLEFBQ2QsaUJBRGM7QUFFbEI7Ozs7K0JBRUssQUFDRjtnQkFBRyxDQUFDLEtBQUosQUFBUyxjQUFhLEFBRWxCOztxQkFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7cUJBQUEsQUFBSywwQkFBTCxBQUErQixBQUMvQjtxQ0FBcUIsS0FBckIsQUFBMEIsQUFDN0I7QUFFSjs7OztnQ0FFTSxBQUVIOztnQkFBRyxDQUFDLEtBQUEsQUFBSyxLQUFULEFBQWMsT0FBTSxBQUNoQjt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3FCQUFBLEFBQUssQUFDTDtxQkFBQSxBQUFLLEFBQ0w7cUJBQUEsQUFBSyxLQUFMLEFBQVUsUUFBVixBQUFrQixBQUNsQjtxQkFBQSxBQUFLLEtBQUwsQUFBVSxVQUFWLEFBQWtCLEFBQ2xCO3FCQUFBLEFBQUssQUFDUjtBQUVKOzs7OytCQUVLLEFBQ0Y7Z0JBQUcsQ0FBQyxLQUFELEFBQU0sZ0JBQWdCLENBQUMsS0FBQSxBQUFLLEtBQS9CLEFBQW9DLE9BQU0sQUFDdEM7cUJBQUEsQUFBSywwQkFBTCxBQUErQixBQUMvQjtvQkFBRyxLQUFBLEFBQUssS0FBUixBQUFhLFNBQVEsQUFDakI7eUJBQUEsQUFBSyxLQUFMLEFBQVUsVUFBVixBQUFrQixBQUNyQjtBQUNEO3FCQUFBLEFBQUssQUFDUjtBQUNKOzs7OzZDQUVtQixBQUNoQjttQkFBQSxBQUFPLGlCQUFQLEFBQXdCLFVBQVUsS0FBbEMsQUFBdUMsQUFDdkM7aUJBQUEsQUFBSyxXQUFVOzJCQUNBLE9BRFEsQUFDRCxBQUNkOzRCQUFRLE9BRk8sQUFFQSxBQUNmOzJCQUFPLE9BQUEsQUFBTyxvQkFIdEIsQUFBYyxBQUFTLEFBR21CLEFBRzdDO0FBTjBCLEFBQ2Y7QUFETTs7Ozs0Q0FRQyxBQUVuQjs7aUJBQUEsQUFBSyxXQUFTLE9BQUssS0FBQSxBQUFLLE1BQXhCLEFBQThCLElBQUksS0FBQSxBQUFLLFdBQVMsT0FBSyxLQUFBLEFBQUssTUFBeEIsQUFBOEIsQUFDaEU7Z0JBQU0sUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUEvQixBQUFzQyxRQUFRLE9BQUEsQUFBTyxvQkFBbkUsQUFBdUYsQUFDcEY7Z0JBQUcsQ0FBQyxLQUFBLEFBQUssTUFBVCxBQUFlLFdBQVUsQUFFcEI7O3FCQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBZ0IsQUFDaEI7cUJBQUEsQUFBSyxLQUFMLEFBQVUsVUFBVSxLQUFwQixBQUF5QixXQUFVLEtBQW5DLEFBQXdDLFlBQVcsS0FBbkQsQUFBd0QsWUFBeEQsQUFBbUUsT0FBTSxLQUF6RSxBQUE4RSxhQUE5RSxBQUEwRixBQUMxRjtxQkFBQSxBQUFLLEFBRVI7QUFORixtQkFNUSxBQUNIO3FCQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsQUFDbEI7cUJBQUEsQUFBSyxLQUFMLEFBQVUsVUFBVSxLQUFwQixBQUF5QixXQUFVLEtBQW5DLEFBQXdDLFlBQVcsS0FBbkQsQUFBd0QsWUFBeEQsQUFBbUUsT0FBTSxLQUF6RSxBQUE4RSxhQUFZLEtBQUEsQUFBSyxNQUEvRixBQUFxRyxBQUNyRztxQkFBQSxBQUFLLEFBQ1I7QUFFRDs7Z0JBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxPQUFNLEFBQ1o7cUJBQUEsQUFBSyxBQUNSO0FBRVI7Ozs7K0NBR3FCLEFBRWxCOztpQ0FBcUIsS0FBckIsQUFBMEIsQUFDMUI7Z0JBQUksZ0JBQWdCLEtBQUEsQUFBSyxLQUF6QixBQUFvQixBQUFVLEFBRTlCOztpQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDdEI7Ozs7aUNBVVE7eUJBQ0w7O2dCQUFNLFdBQVcsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLEFBQzVCO2dCQUFNLFVBQVUsU0FBVixBQUFVLFVBQUE7dUNBQU8sY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLGlCQUFBLEVBQVAsQUFBTztBQUF2QixBQUNBO2dCQUFNLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLEtBQUEsQUFBSyxNQUF6QixBQUErQixTQUE5QyxBQUF1RCxBQUV4RDs7bUNBRUssY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUdJO0FBSEo7QUFBQSxhQUFBLGtCQUdJLHFCQUFBLFdBQU0sV0FBTixNQUFnQixTQUFoQixBQUF5Qjs4QkFBekI7Z0NBQUEsQUFDYTtBQURiO3NCQUNhLEFBQU8sUUFBUSxPQUFmLEFBQXNCLFVBQVcsT0FBQSxBQUFPLFFBQXhDLEFBQWdELHVCQUM3QyxxQkFBQSxXQUFNLE1BQU4sTUFBVyxJQUFYLEFBQWU7OEJBQWY7Z0NBQUEsQUFFSTtBQUZKO2FBQUEsa0JBRUksY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQTttQ0FFMkIsS0FBQSxBQUFLLE1BRDVCLEFBQ2tDLEFBQzlCOzhCQUFjLEtBRmxCLEFBRXVCLEFBQ25CO29DQUFvQiw0QkFBQSxBQUFDLEdBQUQ7MkJBQU8sT0FBQSxBQUFLLG1CQUFaLEFBQU8sQUFBd0I7QUFIdkQsQUFJSTs4QkFKSixBQUlpQixBQUNiO2dDQUFnQixLQUFBLEFBQUssTUFMekIsQUFLK0IsQUFDM0I7Z0NBQWdCLEtBTnBCLEFBTXlCLEFBQ3JCOzZDQUE2QixxQ0FBQSxBQUFDLEdBQUQ7MkJBQU8sT0FBQSxBQUFLLDRCQUFaLEFBQU8sQUFBaUM7QUFQekUsQUFRSTsyQkFSSixBQVFjLEFBQ1Y7eUJBVEosQUFTWTs7OzhCQVRaO2dDQUpYLEFBQ0csQUFFSSxBQUNJO0FBQUE7QUFDSSxtQ0FlWixxQkFBQSxXQUFNLE1BQU4sTUFBVyxJQUFYLEFBQWU7OEJBQWY7Z0NBQUEsQUFJSTtBQUpKO2FBQUE7bUNBSzJCLEtBQUEsQUFBSyxNQUQ1QixBQUNrQyxBQUM5Qjs4QkFBYyxLQUZsQixBQUV1QixBQUNuQjtvQ0FBb0IsNEJBQUEsQUFBQyxHQUFEOzJCQUFPLE9BQUEsQUFBSyxtQkFBWixBQUFPLEFBQXdCO0FBSHZELEFBSUk7OEJBSkosQUFJaUIsQUFDYjtnQ0FBZ0IsS0FBQSxBQUFLLE1BTHpCLEFBSytCLEFBQzNCO2dDQUFnQixLQU5wQixBQU15QixBQUNyQjs2Q0FBNkIscUNBQUEsQUFBQyxHQUFEOzJCQUFPLE9BQUEsQUFBSyw0QkFBWixBQUFPLEFBQWlDO0FBUHpFLEFBUUk7MkJBUkosQUFRYyxBQUVWOzsyQkFWSixBQVVjOzs4QkFWZDtnQ0F6QnBCLEFBcUJnQixBQUlJLEFBbUJaO0FBbkJZO0FBQ0ksaUVBa0JWLE1BQU4sTUFBVyxJQUFYLEFBQWU7OEJBQWY7Z0NBNUNSLEFBNENRLEFBR0E7QUFIQTtnQ0FHQSxxQkFBQSxXQUFNLE1BQU4sTUFBVyxJQUFYOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxxQkFBQSxXQUFNLFdBQU4sTUFBZ0IsU0FBaEIsQUFBeUI7OEJBQXpCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxxQkFBQSxXQUFNLE1BQU4sTUFBVyxJQUFYLEFBQWUsSUFBSSxXQUFuQixBQUE2Qjs4QkFBN0I7Z0NBQUEsQUFDSTtBQURKOztxQkFFYSxhQUFBLEFBQUMsUUFBVyxBQUFFOzJCQUFBLEFBQUssY0FBTCxBQUFtQixBQUFPO0FBRGpELEFBRUk7eUJBQVMsaUJBQUEsQUFBQyxHQUFEOzJCQUFPLE9BQUEsQUFBSyxZQUFaLEFBQU8sQUFBaUI7QUFGckM7MkJBQUE7OzhCQUFBO2dDQUZSLEFBQ0ksQUFDSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixxQkFBQSxXQUFNLE1BQU4sTUFBVyxJQUFYLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOztvQkFFWSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsdUJBRDNCLEFBQ1EsQUFBOEIsQUFDbEM7a0NBQWtCLDRCQUFBOzJCQUFNLE9BQU4sQUFBTSxBQUFLO0FBRmpDLEFBR0k7c0JBQU0sZ0JBQUE7MkJBQU0sT0FBTixBQUFNLEFBQUs7QUFIckIsQUFJSTt1QkFBTyxpQkFBQTsyQkFBTSxPQUFOLEFBQU0sQUFBSztBQUp0QixBQUtJO3VCQUxKLEFBS1UsQUFDTjtxQkFBSyxLQUFBLEFBQUssTUFOZCxBQU1vQixBQUNoQjs2QkFBYSxxQkFBQSxBQUFDLEdBQUQ7MkJBQU8sT0FBQSxBQUFLLFlBQVosQUFBTyxBQUFpQjtBQVB6Qzs7OzhCQUFBO2dDQTFEcEIsQUErQ1EsQUFDSSxBQVNJLEFBQ0ksQUFhWjtBQWJZO0FBQ0ksbUVBWVYsTUFBTixNQUFXLElBQVgsQUFBZTs4QkFBZjtnQ0ExRVosQUFHSSxBQXVFUTtBQUFBOzt5QkExRVo7cUJBQUEsQUE0RkU7QUE1RkYsZ0NBNEZFLHVCQUFBLFdBQVEsTUFBTSxLQUFBLEFBQUssTUFBbkIsQUFBeUIsYUFBYSxnQkFBZ0IsS0FBdEQsQUFBMkQ7OEJBQTNEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxzQkFBQTs7OEJBQUE7Z0NBQUEsQUFBYztBQUFkO0FBQUEsZUFESixBQUNJLEFBQ0EsNENBQUEsc0JBQUE7OzhCQUFBO2dDQUFBLEFBQ0U7QUFERjtBQUFBLCtCQUNFLHNCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFITixBQUVJLEFBQ0UsQUFLRiw0SkFBQSxzQkFBQTs7OEJBQUE7Z0NBQUEsQUFDRTtBQURGO0FBQUEsK0JBQ0UsdUJBQUEsV0FBUSxTQUFTLEtBQWpCLEFBQXNCLHdCQUF3QixPQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBQUE7QUFBQTtlQXZHYixBQUVLLEFBNEZFLEFBUUksQUFDRSxBQVNmOzs7Ozs7a0IsQUFHVTs7QUFFZixJQUFNLG9CQUFvQixTQUFwQixBQUFvQixrQkFBQSxBQUFTLE9BQVQsQUFBZ0IsVUFBaEIsQUFBMEIsZUFBYyxBQUM5RDtRQUFJLENBQUMsTUFBQSxBQUFNLFFBQVEsTUFBZixBQUFDLEFBQW9CLGFBQWEsTUFBQSxBQUFNLFNBQU4sQUFBZSxVQUFqRCxBQUEyRCxLQUFLLENBQUMsTUFBQSxBQUFNLFNBQU4sQUFBZSxrQkFBcEYsVUFBNkcsQUFDekc7ZUFBTyxJQUFBLEFBQUksTUFBSixBQUFhLFdBQXBCLEFBQ0g7QUFDSjtBQUpEOztBQU9BLEtBQUEsQUFBSzthQUNRLG9CQUFBLEFBQVUsT0FETixBQUNhLEFBQzFCO2dCQUFZLG9CQUFBLEFBQVUsS0FGVCxBQUVjLEFBQzNCO2FBQVMsb0JBQUEsQUFBVSw4RUFDZCx1QkFESSxBQUNPLE1BQU8sb0JBRGQsQUFDd0IsdURBQzVCLHVCQUZJLEFBRU8sT0FBUSxvQkFGZixBQUV5Qix1REFDN0IsdUJBSEksQUFHTyxNQUFPLG9CQUhkLEFBR3dCLHVEQUM1Qix1QkFKSSxBQUlPLE1BQU8sb0JBSmQsQUFJd0IsdURBQzVCLHVCQUxJLEFBS08sU0FBVSxvQkFMakIsQUFLMkIsdURBQy9CLHVCQU5JLEFBTU8sU0FBVSxvQkFOakIsQUFNMkIsdURBQy9CLHVCQVBJLEFBT08sUUFBUyxvQkFQaEIsQUFPMEIsdURBQzlCLHVCQVJJLEFBUU8sTUFBTyxvQkFSZCxBQVF3Qix1REFDNUIsdUJBVEksQUFTTyxRQUFTLG9CQVRoQixBQVMwQix1REFDOUIsdUJBVkksQUFVTyxXQUFZLG9CQVZuQixBQVU2Qix1REFDakMsdUJBWEksQUFXTyxLQUFNLG9CQVhiLEFBV3VCLDBCQWRuQixBQWVWLEFBQ0g7ZUFoQmEsQUFnQkYsQUFDWDtrQ0FBVSxBQUFVLDRCQUFRLEFBQVU7Y0FDNUIsb0JBRGtDLEFBQ3hCLEFBQ2hCO2lCQW5CUyxBQWlCSCxBQUFrQixBQUFnQixBQUUvQixBQUdiO0FBTDRDLEFBQ3hDLEtBRHdCLENBQWxCO21CQUtLLG9CQUFBLEFBQVUsS0F0QlosQUFzQmlCLEFBQzlCO3FCQUFpQixvQkFBQSxBQUFVLEtBdkJkLEFBdUJtQixBQUNoQzttQkFBZSxvQkFBQSxBQUFVLEtBeEJaLEFBd0JpQixBQUM5Qjt5QkFBcUIsb0JBQUEsQUFBVSxLQXpCbEIsQUF5QnVCLEFBQ3BDO2NBQVUsb0JBQUEsQUFBVSxLQTFCUCxBQTBCWSxBQUN6QjtjQUFVLG9CQUFBLEFBQVUsS0EzQlAsQUEyQlksQUFDekI7bUJBQWUsb0JBQUEsQUFBVSxLQTVCWixBQTRCaUIsQUFDOUI7dUJBQW1CLG9CQTdCTixBQTZCZ0IsQUFDN0I7b0JBQWdCLG9CQTlCSCxBQThCYSxBQUMxQjtTQUFLLG9CQS9CUSxBQStCRSxBQUNmO1dBQU8sb0JBaENYLEFBQWlCLEFBZ0NJO0FBaENKLEFBQ2IiLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9