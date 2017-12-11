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

        // console.log(props);
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
                        lineNumber: 330
                    }
                }, 'Loading...');
            };
            var screen = this.state.screen ? this.state.screen : {};

            return _react2.default.createElement('div', {
                className: 'jsx-3402553610' + ' ' + 'gameBoard',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 338
                }
            }, screen.width < screen.height || screen.width > 1280 ? _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 340
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-3402553610' + ' ' + 'paddingSides',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 342
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
                    lineNumber: 343
                }
            }))) : _react2.default.createElement(_Grid2.default, { item: true, xs: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 359
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
                    lineNumber: 363
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, lg: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 382
                }
            }), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 385
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 386
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, className: 'paddingSides', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 387
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
                    lineNumber: 388
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 395
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
                    lineNumber: 396
                }
            })))), _react2.default.createElement(_Grid2.default, { item: true, lg: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 409
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '3402553610',
                css: '.gameBoard{text-align:center;margin-top:80px;z-index:2;}.paddingSides{padding-left:10px;padding-right:10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNlprQyxBQUcyQyxBQU1BLGtCQUxGLEFBTUcsZ0JBTFQsR0FNZCxPQUpDIiwiZmlsZSI6ImNvbXBvbmVudHNcXEdhbWUuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InO1xyXG5pbXBvcnQgR2FtZUdyaWQgZnJvbSAnLi4vaGVscGVycy9HYW1lR3JpZCc7XHJcblxyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHdpdGhSb290IGZyb20gJy4vd2l0aFJvb3QnO1xyXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBTZWxlY3RCdXR0b25zQmFyIGZyb20gJy4vU2VsZWN0QnV0dG9uc0Jhcic7XHJcbmltcG9ydCBQbGF5QnV0dG9uc0JhciBmcm9tICcuL1BsYXlCdXR0b25zQmFyJztcclxuaW1wb3J0IHtib2FyZE5hbWVzfSBmcm9tICcuLi9oZWxwZXJzL2JvYXJkTmFtZXMnO1xyXG5pbXBvcnQge2JvYXJkU2l6ZXN9IGZyb20gJy4uL2hlbHBlcnMvYm9hcmRTaXplcyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJ21hdGVyaWFsLXVpL1N2Z0ljb24nO1xyXG5pbXBvcnQgRGlhbG9nLCB7XHJcbiAgRGlhbG9nQWN0aW9ucyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gIERpYWxvZ1RpdGxlLFxyXG59IGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbi8vIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemVzLm1lZGl1bTtcclxuIFxyXG4gICAgICAgIGlmKHByb3BzLmNlbGxzTGlzdCl7XHJcbiAgICAgICAgICAgIHN3aXRjaChwcm9wcy5ncmlkU2l6ZXNJbmRleCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHRoaXMuY3VycmVudEJvYXJkU2l6ZSA9IGJvYXJkU2l6ZXMuc21hbGw7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemVzLmxhcmdlOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFdpZHRoID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZ3JpZEhlaWdodCA9IHRoaXMuY3VycmVudEJvYXJkU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLnNxdWFyZVNpemU7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFNpemVzTGFiZWwgPSBbXHJcbiAgICAgICAgICAgIGJvYXJkU2l6ZXMuc21hbGwuaGVpZ2h0ICsgXCIgWCBcIiArIGJvYXJkU2l6ZXMuc21hbGwud2lkdGgsXHJcbiAgICAgICAgICAgIGJvYXJkU2l6ZXMubWVkaXVtLmhlaWdodCArIFwiIFggXCIgKyBib2FyZFNpemVzLm1lZGl1bS53aWR0aCxcclxuICAgICAgICAgICAgYm9hcmRTaXplcy5sYXJnZS5oZWlnaHQgKyBcIiBYIFwiICsgYm9hcmRTaXplcy5sYXJnZS53aWR0aFxyXG4gICAgICAgIF07XHJcblxyXG5cclxuICAgICAgICB0aGlzLnBhdHRlcm5OYW1lcyA9IFtcIlJhbmRvbVwiXTtcclxuICAgICAgICBpZihwcm9wcy5wYXR0ZXJucyl7XHJcbiAgICAgICAgICAgIHRoaXMucGF0dGVybk5hbWVzID0gdGhpcy5wYXR0ZXJuTmFtZXMuY29uY2F0KHByb3BzLnBhdHRlcm5zLm1hcChwYXR0ZXJuID0+IHBhdHRlcm4ubmFtZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0xpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGUgPSB7XHJcbiAgICAgICAgICAgIGRyYXdpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGVhcjp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0UHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF1c2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGVhclByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBQcmVzc2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLk1BSU4sIHRoaXMuZ3JpZFdpZHRoLCB0aGlzLmdyaWRIZWlnaHQsIHRoaXMuc3F1YXJlU2l6ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlUGF0dGVybiA9IGluZGV4ID0+IHByb3BzLmNoYW5nZVBhdHRlcm4oaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQm9hcmRTaXplID0gaW5kZXggPT4gcHJvcHMuY2hhbmdlQm9hcmRTaXplKGluZGV4KTtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RvcHBlZCA9IHN0b3BwZWQgPT4gcHJvcHMuc2V0U3RvcHBlZChzdG9wcGVkLCB0aGlzLmdyaWQubmFtZSk7XHJcbiAgICAgICAgdGhpcy5pbmNyZW1lbnRHZW5lcmF0aW9uID0gKCkgPT4gcHJvcHMuaW5jcmVtZW50R2VuZXJhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3BlZWQgPSBmcHMgPT4gcHJvcHMuc2V0U3BlZWQoZnBzKTtcclxuICAgICAgICB0aGlzLnNldENsZWFyID0gKCkgPT4gcHJvcHMuc2V0Q2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNldEdhbWVWYWx1ZXMgPSAgKGNlbGxzTGlzdCwgc2l6ZSkgPT4gcHJvcHMuc2V0R2FtZVZhbHVlcyhjZWxsc0xpc3QsIHNpemUpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge3Nob3dNZXNzYWdlOiBmYWxzZX07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZWxvYWQoYm9hcmRTaXplKXtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdXNlUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGVwUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEJvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcclxuICAgICAgICB0aGlzLmdyaWRXaWR0aCA9IHRoaXMuY3VycmVudEJvYXJkU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmdyaWRIZWlnaHQgPSB0aGlzLmN1cnJlbnRCb2FyZFNpemUuaGVpZ2h0OyBcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUgPSB0aGlzLmN1cnJlbnRCb2FyZFNpemUuc3F1YXJlU2l6ZTtcclxuICAgICAgICB0aGlzLmdyaWQucmVsb2FkKHRoaXMuZ3JpZFdpZHRoLHRoaXMuZ3JpZEhlaWdodCx0aGlzLnNxdWFyZVNpemUsdGhpcy5jYW52YXNCb2FyZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlLmNsZWFyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vZGUuZHJhd2luZyA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVwZGF0ZU9uY2UoKXtcclxuICAgICAgICB0aGlzLmdyaWQudXBkYXRlKHRoaXMubW9kZSk7XHJcbiAgICAgICAgaWYoIXRoaXMubW9kZS5kcmF3aW5nKVxyXG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudEdlbmVyYXRpb24oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbHRhID4gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5kZWx0YSAlIHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzY3JlZW4gOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdyaWQuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSh0aGlzLmNhbnZhc0JvYXJkKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNoYW5nZVBhdHRlcm5FdmVudChpbmRleCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaW5kZXggIT09IHRoaXMucHJvcHMucGF0dGVybk5hbWVzSW5kZXgpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ncmlkLmNoYW5nZVBhdHRlcm4oaW5kZXgsIHRoaXMucHJvcHMucGF0dGVybnMsIHRoaXMubW9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGF0dGVybihpbmRleClcclxuICAgICAgICAgICAgaWYodGhpcy5tb2RlLmNsZWFyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyKGluZGV4KXtcclxuICAgICAgICBpZihpbmRleCAhPT0gdGhpcy5wcm9wcy5ncmlkU2l6ZXNJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzaXplO1xyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IDApe1xyXG4gICAgICAgICAgICAgICAgc2l6ZSA9IGJvYXJkU2l6ZXMuc21hbGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihpbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2l6ZSA9IGJvYXJkU2l6ZXMubWVkaXVtO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHNpemUgPSBib2FyZFNpemVzLmxhcmdlO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWxvYWQoc2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQm9hcmRTaXplKGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlUGxheVRvZ2dsZSgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9OyAgXHJcblxyXG4gICAgc2V0SW50ZXJ2YWwodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWw9MTAwMC92YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFNwZWVkKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMoYnV0dG9uUHJlc3NlZCl7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZVByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsZWFyUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RlcFByZXNzZWQgPSBmYWxzZTsgICAgICAgIFxyXG4gICAgICAgIHN3aXRjaChidXR0b25QcmVzc2VkKXtcclxuICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhdXNlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGVhclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW9kZS5kcmF3aW5nPXRydWU7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dKXtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlzQ2VsbENsaWNrZWQgPSB0aGlzLmdyaWQuaGFuZGxlQ2xpY2soZSk7XHJcblxyXG4gICAgICAgIGlmKGlzQ2VsbENsaWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlLmNsZWFyPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBpZighdGhpcy5zdGFydFByZXNzZWQgJiYgIXRoaXMubW9kZS5jbGVhcil7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInN0YXJ0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUuZHJhd2luZz1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT57dGhpcy51cGRhdGUoKX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCl7XHJcbiAgICAgICAgaWYoIXRoaXMucGF1c2VQcmVzc2VkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZCh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b25QcmVzc2VkU3RhdHVzKFwicGF1c2VcIik7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIXRoaXMubW9kZS5jbGVhcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGFcIilcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlLmNsZWFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RlcCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXJ0UHJlc3NlZCAmJiAhdGhpcy5tb2RlLmNsZWFyKXtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b25QcmVzc2VkU3RhdHVzKFwic3RlcFwiKTtcclxuICAgICAgICAgICAgaWYodGhpcy5tb2RlLmRyYXdpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgXHJcbiAgICB0aGlzLmludGVydmFsPTEwMDAvdGhpcy5wcm9wcy5mcHM7dGhpcy5pbnRlcnZhbD0xMDAwL3RoaXMucHJvcHMuZnBzO1xyXG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLnN0YXRlLnNjcmVlbiA/IHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG4gICAgICAgaWYoIXRoaXMucHJvcHMuY2VsbHNMaXN0KXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhcj1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ncmlkLm1ha2VCb2FyZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHJhdGlvLHRoaXMuY2FudmFzQm9hcmQsbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdyaWQubWFrZUJvYXJkKHRoaXMuZ3JpZFdpZHRoLHRoaXMuZ3JpZEhlaWdodCx0aGlzLnNxdWFyZVNpemUscmF0aW8sdGhpcy5jYW52YXNCb2FyZCx0aGlzLnByb3BzLmNlbGxzTGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU9wZW5FcnJvckRpYWxvZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKTsgICAgXHJcbiAgICAgICAgbGV0IGxpdmVDZWxsc0xpc3QgPSB0aGlzLmdyaWQuZ2V0TGl2ZUNlbGxzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRHYW1lVmFsdWVzKGxpdmVDZWxsc0xpc3QpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3BlbkVycm9yRGlhbG9nID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNZXNzYWdlOiB0cnVlfSk7XHJcbiAgICB9OyAgIFxyXG4gICAgXHJcbiAgICBoYW5kbGVDbG9zZUVycm9yRGlhbG9nID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNZXNzYWdlOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5zID0gdGhpcy5wcm9wcy5wYXR0ZXJucztcclxuICAgICAgICBjb25zdCBMb2FkaW5nID0gKCkgPT4gKDxkaXY+TG9hZGluZy4uLjwvZGl2PilcclxuICAgICAgICBjb25zdCBzY3JlZW4gPSB0aGlzLnN0YXRlLnNjcmVlbiA/IHRoaXMuc3RhdGUuc2NyZWVuIDoge307XHJcbiAgICBcclxuICAgICAgXHRyZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JlZW4ud2lkdGggPCBzY3JlZW4uaGVpZ2h0IHx8ICBzY3JlZW4ud2lkdGggPiAxMjgwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1NpZGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0QnV0dG9uc0JhciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZXNJbmRleD17dGhpcy5wcm9wcy5wYXR0ZXJuTmFtZXNJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZXM9e3RoaXMucGF0dGVybk5hbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdHRlcm5FdmVudD17KHYpID0+IHRoaXMuY2hhbmdlUGF0dGVybkV2ZW50KHYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5MYWJlbD1cIlBhdHRlcm5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRTaXplc0luZGV4PXt0aGlzLnByb3BzLmdyaWRTaXplc0luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRTaXplc0xhYmVsPXt0aGlzLmdyaWRTaXplc0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcj17KHYpID0+IHRoaXMuY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyKHYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMYWJlbD1cIkJvYXJkIFNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEJ1dHRvbnNCYXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZXNJbmRleD17dGhpcy5wcm9wcy5wYXR0ZXJuTmFtZXNJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lcz17dGhpcy5wYXR0ZXJuTmFtZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXR0ZXJuRXZlbnQ9eyh2KSA9PiB0aGlzLmNoYW5nZVBhdHRlcm5FdmVudCh2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5MYWJlbD1cIlBhdHRlcm5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFNpemVzSW5kZXg9e3RoaXMucHJvcHMuZ3JpZFNpemVzSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkU2l6ZXNMYWJlbD17dGhpcy5ncmlkU2l6ZXNMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcj17KHYpID0+IHRoaXMuY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyKHYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExhYmVsPVwiQm9hcmQgU2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cInBhZGRpbmdTaWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhjYW52YXMpID0+IHsgdGhpcy5jYW52YXNCb2FyZCA9IGNhbnZhc319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheUJ1dHRvbnNCYXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbj17dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZXMuTUFJTl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlPXsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9eygpID0+IHRoaXMuc3RlcCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI9eygpID0+IHRoaXMuY2xlYXIoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdyZ2JhKDAsIDAsIDAsIC43KSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZwcz17dGhpcy5wcm9wcy5mcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbD17KHYpID0+IHRoaXMuc2V0SW50ZXJ2YWwodil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbWVCb2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucGFkZGluZ1NpZGVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPERpYWxvZyBvcGVuPXt0aGlzLnN0YXRlLnNob3dNZXNzYWdlfSBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVDbG9zZUVycm9yRGlhbG9nfT5cclxuICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlPntcIkNhbmB0IGRvd25sb2FkIHBhdHRlcm5zXCJ9PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIHNvcnJ5ISBGb3Igc29tZSByZWFzb24gd2UgY291ZG5gdCBkb3dubG9hZCBvdXIgZXhhbXBsZSBwYXR0ZXJucyBmcm9tIGdpdGh1YiBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICBCdXQgeW91IGNhbiBkcmF3IHlvdXIgcGF0dGVybnMgb24gdGhlIGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VFcnJvckRpYWxvZ30gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcblxyXG5jb25zdCBUV09fTlVNQkVSU19BUlJBWSA9IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSl7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcHMucHJvcE5hbWUpIHx8IHByb3BzLnByb3BOYW1lLmxlbmd0aCAhPSAyIHx8ICFwcm9wcy5wcm9wTmFtZS5ldmVyeShOdW1iZXIuaXNJbnRlZ2VyKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYCR7cHJvcE5hbWV9IG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzYCk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuR2FtZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBzZXRTdG9wcGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc3RvcHBlZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBbYm9hcmROYW1lcy5NQUlOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkxPQ0tdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CT0FUXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuTE9BRl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJFRUhJVkVdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CTElOS0VSXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkVBQ09OXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuVE9BRF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkdMSURFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLlNQQUNFU0hJUF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkdVTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxuICAgIGNlbGxzTGlzdDogVFdPX05VTUJFUlNfQVJSQVksXHJcbiAgICBwYXR0ZXJuczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHBhdHRlcm46IFRXT19OVU1CRVJTX0FSUkFZXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcbiAgICBjaGFuZ2VQYXR0ZXJuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY2hhbmdlQm9hcmRTaXplOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgaW5jcmVtZW50R2VuZXJhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHNldFNwZWVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2V0Q2xlYXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzZXRHYW1lVmFsdWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcGF0dGVybk5hbWVzSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBncmlkU2l6ZXNJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGZwczogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbiJdfQ== */\n/*@ sourceURL=components\\Game.js */'
            }), _react2.default.createElement(_Dialog2.default, { open: this.state.showMessage, onRequestClose: this.handleCloseErrorDialog, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 427
                }
            }, _react2.default.createElement(_Dialog.DialogTitle, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 428
                }
            }, "Can`t download patterns"), _react2.default.createElement(_Dialog.DialogContent, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 429
                }
            }, _react2.default.createElement(_Dialog.DialogContentText, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 430
                }
            }, 'We are sorry! For some reason we coudn`t download our example patterns from github server. But you can draw your patterns on the board')), _react2.default.createElement(_Dialog.DialogActions, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 435
                }
            }, _react2.default.createElement(_Button2.default, { onClick: this.handleCloseErrorDialog, color: 'primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 436
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
    incrementGeneration: _propTypes2.default.func.isRequired,
    setSpeed: _propTypes2.default.func.isRequired,
    setClear: _propTypes2.default.func.isRequired,
    setGameValues: _propTypes2.default.func.isRequired,
    patternNamesIndex: _propTypes2.default.number,
    gridSizesIndex: _propTypes2.default.number,
    fps: _propTypes2.default.number,
    error: _propTypes2.default.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInByb3BzIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsInNldFN0YXRlIiwic2NyZWVuIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJncmlkIiwiY2FudmFzQm9hcmQiLCJoYW5kbGVPcGVuRXJyb3JEaWFsb2ciLCJzaG93TWVzc2FnZSIsImhhbmRsZUNsb3NlRXJyb3JEaWFsb2ciLCJjdXJyZW50Qm9hcmRTaXplIiwibWVkaXVtIiwiY2VsbHNMaXN0IiwiZ3JpZFNpemVzSW5kZXgiLCJzbWFsbCIsImxhcmdlIiwiZ3JpZFdpZHRoIiwiZ3JpZEhlaWdodCIsInNxdWFyZVNpemUiLCJncmlkU2l6ZXNMYWJlbCIsInBhdHRlcm5OYW1lcyIsInBhdHRlcm5zIiwiY29uY2F0IiwibWFwIiwicGF0dGVybiIsIm5hbWUiLCJjaGVja0xpc3QiLCJtb2RlIiwiZHJhd2luZyIsImNsZWFyIiwic3RhcnRQcmVzc2VkIiwicGF1c2VQcmVzc2VkIiwiY2xlYXJQcmVzc2VkIiwic3RlcFByZXNzZWQiLCJNQUlOIiwiY2hhbmdlUGF0dGVybiIsImluZGV4IiwiY2hhbmdlQm9hcmRTaXplIiwic3RhcnQiLCJiaW5kIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJpbmNyZW1lbnRHZW5lcmF0aW9uIiwic2V0U3BlZWQiLCJmcHMiLCJzZXRDbGVhciIsInNldEdhbWVWYWx1ZXMiLCJzaXplIiwic3RhdGUiLCJib2FyZFNpemUiLCJzdG9wIiwicmVsb2FkIiwidXBkYXRlIiwibm93IiwiRGF0ZSIsImRlbHRhIiwidGhlbiIsImludGVydmFsIiwidXBkYXRlT25jZSIsInJBRiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhdHRlcm5OYW1lc0luZGV4IiwidmFsdWUiLCJidXR0b25QcmVzc2VkIiwiZSIsImlzQ2VsbENsaWNrZWQiLCJoYW5kbGVDbGljayIsImNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUJvYXJkIiwiZXJyb3IiLCJsaXZlQ2VsbHNMaXN0IiwiZ2V0TGl2ZUNlbGxzIiwiTG9hZGluZyIsInYiLCJjaGFuZ2VQYXR0ZXJuRXZlbnQiLCJjaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXIiLCJjYW52YXMiLCJoYW5kbGVQbGF5VG9nZ2xlIiwic3RlcCIsInNldEludGVydmFsIiwiVFdPX05VTUJFUlNfQVJSQVkiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJldmVyeSIsIkVycm9yIiwicHJvcFR5cGVzIiwiY2xhc3NlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwic2hhcGUiLCJib29sIiwiQkxPQ0siLCJCT0FUIiwiTE9BRiIsIkJFRUhJVkUiLCJCTElOS0VSIiwiQkVBQ09OIiwiVE9BRCIsIkdMSURFUiIsIlNQQUNFU0hJUCIsIkdVTiIsImFycmF5T2YiLCJzdHJpbmciLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBVEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztJLEFBVU07a0NBQ0Y7O2tCQUFBLEFBQVksT0FBTTs0Q0FFdEI7O0FBRnNCO3NJQUFBLEFBQ1I7O2NBRFEsQUFnR2xCLHlCQUF5QixZQUFNLEFBQzNCO2tCQUFBLEFBQUs7OzJCQUVVLE9BREYsQUFDUyxBQUNkOzRCQUFRLE9BRkgsQUFFVSxBQUNmOzJCQUFPLE9BQUEsQUFBTyxvQkFKdEIsQUFBYyxBQUNELEFB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