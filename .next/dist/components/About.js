'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\About.js',
    _PropTypes$shape;

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _reactYoutube = require('react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _GameGrid = require('../helpers/GameGrid');

var _GameGrid2 = _interopRequireDefault(_GameGrid);

var _Icon = require('material-ui/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _materialUiToggleIcon = require('material-ui-toggle-icon');

var _materialUiToggleIcon2 = _interopRequireDefault(_materialUiToggleIcon);

var _PlayArrow = require('material-ui-icons/PlayArrow');

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Pause = require('material-ui-icons/Pause');

var _Pause2 = _interopRequireDefault(_Pause);

var _boardNames = require('../helpers/boardNames');

var _helpers = require('../helpers/helpers');

var _colors = require('../helpers/colors');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var beaconCoordinates = require('../static/beacon.txt');
var beehiveCoordinates = require('../static/beehive.txt');
var blinkerCoordinates = require('../static/blinker.txt');
var blockCoordinates = require('../static/block.txt');
var boatCoordinates = require('../static/boat.txt');
var gliderCoordinates = require('../static/glider.txt');
var gunCoordinates = require('../static/gun.txt');
var loafCoordinates = require('../static/loaf.txt');
var lspaceshipCoordinates = require('../static/lspaceship.txt');
var oscGlassesCoordinates = require('../static/oscGlasses.txt');
var oscQuadCoordinates = require('../static/oscQuad.txt');
var toadCoordinates = require('../static/toad.txt');

var styles = {

    mainContent: {
        marginTop: 75
    },
    rules: {
        backgroundColor: 'rgba(240,248,255,.7)'

    },
    text: {
        fontFamily: 'Open Sans',
        fallbacks: {
            fontFamily: 'sans-serif'
        }
    },
    title: {
        fontFamily: 'Julius Sans One',
        fallbacks: {
            fontFamily: 'sans-serif'
        },
        fontWeight: 900,
        marginTop: 40
    },
    video: {
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fallbacks: {
            fontFamily: 'sans-serif'
        },
        marginTop: 30
    },
    boardsSection: {
        display: 'inline-block',
        marginTop: 30
    },
    link: {
        'text-decoration': 'underline !important',
        'overflow-wrap': 'break-word',
        'word-wrap': 'break-word'
    }
};

var About = function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About(props) {
        var _parameters;

        (0, _classCallCheck3.default)(this, About);

        var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

        _this.handleWindowSizeChange = function () {
            _this.examples[_boardNames.boardNames.GUN].grid.handleWindowSizeChange(_this.examples[_boardNames.boardNames.GUN].canvas);
        };

        var squareSize = 12;
        var parameters = (_parameters = {}, (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BEACON, {
            width: 6,
            height: 6,
            coordinates: createCellsList(beaconCoordinates),
            wrapped: true,
            name: "Beacon"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BEEHIVE, {
            width: 6,
            height: 5,
            coordinates: createCellsList(beehiveCoordinates),
            wrapped: true,
            name: "Beehive"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BLINKER, {
            width: 5,
            height: 5,
            coordinates: createCellsList(blinkerCoordinates),
            wrapped: true,
            name: "Blinker"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BLOCK, {
            width: 4,
            height: 4,
            coordinates: createCellsList(blockCoordinates),
            wrapped: true,
            name: "Block"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BOAT, {
            width: 5,
            height: 5,
            coordinates: createCellsList(boatCoordinates),
            wrapped: true,
            name: "Boat"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GLIDER, {
            width: 10,
            height: 10,
            coordinates: createCellsList(gliderCoordinates),
            wrapped: true,
            name: "Glider"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GUN, {
            width: 40,
            height: 20,
            coordinates: createCellsList(gunCoordinates),
            wrapped: false,
            name: "The Gosper Glider Gun"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.LOAF, {
            width: 6,
            height: 6,
            coordinates: createCellsList(loafCoordinates),
            wrapped: true,
            name: "Loaf"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.SPACESHIP, {
            width: 12,
            height: 12,
            coordinates: createCellsList(lspaceshipCoordinates),
            wrapped: true,
            name: "Lightweight Spaceship"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GLASSES, {
            width: 20,
            height: 13,
            coordinates: createCellsList(oscGlassesCoordinates),
            wrapped: true,
            name: "Glasses"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.QUAD, {
            width: 8,
            height: 8,
            coordinates: createCellsList(oscQuadCoordinates),
            wrapped: true,
            name: "Quad"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.TOAD, {
            width: 6,
            height: 6,
            coordinates: createCellsList(toadCoordinates),
            wrapped: true,
            name: "Toad"
        }), _parameters);

        _this.examples = {};
        for (var name in parameters) {
            _this.examples[name] = {
                grid: new _GameGrid2.default(name, parameters[name].width, parameters[name].height, squareSize, !parameters[name].wrapped),
                cells: name == _boardNames.boardNames.GUN ? (0, _helpers.shiftPattern)(parameters[name].coordinates, 1, 1) : (0, _helpers.shiftPatternToCenter)(parameters[name].coordinates, parameters[name].height, parameters[name].width),
                name: parameters[name].name
            };
        }

        _this.state = {
            reload: false,
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
                factor: window.innerWidth < 600 ? 3 : window.innerWidth < 960 ? 6 : 10
            }
        };

        for (var _name in parameters) {
            _this.examples[_name].canvasWidth = _this.getCanvasWidth(_this.examples[_name].grid);
        }

        _this.startedPatternsList = [];
        _this.rAF = null;

        _this.interval = 300;

        _this.setStopped = function (stopped, name) {
            return props.setStopped(stopped, name);
        };
        return _this;
    }

    (0, _createClass3.default)(About, [{
        key: 'getCanvasWidth',
        value: function getCanvasWidth(grid) {
            var screen = this.state.screen;
            var width = grid.width,
                squareSize = grid.squareSize;

            var w = (width + 1) * squareSize * screen.width / 100 * .7 / screen.factor;
            return w > screen.width * .6 ? screen.width * .6 : w;
        }
    }, {
        key: 'handlePlayToggle',
        value: function handlePlayToggle(pattern) {

            if (this.props.stopped[pattern.grid.name]) {
                this.start(pattern);
            } else {

                this.stop(pattern);
            }
        }
    }, {
        key: 'stop',
        value: function stop(pattern) {
            if (!this.props.stopped[pattern.grid.name]) {
                this.setStopped(true, pattern.grid.name);
                var index = this.startedPatternsList.indexOf(pattern);
                this.startedPatternsList.splice(index, 1);
                if (this.startedPatternsList.length === 0) {
                    cancelAnimationFrame(this.rAF);
                }
            }
        }
    }, {
        key: 'start',
        value: function start(pattern) {
            var _this2 = this;

            if (this.props.stopped[pattern.grid.name]) {
                this.setStopped(false, pattern.grid.name);
                this.startedPatternsList.push(pattern);
                this.then = Date.now();
                if (this.startedPatternsList.length === 1) {
                    this.rAF = requestAnimationFrame(function () {
                        _this2.update();
                    });
                }
            }
        }
    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            this.now = Date.now();
            this.delta = this.now - this.then;

            if (this.delta > this.interval) {
                this.then = this.now - this.delta % this.interval;

                this.startedPatternsList.forEach(function (p) {
                    return p.grid.update();
                });
            }
            this.rAF = requestAnimationFrame(function () {
                _this3.update();
            });
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            this.examples[_boardNames.boardNames.GUN].canvasWidth = this.examples[_boardNames.boardNames.GUN].canvasWidth > this.state.screen.width * .6 ? this.state.screen.width * .6 : this.examples[_boardNames.boardNames.GUN].canvasWidth;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            window.addEventListener('resize', this.handleWindowSizeChange);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var ratio = this.state.screen.ratio;
            for (var name in this.examples) {
                var _examples$name = this.examples[name],
                    grid = _examples$name.grid,
                    cells = _examples$name.cells,
                    canvas = _examples$name.canvas;

                grid.makeBoard(grid.width, grid.height, grid.squareSize, ratio, canvas, cells);
                grid.update();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {

            cancelAnimationFrame(this.rAF);
            this.setStopped(true, null);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var classes = this.props.classes;
            return _react2.default.createElement('div', { className: classes.mainContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 285
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 287
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                }
            }, ' '), _react2.default.createElement(_Grid2.default, { item: true, xs: 10, sm: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 291
                }
            }, _react2.default.createElement('p', { className: classes.intro + ' ' + classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 293
                }
            }, _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 294
                }
            }, 'The Game of Life'), ' is the best-known two-dimensional "', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/Cellular_automaton', target: '_blank', title: 'Cellular automaton', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                }
            }, 'cellular automaton'), '", invented in 1970 by the British mathematician ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/John_Horton_Conway', title: 'John Conway', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
                }
            }, 'John Horton Conway'), '. The life is a cellular automaton, which is a model of a discrete abstract computational system, composed of a finite or infinite set of objects \u2013 "cells". The cell in the game of life has two states - \u201Calive\u201D and \u201Cdead\u201D, or "populated" and "unpopulated". The cells live on a two-dimensional grid and each cell has eight adjacent cells - "neighbors". All cells change their state simultaneously, according to update rules by taking into account the states of their neighbors.'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 304
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'R9Plq-D1gEk',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 305
                }
            }), 'John H. Conway on the creation of his Game of Life'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 314
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'CgOcEZinQ2I',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 315
                }
            }), 'Fragment from Stephen Hawking`s The Meaning of Life'), _react2.default.createElement('div', { className: classes.rulesPar, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 324
                }
            }, _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 325
                }
            }, 'Rules'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 328
                }
            }, 'Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:'), _react2.default.createElement('div', { className: classes.rules, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 333
                }
            }, _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 334
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335
                }
            }, 'Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336
                }
            }, 'Any live cell with two or three live neighbours lives on to the next generation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 337
                }
            }, 'Any live cell with more than three live neighbours dies, as if by overpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 338
                }
            }, 'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'))), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 341
                }
            }, 'The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.')), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 350
                }
            }, 'Examples of Patterns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 353
                }
            }, 'In order to simulate infinite grid on the game board and in the examples below (except for the gun pattern), cells that are situated on the edges of the boards are handled in a toroidal manner, i.e. lower neighbor of a cell situated on the bottom edge of board will be a cell from the top edge on the same column and a neighbor to the right of a cell situated on the right edge will be from the left edge.'), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 361
                }
            }, 'Still Life'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 364
                }
            }, 'Stable finite patterns.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 367
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 368
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 372
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BLOCK].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BLOCK].name,
                withButton: false,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BLOCK].canvas = el;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 373
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 382
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BOAT].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BOAT].name,
                withButton: false,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BOAT].canvas = el;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 383
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 392
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.LOAF].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.LOAF].name,
                withButton: false,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.LOAF].canvas = el;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 393
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 402
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BEEHIVE].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BEEHIVE].name,
                withButton: false,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BEEHIVE].canvas = el;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 403
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 413
                }
            }, 'Oscillators'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 416
                }
            }, 'These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. The most common period-2 oscillators include:'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 420
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 421
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 424
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BLINKER].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BLINKER].name,
                stopped: this.props.stopped[_boardNames.boardNames.BLINKER],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BLINKER].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.BLINKER]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 425
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 437
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BEACON].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BEACON].name,
                stopped: this.props.stopped[_boardNames.boardNames.BEACON],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BEACON].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.BEACON]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 438
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 450
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.TOAD].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.TOAD].name,
                stopped: this.props.stopped[_boardNames.boardNames.TOAD],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.TOAD].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.TOAD]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 451
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 462
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.GLASSES].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.GLASSES].name,
                stopped: this.props.stopped[_boardNames.boardNames.GLASSES],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GLASSES].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GLASSES]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 463
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 474
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.QUAD].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.QUAD].name,
                stopped: this.props.stopped[_boardNames.boardNames.QUAD],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.QUAD].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.QUAD]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 475
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 488
                }
            }, 'Gliders and Spaceships'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 491
                }
            }, 'A spaceship is more complex oscillator, returning to the same configuration but shifted after a finite number of generations. The glider is a simple spaceship that has period 4, i.e. repeats every four generations, but moves diagonally one cell every four generations. Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. They each move in a straight line.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 498
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 499
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 502
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.GLIDER].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.GLIDER].name,
                stopped: this.props.stopped[_boardNames.boardNames.GLIDER],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GLIDER].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GLIDER]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 503
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 515
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.SPACESHIP].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.SPACESHIP].name,
                stopped: this.props.stopped[_boardNames.boardNames.SPACESHIP],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.SPACESHIP].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.SPACESHIP]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 516
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 530
                }
            }, 'Guns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 533
                }
            }, 'Conway offered a prize for any example of patterns that grow forever. Conway\'s prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever. The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. Where these shuttles collide, instead of producing beehives, they produce a new glider. This glider moves away in time for the process to repeat itself 30 steps later.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 541
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 542
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 545
                }
            }, _react2.default.createElement(BoardElement, {
                patternName: this.examples[_boardNames.boardNames.GUN].name,
                stopped: this.props.stopped[_boardNames.boardNames.GUN],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GUN].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GUN]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 546
                }
            })))), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 559
                }
            }, 'Origins'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 563
                }
            }, 'Conway was interested in a problem presented in the 1940s by mathematician ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/John_von_Neumann', title: 'John von Neumann', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 564
                }
            }, 'John von Neumann'), ', who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway\'s successful attempt to drastically simplify von Neumann\'s ideas.'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 572
                }
            }, 'The game made its first public appearance in the October 1970 issue of ', _react2.default.createElement('i', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 572
                }
            }, 'Scientific American'), ', in Martin Gardner\'s column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway\'s Game of Life. Gardner wrote:'), _react2.default.createElement('blockquote', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 577
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 578
                }
            }, 'The game made Conway instantly famous, but it also opened up a whole new field of mathematical research, the field of cellular automata\xA0... Because of Life\'s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called "simulation games" (games that resemble real life processes).')), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 585
                }
            }, 'References'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 588
                }
            }, 'Wikipedia. 2017. Conway\'s Game of Life. [ONLINE] Available at: ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 589
                }
            }, 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'), '. Overview of history, rules and examples of patterns of the Game of Life'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 592
                }
            }, 'www.ericweisstein.com. 1996-2005. Eric Weisstein\'s Treasure Trove of the Life C.A. [ONLINE] Available at: ', _react2.default.createElement('a', { className: classes.link, href: 'http://www.ericweisstein.com/encyclopedias/life/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 593
                }
            }, 'http://www.ericweisstein.com/encyclopedias/life/'), '. This source includes large collection of examples of possible patterns.'), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 596
                }
            }, 'Links'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 599
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.scholarpedia.org/article/Game_of_Life', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 600
                }
            }, 'www.scholarpedia.org/article/Game_of_Life')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 602
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'https://www.ibiblio.org/lifepatterns/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 603
                }
            }, 'www.ibiblio.org/lifepatterns/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 605
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://mathworld.wolfram.com/GameofLife.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 606
                }
            }, 'http://mathworld.wolfram.com/GameofLife.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 608
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.conwaylife.com/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 609
                }
            }, 'http://www.conwaylife.com/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 611
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://golly.sourceforge.net/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 612
                }
            }, 'http://golly.sourceforge.net/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 614
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.math.com/students/wonders/life/life.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 615
                }
            }, 'http://www.math.com/students/wonders/life/life.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 617
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.cuug.ab.ca/dewara/life/life.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 618
                }
            }, 'http://www.cuug.ab.ca/dewara/life/life.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 620
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.radicaleye.com/lifepage/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 621
                }
            }, 'http://www.radicaleye.com/lifepage/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 623
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 624
                }
            }, 'https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 626
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 627
                }
            }, 'http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 629
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://natureofcode.com/book/chapter-7-cellular-automata/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 630
                }
            }, 'http://natureofcode.com/book/chapter-7-cellular-automata/'))), _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 633
                }
            }, ' ')));
        }
    }]);
    return About;
}(_react.Component);

