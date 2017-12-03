'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

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
// import Paper from 'material-ui/Paper';

// import injectSheet from 'react-jss';


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

function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
}

var styles = {
				mainContent: {
								marginTop: 75
				},
				intro: {
								// backgroundColor:'rgba(240,248,255,.7)',
								// padding:5,

				},
				rules: {
								backgroundColor: 'rgba(240,248,255,.7)'

				},
				// rulesPar: {
				// 	marginTop: 20
				// },
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
				'@global iframe': {
								// width: '100%',
								// height: '100%',
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
				border: {
								border: '1px solid blue'
				},
				button: {
								// border: '1px solid blue',
								// padding: 0,
								// margin: 0,
								width: 35,
								height: 35
				},
				video: {
								// backgroundColor:'rgba(0,0,0,.2)',
								// // borderRadius: '0 0 5px 5px',
								// // color: 'white',
								textAlign: 'center',
								fontFamily: 'Open Sans',
								fallbacks: {
												fontFamily: 'sans-serif'
								},

								// padding: 10,
								// marginBottom: 10,
								// position: 'absolute',
								// top:0,
								// left:0,
								// paddingBottom: '56.25%',

								// overflow: 'hidden',
								marginTop: 30
								// width: '100%',
				},
				board: {
								display: 'flex',
								// flexDirection: 'column',
								// justifyContent: 'flex-start',
								// alignItems: 'center',
								// flexGrow: 1,
								// position: 'relative',
								fontSize: '.7em',
								textAlign: 'center',
								fontFamily: 'Open Sans',
								fallbacks: {
												fontFamily: 'sans-serif'

								},
								'@global span': {}

				},
				boardsSection: {
								//     	display:"flex",
								// justifyContent: 'flex-start',
								display: 'inline-block',
								marginTop: 30
				},
				item: {
								'align-self': 'flex-end'
				}
};

var About = function (_Component) {
				(0, _inherits3.default)(About, _Component);

				function About(props) {
								(0, _classCallCheck3.default)(this, About);

								var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

								_this.handleWindowSizeChange = function () {
												// console.log(this.gun);
												_this.gun.grid.handleWindowSizeChange(_this.patterns.gun);
								};

								var blockCellsList = [[1, 1], [1, 2], [2, 1], [2, 2]];
								var boatCellsList = [[1, 1], [1, 2], [2, 1], [2, 3], [3, 2]];
								var loafCellsList = [[2, 1], [1, 3], [1, 2], [2, 4], [3, 2], [4, 3], [3, 4]];
								var beehiveCellsList = [[1, 2], [1, 3], [2, 1], [2, 4], [3, 2], [3, 3]];
								var blinkerCellsList = [[2, 1], [2, 2], [2, 3]];
								var beaconCellsList = [[1, 1], [1, 2], [2, 1], [2, 2], [3, 3], [3, 4], [4, 3], [4, 4]];
								var toadCellsList = [[2, 2], [2, 3], [2, 4], [3, 1], [3, 2], [3, 3]];
								var gliderCellsList = [[5, 4], [4, 3], [3, 5], [4, 5], [5, 5]];
								var spaceshipCellsList = [[5, 3], [7, 3], [4, 4], [4, 5], [4, 6], [4, 7], [5, 7], [6, 7], [7, 6]];
								var gunCellsList = [[5, 1], [6, 1], [5, 2], [6, 2], [5, 11], [6, 11], [7, 11], [4, 12], [8, 12], [3, 13], [9, 13], [3, 14], [9, 14], [6, 15], [4, 16], [8, 16], [5, 17], [6, 17], [7, 17], [6, 18], [3, 21], [4, 21], [5, 21], [3, 22], [4, 22], [5, 22], [2, 23], [6, 23], [1, 25], [2, 25], [6, 25], [7, 25], [3, 35], [4, 35], [3, 36], [4, 36]];
								_this.patterns = {};
								// console.log(this.patterns.block)
								var blockGrid = new _GameGrid2.default(_boardNames.boardNames.BLOCK, 4, 4, 12);
								var boatGrid = new _GameGrid2.default(_boardNames.boardNames.BOAT, 5, 5, 12);
								var loafGrid = new _GameGrid2.default(_boardNames.boardNames.LOAF, 6, 6, 12);
								var beehiveGrid = new _GameGrid2.default(_boardNames.boardNames.BEEHIVE, 6, 5, 12);
								var blinkerGrid = new _GameGrid2.default(_boardNames.boardNames.BLINKER, 5, 5, 12);
								var beaconGrid = new _GameGrid2.default(_boardNames.boardNames.BEACON, 6, 6, 12);
								var toadGrid = new _GameGrid2.default(_boardNames.boardNames.TOAD, 6, 6, 12);
								var gliderGrid = new _GameGrid2.default(_boardNames.boardNames.GLIDER, 10, 10, 12);
								var spaceshipGrid = new _GameGrid2.default(_boardNames.boardNames.SPACESHIP, 12, 12, 12);
								var gunIsOpenUniv = true;
								var gunGrid = new _GameGrid2.default(_boardNames.boardNames.GUN, 40, 20, 12, gunIsOpenUniv);
								_this.motionPatternList = [];
								_this.rAF = null;

								_this.block = patternBoard(blockGrid, blockCellsList);
								_this.boat = patternBoard(boatGrid, boatCellsList);
								_this.loaf = patternBoard(loafGrid, loafCellsList);
								_this.beehive = patternBoard(beehiveGrid, beehiveCellsList);
								_this.blinker = patternBoard(blinkerGrid, blinkerCellsList);
								_this.beacon = patternBoard(beaconGrid, beaconCellsList);
								_this.toad = patternBoard(toadGrid, toadCellsList);
								_this.glider = patternBoard(gliderGrid, gliderCellsList);
								_this.spaceship = patternBoard(spaceshipGrid, spaceshipCellsList);
								_this.gun = patternBoard(gunGrid, gunCellsList);
								_this.boards = [_this.block, _this.boat, _this.loaf, _this.beehive, _this.blinker, _this.beacon, _this.toad, _this.glider, _this.spaceship, _this.gun];
								_this.interval = 300;
								// let patternsWidthRelation = blockGrid.width == 5 ? 5/6 : blockGrid.width == 4 ? 4/6 : blockGrid.width == 10 ? 10/12 : 1;
								// let screenScale = 10;
								_this.orientationVerical = false;
								// console.log(props)
								// if(props.screen.width < 900){
								// 	screenScale = 3;
								// }

								// ((width + 1) * squareSize) * ratio;

								_this.buttonColor = 'rgba(0, 0, 0, .7)';
								_this.getWidth = _this.getWidth.bind(_this);
								// this.createCanvas = this.createCanvas.bind(this);
								_this.state = {
												reload: false,
												screen: {
																width: window.innerWidth,
																height: window.innerHeight,
																ratio: window.devicePixelRatio || 1,
																screenScale: window.innerWidth < 900 ? 3 : 10
												}
								};

								_this.blockWidth = _this.getWidth(_this.block.grid);
								// props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
								// this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
								_this.boatWidth = _this.getWidth(_this.boat.grid);
								_this.loafWidth = _this.getWidth(_this.loaf.grid);
								_this.beehiveWidth = _this.getWidth(_this.beehive.grid);
								_this.blinkerWidth = _this.getWidth(_this.blinker.grid);
								_this.beaconWidth = _this.getWidth(_this.beacon.grid);
								_this.toadWidth = _this.getWidth(_this.toad.grid);
								_this.gliderWidth = _this.getWidth(_this.glider.grid);
								_this.spaceshipWidth = _this.getWidth(_this.spaceship.grid);
								_this.gunWidth = _this.getWidth(_this.gun.grid);
								// this.boatWidth = props.screen.width/screenScale * getPatternsWidthRelation(boatGrid.width) * .6;
								// this.loafWidth = props.screen.width/screenScale * getPatternsWidthRelation(loafGrid.width) * .6;
								// this.beehiveWidth = props.screen.width/screenScale * getPatternsWidthRelation(beehiveGrid.width) * .6;
								// this.blinkerWidth = props.screen.width/screenScale * getPatternsWidthRelation(blinkerGrid.width) * .6;
								// this.beaconWidth = props.screen.width/screenScale * getPatternsWidthRelation(beaconGrid.width) * .6;
								// this.toadWidth = props.screen.width/screenScale * getPatternsWidthRelation(toadGrid.width) * .6;
								// this.gliderWidth = props.screen.width/screenScale * getPatternsWidthRelation(gliderGrid.width) * .6;
								// this.spaceshipWidth = props.screen.width/screenScale * getPatternsWidthRelation(spaceshipGrid.width) * .6;
								// this.gunWidth = props.screen.width/screenScale * getPatternsWidthRelation(gunGrid.width) * .6;   
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
												// console.log(`${screen} ${screen.screenScale} ${width} ${squareSize}`)
												// console.log((width + 1) * squareSize * screen.width/100 * getPatternsWidthRelation(width))

												var w = (width + 1) * squareSize * screen.width / 100 * .7 / screen.screenScale;
												return w > screen.width * .6 ? screen.width * .6 : w;
								}

								// createCanvas(pattern, canvas) {
								//     this.canvasBoard = canvas;
								//     const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
								//     console.log(ratio)
								//     console.log(this.canvasBoard)
								//     this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,null);
								//     this.updateOnce()
								// }

				}, {
								key: 'handlePlayToggle',
								value: function handlePlayToggle(pattern) {

												if (this.props.stopped[pattern.grid.name]) {
																this.start(pattern);
												} else {

																this.stop(pattern);
												}
												// // pattern.stopped = !pattern.stopped;
												// this.setState({reload:!this.state.reload})
								}
				}, {
								key: 'stop',
								value: function stop(pattern) {
												if (!this.props.stopped[pattern.grid.name]) {

																// try{

																// this.proceed=false;
																this.setStopped(true, pattern.grid.name);
																// pattern.stopped = true;
																// this.stopped = true;
																// this.changeButtonPressedStatus("pause");
																// clearTimeout(this.timeoutID);
																var index = this.motionPatternList.indexOf(pattern);
																this.motionPatternList.splice(index, 1);
																if (this.motionPatternList.length === 0) {
																				cancelAnimationFrame(this.rAF);
																}

																// this.setState({
																//     tick: null,

																//   }
																// );
																// console.log(this.state.tick);

																// console.log(this.state.tick);
																// } catch(e){
																//     console.log(e.message);
																// }            
												}
								}
				}, {
								key: 'start',
								value: function start(pattern) {
												var _this2 = this;

												if (this.props.stopped[pattern.grid.name]) {
																this.setStopped(false, pattern.grid.name);
																// pattern.stopped = false;
																// console.log("A")
																// this.proceed=true;
																// this.isClearState = false;
																// this.stopped = false;
																// this.changeButtonPressedStatus("start");
																this.motionPatternList.push(pattern);
																this.then = Date.now();
																// if(this.state.drawing){
																//     // this.isManualState = false;
																//     // this.nextGenerationChangeCellsList = totalNeighborsRevision(this.valuesBoard);
																//     // this.nextGeneration.list = totalNeighborsRevision(this.valuesBoard);
																// }
																// this.setState({
																//     drawing:false,
																//     // tick:requestAnimationFrame(() =>{this.update()}),

																// });
																// this.mode.drawing=false;
																if (this.motionPatternList.length === 1) {
																				this.rAF = requestAnimationFrame(function () {
																								_this2.update();
																				});
																}

																// console.log("A")            
												}
								}
				}, {
								key: 'update',
								value: function update() {
												var _this3 = this;

												// if(this.state.stopped){

												//     this.stop();
												// } else {
												// requestAnimationFrame(() =>{this.update()});

												// console.log(this.count++)
												this.now = Date.now();
												this.delta = this.now - this.then;

												if (this.delta > this.interval) {

																// this.then += this.interval
																this.then = this.now - this.delta % this.interval;

																this.motionPatternList.forEach(function (p) {
																				return p.grid.update();
																});
												}
												// this.setState({

												//     tick:requestAnimationFrame(() =>{this.update()}),

												// });         
												this.rAF = requestAnimationFrame(function () {
																_this3.update();
												});
												// }
								}
				}, {
								key: 'componentWillUpdate',

								// shouldComponentUpdate(nextProps){
								// 	let screenScale = 10;
								// 	if(this.orientationVerical){
								// 		if(nextProps.screen.width>nextProps.screen.height){
								// if(nextProps.screen.width < 900){
								// 	// console.log("as");
								// 	screenScale = 3;
								// }

								// 	// ((width + 1) * squareSize) * ratio;
								// this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
								//  // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
								// // this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
								// this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
								// this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
								// this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
								// this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
								// this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
								// this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
								// this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
								// this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
								// this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
								// // this.setState({reload: !this.state.reload});
								// return true;
								// 		}
								// 	}else {
								// 		if(nextProps.screen.width<nextProps.screen.height){
								// if(nextProps.screen.width < 900){
								// 	// console.log("as");
								// 	screenScale = 3;
								// }

								// 	// ((width + 1) * squareSize) * ratio;
								// this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
								//  // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
								// // this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
								// this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
								// this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
								// this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
								// this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
								// this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
								// this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
								// this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
								// this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
								// this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
								// // this.setState({reload: !this.state.reload});
								// return true;
								// 		}    		
								// 	}
								// 	return false;
								// }      n

								value: function componentWillUpdate() {
												//   	let screenScale = 10;

												// if(this.props.screen.width < 700){
												// 	// console.log("as");
												// 	screenScale = 3;


												// 	// ((width + 1) * squareSize) * ratio;
												// 	this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
												// 	 // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
												// 	// this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
												// 	this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
												// 	this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
												// 	this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
												// 	this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
												// 	this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
												// 	this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
												// 	this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
												// 	this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
												// 	this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
												// 	this.setState({reload: !this.state.reload});
												// }
												this.gunWidth = this.gunWidth > this.state.screen.width * .6 ? this.state.screen.width * .6 : this.gunWidth;
								}
				}, {
								key: 'componentWillMount',
								value: function componentWillMount() {
												window.addEventListener('resize', this.handleWindowSizeChange);
								}
				}, {
								key: 'componentDidMount',
								value: function componentDidMount() {
												// console.log(this.patterns.block)
												// console.log(this.patterns.boat)
												// window.addEventListener('resize', this.handleWindowSizeChange);
												//         this.setState({screen: {
												//             width: window.innerWidth,
												//             height: window.innerHeight,
												//             ratio: window.devicePixelRatio || 1,
												//             screenScale: window.innerWidth < 900 ? 3 : 10,
												//         }
												//     })

												this.block.grid.makeBoard(this.block.grid.width, this.block.grid.height, this.block.grid.squareSize, this.state.screen.ratio, this.patterns.block, this.block.cellsList, this.state.screen);
												this.block.grid.update();
												this.boat.grid.makeBoard(this.boat.grid.width, this.boat.grid.height, this.boat.grid.squareSize, this.state.screen.ratio, this.patterns.boat, this.boat.cellsList, this.state.screen);
												this.boat.grid.update();
												this.loaf.grid.makeBoard(this.loaf.grid.width, this.loaf.grid.height, this.loaf.grid.squareSize, this.state.screen.ratio, this.patterns.loaf, this.loaf.cellsList, this.state.screen);
												this.loaf.grid.update();
												this.beehive.grid.makeBoard(this.beehive.grid.width, this.beehive.grid.height, this.beehive.grid.squareSize, this.state.screen.ratio, this.patterns.beehive, this.beehive.cellsList, this.state.screen);
												this.beehive.grid.update();
												this.blinker.grid.makeBoard(this.blinker.grid.width, this.blinker.grid.height, this.blinker.grid.squareSize, this.state.screen.ratio, this.patterns.blinker, this.blinker.cellsList);
												this.blinker.grid.update();
												this.beacon.grid.makeBoard(this.beacon.grid.width, this.beacon.grid.height, this.beacon.grid.squareSize, this.state.screen.ratio, this.patterns.beacon, this.beacon.cellsList);
												this.beacon.grid.update();
												this.toad.grid.makeBoard(this.toad.grid.width, this.toad.grid.height, this.toad.grid.squareSize, this.state.screen.ratio, this.patterns.toad, this.toad.cellsList);
												this.toad.grid.update();
												this.glider.grid.makeBoard(this.glider.grid.width, this.glider.grid.height, this.glider.grid.squareSize, this.state.screen.ratio, this.patterns.glider, this.glider.cellsList);
												this.glider.grid.update();
												this.spaceship.grid.makeBoard(this.spaceship.grid.width, this.spaceship.grid.height, this.spaceship.grid.squareSize, this.state.screen.ratio, this.patterns.spaceship, this.spaceship.cellsList);
												this.spaceship.grid.update();

												this.gun.grid.makeBoard(this.gun.grid.width, this.gun.grid.height, this.gun.grid.squareSize, this.state.screen.ratio, this.patterns.gun, this.gun.cellsList);
												this.gun.grid.update();
								}
				}, {
								key: 'componentWillUnmount',
								value: function componentWillUnmount() {

												cancelAnimationFrame(this.rAF);
												this.setStopped(true, null);
												// this.props.values.speed = this.state.fps;
												// this.props.values.pattern = this.state.patternNamesIndex;
												// this.props.values.patternList = this.state.patternsList;
												// this.props.values.generationCount = this.state.generationCount;
								}
				}, {
								key: 'render',
								value: function render() {
												var _this4 = this;

												// console.log(this.props);
												var classes = this.props.classes;
												// console.log(this.gliderWidth);
												// console.log(this.blockWidth);
												return _react2.default.createElement('div', { className: classes.mainContent, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 504
																}
												}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 506
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 508
																}
												}, ' '), _react2.default.createElement(_Grid2.default, { item: true, xs: 10, sm: 8, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 510
																}
												}, _react2.default.createElement('p', { className: classes.intro + ' ' + classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 512
																}
												}, _react2.default.createElement('strong', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 513
																}
												}, 'The Game of Life'), ', also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties.'), _react2.default.createElement('div', { className: classes.video, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 521
																}
												}, _react2.default.createElement(_reactYoutube2.default, {
																videoId: 'CgOcEZinQ2I',
																opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 522
																}
												}), 'Fragment from Stephen Hawking`s The Meaning of Life'), _react2.default.createElement('div', { className: classes.rulesPar, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 531
																}
												}, _react2.default.createElement('h2', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 532
																}
												}, 'Rules'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 535
																}
												}, 'The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:'), _react2.default.createElement('div', { className: classes.rules, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 542
																}
												}, _react2.default.createElement('ul', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 543
																}
												}, _react2.default.createElement('li', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 544
																}
												}, 'Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.'), _react2.default.createElement('li', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 545
																}
												}, 'Any live cell with two or three live neighbours lives on to the next generation.'), _react2.default.createElement('li', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 546
																}
												}, 'Any live cell with more than three live neighbours dies, as if by overpopulation.'), _react2.default.createElement('li', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 547
																}
												}, 'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'))), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 550
																}
												}, 'The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.')), _react2.default.createElement('h2', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 559
																}
												}, 'Patterns'), _react2.default.createElement('h4', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 562
																}
												}, 'Still Life'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 565
																}
												}, 'These are stable patterns that do not change and can be used to build critical solid parts of complex patterns.'), _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 569
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 573
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.blockWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 574
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 575
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.block = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 576
																}
												}), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 580
																}
												}, 'Block')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 588
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.boatWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 589
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 590
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.boat = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 591
																}
												}), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 595
																}
												}, 'Boat')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 603
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.loafWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 604
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 605
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.loaf = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 606
																}
												}), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 610
																}
												}, 'Loaf')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 618
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.beehiveWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 619
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 620
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.beehive = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 621
																}
												}), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 625
																}
												}, 'Beehive'))))), _react2.default.createElement('h4', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 634
																}
												}, 'Oscillators'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 637
																}
												}, 'These patterns are more complex and change over a specific number of ticks. They repeat their pattern infinitely. The basic oscillators have periods of two or three ticks, but complex oscillators have been discovered with periods of twenty or more ticks. These oscillators are very useful for setting off other reactions of bumping stable patterns to set off a chain reaction of instability. The most common period-2 oscillators include:'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 644
																}
												}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 645
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 648
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.blinkerWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 649
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 650
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.blinker = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 651
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.blinker);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 655
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.blinker.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 658
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 659
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 656
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 663
																}
												}, 'Blinker')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 671
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.beaconWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 672
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 673
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.beacon = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 674
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.beacon);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 678
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.beacon.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 681
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 682
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 679
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 686
																}
												}, 'Beacon')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 693
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.toadWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 694
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 695
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.toad = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 696
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.toad);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 700
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.toad.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 703
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 704
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 701
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 708
																}
												}, 'Toad')))))), _react2.default.createElement('h4', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 717
																}
												}, 'Gliders and Spaceships'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 720
																}
												}, 'A spaceship is a pattern that moves, returning to the same configuration but shifted after a finite number of generations. The glider is an example of a simple spaceship and its generations each consist of five live cells. The glider has a period of four and moves diagonally one cell every four generations. Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. They each move in a straight line.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 727
																}
												}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 728
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 731
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.gliderWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 732
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 733
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.glider = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 734
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.glider);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 739
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.glider.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 742
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 743
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 740
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 748
																}
												}, 'Glider')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 756
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.spaceshipWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 757
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 758
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.spaceship = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 759
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.spaceship);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 764
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.spaceship.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 767
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 768
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 765
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 773
																}
												}, 'Lightweight Spaceship')))))), _react2.default.createElement('h4', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 783
																}
												}, 'Guns'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 786
																}
												}, 'Conway offered a prize for any example of patterns that grow forever. Conway\'s prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever. The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. Where these shuttles collide, instead of producing beehives, they produce a new glider. This glider moves away in time for the process to repeat itself 30 steps later.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 794
																}
												}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 795
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 798
																}
												}, _react2.default.createElement('div', { className: classes.board, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 799
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 800
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.gun = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 801
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.gun);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 805
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.gun.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 808
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 809
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 806
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 813
																}
												}, 'The Gosper Glider Gun')))))), _react2.default.createElement('h2', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 823
																}
												}, 'Origins'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 827
																}
												}, 'Conway was interested in a problem presented in the 1940s by mathematician ', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/John_von_Neumann', target: '_blank', title: 'John von Neumann', __source: {
																				fileName: _jsxFileName,
																				lineNumber: 828
																}
												}, 'John von Neumann'), ', who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway\'s successful attempt to drastically simplify von Neumann\'s ideas.'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 836
																}
												}, 'The game made its first public appearance in the October 1970 issue of ', _react2.default.createElement('i', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 836
																}
												}, 'Scientific American'), ', in Martin Gardner\'s column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway\'s Game of Life. Gardner wrote:'), _react2.default.createElement('blockquote', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 841
																}
												}, _react2.default.createElement('p', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 842
																}
												}, 'The game made Conway instantly famous, but it also opened up a whole new field of mathematical research, the field of ', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/Cellular_automaton', target: '_blank', title: 'Cellular automata', __source: {
																				fileName: _jsxFileName,
																				lineNumber: 843
																}
												}, 'cellular automata'), '\xA0... Because of Life\'s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called "simulation games" (games that resemble real life processes).'))), _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 851
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

