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
            w: 6,
            h: 6,
            coordinates: createCellsList(beaconCoordinates, [0, 0]),
            wrapped: true,
            name: "Beacon"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BEEHIVE, {
            w: 6,
            h: 5,
            coordinates: createCellsList(beehiveCoordinates, [0, 0]),
            wrapped: true,
            name: "Beehive"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BLINKER, {
            w: 5,
            h: 5,
            coordinates: createCellsList(blinkerCoordinates, [0, 0]),
            wrapped: true,
            name: "Blinker"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BLOCK, {
            w: 4,
            h: 4,
            coordinates: createCellsList(blockCoordinates, [0, 0]),
            wrapped: true,
            name: "Block"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BOAT, {
            w: 5,
            h: 5,
            coordinates: createCellsList(boatCoordinates, [0, 0]),
            wrapped: true,
            name: "Boat"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GLIDER, {
            w: 10,
            h: 10,
            coordinates: createCellsList(gliderCoordinates, [0, 0]),
            wrapped: true,
            name: "Glider"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GUN, {
            w: 40,
            h: 20,
            coordinates: createCellsList(gunCoordinates, [1, 1]),
            wrapped: false,
            name: "The Gosper Glider Gun"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.LOAF, {
            w: 6,
            h: 6,
            coordinates: createCellsList(loafCoordinates, [0, 0]),
            wrapped: true,
            name: "Loaf"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.SPACESHIP, {
            w: 12,
            h: 12,
            coordinates: createCellsList(lspaceshipCoordinates, [0, 0]),
            wrapped: true,
            name: "Lightweight Spaceship"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GLASSES, {
            w: 20,
            h: 13,
            coordinates: createCellsList(oscGlassesCoordinates, [0, 0]),
            wrapped: true,
            name: "Glasses"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.QUAD, {
            w: 8,
            h: 8,
            coordinates: createCellsList(oscQuadCoordinates, [0, 0]),
            wrapped: true,
            name: "Quad"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.TOAD, {
            w: 6,
            h: 6,
            coordinates: createCellsList(toadCoordinates, [0, 0]),
            wrapped: true,
            name: "Toad"
        }), _parameters);

        _this.examples = {};
        for (var name in parameters) {
            _this.examples[name] = {
                grid: new _GameGrid2.default(name, parameters[name].w, parameters[name].h, squareSize, !parameters[name].wrapped),
                cells: name == _boardNames.boardNames.GUN ? parameters[name].coordinates : (0, _helpers.shiftToCenter)(parameters[name].coordinates, parameters[name].h, parameters[name].w),
                name: parameters[name].name
            };
        }

        _this.state = {
            reload: false,
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
                screenScale: window.innerWidth < 900 ? 3 : 10
            }
        };

        for (var _name in parameters) {
            _this.examples[_name].canvasWidth = _this.getWidth(_this.examples[_name].grid);
        }

        _this.motionPatternList = [];
        _this.rAF = null;

        _this.interval = 300;

        _this.buttonColor = 'rgba(0, 0, 0, .9)';

        _this.setStopped = function (stopped, name) {
            return props.setStopped(stopped, name);
        };
        return _this;
    }

    (0, _createClass3.default)(About, [{
        key: 'getWidth',
        value: function getWidth(grid) {
            var screen = this.state.screen;
            var width = grid.width,
                squareSize = grid.squareSize;

            var w = (width + 1) * squareSize * screen.width / 100 * .7 / screen.screenScale;
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
                var index = this.motionPatternList.indexOf(pattern);
                this.motionPatternList.splice(index, 1);
                if (this.motionPatternList.length === 0) {
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
                this.motionPatternList.push(pattern);
                this.then = Date.now();
                if (this.motionPatternList.length === 1) {
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

                this.motionPatternList.forEach(function (p) {
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

                console.log(name);
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
                    lineNumber: 283
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 285
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 287
                }
            }, ' '), _react2.default.createElement(_Grid2.default, { item: true, xs: 10, sm: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                }
            }, _react2.default.createElement('p', { className: classes.intro + ' ' + classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 291
                }
            }, _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 292
                }
            }, 'The Game of Life'), ' is the best-known two-dimensional "', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/Cellular_automaton', target: '_blank', title: 'Cellular automaton', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 293
                }
            }, 'cellular automaton'), '", invented in 1970 by the British mathematician ', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/John_Horton_Conway', target: '_blank', title: 'John Conway', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 294
                }
            }, 'John Horton Conway'), '. The life is a cellular automaton, which is a model of a discrete abstract computational system, composed of a finite or infinite set of objects \u2013 "cells". The cell in the game of life has two states - \u201Calive\u201D and \u201Cdead\u201D, or "populated" and "unpopulated". The cells live on a two-dimensional grid and each cell has eight adjacent cells - "neighbors". All cells change their state simultaneously, according to update rules by taking into account the states of their neighbors.'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 302
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'R9Plq-D1gEk',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 303
                }
            }), 'John H. Conway on the creation of his Game of Life'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 312
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'CgOcEZinQ2I',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 313
                }
            }), 'Fragment from Stephen Hawking`s The Meaning of Life'), _react2.default.createElement('div', { className: classes.rulesPar, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 322
                }
            }, _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 323
                }
            }, 'Rules'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 326
                }
            }, 'Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:'), _react2.default.createElement('div', { className: classes.rules, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 331
                }
            }, _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 332
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 333
                }
            }, 'Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 334
                }
            }, 'Any live cell with two or three live neighbours lives on to the next generation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335
                }
            }, 'Any live cell with more than three live neighbours dies, as if by overpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336
                }
            }, 'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'))), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 339
                }
            }, 'The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.')), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 348
                }
            }, 'Examples of Patterns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 351
                }
            }, 'In order to simulate infinite grid on the game board and in the examples below (except for the gun pattern), cells that are situated on the edges of the boards are handled in a toroidal manner, i.e. lower neighbor of a cell situated on the bottom edge of board will be a cell from the top edge on the same column and a neighbor to the right of a cell situated on the right edge will be from the left edge.'), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 359
                }
            }, 'Still Life'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 362
                }
            }, 'Stable finite patterns.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 365
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 366
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 370
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
                    lineNumber: 371
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 380
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
                    lineNumber: 381
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 390
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
                    lineNumber: 391
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 400
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
                    lineNumber: 401
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 411
                }
            }, 'Oscillators'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 414
                }
            }, 'These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. The most common period-2 oscillators include:'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 418
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 419
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 422
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BLINKER].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BLINKER].name,
                stopped: this.props.stopped[_boardNames.boardNames.BLINKER],
                buttonColor: this.buttonColor,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BLINKER].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.BLINKER]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 423
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 435
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BEACON].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BEACON].name,
                stopped: this.props.stopped[_boardNames.boardNames.BEACON],
                buttonColor: this.buttonColor,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BEACON].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.BEACON]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 436
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 448
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.TOAD].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.TOAD].name,
                stopped: this.props.stopped[_boardNames.boardNames.TOAD],
                buttonColor: this.buttonColor,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.TOAD].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.TOAD]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 449
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 460
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.GLASSES].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.GLASSES].name,
                stopped: this.props.stopped[_boardNames.boardNames.GLASSES],
                buttonColor: this.buttonColor,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GLASSES].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GLASSES]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 461
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 472
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.QUAD].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.QUAD].name,
                stopped: this.props.stopped[_boardNames.boardNames.QUAD],
                buttonColor: this.buttonColor,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.QUAD].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.QUAD]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 473
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 486
                }
            }, 'Gliders and Spaceships'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 489
                }
            }, 'A spaceship is more complex oscillator, returning to the same configuration but shifted after a finite number of generations. The glider is a simple spaceship that has period 4, i.e. repeats every four generations, but moves diagonally one cell every four generations. Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. They each move in a straight line.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 496
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 497
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 500
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.GLIDER].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.GLIDER].name,
                stopped: this.props.stopped[_boardNames.boardNames.GLIDER],
                buttonColor: this.buttonColor,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GLIDER].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GLIDER]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 501
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 513
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.SPACESHIP].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.SPACESHIP].name,
                stopped: this.props.stopped[_boardNames.boardNames.SPACESHIP],
                buttonColor: this.buttonColor,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.SPACESHIP].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.SPACESHIP]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 514
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 528
                }
            }, 'Guns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 531
                }
            }, 'Conway offered a prize for any example of patterns that grow forever. Conway\'s prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever. The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. Where these shuttles collide, instead of producing beehives, they produce a new glider. This glider moves away in time for the process to repeat itself 30 steps later.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 539
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 540
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 543
                }
            }, _react2.default.createElement(BoardElement, {
                patternName: this.examples[_boardNames.boardNames.GUN].name,
                stopped: this.props.stopped[_boardNames.boardNames.GUN],
                buttonColor: this.buttonColor,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GUN].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GUN]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 544
                }
            })))), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 557
                }
            }, 'Origins'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 561
                }
            }, 'Conway was interested in a problem presented in the 1940s by mathematician ', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/John_von_Neumann', target: '_blank', title: 'John von Neumann', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 562
                }
            }, 'John von Neumann'), ', who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway\'s successful attempt to drastically simplify von Neumann\'s ideas.'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 570
                }
            }, 'The game made its first public appearance in the October 1970 issue of ', _react2.default.createElement('i', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 570
                }
            }, 'Scientific American'), ', in Martin Gardner\'s column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway\'s Game of Life. Gardner wrote:'), _react2.default.createElement('blockquote', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 575
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 576
                }
            }, 'The game made Conway instantly famous, but it also opened up a whole new field of mathematical research, the field of cellular automata\xA0... Because of Life\'s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called "simulation games" (games that resemble real life processes).'))), _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 587
                }
            }, ' ')));
        }
    }]);
    return About;
}(_react.Component);

