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
                className: 'jsx-585749582' + ' ' + 'gameBoard',
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
                className: 'jsx-585749582' + ' ' + 'paddingSides',
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
                className: 'jsx-585749582',
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
                styleId: '585749582',
                css: '.gameBoard{text-align:center;margin-top:20px;z-index:2;}.paddingSides{padding-left:10;padding-right:10;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOFprQyxBQUcyQyxBQUtGLGdCQUNDLEVBTEQsZUFNcEIsQ0FMYyxVQUNiIiwiZmlsZSI6ImNvbXBvbmVudHNcXEdhbWUuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InO1xyXG5pbXBvcnQgR2FtZUdyaWQgZnJvbSAnLi4vaGVscGVycy9HYW1lR3JpZCc7XHJcblxyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHdpdGhSb290IGZyb20gJy4vd2l0aFJvb3QnO1xyXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBTZWxlY3RCdXR0b25zQmFyIGZyb20gJy4vU2VsZWN0QnV0dG9uc0Jhcic7XHJcbmltcG9ydCBQbGF5QnV0dG9uc0JhciBmcm9tICcuL1BsYXlCdXR0b25zQmFyJztcclxuaW1wb3J0IHtib2FyZE5hbWVzfSBmcm9tICcuLi9oZWxwZXJzL2JvYXJkTmFtZXMnO1xyXG5pbXBvcnQge2JvYXJkU2l6ZXN9IGZyb20gJy4uL2hlbHBlcnMvYm9hcmRTaXplcyc7XHJcblxyXG5pbXBvcnQgRGlhbG9nLCB7XHJcbiAgRGlhbG9nQWN0aW9ucyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gIERpYWxvZ1RpdGxlLFxyXG59IGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbmNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemVzLm1lZGl1bTtcclxuIFxyXG4gICAgICAgIGlmKHByb3BzLmNlbGxzTGlzdCl7XHJcbiAgICAgICAgICAgIHN3aXRjaChwcm9wcy5ncmlkU2l6ZXNJbmRleCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHRoaXMuY3VycmVudEJvYXJkU2l6ZSA9IGJvYXJkU2l6ZXMuc21hbGw7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemVzLmxhcmdlOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFdpZHRoID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZ3JpZEhlaWdodCA9IHRoaXMuY3VycmVudEJvYXJkU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLnNxdWFyZVNpemU7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFNpemVzTGFiZWwgPSBbXHJcbiAgICAgICAgICAgIGJvYXJkU2l6ZXMuc21hbGwuaGVpZ2h0ICsgXCIgWCBcIiArIGJvYXJkU2l6ZXMuc21hbGwud2lkdGgsXHJcbiAgICAgICAgICAgIGJvYXJkU2l6ZXMubWVkaXVtLmhlaWdodCArIFwiIFggXCIgKyBib2FyZFNpemVzLm1lZGl1bS53aWR0aCxcclxuICAgICAgICAgICAgYm9hcmRTaXplcy5sYXJnZS5oZWlnaHQgKyBcIiBYIFwiICsgYm9hcmRTaXplcy5sYXJnZS53aWR0aFxyXG4gICAgICAgIF07XHJcblxyXG5cclxuICAgICAgICB0aGlzLnBhdHRlcm5OYW1lcyA9IFtcIlJhbmRvbVwiXTtcclxuICAgICAgICBpZihwcm9wcy5wYXR0ZXJucyl7XHJcbiAgICAgICAgICAgIHRoaXMucGF0dGVybk5hbWVzID0gdGhpcy5wYXR0ZXJuTmFtZXMuY29uY2F0KHByb3BzLnBhdHRlcm5zLm1hcChwYXR0ZXJuID0+IHBhdHRlcm4ubmFtZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0xpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGUgPSB7XHJcbiAgICAgICAgICAgIGRyYXdpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGVhcjp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0UHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF1c2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGVhclByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBQcmVzc2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLk1BSU4sIHRoaXMuZ3JpZFdpZHRoLCB0aGlzLmdyaWRIZWlnaHQsIHRoaXMuc3F1YXJlU2l6ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlUGF0dGVybiA9IGluZGV4ID0+IHByb3BzLmNoYW5nZVBhdHRlcm4oaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQm9hcmRTaXplID0gaW5kZXggPT4gcHJvcHMuY2hhbmdlQm9hcmRTaXplKGluZGV4KTtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlU3RvcHBlZCA9ICgpID0+IHByb3BzLnRvZ2dsZVN0b3BwZWQoKTtcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQgPSBzdG9wcGVkID0+IHByb3BzLnNldFN0b3BwZWQoc3RvcHBlZCwgdGhpcy5ncmlkLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuaW5jcmVtZW50R2VuZXJhdGlvbiA9ICgpID0+IHByb3BzLmluY3JlbWVudEdlbmVyYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNldFNwZWVkID0gZnBzID0+IHByb3BzLnNldFNwZWVkKGZwcyk7XHJcbiAgICAgICAgdGhpcy5zZXRDbGVhciA9ICgpID0+IHByb3BzLnNldENsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRHYW1lVmFsdWVzID0gIChjZWxsc0xpc3QsIHNpemUpID0+IHByb3BzLnNldEdhbWVWYWx1ZXMoY2VsbHNMaXN0LCBzaXplKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzaG93TWVzc2FnZTogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVsb2FkKGJvYXJkU2l6ZSl7XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZVByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsZWFyUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RlcFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemU7XHJcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSB0aGlzLmN1cnJlbnRCb2FyZFNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ncmlkSGVpZ2h0ID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLmhlaWdodDsgXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLnNxdWFyZVNpemU7XHJcbiAgICAgICAgdGhpcy5ncmlkLnJlbG9hZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHRoaXMuY2FudmFzQm9hcmQpO1xyXG4gICAgICAgIHRoaXMubW9kZS5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGVPbmNlKCl7XHJcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZSh0aGlzLm1vZGUpO1xyXG4gICAgICAgIGlmKCF0aGlzLm1vZGUuZHJhd2luZylcclxuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRHZW5lcmF0aW9uKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWx0YSA+IHRoaXMuaW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZGVsdGEgJSB0aGlzLmludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7IFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2NyZWVuIDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UodGhpcy5jYW52YXNCb2FyZCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjaGFuZ2VQYXR0ZXJuRXZlbnQoaW5kZXgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGluZGV4ICE9PSB0aGlzLnByb3BzLnBhdHRlcm5OYW1lc0luZGV4KXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jaGFuZ2VQYXR0ZXJuKGluZGV4LCB0aGlzLnByb3BzLnBhdHRlcm5zLCB0aGlzLm1vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBhdHRlcm4oaW5kZXgpXHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kZS5jbGVhcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcihpbmRleCl7XHJcbiAgICAgICAgaWYoaW5kZXggIT09IHRoaXMucHJvcHMuZ3JpZFNpemVzSW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHNpemUgPSBib2FyZFNpemVzLnNtYWxsO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHNpemUgPSBib2FyZFNpemVzLm1lZGl1bTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzaXplID0gYm9hcmRTaXplcy5sYXJnZTtcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVsb2FkKHNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJvYXJkU2l6ZShpbmRleClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZVBsYXlUb2dnbGUoKXtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5NQUlOXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfTsgIFxyXG5cclxuICAgIHNldEludGVydmFsKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmludGVydmFsPTEwMDAvdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTcGVlZCh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VCdXR0b25QcmVzc2VkU3RhdHVzKGJ1dHRvblByZXNzZWQpe1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0UHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF1c2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGVhclByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBQcmVzc2VkID0gZmFsc2U7ICAgICAgICBcclxuICAgICAgICBzd2l0Y2goYnV0dG9uUHJlc3NlZCl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXVzZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZVByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFwiY2xlYXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxyXG4gICAgICAgICAgICBjYXNlIFwic3RlcFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhlKXtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vZGUuZHJhd2luZz10cnVlO1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5NQUlOXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpc0NlbGxDbGlja2VkID0gdGhpcy5ncmlkLmhhbmRsZUNsaWNrKGUpO1xyXG5cclxuICAgICAgICBpZihpc0NlbGxDbGlja2VkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhcj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhcnRQcmVzc2VkICYmICF0aGlzLm1vZGUuY2xlYXIpe1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMoXCJzdGFydFwiKTtcclxuICAgICAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnBhdXNlUHJlc3NlZCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInBhdXNlXCIpO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLm1vZGUuY2xlYXIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhXCIpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZS5kcmF3aW5nPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKXtcclxuICAgICAgICBpZighdGhpcy5zdGFydFByZXNzZWQgJiYgIXRoaXMubW9kZS5jbGVhcil7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInN0ZXBcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kZS5kcmF3aW5nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZS5kcmF3aW5nPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzY3JlZW46IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIFxyXG4gICAgdGhpcy5pbnRlcnZhbD0xMDAwL3RoaXMucHJvcHMuZnBzO3RoaXMuaW50ZXJ2YWw9MTAwMC90aGlzLnByb3BzLmZwcztcclxuICAgIGNvbnN0IHJhdGlvID0gdGhpcy5zdGF0ZS5zY3JlZW4gPyB0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyA6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgIGlmKCF0aGlzLnByb3BzLmNlbGxzTGlzdCl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXI9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5tYWtlQm9hcmQodGhpcy5ncmlkV2lkdGgsdGhpcy5ncmlkSGVpZ2h0LHRoaXMuc3F1YXJlU2l6ZSxyYXRpbyx0aGlzLmNhbnZhc0JvYXJkLG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ncmlkLm1ha2VCb2FyZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHJhdGlvLHRoaXMuY2FudmFzQm9hcmQsdGhpcy5wcm9wcy5jZWxsc0xpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVPcGVuRXJyb3JEaWFsb2coKVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7ICAgIFxyXG4gICAgICAgIGxldCBsaXZlQ2VsbHNMaXN0ID0gdGhpcy5ncmlkLmdldExpdmVDZWxscygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0R2FtZVZhbHVlcyhsaXZlQ2VsbHNMaXN0KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9wZW5FcnJvckRpYWxvZyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TWVzc2FnZTogdHJ1ZX0pO1xyXG4gICAgfTsgICBcclxuICAgIFxyXG4gICAgaGFuZGxlQ2xvc2VFcnJvckRpYWxvZyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TWVzc2FnZTogZmFsc2V9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJucyA9IHRoaXMucHJvcHMucGF0dGVybnM7XHJcbiAgICAgICAgY29uc3QgTG9hZGluZyA9ICgpID0+ICg8ZGl2PkxvYWRpbmcuLi48L2Rpdj4pXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gdGhpcy5zdGF0ZS5zY3JlZW4gPyB0aGlzLnN0YXRlLnNjcmVlbiA6IHt9O1xyXG4gICAgXHJcbiAgICAgIFx0cmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZUJvYXJkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NyZWVuLndpZHRoIDwgc2NyZWVuLmhlaWdodCB8fCAgc2NyZWVuLndpZHRoID4gMTI4MCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmdTaWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEJ1dHRvbnNCYXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzSW5kZXg9e3RoaXMucHJvcHMucGF0dGVybk5hbWVzSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzPXt0aGlzLnBhdHRlcm5OYW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXR0ZXJuRXZlbnQ9eyh2KSA9PiB0aGlzLmNoYW5nZVBhdHRlcm5FdmVudCh2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTGFiZWw9XCJQYXR0ZXJuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkU2l6ZXNJbmRleD17dGhpcy5wcm9wcy5ncmlkU2l6ZXNJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkU2l6ZXNMYWJlbD17dGhpcy5ncmlkU2l6ZXNMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXI9eyh2KSA9PiB0aGlzLmNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcih2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGFiZWw9XCJCb2FyZCBTaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RCdXR0b25zQmFyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzSW5kZXg9e3RoaXMucHJvcHMucGF0dGVybk5hbWVzSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZXM9e3RoaXMucGF0dGVybk5hbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0dGVybkV2ZW50PXsodikgPT4gdGhpcy5jaGFuZ2VQYXR0ZXJuRXZlbnQodil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTGFiZWw9XCJQYXR0ZXJuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRTaXplc0luZGV4PXt0aGlzLnByb3BzLmdyaWRTaXplc0luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFNpemVzTGFiZWw9e3RoaXMuZ3JpZFNpemVzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXI9eyh2KSA9PiB0aGlzLmNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcih2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMYWJlbD1cIkJvYXJkIFNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJwYWRkaW5nU2lkZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoY2FudmFzKSA9PiB7IHRoaXMuY2FudmFzQm9hcmQgPSBjYW52YXN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlCdXR0b25zQmFyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZT17KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsoKSA9PiB0aGlzLnN0ZXAoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyPXsoKSA9PiB0aGlzLmNsZWFyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncmdiYSgwLCAwLCAwLCAuNyknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcHM9e3RoaXMucHJvcHMuZnBzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWw9eyh2KSA9PiB0aGlzLnNldEludGVydmFsKHYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAuZ2FtZUJvYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBhZGRpbmdTaWRlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FudmFzIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICA8RGlhbG9nIG9wZW49e3RoaXMuc3RhdGUuc2hvd01lc3NhZ2V9IG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZUNsb3NlRXJyb3JEaWFsb2d9PlxyXG4gICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+e1wiQ2FuYHQgZG93bmxvYWQgcGF0dGVybnNcIn08L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgc29ycnkhIEZvciBzb21lIHJlYXNvbiB3ZSBjb3VkbmB0IGRvd25sb2FkIG91ciBleGFtcGxlIHBhdHRlcm5zIGZyb20gZ2l0aHViIHNlcnZlci5cclxuICAgICAgICAgICAgICAgICAgICAgIEJ1dCBZb3UgYXJlIHdlbGNvbWVkIHRvIGRyYXcgeW91ciBwYXR0ZXJucyBvbiB0aGUgYm9hcmQgb3IgWW91IGNhbiBnZW5lcmF0ZSByYW5kb21lIHBhdHRlcm5zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VFcnJvckRpYWxvZ30gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcblxyXG5jb25zdCBUV09fTlVNQkVSU19BUlJBWSA9IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSl7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcHMucHJvcE5hbWUpIHx8IHByb3BzLnByb3BOYW1lLmxlbmd0aCAhPSAyIHx8ICFwcm9wcy5wcm9wTmFtZS5ldmVyeShOdW1iZXIuaXNJbnRlZ2VyKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYCR7cHJvcE5hbWV9IG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzYCk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuR2FtZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBzZXRTdG9wcGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc3RvcHBlZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBbYm9hcmROYW1lcy5NQUlOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkxPQ0tdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CT0FUXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuTE9BRl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJFRUhJVkVdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CTElOS0VSXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkVBQ09OXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuVE9BRF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkdMSURFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLlNQQUNFU0hJUF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkdVTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxuICAgIGNlbGxzTGlzdDogVFdPX05VTUJFUlNfQVJSQVksXHJcbiAgICBwYXR0ZXJuczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHBhdHRlcm46IFRXT19OVU1CRVJTX0FSUkFZXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcbiAgICBjaGFuZ2VQYXR0ZXJuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY2hhbmdlQm9hcmRTaXplOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgdG9nZ2xlU3RvcHBlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGluY3JlbWVudEdlbmVyYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzZXRTcGVlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHNldENsZWFyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2V0R2FtZVZhbHVlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHBhdHRlcm5OYW1lc0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZ3JpZFNpemVzSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBmcHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG4iXX0= */\n/*@ sourceURL=components\\Game.js */'
            }), _react2.default.createElement(_Dialog2.default, { open: this.state.showMessage, onRequestClose: this.handleCloseErrorDialog, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 429
                }
            }, _react2.default.createElement(_Dialog.DialogTitle, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 430
                }
            }, "Can`t download patterns"), _react2.default.createElement(_Dialog.DialogContent, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 431
                }
            }, _react2.default.createElement(_Dialog.DialogContentText, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 432
                }
            }, 'We are sorry! For some reason we coudn`t download our example patterns from github server. But You are welcomed to draw your patterns on the board or You can generate randome patterns')), _react2.default.createElement(_Dialog.DialogActions, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 437
                }
            }, _react2.default.createElement(_Button2.default, { onClick: this.handleCloseErrorDialog, color: 'primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 438
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInByb3BzIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsInNldFN0YXRlIiwic2NyZWVuIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJncmlkIiwiY2FudmFzQm9hcmQiLCJoYW5kbGVPcGVuRXJyb3JEaWFsb2ciLCJzaG93TWVzc2FnZSIsImhhbmRsZUNsb3NlRXJyb3JEaWFsb2ciLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEJvYXJkU2l6ZSIsIm1lZGl1bSIsImNlbGxzTGlzdCIsImdyaWRTaXplc0luZGV4Iiwic21hbGwiLCJsYXJnZSIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJzcXVhcmVTaXplIiwiZ3JpZFNpemVzTGFiZWwiLCJwYXR0ZXJuTmFtZXMiLCJwYXR0ZXJucyIsImNvbmNhdCIsIm1hcCIsInBhdHRlcm4iLCJuYW1lIiwiY2hlY2tMaXN0IiwibW9kZSIsImRyYXdpbmciLCJjbGVhciIsInN0YXJ0UHJlc3NlZCIsInBhdXNlUHJlc3NlZCIsImNsZWFyUHJlc3NlZCIsInN0ZXBQcmVzc2VkIiwiTUFJTiIsImNoYW5nZVBhdHRlcm4iLCJpbmRleCIsImNoYW5nZUJvYXJkU2l6ZSIsInN0YXJ0IiwiYmluZCIsInRvZ2dsZVN0b3BwZWQiLCJzZXRTdG9wcGVkIiwic3RvcHBlZCIsImluY3JlbWVudEdlbmVyYXRpb24iLCJzZXRTcGVlZCIsImZwcyIsInNldENsZWFyIiwic2V0R2FtZVZhbHVlcyIsInNpemUiLCJzdGF0ZSIsImJvYXJkU2l6ZSIsInN0b3AiLCJyZWxvYWQiLCJ1cGRhdGUiLCJub3ciLCJEYXRlIiwiZGVsdGEiLCJ0aGVuIiwiaW50ZXJ2YWwiLCJ1cGRhdGVPbmNlIiwickFGIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGF0dGVybk5hbWVzSW5kZXgiLCJ2YWx1ZSIsImJ1dHRvblByZXNzZWQiLCJlIiwiaXNDZWxsQ2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCb2FyZCIsImVycm9yIiwibGl2ZUNlbGxzTGlzdCIsImdldExpdmVDZWxscyIsIkxvYWRpbmciLCJ2IiwiY2hhbmdlUGF0dGVybkV2ZW50IiwiY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyIiwiY2FudmFzIiwiaGFuZGxlUGxheVRvZ2dsZSIsInN0ZXAiLCJzZXRJbnRlcnZhbCIsIlRXT19OVU1CRVJTX0FSUkFZIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXZlcnkiLCJFcnJvciIsInByb3BUeXBlcyIsImNsYXNzZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwiYm9vbCIsIkJMT0NLIiwiQk9BVCIsIkxPQUYiLCJCRUVISVZFIiwiQkxJTktFUiIsIkJFQUNPTiIsIlRPQUQiLCJHTElERVIiLCJTUEFDRVNISVAiLCJHVU4iLCJhcnJheU9mIiwic3RyaW5nIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7OztBQVRBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0lBVU0sQTtrQ0FDRjs7a0JBQUEsQUFBWSxPQUFNOzRDQUFBOztzSUFBQSxBQUNSOztjQURRLEFBaUdsQix5QkFBeUIsWUFBTSxBQUMzQjtrQkFBQSxBQUFLOzsyQkFFVSxPQURGLEFBQ1MsQUFDZDs0QkFBUSxPQUZILEFBRVUsQUFDZjsyQkFBTyxPQUFBLEFBQU8sb0JBSnRCLEFBQWMsQUFDRCxB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