function patternBoard(grid, cellsList) {
				return {
								grid: grid,
								cellsList: cellsList
								// stopped: true,

				};
}

function getPatternsWidthRelation(width) {
				return width == 5 ? 5 / 6 : width == 4 ? 4 / 6 : width == 10 ? 10 / 12 : 1;
}

// <Grid container spacing={0}>

// 		    <Grid item xs={12} md={3} > 
// 	    	</Grid>
// 	    	<Grid item xs={12} md={6} > 
// 	    	<div className={classes.video}>

// 	    	Fragment from Stephen Hawking`s The Meaning of Life
// 			</div>
// 	    	</Grid>
// 	    	<Grid item xs={12} md={3} > 
// 	    	</Grid>
// 	    	</Grid>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsIm1haW5Db250ZW50IiwibWFyZ2luVG9wIiwiaW50cm8iLCJydWxlcyIsImJhY2tncm91bmRDb2xvciIsInRleHQiLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYnV0dG9uIiwidmlkZW8iLCJ0ZXh0QWxpZ24iLCJib2FyZCIsImRpc3BsYXkiLCJmb250U2l6ZSIsImJvYXJkc1NlY3Rpb24iLCJpdGVtIiwiQWJvdXQiLCJwcm9wcyIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJndW4iLCJncmlkIiwicGF0dGVybnMiLCJibG9ja0NlbGxzTGlzdCIsImJvYXRDZWxsc0xpc3QiLCJsb2FmQ2VsbHNMaXN0IiwiYmVlaGl2ZUNlbGxzTGlzdCIsImJsaW5rZXJDZWxsc0xpc3QiLCJiZWFjb25DZWxsc0xpc3QiLCJ0b2FkQ2VsbHNMaXN0IiwiZ2xpZGVyQ2VsbHNMaXN0Iiwic3BhY2VzaGlwQ2VsbHNMaXN0IiwiZ3VuQ2VsbHNMaXN0IiwiYmxvY2tHcmlkIiwiQkxPQ0siLCJib2F0R3JpZCIsIkJPQVQiLCJsb2FmR3JpZCIsIkxPQUYiLCJiZWVoaXZlR3JpZCIsIkJFRUhJVkUiLCJibGlua2VyR3JpZCIsIkJMSU5LRVIiLCJiZWFjb25HcmlkIiwiQkVBQ09OIiwidG9hZEdyaWQiLCJUT0FEIiwiZ2xpZGVyR3JpZCIsIkdMSURFUiIsInNwYWNlc2hpcEdyaWQiLCJTUEFDRVNISVAiLCJndW5Jc09wZW5Vbml2IiwiZ3VuR3JpZCIsIkdVTiIsIm1vdGlvblBhdHRlcm5MaXN0IiwickFGIiwiYmxvY2siLCJwYXR0ZXJuQm9hcmQiLCJib2F0IiwibG9hZiIsImJlZWhpdmUiLCJibGlua2VyIiwiYmVhY29uIiwidG9hZCIsImdsaWRlciIsInNwYWNlc2hpcCIsImJvYXJkcyIsImludGVydmFsIiwib3JpZW50YXRpb25WZXJpY2FsIiwiYnV0dG9uQ29sb3IiLCJnZXRXaWR0aCIsImJpbmQiLCJzdGF0ZSIsInJlbG9hZCIsInNjcmVlbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNjcmVlblNjYWxlIiwiYmxvY2tXaWR0aCIsImJvYXRXaWR0aCIsImxvYWZXaWR0aCIsImJlZWhpdmVXaWR0aCIsImJsaW5rZXJXaWR0aCIsImJlYWNvbldpZHRoIiwidG9hZFdpZHRoIiwiZ2xpZGVyV2lkdGgiLCJzcGFjZXNoaXBXaWR0aCIsImd1bldpZHRoIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJuYW1lIiwic3F1YXJlU2l6ZSIsInciLCJwYXR0ZXJuIiwic3RhcnQiLCJzdG9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibGVuZ3RoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwdXNoIiwidGhlbiIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJkZWx0YSIsImZvckVhY2giLCJwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCb2FyZCIsImNlbGxzTGlzdCIsImNsYXNzZXMiLCJwbGF5ZXJWYXJzIiwic2hvd2luZm8iLCJyZWwiLCJydWxlc1BhciIsImNhbnZhcyIsImhhbmRsZVBsYXlUb2dnbGUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwiTUFJTiIsImJvb2wiLCJnZXRQYXR0ZXJuc1dpZHRoUmVsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7OztBQUxBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU07O21CQUFTLEFBQ0QsQUFDRCxBQUVU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