About.propTypes = {
    classes: _propTypes2.default.object.isRequired,
    setStopped: _propTypes2.default.func.isRequired,
    stopped: _propTypes2.default.shape((_PropTypes$shape = {}, (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.MAIN, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLOCK, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BOAT, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.LOAF, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEEHIVE, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLINKER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEACON, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.TOAD, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GLIDER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.SPACESHIP, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GUN, _propTypes2.default.bool), _PropTypes$shape)).isRequired
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

    return _react2.default.createElement('div', { style: { width: width, height: "100%" }, className: 'jsx-3653595684' + ' ' + 'board',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 625
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-3653595684' + ' ' + 'item',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 626
        }
    }, _react2.default.createElement('canvas', {
        ref: props.setCanvas
        // onClick={(e) => this.handleClick(e)}
        , className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 627
        }
    }), withButton ? _react2.default.createElement(_IconButton2.default, { className: 'button', onClick: props.handlePlayToggle, __source: {
            fileName: _jsxFileName,
            lineNumber: 633
        }
    }, _react2.default.createElement(_materialUiToggleIcon2.default, {
        on: stopped,
        onIcon: _react2.default.createElement(_PlayArrow2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 636
            }
        }),
        offIcon: _react2.default.createElement(_Pause2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 637
            }
        }),
        color: buttonColor,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 634
        }
    })) : _react2.default.createElement('div', {
        className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 643
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 648
        }
    }, patternName)), _react2.default.createElement(_style2.default, {
        styleId: '3653595684',
        css: '.board{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:.7em;text-align:center;font-family:\'Open Sans\',sans-serif;}.item{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.button{width:35px;height:35px;}.icon{width:25px;height:25px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRvQjJCLEFBRzhCLEFBT08sQUFHVCxBQUlBLFdBSEMsQUFJQSxZQUhoQixBQUtBLGlEQVRBLEVBUG1CLGVBQ0csa0JBQ2tCLG1DQUV4QyIsImZpbGUiOiJjb21wb25lbnRzXFxBYm91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XHJcbmltcG9ydCBHYW1lR3JpZCBmcm9tICcuLi9oZWxwZXJzL0dhbWVHcmlkJztcclxuaW1wb3J0IEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlSWNvbiBmcm9tICdtYXRlcmlhbC11aS10b2dnbGUtaWNvbic7XHJcbmltcG9ydCBQbGF5QXJyb3cgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvUGxheUFycm93JztcclxuaW1wb3J0IFBhdXNlIGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1BhdXNlJztcclxuaW1wb3J0IHtib2FyZE5hbWVzfSBmcm9tICcuLi9oZWxwZXJzL2JvYXJkTmFtZXMnXHJcbmltcG9ydCB7IHNoaWZ0VG9DZW50ZXIgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuXHJcbnZhciBiZWFjb25Db29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9iZWFjb24udHh0Jyk7XHJcbnZhciBiZWVoaXZlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmVlaGl2ZS50eHQnKTtcclxudmFyIGJsaW5rZXJDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibGlua2VyLnR4dCcpO1xyXG52YXIgYmxvY2tDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibG9jay50eHQnKTtcclxudmFyIGJvYXRDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ib2F0LnR4dCcpO1xyXG52YXIgZ2xpZGVyQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ2xpZGVyLnR4dCcpO1xyXG52YXIgZ3VuQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ3VuLnR4dCcpO1xyXG52YXIgbG9hZkNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2xvYWYudHh0Jyk7XHJcbnZhciBsc3BhY2VzaGlwQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvbHNwYWNlc2hpcC50eHQnKTtcclxudmFyIG9zY0dsYXNzZXNDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9vc2NHbGFzc2VzLnR4dCcpO1xyXG52YXIgb3NjUXVhZENvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL29zY1F1YWQudHh0Jyk7XHJcbnZhciB0b2FkQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9hZC50eHQnKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHRtYWluQ29udGVudDoge1xyXG5cdFx0bWFyZ2luVG9wOiA3NVxyXG5cdH0sXHJcbiAgICBydWxlczoge1xyXG4gICAgXHRiYWNrZ3JvdW5kQ29sb3I6J3JnYmEoMjQwLDI0OCwyNTUsLjcpJyxcclxuICAgIFx0XHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLCBcclxuICAgICAgICBmYWxsYmFja3M6e1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgICAgfSwgICAgIFx0XHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgIG1hcmdpblRvcDogNDBcclxuICAgIH0sXHJcbiAgICB2aWRlbzoge1xyXG4gICAgXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgXHRmb250RmFtaWx5OiAnT3BlbiBTYW5zJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sXHJcbiAgICBcdG1hcmdpblRvcDozMCxcclxuICAgIH0sXHJcbiAgICBib2FyZHNTZWN0aW9uOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBcdG1hcmdpblRvcDozMCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCBzcXVhcmVTaXplID0gMTI7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLkJFQUNPTl06IHtcclxuICAgICAgICAgICAgICAgIHc6IDYsXHJcbiAgICAgICAgICAgICAgICBoOiA2LCBcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmVhY29uQ29vcmRpbmF0ZXMsWzAsMF0pLCAgICBcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsICAgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlYWNvblwiLCAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkVFSElWRV06IHtcclxuICAgICAgICAgICAgICAgIHc6IDYsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChiZWVoaXZlQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlZWhpdmVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkxJTktFUl06IHtcclxuICAgICAgICAgICAgICAgIHc6IDUsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChibGlua2VyQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJsaW5rZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkxPQ0tdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA0LFxyXG4gICAgICAgICAgICAgICAgaDogNCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmxvY2tDb29yZGluYXRlcyxbMCwwXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmxvY2tcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQk9BVF06IHtcclxuICAgICAgICAgICAgICAgIHc6IDUsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChib2F0Q29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJvYXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuR0xJREVSXToge1xyXG4gICAgICAgICAgICAgICAgdzogMTAsXHJcbiAgICAgICAgICAgICAgICBoOiAxMCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoZ2xpZGVyQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdsaWRlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5HVU5dOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA0MCxcclxuICAgICAgICAgICAgICAgIGg6IDIwLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChndW5Db29yZGluYXRlcyxbMSwxXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRoZSBHb3NwZXIgR2xpZGVyIEd1blwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5MT0FGXToge1xyXG4gICAgICAgICAgICAgICAgdzogNixcclxuICAgICAgICAgICAgICAgIGg6IDYsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGxvYWZDb29yZGluYXRlcyxbMCwwXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTG9hZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5TUEFDRVNISVBdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiAxMixcclxuICAgICAgICAgICAgICAgIGg6IDEyLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChsc3BhY2VzaGlwQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpZ2h0d2VpZ2h0IFNwYWNlc2hpcFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5HTEFTU0VTXToge1xyXG4gICAgICAgICAgICAgICAgdzogMjAsXHJcbiAgICAgICAgICAgICAgICBoOiAxMyxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjR2xhc3Nlc0Nvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJHbGFzc2VzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLlFVQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA4LFxyXG4gICAgICAgICAgICAgICAgaDogOCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjUXVhZENvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJRdWFkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLlRPQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA2LFxyXG4gICAgICAgICAgICAgICAgaDogNixcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QodG9hZENvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUb2FkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgdGhpcy5leGFtcGxlcyA9IHt9O1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IG5ldyBHYW1lR3JpZChuYW1lLCBwYXJhbWV0ZXJzW25hbWVdLncsIHBhcmFtZXRlcnNbbmFtZV0uaCwgc3F1YXJlU2l6ZSwgIXBhcmFtZXRlcnNbbmFtZV0ud3JhcHBlZCksXHJcbiAgICAgICAgICAgICAgICBjZWxsczogbmFtZSA9PSBib2FyZE5hbWVzLkdVTiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbbmFtZV0uY29vcmRpbmF0ZXMgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0VG9DZW50ZXIocGFyYW1ldGVyc1tuYW1lXS5jb29yZGluYXRlcywgcGFyYW1ldGVyc1tuYW1lXS5oLCBwYXJhbWV0ZXJzW25hbWVdLncpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogcGFyYW1ldGVyc1tuYW1lXS5uYW1lLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWxvYWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICAgIHNjcmVlblNjYWxlOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCA/IDMgOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXS5jYW52YXNXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5leGFtcGxlc1tuYW1lXS5ncmlkKSBcclxuICAgICAgICB9XHJcblxyXG5cdFx0dGhpcy5tb3Rpb25QYXR0ZXJuTGlzdCA9IFtdO1xyXG5cdFx0dGhpcy5yQUYgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMuaW50ZXJ2YWw9MzAwO1xyXG5cdFxyXG5cdFx0dGhpcy5idXR0b25Db2xvciA9ICdyZ2JhKDAsIDAsIDAsIC45KSc7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RvcHBlZCA9IChzdG9wcGVkLCBuYW1lKSA9PiBwcm9wcy5zZXRTdG9wcGVkKHN0b3BwZWQsIG5hbWUpO1xyXG5cdH1cclxuXHJcbiAgICBnZXRXaWR0aChncmlkKXtcclxuICAgICAgICBsZXQge3NjcmVlbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCB7d2lkdGgsIHNxdWFyZVNpemV9ID0gZ3JpZDtcclxuICAgICAgICBsZXQgdyA9ICgod2lkdGggKyAxKSAqIHNxdWFyZVNpemUgKiBzY3JlZW4ud2lkdGgvMTAwICogLjcpL3NjcmVlbi5zY3JlZW5TY2FsZTtcclxuICAgICAgICByZXR1cm4gdyA+IHNjcmVlbi53aWR0aCAqIC42ID8gc2NyZWVuLndpZHRoICogLjYgOiB3O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBsYXlUb2dnbGUocGF0dGVybil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQocGF0dGVybik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcChwYXR0ZXJuKTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuXHJcbiAgICBzdG9wKHBhdHRlcm4pe1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnN0b3BwZWRbcGF0dGVybi5ncmlkLm5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKHRydWUsIHBhdHRlcm4uZ3JpZC5uYW1lKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tb3Rpb25QYXR0ZXJuTGlzdC5pbmRleE9mKHBhdHRlcm4pO1xyXG4gICAgICAgICAgICB0aGlzLm1vdGlvblBhdHRlcm5MaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW90aW9uUGF0dGVybkxpc3QubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgXHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydChwYXR0ZXJuKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0b3BwZWRbcGF0dGVybi5ncmlkLm5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKGZhbHNlLCBwYXR0ZXJuLmdyaWQubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW90aW9uUGF0dGVybkxpc3QucHVzaChwYXR0ZXJuKTtcclxuICAgICAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3Rpb25QYXR0ZXJuTGlzdC5sZW5ndGggPT09IDEpe1xyXG4gICAgICAgICAgICBcdHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0dXBkYXRlKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbHRhID4gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5kZWx0YSAlIHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubW90aW9uUGF0dGVybkxpc3QuZm9yRWFjaChwID0+IHAuZ3JpZC51cGRhdGUoKSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHR0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5ncmlkLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0uY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCl7XHJcblx0XHR0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5jYW52YXNXaWR0aCA9IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmNhbnZhc1dpZHRoID4gdGhpcy5zdGF0ZS5zY3JlZW4ud2lkdGggKiAuNiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zY3JlZW4ud2lkdGggKiAuNiA6IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmNhbnZhc1dpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCByYXRpbyA9IHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvXHJcbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuZXhhbXBsZXMpe1xyXG4gICAgICAgICAgICBsZXQge2dyaWQsIGNlbGxzLCBjYW52YXN9ID0gdGhpcy5leGFtcGxlc1tuYW1lXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgICAgICAgICAgZ3JpZC5tYWtlQm9hcmQoZ3JpZC53aWR0aCwgZ3JpZC5oZWlnaHQsIGdyaWQuc3F1YXJlU2l6ZSwgcmF0aW8sIGNhbnZhcywgY2VsbHMpO1xyXG4gICAgICAgICAgICBncmlkLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7ICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RvcHBlZCh0cnVlLCBudWxsKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7ICAgIFxyXG4gICAgXHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xyXG4gICAgXHRyZXR1cm4oXHJcbiAgICBcdCAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQ29udGVudH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHQgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgXHQgICBcclxuICAgIFx0ICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfSA+IDwvR3JpZD5cclxuICAgIFx0ICAgIFxyXG4gICAgXHQgICAgPEdyaWQgaXRlbSB4cz17MTB9ICBzbT17OH0gPlxyXG4gICAgXHQgICAgXHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5pbnRyb30gJHtjbGFzc2VzLnRleHR9YH0+XHJcbiAgICBcdCAgICBcdDxzdHJvbmc+VGhlIEdhbWUgb2YgTGlmZTwvc3Ryb25nPiBpcyB0aGUgYmVzdC1rbm93biB0d28tZGltZW5zaW9uYWwgIFxyXG4gICAgICAgICAgICAgICAgXCI8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VsbHVsYXJfYXV0b21hdG9uXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJDZWxsdWxhciBhdXRvbWF0b25cIj5jZWxsdWxhciBhdXRvbWF0b248L2E+XCIsIFxyXG4gICAgICAgICAgICAgICAgaW52ZW50ZWQgaW4gMTk3MCBieSB0aGUgQnJpdGlzaCBtYXRoZW1hdGljaWFuIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Kb2huX0hvcnRvbl9Db253YXlcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkpvaG4gQ29ud2F5XCI+Sm9obiBIb3J0b24gQ29ud2F5PC9hPi4gXHJcbiAgICAgICAgICAgICAgICBUaGUgbGlmZSBpcyBhIGNlbGx1bGFyIGF1dG9tYXRvbiwgd2hpY2ggaXMgYSBtb2RlbCBvZiBhIGRpc2NyZXRlIGFic3RyYWN0IGNvbXB1dGF0aW9uYWwgc3lzdGVtLCBcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VkIG9mIGEgZmluaXRlIG9yIGluZmluaXRlIHNldCBvZiBvYmplY3RzIOKAkyBcImNlbGxzXCIuIFRoZSBjZWxsIGluIHRoZSBnYW1lIG9mIGxpZmUgaGFzIHR3byBzdGF0ZXMgLSBcclxuICAgICAgICAgICAgICAgIOKAnGFsaXZl4oCdIGFuZCDigJxkZWFk4oCdLCBvciBcInBvcHVsYXRlZFwiIGFuZCBcInVucG9wdWxhdGVkXCIuIFRoZSBjZWxscyBsaXZlIG9uIGEgdHdvLWRpbWVuc2lvbmFsIGdyaWQgYW5kIGVhY2ggY2VsbCBcclxuICAgICAgICAgICAgICAgIGhhcyBlaWdodCBhZGphY2VudCBjZWxscyAtIFwibmVpZ2hib3JzXCIuIEFsbCBjZWxscyBjaGFuZ2UgdGhlaXIgc3RhdGUgc2ltdWx0YW5lb3VzbHksIGFjY29yZGluZyB0byB1cGRhdGUgXHJcbiAgICAgICAgICAgICAgICBydWxlcyBieSB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBzdGF0ZXMgb2YgdGhlaXIgbmVpZ2hib3JzLlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdFxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb30+XHJcbiAgICAgICAgICAgICAgICA8WW91VHViZVxyXG4gICAgICAgICAgICAgICAgICB2aWRlb0lkPVwiUjlQbHEtRDFnRWtcIiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBvcHRzPXt7d2lkdGg6JzEwMCUnLCBwbGF5ZXJWYXJzOiB7c2hvd2luZm86MCwgcmVsOjB9fX0gICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIEpvaG4gSC4gQ29ud2F5IG9uIHRoZSBjcmVhdGlvbiBvZiBoaXMgR2FtZSBvZiBMaWZlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb30+XHJcbiAgICAgICAgICAgICAgICA8WW91VHViZVxyXG4gICAgICAgICAgICAgICAgICB2aWRlb0lkPVwiQ2dPY0VaaW5RMklcIiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBvcHRzPXt7d2lkdGg6JzEwMCUnLCBwbGF5ZXJWYXJzOiB7c2hvd2luZm86MCwgcmVsOjB9fX0gICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIEZyYWdtZW50IGZyb20gU3RlcGhlbiBIYXdraW5nYHMgVGhlIE1lYW5pbmcgb2YgTGlmZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ydWxlc1Bhcn0+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRSdWxlc1xyXG4gICAgXHQgICAgXHQ8L2gyPlxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdEV2ZXJ5IGNlbGwgaW50ZXJhY3RzIHdpdGggaXRzIGVpZ2h0IG5laWdoYm91cnMsIFxyXG4gICAgXHQgICAgXHR3aGljaCBhcmUgdGhlIGNlbGxzIHRoYXQgYXJlIGhvcml6b250YWxseSwgdmVydGljYWxseSwgb3IgZGlhZ29uYWxseSBhZGphY2VudC4gXHJcbiAgICBcdCAgICBcdEF0IGVhY2ggc3RlcCBpbiB0aW1lLCB0aGUgZm9sbG93aW5nIHRyYW5zaXRpb25zIG9jY3VyOlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJ1bGVzfT5cclxuICAgIFx0ICAgIFx0PHVsPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIGZld2VyIHRoYW4gdHdvIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBjYXVzZWQgYnkgdW5kZXJwb3B1bGF0aW9uLjwvbGk+XHJcbiAgICBcdFx0XHRcdDxsaT5BbnkgbGl2ZSBjZWxsIHdpdGggdHdvIG9yIHRocmVlIGxpdmUgbmVpZ2hib3VycyBsaXZlcyBvbiB0byB0aGUgbmV4dCBnZW5lcmF0aW9uLjwvbGk+XHJcbiAgICBcdFx0XHRcdDxsaT5BbnkgbGl2ZSBjZWxsIHdpdGggbW9yZSB0aGFuIHRocmVlIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBieSBvdmVycG9wdWxhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGRlYWQgY2VsbCB3aXRoIGV4YWN0bHkgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGJlY29tZXMgYSBsaXZlIGNlbGwsIGFzIGlmIGJ5IHJlcHJvZHVjdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0PC91bD5cclxuICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgXHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHRcdFx0VGhlIGluaXRpYWwgcGF0dGVybiBjb25zdGl0dXRlcyB0aGUgc2VlZCBvZiB0aGUgc3lzdGVtLiBcclxuICAgIFx0XHRcdFRoZSBmaXJzdCBnZW5lcmF0aW9uIGlzIGNyZWF0ZWQgYnkgYXBwbHlpbmcgdGhlIGFib3ZlIHJ1bGVzIFxyXG4gICAgXHRcdFx0c2ltdWx0YW5lb3VzbHkgdG8gZXZlcnkgY2VsbCBpbiB0aGUgc2VlZCAtIGJpcnRocyBhbmQgZGVhdGhzIG9jY3VyIHNpbXVsdGFuZW91c2x5LCBcclxuICAgIFx0XHRcdGFuZCB0aGUgZGlzY3JldGUgbW9tZW50IGF0IHdoaWNoIHRoaXMgaGFwcGVucyBpcyBzb21ldGltZXMgY2FsbGVkIGEgdGljayBcclxuICAgIFx0XHRcdChpbiBvdGhlciB3b3JkcywgZWFjaCBnZW5lcmF0aW9uIGlzIGEgcHVyZSBmdW5jdGlvbiBvZiB0aGUgcHJlY2VkaW5nIG9uZSkuIFxyXG4gICAgXHRcdFx0VGhlIHJ1bGVzIGNvbnRpbnVlIHRvIGJlIGFwcGxpZWQgcmVwZWF0ZWRseSB0byBjcmVhdGUgZnVydGhlciBnZW5lcmF0aW9ucy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8L2Rpdj5cclxuICAgIFx0ICAgIFx0PGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdCAgICBcdEV4YW1wbGVzIG9mIFBhdHRlcm5zXHJcbiAgICBcdCAgICBcdDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICBJbiBvcmRlciB0byBzaW11bGF0ZSBpbmZpbml0ZSBncmlkIG9uIHRoZSBnYW1lIGJvYXJkIGFuZCBpbiB0aGUgZXhhbXBsZXMgYmVsb3cgKGV4Y2VwdCBmb3IgdGhlIGd1biBwYXR0ZXJuKSwgXHJcbiAgICAgICAgICAgICAgICBjZWxscyB0aGF0IGFyZSBzaXR1YXRlZCBvbiB0aGUgZWRnZXMgb2YgdGhlIGJvYXJkcyBhcmUgaGFuZGxlZCBpbiBhIHRvcm9pZGFsIG1hbm5lciwgXHJcbiAgICAgICAgICAgICAgICBpLmUuIGxvd2VyIG5laWdoYm9yIG9mIGEgY2VsbCBzaXR1YXRlZCBvbiB0aGUgYm90dG9tIGVkZ2Ugb2YgYm9hcmQgd2lsbCBiZSBhIGNlbGwgZnJvbSBcclxuICAgICAgICAgICAgICAgIHRoZSB0b3AgZWRnZSBvbiB0aGUgc2FtZSBjb2x1bW4gYW5kIGEgbmVpZ2hib3IgdG8gdGhlIHJpZ2h0IG9mIGEgY2VsbCBzaXR1YXRlZCBvbiB0aGUgcmlnaHQgXHJcbiAgICAgICAgICAgICAgICBlZGdlIHdpbGwgYmUgZnJvbSB0aGUgbGVmdCBlZGdlLiBcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICBcdCAgICBcdDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRTdGlsbCBMaWZlXHJcbiAgICBcdCAgICBcdDwvaDQ+XHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0ICAgIFx0U3RhYmxlIGZpbml0ZSBwYXR0ZXJucy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG4gICAgXHQgICAgXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17OH0gPlxyXG4gICAgXHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CT0FUXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CT0FUXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQk9BVF0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5MT0FGXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5MT0FGXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuTE9BRl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVFSElWRV0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVFSElWRV0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFRUhJVkVdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHQgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICBcclxuICAgIFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdCAgICA8L2Rpdj5cclxuICAgIFx0XHRcdDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHRcdCAgICBPc2NpbGxhdG9ycyBcclxuICAgIFx0XHQgICAgPC9oND5cclxuICAgIFx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHQgICAgXHRUaGVzZSBwYXR0ZXJucyByZXBlYXQgdGhlaXIgY29uZmlndXJhdGlvbiBwZXJpb2RpY2FsbHkgYW5kIGluZmluaXRlbHkuIFRoZSBiYXNpYyBvc2NpbGxhdG9ycyBoYXZlIHBlcmlvZHMgb2YgdHdvIG9yIHRocmVlIHRpY2tzLiBcclxuICAgICAgICAgICAgICAgIFRoZSBtb3N0IGNvbW1vbiBwZXJpb2QtMiBvc2NpbGxhdG9ycyBpbmNsdWRlOlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxkaXYgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZHNTZWN0aW9ufSA+XHJcbiAgICBcdCAgICBcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTElOS0VSXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTElOS0VSXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5CTElOS0VSXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTElOS0VSXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTElOS0VSXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFQUNPTl0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVBQ09OXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5CRUFDT05dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFQUNPTl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVBQ09OXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5UT0FEXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdMQVNTRVNdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdMQVNTRVNdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLkdMQVNTRVNdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdMQVNTRVNdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdMQVNTRVNdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuUVVBRF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuUVVBRF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZXMuUVVBRF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHt0aGlzLmJ1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuUVVBRF0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuUVVBRF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0ICAgIDwvZGl2PlxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIEdsaWRlcnMgYW5kIFNwYWNlc2hpcHNcclxuICAgIFx0XHQgICAgPC9oND5cclxuICAgIFx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHQgICAgXHRBIHNwYWNlc2hpcCBpcyBtb3JlIGNvbXBsZXggb3NjaWxsYXRvciwgcmV0dXJuaW5nIHRvIHRoZSBzYW1lIGNvbmZpZ3VyYXRpb24gYnV0IHNoaWZ0ZWQgYWZ0ZXIgYSBmaW5pdGUgbnVtYmVyIG9mIGdlbmVyYXRpb25zLiBcclxuICAgIFx0ICAgIFx0VGhlIGdsaWRlciBpcyBhIHNpbXBsZSBzcGFjZXNoaXAgdGhhdCBoYXMgcGVyaW9kIDQsIGkuZS4gcmVwZWF0cyBldmVyeSBmb3VyIGdlbmVyYXRpb25zLCBidXQgXHJcbiAgICAgICAgICAgICAgICBtb3ZlcyBkaWFnb25hbGx5IG9uZSBjZWxsIGV2ZXJ5IGZvdXIgZ2VuZXJhdGlvbnMuXHJcbiAgICBcdCAgICBcdE90aGVyIGV4YW1wbGVzIG9mIHNpbXBsZSBzcGFjZXNoaXBzIGluY2x1ZGUgbGlnaHR3ZWlnaHQsIG1lZGl1bSB3ZWlnaHQsIGFuZCBoZWF2eXdlaWdodCBzcGFjZXNoaXBzLiBcclxuICAgIFx0ICAgIFx0VGhleSBlYWNoIG1vdmUgaW4gYSBzdHJhaWdodCBsaW5lLlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxkaXYgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZHNTZWN0aW9ufSA+XHJcbiAgICBcdCAgICBcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xJREVSXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HTElERVJdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLkdMSURFUl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHt0aGlzLmJ1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xJREVSXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HTElERVJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG5cclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5TUEFDRVNISVBdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlNQQUNFU0hJUF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZXMuU1BBQ0VTSElQXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5TUEFDRVNISVBdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlNQQUNFU0hJUF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHQgICAgPC9HcmlkPlx0ICAgXHJcbiAgICBcdFx0ICAgIDwvZGl2PiBcdFxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIEd1bnNcclxuICAgIFx0XHQgICAgPC9oND5cclxuICAgIFx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHRcdFx0Q29ud2F5IG9mZmVyZWQgYSBwcml6ZSBmb3IgYW55IGV4YW1wbGUgb2YgcGF0dGVybnMgdGhhdCBncm93IGZvcmV2ZXIuIFxyXG4gICAgXHRcdFx0Q29ud2F5J3MgcHJpemUgd2FzIGNvbGxlY3RlZCBzb29uIGFmdGVyIGl0cyBhbm5vdW5jZW1lbnQsIHdoZW4gdHdvIGRpZmZlcmVudCB3YXlzIHdlcmUgZGlzY292ZXJlZCBmb3IgZGVzaWduaW5nIGEgcGF0dGVybiB0aGF0IGdyb3dzIGZvcmV2ZXIuXHJcblxyXG4gICAgXHRcdFx0VGhlIGZpcnN0IG9mIHRoZXNlIHBhdHRlcm5zIGlzIHRoZSBwZXJpb2QtMzAgZ2xpZGVyIGd1biwgd2hpY2ggaXMgYmFzZWQgb24gdGhlIGludGVyYWN0aW9uIG9mIHR3byBxdWVlbiBiZWUgc2h1dHRsZXMuIFxyXG4gICAgXHRcdFx0V2hlcmUgdGhlc2Ugc2h1dHRsZXMgY29sbGlkZSwgaW5zdGVhZCBvZiBwcm9kdWNpbmcgYmVlaGl2ZXMsIHRoZXkgcHJvZHVjZSBhIG5ldyBnbGlkZXIuIFxyXG4gICAgXHRcdFx0VGhpcyBnbGlkZXIgbW92ZXMgYXdheSBpbiB0aW1lIGZvciB0aGUgcHJvY2VzcyB0byByZXBlYXQgaXRzZWxmIDMwIHN0ZXBzIGxhdGVyLlxyXG4gICAgXHRcdFx0PC9wPlxyXG4gICAgXHRcdFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz17MTJ9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gIHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5HVU5dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cdFxyXG4gICAgXHRcdCAgICA8L2Rpdj5cclxuICAgIFx0ICAgIFx0PGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdCAgICBcdE9yaWdpbnNcclxuICAgIFx0ICAgIFx0PC9oMj5cclxuXHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5Db253YXkgd2FzIGludGVyZXN0ZWQgaW4gYSBwcm9ibGVtIHByZXNlbnRlZCBpbiB0aGUgMTk0MHMgYnkgXHJcbiAgICBcdCAgICBcdG1hdGhlbWF0aWNpYW4gPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0pvaG5fdm9uX05ldW1hbm5cIiAgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJKb2huIHZvbiBOZXVtYW5uXCI+Sm9obiB2b24gTmV1bWFubjwvYT4sIFxyXG4gICAgXHQgICAgXHR3aG8gYXR0ZW1wdGVkIHRvIGZpbmQgYSBoeXBvdGhldGljYWwgbWFjaGluZSB0aGF0IGNvdWxkIGJ1aWxkIGNvcGllcyBvZiBpdHNlbGYgXHJcbiAgICBcdCAgICBcdGFuZCBzdWNjZWVkZWQgd2hlbiBoZSBmb3VuZCBhIG1hdGhlbWF0aWNhbCBtb2RlbCBmb3Igc3VjaCBhIG1hY2hpbmUgd2l0aCB2ZXJ5IFxyXG4gICAgXHQgICAgXHRjb21wbGljYXRlZCBydWxlcyBvbiBhIHJlY3Rhbmd1bGFyIGdyaWQuIFRoZSBHYW1lIG9mIExpZmUgZW1lcmdlZCBhcyBDb253YXkncyBcclxuICAgIFx0ICAgIFx0c3VjY2Vzc2Z1bCBhdHRlbXB0IHRvIGRyYXN0aWNhbGx5IHNpbXBsaWZ5IHZvbiBOZXVtYW5uJ3MgaWRlYXMuXHJcblxyXG4gICAgXHQgICAgXHQ8L3A+XHJcblxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+VGhlIGdhbWUgbWFkZSBpdHMgZmlyc3QgcHVibGljIGFwcGVhcmFuY2UgaW4gdGhlIE9jdG9iZXIgMTk3MCBpc3N1ZSBvZiA8aT5TY2llbnRpZmljIEFtZXJpY2FuPC9pPiwgaW4gTWFydGluIEdhcmRuZXIncyBjb2x1bW4uIFxyXG4gICAgXHQgICAgXHRGcm9tIGEgdGhlb3JldGljYWwgcG9pbnQgb2YgdmlldywgaXQgaXMgaW50ZXJlc3RpbmcgYmVjYXVzZSBpdCBoYXMgdGhlIHBvd2VyIG9mIFxyXG4gICAgXHQgICAgXHRhIHVuaXZlcnNhbCBUdXJpbmcgbWFjaGluZTogdGhhdCBpcywgYW55dGhpbmcgdGhhdCBjYW4gYmUgY29tcHV0ZWQgYWxnb3JpdGhtaWNhbGx5IFxyXG4gICAgXHQgICAgXHRjYW4gYmUgY29tcHV0ZWQgd2l0aGluIENvbndheSdzIEdhbWUgb2YgTGlmZS4gR2FyZG5lciB3cm90ZTpcclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8YmxvY2txdW90ZT5cclxuICAgIFx0XHRcdDxwPlRoZSBnYW1lIG1hZGUgQ29ud2F5IGluc3RhbnRseSBmYW1vdXMsIGJ1dCBpdCBhbHNvIG9wZW5lZCB1cCBhIHdob2xlIG5ldyBcclxuICAgIFx0XHRcdGZpZWxkIG9mIG1hdGhlbWF0aWNhbCByZXNlYXJjaCwgdGhlIGZpZWxkIG9mIGNlbGx1bGFyIGF1dG9tYXRhJm5ic3A7Li4uIEJlY2F1c2Ugb2YgTGlmZSdzIGFuYWxvZ2llcyB3aXRoIHRoZSByaXNlLCBcclxuICAgIFx0XHRcdGZhbGwgYW5kIGFsdGVyYXRpb25zIG9mIGEgc29jaWV0eSBvZiBsaXZpbmcgb3JnYW5pc21zLCBpdCBiZWxvbmdzIHRvIGEgXHJcbiAgICBcdFx0XHRncm93aW5nIGNsYXNzIG9mIHdoYXQgYXJlIGNhbGxlZCBcInNpbXVsYXRpb24gZ2FtZXNcIiAoZ2FtZXMgdGhhdCByZXNlbWJsZSByZWFsIGxpZmUgcHJvY2Vzc2VzKS5cclxuICAgIFx0XHRcdDwvcD5cclxuICAgIFx0XHRcdDwvYmxvY2txdW90ZT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcdFx0XHRcclxuICAgIFx0XHRcdDwvR3JpZD5cclxuICAgIFx0XHRcdDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfSA+IDwvR3JpZD5cclxuICAgIFx0XHRcdDwvR3JpZD5cclxuICAgIFx0ICAgICBcclxuICAgIFx0ICAgIDwvZGl2PlxyXG4gICAgXHQpOyBcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuQWJvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgc2V0U3RvcHBlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHN0b3BwZWQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgW2JvYXJkTmFtZXMuTUFJTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJMT0NLXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQk9BVF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkxPQUZdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CRUVISVZFXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkxJTktFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJFQUNPTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLlRPQURdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5HTElERVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5TUEFDRVNISVBdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5HVU5dOiBQcm9wVHlwZXMuYm9vbCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFib3V0KTtcclxuXHJcblxyXG5jb25zdCBwYXR0ZXJuQm9hcmQgPSAoZ3JpZCxjZWxsc0xpc3QpID0+ICh7Z3JpZCxjZWxsc0xpc3R9KVxyXG5cclxuXHJcbmNvbnN0IEJvYXJkRWxlbWVudCA9ICh7d2lkdGgsIHBhdHRlcm5OYW1lLCBzdG9wcGVkLCBidXR0b25Db2xvciwgd2l0aEJ1dHRvbiwgLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiIHN0eWxlPXt7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgIDxjYW52YXNcclxuICAgICAgICAgICAgICAgIHJlZj17cHJvcHMuc2V0Q2FudmFzfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHt3aXRoQnV0dG9uID8gKFxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljayA9IHtwcm9wcy5oYW5kbGVQbGF5VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbj17c3RvcHBlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JY29uPXs8UGxheUFycm93IGNsYXNzTmFtZT1cImljb25cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2ZmSWNvbj17PFBhdXNlIGNsYXNzTmFtZT1cImljb25cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSB7YnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwYXR0ZXJuTmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAuYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PiAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNlbGxzTGlzdCA9IChjb29yZGluYXRlcywgc2hpZnQpID0+IHtcclxuICAgIHJldHVybiBjb29yZGluYXRlcy5zcGxpdChcIlxcclxcblwiKS5yZWR1Y2UoZnVuY3Rpb24oYWNjLCB2YWwsIFkpe1xyXG4gICAgICAgIHZhbC5zcGxpdCgnYycpLnJlZHVjZSgoYWNjWCwgdmFsWCwgWCkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWxYICE9PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjLnB1c2goW1kgKyBzaGlmdFswXSwgK3ZhbFggKyBzaGlmdFsxXV0pXHJcbiAgICAgICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sW10pXHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\About.js */'
    }));
};

