webpackHotUpdate(5,{

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = __webpack_require__(95);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(162);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\About.js',
    _PropTypes$shape;

var _style = __webpack_require__(498);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(451);

var _Grid = __webpack_require__(499);

var _Grid2 = _interopRequireDefault(_Grid);

var _reactYoutube = __webpack_require__(800);

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _GameGrid = __webpack_require__(595);

var _GameGrid2 = _interopRequireDefault(_GameGrid);

var _Icon = __webpack_require__(509);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(531);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _materialUiToggleIcon = __webpack_require__(532);

var _materialUiToggleIcon2 = _interopRequireDefault(_materialUiToggleIcon);

var _PlayArrow = __webpack_require__(529);

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Pause = __webpack_require__(530);

var _Pause2 = _interopRequireDefault(_Pause);

var _boardNames = __webpack_require__(528);

var _helpers = __webpack_require__(596);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var beaconCoordinates = __webpack_require__(814);
var beehiveCoordinates = __webpack_require__(815);
var blinkerCoordinates = __webpack_require__(816);
var blockCoordinates = __webpack_require__(817);
var boatCoordinates = __webpack_require__(818);
var gliderCoordinates = __webpack_require__(819);
var gunCoordinates = __webpack_require__(820);
var loafCoordinates = __webpack_require__(821);
var lspaceshipCoordinates = __webpack_require__(822);
var oscGlassesCoordinates = __webpack_require__(823);
var oscQuadCoordinates = __webpack_require__(824);
var toadCoordinates = __webpack_require__(825);

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
        // for(let name in parameters){
        //     console.log(parameters[name])
        // }
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
        // let l = 
        // console.log(l)
        // let beaconParameters = {

        // }
        // let beehiveParameters = 
        // let blinkerParameters = 
        // let blockParameters = 
        // let boatParameters = 
        // let gliderParameters = 
        // let spaceshipParameters = 
        // let loafParameters = 
        // let glassesParameters = 
        // let quadParameters = 
        // let toadParameters = 
        // this.examples[boardNames.BEACON] = {
        //     grid = 
        // }
        // this.examples[boardNames.BEACON].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.BEEHIVE].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.BLINKER].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.BLOCK].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.BOAT].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.GLIDER].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.GUN].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.LOAF].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.SPACESHIP].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.GLASSES].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.QUAD].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // this.examples[boardNames.TOAD].grid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // const blockGrid = new GameGrid(boardNames.BLOCK, 4, 4, 12);
        // const boatGrid = new GameGrid(boardNames.BOAT, 5, 5, 12);
        // const loafGrid = new GameGrid(boardNames.LOAF, 6, 6, 12);
        // const beehiveGrid = new GameGrid(boardNames.BEEHIVE, 6, 5, 12); 
        // const blinkerGrid = new GameGrid(boardNames.BLINKER, 5, 5, 12);
        // const beaconGrid = new GameGrid(boardNames.BEACON, 6, 6, 12);
        // const toadGrid = new GameGrid(boardNames.TOAD, 6, 6, 12);   
        // const gliderGrid = new GameGrid(boardNames.GLIDER, 10, 10, 12);
        // const spaceshipGrid = new GameGrid(boardNames.SPACESHIP, 12, 12, 12);
        // const gunIsOpenUniv = true;
        // const gunGrid = new GameGrid(boardNames.GUN, 40, 20, 12,gunIsOpenUniv);


        //       let shift = [1,1]
        //       const boatCellsList = createCellsList(boatCoordinates,shift);
        //       // console.log(blockCoordinatesList)
        // const blockCellsList = [[1,1],[1,2],[2,1],[2,2]];
        //       // let shift = [1,1]
        //       const blockCellsList = createCellsList(blockCoordinates,shift);
        //       // let shift = [1,1]
        //       const beehiveCellsList = createCellsList(beehiveCoordinates,shift);
        //       // let shift = [1,1]
        //       const loafCellsList = createCellsList(loafCoordinates,shift);
        //       // let shift = [1,1]
        //       const beaconCellsList = createCellsList(beaconCoordinates,shift);
        //       shift = [2,1]
        //       const blinkerCellsList = createCellsList(blinkerCoordinates,shift);        
        // const toadCellsList = createCellsList(toadCoordinates,shift);        
        //       // shift = [3,3]

        //       const boatCellsList = [[1,1],[1,2],[2,1],[2,3],[3,2]];
        // const loafCellsList = [[2,1],[1,3],[1,2],[2,4],[3,2],[4,3],[3,4]];
        // const beehiveCellsList = [[1,2],[1,3],[2,1],[2,4],[3,2],[3,3]];
        // const blinkerCellsList = [[2,1],[2,2],[2,3]];
        // const beaconCellsList = [[1,1],[1,2],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4]];
        // const toadCellsList = [[2,2],[2,3],[2,4],[3,1],[3,2],[3,3]];
        // const gliderCellsList = [[5,4],[4,3],[3,5],[4,5],[5,5]];
        // const spaceshipCellsList = [[5,3],[7,3],[4,4],[4,5],[4,6],[4,7],[5,7],[6,7],[7,6]];
        // const gunCellsList = [[5,1],[6,1],[5,2],[6,2],[5,11],[6,11],[7,11],[4,12],[8,12],[3,13],[9,13],[3,14],[9,14],
        // [6,15],[4,16],[8,16],[5,17],[6,17],[7,17],[6,18],[3,21],[4,21],[5,21],[3,22],[4,22],[5,22],[2,23],[6,23],[1,25],[2,25],
        // [6,25],[7,25],[3,35],[4,35],[3,36],[4,36]];
        // this.patterns = {};
        // for(let name in names){
        //     this.examples[name].cells = shiftToCenter(coordinates[name], this.examples[name].grid.height,this.examples[name].grid.width)
        // }
        // console.log(this.examples[boardNames.BLOCK].cells)
        // Object.keys(coordinates).forEach(name => {
        // this.examples[boardNames.BLOCK].cells = shiftToCenter(coordinates[boardNames.BLOCK], this.examples[boardNames.BLOCK].grid.height,this.examples[boardNames.BLOCK].grid.width)
        // })
        console.log(_this.examples[_boardNames.boardNames.BLOCK]);
        _this.motionPatternList = [];
        _this.rAF = null;

        // this.block = patternBoard(blockGrid, blockCellsList);
        // this.boat = patternBoard(boatGrid, boatCellsList);
        // this.loaf = patternBoard(loafGrid, loafCellsList);
        // this.beehive = patternBoard(beehiveGrid, beehiveCellsList);
        // this.blinker = patternBoard(blinkerGrid, blinkerCellsList);
        // this.beacon = patternBoard(beaconGrid, beaconCellsList);
        // this.toad = patternBoard(toadGrid, toadCellsList);
        // this.glider = patternBoard(gliderGrid, gliderCellsList);
        // this.spaceship = patternBoard(spaceshipGrid, spaceshipCellsList);
        // this.gun = patternBoard(gunGrid, gunCellsList);
        //       this.boards = [
        //           this.block,
        //           this.boat,
        //           this.loaf,
        //           this.beehive,
        //           this.blinker,
        //           this.beacon,
        //           this.toad,
        //           this.glider,
        //           this.spaceship,
        //           this.gun,
        //           ];
        _this.interval = 300;

        _this.buttonColor = 'rgba(0, 0, 0, .7)';

        // this.blockWidth = this.getWidth(this.block.grid);
        // this.boatWidth = this.getWidth(this.boat.grid);
        // this.loafWidth = this.getWidth(this.loaf.grid);
        // this.beehiveWidth = this.getWidth(this.beehive.grid);
        // this.blinkerWidth = this.getWidth(this.blinker.grid);
        // this.beaconWidth = this.getWidth(this.beacon.grid);
        // this.toadWidth = this.getWidth(this.toad.grid);
        // this.gliderWidth = this.getWidth(this.glider.grid);
        // this.spaceshipWidth = this.getWidth(this.spaceship.grid);
        // this.gunWidth = this.getWidth(this.gun.grid);
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

                grid.makeBoard(grid.width, grid.height, grid.squareSize, ratio, canvas, cells);
                grid.update();
            }

            // this.block.grid.makeBoard(this.block.grid.width,this.block.grid.height,this.block.grid.squareSize,this.state.screen.ratio,this.patterns.block,this.block.cellsList,this.state.screen);
            //    this.block.grid.update();
            // this.boat.grid.makeBoard(this.boat.grid.width,this.boat.grid.height,this.boat.grid.squareSize,this.state.screen.ratio,this.patterns.boat,this.boat.cellsList,this.state.screen);
            //    this.boat.grid.update();
            // this.loaf.grid.makeBoard(this.loaf.grid.width,this.loaf.grid.height,this.loaf.grid.squareSize,this.state.screen.ratio,this.patterns.loaf,this.loaf.cellsList,this.state.screen);
            //    this.loaf.grid.update();
            // this.beehive.grid.makeBoard(this.beehive.grid.width,this.beehive.grid.height,this.beehive.grid.squareSize,this.state.screen.ratio,this.patterns.beehive,this.beehive.cellsList,this.state.screen);
            //    this.beehive.grid.update();
            //    this.blinker.grid.makeBoard(this.blinker.grid.width,this.blinker.grid.height,this.blinker.grid.squareSize,this.state.screen.ratio,this.patterns.blinker,this.blinker.cellsList);
            //    this.blinker.grid.update();
            // this.beacon.grid.makeBoard(this.beacon.grid.width,this.beacon.grid.height,this.beacon.grid.squareSize,this.state.screen.ratio,this.patterns.beacon,this.beacon.cellsList);
            //    this.beacon.grid.update();
            // this.toad.grid.makeBoard(this.toad.grid.width,this.toad.grid.height,this.toad.grid.squareSize,this.state.screen.ratio,this.patterns.toad,this.toad.cellsList);
            //    this.toad.grid.update();
            //  	this.glider.grid.makeBoard(this.glider.grid.width,this.glider.grid.height,this.glider.grid.squareSize,this.state.screen.ratio,this.patterns.glider,this.glider.cellsList);
            //    this.glider.grid.update();  
            //  	this.spaceship.grid.makeBoard(this.spaceship.grid.width,this.spaceship.grid.height,this.spaceship.grid.squareSize,this.state.screen.ratio,this.patterns.spaceship,this.spaceship.cellsList);
            //    this.spaceship.grid.update();  

            //  	this.gun.grid.makeBoard(this.gun.grid.width,this.gun.grid.height,this.gun.grid.squareSize,this.state.screen.ratio,this.patterns.gun,this.gun.cellsList);
            //    this.gun.grid.update();             	       
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
                    lineNumber: 419
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 421
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 423
                }
            }, ' '), _react2.default.createElement(_Grid2.default, { item: true, xs: 10, sm: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 425
                }
            }, _react2.default.createElement('p', { className: classes.intro + ' ' + classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 427
                }
            }, _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 428
                }
            }, 'The Game of Life'), ' is the best-known two-dimensional "', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/Cellular_automaton', target: '_blank', title: 'Cellular automaton', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 429
                }
            }, 'cellular automaton'), '", invented in 1970 by the British mathematician ', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/John_Horton_Conway', target: '_blank', title: 'John Conway', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 430
                }
            }, 'John Horton Conway'), '. The life is a cellular automaton, which is a model of a discrete abstract computational system, composed of a finite or infinite set of objects \u2013 "cells". The cell in the game of life has two states - \u201Calive\u201D and \u201Cdead\u201D, or "populated" and "unpopulated". The cells live on a two-dimensional grid and each cell has eight adjacent cells - "neighbors". All cells change their state simultaneously, according to update rules by taking into account the states of their neighbors.'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 438
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'R9Plq-D1gEk',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 439
                }
            }), 'John H. Conway on the creation of his Game of Life'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 448
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'CgOcEZinQ2I',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 449
                }
            }), 'Fragment from Stephen Hawking`s The Meaning of Life'), _react2.default.createElement('div', { className: classes.rulesPar, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 458
                }
            }, _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 459
                }
            }, 'Rules'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 462
                }
            }, 'Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:'), _react2.default.createElement('div', { className: classes.rules, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 467
                }
            }, _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 468
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 469
                }
            }, 'Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 470
                }
            }, 'Any live cell with two or three live neighbours lives on to the next generation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 471
                }
            }, 'Any live cell with more than three live neighbours dies, as if by overpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 472
                }
            }, 'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'))), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 475
                }
            }, 'The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.')), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 484
                }
            }, 'Examples of Patterns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 487
                }
            }, 'In order to simulate infinite grid on the game board and in the examples below (except for the gun pattern), cells that are situated on the edges of the boards are handled in a toroidal manner, i.e. lower neighbor of a cell situated on the bottom edge of board will be a cell from the top edge on the same column and a neighbor to the right of a cell situated on the right edge will be from the left edge.'), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 495
                }
            }, 'Still Life'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 498
                }
            }, 'Stable finite patterns.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 501
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 502
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 506
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
                    lineNumber: 507
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 516
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
                    lineNumber: 517
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 526
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
                    lineNumber: 527
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 536
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
                    lineNumber: 537
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 547
                }
            }, 'Oscillators'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 550
                }
            }, 'These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. The most common period-2 oscillators include:'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 554
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 555
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 558
                }
            }, _react2.default.createElement(BoardElement, {
                values: this.examples[_boardNames.boardNames.BLINKER],
                width: this.blinkerWidth,
                patternName: 'Blinker',
                stopped: this.props.stopped[this.blinker.grid.name],
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
                    lineNumber: 559
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 572
                }
            }, _react2.default.createElement(BoardElement, {
                values: this.examples[_boardNames.boardNames.BEACON],
                width: this.beaconWidth,
                patternName: 'Beacon',
                stopped: this.props.stopped[this.beacon.grid.name],
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
                    lineNumber: 573
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 586
                }
            }, _react2.default.createElement(BoardElement, {
                values: this.examples[_boardNames.boardNames.TOAD],
                width: this.toadWidth,
                patternName: 'Toad',
                stopped: this.props.stopped[this.toad.grid.name],
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
                    lineNumber: 587
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 601
                }
            }, 'Gliders and Spaceships'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 604
                }
            }, 'A spaceship is more complex oscillator, returning to the same configuration but shifted after a finite number of generations. The glider is a simple spaceship that has period 4, i.e. repeats every four generations, but moves diagonally one cell every four generations. Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. They each move in a straight line.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 611
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 612
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 615
                }
            }, _react2.default.createElement(BoardElement, {
                values: this.examples[_boardNames.boardNames.GLIDER],
                width: this.gliderWidth,
                patternName: 'Glider',
                stopped: this.props.stopped[this.glider.grid.name],
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
                    lineNumber: 616
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 629
                }
            }, _react2.default.createElement(BoardElement, {
                board: this.examples[_boardNames.boardNames.SPACESHIP],
                width: this.spaceshipWidth,
                patternName: 'Lightweight Spaceship',
                stopped: this.props.stopped[this.spaceship.grid.name],
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
                    lineNumber: 630
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 645
                }
            }, 'Guns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 648
                }
            }, 'Conway offered a prize for any example of patterns that grow forever. Conway\'s prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever. The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. Where these shuttles collide, instead of producing beehives, they produce a new glider. This glider moves away in time for the process to repeat itself 30 steps later.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 656
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 657
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 660
                }
            }, _react2.default.createElement(BoardElement, {
                values: this.examples[_boardNames.boardNames.GUN],
                patternName: 'The Gosper Glider Gun',
                stopped: this.props.stopped[this.gun.grid.name],
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
                    lineNumber: 661
                }
            })))), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 675
                }
            }, 'Origins'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 679
                }
            }, 'Conway was interested in a problem presented in the 1940s by mathematician ', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/John_von_Neumann', target: '_blank', title: 'John von Neumann', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 680
                }
            }, 'John von Neumann'), ', who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway\'s successful attempt to drastically simplify von Neumann\'s ideas.'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 688
                }
            }, 'The game made its first public appearance in the October 1970 issue of ', _react2.default.createElement('i', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 688
                }
            }, 'Scientific American'), ', in Martin Gardner\'s column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway\'s Game of Life. Gardner wrote:'), _react2.default.createElement('blockquote', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 693
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 694
                }
            }, 'The game made Conway instantly famous, but it also opened up a whole new field of mathematical research, the field of cellular automata\xA0... Because of Life\'s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called "simulation games" (games that resemble real life processes).'))), _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 705
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
            lineNumber: 743
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-3653595684' + ' ' + 'item',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 744
        }
    }, _react2.default.createElement('canvas', {
        ref: props.setCanvas
        // onClick={(e) => this.handleClick(e)}
        , className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 745
        }
    }), withButton ? _react2.default.createElement(_IconButton2.default, { className: 'button', onClick: props.handlePlayToggle, __source: {
            fileName: _jsxFileName,
            lineNumber: 751
        }
    }, _react2.default.createElement(_materialUiToggleIcon2.default, {
        on: stopped,
        onIcon: _react2.default.createElement(_PlayArrow2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 754
            }
        }),
        offIcon: _react2.default.createElement(_Pause2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 755
            }
        }),
        color: buttonColor,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 752
        }
    })) : _react2.default.createElement('div', {
        className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 761
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-3653595684',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 766
        }
    }, patternName)), _react2.default.createElement(_style2.default, {
        styleId: '3653595684',
        css: '.board{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:.7em;text-align:center;font-family:\'Open Sans\',sans-serif;}.item{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.button{width:35px;height:35px;}.icon{width:25px;height:25px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWt3QjJCLEFBRzhCLEFBT08sQUFHVCxBQUlBLFdBSEMsQUFJQSxZQUhoQixBQUtBLGlEQVRBLEVBUG1CLGVBQ0csa0JBQ2tCLG1DQUV4QyIsImZpbGUiOiJjb21wb25lbnRzXFxBYm91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XHJcbmltcG9ydCBHYW1lR3JpZCBmcm9tICcuLi9oZWxwZXJzL0dhbWVHcmlkJztcclxuaW1wb3J0IEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlSWNvbiBmcm9tICdtYXRlcmlhbC11aS10b2dnbGUtaWNvbic7XHJcbmltcG9ydCBQbGF5QXJyb3cgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvUGxheUFycm93JztcclxuaW1wb3J0IFBhdXNlIGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1BhdXNlJztcclxuaW1wb3J0IHtib2FyZE5hbWVzfSBmcm9tICcuLi9oZWxwZXJzL2JvYXJkTmFtZXMnXHJcbmltcG9ydCB7IHNoaWZ0VG9DZW50ZXIgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuXHJcbnZhciBiZWFjb25Db29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9iZWFjb24udHh0Jyk7XHJcbnZhciBiZWVoaXZlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmVlaGl2ZS50eHQnKTtcclxudmFyIGJsaW5rZXJDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibGlua2VyLnR4dCcpO1xyXG52YXIgYmxvY2tDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibG9jay50eHQnKTtcclxudmFyIGJvYXRDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ib2F0LnR4dCcpO1xyXG52YXIgZ2xpZGVyQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ2xpZGVyLnR4dCcpO1xyXG52YXIgZ3VuQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ3VuLnR4dCcpO1xyXG52YXIgbG9hZkNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2xvYWYudHh0Jyk7XHJcbnZhciBsc3BhY2VzaGlwQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvbHNwYWNlc2hpcC50eHQnKTtcclxudmFyIG9zY0dsYXNzZXNDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9vc2NHbGFzc2VzLnR4dCcpO1xyXG52YXIgb3NjUXVhZENvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL29zY1F1YWQudHh0Jyk7XHJcbnZhciB0b2FkQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9hZC50eHQnKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHRtYWluQ29udGVudDoge1xyXG5cdFx0bWFyZ2luVG9wOiA3NVxyXG5cdH0sXHJcbiAgICBydWxlczoge1xyXG4gICAgXHRiYWNrZ3JvdW5kQ29sb3I6J3JnYmEoMjQwLDI0OCwyNTUsLjcpJyxcclxuICAgIFx0XHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLCBcclxuICAgICAgICBmYWxsYmFja3M6e1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgICAgfSwgICAgIFx0XHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgIG1hcmdpblRvcDogNDBcclxuICAgIH0sXHJcbiAgICB2aWRlbzoge1xyXG4gICAgXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgXHRmb250RmFtaWx5OiAnT3BlbiBTYW5zJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sXHJcbiAgICBcdG1hcmdpblRvcDozMCxcclxuICAgIH0sXHJcbiAgICBib2FyZHNTZWN0aW9uOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBcdG1hcmdpblRvcDozMCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCBzcXVhcmVTaXplID0gMTI7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLkJFQUNPTl06IHtcclxuICAgICAgICAgICAgICAgIHc6IDYsXHJcbiAgICAgICAgICAgICAgICBoOiA2LCBcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmVhY29uQ29vcmRpbmF0ZXMsWzAsMF0pLCAgICBcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsICAgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlYWNvblwiLCAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkVFSElWRV06IHtcclxuICAgICAgICAgICAgICAgIHc6IDYsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChiZWVoaXZlQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlZWhpdmVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkxJTktFUl06IHtcclxuICAgICAgICAgICAgICAgIHc6IDUsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChibGlua2VyQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJsaW5rZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkxPQ0tdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA0LFxyXG4gICAgICAgICAgICAgICAgaDogNCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmxvY2tDb29yZGluYXRlcyxbMCwwXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmxvY2tcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQk9BVF06IHtcclxuICAgICAgICAgICAgICAgIHc6IDUsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChib2F0Q29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJvYXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuR0xJREVSXToge1xyXG4gICAgICAgICAgICAgICAgdzogMTAsXHJcbiAgICAgICAgICAgICAgICBoOiAxMCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoZ2xpZGVyQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdsaWRlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5HVU5dOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA0MCxcclxuICAgICAgICAgICAgICAgIGg6IDIwLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChndW5Db29yZGluYXRlcyxbMSwxXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRoZSBHb3NwZXIgR2xpZGVyIEd1blwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5MT0FGXToge1xyXG4gICAgICAgICAgICAgICAgdzogNixcclxuICAgICAgICAgICAgICAgIGg6IDYsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGxvYWZDb29yZGluYXRlcyxbMCwwXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTG9hZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5TUEFDRVNISVBdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiAxMixcclxuICAgICAgICAgICAgICAgIGg6IDEyLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChsc3BhY2VzaGlwQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpZ2h0d2VpZ2h0IFNwYWNlc2hpcFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5HTEFTU0VTXToge1xyXG4gICAgICAgICAgICAgICAgdzogMjAsXHJcbiAgICAgICAgICAgICAgICBoOiAxMyxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjR2xhc3Nlc0Nvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJHbGFzc2VzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLlFVQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA4LFxyXG4gICAgICAgICAgICAgICAgaDogOCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjUXVhZENvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJRdWFkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLlRPQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA2LFxyXG4gICAgICAgICAgICAgICAgaDogNixcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QodG9hZENvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUb2FkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocGFyYW1ldGVyc1tuYW1lXSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5leGFtcGxlcyA9IHt9O1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IG5ldyBHYW1lR3JpZChuYW1lLCBwYXJhbWV0ZXJzW25hbWVdLncsIHBhcmFtZXRlcnNbbmFtZV0uaCwgc3F1YXJlU2l6ZSwgIXBhcmFtZXRlcnNbbmFtZV0ud3JhcHBlZCksXHJcbiAgICAgICAgICAgICAgICBjZWxsczogbmFtZSA9PSBib2FyZE5hbWVzLkdVTiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbbmFtZV0uY29vcmRpbmF0ZXMgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0VG9DZW50ZXIocGFyYW1ldGVyc1tuYW1lXS5jb29yZGluYXRlcywgcGFyYW1ldGVyc1tuYW1lXS5oLCBwYXJhbWV0ZXJzW25hbWVdLncpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogcGFyYW1ldGVyc1tuYW1lXS5uYW1lLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWxvYWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICAgIHNjcmVlblNjYWxlOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCA/IDMgOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXS5jYW52YXNXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5leGFtcGxlc1tuYW1lXS5ncmlkKSBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGwgPSBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsKVxyXG4gICAgICAgIC8vIGxldCBiZWFjb25QYXJhbWV0ZXJzID0ge1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbGV0IGJlZWhpdmVQYXJhbWV0ZXJzID0gXHJcbiAgICAgICAgLy8gbGV0IGJsaW5rZXJQYXJhbWV0ZXJzID0gXHJcbiAgICAgICAgLy8gbGV0IGJsb2NrUGFyYW1ldGVycyA9IFxyXG4gICAgICAgIC8vIGxldCBib2F0UGFyYW1ldGVycyA9IFxyXG4gICAgICAgIC8vIGxldCBnbGlkZXJQYXJhbWV0ZXJzID0gXHJcbiAgICAgICAgLy8gbGV0IHNwYWNlc2hpcFBhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyBsZXQgbG9hZlBhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyBsZXQgZ2xhc3Nlc1BhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyBsZXQgcXVhZFBhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyBsZXQgdG9hZFBhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVBQ09OXSA9IHtcclxuICAgICAgICAvLyAgICAgZ3JpZCA9IFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVBQ09OXS5ncmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxPQ0ssIDQsIDQsIDEyKTtcclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVFSElWRV0uZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMT0NLLCA0LCA0LCAxMik7XHJcbiAgICAgICAgLy8gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMSU5LRVJdLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10uZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMT0NLLCA0LCA0LCAxMik7XHJcbiAgICAgICAgLy8gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJPQVRdLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HTElERVJdLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5MT0FGXS5ncmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxPQ0ssIDQsIDQsIDEyKTtcclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuU1BBQ0VTSElQXS5ncmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxPQ0ssIDQsIDQsIDEyKTtcclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xBU1NFU10uZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMT0NLLCA0LCA0LCAxMik7XHJcbiAgICAgICAgLy8gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlFVQURdLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXS5ncmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxPQ0ssIDQsIDQsIDEyKTtcclxuICAgICAgICAvLyBjb25zdCBibG9ja0dyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJvYXRHcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQk9BVCwgNSwgNSwgMTIpO1xyXG4gICAgICAgIC8vIGNvbnN0IGxvYWZHcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuTE9BRiwgNiwgNiwgMTIpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJlZWhpdmVHcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkVFSElWRSwgNiwgNSwgMTIpOyBcclxuICAgICAgICAvLyBjb25zdCBibGlua2VyR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMSU5LRVIsIDUsIDUsIDEyKTtcclxuICAgICAgICAvLyBjb25zdCBiZWFjb25HcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkVBQ09OLCA2LCA2LCAxMik7XHJcbiAgICAgICAgLy8gY29uc3QgdG9hZEdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5UT0FELCA2LCA2LCAxMik7ICAgXHJcbiAgICAgICAgLy8gY29uc3QgZ2xpZGVyR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkdMSURFUiwgMTAsIDEwLCAxMik7XHJcbiAgICAgICAgLy8gY29uc3Qgc3BhY2VzaGlwR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLlNQQUNFU0hJUCwgMTIsIDEyLCAxMik7XHJcbiAgICAgICAgLy8gY29uc3QgZ3VuSXNPcGVuVW5pdiA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc3QgZ3VuR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkdVTiwgNDAsIDIwLCAxMixndW5Jc09wZW5Vbml2KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAvLyAgICAgICBsZXQgc2hpZnQgPSBbMSwxXVxyXG4gIC8vICAgICAgIGNvbnN0IGJvYXRDZWxsc0xpc3QgPSBjcmVhdGVDZWxsc0xpc3QoYm9hdENvb3JkaW5hdGVzLHNoaWZ0KTtcclxuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhibG9ja0Nvb3JkaW5hdGVzTGlzdClcclxuXHRcdC8vIGNvbnN0IGJsb2NrQ2VsbHNMaXN0ID0gW1sxLDFdLFsxLDJdLFsyLDFdLFsyLDJdXTtcclxuICAvLyAgICAgICAvLyBsZXQgc2hpZnQgPSBbMSwxXVxyXG4gIC8vICAgICAgIGNvbnN0IGJsb2NrQ2VsbHNMaXN0ID0gY3JlYXRlQ2VsbHNMaXN0KGJsb2NrQ29vcmRpbmF0ZXMsc2hpZnQpO1xyXG4gIC8vICAgICAgIC8vIGxldCBzaGlmdCA9IFsxLDFdXHJcbiAgLy8gICAgICAgY29uc3QgYmVlaGl2ZUNlbGxzTGlzdCA9IGNyZWF0ZUNlbGxzTGlzdChiZWVoaXZlQ29vcmRpbmF0ZXMsc2hpZnQpO1xyXG4gIC8vICAgICAgIC8vIGxldCBzaGlmdCA9IFsxLDFdXHJcbiAgLy8gICAgICAgY29uc3QgbG9hZkNlbGxzTGlzdCA9IGNyZWF0ZUNlbGxzTGlzdChsb2FmQ29vcmRpbmF0ZXMsc2hpZnQpO1xyXG4gIC8vICAgICAgIC8vIGxldCBzaGlmdCA9IFsxLDFdXHJcbiAgLy8gICAgICAgY29uc3QgYmVhY29uQ2VsbHNMaXN0ID0gY3JlYXRlQ2VsbHNMaXN0KGJlYWNvbkNvb3JkaW5hdGVzLHNoaWZ0KTtcclxuICAvLyAgICAgICBzaGlmdCA9IFsyLDFdXHJcbiAgLy8gICAgICAgY29uc3QgYmxpbmtlckNlbGxzTGlzdCA9IGNyZWF0ZUNlbGxzTGlzdChibGlua2VyQ29vcmRpbmF0ZXMsc2hpZnQpOyAgICAgICAgXHJcblx0XHQvLyBjb25zdCB0b2FkQ2VsbHNMaXN0ID0gY3JlYXRlQ2VsbHNMaXN0KHRvYWRDb29yZGluYXRlcyxzaGlmdCk7ICAgICAgICBcclxuICAvLyAgICAgICAvLyBzaGlmdCA9IFszLDNdXHJcblxyXG4gIC8vICAgICAgIGNvbnN0IGJvYXRDZWxsc0xpc3QgPSBbWzEsMV0sWzEsMl0sWzIsMV0sWzIsM10sWzMsMl1dO1xyXG5cdFx0Ly8gY29uc3QgbG9hZkNlbGxzTGlzdCA9IFtbMiwxXSxbMSwzXSxbMSwyXSxbMiw0XSxbMywyXSxbNCwzXSxbMyw0XV07XHJcblx0XHQvLyBjb25zdCBiZWVoaXZlQ2VsbHNMaXN0ID0gW1sxLDJdLFsxLDNdLFsyLDFdLFsyLDRdLFszLDJdLFszLDNdXTtcclxuXHRcdC8vIGNvbnN0IGJsaW5rZXJDZWxsc0xpc3QgPSBbWzIsMV0sWzIsMl0sWzIsM11dO1xyXG5cdFx0Ly8gY29uc3QgYmVhY29uQ2VsbHNMaXN0ID0gW1sxLDFdLFsxLDJdLFsyLDFdLFsyLDJdLFszLDNdLFszLDRdLFs0LDNdLFs0LDRdXTtcclxuXHRcdC8vIGNvbnN0IHRvYWRDZWxsc0xpc3QgPSBbWzIsMl0sWzIsM10sWzIsNF0sWzMsMV0sWzMsMl0sWzMsM11dO1xyXG5cdFx0Ly8gY29uc3QgZ2xpZGVyQ2VsbHNMaXN0ID0gW1s1LDRdLFs0LDNdLFszLDVdLFs0LDVdLFs1LDVdXTtcclxuXHRcdC8vIGNvbnN0IHNwYWNlc2hpcENlbGxzTGlzdCA9IFtbNSwzXSxbNywzXSxbNCw0XSxbNCw1XSxbNCw2XSxbNCw3XSxbNSw3XSxbNiw3XSxbNyw2XV07XHJcblx0XHQvLyBjb25zdCBndW5DZWxsc0xpc3QgPSBbWzUsMV0sWzYsMV0sWzUsMl0sWzYsMl0sWzUsMTFdLFs2LDExXSxbNywxMV0sWzQsMTJdLFs4LDEyXSxbMywxM10sWzksMTNdLFszLDE0XSxbOSwxNF0sXHJcblx0XHQvLyBbNiwxNV0sWzQsMTZdLFs4LDE2XSxbNSwxN10sWzYsMTddLFs3LDE3XSxbNiwxOF0sWzMsMjFdLFs0LDIxXSxbNSwyMV0sWzMsMjJdLFs0LDIyXSxbNSwyMl0sWzIsMjNdLFs2LDIzXSxbMSwyNV0sWzIsMjVdLFxyXG5cdFx0Ly8gWzYsMjVdLFs3LDI1XSxbMywzNV0sWzQsMzVdLFszLDM2XSxbNCwzNl1dO1xyXG5cdFx0Ly8gdGhpcy5wYXR0ZXJucyA9IHt9O1xyXG4gICAgICAgIC8vIGZvcihsZXQgbmFtZSBpbiBuYW1lcyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZXhhbXBsZXNbbmFtZV0uY2VsbHMgPSBzaGlmdFRvQ2VudGVyKGNvb3JkaW5hdGVzW25hbWVdLCB0aGlzLmV4YW1wbGVzW25hbWVdLmdyaWQuaGVpZ2h0LHRoaXMuZXhhbXBsZXNbbmFtZV0uZ3JpZC53aWR0aClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5jZWxscylcclxuICAgICAgICAvLyBPYmplY3Qua2V5cyhjb29yZGluYXRlcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5jZWxscyA9IHNoaWZ0VG9DZW50ZXIoY29vcmRpbmF0ZXNbYm9hcmROYW1lcy5CTE9DS10sIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10uZ3JpZC5oZWlnaHQsdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5ncmlkLndpZHRoKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXSlcclxuXHRcdHRoaXMubW90aW9uUGF0dGVybkxpc3QgPSBbXTtcclxuXHRcdHRoaXMuckFGID0gbnVsbDtcclxuXHJcblx0XHQvLyB0aGlzLmJsb2NrID0gcGF0dGVybkJvYXJkKGJsb2NrR3JpZCwgYmxvY2tDZWxsc0xpc3QpO1xyXG5cdFx0Ly8gdGhpcy5ib2F0ID0gcGF0dGVybkJvYXJkKGJvYXRHcmlkLCBib2F0Q2VsbHNMaXN0KTtcclxuXHRcdC8vIHRoaXMubG9hZiA9IHBhdHRlcm5Cb2FyZChsb2FmR3JpZCwgbG9hZkNlbGxzTGlzdCk7XHJcblx0XHQvLyB0aGlzLmJlZWhpdmUgPSBwYXR0ZXJuQm9hcmQoYmVlaGl2ZUdyaWQsIGJlZWhpdmVDZWxsc0xpc3QpO1xyXG5cdFx0Ly8gdGhpcy5ibGlua2VyID0gcGF0dGVybkJvYXJkKGJsaW5rZXJHcmlkLCBibGlua2VyQ2VsbHNMaXN0KTtcclxuXHRcdC8vIHRoaXMuYmVhY29uID0gcGF0dGVybkJvYXJkKGJlYWNvbkdyaWQsIGJlYWNvbkNlbGxzTGlzdCk7XHJcblx0XHQvLyB0aGlzLnRvYWQgPSBwYXR0ZXJuQm9hcmQodG9hZEdyaWQsIHRvYWRDZWxsc0xpc3QpO1xyXG5cdFx0Ly8gdGhpcy5nbGlkZXIgPSBwYXR0ZXJuQm9hcmQoZ2xpZGVyR3JpZCwgZ2xpZGVyQ2VsbHNMaXN0KTtcclxuXHRcdC8vIHRoaXMuc3BhY2VzaGlwID0gcGF0dGVybkJvYXJkKHNwYWNlc2hpcEdyaWQsIHNwYWNlc2hpcENlbGxzTGlzdCk7XHJcblx0XHQvLyB0aGlzLmd1biA9IHBhdHRlcm5Cb2FyZChndW5HcmlkLCBndW5DZWxsc0xpc3QpO1xyXG4gIC8vICAgICAgIHRoaXMuYm9hcmRzID0gW1xyXG4gIC8vICAgICAgICAgICB0aGlzLmJsb2NrLFxyXG4gIC8vICAgICAgICAgICB0aGlzLmJvYXQsXHJcbiAgLy8gICAgICAgICAgIHRoaXMubG9hZixcclxuICAvLyAgICAgICAgICAgdGhpcy5iZWVoaXZlLFxyXG4gIC8vICAgICAgICAgICB0aGlzLmJsaW5rZXIsXHJcbiAgLy8gICAgICAgICAgIHRoaXMuYmVhY29uLFxyXG4gIC8vICAgICAgICAgICB0aGlzLnRvYWQsXHJcbiAgLy8gICAgICAgICAgIHRoaXMuZ2xpZGVyLFxyXG4gIC8vICAgICAgICAgICB0aGlzLnNwYWNlc2hpcCxcclxuICAvLyAgICAgICAgICAgdGhpcy5ndW4sXHJcbiAgLy8gICAgICAgICAgIF07XHJcblx0XHR0aGlzLmludGVydmFsPTMwMDtcclxuXHRcclxuXHRcdHRoaXMuYnV0dG9uQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNyknO1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5ibG9ja1dpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmJsb2NrLmdyaWQpO1xyXG4gICAgICAgIC8vIHRoaXMuYm9hdFdpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmJvYXQuZ3JpZCk7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FmV2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMubG9hZi5ncmlkKTtcclxuICAgICAgICAvLyB0aGlzLmJlZWhpdmVXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5iZWVoaXZlLmdyaWQpO1xyXG4gICAgICAgIC8vIHRoaXMuYmxpbmtlcldpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmJsaW5rZXIuZ3JpZCk7XHJcbiAgICAgICAgLy8gdGhpcy5iZWFjb25XaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5iZWFjb24uZ3JpZCk7XHJcbiAgICAgICAgLy8gdGhpcy50b2FkV2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMudG9hZC5ncmlkKTtcclxuICAgICAgICAvLyB0aGlzLmdsaWRlcldpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmdsaWRlci5ncmlkKTtcclxuICAgICAgICAvLyB0aGlzLnNwYWNlc2hpcFdpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLnNwYWNlc2hpcC5ncmlkKTtcclxuICAgICAgICAvLyB0aGlzLmd1bldpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmd1bi5ncmlkKTtcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQgPSAoc3RvcHBlZCwgbmFtZSkgPT4gcHJvcHMuc2V0U3RvcHBlZChzdG9wcGVkLCBuYW1lKTtcclxuXHR9XHJcblxyXG4gICAgZ2V0V2lkdGgoZ3JpZCl7XHJcbiAgICAgICAgbGV0IHtzY3JlZW59ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQge3dpZHRoLCBzcXVhcmVTaXplfSA9IGdyaWQ7XHJcbiAgICAgICAgbGV0IHcgPSAoKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplICogc2NyZWVuLndpZHRoLzEwMCAqIC43KS9zY3JlZW4uc2NyZWVuU2NhbGU7XHJcbiAgICAgICAgcmV0dXJuIHcgPiBzY3JlZW4ud2lkdGggKiAuNiA/IHNjcmVlbi53aWR0aCAqIC42IDogdztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQbGF5VG9nZ2xlKHBhdHRlcm4pe1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RvcHBlZFtwYXR0ZXJuLmdyaWQubmFtZV0pe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KHBhdHRlcm4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3AocGF0dGVybik7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcblxyXG4gICAgc3RvcChwYXR0ZXJuKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZCh0cnVlLCBwYXR0ZXJuLmdyaWQubmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubW90aW9uUGF0dGVybkxpc3QuaW5kZXhPZihwYXR0ZXJuKTtcclxuICAgICAgICAgICAgdGhpcy5tb3Rpb25QYXR0ZXJuTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vdGlvblBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQocGF0dGVybil7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZChmYWxzZSwgcGF0dGVybi5ncmlkLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdGlvblBhdHRlcm5MaXN0LnB1c2gocGF0dGVybik7XHJcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW90aW9uUGF0dGVybkxpc3QubGVuZ3RoID09PSAxKXtcclxuICAgICAgICAgICAgXHR0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdHVwZGF0ZSgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWx0YSA+IHRoaXMuaW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZGVsdGEgJSB0aGlzLmludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdGlvblBhdHRlcm5MaXN0LmZvckVhY2gocCA9PiBwLmdyaWQudXBkYXRlKCkpXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT57dGhpcy51cGRhdGUoKX0pOyBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0uZ3JpZC5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpe1xyXG5cdFx0dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0uY2FudmFzV2lkdGggPSB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5jYW52YXNXaWR0aCA+IHRoaXMuc3RhdGUuc2NyZWVuLndpZHRoICogLjYgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2NyZWVuLndpZHRoICogLjYgOiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5jYW52YXNXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLnN0YXRlLnNjcmVlbi5yYXRpb1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLmV4YW1wbGVzKXtcclxuICAgICAgICAgICAgbGV0IHtncmlkLCBjZWxscywgY2FudmFzfSA9IHRoaXMuZXhhbXBsZXNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBncmlkLm1ha2VCb2FyZChncmlkLndpZHRoLCBncmlkLmhlaWdodCwgZ3JpZC5zcXVhcmVTaXplLCByYXRpbywgY2FudmFzLCBjZWxscyk7XHJcbiAgICAgICAgICAgIGdyaWQudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0Ly8gdGhpcy5ibG9jay5ncmlkLm1ha2VCb2FyZCh0aGlzLmJsb2NrLmdyaWQud2lkdGgsdGhpcy5ibG9jay5ncmlkLmhlaWdodCx0aGlzLmJsb2NrLmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmJsb2NrLHRoaXMuYmxvY2suY2VsbHNMaXN0LHRoaXMuc3RhdGUuc2NyZWVuKTtcclxuICAgICAvLyAgICB0aGlzLmJsb2NrLmdyaWQudXBkYXRlKCk7XHJcbiAgICBcdC8vIHRoaXMuYm9hdC5ncmlkLm1ha2VCb2FyZCh0aGlzLmJvYXQuZ3JpZC53aWR0aCx0aGlzLmJvYXQuZ3JpZC5oZWlnaHQsdGhpcy5ib2F0LmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmJvYXQsdGhpcy5ib2F0LmNlbGxzTGlzdCx0aGlzLnN0YXRlLnNjcmVlbik7XHJcbiAgICAgLy8gICAgdGhpcy5ib2F0LmdyaWQudXBkYXRlKCk7XHJcbiAgICBcdC8vIHRoaXMubG9hZi5ncmlkLm1ha2VCb2FyZCh0aGlzLmxvYWYuZ3JpZC53aWR0aCx0aGlzLmxvYWYuZ3JpZC5oZWlnaHQsdGhpcy5sb2FmLmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmxvYWYsdGhpcy5sb2FmLmNlbGxzTGlzdCx0aGlzLnN0YXRlLnNjcmVlbik7XHJcbiAgICAgLy8gICAgdGhpcy5sb2FmLmdyaWQudXBkYXRlKCk7XHJcbiAgICBcdC8vIHRoaXMuYmVlaGl2ZS5ncmlkLm1ha2VCb2FyZCh0aGlzLmJlZWhpdmUuZ3JpZC53aWR0aCx0aGlzLmJlZWhpdmUuZ3JpZC5oZWlnaHQsdGhpcy5iZWVoaXZlLmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmJlZWhpdmUsdGhpcy5iZWVoaXZlLmNlbGxzTGlzdCx0aGlzLnN0YXRlLnNjcmVlbik7XHJcbiAgICAgLy8gICAgdGhpcy5iZWVoaXZlLmdyaWQudXBkYXRlKCk7XHJcbiAgICAgLy8gICAgdGhpcy5ibGlua2VyLmdyaWQubWFrZUJvYXJkKHRoaXMuYmxpbmtlci5ncmlkLndpZHRoLHRoaXMuYmxpbmtlci5ncmlkLmhlaWdodCx0aGlzLmJsaW5rZXIuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuYmxpbmtlcix0aGlzLmJsaW5rZXIuY2VsbHNMaXN0KTtcclxuICAgICAvLyAgICB0aGlzLmJsaW5rZXIuZ3JpZC51cGRhdGUoKTtcclxuICAgIFx0Ly8gdGhpcy5iZWFjb24uZ3JpZC5tYWtlQm9hcmQodGhpcy5iZWFjb24uZ3JpZC53aWR0aCx0aGlzLmJlYWNvbi5ncmlkLmhlaWdodCx0aGlzLmJlYWNvbi5ncmlkLnNxdWFyZVNpemUsdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8sdGhpcy5wYXR0ZXJucy5iZWFjb24sdGhpcy5iZWFjb24uY2VsbHNMaXN0KTtcclxuICAgICAvLyAgICB0aGlzLmJlYWNvbi5ncmlkLnVwZGF0ZSgpO1xyXG4gICAgXHQvLyB0aGlzLnRvYWQuZ3JpZC5tYWtlQm9hcmQodGhpcy50b2FkLmdyaWQud2lkdGgsdGhpcy50b2FkLmdyaWQuaGVpZ2h0LHRoaXMudG9hZC5ncmlkLnNxdWFyZVNpemUsdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8sdGhpcy5wYXR0ZXJucy50b2FkLHRoaXMudG9hZC5jZWxsc0xpc3QpO1xyXG4gICAgIC8vICAgIHRoaXMudG9hZC5ncmlkLnVwZGF0ZSgpO1xyXG4gICAgIC8vICBcdHRoaXMuZ2xpZGVyLmdyaWQubWFrZUJvYXJkKHRoaXMuZ2xpZGVyLmdyaWQud2lkdGgsdGhpcy5nbGlkZXIuZ3JpZC5oZWlnaHQsdGhpcy5nbGlkZXIuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuZ2xpZGVyLHRoaXMuZ2xpZGVyLmNlbGxzTGlzdCk7XHJcbiAgICAgLy8gICAgdGhpcy5nbGlkZXIuZ3JpZC51cGRhdGUoKTsgIFxyXG4gICAgIC8vICBcdHRoaXMuc3BhY2VzaGlwLmdyaWQubWFrZUJvYXJkKHRoaXMuc3BhY2VzaGlwLmdyaWQud2lkdGgsdGhpcy5zcGFjZXNoaXAuZ3JpZC5oZWlnaHQsdGhpcy5zcGFjZXNoaXAuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuc3BhY2VzaGlwLHRoaXMuc3BhY2VzaGlwLmNlbGxzTGlzdCk7XHJcbiAgICAgLy8gICAgdGhpcy5zcGFjZXNoaXAuZ3JpZC51cGRhdGUoKTsgIFxyXG4gICAgICAgIFxyXG4gICAgIC8vICBcdHRoaXMuZ3VuLmdyaWQubWFrZUJvYXJkKHRoaXMuZ3VuLmdyaWQud2lkdGgsdGhpcy5ndW4uZ3JpZC5oZWlnaHQsdGhpcy5ndW4uZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuZ3VuLHRoaXMuZ3VuLmNlbGxzTGlzdCk7XHJcbiAgICAgLy8gICAgdGhpcy5ndW4uZ3JpZC51cGRhdGUoKTsgICAgICAgICAgICAgXHQgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpOyAgICBcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSwgbnVsbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkgeyAgICBcclxuICAgIFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcclxuICAgIFx0cmV0dXJuKFxyXG4gICAgXHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgICAgICBcclxuICAgIFx0ICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdCAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0gPiA8L0dyaWQ+XHJcbiAgICBcdCAgICBcclxuICAgIFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfSAgc209ezh9ID5cclxuICAgIFx0ICAgIFxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaW50cm99ICR7Y2xhc3Nlcy50ZXh0fWB9PlxyXG4gICAgXHQgICAgXHQ8c3Ryb25nPlRoZSBHYW1lIG9mIExpZmU8L3N0cm9uZz4gaXMgdGhlIGJlc3Qta25vd24gdHdvLWRpbWVuc2lvbmFsICBcclxuICAgICAgICAgICAgICAgIFwiPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbGx1bGFyX2F1dG9tYXRvblwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiQ2VsbHVsYXIgYXV0b21hdG9uXCI+Y2VsbHVsYXIgYXV0b21hdG9uPC9hPlwiLCBcclxuICAgICAgICAgICAgICAgIGludmVudGVkIGluIDE5NzAgYnkgdGhlIEJyaXRpc2ggbWF0aGVtYXRpY2lhbiA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSm9obl9Ib3J0b25fQ29ud2F5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJKb2huIENvbndheVwiPkpvaG4gSG9ydG9uIENvbndheTwvYT4uIFxyXG4gICAgICAgICAgICAgICAgVGhlIGxpZmUgaXMgYSBjZWxsdWxhciBhdXRvbWF0b24sIHdoaWNoIGlzIGEgbW9kZWwgb2YgYSBkaXNjcmV0ZSBhYnN0cmFjdCBjb21wdXRhdGlvbmFsIHN5c3RlbSwgXHJcbiAgICAgICAgICAgICAgICBjb21wb3NlZCBvZiBhIGZpbml0ZSBvciBpbmZpbml0ZSBzZXQgb2Ygb2JqZWN0cyDigJMgXCJjZWxsc1wiLiBUaGUgY2VsbCBpbiB0aGUgZ2FtZSBvZiBsaWZlIGhhcyB0d28gc3RhdGVzIC0gXHJcbiAgICAgICAgICAgICAgICDigJxhbGl2ZeKAnSBhbmQg4oCcZGVhZOKAnSwgb3IgXCJwb3B1bGF0ZWRcIiBhbmQgXCJ1bnBvcHVsYXRlZFwiLiBUaGUgY2VsbHMgbGl2ZSBvbiBhIHR3by1kaW1lbnNpb25hbCBncmlkIGFuZCBlYWNoIGNlbGwgXHJcbiAgICAgICAgICAgICAgICBoYXMgZWlnaHQgYWRqYWNlbnQgY2VsbHMgLSBcIm5laWdoYm9yc1wiLiBBbGwgY2VsbHMgY2hhbmdlIHRoZWlyIHN0YXRlIHNpbXVsdGFuZW91c2x5LCBhY2NvcmRpbmcgdG8gdXBkYXRlIFxyXG4gICAgICAgICAgICAgICAgcnVsZXMgYnkgdGFraW5nIGludG8gYWNjb3VudCB0aGUgc3RhdGVzIG9mIHRoZWlyIG5laWdoYm9ycy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHRcclxuICAgIFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxyXG4gICAgICAgICAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgICAgICAgICAgdmlkZW9JZD1cIlI5UGxxLUQxZ0VrXCIgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgb3B0cz17e3dpZHRoOicxMDAlJywgcGxheWVyVmFyczoge3Nob3dpbmZvOjAsIHJlbDowfX19ICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBKb2huIEguIENvbndheSBvbiB0aGUgY3JlYXRpb24gb2YgaGlzIEdhbWUgb2YgTGlmZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxyXG4gICAgICAgICAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgICAgICAgICAgdmlkZW9JZD1cIkNnT2NFWmluUTJJXCIgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgb3B0cz17e3dpZHRoOicxMDAlJywgcGxheWVyVmFyczoge3Nob3dpbmZvOjAsIHJlbDowfX19ICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBGcmFnbWVudCBmcm9tIFN0ZXBoZW4gSGF3a2luZ2BzIFRoZSBNZWFuaW5nIG9mIExpZmVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucnVsZXNQYXJ9PlxyXG4gICAgXHQgICAgXHQ8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0UnVsZXNcclxuICAgIFx0ICAgIFx0PC9oMj5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHQgICAgXHRFdmVyeSBjZWxsIGludGVyYWN0cyB3aXRoIGl0cyBlaWdodCBuZWlnaGJvdXJzLCBcclxuICAgIFx0ICAgIFx0d2hpY2ggYXJlIHRoZSBjZWxscyB0aGF0IGFyZSBob3Jpem9udGFsbHksIHZlcnRpY2FsbHksIG9yIGRpYWdvbmFsbHkgYWRqYWNlbnQuIFxyXG4gICAgXHQgICAgXHRBdCBlYWNoIHN0ZXAgaW4gdGltZSwgdGhlIGZvbGxvd2luZyB0cmFuc2l0aW9ucyBvY2N1cjpcclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ydWxlc30+XHJcbiAgICBcdCAgICBcdDx1bD5cclxuICAgIFx0XHRcdFx0PGxpPkFueSBsaXZlIGNlbGwgd2l0aCBmZXdlciB0aGFuIHR3byBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgY2F1c2VkIGJ5IHVuZGVycG9wdWxhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIHR3byBvciB0aHJlZSBsaXZlIG5laWdoYm91cnMgbGl2ZXMgb24gdG8gdGhlIG5leHQgZ2VuZXJhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIG1vcmUgdGhhbiB0aHJlZSBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgYnkgb3ZlcnBvcHVsYXRpb24uPC9saT5cclxuICAgIFx0XHRcdFx0PGxpPkFueSBkZWFkIGNlbGwgd2l0aCBleGFjdGx5IHRocmVlIGxpdmUgbmVpZ2hib3VycyBiZWNvbWVzIGEgbGl2ZSBjZWxsLCBhcyBpZiBieSByZXByb2R1Y3Rpb24uPC9saT5cclxuICAgIFx0XHRcdDwvdWw+XHJcbiAgICBcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0XHRcdFRoZSBpbml0aWFsIHBhdHRlcm4gY29uc3RpdHV0ZXMgdGhlIHNlZWQgb2YgdGhlIHN5c3RlbS4gXHJcbiAgICBcdFx0XHRUaGUgZmlyc3QgZ2VuZXJhdGlvbiBpcyBjcmVhdGVkIGJ5IGFwcGx5aW5nIHRoZSBhYm92ZSBydWxlcyBcclxuICAgIFx0XHRcdHNpbXVsdGFuZW91c2x5IHRvIGV2ZXJ5IGNlbGwgaW4gdGhlIHNlZWQgLSBiaXJ0aHMgYW5kIGRlYXRocyBvY2N1ciBzaW11bHRhbmVvdXNseSwgXHJcbiAgICBcdFx0XHRhbmQgdGhlIGRpc2NyZXRlIG1vbWVudCBhdCB3aGljaCB0aGlzIGhhcHBlbnMgaXMgc29tZXRpbWVzIGNhbGxlZCBhIHRpY2sgXHJcbiAgICBcdFx0XHQoaW4gb3RoZXIgd29yZHMsIGVhY2ggZ2VuZXJhdGlvbiBpcyBhIHB1cmUgZnVuY3Rpb24gb2YgdGhlIHByZWNlZGluZyBvbmUpLiBcclxuICAgIFx0XHRcdFRoZSBydWxlcyBjb250aW51ZSB0byBiZSBhcHBsaWVkIHJlcGVhdGVkbHkgdG8gY3JlYXRlIGZ1cnRoZXIgZ2VuZXJhdGlvbnMuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PC9kaXY+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRFeGFtcGxlcyBvZiBQYXR0ZXJuc1xyXG4gICAgXHQgICAgXHQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgSW4gb3JkZXIgdG8gc2ltdWxhdGUgaW5maW5pdGUgZ3JpZCBvbiB0aGUgZ2FtZSBib2FyZCBhbmQgaW4gdGhlIGV4YW1wbGVzIGJlbG93IChleGNlcHQgZm9yIHRoZSBndW4gcGF0dGVybiksIFxyXG4gICAgICAgICAgICAgICAgY2VsbHMgdGhhdCBhcmUgc2l0dWF0ZWQgb24gdGhlIGVkZ2VzIG9mIHRoZSBib2FyZHMgYXJlIGhhbmRsZWQgaW4gYSB0b3JvaWRhbCBtYW5uZXIsIFxyXG4gICAgICAgICAgICAgICAgaS5lLiBsb3dlciBuZWlnaGJvciBvZiBhIGNlbGwgc2l0dWF0ZWQgb24gdGhlIGJvdHRvbSBlZGdlIG9mIGJvYXJkIHdpbGwgYmUgYSBjZWxsIGZyb20gXHJcbiAgICAgICAgICAgICAgICB0aGUgdG9wIGVkZ2Ugb24gdGhlIHNhbWUgY29sdW1uIGFuZCBhIG5laWdoYm9yIHRvIHRoZSByaWdodCBvZiBhIGNlbGwgc2l0dWF0ZWQgb24gdGhlIHJpZ2h0IFxyXG4gICAgICAgICAgICAgICAgZWRnZSB3aWxsIGJlIGZyb20gdGhlIGxlZnQgZWRnZS4gXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgXHQgICAgXHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0U3RpbGwgTGlmZVxyXG4gICAgXHQgICAgXHQ8L2g0PlxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdFN0YWJsZSBmaW5pdGUgcGF0dGVybnMuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9ID5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkxPQ0tdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQk9BVF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQk9BVF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJPQVRdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuTE9BRl0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuTE9BRl0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkxPQUZdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFRUhJVkVdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFRUhJVkVdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUVISVZFXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0ICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgT3NjaWxsYXRvcnMgXHJcbiAgICBcdFx0ICAgIDwvaDQ+XHJcbiAgICBcdFx0ICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0ICAgIFx0VGhlc2UgcGF0dGVybnMgcmVwZWF0IHRoZWlyIGNvbmZpZ3VyYXRpb24gcGVyaW9kaWNhbGx5IGFuZCBpbmZpbml0ZWx5LiBUaGUgYmFzaWMgb3NjaWxsYXRvcnMgaGF2ZSBwZXJpb2RzIG9mIHR3byBvciB0aHJlZSB0aWNrcy4gXHJcbiAgICAgICAgICAgICAgICBUaGUgbW9zdCBjb21tb24gcGVyaW9kLTIgb3NjaWxsYXRvcnMgaW5jbHVkZTpcclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG4gICAgXHQgICAgXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17OH0+XHJcbiAgICBcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMSU5LRVJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5ibGlua2VyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IFwiQmxpbmtlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLmJsaW5rZXIuZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTElOS0VSXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTElOS0VSXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUFDT05dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5iZWFjb25XaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gXCJCZWFjb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbdGhpcy5iZWFjb24uZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUFDT05dLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFQUNPTl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlRPQURdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy50b2FkV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IFwiVG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLnRvYWQuZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgR2xpZGVycyBhbmQgU3BhY2VzaGlwc1xyXG4gICAgXHRcdCAgICA8L2g0PlxyXG4gICAgXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdEEgc3BhY2VzaGlwIGlzIG1vcmUgY29tcGxleCBvc2NpbGxhdG9yLCByZXR1cm5pbmcgdG8gdGhlIHNhbWUgY29uZmlndXJhdGlvbiBidXQgc2hpZnRlZCBhZnRlciBhIGZpbml0ZSBudW1iZXIgb2YgZ2VuZXJhdGlvbnMuIFxyXG4gICAgXHQgICAgXHRUaGUgZ2xpZGVyIGlzIGEgc2ltcGxlIHNwYWNlc2hpcCB0aGF0IGhhcyBwZXJpb2QgNCwgaS5lLiByZXBlYXRzIGV2ZXJ5IGZvdXIgZ2VuZXJhdGlvbnMsIGJ1dCBcclxuICAgICAgICAgICAgICAgIG1vdmVzIGRpYWdvbmFsbHkgb25lIGNlbGwgZXZlcnkgZm91ciBnZW5lcmF0aW9ucy5cclxuICAgIFx0ICAgIFx0T3RoZXIgZXhhbXBsZXMgb2Ygc2ltcGxlIHNwYWNlc2hpcHMgaW5jbHVkZSBsaWdodHdlaWdodCwgbWVkaXVtIHdlaWdodCwgYW5kIGhlYXZ5d2VpZ2h0IHNwYWNlc2hpcHMuIFxyXG4gICAgXHQgICAgXHRUaGV5IGVhY2ggbW92ZSBpbiBhIHN0cmFpZ2h0IGxpbmUuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9PlxyXG4gICAgXHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xJREVSXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZ2xpZGVyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IFwiR2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW3RoaXMuZ2xpZGVyLmdyaWQubmFtZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHt0aGlzLmJ1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xJREVSXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HTElERVJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG5cclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5TUEFDRVNISVBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5zcGFjZXNoaXBXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gXCJMaWdodHdlaWdodCBTcGFjZXNoaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbdGhpcy5zcGFjZXNoaXAuZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5TUEFDRVNISVBdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlNQQUNFU0hJUF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHQgICAgPC9HcmlkPlx0ICAgXHJcbiAgICBcdFx0ICAgIDwvZGl2PiBcdFxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIEd1bnNcclxuICAgIFx0XHQgICAgPC9oND5cclxuICAgIFx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHRcdFx0Q29ud2F5IG9mZmVyZWQgYSBwcml6ZSBmb3IgYW55IGV4YW1wbGUgb2YgcGF0dGVybnMgdGhhdCBncm93IGZvcmV2ZXIuIFxyXG4gICAgXHRcdFx0Q29ud2F5J3MgcHJpemUgd2FzIGNvbGxlY3RlZCBzb29uIGFmdGVyIGl0cyBhbm5vdW5jZW1lbnQsIHdoZW4gdHdvIGRpZmZlcmVudCB3YXlzIHdlcmUgZGlzY292ZXJlZCBmb3IgZGVzaWduaW5nIGEgcGF0dGVybiB0aGF0IGdyb3dzIGZvcmV2ZXIuXHJcblxyXG4gICAgXHRcdFx0VGhlIGZpcnN0IG9mIHRoZXNlIHBhdHRlcm5zIGlzIHRoZSBwZXJpb2QtMzAgZ2xpZGVyIGd1biwgd2hpY2ggaXMgYmFzZWQgb24gdGhlIGludGVyYWN0aW9uIG9mIHR3byBxdWVlbiBiZWUgc2h1dHRsZXMuIFxyXG4gICAgXHRcdFx0V2hlcmUgdGhlc2Ugc2h1dHRsZXMgY29sbGlkZSwgaW5zdGVhZCBvZiBwcm9kdWNpbmcgYmVlaGl2ZXMsIHRoZXkgcHJvZHVjZSBhIG5ldyBnbGlkZXIuIFxyXG4gICAgXHRcdFx0VGhpcyBnbGlkZXIgbW92ZXMgYXdheSBpbiB0aW1lIGZvciB0aGUgcHJvY2VzcyB0byByZXBlYXQgaXRzZWxmIDMwIHN0ZXBzIGxhdGVyLlxyXG4gICAgXHRcdFx0PC9wPlxyXG4gICAgXHRcdFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz17MTJ9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gXCJUaGUgR29zcGVyIEdsaWRlciBHdW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbdGhpcy5ndW4uZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcblxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHRcclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRPcmlnaW5zXHJcbiAgICBcdCAgICBcdDwvaDI+XHJcblxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+Q29ud2F5IHdhcyBpbnRlcmVzdGVkIGluIGEgcHJvYmxlbSBwcmVzZW50ZWQgaW4gdGhlIDE5NDBzIGJ5IFxyXG4gICAgXHQgICAgXHRtYXRoZW1hdGljaWFuIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Kb2huX3Zvbl9OZXVtYW5uXCIgIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiSm9obiB2b24gTmV1bWFublwiPkpvaG4gdm9uIE5ldW1hbm48L2E+LCBcclxuICAgIFx0ICAgIFx0d2hvIGF0dGVtcHRlZCB0byBmaW5kIGEgaHlwb3RoZXRpY2FsIG1hY2hpbmUgdGhhdCBjb3VsZCBidWlsZCBjb3BpZXMgb2YgaXRzZWxmIFxyXG4gICAgXHQgICAgXHRhbmQgc3VjY2VlZGVkIHdoZW4gaGUgZm91bmQgYSBtYXRoZW1hdGljYWwgbW9kZWwgZm9yIHN1Y2ggYSBtYWNoaW5lIHdpdGggdmVyeSBcclxuICAgIFx0ICAgIFx0Y29tcGxpY2F0ZWQgcnVsZXMgb24gYSByZWN0YW5ndWxhciBncmlkLiBUaGUgR2FtZSBvZiBMaWZlIGVtZXJnZWQgYXMgQ29ud2F5J3MgXHJcbiAgICBcdCAgICBcdHN1Y2Nlc3NmdWwgYXR0ZW1wdCB0byBkcmFzdGljYWxseSBzaW1wbGlmeSB2b24gTmV1bWFubidzIGlkZWFzLlxyXG5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlRoZSBnYW1lIG1hZGUgaXRzIGZpcnN0IHB1YmxpYyBhcHBlYXJhbmNlIGluIHRoZSBPY3RvYmVyIDE5NzAgaXNzdWUgb2YgPGk+U2NpZW50aWZpYyBBbWVyaWNhbjwvaT4sIGluIE1hcnRpbiBHYXJkbmVyJ3MgY29sdW1uLiBcclxuICAgIFx0ICAgIFx0RnJvbSBhIHRoZW9yZXRpY2FsIHBvaW50IG9mIHZpZXcsIGl0IGlzIGludGVyZXN0aW5nIGJlY2F1c2UgaXQgaGFzIHRoZSBwb3dlciBvZiBcclxuICAgIFx0ICAgIFx0YSB1bml2ZXJzYWwgVHVyaW5nIG1hY2hpbmU6IHRoYXQgaXMsIGFueXRoaW5nIHRoYXQgY2FuIGJlIGNvbXB1dGVkIGFsZ29yaXRobWljYWxseSBcclxuICAgIFx0ICAgIFx0Y2FuIGJlIGNvbXB1dGVkIHdpdGhpbiBDb253YXkncyBHYW1lIG9mIExpZmUuIEdhcmRuZXIgd3JvdGU6XHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGJsb2NrcXVvdGU+XHJcbiAgICBcdFx0XHQ8cD5UaGUgZ2FtZSBtYWRlIENvbndheSBpbnN0YW50bHkgZmFtb3VzLCBidXQgaXQgYWxzbyBvcGVuZWQgdXAgYSB3aG9sZSBuZXcgXHJcbiAgICBcdFx0XHRmaWVsZCBvZiBtYXRoZW1hdGljYWwgcmVzZWFyY2gsIHRoZSBmaWVsZCBvZiBjZWxsdWxhciBhdXRvbWF0YSZuYnNwOy4uLiBCZWNhdXNlIG9mIExpZmUncyBhbmFsb2dpZXMgd2l0aCB0aGUgcmlzZSwgXHJcbiAgICBcdFx0XHRmYWxsIGFuZCBhbHRlcmF0aW9ucyBvZiBhIHNvY2lldHkgb2YgbGl2aW5nIG9yZ2FuaXNtcywgaXQgYmVsb25ncyB0byBhIFxyXG4gICAgXHRcdFx0Z3Jvd2luZyBjbGFzcyBvZiB3aGF0IGFyZSBjYWxsZWQgXCJzaW11bGF0aW9uIGdhbWVzXCIgKGdhbWVzIHRoYXQgcmVzZW1ibGUgcmVhbCBsaWZlIHByb2Nlc3NlcykuXHJcbiAgICBcdFx0XHQ8L3A+XHJcbiAgICBcdFx0XHQ8L2Jsb2NrcXVvdGU+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0XHJcbiAgICBcdFx0XHQ8L0dyaWQ+XHJcbiAgICBcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0gPiA8L0dyaWQ+XHJcbiAgICBcdFx0XHQ8L0dyaWQ+XHJcbiAgICBcdCAgICAgXHJcbiAgICBcdCAgICA8L2Rpdj5cclxuICAgIFx0KTsgXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbkFib3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHNldFN0b3BwZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzdG9wcGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIFtib2FyZE5hbWVzLk1BSU5dOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CTE9DS106IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJPQVRdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5MT0FGXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkVFSElWRV06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJMSU5LRVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CRUFDT05dOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5UT0FEXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuR0xJREVSXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuU1BBQ0VTSElQXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuR1VOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBYm91dCk7XHJcblxyXG5cclxuY29uc3QgcGF0dGVybkJvYXJkID0gKGdyaWQsY2VsbHNMaXN0KSA9PiAoe2dyaWQsY2VsbHNMaXN0fSlcclxuXHJcblxyXG5jb25zdCBCb2FyZEVsZW1lbnQgPSAoe3dpZHRoLCBwYXR0ZXJuTmFtZSwgc3RvcHBlZCwgYnV0dG9uQ29sb3IsIHdpdGhCdXR0b24sIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIiBzdHlsZT17e3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8Y2FudmFzXHJcbiAgICAgICAgICAgICAgICByZWY9e3Byb3BzLnNldENhbnZhc31cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB7d2l0aEJ1dHRvbiA/IChcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7cHJvcHMuaGFuZGxlUGxheVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb249e3N0b3BwZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSWNvbj17PFBsYXlBcnJvdyBjbGFzc05hbWU9XCJpY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZkljb249ezxQYXVzZSBjbGFzc05hbWU9XCJpY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0ge2J1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cGF0dGVybk5hbWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLmJvYXJkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVDZWxsc0xpc3QgPSAoY29vcmRpbmF0ZXMsIHNoaWZ0KSA9PiB7XHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMuc3BsaXQoXCJcXHJcXG5cIikucmVkdWNlKGZ1bmN0aW9uKGFjYywgdmFsLCBZKXtcclxuICAgICAgICB2YWwuc3BsaXQoJ2MnKS5yZWR1Y2UoKGFjY1gsIHZhbFgsIFgpID0+IHtcclxuICAgICAgICAgICAgaWYodmFsWCAhPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGFjYy5wdXNoKFtZICsgc2hpZnRbMF0sICt2YWxYICsgc2hpZnRbMV1dKVxyXG4gICAgICAgIH0sW10pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LFtdKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\About.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbImJlYWNvbkNvb3JkaW5hdGVzIiwicmVxdWlyZSIsImJlZWhpdmVDb29yZGluYXRlcyIsImJsaW5rZXJDb29yZGluYXRlcyIsImJsb2NrQ29vcmRpbmF0ZXMiLCJib2F0Q29vcmRpbmF0ZXMiLCJnbGlkZXJDb29yZGluYXRlcyIsImd1bkNvb3JkaW5hdGVzIiwibG9hZkNvb3JkaW5hdGVzIiwibHNwYWNlc2hpcENvb3JkaW5hdGVzIiwib3NjR2xhc3Nlc0Nvb3JkaW5hdGVzIiwib3NjUXVhZENvb3JkaW5hdGVzIiwidG9hZENvb3JkaW5hdGVzIiwic3R5bGVzIiwibWFpbkNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJydWxlcyIsImJhY2tncm91bmRDb2xvciIsInRleHQiLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwidmlkZW8iLCJ0ZXh0QWxpZ24iLCJib2FyZHNTZWN0aW9uIiwiZGlzcGxheSIsIkFib3V0IiwicHJvcHMiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwiZXhhbXBsZXMiLCJHVU4iLCJncmlkIiwiY2FudmFzIiwic3F1YXJlU2l6ZSIsInBhcmFtZXRlcnMiLCJCRUFDT04iLCJ3IiwiaCIsImNvb3JkaW5hdGVzIiwiY3JlYXRlQ2VsbHNMaXN0Iiwid3JhcHBlZCIsIm5hbWUiLCJCRUVISVZFIiwiQkxJTktFUiIsIkJMT0NLIiwiQk9BVCIsIkdMSURFUiIsIkxPQUYiLCJTUEFDRVNISVAiLCJHTEFTU0VTIiwiUVVBRCIsIlRPQUQiLCJjZWxscyIsInN0YXRlIiwicmVsb2FkIiwic2NyZWVuIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzY3JlZW5TY2FsZSIsImNhbnZhc1dpZHRoIiwiZ2V0V2lkdGgiLCJjb25zb2xlIiwibG9nIiwibW90aW9uUGF0dGVybkxpc3QiLCJyQUYiLCJpbnRlcnZhbCIsImJ1dHRvbkNvbG9yIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJwYXR0ZXJuIiwic3RhcnQiLCJzdG9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibGVuZ3RoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwdXNoIiwidGhlbiIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJkZWx0YSIsImZvckVhY2giLCJwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCb2FyZCIsImNsYXNzZXMiLCJpbnRybyIsInBsYXllclZhcnMiLCJzaG93aW5mbyIsInJlbCIsInJ1bGVzUGFyIiwiZWwiLCJibGlua2VyV2lkdGgiLCJibGlua2VyIiwiaGFuZGxlUGxheVRvZ2dsZSIsImJlYWNvbldpZHRoIiwiYmVhY29uIiwidG9hZFdpZHRoIiwidG9hZCIsImdsaWRlcldpZHRoIiwiZ2xpZGVyIiwic3BhY2VzaGlwV2lkdGgiLCJzcGFjZXNoaXAiLCJndW4iLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwiTUFJTiIsImJvb2wiLCJwYXR0ZXJuQm9hcmQiLCJjZWxsc0xpc3QiLCJCb2FyZEVsZW1lbnQiLCJwYXR0ZXJuTmFtZSIsIndpdGhCdXR0b24iLCJzZXRDYW52YXMiLCJzaGlmdCIsInNwbGl0IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiWSIsImFjY1giLCJ2YWxYIiwiWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFHQSxJQUFJLG9CQUFvQixRQUF4QjtBQUNBLElBQUkscUJBQXFCLFFBQXpCO0FBQ0EsSUFBSSxxQkFBcUIsUUFBekI7QUFD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QUEsbUJBS1IsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFDQztBQUREO0FBQUEsT0F2QlIsQUFDSSxBQXNCSTtpQkF2QlI7YUFGQSxBQUVBLEFBbURIO0FBbkRHO0FBSko7O0FBeURBLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsYUFBRCxBQUFjLE9BQVUsQUFDNUM7dUJBQU8sQUFBWSxNQUFaLEFBQWtCLFFBQWxCLEFBQTBCLE9BQU8sVUFBQSxBQUFTLEtBQVQsQUFBYyxLQUFkLEFBQW1CLEdBQUUsQUFDekQ7WUFBQSxBQUFJLE1BQUosQUFBVSxLQUFWLEFBQWUsT0FBTyxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVAsQUFBYSxHQUFNLEFBQ3JDO2dCQUFHLFNBQUgsQUFBWSxJQUNaLE9BQU8sSUFBQSxBQUFJLEtBQUssQ0FBQyxJQUFJLE1BQUwsQUFBSyxBQUFNLElBQUksQ0FBQSxBQUFDLE9BQU8sTUFBdkMsQUFBTyxBQUFTLEFBQXVCLEFBQU0sQUFDaEQ7QUFIRCxXQUFBLEFBR0UsQUFFRjs7ZUFBQSxBQUFPLEFBQ1Y7QUFQTSxLQUFBLEVBQVAsQUFBTyxBQU9MLEFBQ0w7QUFURCIsImZpbGUiOiJBYm91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\folder\\new\\gol\\components\\About.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\folder\\new\\gol\\components\\About.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44ZmIyMGEyYTFjNjdiZGI2ZGZjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dC5qcz9mMTg0NDQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XHJcbmltcG9ydCBHYW1lR3JpZCBmcm9tICcuLi9oZWxwZXJzL0dhbWVHcmlkJztcclxuaW1wb3J0IEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlSWNvbiBmcm9tICdtYXRlcmlhbC11aS10b2dnbGUtaWNvbic7XHJcbmltcG9ydCBQbGF5QXJyb3cgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvUGxheUFycm93JztcclxuaW1wb3J0IFBhdXNlIGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1BhdXNlJztcclxuaW1wb3J0IHtib2FyZE5hbWVzfSBmcm9tICcuLi9oZWxwZXJzL2JvYXJkTmFtZXMnXHJcbmltcG9ydCB7IHNoaWZ0VG9DZW50ZXIgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuXHJcbnZhciBiZWFjb25Db29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9iZWFjb24udHh0Jyk7XHJcbnZhciBiZWVoaXZlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmVlaGl2ZS50eHQnKTtcclxudmFyIGJsaW5rZXJDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibGlua2VyLnR4dCcpO1xyXG52YXIgYmxvY2tDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibG9jay50eHQnKTtcclxudmFyIGJvYXRDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ib2F0LnR4dCcpO1xyXG52YXIgZ2xpZGVyQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ2xpZGVyLnR4dCcpO1xyXG52YXIgZ3VuQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ3VuLnR4dCcpO1xyXG52YXIgbG9hZkNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2xvYWYudHh0Jyk7XHJcbnZhciBsc3BhY2VzaGlwQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvbHNwYWNlc2hpcC50eHQnKTtcclxudmFyIG9zY0dsYXNzZXNDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9vc2NHbGFzc2VzLnR4dCcpO1xyXG52YXIgb3NjUXVhZENvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL29zY1F1YWQudHh0Jyk7XHJcbnZhciB0b2FkQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9hZC50eHQnKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHRtYWluQ29udGVudDoge1xyXG5cdFx0bWFyZ2luVG9wOiA3NVxyXG5cdH0sXHJcbiAgICBydWxlczoge1xyXG4gICAgXHRiYWNrZ3JvdW5kQ29sb3I6J3JnYmEoMjQwLDI0OCwyNTUsLjcpJyxcclxuICAgIFx0XHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLCBcclxuICAgICAgICBmYWxsYmFja3M6e1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgICAgfSwgICAgIFx0XHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgIG1hcmdpblRvcDogNDBcclxuICAgIH0sXHJcbiAgICB2aWRlbzoge1xyXG4gICAgXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgXHRmb250RmFtaWx5OiAnT3BlbiBTYW5zJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sXHJcbiAgICBcdG1hcmdpblRvcDozMCxcclxuICAgIH0sXHJcbiAgICBib2FyZHNTZWN0aW9uOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBcdG1hcmdpblRvcDozMCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCBzcXVhcmVTaXplID0gMTI7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLkJFQUNPTl06IHtcclxuICAgICAgICAgICAgICAgIHc6IDYsXHJcbiAgICAgICAgICAgICAgICBoOiA2LCBcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmVhY29uQ29vcmRpbmF0ZXMsWzAsMF0pLCAgICBcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsICAgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlYWNvblwiLCAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkVFSElWRV06IHtcclxuICAgICAgICAgICAgICAgIHc6IDYsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChiZWVoaXZlQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlZWhpdmVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkxJTktFUl06IHtcclxuICAgICAgICAgICAgICAgIHc6IDUsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChibGlua2VyQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJsaW5rZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQkxPQ0tdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA0LFxyXG4gICAgICAgICAgICAgICAgaDogNCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmxvY2tDb29yZGluYXRlcyxbMCwwXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmxvY2tcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuQk9BVF06IHtcclxuICAgICAgICAgICAgICAgIHc6IDUsXHJcbiAgICAgICAgICAgICAgICBoOiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChib2F0Q29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJvYXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZXMuR0xJREVSXToge1xyXG4gICAgICAgICAgICAgICAgdzogMTAsXHJcbiAgICAgICAgICAgICAgICBoOiAxMCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoZ2xpZGVyQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdsaWRlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5HVU5dOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA0MCxcclxuICAgICAgICAgICAgICAgIGg6IDIwLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChndW5Db29yZGluYXRlcyxbMSwxXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRoZSBHb3NwZXIgR2xpZGVyIEd1blwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5MT0FGXToge1xyXG4gICAgICAgICAgICAgICAgdzogNixcclxuICAgICAgICAgICAgICAgIGg6IDYsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGxvYWZDb29yZGluYXRlcyxbMCwwXSksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTG9hZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5TUEFDRVNISVBdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiAxMixcclxuICAgICAgICAgICAgICAgIGg6IDEyLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChsc3BhY2VzaGlwQ29vcmRpbmF0ZXMsWzAsMF0pLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpZ2h0d2VpZ2h0IFNwYWNlc2hpcFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lcy5HTEFTU0VTXToge1xyXG4gICAgICAgICAgICAgICAgdzogMjAsXHJcbiAgICAgICAgICAgICAgICBoOiAxMyxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjR2xhc3Nlc0Nvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJHbGFzc2VzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLlFVQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA4LFxyXG4gICAgICAgICAgICAgICAgaDogOCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjUXVhZENvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJRdWFkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWVzLlRPQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3OiA2LFxyXG4gICAgICAgICAgICAgICAgaDogNixcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QodG9hZENvb3JkaW5hdGVzLFswLDBdKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUb2FkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocGFyYW1ldGVyc1tuYW1lXSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5leGFtcGxlcyA9IHt9O1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IG5ldyBHYW1lR3JpZChuYW1lLCBwYXJhbWV0ZXJzW25hbWVdLncsIHBhcmFtZXRlcnNbbmFtZV0uaCwgc3F1YXJlU2l6ZSwgIXBhcmFtZXRlcnNbbmFtZV0ud3JhcHBlZCksXHJcbiAgICAgICAgICAgICAgICBjZWxsczogbmFtZSA9PSBib2FyZE5hbWVzLkdVTiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbbmFtZV0uY29vcmRpbmF0ZXMgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0VG9DZW50ZXIocGFyYW1ldGVyc1tuYW1lXS5jb29yZGluYXRlcywgcGFyYW1ldGVyc1tuYW1lXS5oLCBwYXJhbWV0ZXJzW25hbWVdLncpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogcGFyYW1ldGVyc1tuYW1lXS5uYW1lLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWxvYWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICAgIHNjcmVlblNjYWxlOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCA/IDMgOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXS5jYW52YXNXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5leGFtcGxlc1tuYW1lXS5ncmlkKSBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGwgPSBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsKVxyXG4gICAgICAgIC8vIGxldCBiZWFjb25QYXJhbWV0ZXJzID0ge1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbGV0IGJlZWhpdmVQYXJhbWV0ZXJzID0gXHJcbiAgICAgICAgLy8gbGV0IGJsaW5rZXJQYXJhbWV0ZXJzID0gXHJcbiAgICAgICAgLy8gbGV0IGJsb2NrUGFyYW1ldGVycyA9IFxyXG4gICAgICAgIC8vIGxldCBib2F0UGFyYW1ldGVycyA9IFxyXG4gICAgICAgIC8vIGxldCBnbGlkZXJQYXJhbWV0ZXJzID0gXHJcbiAgICAgICAgLy8gbGV0IHNwYWNlc2hpcFBhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyBsZXQgbG9hZlBhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyBsZXQgZ2xhc3Nlc1BhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyBsZXQgcXVhZFBhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyBsZXQgdG9hZFBhcmFtZXRlcnMgPSBcclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVBQ09OXSA9IHtcclxuICAgICAgICAvLyAgICAgZ3JpZCA9IFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVBQ09OXS5ncmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxPQ0ssIDQsIDQsIDEyKTtcclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkVFSElWRV0uZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMT0NLLCA0LCA0LCAxMik7XHJcbiAgICAgICAgLy8gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMSU5LRVJdLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10uZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMT0NLLCA0LCA0LCAxMik7XHJcbiAgICAgICAgLy8gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJPQVRdLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HTElERVJdLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5MT0FGXS5ncmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxPQ0ssIDQsIDQsIDEyKTtcclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuU1BBQ0VTSElQXS5ncmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxPQ0ssIDQsIDQsIDEyKTtcclxuICAgICAgICAvLyB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xBU1NFU10uZ3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMT0NLLCA0LCA0LCAxMik7XHJcbiAgICAgICAgLy8gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlFVQURdLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXS5ncmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxPQ0ssIDQsIDQsIDEyKTtcclxuICAgICAgICAvLyBjb25zdCBibG9ja0dyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CTE9DSywgNCwgNCwgMTIpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJvYXRHcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQk9BVCwgNSwgNSwgMTIpO1xyXG4gICAgICAgIC8vIGNvbnN0IGxvYWZHcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuTE9BRiwgNiwgNiwgMTIpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJlZWhpdmVHcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkVFSElWRSwgNiwgNSwgMTIpOyBcclxuICAgICAgICAvLyBjb25zdCBibGlua2VyR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMSU5LRVIsIDUsIDUsIDEyKTtcclxuICAgICAgICAvLyBjb25zdCBiZWFjb25HcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkVBQ09OLCA2LCA2LCAxMik7XHJcbiAgICAgICAgLy8gY29uc3QgdG9hZEdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5UT0FELCA2LCA2LCAxMik7ICAgXHJcbiAgICAgICAgLy8gY29uc3QgZ2xpZGVyR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkdMSURFUiwgMTAsIDEwLCAxMik7XHJcbiAgICAgICAgLy8gY29uc3Qgc3BhY2VzaGlwR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLlNQQUNFU0hJUCwgMTIsIDEyLCAxMik7XHJcbiAgICAgICAgLy8gY29uc3QgZ3VuSXNPcGVuVW5pdiA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc3QgZ3VuR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkdVTiwgNDAsIDIwLCAxMixndW5Jc09wZW5Vbml2KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAvLyAgICAgICBsZXQgc2hpZnQgPSBbMSwxXVxyXG4gIC8vICAgICAgIGNvbnN0IGJvYXRDZWxsc0xpc3QgPSBjcmVhdGVDZWxsc0xpc3QoYm9hdENvb3JkaW5hdGVzLHNoaWZ0KTtcclxuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhibG9ja0Nvb3JkaW5hdGVzTGlzdClcclxuXHRcdC8vIGNvbnN0IGJsb2NrQ2VsbHNMaXN0ID0gW1sxLDFdLFsxLDJdLFsyLDFdLFsyLDJdXTtcclxuICAvLyAgICAgICAvLyBsZXQgc2hpZnQgPSBbMSwxXVxyXG4gIC8vICAgICAgIGNvbnN0IGJsb2NrQ2VsbHNMaXN0ID0gY3JlYXRlQ2VsbHNMaXN0KGJsb2NrQ29vcmRpbmF0ZXMsc2hpZnQpO1xyXG4gIC8vICAgICAgIC8vIGxldCBzaGlmdCA9IFsxLDFdXHJcbiAgLy8gICAgICAgY29uc3QgYmVlaGl2ZUNlbGxzTGlzdCA9IGNyZWF0ZUNlbGxzTGlzdChiZWVoaXZlQ29vcmRpbmF0ZXMsc2hpZnQpO1xyXG4gIC8vICAgICAgIC8vIGxldCBzaGlmdCA9IFsxLDFdXHJcbiAgLy8gICAgICAgY29uc3QgbG9hZkNlbGxzTGlzdCA9IGNyZWF0ZUNlbGxzTGlzdChsb2FmQ29vcmRpbmF0ZXMsc2hpZnQpO1xyXG4gIC8vICAgICAgIC8vIGxldCBzaGlmdCA9IFsxLDFdXHJcbiAgLy8gICAgICAgY29uc3QgYmVhY29uQ2VsbHNMaXN0ID0gY3JlYXRlQ2VsbHNMaXN0KGJlYWNvbkNvb3JkaW5hdGVzLHNoaWZ0KTtcclxuICAvLyAgICAgICBzaGlmdCA9IFsyLDFdXHJcbiAgLy8gICAgICAgY29uc3QgYmxpbmtlckNlbGxzTGlzdCA9IGNyZWF0ZUNlbGxzTGlzdChibGlua2VyQ29vcmRpbmF0ZXMsc2hpZnQpOyAgICAgICAgXHJcblx0XHQvLyBjb25zdCB0b2FkQ2VsbHNMaXN0ID0gY3JlYXRlQ2VsbHNMaXN0KHRvYWRDb29yZGluYXRlcyxzaGlmdCk7ICAgICAgICBcclxuICAvLyAgICAgICAvLyBzaGlmdCA9IFszLDNdXHJcblxyXG4gIC8vICAgICAgIGNvbnN0IGJvYXRDZWxsc0xpc3QgPSBbWzEsMV0sWzEsMl0sWzIsMV0sWzIsM10sWzMsMl1dO1xyXG5cdFx0Ly8gY29uc3QgbG9hZkNlbGxzTGlzdCA9IFtbMiwxXSxbMSwzXSxbMSwyXSxbMiw0XSxbMywyXSxbNCwzXSxbMyw0XV07XHJcblx0XHQvLyBjb25zdCBiZWVoaXZlQ2VsbHNMaXN0ID0gW1sxLDJdLFsxLDNdLFsyLDFdLFsyLDRdLFszLDJdLFszLDNdXTtcclxuXHRcdC8vIGNvbnN0IGJsaW5rZXJDZWxsc0xpc3QgPSBbWzIsMV0sWzIsMl0sWzIsM11dO1xyXG5cdFx0Ly8gY29uc3QgYmVhY29uQ2VsbHNMaXN0ID0gW1sxLDFdLFsxLDJdLFsyLDFdLFsyLDJdLFszLDNdLFszLDRdLFs0LDNdLFs0LDRdXTtcclxuXHRcdC8vIGNvbnN0IHRvYWRDZWxsc0xpc3QgPSBbWzIsMl0sWzIsM10sWzIsNF0sWzMsMV0sWzMsMl0sWzMsM11dO1xyXG5cdFx0Ly8gY29uc3QgZ2xpZGVyQ2VsbHNMaXN0ID0gW1s1LDRdLFs0LDNdLFszLDVdLFs0LDVdLFs1LDVdXTtcclxuXHRcdC8vIGNvbnN0IHNwYWNlc2hpcENlbGxzTGlzdCA9IFtbNSwzXSxbNywzXSxbNCw0XSxbNCw1XSxbNCw2XSxbNCw3XSxbNSw3XSxbNiw3XSxbNyw2XV07XHJcblx0XHQvLyBjb25zdCBndW5DZWxsc0xpc3QgPSBbWzUsMV0sWzYsMV0sWzUsMl0sWzYsMl0sWzUsMTFdLFs2LDExXSxbNywxMV0sWzQsMTJdLFs4LDEyXSxbMywxM10sWzksMTNdLFszLDE0XSxbOSwxNF0sXHJcblx0XHQvLyBbNiwxNV0sWzQsMTZdLFs4LDE2XSxbNSwxN10sWzYsMTddLFs3LDE3XSxbNiwxOF0sWzMsMjFdLFs0LDIxXSxbNSwyMV0sWzMsMjJdLFs0LDIyXSxbNSwyMl0sWzIsMjNdLFs2LDIzXSxbMSwyNV0sWzIsMjVdLFxyXG5cdFx0Ly8gWzYsMjVdLFs3LDI1XSxbMywzNV0sWzQsMzVdLFszLDM2XSxbNCwzNl1dO1xyXG5cdFx0Ly8gdGhpcy5wYXR0ZXJucyA9IHt9O1xyXG4gICAgICAgIC8vIGZvcihsZXQgbmFtZSBpbiBuYW1lcyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZXhhbXBsZXNbbmFtZV0uY2VsbHMgPSBzaGlmdFRvQ2VudGVyKGNvb3JkaW5hdGVzW25hbWVdLCB0aGlzLmV4YW1wbGVzW25hbWVdLmdyaWQuaGVpZ2h0LHRoaXMuZXhhbXBsZXNbbmFtZV0uZ3JpZC53aWR0aClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5jZWxscylcclxuICAgICAgICAvLyBPYmplY3Qua2V5cyhjb29yZGluYXRlcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5jZWxscyA9IHNoaWZ0VG9DZW50ZXIoY29vcmRpbmF0ZXNbYm9hcmROYW1lcy5CTE9DS10sIHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10uZ3JpZC5oZWlnaHQsdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXS5ncmlkLndpZHRoKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMT0NLXSlcclxuXHRcdHRoaXMubW90aW9uUGF0dGVybkxpc3QgPSBbXTtcclxuXHRcdHRoaXMuckFGID0gbnVsbDtcclxuXHJcblx0XHQvLyB0aGlzLmJsb2NrID0gcGF0dGVybkJvYXJkKGJsb2NrR3JpZCwgYmxvY2tDZWxsc0xpc3QpO1xyXG5cdFx0Ly8gdGhpcy5ib2F0ID0gcGF0dGVybkJvYXJkKGJvYXRHcmlkLCBib2F0Q2VsbHNMaXN0KTtcclxuXHRcdC8vIHRoaXMubG9hZiA9IHBhdHRlcm5Cb2FyZChsb2FmR3JpZCwgbG9hZkNlbGxzTGlzdCk7XHJcblx0XHQvLyB0aGlzLmJlZWhpdmUgPSBwYXR0ZXJuQm9hcmQoYmVlaGl2ZUdyaWQsIGJlZWhpdmVDZWxsc0xpc3QpO1xyXG5cdFx0Ly8gdGhpcy5ibGlua2VyID0gcGF0dGVybkJvYXJkKGJsaW5rZXJHcmlkLCBibGlua2VyQ2VsbHNMaXN0KTtcclxuXHRcdC8vIHRoaXMuYmVhY29uID0gcGF0dGVybkJvYXJkKGJlYWNvbkdyaWQsIGJlYWNvbkNlbGxzTGlzdCk7XHJcblx0XHQvLyB0aGlzLnRvYWQgPSBwYXR0ZXJuQm9hcmQodG9hZEdyaWQsIHRvYWRDZWxsc0xpc3QpO1xyXG5cdFx0Ly8gdGhpcy5nbGlkZXIgPSBwYXR0ZXJuQm9hcmQoZ2xpZGVyR3JpZCwgZ2xpZGVyQ2VsbHNMaXN0KTtcclxuXHRcdC8vIHRoaXMuc3BhY2VzaGlwID0gcGF0dGVybkJvYXJkKHNwYWNlc2hpcEdyaWQsIHNwYWNlc2hpcENlbGxzTGlzdCk7XHJcblx0XHQvLyB0aGlzLmd1biA9IHBhdHRlcm5Cb2FyZChndW5HcmlkLCBndW5DZWxsc0xpc3QpO1xyXG4gIC8vICAgICAgIHRoaXMuYm9hcmRzID0gW1xyXG4gIC8vICAgICAgICAgICB0aGlzLmJsb2NrLFxyXG4gIC8vICAgICAgICAgICB0aGlzLmJvYXQsXHJcbiAgLy8gICAgICAgICAgIHRoaXMubG9hZixcclxuICAvLyAgICAgICAgICAgdGhpcy5iZWVoaXZlLFxyXG4gIC8vICAgICAgICAgICB0aGlzLmJsaW5rZXIsXHJcbiAgLy8gICAgICAgICAgIHRoaXMuYmVhY29uLFxyXG4gIC8vICAgICAgICAgICB0aGlzLnRvYWQsXHJcbiAgLy8gICAgICAgICAgIHRoaXMuZ2xpZGVyLFxyXG4gIC8vICAgICAgICAgICB0aGlzLnNwYWNlc2hpcCxcclxuICAvLyAgICAgICAgICAgdGhpcy5ndW4sXHJcbiAgLy8gICAgICAgICAgIF07XHJcblx0XHR0aGlzLmludGVydmFsPTMwMDtcclxuXHRcclxuXHRcdHRoaXMuYnV0dG9uQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNyknO1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5ibG9ja1dpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmJsb2NrLmdyaWQpO1xyXG4gICAgICAgIC8vIHRoaXMuYm9hdFdpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmJvYXQuZ3JpZCk7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FmV2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMubG9hZi5ncmlkKTtcclxuICAgICAgICAvLyB0aGlzLmJlZWhpdmVXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5iZWVoaXZlLmdyaWQpO1xyXG4gICAgICAgIC8vIHRoaXMuYmxpbmtlcldpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmJsaW5rZXIuZ3JpZCk7XHJcbiAgICAgICAgLy8gdGhpcy5iZWFjb25XaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5iZWFjb24uZ3JpZCk7XHJcbiAgICAgICAgLy8gdGhpcy50b2FkV2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMudG9hZC5ncmlkKTtcclxuICAgICAgICAvLyB0aGlzLmdsaWRlcldpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmdsaWRlci5ncmlkKTtcclxuICAgICAgICAvLyB0aGlzLnNwYWNlc2hpcFdpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLnNwYWNlc2hpcC5ncmlkKTtcclxuICAgICAgICAvLyB0aGlzLmd1bldpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmd1bi5ncmlkKTtcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQgPSAoc3RvcHBlZCwgbmFtZSkgPT4gcHJvcHMuc2V0U3RvcHBlZChzdG9wcGVkLCBuYW1lKTtcclxuXHR9XHJcblxyXG4gICAgZ2V0V2lkdGgoZ3JpZCl7XHJcbiAgICAgICAgbGV0IHtzY3JlZW59ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQge3dpZHRoLCBzcXVhcmVTaXplfSA9IGdyaWQ7XHJcbiAgICAgICAgbGV0IHcgPSAoKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplICogc2NyZWVuLndpZHRoLzEwMCAqIC43KS9zY3JlZW4uc2NyZWVuU2NhbGU7XHJcbiAgICAgICAgcmV0dXJuIHcgPiBzY3JlZW4ud2lkdGggKiAuNiA/IHNjcmVlbi53aWR0aCAqIC42IDogdztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQbGF5VG9nZ2xlKHBhdHRlcm4pe1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RvcHBlZFtwYXR0ZXJuLmdyaWQubmFtZV0pe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KHBhdHRlcm4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3AocGF0dGVybik7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcblxyXG4gICAgc3RvcChwYXR0ZXJuKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZCh0cnVlLCBwYXR0ZXJuLmdyaWQubmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubW90aW9uUGF0dGVybkxpc3QuaW5kZXhPZihwYXR0ZXJuKTtcclxuICAgICAgICAgICAgdGhpcy5tb3Rpb25QYXR0ZXJuTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vdGlvblBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQocGF0dGVybil7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZChmYWxzZSwgcGF0dGVybi5ncmlkLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdGlvblBhdHRlcm5MaXN0LnB1c2gocGF0dGVybik7XHJcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW90aW9uUGF0dGVybkxpc3QubGVuZ3RoID09PSAxKXtcclxuICAgICAgICAgICAgXHR0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdHVwZGF0ZSgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWx0YSA+IHRoaXMuaW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZGVsdGEgJSB0aGlzLmludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdGlvblBhdHRlcm5MaXN0LmZvckVhY2gocCA9PiBwLmdyaWQudXBkYXRlKCkpXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT57dGhpcy51cGRhdGUoKX0pOyBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0uZ3JpZC5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpe1xyXG5cdFx0dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0uY2FudmFzV2lkdGggPSB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5jYW52YXNXaWR0aCA+IHRoaXMuc3RhdGUuc2NyZWVuLndpZHRoICogLjYgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2NyZWVuLndpZHRoICogLjYgOiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXS5jYW52YXNXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLnN0YXRlLnNjcmVlbi5yYXRpb1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLmV4YW1wbGVzKXtcclxuICAgICAgICAgICAgbGV0IHtncmlkLCBjZWxscywgY2FudmFzfSA9IHRoaXMuZXhhbXBsZXNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBncmlkLm1ha2VCb2FyZChncmlkLndpZHRoLCBncmlkLmhlaWdodCwgZ3JpZC5zcXVhcmVTaXplLCByYXRpbywgY2FudmFzLCBjZWxscyk7XHJcbiAgICAgICAgICAgIGdyaWQudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0Ly8gdGhpcy5ibG9jay5ncmlkLm1ha2VCb2FyZCh0aGlzLmJsb2NrLmdyaWQud2lkdGgsdGhpcy5ibG9jay5ncmlkLmhlaWdodCx0aGlzLmJsb2NrLmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmJsb2NrLHRoaXMuYmxvY2suY2VsbHNMaXN0LHRoaXMuc3RhdGUuc2NyZWVuKTtcclxuICAgICAvLyAgICB0aGlzLmJsb2NrLmdyaWQudXBkYXRlKCk7XHJcbiAgICBcdC8vIHRoaXMuYm9hdC5ncmlkLm1ha2VCb2FyZCh0aGlzLmJvYXQuZ3JpZC53aWR0aCx0aGlzLmJvYXQuZ3JpZC5oZWlnaHQsdGhpcy5ib2F0LmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmJvYXQsdGhpcy5ib2F0LmNlbGxzTGlzdCx0aGlzLnN0YXRlLnNjcmVlbik7XHJcbiAgICAgLy8gICAgdGhpcy5ib2F0LmdyaWQudXBkYXRlKCk7XHJcbiAgICBcdC8vIHRoaXMubG9hZi5ncmlkLm1ha2VCb2FyZCh0aGlzLmxvYWYuZ3JpZC53aWR0aCx0aGlzLmxvYWYuZ3JpZC5oZWlnaHQsdGhpcy5sb2FmLmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmxvYWYsdGhpcy5sb2FmLmNlbGxzTGlzdCx0aGlzLnN0YXRlLnNjcmVlbik7XHJcbiAgICAgLy8gICAgdGhpcy5sb2FmLmdyaWQudXBkYXRlKCk7XHJcbiAgICBcdC8vIHRoaXMuYmVlaGl2ZS5ncmlkLm1ha2VCb2FyZCh0aGlzLmJlZWhpdmUuZ3JpZC53aWR0aCx0aGlzLmJlZWhpdmUuZ3JpZC5oZWlnaHQsdGhpcy5iZWVoaXZlLmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmJlZWhpdmUsdGhpcy5iZWVoaXZlLmNlbGxzTGlzdCx0aGlzLnN0YXRlLnNjcmVlbik7XHJcbiAgICAgLy8gICAgdGhpcy5iZWVoaXZlLmdyaWQudXBkYXRlKCk7XHJcbiAgICAgLy8gICAgdGhpcy5ibGlua2VyLmdyaWQubWFrZUJvYXJkKHRoaXMuYmxpbmtlci5ncmlkLndpZHRoLHRoaXMuYmxpbmtlci5ncmlkLmhlaWdodCx0aGlzLmJsaW5rZXIuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuYmxpbmtlcix0aGlzLmJsaW5rZXIuY2VsbHNMaXN0KTtcclxuICAgICAvLyAgICB0aGlzLmJsaW5rZXIuZ3JpZC51cGRhdGUoKTtcclxuICAgIFx0Ly8gdGhpcy5iZWFjb24uZ3JpZC5tYWtlQm9hcmQodGhpcy5iZWFjb24uZ3JpZC53aWR0aCx0aGlzLmJlYWNvbi5ncmlkLmhlaWdodCx0aGlzLmJlYWNvbi5ncmlkLnNxdWFyZVNpemUsdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8sdGhpcy5wYXR0ZXJucy5iZWFjb24sdGhpcy5iZWFjb24uY2VsbHNMaXN0KTtcclxuICAgICAvLyAgICB0aGlzLmJlYWNvbi5ncmlkLnVwZGF0ZSgpO1xyXG4gICAgXHQvLyB0aGlzLnRvYWQuZ3JpZC5tYWtlQm9hcmQodGhpcy50b2FkLmdyaWQud2lkdGgsdGhpcy50b2FkLmdyaWQuaGVpZ2h0LHRoaXMudG9hZC5ncmlkLnNxdWFyZVNpemUsdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8sdGhpcy5wYXR0ZXJucy50b2FkLHRoaXMudG9hZC5jZWxsc0xpc3QpO1xyXG4gICAgIC8vICAgIHRoaXMudG9hZC5ncmlkLnVwZGF0ZSgpO1xyXG4gICAgIC8vICBcdHRoaXMuZ2xpZGVyLmdyaWQubWFrZUJvYXJkKHRoaXMuZ2xpZGVyLmdyaWQud2lkdGgsdGhpcy5nbGlkZXIuZ3JpZC5oZWlnaHQsdGhpcy5nbGlkZXIuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuZ2xpZGVyLHRoaXMuZ2xpZGVyLmNlbGxzTGlzdCk7XHJcbiAgICAgLy8gICAgdGhpcy5nbGlkZXIuZ3JpZC51cGRhdGUoKTsgIFxyXG4gICAgIC8vICBcdHRoaXMuc3BhY2VzaGlwLmdyaWQubWFrZUJvYXJkKHRoaXMuc3BhY2VzaGlwLmdyaWQud2lkdGgsdGhpcy5zcGFjZXNoaXAuZ3JpZC5oZWlnaHQsdGhpcy5zcGFjZXNoaXAuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuc3BhY2VzaGlwLHRoaXMuc3BhY2VzaGlwLmNlbGxzTGlzdCk7XHJcbiAgICAgLy8gICAgdGhpcy5zcGFjZXNoaXAuZ3JpZC51cGRhdGUoKTsgIFxyXG4gICAgICAgIFxyXG4gICAgIC8vICBcdHRoaXMuZ3VuLmdyaWQubWFrZUJvYXJkKHRoaXMuZ3VuLmdyaWQud2lkdGgsdGhpcy5ndW4uZ3JpZC5oZWlnaHQsdGhpcy5ndW4uZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuZ3VuLHRoaXMuZ3VuLmNlbGxzTGlzdCk7XHJcbiAgICAgLy8gICAgdGhpcy5ndW4uZ3JpZC51cGRhdGUoKTsgICAgICAgICAgICAgXHQgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpOyAgICBcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSwgbnVsbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkgeyAgICBcclxuICAgIFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcclxuICAgIFx0cmV0dXJuKFxyXG4gICAgXHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgICAgICBcclxuICAgIFx0ICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdCAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0gPiA8L0dyaWQ+XHJcbiAgICBcdCAgICBcclxuICAgIFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfSAgc209ezh9ID5cclxuICAgIFx0ICAgIFxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaW50cm99ICR7Y2xhc3Nlcy50ZXh0fWB9PlxyXG4gICAgXHQgICAgXHQ8c3Ryb25nPlRoZSBHYW1lIG9mIExpZmU8L3N0cm9uZz4gaXMgdGhlIGJlc3Qta25vd24gdHdvLWRpbWVuc2lvbmFsICBcclxuICAgICAgICAgICAgICAgIFwiPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbGx1bGFyX2F1dG9tYXRvblwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiQ2VsbHVsYXIgYXV0b21hdG9uXCI+Y2VsbHVsYXIgYXV0b21hdG9uPC9hPlwiLCBcclxuICAgICAgICAgICAgICAgIGludmVudGVkIGluIDE5NzAgYnkgdGhlIEJyaXRpc2ggbWF0aGVtYXRpY2lhbiA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSm9obl9Ib3J0b25fQ29ud2F5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJKb2huIENvbndheVwiPkpvaG4gSG9ydG9uIENvbndheTwvYT4uIFxyXG4gICAgICAgICAgICAgICAgVGhlIGxpZmUgaXMgYSBjZWxsdWxhciBhdXRvbWF0b24sIHdoaWNoIGlzIGEgbW9kZWwgb2YgYSBkaXNjcmV0ZSBhYnN0cmFjdCBjb21wdXRhdGlvbmFsIHN5c3RlbSwgXHJcbiAgICAgICAgICAgICAgICBjb21wb3NlZCBvZiBhIGZpbml0ZSBvciBpbmZpbml0ZSBzZXQgb2Ygb2JqZWN0cyDigJMgXCJjZWxsc1wiLiBUaGUgY2VsbCBpbiB0aGUgZ2FtZSBvZiBsaWZlIGhhcyB0d28gc3RhdGVzIC0gXHJcbiAgICAgICAgICAgICAgICDigJxhbGl2ZeKAnSBhbmQg4oCcZGVhZOKAnSwgb3IgXCJwb3B1bGF0ZWRcIiBhbmQgXCJ1bnBvcHVsYXRlZFwiLiBUaGUgY2VsbHMgbGl2ZSBvbiBhIHR3by1kaW1lbnNpb25hbCBncmlkIGFuZCBlYWNoIGNlbGwgXHJcbiAgICAgICAgICAgICAgICBoYXMgZWlnaHQgYWRqYWNlbnQgY2VsbHMgLSBcIm5laWdoYm9yc1wiLiBBbGwgY2VsbHMgY2hhbmdlIHRoZWlyIHN0YXRlIHNpbXVsdGFuZW91c2x5LCBhY2NvcmRpbmcgdG8gdXBkYXRlIFxyXG4gICAgICAgICAgICAgICAgcnVsZXMgYnkgdGFraW5nIGludG8gYWNjb3VudCB0aGUgc3RhdGVzIG9mIHRoZWlyIG5laWdoYm9ycy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHRcclxuICAgIFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxyXG4gICAgICAgICAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgICAgICAgICAgdmlkZW9JZD1cIlI5UGxxLUQxZ0VrXCIgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgb3B0cz17e3dpZHRoOicxMDAlJywgcGxheWVyVmFyczoge3Nob3dpbmZvOjAsIHJlbDowfX19ICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBKb2huIEguIENvbndheSBvbiB0aGUgY3JlYXRpb24gb2YgaGlzIEdhbWUgb2YgTGlmZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxyXG4gICAgICAgICAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgICAgICAgICAgdmlkZW9JZD1cIkNnT2NFWmluUTJJXCIgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgb3B0cz17e3dpZHRoOicxMDAlJywgcGxheWVyVmFyczoge3Nob3dpbmZvOjAsIHJlbDowfX19ICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBGcmFnbWVudCBmcm9tIFN0ZXBoZW4gSGF3a2luZ2BzIFRoZSBNZWFuaW5nIG9mIExpZmVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucnVsZXNQYXJ9PlxyXG4gICAgXHQgICAgXHQ8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0UnVsZXNcclxuICAgIFx0ICAgIFx0PC9oMj5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHQgICAgXHRFdmVyeSBjZWxsIGludGVyYWN0cyB3aXRoIGl0cyBlaWdodCBuZWlnaGJvdXJzLCBcclxuICAgIFx0ICAgIFx0d2hpY2ggYXJlIHRoZSBjZWxscyB0aGF0IGFyZSBob3Jpem9udGFsbHksIHZlcnRpY2FsbHksIG9yIGRpYWdvbmFsbHkgYWRqYWNlbnQuIFxyXG4gICAgXHQgICAgXHRBdCBlYWNoIHN0ZXAgaW4gdGltZSwgdGhlIGZvbGxvd2luZyB0cmFuc2l0aW9ucyBvY2N1cjpcclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ydWxlc30+XHJcbiAgICBcdCAgICBcdDx1bD5cclxuICAgIFx0XHRcdFx0PGxpPkFueSBsaXZlIGNlbGwgd2l0aCBmZXdlciB0aGFuIHR3byBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgY2F1c2VkIGJ5IHVuZGVycG9wdWxhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIHR3byBvciB0aHJlZSBsaXZlIG5laWdoYm91cnMgbGl2ZXMgb24gdG8gdGhlIG5leHQgZ2VuZXJhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIG1vcmUgdGhhbiB0aHJlZSBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgYnkgb3ZlcnBvcHVsYXRpb24uPC9saT5cclxuICAgIFx0XHRcdFx0PGxpPkFueSBkZWFkIGNlbGwgd2l0aCBleGFjdGx5IHRocmVlIGxpdmUgbmVpZ2hib3VycyBiZWNvbWVzIGEgbGl2ZSBjZWxsLCBhcyBpZiBieSByZXByb2R1Y3Rpb24uPC9saT5cclxuICAgIFx0XHRcdDwvdWw+XHJcbiAgICBcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0XHRcdFRoZSBpbml0aWFsIHBhdHRlcm4gY29uc3RpdHV0ZXMgdGhlIHNlZWQgb2YgdGhlIHN5c3RlbS4gXHJcbiAgICBcdFx0XHRUaGUgZmlyc3QgZ2VuZXJhdGlvbiBpcyBjcmVhdGVkIGJ5IGFwcGx5aW5nIHRoZSBhYm92ZSBydWxlcyBcclxuICAgIFx0XHRcdHNpbXVsdGFuZW91c2x5IHRvIGV2ZXJ5IGNlbGwgaW4gdGhlIHNlZWQgLSBiaXJ0aHMgYW5kIGRlYXRocyBvY2N1ciBzaW11bHRhbmVvdXNseSwgXHJcbiAgICBcdFx0XHRhbmQgdGhlIGRpc2NyZXRlIG1vbWVudCBhdCB3aGljaCB0aGlzIGhhcHBlbnMgaXMgc29tZXRpbWVzIGNhbGxlZCBhIHRpY2sgXHJcbiAgICBcdFx0XHQoaW4gb3RoZXIgd29yZHMsIGVhY2ggZ2VuZXJhdGlvbiBpcyBhIHB1cmUgZnVuY3Rpb24gb2YgdGhlIHByZWNlZGluZyBvbmUpLiBcclxuICAgIFx0XHRcdFRoZSBydWxlcyBjb250aW51ZSB0byBiZSBhcHBsaWVkIHJlcGVhdGVkbHkgdG8gY3JlYXRlIGZ1cnRoZXIgZ2VuZXJhdGlvbnMuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PC9kaXY+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRFeGFtcGxlcyBvZiBQYXR0ZXJuc1xyXG4gICAgXHQgICAgXHQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgSW4gb3JkZXIgdG8gc2ltdWxhdGUgaW5maW5pdGUgZ3JpZCBvbiB0aGUgZ2FtZSBib2FyZCBhbmQgaW4gdGhlIGV4YW1wbGVzIGJlbG93IChleGNlcHQgZm9yIHRoZSBndW4gcGF0dGVybiksIFxyXG4gICAgICAgICAgICAgICAgY2VsbHMgdGhhdCBhcmUgc2l0dWF0ZWQgb24gdGhlIGVkZ2VzIG9mIHRoZSBib2FyZHMgYXJlIGhhbmRsZWQgaW4gYSB0b3JvaWRhbCBtYW5uZXIsIFxyXG4gICAgICAgICAgICAgICAgaS5lLiBsb3dlciBuZWlnaGJvciBvZiBhIGNlbGwgc2l0dWF0ZWQgb24gdGhlIGJvdHRvbSBlZGdlIG9mIGJvYXJkIHdpbGwgYmUgYSBjZWxsIGZyb20gXHJcbiAgICAgICAgICAgICAgICB0aGUgdG9wIGVkZ2Ugb24gdGhlIHNhbWUgY29sdW1uIGFuZCBhIG5laWdoYm9yIHRvIHRoZSByaWdodCBvZiBhIGNlbGwgc2l0dWF0ZWQgb24gdGhlIHJpZ2h0IFxyXG4gICAgICAgICAgICAgICAgZWRnZSB3aWxsIGJlIGZyb20gdGhlIGxlZnQgZWRnZS4gXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgXHQgICAgXHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0U3RpbGwgTGlmZVxyXG4gICAgXHQgICAgXHQ8L2g0PlxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdFN0YWJsZSBmaW5pdGUgcGF0dGVybnMuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9ID5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQkxPQ0tdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTE9DS10uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQk9BVF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuQk9BVF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJPQVRdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuTE9BRl0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuTE9BRl0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkxPQUZdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFRUhJVkVdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFRUhJVkVdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUVISVZFXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0ICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgT3NjaWxsYXRvcnMgXHJcbiAgICBcdFx0ICAgIDwvaDQ+XHJcbiAgICBcdFx0ICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0ICAgIFx0VGhlc2UgcGF0dGVybnMgcmVwZWF0IHRoZWlyIGNvbmZpZ3VyYXRpb24gcGVyaW9kaWNhbGx5IGFuZCBpbmZpbml0ZWx5LiBUaGUgYmFzaWMgb3NjaWxsYXRvcnMgaGF2ZSBwZXJpb2RzIG9mIHR3byBvciB0aHJlZSB0aWNrcy4gXHJcbiAgICAgICAgICAgICAgICBUaGUgbW9zdCBjb21tb24gcGVyaW9kLTIgb3NjaWxsYXRvcnMgaW5jbHVkZTpcclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG4gICAgXHQgICAgXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17OH0+XHJcbiAgICBcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJMSU5LRVJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5ibGlua2VyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IFwiQmxpbmtlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLmJsaW5rZXIuZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTElOS0VSXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CTElOS0VSXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUFDT05dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5iZWFjb25XaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gXCJCZWFjb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbdGhpcy5iZWFjb24uZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5CRUFDT05dLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkJFQUNPTl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlRPQURdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy50b2FkV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IFwiVG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLnRvYWQuZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5UT0FEXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgR2xpZGVycyBhbmQgU3BhY2VzaGlwc1xyXG4gICAgXHRcdCAgICA8L2g0PlxyXG4gICAgXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdEEgc3BhY2VzaGlwIGlzIG1vcmUgY29tcGxleCBvc2NpbGxhdG9yLCByZXR1cm5pbmcgdG8gdGhlIHNhbWUgY29uZmlndXJhdGlvbiBidXQgc2hpZnRlZCBhZnRlciBhIGZpbml0ZSBudW1iZXIgb2YgZ2VuZXJhdGlvbnMuIFxyXG4gICAgXHQgICAgXHRUaGUgZ2xpZGVyIGlzIGEgc2ltcGxlIHNwYWNlc2hpcCB0aGF0IGhhcyBwZXJpb2QgNCwgaS5lLiByZXBlYXRzIGV2ZXJ5IGZvdXIgZ2VuZXJhdGlvbnMsIGJ1dCBcclxuICAgICAgICAgICAgICAgIG1vdmVzIGRpYWdvbmFsbHkgb25lIGNlbGwgZXZlcnkgZm91ciBnZW5lcmF0aW9ucy5cclxuICAgIFx0ICAgIFx0T3RoZXIgZXhhbXBsZXMgb2Ygc2ltcGxlIHNwYWNlc2hpcHMgaW5jbHVkZSBsaWdodHdlaWdodCwgbWVkaXVtIHdlaWdodCwgYW5kIGhlYXZ5d2VpZ2h0IHNwYWNlc2hpcHMuIFxyXG4gICAgXHQgICAgXHRUaGV5IGVhY2ggbW92ZSBpbiBhIHN0cmFpZ2h0IGxpbmUuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9PlxyXG4gICAgXHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xJREVSXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZ2xpZGVyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IFwiR2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW3RoaXMuZ2xpZGVyLmdyaWQubmFtZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHt0aGlzLmJ1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR0xJREVSXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HTElERVJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG5cclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5TUEFDRVNISVBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5zcGFjZXNoaXBXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gXCJMaWdodHdlaWdodCBTcGFjZXNoaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbdGhpcy5zcGFjZXNoaXAuZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5TUEFDRVNISVBdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLlNQQUNFU0hJUF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHQgICAgPC9HcmlkPlx0ICAgXHJcbiAgICBcdFx0ICAgIDwvZGl2PiBcdFxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIEd1bnNcclxuICAgIFx0XHQgICAgPC9oND5cclxuICAgIFx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHRcdFx0Q29ud2F5IG9mZmVyZWQgYSBwcml6ZSBmb3IgYW55IGV4YW1wbGUgb2YgcGF0dGVybnMgdGhhdCBncm93IGZvcmV2ZXIuIFxyXG4gICAgXHRcdFx0Q29ud2F5J3MgcHJpemUgd2FzIGNvbGxlY3RlZCBzb29uIGFmdGVyIGl0cyBhbm5vdW5jZW1lbnQsIHdoZW4gdHdvIGRpZmZlcmVudCB3YXlzIHdlcmUgZGlzY292ZXJlZCBmb3IgZGVzaWduaW5nIGEgcGF0dGVybiB0aGF0IGdyb3dzIGZvcmV2ZXIuXHJcblxyXG4gICAgXHRcdFx0VGhlIGZpcnN0IG9mIHRoZXNlIHBhdHRlcm5zIGlzIHRoZSBwZXJpb2QtMzAgZ2xpZGVyIGd1biwgd2hpY2ggaXMgYmFzZWQgb24gdGhlIGludGVyYWN0aW9uIG9mIHR3byBxdWVlbiBiZWUgc2h1dHRsZXMuIFxyXG4gICAgXHRcdFx0V2hlcmUgdGhlc2Ugc2h1dHRsZXMgY29sbGlkZSwgaW5zdGVhZCBvZiBwcm9kdWNpbmcgYmVlaGl2ZXMsIHRoZXkgcHJvZHVjZSBhIG5ldyBnbGlkZXIuIFxyXG4gICAgXHRcdFx0VGhpcyBnbGlkZXIgbW92ZXMgYXdheSBpbiB0aW1lIGZvciB0aGUgcHJvY2VzcyB0byByZXBlYXQgaXRzZWxmIDMwIHN0ZXBzIGxhdGVyLlxyXG4gICAgXHRcdFx0PC9wPlxyXG4gICAgXHRcdFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz17MTJ9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZXMuR1VOXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gXCJUaGUgR29zcGVyIEdsaWRlciBHdW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbdGhpcy5ndW4uZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lcy5HVU5dLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWVzLkdVTl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcblxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHRcclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRPcmlnaW5zXHJcbiAgICBcdCAgICBcdDwvaDI+XHJcblxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+Q29ud2F5IHdhcyBpbnRlcmVzdGVkIGluIGEgcHJvYmxlbSBwcmVzZW50ZWQgaW4gdGhlIDE5NDBzIGJ5IFxyXG4gICAgXHQgICAgXHRtYXRoZW1hdGljaWFuIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Kb2huX3Zvbl9OZXVtYW5uXCIgIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiSm9obiB2b24gTmV1bWFublwiPkpvaG4gdm9uIE5ldW1hbm48L2E+LCBcclxuICAgIFx0ICAgIFx0d2hvIGF0dGVtcHRlZCB0byBmaW5kIGEgaHlwb3RoZXRpY2FsIG1hY2hpbmUgdGhhdCBjb3VsZCBidWlsZCBjb3BpZXMgb2YgaXRzZWxmIFxyXG4gICAgXHQgICAgXHRhbmQgc3VjY2VlZGVkIHdoZW4gaGUgZm91bmQgYSBtYXRoZW1hdGljYWwgbW9kZWwgZm9yIHN1Y2ggYSBtYWNoaW5lIHdpdGggdmVyeSBcclxuICAgIFx0ICAgIFx0Y29tcGxpY2F0ZWQgcnVsZXMgb24gYSByZWN0YW5ndWxhciBncmlkLiBUaGUgR2FtZSBvZiBMaWZlIGVtZXJnZWQgYXMgQ29ud2F5J3MgXHJcbiAgICBcdCAgICBcdHN1Y2Nlc3NmdWwgYXR0ZW1wdCB0byBkcmFzdGljYWxseSBzaW1wbGlmeSB2b24gTmV1bWFubidzIGlkZWFzLlxyXG5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlRoZSBnYW1lIG1hZGUgaXRzIGZpcnN0IHB1YmxpYyBhcHBlYXJhbmNlIGluIHRoZSBPY3RvYmVyIDE5NzAgaXNzdWUgb2YgPGk+U2NpZW50aWZpYyBBbWVyaWNhbjwvaT4sIGluIE1hcnRpbiBHYXJkbmVyJ3MgY29sdW1uLiBcclxuICAgIFx0ICAgIFx0RnJvbSBhIHRoZW9yZXRpY2FsIHBvaW50IG9mIHZpZXcsIGl0IGlzIGludGVyZXN0aW5nIGJlY2F1c2UgaXQgaGFzIHRoZSBwb3dlciBvZiBcclxuICAgIFx0ICAgIFx0YSB1bml2ZXJzYWwgVHVyaW5nIG1hY2hpbmU6IHRoYXQgaXMsIGFueXRoaW5nIHRoYXQgY2FuIGJlIGNvbXB1dGVkIGFsZ29yaXRobWljYWxseSBcclxuICAgIFx0ICAgIFx0Y2FuIGJlIGNvbXB1dGVkIHdpdGhpbiBDb253YXkncyBHYW1lIG9mIExpZmUuIEdhcmRuZXIgd3JvdGU6XHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGJsb2NrcXVvdGU+XHJcbiAgICBcdFx0XHQ8cD5UaGUgZ2FtZSBtYWRlIENvbndheSBpbnN0YW50bHkgZmFtb3VzLCBidXQgaXQgYWxzbyBvcGVuZWQgdXAgYSB3aG9sZSBuZXcgXHJcbiAgICBcdFx0XHRmaWVsZCBvZiBtYXRoZW1hdGljYWwgcmVzZWFyY2gsIHRoZSBmaWVsZCBvZiBjZWxsdWxhciBhdXRvbWF0YSZuYnNwOy4uLiBCZWNhdXNlIG9mIExpZmUncyBhbmFsb2dpZXMgd2l0aCB0aGUgcmlzZSwgXHJcbiAgICBcdFx0XHRmYWxsIGFuZCBhbHRlcmF0aW9ucyBvZiBhIHNvY2lldHkgb2YgbGl2aW5nIG9yZ2FuaXNtcywgaXQgYmVsb25ncyB0byBhIFxyXG4gICAgXHRcdFx0Z3Jvd2luZyBjbGFzcyBvZiB3aGF0IGFyZSBjYWxsZWQgXCJzaW11bGF0aW9uIGdhbWVzXCIgKGdhbWVzIHRoYXQgcmVzZW1ibGUgcmVhbCBsaWZlIHByb2Nlc3NlcykuXHJcbiAgICBcdFx0XHQ8L3A+XHJcbiAgICBcdFx0XHQ8L2Jsb2NrcXVvdGU+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0XHJcbiAgICBcdFx0XHQ8L0dyaWQ+XHJcbiAgICBcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0gPiA8L0dyaWQ+XHJcbiAgICBcdFx0XHQ8L0dyaWQ+XHJcbiAgICBcdCAgICAgXHJcbiAgICBcdCAgICA8L2Rpdj5cclxuICAgIFx0KTsgXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbkFib3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHNldFN0b3BwZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzdG9wcGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIFtib2FyZE5hbWVzLk1BSU5dOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CTE9DS106IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJPQVRdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5MT0FGXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkVFSElWRV06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJMSU5LRVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CRUFDT05dOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5UT0FEXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuR0xJREVSXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuU1BBQ0VTSElQXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuR1VOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBYm91dCk7XHJcblxyXG5cclxuY29uc3QgcGF0dGVybkJvYXJkID0gKGdyaWQsY2VsbHNMaXN0KSA9PiAoe2dyaWQsY2VsbHNMaXN0fSlcclxuXHJcblxyXG5jb25zdCBCb2FyZEVsZW1lbnQgPSAoe3dpZHRoLCBwYXR0ZXJuTmFtZSwgc3RvcHBlZCwgYnV0dG9uQ29sb3IsIHdpdGhCdXR0b24sIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIiBzdHlsZT17e3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8Y2FudmFzXHJcbiAgICAgICAgICAgICAgICByZWY9e3Byb3BzLnNldENhbnZhc31cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB7d2l0aEJ1dHRvbiA/IChcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7cHJvcHMuaGFuZGxlUGxheVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb249e3N0b3BwZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSWNvbj17PFBsYXlBcnJvdyBjbGFzc05hbWU9XCJpY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZkljb249ezxQYXVzZSBjbGFzc05hbWU9XCJpY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0ge2J1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cGF0dGVybk5hbWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLmJvYXJkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVDZWxsc0xpc3QgPSAoY29vcmRpbmF0ZXMsIHNoaWZ0KSA9PiB7XHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMuc3BsaXQoXCJcXHJcXG5cIikucmVkdWNlKGZ1bmN0aW9uKGFjYywgdmFsLCBZKXtcclxuICAgICAgICB2YWwuc3BsaXQoJ2MnKS5yZWR1Y2UoKGFjY1gsIHZhbFgsIFgpID0+IHtcclxuICAgICAgICAgICAgaWYodmFsWCAhPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGFjYy5wdXNoKFtZICsgc2hpZnRbMF0sICt2YWxYICsgc2hpZnRbMV1dKVxyXG4gICAgICAgIH0sW10pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LFtdKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQWJvdXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFGQTs7QUFNQTtBQUNBO0FBSkE7O0FBS0E7O0FBSUE7QUFIQTtBQUZBOztBQU9BOztBQUdBO0FBRkE7QUFHQTtBQUVBO0FBUEE7O0FBU0E7QUFDQTs7QUFHQTtBQUZBO0FBSUE7QUFQQTs7QUFTQTtBQUFBO0FBREE7QUE5QkE7QUFDQTs7QUFzQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBb1NBO0FBQ0E7QUFyU0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQVFBO0FBQ0E7QUFEQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFFQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFPQTtBQUFBOzs7O0FBS0E7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBOztBQUdBO0FBQUE7QUFDQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFEQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSkE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFKQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSkE7O0FBQUE7QUFVQTtBQVZBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVJBOztBQUFBO0FBYUE7QUFiQTtBQUNBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7O0FBQUE7QUFhQTtBQWJBO0FBQ0E7QUFZQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFSQTs7QUFBQTtBQWNBO0FBZEE7QUFDQTtBQWFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7O0FBQUE7QUFhQTtBQWJBO0FBQ0E7QUFZQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFSQTs7QUFBQTtBQWVBO0FBZkE7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBOztBQUFBO0FBY0E7QUFkQTtBQUNBO0FBYUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFLQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBZ0JBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFEQTtBQUNBOztBQURBO0FBS0E7QUFMQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFRQTs7QUFBQTtBQUtBO0FBTEE7QUFBQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBdkJBO0FBbURBO0FBbkRBO0FBSkE7QUFDQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQVBBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==