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
    },
    link: {
        'text-decoration': 'underline !important'
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
                    lineNumber: 287
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 291
                }
            }, ' '), _react2.default.createElement(_Grid2.default, { item: true, xs: 10, sm: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 293
                }
            }, _react2.default.createElement('p', { className: classes.intro + ' ' + classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                }
            }, _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
                }
            }, 'The Game of Life'), ' is the best-known two-dimensional "', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/Cellular_automaton', target: '_blank', title: 'Cellular automaton', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 297
                }
            }, 'cellular automaton'), '", invented in 1970 by the British mathematician ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/John_Horton_Conway', title: 'John Conway', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 298
                }
            }, 'John Horton Conway'), '. The life is a cellular automaton, which is a model of a discrete abstract computational system, composed of a finite or infinite set of objects \u2013 "cells". The cell in the game of life has two states - \u201Calive\u201D and \u201Cdead\u201D, or "populated" and "unpopulated". The cells live on a two-dimensional grid and each cell has eight adjacent cells - "neighbors". All cells change their state simultaneously, according to update rules by taking into account the states of their neighbors.'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 306
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'R9Plq-D1gEk',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 307
                }
            }), 'John H. Conway on the creation of his Game of Life'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 316
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'CgOcEZinQ2I',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 317
                }
            }), 'Fragment from Stephen Hawking`s The Meaning of Life'), _react2.default.createElement('div', { className: classes.rulesPar, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 326
                }
            }, _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 327
                }
            }, 'Rules'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 330
                }
            }, 'Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:'), _react2.default.createElement('div', { className: classes.rules, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335
                }
            }, _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 337
                }
            }, 'Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 338
                }
            }, 'Any live cell with two or three live neighbours lives on to the next generation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 339
                }
            }, 'Any live cell with more than three live neighbours dies, as if by overpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 340
                }
            }, 'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'))), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 343
                }
            }, 'The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.')), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 352
                }
            }, 'Examples of Patterns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 355
                }
            }, 'In order to simulate infinite grid on the game board and in the examples below (except for the gun pattern), cells that are situated on the edges of the boards are handled in a toroidal manner, i.e. lower neighbor of a cell situated on the bottom edge of board will be a cell from the top edge on the same column and a neighbor to the right of a cell situated on the right edge will be from the left edge.'), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 363
                }
            }, 'Still Life'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 366
                }
            }, 'Stable finite patterns.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 369
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 370
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 374
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
                    lineNumber: 375
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 384
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
                    lineNumber: 385
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 394
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
                    lineNumber: 395
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 404
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
                    lineNumber: 405
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 415
                }
            }, 'Oscillators'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 418
                }
            }, 'These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. The most common period-2 oscillators include:'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 422
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 423
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 426
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
                    lineNumber: 427
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 439
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
                    lineNumber: 440
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 452
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
                    lineNumber: 453
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 464
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
                    lineNumber: 465
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 476
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
                    lineNumber: 477
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 490
                }
            }, 'Gliders and Spaceships'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 493
                }
            }, 'A spaceship is more complex oscillator, returning to the same configuration but shifted after a finite number of generations. The glider is a simple spaceship that has period 4, i.e. repeats every four generations, but moves diagonally one cell every four generations. Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. They each move in a straight line.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 500
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 501
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 504
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
                    lineNumber: 505
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 517
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
                    lineNumber: 518
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 532
                }
            }, 'Guns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 535
                }
            }, 'Conway offered a prize for any example of patterns that grow forever. Conway\'s prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever. The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. Where these shuttles collide, instead of producing beehives, they produce a new glider. This glider moves away in time for the process to repeat itself 30 steps later.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 543
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 544
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 547
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
                    lineNumber: 548
                }
            })))), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 561
                }
            }, 'Origins'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 565
                }
            }, 'Conway was interested in a problem presented in the 1940s by mathematician ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/John_von_Neumann', title: 'John von Neumann', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 566
                }
            }, 'John von Neumann'), ', who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway\'s successful attempt to drastically simplify von Neumann\'s ideas.'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 574
                }
            }, 'The game made its first public appearance in the October 1970 issue of ', _react2.default.createElement('i', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 574
                }
            }, 'Scientific American'), ', in Martin Gardner\'s column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway\'s Game of Life. Gardner wrote:'), _react2.default.createElement('blockquote', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 579
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 580
                }
            }, 'The game made Conway instantly famous, but it also opened up a whole new field of mathematical research, the field of cellular automata\xA0... Because of Life\'s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called "simulation games" (games that resemble real life processes).')), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 587
                }
            }, 'References'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 590
                }
            }, 'Wikipedia. 2017. Conway\'s Game of Life. [ONLINE] Available at: ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 591
                }
            }, 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'), '. Overview of history, rules and examples of patterns of the Game of Life'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 594
                }
            }, 'www.ericweisstein.com. 1996-2005. Eric Weisstein\'s Treasure Trove of the Life C.A. [ONLINE] Available at: ', _react2.default.createElement('a', { className: classes.link, href: 'http://www.ericweisstein.com/encyclopedias/life/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 595
                }
            }, 'http://www.ericweisstein.com/encyclopedias/life/'), '. This source includes large collection of examples of possible patterns.'), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 598
                }
            }, 'Links'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 601
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.scholarpedia.org/article/Game_of_Life', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 602
                }
            }, 'www.scholarpedia.org/article/Game_of_Life')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 604
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'https://www.ibiblio.org/lifepatterns/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 605
                }
            }, 'www.ibiblio.org/lifepatterns/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 607
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://mathworld.wolfram.com/GameofLife.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 608
                }
            }, 'http://mathworld.wolfram.com/GameofLife.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 610
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.conwaylife.com/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 611
                }
            }, 'http://www.conwaylife.com/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 613
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://golly.sourceforge.net/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 614
                }
            }, 'http://golly.sourceforge.net/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 616
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.math.com/students/wonders/life/life.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 617
                }
            }, 'http://www.math.com/students/wonders/life/life.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 619
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.cuug.ab.ca/dewara/life/life.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 620
                }
            }, 'http://www.cuug.ab.ca/dewara/life/life.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 622
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.radicaleye.com/lifepage/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 623
                }
            }, 'http://www.radicaleye.com/lifepage/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 625
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 626
                }
            }, 'https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 628
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 629
                }
            }, 'http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 631
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://natureofcode.com/book/chapter-7-cellular-automata/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 632
                }
            }, 'http://natureofcode.com/book/chapter-7-cellular-automata/'))), _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 635
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
            lineNumber: 673
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-3653595684' + ' ' + 'item',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 674
        }
    }, _react2.default.createElement('canvas', {
        ref: props.setCanvas
        // onClick={(e) => this.handleClick(e)}
        , className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 675
        }
    }), withButton ? _react2.default.createElement(_IconButton2.default, { className: 'button', onClick: props.handlePlayToggle, __source: {
            fileName: _jsxFileName,
            lineNumber: 681
        }
    }, _react2.default.createElement(_materialUiToggleIcon2.default, {
        on: stopped,
        onIcon: _react2.default.createElement(_PlayArrow2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 684
            }
        }),
        offIcon: _react2.default.createElement(_Pause2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 685
            }
        }),
        color: buttonColor,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 682
        }
    })) : _react2.default.createElement('div', {
        className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 691
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 696
        }
    }, patternName)), _react2.default.createElement(_style2.default, {
        styleId: '3653595684',
        css: '.board{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:.7em;text-align:center;font-family:\'Open Sans\',sans-serif;}.item{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.button{width:35px;height:35px;}.icon{width:25px;height:25px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRyQjJCLEFBRzhCLEFBT08sQUFHVCxBQUlBLFdBSEMsQUFJQSxZQUhoQixBQUtBLGlEQVRBLEVBUG1CLGVBQ0csa0JBQ2tCLG1DQUV4QyIsImZpbGUiOiJjb21wb25lbnRzXFxBYm91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XHJcbmltcG9ydCBHYW1lR3JpZCBmcm9tICcuLi9oZWxwZXJzL0dhbWVHcmlkJztcclxuaW1wb3J0IEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlSWNvbiBmcm9tICdtYXRlcmlhbC11aS10b2dnbGUtaWNvbic7XHJcbmltcG9ydCBQbGF5QXJyb3cgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvUGxheUFycm93JztcclxuaW1wb3J0IFBhdXNlIGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1BhdXNlJztcclxuaW1wb3J0IHtib2FyZE5hbWVzfSBmcm9tICcuLi9oZWxwZXJzL2JvYXJkTmFtZXMnXHJcbmltcG9ydCB7IHNoaWZ0VG9DZW50ZXIgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuXHJcbnZhciBiZWFjb25Db29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9iZWFjb24udHh0Jyk7XHJcbnZhciBiZWVoaXZlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmVlaGl2ZS50eHQnKTtcclxudmFyIGJsaW5rZXJDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibGlua2VyLnR4dCcpO1xyXG52YXIgYmxvY2tDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibG9jay50eHQnKTtcclxudmFyIGJvYXRDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ib2F0LnR4dCcpO1xyXG52YXIgZ2xpZGVyQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ2xpZGVyLnR4dCcpO1xyXG52YXIgZ3VuQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ3VuLnR4dCcpO1xyXG52YXIgbG9hZkNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2xvYWYudHh0Jyk7XHJcbnZhciBsc3BhY2VzaGlwQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvbHNwYWNlc2hpcC50eHQnKTtcclxudmFyIG9zY0dsYXNzZXNDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9vc2NHbGFzc2VzLnR4dCcpO1xyXG52YXIgb3NjUXVhZENvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL29zY1F1YWQudHh0Jyk7XHJcbnZhciB0b2FkQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9hZC50eHQnKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHJcblx0bWFpbkNvbnRlbnQ6IHtcclxuXHRcdG1hcmdpblRvcDogNzVcclxuXHR9LFxyXG4gICAgcnVsZXM6IHtcclxuICAgIFx0YmFja2dyb3VuZENvbG9yOidyZ2JhKDI0MCwyNDgsMjU1LC43KScsXHJcbiAgICBcdFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnT3BlbiBTYW5zJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sICAgICBcdFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIFxyXG4gICAgICAgIGZhbGxiYWNrczp7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgICBtYXJnaW5Ub3A6IDQwXHJcbiAgICB9LFxyXG4gICAgdmlkZW86IHtcclxuICAgIFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIFx0Zm9udEZhbWlseTogJ09wZW4gU2FucycsIFxyXG4gICAgICAgIGZhbGxiYWNrczp7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICB9LFxyXG4gICAgXHRtYXJnaW5Ub3A6MzAsXHJcbiAgICB9LFxyXG4gICAgYm9hcmRzU2VjdGlvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgXHRtYXJnaW5Ub3A6MzAsXHJcbiAgICB9LFxyXG4gICAgbGluazoge1xyXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24nOiAndW5kZXJsaW5lICFpbXBvcnRhbnQnLFxyXG4gICAgfSwgICAgXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCBzcXVhcmVTaXplID0gMTI7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLkJFQUNPTl06IHtcclxuICAgICAgICAgICAgICAgIHc6IDYsXHJcbiAgICAgICAgICAgICAgICBoOiA2LCBcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmVhY29uQ29vcmRpbmF0ZXMsWzAsMF0pLCAgICBcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsICAgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlYWNvblwiLCAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkVFSElWRV06IHtcclxuICAgICAgICAgICAgICAgIHc6IDYsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChiZWVoaXZlQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlZWhpdmVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkxJTktFUl06IHtcclxuICAgICAgICAgICAgICAgIHc6IDUsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChibGlua2VyQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJsaW5rZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkxPQ0tdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA0LFxyXG4gICAgICAgICAgICAgICAgaDogNCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmxvY2tDb29yZGluYXRlcyxbMCwwXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmxvY2tcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQk9BVF06IHtcclxuICAgICAgICAgICAgICAgIHc6IDUsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChib2F0Q29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJvYXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuR0xJREVSXToge1xyXG4gICAgICAgICAgICAgICAgdzogMTAsXHJcbiAgICAgICAgICAgICAgICBoOiAxMCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoZ2xpZGVyQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdsaWRlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5HVU5dOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA0MCxcclxuICAgICAgICAgICAgICAgIGg6IDIwLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChndW5Db29yZGluYXRlcyxbMSwxXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRoZSBHb3NwZXIgR2xpZGVyIEd1blwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5MT0FGXToge1xyXG4gICAgICAgICAgICAgICAgdzogNixcclxuICAgICAgICAgICAgICAgIGg6IDYsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGxvYWZDb29yZGluYXRlcyxbMCwwXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTG9hZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5TUEFDRVNISVBdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiAxMixcclxuICAgICAgICAgICAgICAgIGg6IDEyLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChsc3BhY2VzaGlwQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpZ2h0d2VpZ2h0IFNwYWNlc2hpcFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5HTEFTU0VTXToge1xyXG4gICAgICAgICAgICAgICAgdzogMjAsXHJcbiAgICAgICAgICAgICAgICBoOiAxMyxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjR2xhc3Nlc0Nvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJHbGFzc2VzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLlFVQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA4LFxyXG4gICAgICAgICAgICAgICAgaDogOCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjUXVhZENvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJRdWFkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLlRPQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA2LFxyXG4gICAgICAgICAgICAgICAgaDogNixcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QodG9hZENvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUb2FkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgdGhpcy5leGFtcGxlcyA9IHt9O1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IG5ldyBHYW1lR3JpZChuYW1lLCBwYXJhbWV0ZXJzW25hbWVdLncsIHBhcmFtZXRlcnNbbmFtZV0uaCwgc3F1YXJlU2l6ZSwgIXBhcmFtZXRlcnNbbmFtZV0ud3JhcHBlZCksXHJcbiAgICAgICAgICAgICAgICBjZWxsczogbmFtZSA9PSBib2FyZE5hbWVzLkdVTiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbbmFtZV0uY29vcmRpbmF0ZXMgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0VG9DZW50ZXIocGFyYW1ldGVyc1tuYW1lXS5jb29yZGluYXRlcywgcGFyYW1ldGVyc1tuYW1lXS5oLCBwYXJhbWV0ZXJzW25hbWVdLncpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogcGFyYW1ldGVyc1tuYW1lXS5uYW1lLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWxvYWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICAgIHNjcmVlblNjYWxlOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCA/IDMgOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXS5jYW52YXNXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5leGFtcGxlc1tuYW1lXS5ncmlkKSBcclxuICAgICAgICB9XHJcblxyXG5cdFx0dGhpcy5tb3Rpb25QYXR0ZXJuTGlzdCA9IFtdO1xyXG5cdFx0dGhpcy5yQUYgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMuaW50ZXJ2YWw9MzAwO1xyXG5cdFxyXG5cdFx0dGhpcy5idXR0b25Db2xvciA9ICdyZ2JhKDAsIDAsIDAsIC45KSc7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RvcHBlZCA9IChzdG9wcGVkLCBuYW1lKSA9PiBwcm9wcy5zZXRTdG9wcGVkKHN0b3BwZWQsIG5hbWUpO1xyXG5cdH1cclxuXHJcbiAgICBnZXRXaWR0aChncmlkKXtcclxuICAgICAgICBsZXQge3NjcmVlbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCB7d2lkdGgsIHNxdWFyZVNpemV9ID0gZ3JpZDtcclxuICAgICAgICBsZXQgdyA9ICgod2lkdGggKyAxKSAqIHNxdWFyZVNpemUgKiBzY3JlZW4ud2lkdGgvMTAwICogLjcpL3NjcmVlbi5zY3JlZW5TY2FsZTtcclxuICAgICAgICByZXR1cm4gdyA+IHNjcmVlbi53aWR0aCAqIC42ID8gc2NyZWVuLndpZHRoICogLjYgOiB3O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBsYXlUb2dnbGUocGF0dGVybil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQocGF0dGVybik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcChwYXR0ZXJuKTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuXHJcbiAgICBzdG9wKHBhdHRlcm4pe1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnN0b3BwZWRbcGF0dGVybi5ncmlkLm5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKHRydWUsIHBhdHRlcm4uZ3JpZC5uYW1lKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tb3Rpb25QYXR0ZXJuTGlzdC5pbmRleE9mKHBhdHRlcm4pO1xyXG4gICAgICAgICAgICB0aGlzLm1vdGlvblBhdHRlcm5MaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW90aW9uUGF0dGVybkxpc3QubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgXHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydChwYXR0ZXJuKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0b3BwZWRbcGF0dGVybi5ncmlkLm5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKGZhbHNlLCBwYXR0ZXJuLmdyaWQubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW90aW9uUGF0dGVybkxpc3QucHVzaChwYXR0ZXJuKTtcclxuICAgICAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3Rpb25QYXR0ZXJuTGlzdC5sZW5ndGggPT09IDEpe1xyXG4gICAgICAgICAgICBcdHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0dXBkYXRlKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbHRhID4gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5kZWx0YSAlIHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubW90aW9uUGF0dGVybkxpc3QuZm9yRWFjaChwID0+IHAuZ3JpZC51cGRhdGUoKSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHR0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5ncmlkLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0uY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCl7XHJcblx0XHR0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5jYW52YXNXaWR0aCA9IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmNhbnZhc1dpZHRoID4gdGhpcy5zdGF0ZS5zY3JlZW4ud2lkdGggKiAuNiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zY3JlZW4ud2lkdGggKiAuNiA6IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmNhbnZhc1dpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCByYXRpbyA9IHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvXHJcbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuZXhhbXBsZXMpe1xyXG4gICAgICAgICAgICBsZXQge2dyaWQsIGNlbGxzLCBjYW52YXN9ID0gdGhpcy5leGFtcGxlc1tuYW1lXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgICAgICAgICAgZ3JpZC5tYWtlQm9hcmQoZ3JpZC53aWR0aCwgZ3JpZC5oZWlnaHQsIGdyaWQuc3F1YXJlU2l6ZSwgcmF0aW8sIGNhbnZhcywgY2VsbHMpO1xyXG4gICAgICAgICAgICBncmlkLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7ICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RvcHBlZCh0cnVlLCBudWxsKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7ICAgIFxyXG4gICAgXHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xyXG4gICAgXHRyZXR1cm4oXHJcbiAgICBcdCAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQ29udGVudH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHQgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgXHQgICBcclxuICAgIFx0ICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfSA+IDwvR3JpZD5cclxuICAgIFx0ICAgIFxyXG4gICAgXHQgICAgPEdyaWQgaXRlbSB4cz17MTB9ICBzbT17OH0gPlxyXG4gICAgXHQgICAgXHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5pbnRyb30gJHtjbGFzc2VzLnRleHR9YH0+XHJcbiAgICBcdCAgICBcdDxzdHJvbmc+VGhlIEdhbWUgb2YgTGlmZTwvc3Ryb25nPiBpcyB0aGUgYmVzdC1rbm93biB0d28tZGltZW5zaW9uYWwgIFxyXG4gICAgICAgICAgICAgICAgXCI8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbGx1bGFyX2F1dG9tYXRvblwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiQ2VsbHVsYXIgYXV0b21hdG9uXCI+Y2VsbHVsYXIgYXV0b21hdG9uPC9hPlwiLCBcclxuICAgICAgICAgICAgICAgIGludmVudGVkIGluIDE5NzAgYnkgdGhlIEJyaXRpc2ggbWF0aGVtYXRpY2lhbiA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0pvaG5fSG9ydG9uX0NvbndheVwiIHRpdGxlPVwiSm9obiBDb253YXlcIj5Kb2huIEhvcnRvbiBDb253YXk8L2E+LiBcclxuICAgICAgICAgICAgICAgIFRoZSBsaWZlIGlzIGEgY2VsbHVsYXIgYXV0b21hdG9uLCB3aGljaCBpcyBhIG1vZGVsIG9mIGEgZGlzY3JldGUgYWJzdHJhY3QgY29tcHV0YXRpb25hbCBzeXN0ZW0sIFxyXG4gICAgICAgICAgICAgICAgY29tcG9zZWQgb2YgYSBmaW5pdGUgb3IgaW5maW5pdGUgc2V0IG9mIG9iamVjdHMg4oCTIFwiY2VsbHNcIi4gVGhlIGNlbGwgaW4gdGhlIGdhbWUgb2YgbGlmZSBoYXMgdHdvIHN0YXRlcyAtIFxyXG4gICAgICAgICAgICAgICAg4oCcYWxpdmXigJ0gYW5kIOKAnGRlYWTigJ0sIG9yIFwicG9wdWxhdGVkXCIgYW5kIFwidW5wb3B1bGF0ZWRcIi4gVGhlIGNlbGxzIGxpdmUgb24gYSB0d28tZGltZW5zaW9uYWwgZ3JpZCBhbmQgZWFjaCBjZWxsIFxyXG4gICAgICAgICAgICAgICAgaGFzIGVpZ2h0IGFkamFjZW50IGNlbGxzIC0gXCJuZWlnaGJvcnNcIi4gQWxsIGNlbGxzIGNoYW5nZSB0aGVpciBzdGF0ZSBzaW11bHRhbmVvdXNseSwgYWNjb3JkaW5nIHRvIHVwZGF0ZSBcclxuICAgICAgICAgICAgICAgIHJ1bGVzIGJ5IHRha2luZyBpbnRvIGFjY291bnQgdGhlIHN0YXRlcyBvZiB0aGVpciBuZWlnaGJvcnMuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0XHJcbiAgICBcdCAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvfT5cclxuICAgICAgICAgICAgICAgIDxZb3VUdWJlXHJcbiAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJSOVBscS1EMWdFa1wiICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG9wdHM9e3t3aWR0aDonMTAwJScsIHBsYXllclZhcnM6IHtzaG93aW5mbzowLCByZWw6MH19fSAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgSm9obiBILiBDb253YXkgb24gdGhlIGNyZWF0aW9uIG9mIGhpcyBHYW1lIG9mIExpZmVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvfT5cclxuICAgICAgICAgICAgICAgIDxZb3VUdWJlXHJcbiAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJDZ09jRVppblEySVwiICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG9wdHM9e3t3aWR0aDonMTAwJScsIHBsYXllclZhcnM6IHtzaG93aW5mbzowLCByZWw6MH19fSAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgRnJhZ21lbnQgZnJvbSBTdGVwaGVuIEhhd2tpbmdgcyBUaGUgTWVhbmluZyBvZiBMaWZlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICBcdCAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJ1bGVzUGFyfT5cclxuICAgIFx0ICAgIFx0PGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdCAgICBcdFJ1bGVzXHJcbiAgICBcdCAgICBcdDwvaDI+XHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0ICAgIFx0RXZlcnkgY2VsbCBpbnRlcmFjdHMgd2l0aCBpdHMgZWlnaHQgbmVpZ2hib3VycywgXHJcbiAgICBcdCAgICBcdHdoaWNoIGFyZSB0aGUgY2VsbHMgdGhhdCBhcmUgaG9yaXpvbnRhbGx5LCB2ZXJ0aWNhbGx5LCBvciBkaWFnb25hbGx5IGFkamFjZW50LiBcclxuICAgIFx0ICAgIFx0QXQgZWFjaCBzdGVwIGluIHRpbWUsIHRoZSBmb2xsb3dpbmcgdHJhbnNpdGlvbnMgb2NjdXI6XHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucnVsZXN9PlxyXG4gICAgXHQgICAgXHQ8dWw+XHJcbiAgICBcdFx0XHRcdDxsaT5BbnkgbGl2ZSBjZWxsIHdpdGggZmV3ZXIgdGhhbiB0d28gbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIGlmIGNhdXNlZCBieSB1bmRlcnBvcHVsYXRpb24uPC9saT5cclxuICAgIFx0XHRcdFx0PGxpPkFueSBsaXZlIGNlbGwgd2l0aCB0d28gb3IgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGxpdmVzIG9uIHRvIHRoZSBuZXh0IGdlbmVyYXRpb24uPC9saT5cclxuICAgIFx0XHRcdFx0PGxpPkFueSBsaXZlIGNlbGwgd2l0aCBtb3JlIHRoYW4gdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIGlmIGJ5IG92ZXJwb3B1bGF0aW9uLjwvbGk+XHJcbiAgICBcdFx0XHRcdDxsaT5BbnkgZGVhZCBjZWxsIHdpdGggZXhhY3RseSB0aHJlZSBsaXZlIG5laWdoYm91cnMgYmVjb21lcyBhIGxpdmUgY2VsbCwgYXMgaWYgYnkgcmVwcm9kdWN0aW9uLjwvbGk+XHJcbiAgICBcdFx0XHQ8L3VsPlxyXG4gICAgXHRcdFx0PC9kaXY+XHJcbiAgICBcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdFx0XHRUaGUgaW5pdGlhbCBwYXR0ZXJuIGNvbnN0aXR1dGVzIHRoZSBzZWVkIG9mIHRoZSBzeXN0ZW0uIFxyXG4gICAgXHRcdFx0VGhlIGZpcnN0IGdlbmVyYXRpb24gaXMgY3JlYXRlZCBieSBhcHBseWluZyB0aGUgYWJvdmUgcnVsZXMgXHJcbiAgICBcdFx0XHRzaW11bHRhbmVvdXNseSB0byBldmVyeSBjZWxsIGluIHRoZSBzZWVkIC0gYmlydGhzIGFuZCBkZWF0aHMgb2NjdXIgc2ltdWx0YW5lb3VzbHksIFxyXG4gICAgXHRcdFx0YW5kIHRoZSBkaXNjcmV0ZSBtb21lbnQgYXQgd2hpY2ggdGhpcyBoYXBwZW5zIGlzIHNvbWV0aW1lcyBjYWxsZWQgYSB0aWNrIFxyXG4gICAgXHRcdFx0KGluIG90aGVyIHdvcmRzLCBlYWNoIGdlbmVyYXRpb24gaXMgYSBwdXJlIGZ1bmN0aW9uIG9mIHRoZSBwcmVjZWRpbmcgb25lKS4gXHJcbiAgICBcdFx0XHRUaGUgcnVsZXMgY29udGludWUgdG8gYmUgYXBwbGllZCByZXBlYXRlZGx5IHRvIGNyZWF0ZSBmdXJ0aGVyIGdlbmVyYXRpb25zLlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDwvZGl2PlxyXG4gICAgXHQgICAgXHQ8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0RXhhbXBsZXMgb2YgUGF0dGVybnNcclxuICAgIFx0ICAgIFx0PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIEluIG9yZGVyIHRvIHNpbXVsYXRlIGluZmluaXRlIGdyaWQgb24gdGhlIGdhbWUgYm9hcmQgYW5kIGluIHRoZSBleGFtcGxlcyBiZWxvdyAoZXhjZXB0IGZvciB0aGUgZ3VuIHBhdHRlcm4pLCBcclxuICAgICAgICAgICAgICAgIGNlbGxzIHRoYXQgYXJlIHNpdHVhdGVkIG9uIHRoZSBlZGdlcyBvZiB0aGUgYm9hcmRzIGFyZSBoYW5kbGVkIGluIGEgdG9yb2lkYWwgbWFubmVyLCBcclxuICAgICAgICAgICAgICAgIGkuZS4gbG93ZXIgbmVpZ2hib3Igb2YgYSBjZWxsIHNpdHVhdGVkIG9uIHRoZSBib3R0b20gZWRnZSBvZiBib2FyZCB3aWxsIGJlIGEgY2VsbCBmcm9tIFxyXG4gICAgICAgICAgICAgICAgdGhlIHRvcCBlZGdlIG9uIHRoZSBzYW1lIGNvbHVtbiBhbmQgYSBuZWlnaGJvciB0byB0aGUgcmlnaHQgb2YgYSBjZWxsIHNpdHVhdGVkIG9uIHRoZSByaWdodCBcclxuICAgICAgICAgICAgICAgIGVkZ2Ugd2lsbCBiZSBmcm9tIHRoZSBsZWZ0IGVkZ2UuIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgIFx0ICAgIFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdCAgICBcdFN0aWxsIExpZmVcclxuICAgIFx0ICAgIFx0PC9oND5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHQgICAgXHRTdGFibGUgZmluaXRlIHBhdHRlcm5zLlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxkaXYgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZHNTZWN0aW9ufSA+XHJcbiAgICBcdCAgICBcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fSA+XHJcbiAgICBcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkxPQ0tdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkxPQ0tdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJPQVRdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJPQVRdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CT0FUXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkxPQUZdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkxPQUZdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5MT0FGXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUVISVZFXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUVISVZFXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVFSElWRV0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdCAgICAgICAgICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0ICAgIDwvZGl2PlxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIE9zY2lsbGF0b3JzIFxyXG4gICAgXHRcdCAgICA8L2g0PlxyXG4gICAgXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdFRoZXNlIHBhdHRlcm5zIHJlcGVhdCB0aGVpciBjb25maWd1cmF0aW9uIHBlcmlvZGljYWxseSBhbmQgaW5maW5pdGVseS4gVGhlIGJhc2ljIG9zY2lsbGF0b3JzIGhhdmUgcGVyaW9kcyBvZiB0d28gb3IgdGhyZWUgdGlja3MuIFxyXG4gICAgICAgICAgICAgICAgVGhlIG1vc3QgY29tbW9uIHBlcmlvZC0yIG9zY2lsbGF0b3JzIGluY2x1ZGU6XHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9PlxyXG4gICAgXHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMSU5LRVJdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMSU5LRVJdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLkJMSU5LRVJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMSU5LRVJdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMSU5LRVJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVBQ09OXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUFDT05dLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLkJFQUNPTl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHt0aGlzLmJ1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVBQ09OXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUFDT05dKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHMgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlRPQURdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlRPQURdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLlRPQURdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlRPQURdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlRPQURdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xBU1NFU10uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xBU1NFU10ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZXMuR0xBU1NFU119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHt0aGlzLmJ1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xBU1NFU10uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xBU1NFU10pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5RVUFEXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5RVUFEXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5RVUFEXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5RVUFEXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5RVUFEXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgR2xpZGVycyBhbmQgU3BhY2VzaGlwc1xyXG4gICAgXHRcdCAgICA8L2g0PlxyXG4gICAgXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdEEgc3BhY2VzaGlwIGlzIG1vcmUgY29tcGxleCBvc2NpbGxhdG9yLCByZXR1cm5pbmcgdG8gdGhlIHNhbWUgY29uZmlndXJhdGlvbiBidXQgc2hpZnRlZCBhZnRlciBhIGZpbml0ZSBudW1iZXIgb2YgZ2VuZXJhdGlvbnMuIFxyXG4gICAgXHQgICAgXHRUaGUgZ2xpZGVyIGlzIGEgc2ltcGxlIHNwYWNlc2hpcCB0aGF0IGhhcyBwZXJpb2QgNCwgaS5lLiByZXBlYXRzIGV2ZXJ5IGZvdXIgZ2VuZXJhdGlvbnMsIGJ1dCBcclxuICAgICAgICAgICAgICAgIG1vdmVzIGRpYWdvbmFsbHkgb25lIGNlbGwgZXZlcnkgZm91ciBnZW5lcmF0aW9ucy5cclxuICAgIFx0ICAgIFx0T3RoZXIgZXhhbXBsZXMgb2Ygc2ltcGxlIHNwYWNlc2hpcHMgaW5jbHVkZSBsaWdodHdlaWdodCwgbWVkaXVtIHdlaWdodCwgYW5kIGhlYXZ5d2VpZ2h0IHNwYWNlc2hpcHMuIFxyXG4gICAgXHQgICAgXHRUaGV5IGVhY2ggbW92ZSBpbiBhIHN0cmFpZ2h0IGxpbmUuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9PlxyXG4gICAgXHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HTElERVJdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdMSURFUl0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZXMuR0xJREVSXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HTElERVJdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdMSURFUl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgXHJcblxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlNQQUNFU0hJUF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuU1BBQ0VTSElQXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lcy5TUEFDRVNISVBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlNQQUNFU0hJUF0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuU1BBQ0VTSElQXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcblxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHQgICBcclxuICAgIFx0XHQgICAgPC9kaXY+IFx0XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgR3Vuc1xyXG4gICAgXHRcdCAgICA8L2g0PlxyXG4gICAgXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdFx0XHRDb253YXkgb2ZmZXJlZCBhIHByaXplIGZvciBhbnkgZXhhbXBsZSBvZiBwYXR0ZXJucyB0aGF0IGdyb3cgZm9yZXZlci4gXHJcbiAgICBcdFx0XHRDb253YXkncyBwcml6ZSB3YXMgY29sbGVjdGVkIHNvb24gYWZ0ZXIgaXRzIGFubm91bmNlbWVudCwgd2hlbiB0d28gZGlmZmVyZW50IHdheXMgd2VyZSBkaXNjb3ZlcmVkIGZvciBkZXNpZ25pbmcgYSBwYXR0ZXJuIHRoYXQgZ3Jvd3MgZm9yZXZlci5cclxuXHJcbiAgICBcdFx0XHRUaGUgZmlyc3Qgb2YgdGhlc2UgcGF0dGVybnMgaXMgdGhlIHBlcmlvZC0zMCBnbGlkZXIgZ3VuLCB3aGljaCBpcyBiYXNlZCBvbiB0aGUgaW50ZXJhY3Rpb24gb2YgdHdvIHF1ZWVuIGJlZSBzaHV0dGxlcy4gXHJcbiAgICBcdFx0XHRXaGVyZSB0aGVzZSBzaHV0dGxlcyBjb2xsaWRlLCBpbnN0ZWFkIG9mIHByb2R1Y2luZyBiZWVoaXZlcywgdGhleSBwcm9kdWNlIGEgbmV3IGdsaWRlci4gXHJcbiAgICBcdFx0XHRUaGlzIGdsaWRlciBtb3ZlcyBhd2F5IGluIHRpbWUgZm9yIHRoZSBwcm9jZXNzIHRvIHJlcGVhdCBpdHNlbGYgMzAgc3RlcHMgbGF0ZXIuXHJcbiAgICBcdFx0XHQ8L3A+XHJcbiAgICBcdFx0XHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG4gICAgXHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgXHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPXsxMn0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSAge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLkdVTl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHt0aGlzLmJ1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICBcdFx0XHQgICAgPC9HcmlkPlxyXG5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHQgICAgPC9HcmlkPlx0XHJcbiAgICBcdFx0ICAgIDwvZGl2PlxyXG4gICAgXHQgICAgXHQ8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0T3JpZ2luc1xyXG4gICAgXHQgICAgXHQ8L2gyPlxyXG5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PkNvbndheSB3YXMgaW50ZXJlc3RlZCBpbiBhIHByb2JsZW0gcHJlc2VudGVkIGluIHRoZSAxOTQwcyBieSBcclxuICAgIFx0ICAgIFx0bWF0aGVtYXRpY2lhbiA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0pvaG5fdm9uX05ldW1hbm5cIiB0aXRsZT1cIkpvaG4gdm9uIE5ldW1hbm5cIj5Kb2huIHZvbiBOZXVtYW5uPC9hPiwgXHJcbiAgICBcdCAgICBcdHdobyBhdHRlbXB0ZWQgdG8gZmluZCBhIGh5cG90aGV0aWNhbCBtYWNoaW5lIHRoYXQgY291bGQgYnVpbGQgY29waWVzIG9mIGl0c2VsZiBcclxuICAgIFx0ICAgIFx0YW5kIHN1Y2NlZWRlZCB3aGVuIGhlIGZvdW5kIGEgbWF0aGVtYXRpY2FsIG1vZGVsIGZvciBzdWNoIGEgbWFjaGluZSB3aXRoIHZlcnkgXHJcbiAgICBcdCAgICBcdGNvbXBsaWNhdGVkIHJ1bGVzIG9uIGEgcmVjdGFuZ3VsYXIgZ3JpZC4gVGhlIEdhbWUgb2YgTGlmZSBlbWVyZ2VkIGFzIENvbndheSdzIFxyXG4gICAgXHQgICAgXHRzdWNjZXNzZnVsIGF0dGVtcHQgdG8gZHJhc3RpY2FsbHkgc2ltcGxpZnkgdm9uIE5ldW1hbm4ncyBpZGVhcy5cclxuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuXHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5UaGUgZ2FtZSBtYWRlIGl0cyBmaXJzdCBwdWJsaWMgYXBwZWFyYW5jZSBpbiB0aGUgT2N0b2JlciAxOTcwIGlzc3VlIG9mIDxpPlNjaWVudGlmaWMgQW1lcmljYW48L2k+LCBpbiBNYXJ0aW4gR2FyZG5lcidzIGNvbHVtbi4gXHJcbiAgICBcdCAgICBcdEZyb20gYSB0aGVvcmV0aWNhbCBwb2ludCBvZiB2aWV3LCBpdCBpcyBpbnRlcmVzdGluZyBiZWNhdXNlIGl0IGhhcyB0aGUgcG93ZXIgb2YgXHJcbiAgICBcdCAgICBcdGEgdW5pdmVyc2FsIFR1cmluZyBtYWNoaW5lOiB0aGF0IGlzLCBhbnl0aGluZyB0aGF0IGNhbiBiZSBjb21wdXRlZCBhbGdvcml0aG1pY2FsbHkgXHJcbiAgICBcdCAgICBcdGNhbiBiZSBjb21wdXRlZCB3aXRoaW4gQ29ud2F5J3MgR2FtZSBvZiBMaWZlLiBHYXJkbmVyIHdyb3RlOlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxibG9ja3F1b3RlPlxyXG4gICAgXHRcdFx0PHA+VGhlIGdhbWUgbWFkZSBDb253YXkgaW5zdGFudGx5IGZhbW91cywgYnV0IGl0IGFsc28gb3BlbmVkIHVwIGEgd2hvbGUgbmV3IFxyXG4gICAgXHRcdFx0ZmllbGQgb2YgbWF0aGVtYXRpY2FsIHJlc2VhcmNoLCB0aGUgZmllbGQgb2YgY2VsbHVsYXIgYXV0b21hdGEmbmJzcDsuLi4gQmVjYXVzZSBvZiBMaWZlJ3MgYW5hbG9naWVzIHdpdGggdGhlIHJpc2UsIFxyXG4gICAgXHRcdFx0ZmFsbCBhbmQgYWx0ZXJhdGlvbnMgb2YgYSBzb2NpZXR5IG9mIGxpdmluZyBvcmdhbmlzbXMsIGl0IGJlbG9uZ3MgdG8gYSBcclxuICAgIFx0XHRcdGdyb3dpbmcgY2xhc3Mgb2Ygd2hhdCBhcmUgY2FsbGVkIFwic2ltdWxhdGlvbiBnYW1lc1wiIChnYW1lcyB0aGF0IHJlc2VtYmxlIHJlYWwgbGlmZSBwcm9jZXNzZXMpLlxyXG4gICAgXHRcdFx0PC9wPlxyXG4gICAgXHRcdFx0PC9ibG9ja3F1b3RlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgUmVmZXJlbmNlc1xyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIFdpa2lwZWRpYS4gMjAxNy4gQ29ud2F5J3MgR2FtZSBvZiBMaWZlLiBbT05MSU5FXSBBdmFpbGFibGUgYXQ6IDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29ud2F5JTI3c19HYW1lX29mX0xpZmVcIj5odHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db253YXklMjdzX0dhbWVfb2ZfTGlmZTwvYT4uIFxyXG4gICAgICAgICAgICAgICAgT3ZlcnZpZXcgb2YgaGlzdG9yeSwgcnVsZXMgYW5kIGV4YW1wbGVzIG9mIHBhdHRlcm5zIG9mIHRoZSBHYW1lIG9mIExpZmVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIHd3dy5lcmljd2Vpc3N0ZWluLmNvbS4gMTk5Ni0yMDA1LiBFcmljIFdlaXNzdGVpbidzIFRyZWFzdXJlIFRyb3ZlIG9mIHRoZSBMaWZlIEMuQS4gW09OTElORV0gQXZhaWxhYmxlIGF0OiA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuZXJpY3dlaXNzdGVpbi5jb20vZW5jeWNsb3BlZGlhcy9saWZlL1wiPmh0dHA6Ly93d3cuZXJpY3dlaXNzdGVpbi5jb20vZW5jeWNsb3BlZGlhcy9saWZlLzwvYT4uIFxyXG4gICAgICAgICAgICAgICAgVGhpcyBzb3VyY2UgaW5jbHVkZXMgbGFyZ2UgY29sbGVjdGlvbiBvZiBleGFtcGxlcyBvZiBwb3NzaWJsZSBwYXR0ZXJucy5cclxuICAgICAgICAgICAgICAgIDwvcD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIExpbmtzXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vd3d3LnNjaG9sYXJwZWRpYS5vcmcvYXJ0aWNsZS9HYW1lX29mX0xpZmVcIj53d3cuc2Nob2xhcnBlZGlhLm9yZy9hcnRpY2xlL0dhbWVfb2ZfTGlmZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD4gXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHBzOi8vd3d3LmliaWJsaW8ub3JnL2xpZmVwYXR0ZXJucy9cIj53d3cuaWJpYmxpby5vcmcvbGlmZXBhdHRlcm5zLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD4gICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL21hdGh3b3JsZC53b2xmcmFtLmNvbS9HYW1lb2ZMaWZlLmh0bWxcIj5odHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0dhbWVvZkxpZmUuaHRtbDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD4gICBcdFx0XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuY29ud2F5bGlmZS5jb20vXCI+aHR0cDovL3d3dy5jb253YXlsaWZlLmNvbS88L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHRcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL2dvbGx5LnNvdXJjZWZvcmdlLm5ldC9cIj5odHRwOi8vZ29sbHkuc291cmNlZm9yZ2UubmV0LzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5tYXRoLmNvbS9zdHVkZW50cy93b25kZXJzL2xpZmUvbGlmZS5odG1sXCI+aHR0cDovL3d3dy5tYXRoLmNvbS9zdHVkZW50cy93b25kZXJzL2xpZmUvbGlmZS5odG1sPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vd3d3LmN1dWcuYWIuY2EvZGV3YXJhL2xpZmUvbGlmZS5odG1sXCI+aHR0cDovL3d3dy5jdXVnLmFiLmNhL2Rld2FyYS9saWZlL2xpZmUuaHRtbDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5yYWRpY2FsZXllLmNvbS9saWZlcGFnZS9cIiA+aHR0cDovL3d3dy5yYWRpY2FsZXllLmNvbS9saWZlcGFnZS88L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9zY2llbmNlL2FsZXhzLWFkdmVudHVyZXMtaW4tbnVtYmVybGFuZC8yMDE0L2RlYy8xNS90aGUtZ2FtZS1vZi1saWZlLWEtYmVnaW5uZXJzLWd1aWRlXCI+aHR0cHM6Ly93d3cudGhlZ3VhcmRpYW4uY29tL3NjaWVuY2UvYWxleHMtYWR2ZW50dXJlcy1pbi1udW1iZXJsYW5kLzIwMTQvZGVjLzE1L3RoZS1nYW1lLW9mLWxpZmUtYS1iZWdpbm5lcnMtZ3VpZGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuaW5zdHJ1Y3RhYmxlcy5jb20vaWQvT1RDQS1NZXRhcGl4ZWwtQ29ud2F5cy1HYW1lLW9mLUxpZmUvXCI+aHR0cDovL3d3dy5pbnN0cnVjdGFibGVzLmNvbS9pZC9PVENBLU1ldGFwaXhlbC1Db253YXlzLUdhbWUtb2YtTGlmZS88L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly9uYXR1cmVvZmNvZGUuY29tL2Jvb2svY2hhcHRlci03LWNlbGx1bGFyLWF1dG9tYXRhL1wiPmh0dHA6Ly9uYXR1cmVvZmNvZGUuY29tL2Jvb2svY2hhcHRlci03LWNlbGx1bGFyLWF1dG9tYXRhLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgIFx0XHRcdDwvR3JpZD5cclxuICAgIFx0XHRcdDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfSA+IDwvR3JpZD5cclxuICAgIFx0XHRcdDwvR3JpZD5cclxuICAgIFx0ICAgICBcclxuICAgIFx0ICAgIDwvZGl2PlxyXG4gICAgXHQpOyBcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuQWJvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgc2V0U3RvcHBlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHN0b3BwZWQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgW2JvYXJkTmFtZXMuTUFJTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJMT0NLXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQk9BVF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkxPQUZdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CRUVISVZFXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkxJTktFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJFQUNPTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLlRPQURdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5HTElERVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5TUEFDRVNISVBdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5HVU5dOiBQcm9wVHlwZXMuYm9vbCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFib3V0KTtcclxuXHJcblxyXG5jb25zdCBwYXR0ZXJuQm9hcmQgPSAoZ3JpZCxjZWxsc0xpc3QpID0+ICh7Z3JpZCxjZWxsc0xpc3R9KVxyXG5cclxuXHJcbmNvbnN0IEJvYXJkRWxlbWVudCA9ICh7d2lkdGgsIHBhdHRlcm5OYW1lLCBzdG9wcGVkLCBidXR0b25Db2xvciwgd2l0aEJ1dHRvbiwgLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiIHN0eWxlPXt7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgIDxjYW52YXNcclxuICAgICAgICAgICAgICAgIHJlZj17cHJvcHMuc2V0Q2FudmFzfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHt3aXRoQnV0dG9uID8gKFxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljayA9IHtwcm9wcy5oYW5kbGVQbGF5VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbj17c3RvcHBlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JY29uPXs8UGxheUFycm93IGNsYXNzTmFtZT1cImljb25cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2ZmSWNvbj17PFBhdXNlIGNsYXNzTmFtZT1cImljb25cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSB7YnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwYXR0ZXJuTmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAuYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PiAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNlbGxzTGlzdCA9IChjb29yZGluYXRlcywgc2hpZnQpID0+IHtcclxuICAgIHJldHVybiBjb29yZGluYXRlcy5zcGxpdChcIlxcclxcblwiKS5yZWR1Y2UoZnVuY3Rpb24oYWNjLCB2YWwsIFkpe1xyXG4gICAgICAgIHZhbC5zcGxpdCgnYycpLnJlZHVjZSgoYWNjWCwgdmFsWCwgWCkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWxYICE9PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjLnB1c2goW1kgKyBzaGlmdFswXSwgK3ZhbFggKyBzaGlmdFsxXV0pXHJcbiAgICAgICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sW10pXHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\About.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbImJlYWNvbkNvb3JkaW5hdGVzIiwicmVxdWlyZSIsImJlZWhpdmVDb29yZGluYXRlcyIsImJsaW5rZXJDb29yZGluYXRlcyIsImJsb2NrQ29vcmRpbmF0ZXMiLCJib2F0Q29vcmRpbmF0ZXMiLCJnbGlkZXJDb29yZGluYXRlcyIsImd1bkNvb3JkaW5hdGVzIiwibG9hZkNvb3JkaW5hdGVzIiwibHNwYWNlc2hpcENvb3JkaW5hdGVzIiwib3NjR2xhc3Nlc0Nvb3JkaW5hdGVzIiwib3NjUXVhZENvb3JkaW5hdGVzIiwidG9hZENvb3JkaW5hdGVzIiwic3R5bGVzIiwibWFpbkNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJydWxlcyIsImJhY2tncm91bmRDb2xvciIsInRleHQiLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwidmlkZW8iLCJ0ZXh0QWxpZ24iLCJib2FyZHNTZWN0aW9uIiwiZGlzcGxheSIsImxpbmsiLCJBYm91dCIsInByb3BzIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsImV4YW1wbGVzIiwiR1VOIiwiZ3JpZCIsImNhbnZhcyIsInNxdWFyZVNpemUiLCJwYXJhbWV0ZXJzIiwiQkVBQ09OIiwidyIsImgiLCJjb29yZGluYXRlcyIsImNyZWF0ZUNlbGxzTGlzdCIsIndyYXBwZWQiLCJuYW1lIiwiQkVFSElWRSIsIkJMSU5LRVIiLCJCTE9DSyIsIkJPQVQiLCJHTElERVIiLCJMT0FGIiwiU1BBQ0VTSElQIiwiR0xBU1NFUyIsIlFVQUQiLCJUT0FEIiwiY2VsbHMiLCJzdGF0ZSIsInJlbG9hZCIsInNjcmVlbiIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2NyZWVuU2NhbGUiLCJjYW52YXNXaWR0aCIsImdldFdpZHRoIiwibW90aW9uUGF0dGVybkxpc3QiLCJyQUYiLCJpbnRlcnZhbCIsImJ1dHRvbkNvbG9yIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJwYXR0ZXJuIiwic3RhcnQiLCJzdG9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibGVuZ3RoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwdXNoIiwidGhlbiIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJkZWx0YSIsImZvckVhY2giLCJwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJtYWtlQm9hcmQiLCJjbGFzc2VzIiwiaW50cm8iLCJwbGF5ZXJWYXJzIiwic2hvd2luZm8iLCJyZWwiLCJydWxlc1BhciIsImVsIiwiaGFuZGxlUGxheVRvZ2dsZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwic2hhcGUiLCJNQUlOIiwiYm9vbCIsInBhdHRlcm5Cb2FyZCIsImNlbGxzTGlzdCIsIkJvYXJkRWxlbWVudCIsInBhdHRlcm5OYW1lIiwid2l0aEJ1dHRvbiIsInNldENhbnZhcyIsInNoaWZ0Iiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJ2YWwiLCJZIiwiYWNjWCIsInZhbFgiLCJYIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUdBLElBQUksb0JBQW9CLFFBQXhCO0FBQ0EsSUFBSSxxQkFBcUIsUUFBekI7QUFDQSxJQUFJLHFCQUFxQixRQUF6QjtBQUNBLElBQUksbUJBQW1CLFFBQXZCO0FBQ0EsSUFBSSxrQkFBa0IsUUFBdEI7QUFDQSxJQUFJLG9CQUFvQixRQUF4QjtBQUNBLElBQUksaUJBQWlCLFFBQXJCO0FBQ0EsSUFBSSxrQkFBa0IsUUFBdEI7QUFDQSxJ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