About.propTypes = {
    classes: _propTypes2.default.object.isRequired,
    setStopped: _propTypes2.default.func.isRequired,
    stopped: _propTypes2.default.shape((_PropTypes$shape = {}, (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.MAIN, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLOCK, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BOAT, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.LOAF, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEEHIVE, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLINKER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEACON, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.TOAD, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GLIDER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.SPACESHIP, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GUN, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GLASSES, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.QUAD, _propTypes2.default.bool), _PropTypes$shape)).isRequired
};

exports.default = (0, _styles.withStyles)(styles)(About);

var patternBoard = function patternBoard(grid, cellsList) {
    return { grid: grid, cellsList: cellsList };
};

var BoardElement = function BoardElement(_ref) {
    var width = _ref.width,
        patternName = _ref.patternName,
        stopped = _ref.stopped,
        buttonColor = _ref.buttonColor,
        withButton = _ref.withButton,
        props = (0, _objectWithoutProperties3.default)(_ref, ['width', 'patternName', 'stopped', 'buttonColor', 'withButton']);

    return _react2.default.createElement('div', { style: { width: width, height: "100%" }, className: 'jsx-1941372934' + ' ' + 'board',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 671
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1941372934' + ' ' + 'item',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 672
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1941372934' + ' ' + 'canvas',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 673
        }
    }, _react2.default.createElement('canvas', {
        ref: props.setCanvas,
        className: 'jsx-1941372934',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 674
        }
    })), withButton ? _react2.default.createElement(_IconButton2.default, { className: 'button', title: stopped ? "Start" : "Pause", onClick: props.handlePlayToggle, __source: {
            fileName: _jsxFileName,
            lineNumber: 679
        }
    }, _react2.default.createElement(_materialUiToggleIcon2.default, {
        on: stopped,
        onIcon: _react2.default.createElement(_PlayArrow2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 682
            }
        }),
        offIcon: _react2.default.createElement(_Pause2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 683
            }
        }),

        __source: {
            fileName: _jsxFileName,
            lineNumber: 680
        }
    })) : _react2.default.createElement('div', {
        className: 'jsx-1941372934',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 689
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-1941372934',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 694
        }
    }, patternName)), _react2.default.createElement(_style2.default, {
        styleId: '1941372934',
        css: '.board{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:.7em;text-align:center;font-family:\'Open Sans\',sans-serif;}.item{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.button{width:35px;height:35px;color:' + _colors.colors.BUTTON + ';}.icon{width:25px;height:25px;}.canvas{background-color:' + _colors.colors.BOARD + ';}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTByQjJCLEFBRzhCLEFBT08sQUFHVCxBQU1BLEFBS21DLFdBVmxDLEFBTUEsWUFMc0IsQUFPdEMsdUJBR0EsWUFSQSxjQU5BLEVBUG1CLGVBQ0csa0JBQ2tCLG1DQUV4QyIsImZpbGUiOiJjb21wb25lbnRzXFxBYm91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XHJcbmltcG9ydCBHYW1lR3JpZCBmcm9tICcuLi9oZWxwZXJzL0dhbWVHcmlkJztcclxuaW1wb3J0IEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlSWNvbiBmcm9tICdtYXRlcmlhbC11aS10b2dnbGUtaWNvbic7XHJcbmltcG9ydCBQbGF5QXJyb3cgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvUGxheUFycm93JztcclxuaW1wb3J0IFBhdXNlIGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1BhdXNlJztcclxuaW1wb3J0IHtib2FyZE5hbWVzIGFzIGJvYXJkTmFtZX0gZnJvbSAnLi4vaGVscGVycy9ib2FyZE5hbWVzJ1xyXG5pbXBvcnQgeyBzaGlmdFBhdHRlcm5Ub0NlbnRlciwgc2hpZnRQYXR0ZXJuIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHtjb2xvcnMgYXMgY29sb3J9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcbnZhciBiZWFjb25Db29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9iZWFjb24udHh0Jyk7XHJcbnZhciBiZWVoaXZlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmVlaGl2ZS50eHQnKTtcclxudmFyIGJsaW5rZXJDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibGlua2VyLnR4dCcpO1xyXG52YXIgYmxvY2tDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibG9jay50eHQnKTtcclxudmFyIGJvYXRDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ib2F0LnR4dCcpO1xyXG52YXIgZ2xpZGVyQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ2xpZGVyLnR4dCcpO1xyXG52YXIgZ3VuQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ3VuLnR4dCcpO1xyXG52YXIgbG9hZkNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2xvYWYudHh0Jyk7XHJcbnZhciBsc3BhY2VzaGlwQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvbHNwYWNlc2hpcC50eHQnKTtcclxudmFyIG9zY0dsYXNzZXNDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9vc2NHbGFzc2VzLnR4dCcpO1xyXG52YXIgb3NjUXVhZENvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL29zY1F1YWQudHh0Jyk7XHJcbnZhciB0b2FkQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9hZC50eHQnKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHJcblx0bWFpbkNvbnRlbnQ6IHtcclxuXHRcdG1hcmdpblRvcDogNzVcclxuXHR9LFxyXG4gICAgcnVsZXM6IHtcclxuICAgIFx0YmFja2dyb3VuZENvbG9yOidyZ2JhKDI0MCwyNDgsMjU1LC43KScsXHJcbiAgICBcdFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnT3BlbiBTYW5zJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sICAgICBcdFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIFxyXG4gICAgICAgIGZhbGxiYWNrczp7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgICBtYXJnaW5Ub3A6IDQwXHJcbiAgICB9LFxyXG4gICAgdmlkZW86IHtcclxuICAgIFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIFx0Zm9udEZhbWlseTogJ09wZW4gU2FucycsIFxyXG4gICAgICAgIGZhbGxiYWNrczp7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICB9LFxyXG4gICAgXHRtYXJnaW5Ub3A6MzAsXHJcbiAgICB9LFxyXG4gICAgYm9hcmRzU2VjdGlvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgXHRtYXJnaW5Ub3A6MzAsXHJcbiAgICB9LFxyXG4gICAgbGluazoge1xyXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24nOiAndW5kZXJsaW5lICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICdvdmVyZmxvdy13cmFwJzogJ2JyZWFrLXdvcmQnLFxyXG4gICAgICAgICd3b3JkLXdyYXAnOiAnYnJlYWstd29yZCcsXHJcbiAgICB9LCAgICBcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgbGV0IHNxdWFyZVNpemUgPSAxMjtcclxuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHtcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5CRUFDT05dOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNiwgXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGJlYWNvbkNvb3JkaW5hdGVzKSwgICAgXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCAgIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCZWFjb25cIiwgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuQkVFSElWRV06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChiZWVoaXZlQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlZWhpdmVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5CTElOS0VSXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGJsaW5rZXJDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmxpbmtlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLkJMT0NLXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGJsb2NrQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJsb2NrXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuQk9BVF06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChib2F0Q29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJvYXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5HTElERVJdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChnbGlkZXJDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiR2xpZGVyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuR1VOXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoZ3VuQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUaGUgR29zcGVyIEdsaWRlciBHdW5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5MT0FGXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGxvYWZDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTG9hZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLlNQQUNFU0hJUF06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGxzcGFjZXNoaXBDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTGlnaHR3ZWlnaHQgU3BhY2VzaGlwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuR0xBU1NFU106IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTMsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KG9zY0dsYXNzZXNDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiR2xhc3Nlc1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLlFVQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjUXVhZENvb3JkaW5hdGVzKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJRdWFkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuVE9BRF06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdCh0b2FkQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRvYWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICB0aGlzLmV4YW1wbGVzID0ge307XHJcbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHBhcmFtZXRlcnMpe1xyXG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVzW25hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogbmV3IEdhbWVHcmlkKG5hbWUsIHBhcmFtZXRlcnNbbmFtZV0ud2lkdGgsIHBhcmFtZXRlcnNbbmFtZV0uaGVpZ2h0LCBzcXVhcmVTaXplLCAhcGFyYW1ldGVyc1tuYW1lXS53cmFwcGVkKSxcclxuICAgICAgICAgICAgICAgIGNlbGxzOiBuYW1lID09IGJvYXJkTmFtZS5HVU4gPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFBhdHRlcm4ocGFyYW1ldGVyc1tuYW1lXS5jb29yZGluYXRlcywgMSwgMSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0UGF0dGVyblRvQ2VudGVyKHBhcmFtZXRlcnNbbmFtZV0uY29vcmRpbmF0ZXMsIHBhcmFtZXRlcnNbbmFtZV0uaGVpZ2h0LCBwYXJhbWV0ZXJzW25hbWVdLndpZHRoKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHBhcmFtZXRlcnNbbmFtZV0ubmFtZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVsb2FkOmZhbHNlLFxyXG4gICAgICAgICAgICBzY3JlZW46IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXHJcbiAgICAgICAgICAgICAgICBmYWN0b3I6IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwID8gMyA6IHdpbmRvdy5pbm5lcldpZHRoIDwgOTYwID8gNiA6IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHBhcmFtZXRlcnMpe1xyXG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVzW25hbWVdLmNhbnZhc1dpZHRoID0gdGhpcy5nZXRDYW52YXNXaWR0aCh0aGlzLmV4YW1wbGVzW25hbWVdLmdyaWQpIFxyXG4gICAgICAgIH1cclxuXHJcblx0XHR0aGlzLnN0YXJ0ZWRQYXR0ZXJuc0xpc3QgPSBbXTtcclxuXHRcdHRoaXMuckFGID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmludGVydmFsPTMwMDtcclxuXHRcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQgPSAoc3RvcHBlZCwgbmFtZSkgPT4gcHJvcHMuc2V0U3RvcHBlZChzdG9wcGVkLCBuYW1lKTtcclxuXHR9XHJcblxyXG4gICAgZ2V0Q2FudmFzV2lkdGgoZ3JpZCl7XHJcbiAgICAgICAgbGV0IHtzY3JlZW59ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQge3dpZHRoLCBzcXVhcmVTaXplfSA9IGdyaWQ7XHJcbiAgICAgICAgbGV0IHcgPSAoKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplICogc2NyZWVuLndpZHRoLzEwMCAqIC43KS9zY3JlZW4uZmFjdG9yO1xyXG4gICAgICAgIHJldHVybiB3ID4gc2NyZWVuLndpZHRoICogLjYgPyBzY3JlZW4ud2lkdGggKiAuNiA6IHc7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGxheVRvZ2dsZShwYXR0ZXJuKXtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0b3BwZWRbcGF0dGVybi5ncmlkLm5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydChwYXR0ZXJuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9wKHBhdHRlcm4pO1xyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG5cclxuICAgIHN0b3AocGF0dGVybil7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc3RvcHBlZFtwYXR0ZXJuLmdyaWQubmFtZV0pe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSwgcGF0dGVybi5ncmlkLm5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXJ0ZWRQYXR0ZXJuc0xpc3QuaW5kZXhPZihwYXR0ZXJuKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydGVkUGF0dGVybnNMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhcnRlZFBhdHRlcm5zTGlzdC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0KHBhdHRlcm4pe1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RvcHBlZFtwYXR0ZXJuLmdyaWQubmFtZV0pe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3BwZWQoZmFsc2UsIHBhdHRlcm4uZ3JpZC5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydGVkUGF0dGVybnNMaXN0LnB1c2gocGF0dGVybik7XHJcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhcnRlZFBhdHRlcm5zTGlzdC5sZW5ndGggPT09IDEpe1xyXG4gICAgICAgICAgICBcdHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0dXBkYXRlKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbHRhID4gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5kZWx0YSAlIHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZFBhdHRlcm5zTGlzdC5mb3JFYWNoKHAgPT4gcC5ncmlkLnVwZGF0ZSgpKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuXHRcdHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uZ3JpZC5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xyXG5cdFx0dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR1VOXS5jYW52YXNXaWR0aCA9IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uY2FudmFzV2lkdGggPiB0aGlzLnN0YXRlLnNjcmVlbi53aWR0aCAqIC42ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNjcmVlbi53aWR0aCAqIC42IDogdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR1VOXS5jYW52YXNXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLnN0YXRlLnNjcmVlbi5yYXRpb1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLmV4YW1wbGVzKXtcclxuICAgICAgICAgICAgbGV0IHtncmlkLCBjZWxscywgY2FudmFzfSA9IHRoaXMuZXhhbXBsZXNbbmFtZV07XHJcbiAgICAgICAgICAgIGdyaWQubWFrZUJvYXJkKGdyaWQud2lkdGgsIGdyaWQuaGVpZ2h0LCBncmlkLnNxdWFyZVNpemUsIHJhdGlvLCBjYW52YXMsIGNlbGxzKTtcclxuICAgICAgICAgICAgZ3JpZC51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpOyAgICBcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSwgbnVsbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkgeyAgICBcclxuICAgIFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcclxuICAgIFx0cmV0dXJuKFxyXG4gICAgXHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgICAgICBcclxuICAgIFx0ICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdCAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0gPiA8L0dyaWQ+XHJcbiAgICBcdCAgICBcclxuICAgIFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfSAgc209ezh9ID5cclxuICAgIFx0ICAgIFxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaW50cm99ICR7Y2xhc3Nlcy50ZXh0fWB9PlxyXG4gICAgXHQgICAgXHQ8c3Ryb25nPlRoZSBHYW1lIG9mIExpZmU8L3N0cm9uZz4gaXMgdGhlIGJlc3Qta25vd24gdHdvLWRpbWVuc2lvbmFsICBcclxuICAgICAgICAgICAgICAgIFwiPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DZWxsdWxhcl9hdXRvbWF0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkNlbGx1bGFyIGF1dG9tYXRvblwiPmNlbGx1bGFyIGF1dG9tYXRvbjwvYT5cIiwgXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRlZCBpbiAxOTcwIGJ5IHRoZSBCcml0aXNoIG1hdGhlbWF0aWNpYW4gPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Kb2huX0hvcnRvbl9Db253YXlcIiB0aXRsZT1cIkpvaG4gQ29ud2F5XCI+Sm9obiBIb3J0b24gQ29ud2F5PC9hPi4gXHJcbiAgICAgICAgICAgICAgICBUaGUgbGlmZSBpcyBhIGNlbGx1bGFyIGF1dG9tYXRvbiwgd2hpY2ggaXMgYSBtb2RlbCBvZiBhIGRpc2NyZXRlIGFic3RyYWN0IGNvbXB1dGF0aW9uYWwgc3lzdGVtLCBcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VkIG9mIGEgZmluaXRlIG9yIGluZmluaXRlIHNldCBvZiBvYmplY3RzIOKAkyBcImNlbGxzXCIuIFRoZSBjZWxsIGluIHRoZSBnYW1lIG9mIGxpZmUgaGFzIHR3byBzdGF0ZXMgLSBcclxuICAgICAgICAgICAgICAgIOKAnGFsaXZl4oCdIGFuZCDigJxkZWFk4oCdLCBvciBcInBvcHVsYXRlZFwiIGFuZCBcInVucG9wdWxhdGVkXCIuIFRoZSBjZWxscyBsaXZlIG9uIGEgdHdvLWRpbWVuc2lvbmFsIGdyaWQgYW5kIGVhY2ggY2VsbCBcclxuICAgICAgICAgICAgICAgIGhhcyBlaWdodCBhZGphY2VudCBjZWxscyAtIFwibmVpZ2hib3JzXCIuIEFsbCBjZWxscyBjaGFuZ2UgdGhlaXIgc3RhdGUgc2ltdWx0YW5lb3VzbHksIGFjY29yZGluZyB0byB1cGRhdGUgXHJcbiAgICAgICAgICAgICAgICBydWxlcyBieSB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBzdGF0ZXMgb2YgdGhlaXIgbmVpZ2hib3JzLlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdFxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb30+XHJcbiAgICAgICAgICAgICAgICA8WW91VHViZVxyXG4gICAgICAgICAgICAgICAgICB2aWRlb0lkPVwiUjlQbHEtRDFnRWtcIiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBvcHRzPXt7d2lkdGg6JzEwMCUnLCBwbGF5ZXJWYXJzOiB7c2hvd2luZm86MCwgcmVsOjB9fX0gICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIEpvaG4gSC4gQ29ud2F5IG9uIHRoZSBjcmVhdGlvbiBvZiBoaXMgR2FtZSBvZiBMaWZlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb30+XHJcbiAgICAgICAgICAgICAgICA8WW91VHViZVxyXG4gICAgICAgICAgICAgICAgICB2aWRlb0lkPVwiQ2dPY0VaaW5RMklcIiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBvcHRzPXt7d2lkdGg6JzEwMCUnLCBwbGF5ZXJWYXJzOiB7c2hvd2luZm86MCwgcmVsOjB9fX0gICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIEZyYWdtZW50IGZyb20gU3RlcGhlbiBIYXdraW5nYHMgVGhlIE1lYW5pbmcgb2YgTGlmZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ydWxlc1Bhcn0+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRSdWxlc1xyXG4gICAgXHQgICAgXHQ8L2gyPlxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdEV2ZXJ5IGNlbGwgaW50ZXJhY3RzIHdpdGggaXRzIGVpZ2h0IG5laWdoYm91cnMsIFxyXG4gICAgXHQgICAgXHR3aGljaCBhcmUgdGhlIGNlbGxzIHRoYXQgYXJlIGhvcml6b250YWxseSwgdmVydGljYWxseSwgb3IgZGlhZ29uYWxseSBhZGphY2VudC4gXHJcbiAgICBcdCAgICBcdEF0IGVhY2ggc3RlcCBpbiB0aW1lLCB0aGUgZm9sbG93aW5nIHRyYW5zaXRpb25zIG9jY3VyOlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJ1bGVzfT5cclxuICAgIFx0ICAgIFx0PHVsPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIGZld2VyIHRoYW4gdHdvIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBjYXVzZWQgYnkgdW5kZXJwb3B1bGF0aW9uLjwvbGk+XHJcbiAgICBcdFx0XHRcdDxsaT5BbnkgbGl2ZSBjZWxsIHdpdGggdHdvIG9yIHRocmVlIGxpdmUgbmVpZ2hib3VycyBsaXZlcyBvbiB0byB0aGUgbmV4dCBnZW5lcmF0aW9uLjwvbGk+XHJcbiAgICBcdFx0XHRcdDxsaT5BbnkgbGl2ZSBjZWxsIHdpdGggbW9yZSB0aGFuIHRocmVlIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBieSBvdmVycG9wdWxhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGRlYWQgY2VsbCB3aXRoIGV4YWN0bHkgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGJlY29tZXMgYSBsaXZlIGNlbGwsIGFzIGlmIGJ5IHJlcHJvZHVjdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0PC91bD5cclxuICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgXHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHRcdFx0VGhlIGluaXRpYWwgcGF0dGVybiBjb25zdGl0dXRlcyB0aGUgc2VlZCBvZiB0aGUgc3lzdGVtLiBcclxuICAgIFx0XHRcdFRoZSBmaXJzdCBnZW5lcmF0aW9uIGlzIGNyZWF0ZWQgYnkgYXBwbHlpbmcgdGhlIGFib3ZlIHJ1bGVzIFxyXG4gICAgXHRcdFx0c2ltdWx0YW5lb3VzbHkgdG8gZXZlcnkgY2VsbCBpbiB0aGUgc2VlZCAtIGJpcnRocyBhbmQgZGVhdGhzIG9jY3VyIHNpbXVsdGFuZW91c2x5LCBcclxuICAgIFx0XHRcdGFuZCB0aGUgZGlzY3JldGUgbW9tZW50IGF0IHdoaWNoIHRoaXMgaGFwcGVucyBpcyBzb21ldGltZXMgY2FsbGVkIGEgdGljayBcclxuICAgIFx0XHRcdChpbiBvdGhlciB3b3JkcywgZWFjaCBnZW5lcmF0aW9uIGlzIGEgcHVyZSBmdW5jdGlvbiBvZiB0aGUgcHJlY2VkaW5nIG9uZSkuIFxyXG4gICAgXHRcdFx0VGhlIHJ1bGVzIGNvbnRpbnVlIHRvIGJlIGFwcGxpZWQgcmVwZWF0ZWRseSB0byBjcmVhdGUgZnVydGhlciBnZW5lcmF0aW9ucy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8L2Rpdj5cclxuICAgIFx0ICAgIFx0PGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdCAgICBcdEV4YW1wbGVzIG9mIFBhdHRlcm5zXHJcbiAgICBcdCAgICBcdDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICBJbiBvcmRlciB0byBzaW11bGF0ZSBpbmZpbml0ZSBncmlkIG9uIHRoZSBnYW1lIGJvYXJkIGFuZCBpbiB0aGUgZXhhbXBsZXMgYmVsb3cgKGV4Y2VwdCBmb3IgdGhlIGd1biBwYXR0ZXJuKSwgXHJcbiAgICAgICAgICAgICAgICBjZWxscyB0aGF0IGFyZSBzaXR1YXRlZCBvbiB0aGUgZWRnZXMgb2YgdGhlIGJvYXJkcyBhcmUgaGFuZGxlZCBpbiBhIHRvcm9pZGFsIG1hbm5lciwgXHJcbiAgICAgICAgICAgICAgICBpLmUuIGxvd2VyIG5laWdoYm9yIG9mIGEgY2VsbCBzaXR1YXRlZCBvbiB0aGUgYm90dG9tIGVkZ2Ugb2YgYm9hcmQgd2lsbCBiZSBhIGNlbGwgZnJvbSBcclxuICAgICAgICAgICAgICAgIHRoZSB0b3AgZWRnZSBvbiB0aGUgc2FtZSBjb2x1bW4gYW5kIGEgbmVpZ2hib3IgdG8gdGhlIHJpZ2h0IG9mIGEgY2VsbCBzaXR1YXRlZCBvbiB0aGUgcmlnaHQgXHJcbiAgICAgICAgICAgICAgICBlZGdlIHdpbGwgYmUgZnJvbSB0aGUgbGVmdCBlZGdlLiBcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICBcdCAgICBcdDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRTdGlsbCBMaWZlXHJcbiAgICBcdCAgICBcdDwvaDQ+XHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0ICAgIFx0U3RhYmxlIGZpbml0ZSBwYXR0ZXJucy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG4gICAgXHQgICAgXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MTZ9ID5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJMT0NLXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJMT0NLXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTE9DS10uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CT0FUXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJPQVRdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJPQVRdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5MT0FGXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkxPQUZdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkxPQUZdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkVFSElWRV0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUVISVZFXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUVISVZFXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0ICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgT3NjaWxsYXRvcnMgXHJcbiAgICBcdFx0ICAgIDwvaDQ+XHJcbiAgICBcdFx0ICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0ICAgIFx0VGhlc2UgcGF0dGVybnMgcmVwZWF0IHRoZWlyIGNvbmZpZ3VyYXRpb24gcGVyaW9kaWNhbGx5IGFuZCBpbmZpbml0ZWx5LiBUaGUgYmFzaWMgb3NjaWxsYXRvcnMgaGF2ZSBwZXJpb2RzIG9mIHR3byBvciB0aHJlZSB0aWNrcy4gXHJcbiAgICAgICAgICAgICAgICBUaGUgbW9zdCBjb21tb24gcGVyaW9kLTIgb3NjaWxsYXRvcnMgaW5jbHVkZTpcclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG4gICAgXHQgICAgXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MTZ9PlxyXG4gICAgXHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkxJTktFUl0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTElOS0VSXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLkJMSU5LRVJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7Y29sb3IuQlVUVE9OfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTElOS0VSXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJMSU5LRVJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUFDT05dLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkVBQ09OXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLkJFQUNPTl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJFQUNPTl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUFDT05dKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHMgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuVE9BRF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5UT0FEXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLlRPQURdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7Y29sb3IuQlVUVE9OfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5UT0FEXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlRPQURdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTEFTU0VTXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdMQVNTRVNdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWUuR0xBU1NFU119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdMQVNTRVNdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR0xBU1NFU10pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlFVQURdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuUVVBRF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZS5RVUFEXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge2NvbG9yLkJVVFRPTn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuUVVBRF0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5RVUFEXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgR2xpZGVycyBhbmQgU3BhY2VzaGlwc1xyXG4gICAgXHRcdCAgICA8L2g0PlxyXG4gICAgXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdEEgc3BhY2VzaGlwIGlzIG1vcmUgY29tcGxleCBvc2NpbGxhdG9yLCByZXR1cm5pbmcgdG8gdGhlIHNhbWUgY29uZmlndXJhdGlvbiBidXQgc2hpZnRlZCBhZnRlciBhIGZpbml0ZSBudW1iZXIgb2YgZ2VuZXJhdGlvbnMuIFxyXG4gICAgXHQgICAgXHRUaGUgZ2xpZGVyIGlzIGEgc2ltcGxlIHNwYWNlc2hpcCB0aGF0IGhhcyBwZXJpb2QgNCwgaS5lLiByZXBlYXRzIGV2ZXJ5IGZvdXIgZ2VuZXJhdGlvbnMsIGJ1dCBcclxuICAgICAgICAgICAgICAgIG1vdmVzIGRpYWdvbmFsbHkgb25lIGNlbGwgZXZlcnkgZm91ciBnZW5lcmF0aW9ucy5cclxuICAgIFx0ICAgIFx0T3RoZXIgZXhhbXBsZXMgb2Ygc2ltcGxlIHNwYWNlc2hpcHMgaW5jbHVkZSBsaWdodHdlaWdodCwgbWVkaXVtIHdlaWdodCwgYW5kIGhlYXZ5d2VpZ2h0IHNwYWNlc2hpcHMuIFxyXG4gICAgXHQgICAgXHRUaGV5IGVhY2ggbW92ZSBpbiBhIHN0cmFpZ2h0IGxpbmUuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezE2fT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTElERVJdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR0xJREVSXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLkdMSURFUl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdMSURFUl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTElERVJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG5cclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlNQQUNFU0hJUF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5TUEFDRVNISVBdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWUuU1BBQ0VTSElQXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge2NvbG9yLkJVVFRPTn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuU1BBQ0VTSElQXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlNQQUNFU0hJUF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHQgICAgPC9HcmlkPlx0ICAgXHJcbiAgICBcdFx0ICAgIDwvZGl2PiBcdFxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIEd1bnNcclxuICAgIFx0XHQgICAgPC9oND5cclxuICAgIFx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHRcdFx0Q29ud2F5IG9mZmVyZWQgYSBwcml6ZSBmb3IgYW55IGV4YW1wbGUgb2YgcGF0dGVybnMgdGhhdCBncm93IGZvcmV2ZXIuIFxyXG4gICAgXHRcdFx0Q29ud2F5J3MgcHJpemUgd2FzIGNvbGxlY3RlZCBzb29uIGFmdGVyIGl0cyBhbm5vdW5jZW1lbnQsIHdoZW4gdHdvIGRpZmZlcmVudCB3YXlzIHdlcmUgZGlzY292ZXJlZCBmb3IgZGVzaWduaW5nIGEgcGF0dGVybiB0aGF0IGdyb3dzIGZvcmV2ZXIuXHJcblxyXG4gICAgXHRcdFx0VGhlIGZpcnN0IG9mIHRoZXNlIHBhdHRlcm5zIGlzIHRoZSBwZXJpb2QtMzAgZ2xpZGVyIGd1biwgd2hpY2ggaXMgYmFzZWQgb24gdGhlIGludGVyYWN0aW9uIG9mIHR3byBxdWVlbiBiZWUgc2h1dHRsZXMuIFxyXG4gICAgXHRcdFx0V2hlcmUgdGhlc2Ugc2h1dHRsZXMgY29sbGlkZSwgaW5zdGVhZCBvZiBwcm9kdWNpbmcgYmVlaGl2ZXMsIHRoZXkgcHJvZHVjZSBhIG5ldyBnbGlkZXIuIFxyXG4gICAgXHRcdFx0VGhpcyBnbGlkZXIgbW92ZXMgYXdheSBpbiB0aW1lIGZvciB0aGUgcHJvY2VzcyB0byByZXBlYXQgaXRzZWxmIDMwIHN0ZXBzIGxhdGVyLlxyXG4gICAgXHRcdFx0PC9wPlxyXG4gICAgXHRcdFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz17MTJ9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gIHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HVU5dLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWUuR1VOXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge2NvbG9yLkJVVFRPTn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR1VOXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcblxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHRcclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRPcmlnaW5zXHJcbiAgICBcdCAgICBcdDwvaDI+XHJcblxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+Q29ud2F5IHdhcyBpbnRlcmVzdGVkIGluIGEgcHJvYmxlbSBwcmVzZW50ZWQgaW4gdGhlIDE5NDBzIGJ5IFxyXG4gICAgXHQgICAgXHRtYXRoZW1hdGljaWFuIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSm9obl92b25fTmV1bWFublwiIHRpdGxlPVwiSm9obiB2b24gTmV1bWFublwiPkpvaG4gdm9uIE5ldW1hbm48L2E+LCBcclxuICAgIFx0ICAgIFx0d2hvIGF0dGVtcHRlZCB0byBmaW5kIGEgaHlwb3RoZXRpY2FsIG1hY2hpbmUgdGhhdCBjb3VsZCBidWlsZCBjb3BpZXMgb2YgaXRzZWxmIFxyXG4gICAgXHQgICAgXHRhbmQgc3VjY2VlZGVkIHdoZW4gaGUgZm91bmQgYSBtYXRoZW1hdGljYWwgbW9kZWwgZm9yIHN1Y2ggYSBtYWNoaW5lIHdpdGggdmVyeSBcclxuICAgIFx0ICAgIFx0Y29tcGxpY2F0ZWQgcnVsZXMgb24gYSByZWN0YW5ndWxhciBncmlkLiBUaGUgR2FtZSBvZiBMaWZlIGVtZXJnZWQgYXMgQ29ud2F5J3MgXHJcbiAgICBcdCAgICBcdHN1Y2Nlc3NmdWwgYXR0ZW1wdCB0byBkcmFzdGljYWxseSBzaW1wbGlmeSB2b24gTmV1bWFubidzIGlkZWFzLlxyXG5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlRoZSBnYW1lIG1hZGUgaXRzIGZpcnN0IHB1YmxpYyBhcHBlYXJhbmNlIGluIHRoZSBPY3RvYmVyIDE5NzAgaXNzdWUgb2YgPGk+U2NpZW50aWZpYyBBbWVyaWNhbjwvaT4sIGluIE1hcnRpbiBHYXJkbmVyJ3MgY29sdW1uLiBcclxuICAgIFx0ICAgIFx0RnJvbSBhIHRoZW9yZXRpY2FsIHBvaW50IG9mIHZpZXcsIGl0IGlzIGludGVyZXN0aW5nIGJlY2F1c2UgaXQgaGFzIHRoZSBwb3dlciBvZiBcclxuICAgIFx0ICAgIFx0YSB1bml2ZXJzYWwgVHVyaW5nIG1hY2hpbmU6IHRoYXQgaXMsIGFueXRoaW5nIHRoYXQgY2FuIGJlIGNvbXB1dGVkIGFsZ29yaXRobWljYWxseSBcclxuICAgIFx0ICAgIFx0Y2FuIGJlIGNvbXB1dGVkIHdpdGhpbiBDb253YXkncyBHYW1lIG9mIExpZmUuIEdhcmRuZXIgd3JvdGU6XHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGJsb2NrcXVvdGU+XHJcbiAgICBcdFx0XHQ8cD5UaGUgZ2FtZSBtYWRlIENvbndheSBpbnN0YW50bHkgZmFtb3VzLCBidXQgaXQgYWxzbyBvcGVuZWQgdXAgYSB3aG9sZSBuZXcgXHJcbiAgICBcdFx0XHRmaWVsZCBvZiBtYXRoZW1hdGljYWwgcmVzZWFyY2gsIHRoZSBmaWVsZCBvZiBjZWxsdWxhciBhdXRvbWF0YSZuYnNwOy4uLiBCZWNhdXNlIG9mIExpZmUncyBhbmFsb2dpZXMgd2l0aCB0aGUgcmlzZSwgXHJcbiAgICBcdFx0XHRmYWxsIGFuZCBhbHRlcmF0aW9ucyBvZiBhIHNvY2lldHkgb2YgbGl2aW5nIG9yZ2FuaXNtcywgaXQgYmVsb25ncyB0byBhIFxyXG4gICAgXHRcdFx0Z3Jvd2luZyBjbGFzcyBvZiB3aGF0IGFyZSBjYWxsZWQgXCJzaW11bGF0aW9uIGdhbWVzXCIgKGdhbWVzIHRoYXQgcmVzZW1ibGUgcmVhbCBsaWZlIHByb2Nlc3NlcykuXHJcbiAgICBcdFx0XHQ8L3A+XHJcbiAgICBcdFx0XHQ8L2Jsb2NrcXVvdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBSZWZlcmVuY2VzXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgV2lraXBlZGlhLiAyMDE3LiBDb253YXkncyBHYW1lIG9mIExpZmUuIFtPTkxJTkVdIEF2YWlsYWJsZSBhdDogPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db253YXklMjdzX0dhbWVfb2ZfTGlmZVwiPmh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbndheSUyN3NfR2FtZV9vZl9MaWZlPC9hPi4gXHJcbiAgICAgICAgICAgICAgICBPdmVydmlldyBvZiBoaXN0b3J5LCBydWxlcyBhbmQgZXhhbXBsZXMgb2YgcGF0dGVybnMgb2YgdGhlIEdhbWUgb2YgTGlmZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgd3d3LmVyaWN3ZWlzc3RlaW4uY29tLiAxOTk2LTIwMDUuIEVyaWMgV2Vpc3N0ZWluJ3MgVHJlYXN1cmUgVHJvdmUgb2YgdGhlIExpZmUgQy5BLiBbT05MSU5FXSBBdmFpbGFibGUgYXQ6IDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5lcmljd2Vpc3N0ZWluLmNvbS9lbmN5Y2xvcGVkaWFzL2xpZmUvXCI+aHR0cDovL3d3dy5lcmljd2Vpc3N0ZWluLmNvbS9lbmN5Y2xvcGVkaWFzL2xpZmUvPC9hPi4gXHJcbiAgICAgICAgICAgICAgICBUaGlzIHNvdXJjZSBpbmNsdWRlcyBsYXJnZSBjb2xsZWN0aW9uIG9mIGV4YW1wbGVzIG9mIHBvc3NpYmxlIHBhdHRlcm5zLlxyXG4gICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgTGlua3NcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuc2Nob2xhcnBlZGlhLm9yZy9hcnRpY2xlL0dhbWVfb2ZfTGlmZVwiPnd3dy5zY2hvbGFycGVkaWEub3JnL2FydGljbGUvR2FtZV9vZl9MaWZlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPiBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly93d3cuaWJpYmxpby5vcmcvbGlmZXBhdHRlcm5zL1wiPnd3dy5pYmlibGlvLm9yZy9saWZlcGF0dGVybnMvPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPiAgIFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0dhbWVvZkxpZmUuaHRtbFwiPmh0dHA6Ly9tYXRod29ybGQud29sZnJhbS5jb20vR2FtZW9mTGlmZS5odG1sPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPiAgIFx0XHRcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5jb253YXlsaWZlLmNvbS9cIj5odHRwOi8vd3d3LmNvbndheWxpZmUuY29tLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cdFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vZ29sbHkuc291cmNlZm9yZ2UubmV0L1wiPmh0dHA6Ly9nb2xseS5zb3VyY2Vmb3JnZS5uZXQvPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vd3d3Lm1hdGguY29tL3N0dWRlbnRzL3dvbmRlcnMvbGlmZS9saWZlLmh0bWxcIj5odHRwOi8vd3d3Lm1hdGguY29tL3N0dWRlbnRzL3dvbmRlcnMvbGlmZS9saWZlLmh0bWw8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuY3V1Zy5hYi5jYS9kZXdhcmEvbGlmZS9saWZlLmh0bWxcIj5odHRwOi8vd3d3LmN1dWcuYWIuY2EvZGV3YXJhL2xpZmUvbGlmZS5odG1sPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vd3d3LnJhZGljYWxleWUuY29tL2xpZmVwYWdlL1wiID5odHRwOi8vd3d3LnJhZGljYWxleWUuY29tL2xpZmVwYWdlLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly93d3cudGhlZ3VhcmRpYW4uY29tL3NjaWVuY2UvYWxleHMtYWR2ZW50dXJlcy1pbi1udW1iZXJsYW5kLzIwMTQvZGVjLzE1L3RoZS1nYW1lLW9mLWxpZmUtYS1iZWdpbm5lcnMtZ3VpZGVcIj5odHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vc2NpZW5jZS9hbGV4cy1hZHZlbnR1cmVzLWluLW51bWJlcmxhbmQvMjAxNC9kZWMvMTUvdGhlLWdhbWUtb2YtbGlmZS1hLWJlZ2lubmVycy1ndWlkZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5pbnN0cnVjdGFibGVzLmNvbS9pZC9PVENBLU1ldGFwaXhlbC1Db253YXlzLUdhbWUtb2YtTGlmZS9cIj5odHRwOi8vd3d3Lmluc3RydWN0YWJsZXMuY29tL2lkL09UQ0EtTWV0YXBpeGVsLUNvbndheXMtR2FtZS1vZi1MaWZlLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL25hdHVyZW9mY29kZS5jb20vYm9vay9jaGFwdGVyLTctY2VsbHVsYXItYXV0b21hdGEvXCI+aHR0cDovL25hdHVyZW9mY29kZS5jb20vYm9vay9jaGFwdGVyLTctY2VsbHVsYXItYXV0b21hdGEvPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgXHRcdFx0PC9HcmlkPlxyXG4gICAgXHRcdFx0PEdyaWQgaXRlbSB4cz17MX0gc209ezJ9ID4gPC9HcmlkPlxyXG4gICAgXHRcdFx0PC9HcmlkPlxyXG4gICAgXHQgICAgIFxyXG4gICAgXHQgICAgPC9kaXY+XHJcbiAgICBcdCk7IFxyXG5cdH1cclxufVxyXG5cclxuQWJvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgc2V0U3RvcHBlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHN0b3BwZWQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgW2JvYXJkTmFtZS5NQUlOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5CTE9DS106IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQk9BVF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuTE9BRl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQkVFSElWRV06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQkxJTktFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQkVBQ09OXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5UT0FEXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5HTElERVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lLlNQQUNFU0hJUF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuR1VOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5HTEFTU0VTXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5RVUFEXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBYm91dCk7XHJcblxyXG5cclxuY29uc3QgcGF0dGVybkJvYXJkID0gKGdyaWQsY2VsbHNMaXN0KSA9PiAoe2dyaWQsY2VsbHNMaXN0fSlcclxuXHJcblxyXG5jb25zdCBCb2FyZEVsZW1lbnQgPSAoe3dpZHRoLCBwYXR0ZXJuTmFtZSwgc3RvcHBlZCwgYnV0dG9uQ29sb3IsIHdpdGhCdXR0b24sIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIiBzdHlsZT17e3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbnZhc1wiPlxyXG4gICAgICAgICAgICA8Y2FudmFzIFxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm9wcy5zZXRDYW52YXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7d2l0aEJ1dHRvbiA/IChcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHRpdGxlPXtzdG9wcGVkP1wiU3RhcnRcIjpcIlBhdXNlXCJ9IG9uQ2xpY2sgPSB7cHJvcHMuaGFuZGxlUGxheVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb249e3N0b3BwZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSWNvbj17PFBsYXlBcnJvdyBjbGFzc05hbWU9XCJpY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZkljb249ezxQYXVzZSBjbGFzc05hbWU9XCJpY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwYXR0ZXJuTmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAuYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHtjb2xvci5CVVRUT059O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FudmFzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuQk9BUkR9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+ICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ2VsbHNMaXN0ID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMuc3BsaXQoXCJcXHJcXG5cIikucmVkdWNlKGZ1bmN0aW9uKGFjYywgdmFsLCBZKXtcclxuICAgICAgICB2YWwuc3BsaXQoJ2MnKS5yZWR1Y2UoKGFjY1gsIHZhbFgsIFgpID0+IHtcclxuICAgICAgICAgICAgaWYodmFsWCAhPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGFjYy5wdXNoKFtZLCArdmFsWF0pXHJcbiAgICAgICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sW10pXHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\About.js */'
    }));
};

