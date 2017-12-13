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

var _colors = require('../helpers/colors');

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
                // console.log("da")
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

            // this.interval=1000/this.props.fps;
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

            var screen = this.state.screen ? this.state.screen : {};

            return _react2.default.createElement('div', {
                className: 'jsx-3402553610' + ' ' + 'gameBoard',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 337
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 340
                }
            }, screen.width < screen.height || screen.width > 1280 ? _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 342
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-3402553610' + ' ' + 'paddingSides',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 344
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
                    lineNumber: 345
                }
            }))) : _react2.default.createElement(_Grid2.default, { item: true, xs: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 361
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
                    lineNumber: 365
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, lg: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 384
                }
            }), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 387
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 388
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, className: 'paddingSides', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 389
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
                    lineNumber: 390
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 397
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
                setInterval: function setInterval(v) {
                    return _this4.setInterval(v);
                },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 398
                }
            })))), _react2.default.createElement(_Grid2.default, { item: true, lg: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 409
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '3402553610',
                css: '.gameBoard{text-align:center;margin-top:80px;z-index:2;}.paddingSides{padding-left:10px;padding-right:10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNlprQyxBQUcyQyxBQU1BLGtCQUxGLEFBTUcsZ0JBTFQsR0FNZCxPQUpDIiwiZmlsZSI6ImNvbXBvbmVudHNcXEdhbWUuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InO1xyXG5pbXBvcnQgR2FtZUdyaWQgZnJvbSAnLi4vaGVscGVycy9HYW1lR3JpZCc7XHJcbmltcG9ydCB7Y29sb3JzIGFzIGNvbG9yfSBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ21hdGVyaWFsLXVpL0dyaWQnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgd2l0aFJvb3QgZnJvbSAnLi93aXRoUm9vdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBTZWxlY3RCdXR0b25zQmFyIGZyb20gJy4vU2VsZWN0QnV0dG9uc0Jhcic7XHJcbmltcG9ydCBQbGF5QnV0dG9uc0JhciBmcm9tICcuL1BsYXlCdXR0b25zQmFyJztcclxuaW1wb3J0IHtib2FyZE5hbWVzfSBmcm9tICcuLi9oZWxwZXJzL2JvYXJkTmFtZXMnO1xyXG5pbXBvcnQge2JvYXJkU2l6ZXN9IGZyb20gJy4uL2hlbHBlcnMvYm9hcmRTaXplcyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJ21hdGVyaWFsLXVpL1N2Z0ljb24nO1xyXG5pbXBvcnQgRGlhbG9nLCB7XHJcbiAgRGlhbG9nQWN0aW9ucyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gIERpYWxvZ1RpdGxlLFxyXG59IGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Qm9hcmRTaXplID0gYm9hcmRTaXplcy5tZWRpdW07XHJcbiBcclxuICAgICAgICBpZihwcm9wcy5jZWxsc0xpc3Qpe1xyXG4gICAgICAgICAgICBzd2l0Y2gocHJvcHMuZ3JpZFNpemVzSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemVzLnNtYWxsOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogdGhpcy5jdXJyZW50Qm9hcmRTaXplID0gYm9hcmRTaXplcy5sYXJnZTsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyaWRXaWR0aCA9IHRoaXMuY3VycmVudEJvYXJkU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmdyaWRIZWlnaHQgPSB0aGlzLmN1cnJlbnRCb2FyZFNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3F1YXJlU2l6ZSA9IHRoaXMuY3VycmVudEJvYXJkU2l6ZS5zcXVhcmVTaXplO1xyXG5cclxuICAgICAgICB0aGlzLmdyaWRTaXplc0xhYmVsID0gW1xyXG4gICAgICAgICAgICBib2FyZFNpemVzLnNtYWxsLmhlaWdodCArIFwiIFggXCIgKyBib2FyZFNpemVzLnNtYWxsLndpZHRoLFxyXG4gICAgICAgICAgICBib2FyZFNpemVzLm1lZGl1bS5oZWlnaHQgKyBcIiBYIFwiICsgYm9hcmRTaXplcy5tZWRpdW0ud2lkdGgsXHJcbiAgICAgICAgICAgIGJvYXJkU2l6ZXMubGFyZ2UuaGVpZ2h0ICsgXCIgWCBcIiArIGJvYXJkU2l6ZXMubGFyZ2Uud2lkdGhcclxuICAgICAgICBdO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wYXR0ZXJuTmFtZXMgPSBbXCJSYW5kb21cIl07XHJcbiAgICAgICAgaWYocHJvcHMucGF0dGVybnMpe1xyXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5OYW1lcyA9IHRoaXMucGF0dGVybk5hbWVzLmNvbmNhdChwcm9wcy5wYXR0ZXJucy5tYXAocGF0dGVybiA9PiBwYXR0ZXJuLm5hbWUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5tb2RlID0ge1xyXG4gICAgICAgICAgICBkcmF3aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xlYXI6dHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdXNlUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGVwUHJlc3NlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5NQUlOLCB0aGlzLmdyaWRXaWR0aCwgdGhpcy5ncmlkSGVpZ2h0LCB0aGlzLnNxdWFyZVNpemUpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVBhdHRlcm4gPSBpbmRleCA9PiBwcm9wcy5jaGFuZ2VQYXR0ZXJuKGluZGV4KTtcclxuICAgICAgICB0aGlzLmNoYW5nZUJvYXJkU2l6ZSA9IGluZGV4ID0+IHByb3BzLmNoYW5nZUJvYXJkU2l6ZShpbmRleCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQgPSBzdG9wcGVkID0+IHByb3BzLnNldFN0b3BwZWQoc3RvcHBlZCwgdGhpcy5ncmlkLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuaW5jcmVtZW50R2VuZXJhdGlvbiA9ICgpID0+IHByb3BzLmluY3JlbWVudEdlbmVyYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNldFNwZWVkID0gZnBzID0+IHByb3BzLnNldFNwZWVkKGZwcyk7XHJcbiAgICAgICAgdGhpcy5zZXRDbGVhciA9ICgpID0+IHByb3BzLnNldENsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRHYW1lVmFsdWVzID0gIChjZWxsc0xpc3QsIHNpemUpID0+IHByb3BzLnNldEdhbWVWYWx1ZXMoY2VsbHNMaXN0LCBzaXplKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzaG93TWVzc2FnZTogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVsb2FkKGJvYXJkU2l6ZSl7XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZVByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsZWFyUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RlcFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCb2FyZFNpemUgPSBib2FyZFNpemU7XHJcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSB0aGlzLmN1cnJlbnRCb2FyZFNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ncmlkSGVpZ2h0ID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLmhlaWdodDsgXHJcbiAgICAgICAgdGhpcy5zcXVhcmVTaXplID0gdGhpcy5jdXJyZW50Qm9hcmRTaXplLnNxdWFyZVNpemU7XHJcbiAgICAgICAgdGhpcy5ncmlkLnJlbG9hZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHRoaXMuY2FudmFzQm9hcmQpO1xyXG4gICAgICAgIHRoaXMubW9kZS5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGVPbmNlKCl7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZC51cGRhdGUodGhpcy5tb2RlKTtcclxuICAgICAgICBpZighdGhpcy5tb2RlLmRyYXdpbmcpXHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50R2VuZXJhdGlvbigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuXHJcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcclxuICAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPiB0aGlzLmludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZGVsdGEgJSB0aGlzLmludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzY3JlZW4gOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdyaWQuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSh0aGlzLmNhbnZhc0JvYXJkKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNoYW5nZVBhdHRlcm5FdmVudChpbmRleCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaW5kZXggIT09IHRoaXMucHJvcHMucGF0dGVybk5hbWVzSW5kZXgpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ncmlkLmNoYW5nZVBhdHRlcm4oaW5kZXgsIHRoaXMucHJvcHMucGF0dGVybnMsIHRoaXMubW9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGF0dGVybihpbmRleClcclxuICAgICAgICAgICAgaWYodGhpcy5tb2RlLmNsZWFyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyKGluZGV4KXtcclxuICAgICAgICBpZihpbmRleCAhPT0gdGhpcy5wcm9wcy5ncmlkU2l6ZXNJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzaXplO1xyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IDApe1xyXG4gICAgICAgICAgICAgICAgc2l6ZSA9IGJvYXJkU2l6ZXMuc21hbGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihpbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2l6ZSA9IGJvYXJkU2l6ZXMubWVkaXVtO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHNpemUgPSBib2FyZFNpemVzLmxhcmdlO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWxvYWQoc2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQm9hcmRTaXplKGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlUGxheVRvZ2dsZSgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9OyAgXHJcblxyXG4gICAgc2V0SW50ZXJ2YWwodmFsdWUpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWw9MTAwMC92YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFNwZWVkKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMoYnV0dG9uUHJlc3NlZCl7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZVByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsZWFyUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RlcFByZXNzZWQgPSBmYWxzZTsgICAgICAgIFxyXG4gICAgICAgIHN3aXRjaChidXR0b25QcmVzc2VkKXtcclxuICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhdXNlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGVhclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW9kZS5kcmF3aW5nPXRydWU7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dKXtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlzQ2VsbENsaWNrZWQgPSB0aGlzLmdyaWQuaGFuZGxlQ2xpY2soZSk7XHJcblxyXG4gICAgICAgIGlmKGlzQ2VsbENsaWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlLmNsZWFyPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQoKXtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhcnRQcmVzc2VkICYmICF0aGlzLm1vZGUuY2xlYXIpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b25QcmVzc2VkU3RhdHVzKFwic3RhcnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZS5kcmF3aW5nPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3BwZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKXtcclxuICAgICAgICBpZighdGhpcy5wYXVzZVByZXNzZWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMoXCJwYXVzZVwiKTtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKXtcclxuICAgICAgICBcclxuICAgICAgICBpZighdGhpcy5tb2RlLmNsZWFyKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYVwiKVxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUuZHJhd2luZz1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGVwKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhcnRQcmVzc2VkICYmICF0aGlzLm1vZGUuY2xlYXIpe1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMoXCJzdGVwXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vZGUuZHJhd2luZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUuZHJhd2luZz1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICBcclxuICAgICAgICAvLyB0aGlzLmludGVydmFsPTEwMDAvdGhpcy5wcm9wcy5mcHM7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLnN0YXRlLnNjcmVlbiA/IHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLmNlbGxzTGlzdCl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXI9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5tYWtlQm9hcmQodGhpcy5ncmlkV2lkdGgsdGhpcy5ncmlkSGVpZ2h0LHRoaXMuc3F1YXJlU2l6ZSxyYXRpbyx0aGlzLmNhbnZhc0JvYXJkLG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ncmlkLm1ha2VCb2FyZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHJhdGlvLHRoaXMuY2FudmFzQm9hcmQsdGhpcy5wcm9wcy5jZWxsc0xpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZXJyb3Ipe1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU9wZW5FcnJvckRpYWxvZygpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpOyAgICBcclxuICAgICAgICBsZXQgbGl2ZUNlbGxzTGlzdCA9IHRoaXMuZ3JpZC5nZXRMaXZlQ2VsbHMoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldEdhbWVWYWx1ZXMobGl2ZUNlbGxzTGlzdClcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVPcGVuRXJyb3JEaWFsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01lc3NhZ2U6IHRydWV9KTtcclxuICAgIH07ICAgXHJcbiAgICBcclxuICAgIGhhbmRsZUNsb3NlRXJyb3JEaWFsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01lc3NhZ2U6IGZhbHNlfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3BhdHRlcm5zfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gdGhpcy5zdGF0ZS5zY3JlZW4gPyB0aGlzLnN0YXRlLnNjcmVlbiA6IHt9O1xyXG4gICAgXHJcbiAgICAgIFx0cmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZUJvYXJkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NyZWVuLndpZHRoIDwgc2NyZWVuLmhlaWdodCB8fCAgc2NyZWVuLndpZHRoID4gMTI4MCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmdTaWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEJ1dHRvbnNCYXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzSW5kZXg9e3RoaXMucHJvcHMucGF0dGVybk5hbWVzSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzPXt0aGlzLnBhdHRlcm5OYW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXR0ZXJuRXZlbnQ9eyh2KSA9PiB0aGlzLmNoYW5nZVBhdHRlcm5FdmVudCh2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTGFiZWw9XCJQYXR0ZXJuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkU2l6ZXNJbmRleD17dGhpcy5wcm9wcy5ncmlkU2l6ZXNJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkU2l6ZXNMYWJlbD17dGhpcy5ncmlkU2l6ZXNMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXI9eyh2KSA9PiB0aGlzLmNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcih2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGFiZWw9XCJCb2FyZCBTaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RCdXR0b25zQmFyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzSW5kZXg9e3RoaXMucHJvcHMucGF0dGVybk5hbWVzSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZXM9e3RoaXMucGF0dGVybk5hbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0dGVybkV2ZW50PXsodikgPT4gdGhpcy5jaGFuZ2VQYXR0ZXJuRXZlbnQodil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTGFiZWw9XCJQYXR0ZXJuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRTaXplc0luZGV4PXt0aGlzLnByb3BzLmdyaWRTaXplc0luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFNpemVzTGFiZWw9e3RoaXMuZ3JpZFNpemVzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXI9eyh2KSA9PiB0aGlzLmNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcih2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMYWJlbD1cIkJvYXJkIFNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJwYWRkaW5nU2lkZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoY2FudmFzKSA9PiB7IHRoaXMuY2FudmFzQm9hcmQgPSBjYW52YXN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlCdXR0b25zQmFyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZT17KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsoKSA9PiB0aGlzLnN0ZXAoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyPXsoKSA9PiB0aGlzLmNsZWFyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbD17KHYpID0+IHRoaXMuc2V0SW50ZXJ2YWwodil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbWVCb2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucGFkZGluZ1NpZGVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPERpYWxvZyBvcGVuPXt0aGlzLnN0YXRlLnNob3dNZXNzYWdlfSBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVDbG9zZUVycm9yRGlhbG9nfT5cclxuICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlPntcIkNhbmB0IGRvd25sb2FkIHBhdHRlcm5zXCJ9PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIHNvcnJ5ISBGb3Igc29tZSByZWFzb24gd2UgY291ZG5gdCBkb3dubG9hZCBvdXIgZXhhbXBsZSBwYXR0ZXJucyBmcm9tIGdpdGh1YiBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICBCdXQgeW91IGNhbiBkcmF3IHlvdXIgcGF0dGVybnMgb24gdGhlIGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VFcnJvckRpYWxvZ30gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcblxyXG5jb25zdCBUV09fTlVNQkVSU19BUlJBWSA9IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSl7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcHMucHJvcE5hbWUpIHx8IHByb3BzLnByb3BOYW1lLmxlbmd0aCAhPSAyIHx8ICFwcm9wcy5wcm9wTmFtZS5ldmVyeShOdW1iZXIuaXNJbnRlZ2VyKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYCR7cHJvcE5hbWV9IG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzYCk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuR2FtZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBzZXRTdG9wcGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc3RvcHBlZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBbYm9hcmROYW1lcy5NQUlOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkxPQ0tdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CT0FUXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuTE9BRl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJFRUhJVkVdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CTElOS0VSXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkVBQ09OXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuVE9BRF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkdMSURFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLlNQQUNFU0hJUF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkdVTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxuICAgIGNlbGxzTGlzdDogVFdPX05VTUJFUlNfQVJSQVksXHJcbiAgICBwYXR0ZXJuczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHBhdHRlcm46IFRXT19OVU1CRVJTX0FSUkFZXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcbiAgICBjaGFuZ2VQYXR0ZXJuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY2hhbmdlQm9hcmRTaXplOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgaW5jcmVtZW50R2VuZXJhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHNldFNwZWVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2V0Q2xlYXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzZXRHYW1lVmFsdWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcGF0dGVybk5hbWVzSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBncmlkU2l6ZXNJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbiJdfQ== */\n/*@ sourceURL=components\\Game.js */'
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
    error: _propTypes2.default.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInByb3BzIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsInNldFN0YXRlIiwic2NyZWVuIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJncmlkIiwiY2FudmFzQm9hcmQiLCJoYW5kbGVPcGVuRXJyb3JEaWFsb2ciLCJzaG93TWVzc2FnZSIsImhhbmRsZUNsb3NlRXJyb3JEaWFsb2ciLCJjdXJyZW50Qm9hcmRTaXplIiwibWVkaXVtIiwiY2VsbHNMaXN0IiwiZ3JpZFNpemVzSW5kZXgiLCJzbWFsbCIsImxhcmdlIiwiZ3JpZFdpZHRoIiwiZ3JpZEhlaWdodCIsInNxdWFyZVNpemUiLCJncmlkU2l6ZXNMYWJlbCIsInBhdHRlcm5OYW1lcyIsInBhdHRlcm5zIiwiY29uY2F0IiwibWFwIiwicGF0dGVybiIsIm5hbWUiLCJjaGVja0xpc3QiLCJtb2RlIiwiZHJhd2luZyIsImNsZWFyIiwic3RhcnRQcmVzc2VkIiwicGF1c2VQcmVzc2VkIiwiY2xlYXJQcmVzc2VkIiwic3RlcFByZXNzZWQiLCJNQUlOIiwiY2hhbmdlUGF0dGVybiIsImluZGV4IiwiY2hhbmdlQm9hcmRTaXplIiwic3RhcnQiLCJiaW5kIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJpbmNyZW1lbnRHZW5lcmF0aW9uIiwic2V0U3BlZWQiLCJmcHMiLCJzZXRDbGVhciIsInNldEdhbWVWYWx1ZXMiLCJzaXplIiwic3RhdGUiLCJib2FyZFNpemUiLCJzdG9wIiwicmVsb2FkIiwidXBkYXRlIiwibm93IiwiRGF0ZSIsImRlbHRhIiwidGhlbiIsImludGVydmFsIiwidXBkYXRlT25jZSIsInJBRiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhdHRlcm5OYW1lc0luZGV4IiwidmFsdWUiLCJidXR0b25QcmVzc2VkIiwiZSIsImlzQ2VsbENsaWNrZWQiLCJoYW5kbGVDbGljayIsImNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWtlQm9hcmQiLCJlcnJvciIsImxpdmVDZWxsc0xpc3QiLCJnZXRMaXZlQ2VsbHMiLCJ2IiwiY2hhbmdlUGF0dGVybkV2ZW50IiwiY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyIiwiY2FudmFzIiwiaGFuZGxlUGxheVRvZ2dsZSIsInN0ZXAiLCJzZXRJbnRlcnZhbCIsIlRXT19OVU1CRVJTX0FSUkFZIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXZlcnkiLCJFcnJvciIsInByb3BUeXBlcyIsImNsYXNzZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwiYm9vbCIsIkJMT0NLIiwiQk9BVCIsIkxPQUYiLCJCRUVISVZFIiwiQkxJTktFUiIsIkJFQUNPTiIsIlRPQUQiLCJHTElERVIiLCJTUEFDRVNISVAiLCJHVU4iLCJhcnJheU9mIiwic3RyaW5nIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SSxBQVVNO2tDQUNGOztrQkFBQSxBQUFZLE9BQU07NENBQUE7O3NJQUFBLEFBQ1I7O2NBRFEsQUFpR2xCLHlCQUF5QixZQUFNLEFBQzNCO2tCQUFBLEFBQUs7OzJCQUVVLE9BREYsQUFDUyxBQUNkOzRCQUFRLE9BRkgsQUFFVSxBQUNmOzJCQUFPLE9BQUEsQUFBTyxvQkFKdEIsQUFBYyxBQUNELEFBRzZCLEFBRzFDO0FBTmEsQUFDTDtBQUZNLEFBQ1Y7a0JB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QUM5Qix1QkFSSSxBQVFPLE1BQU8sb0JBUmQsQUFRd0IsdURBQzVCLHVCQVRJLEFBU08sUUFBUyxvQkFUaEIsQUFTMEIsdURBQzlCLHVCQVZJLEFBVU8sV0FBWSxvQkFWbkIsQUFVNkIsdURBQ2pDLHVCQVhJLEFBV08sS0FBTSxvQkFYYixBQVd1QiwwQkFkbkIsQUFlVixBQUNIO2VBaEJhLEFBZ0JGLEFBQ1g7a0NBQVUsQUFBVSw0QkFBUSxBQUFVO2NBQzVCLG9CQURrQyxBQUN4QixBQUNoQjtpQkFuQlMsQUFpQkgsQUFBa0IsQUFBZ0IsQUFFL0IsQUFHYjtBQUw0QyxBQUN4QyxLQUR3QixDQUFsQjttQkFLSyxvQkFBQSxBQUFVLEtBdEJaLEFBc0JpQixBQUM5QjtxQkFBaUIsb0JBQUEsQUFBVSxLQXZCZCxBQXVCbUIsQUFDaEM7eUJBQXFCLG9CQUFBLEFBQVUsS0F4QmxCLEFBd0J1QixBQUNwQztjQUFVLG9CQUFBLEFBQVUsS0F6QlAsQUF5QlksQUFDekI7Y0FBVSxvQkFBQSxBQUFVLEtBMUJQLEFBMEJZLEFBQ3pCO21CQUFlLG9CQUFBLEFBQVUsS0EzQlosQUEyQmlCLEFBQzlCO3VCQUFtQixvQkE1Qk4sQUE0QmdCLEFBQzdCO29CQUFnQixvQkE3QkgsQUE2QmEsQUFDMUI7V0FBTyxvQkE5QlgsQUFBaUIsQUE4Qkk7QUE5QkosQUFDYiIsImZpbGUiOiJHYW1lLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=