var createCellsList = function createCellsList(coordinates, shift) {
    return coordinates.split("\r\n").reduce(function (acc, val, Y) {
        val.split('c').reduce(function (accX, valX, X) {
            if (valX !== "") return acc.push([Y + shift[0], +valX + shift[1]]);
        }, []);

        return acc;
    }, []);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbImJlYWNvbkNvb3JkaW5hdGVzIiwicmVxdWlyZSIsImJlZWhpdmVDb29yZGluYXRlcyIsImJsaW5rZXJDb29yZGluYXRlcyIsImJsb2NrQ29vcmRpbmF0ZXMiLCJib2F0Q29vcmRpbmF0ZXMiLCJnbGlkZXJDb29yZGluYXRlcyIsImd1bkNvb3JkaW5hdGVzIiwibG9hZkNvb3JkaW5hdGVzIiwibHNwYWNlc2hpcENvb3JkaW5hdGVzIiwib3NjR2xhc3Nlc0Nvb3JkaW5hdGVzIiwib3NjUXVhZENvb3JkaW5hdGVzIiwidG9hZENvb3JkaW5hdGVzIiwic3R5bGVzIiwibWFpbkNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJydWxlcyIsImJhY2tncm91bmRDb2xvciIsInRleHQiLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwidmlkZW8iLCJ0ZXh0QWxpZ24iLCJib2FyZHNTZWN0aW9uIiwiZGlzcGxheSIsIkFib3V0IiwicHJvcHMiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwiZXhhbXBsZXMiLCJHVU4iLCJncmlkIiwiY2FudmFzIiwic3F1YXJlU2l6ZSIsInBhcmFtZXRlcnMiLCJCRUFDT04iLCJ3IiwiaCIsImNvb3JkaW5hdGVzIiwiY3JlYXRlQ2VsbHNMaXN0Iiwid3JhcHBlZCIsIm5hbWUiLCJCRUVISVZFIiwiQkxJTktFUiIsIkJMT0NLIiwiQk9BVCIsIkdMSURFUiIsIkxPQUYiLCJTUEFDRVNISVAiLCJHTEFTU0VTIiwiUVVBRCIsIlRPQUQiLCJjZWxscyIsInN0YXRlIiwicmVsb2FkIiwic2NyZWVuIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzY3JlZW5TY2FsZSIsImNhbnZhc1dpZHRoIiwiZ2V0V2lkdGgiLCJtb3Rpb25QYXR0ZXJuTGlzdCIsInJBRiIsImludGVydmFsIiwiYnV0dG9uQ29sb3IiLCJzZXRTdG9wcGVkIiwic3RvcHBlZCIsInBhdHRlcm4iLCJzdGFydCIsInN0b3AiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJsZW5ndGgiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInB1c2giLCJ0aGVuIiwiRGF0ZSIsIm5vdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsImRlbHRhIiwiZm9yRWFjaCIsInAiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm1ha2VCb2FyZCIsImNsYXNzZXMiLCJpbnRybyIsInBsYXllclZhcnMiLCJzaG93aW5mbyIsInJlbCIsInJ1bGVzUGFyIiwiZWwiLCJoYW5kbGVQbGF5VG9nZ2xlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzaGFwZSIsIk1BSU4iLCJib29sIiwicGF0dGVybkJvYXJkIiwiY2VsbHNMaXN0IiwiQm9hcmRFbGVtZW50IiwicGF0dGVybk5hbWUiLCJ3aXRoQnV0dG9uIiwic2V0Q2FudmFzIiwic2hpZnQiLCJzcGxpdCIsInJlZHVjZSIsImFjYyIsInZhbCIsIlkiLCJhY2NYIiwidmFsWCIsIlgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBR0EsSUFBSSxvQkFBb0IsUUFBeEI7QUFDQSxJQUFJLHFCQUFxQixRQUF6QjtBQUNBLElBQUkscUJBQXFCLFFBQXpCO0FBQ0EsSUFBSSxtQkFBbUIsUUFBdkI7QUFDQSxJQUFJLGtCQUFrQixRQUF0QjtBQUNBLElBQUksb0JBQW9CLFFBQXhCO0FBQ0EsSUFBSSxpQkFBaUIsUUFBckI7QUFDQSxJQUFJLGtCQUFrQixRQUF0QjtBQUNBLElBQUksd0JB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ZUFIYixBQUlhOztzQkFKYjt3QkFGUCxBQUNHLEFBQ0k7QUFBQTtBQUNJO21CQVFKOztzQkFBQTt3QkFqQlosQUFpQlksQUFLUjtBQUxRO0FBQUEsS0FBQSxtQkFLUixjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUNDO0FBREQ7QUFBQSxPQXZCUixBQUNJLEFBc0JJO2lCQXZCUjthQUZBLEFBRUEsQUFtREg7QUFuREc7QUFKSjs7QUF5REEsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxhQUFELEFBQWMsT0FBVSxBQUM1Qzt1QkFBTyxBQUFZLE1BQVosQUFBa0IsUUFBbEIsQUFBMEIsT0FBTyxVQUFBLEFBQVMsS0FBVCxBQUFjLEtBQWQsQUFBbUIsR0FBRSxBQUN6RDtZQUFBLEFBQUksTUFBSixBQUFVLEtBQVYsQUFBZSxPQUFPLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUCxBQUFhLEdBQU0sQUFDckM7Z0JBQUcsU0FBSCxBQUFZLElBQ1osT0FBTyxJQUFBLEFBQUksS0FBSyxDQUFDLElBQUksTUFBTCxBQUFLLEFBQU0sSUFBSSxDQUFBLEFBQUMsT0FBTyxNQUF2QyxBQUFPLEFBQVMsQUFBdUIsQUFBTSxBQUNoRDtBQUhELFdBQUEsQUFHRSxBQUVGOztlQUFBLEFBQU8sQUFDVjtBQVBNLEtBQUEsRUFBUCxBQUFPLEFBT0wsQUFDTDtBQVREIiwiZmlsZSI6IkFib3V0LmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=