var createCellsList = function createCellsList(coordinates) {
    return coordinates.split("\r\n").reduce(function (acc, val, Y) {
        val.split('c').reduce(function (accX, valX, X) {
            if (valX !== "") return acc.push([Y, +valX]);
        }, []);

        return acc;
    }, []);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbImJlYWNvbkNvb3JkaW5hdGVzIiwicmVxdWlyZSIsImJlZWhpdmVDb29yZGluYXRlcyIsImJsaW5rZXJDb29yZGluYXRlcyIsImJsb2NrQ29vcmRpbmF0ZXMiLCJib2F0Q29vcmRpbmF0ZXMiLCJnbGlkZXJDb29yZGluYXRlcyIsImd1bkNvb3JkaW5hdGVzIiwibG9hZkNvb3JkaW5hdGVzIiwibHNwYWNlc2hpcENvb3JkaW5hdGVzIiwib3NjR2xhc3Nlc0Nvb3JkaW5hdGVzIiwib3NjUXVhZENvb3JkaW5hdGVzIiwidG9hZENvb3JkaW5hdGVzIiwic3R5bGVzIiwibWFpbkNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJydWxlcyIsImJhY2tncm91bmRDb2xvciIsInRleHQiLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwidmlkZW8iLCJ0ZXh0QWxpZ24iLCJib2FyZHNTZWN0aW9uIiwiZGlzcGxheSIsImxpbmsiLCJBYm91dCIsInByb3BzIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsImV4YW1wbGVzIiwiR1VOIiwiZ3JpZCIsImNhbnZhcyIsInNxdWFyZVNpemUiLCJwYXJhbWV0ZXJzIiwiQkVBQ09OIiwid2lkdGgiLCJoZWlnaHQiLCJjb29yZGluYXRlcyIsImNyZWF0ZUNlbGxzTGlzdCIsIndyYXBwZWQiLCJuYW1lIiwiQkVFSElWRSIsIkJMSU5LRVIiLCJCTE9DSyIsIkJPQVQiLCJHTElERVIiLCJMT0FGIiwiU1BBQ0VTSElQIiwiR0xBU1NFUyIsIlFVQUQiLCJUT0FEIiwiY2VsbHMiLCJzdGF0ZSIsInJlbG9hZCIsInNjcmVlbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZhY3RvciIsImNhbnZhc1dpZHRoIiwiZ2V0Q2FudmFzV2lkdGgiLCJzdGFydGVkUGF0dGVybnNMaXN0IiwickFGIiwiaW50ZXJ2YWwiLCJzZXRTdG9wcGVkIiwic3RvcHBlZCIsInciLCJwYXR0ZXJuIiwic3RhcnQiLCJzdG9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibGVuZ3RoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwdXNoIiwidGhlbiIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJkZWx0YSIsImZvckVhY2giLCJwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCb2FyZCIsImNsYXNzZXMiLCJpbnRybyIsInBsYXllclZhcnMiLCJzaG93aW5mbyIsInJlbCIsInJ1bGVzUGFyIiwiZWwiLCJCVVRUT04iLCJoYW5kbGVQbGF5VG9nZ2xlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzaGFwZSIsIk1BSU4iLCJib29sIiwicGF0dGVybkJvYXJkIiwiY2VsbHNMaXN0IiwiQm9hcmRFbGVtZW50IiwicGF0dGVybk5hbWUiLCJidXR0b25Db2xvciIsIndpdGhCdXR0b24iLCJzZXRDYW52YXMiLCJCT0FSRCIsInNwbGl0IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiWSIsImFjY1giLCJ2YWxYIiwiWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJLG9CQUFvQixRQUF4QjtBQUNBLElBQUkscUJBQXFCLFFBQXpCO0FBQ0EsSUFBSSxxQkFBcUIsUUFBekI7QUFDQSxJQUFJLG1CQUFtQixRQUF2QjtBQUNBLElBQUksa0JBQWtCLFFBQXRCO0FBQ0EsSUFBSSxvQkFBb0IsUUFBeEI7QUFDQSxJQUFJLGlCQUFpQixRQUFyQjtBQUNBLElBQUksa0JBQWtCLFFBQXRCO0FBQ0EsSUFB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