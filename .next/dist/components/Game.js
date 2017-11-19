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

var _styles = require('material-ui/styles');

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

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Game.js',
    _PropTypes$shape;
// import Header from './components/Header'


var Game = function (_Component) {
    (0, _inherits3.default)(Game, _Component);

    // {error, patterns}
    function Game(props) {
        (0, _classCallCheck3.default)(this, Game);

        // this.gamePageState = {
        //     liveCells: null,
        //     size: null,
        //     speed: null,
        //     pattern: null,
        //     patternList: null,
        //     generationCount: null,
        // };
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
            //         this.canvasBoard.width=((this.gridWidth + 1) * this.squareSize) * this.ratio;
            // console.log(`${this.gridWidth} + ${this.squareSize} * ${this.state.screen.ratio}`)
            console.log("vvv");
            // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.ratio;
        };

        _this.handleOpenErrorDialog = function () {
            _this.setState({ showMessage: true });
        };

        _this.handleCloseErrorDialog = function () {
            // console.log("close")
            _this.setState({ showMessage: false });
        };

        _this.gridSizes = ["20 X 30", "40 X 60", "60 X 90"];

        console.log(props);
        if (props.cellsList) {
            console.log(props.cellsList);
            _this.gridWidth = props.size.dimensionX;
            _this.gridHeight = props.size.dimensionY;
            _this.squareSize = props.size.squareSize;
        } else {
            _this.gridWidth = 60;
            _this.gridHeight = 40;
            _this.squareSize = 12;
        }

        _this.patternNames = ["Random"];
        if (props.patterns) _this.patternNames = _this.patternNames.concat(props.patterns.map(function (pattern) {
            return pattern.name;
        }));
        console.log(props.patterns);
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

    // createCanvas(canvas) {
    //     this.canvasBoard = canvas;
    //     const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
    //     console.log(ratio)
    //     console.log(this.canvasBoard)
    //     this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,null);
    //     this.updateOnce()
    // }


    (0, _createClass3.default)(Game, [{
        key: 'reload',
        value: function reload(dimensions, squareSize) {

            this.stop();
            // this.currentX = 0;
            // this.currentY = 0;
            // this.checkList = [];
            // this.stopped = false;
            // this.isFirstLoop = true;
            this.startPressed = false;
            this.pausePressed = false;
            this.clearPressed = false;
            this.stepPressed = false;
            // this.timeoutID=null;

            // this.patterns = null;
            // this.nextGenerationChangeCellsList=null;
            // this.nextGeneration = {
            //     list:null,
            //     isFirst:true,
            // }
            // this.currentGenerationChangeCellsList=null;
            // this.currentLiveCells=null;
            // this.isManualState = false;

            // this.state.context.save()
            // this.state.context.clearRect(0, 0, this.gridWidth, this.gridHeight);
            // this.state.context.restore()
            this.gridWidth = dimensions.x;
            this.gridHeight = dimensions.y;
            this.squareSize = squareSize;
            this.grid.reload(this.gridWidth, this.gridHeight, this.squareSize, this.canvasBoard);
            // this.canvasBoard.width=((this.gridWidth + 1) * this.squareSize) * this.props.screen.ratio;
            // // console.log("this.squareSize")
            // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.props.screen.ratio;
            // if(this.props.screen.width >= 768){
            //     this.canvasBoard.style.width=(this.gridWidth + 1) * this.squareSize + "px";
            //     // console.log(this.squareSize)
            //     this.canvasBoard.style.height=(this.gridHeight + 1) * this.squareSize + "px";            
            // } else {
            // let r = this.canvasBoard.height / this.canvasBoard.width;
            // this.canvasBoard.style.width="100%";
            // // console.log(this.canvasBoard.offsetWidth);
            // this.canvasBoard.style.height=this.canvasBoard.offsetWidth * r + "px";
            // console.log(this.canvasBoard.offsetWidth * r);
            // }

            // var ctx = this.canvasBoard.getContext('2d')
            // ctx.scale(this.props.screen.ratio, this.props.screen.ratio)    
            // drawGrid(this.canvasBoard, this.gridWidth, this.gridHeight, this.squareSize)
            // this.originalCellImage = ctx.getImageData(this.squareSize * this.props.screen.ratio / 2, this.squareSize * this.props.screen.ratio / 2, this.squareSize * this.props.screen.ratio, this.squareSize* this.props.screen.ratio)

            // this.originalCellImage = ctx.getImageData(this.squareSize / 2, this.squareSize / 2, this.squareSize, this.squareSize)
            // this.isClearState = true;
            // const s = document.querySelector('select[name="pattern-name"]');
            // const i = s.selectedIndex;
            // s.options[s.selectedIndex].selected = false;
            // s.options[0].selected = true;
            // this.valuesBoard = Array(this.gridHeight).fill(null);
            // // // .map(arr=>Array(100).fill(new Cell()));
            // for(let i=0;i<this.gridHeight;i++){
            //     this.valuesBoard[i] = Array(this.gridWidth).fill(null);
            //     for(let j=0;j<this.gridWidth;j++){
            //         this.valuesBoard[i][j] = new Cell(this.checkList,i,j);
            //     }
            // }
            // for(let i=0;i<this.gridHeight;i++){

            //     for(let j=0;j<this.gridWidth;j++){

            //         this.setListeners(i,j);
            //         // console.log(`${i} ${j} - ${this.valuesBoard[i][j].listeners["stateChange"].length}`);
            //     }

            // }
            // this.currentPatternBoard = Array(this.gridHeight).fill(null);
            // for(let i=0;i<this.gridHeight;i++){
            //     this.currentPatternBoard[i] = Array(this.gridHeight).fill(null);
            //     for(let j=0;j<this.gridWidth;j++){
            //         this.currentPatternBoard[i][j] = this.valuesBoard[i][j].state;
            //     }
            // }
            // this.start = this.start.bind(this);
            // this.changePatternEventHandler = this.changePatternEventHandler.bind(this);
            // const squares = Array(this.gridHeight/10).fill(null);
            // for (let i = 0; i < squares.length; i++) {
            //     squares[i] = Array(this.gridWidth/10);
            //     for (var j = 0; j < squares[i].length; j++) {
            //         squares[i][j] = {isChanged: false, cell: []}
            //     };
            // };
            this.mode.clear = true;
            this.mode.drawing = false;
            // this.
            // this.setState({
            //     generationCount: 0,   
            //     stopped: true,
            //     patternNamesIndex:-1,

            // });
        }
    }, {
        key: 'updateOnce',
        value: function updateOnce() {

            // this.generationCount += 1;
            // this.checkList.length = 0;

            // //this operation changes valuesBoard and checklist
            // let changeCellList = getChangeList(this.valuesBoard,this.nextGeneration,this.checkList);//the list of cells that changes color;

            // updateTable(this.valuesBoard, this.nextGeneration.list, this.canvasBoard, this.squareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);
            // if(!this.state.drawing){
            //     // this.currentGenerationChangeCellsList=this.nextGenerationChangeCellsList;

            //     this.nextGeneration.list = changeCellList;     
            //     this.nextGeneration.isFirst = false       
            // }
            // console.log("updateOnce");
            this.grid.update(this.mode);
            // console.log(this.state.clear);
            if (!this.mode.drawing) this.incrementGeneration();
            // this.setState((prevState) => {

            //     return {
            //     generationCount: prevState.generationCount + 1,
            //     // clear:false,
            //     // initial:false,
            // }});
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

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

                this.updateOnce();
            }
            // this.setState({

            //     tick:requestAnimationFrame(() =>{this.update()}),

            // });         
            this.rAF = requestAnimationFrame(function () {
                _this2.update();
            });
            // }
        }
    }, {
        key: 'changePatternEvent',
        value: function changePatternEvent(index) {

            // // var nextGenerationChangeCellsList;
            if (index !== this.props.patternNamesIndex) {

                this.grid.changePattern(index, this.props.patterns, this.mode);
                //     // if(index>0){
                //     //     //get the coordinates of choosed pattern adjusted to current board size
                //     //     nextGenerationChangeCellsList=adjustToSize(this.state.patternsList[index-1].pattern,this.gridHeight,this.gridWidth);
                //     //     // console.log(nextGenerationChangeCellsList)
                //     // } else {
                //     //     //random live cells have index = 0
                //     //     nextGenerationChangeCellsList=getRandomPattern(this.gridHeight,this.gridWidth);
                //     // }
                this.changePattern(index);
                // this.setState({
                //     patternNamesIndex:index, 
                //     generationCount: -1
                // });
                //     // const s = event.target;
                //     // const i = s.selectedIndex;
                //     // console.log(this.state.patternNamesIndex);

                if (this.mode.clear) {
                    //board is clear - there aren't any live cells on the board
                    console.log("sd");
                    // this.isFirstLoop = true;
                    // this.nextGeneration.list = nextGenerationChangeCellsList;
                    // this.nextGeneration.isFirst = true
                    this.mode.clear = false;
                    this.updateOnce();
                    // this.setState({
                    //     clear:false,
                    // });
                } else {
                    //         //we have to clear the remained cells 
                    //         // this.changePattern(nextGenerationChangeCellsList);
                    this.stop();
                    // // this.nextGeneration.list=getChangePatternChangeList(this.valuesBoard, newPattern);
                    // // this.nextGeneration.isFirst = true

                    this.updateOnce();
                    //         // this.nextGenerationChangeCellsList = getChangePatternChangeList(nextGenerationChangeCellsList);
                    //         // this.updateOnce();
                    //         // console.log(i+ " "+ nextGenerationChangeCellsList);
                    //         // this.start(nextGenerationChangeCellsList);
                    //         // console.log(this.isClearState);
                    //         // if(this.isFirstLoop)
                    //         //   f();      
                }
            }
        }
    }, {
        key: 'changeBoardSizeEventHandler',
        value: function changeBoardSizeEventHandler(index) {
            if (index !== this.props.gridSizesIndex) {
                var dimensions = {};
                var squareSize = null;
                if (index === 0) {
                    dimensions = { x: 30, y: 20 };
                    squareSize = 24;
                } else if (index === 1) {
                    dimensions = { x: 60, y: 40 };
                    squareSize = 12;
                } else if (index === 2) {
                    dimensions = { x: 90, y: 60 };
                    squareSize = 8;
                }

                this.reload(dimensions, squareSize);
                this.changeBoardSize(index);
                // this.setState({gridSizesIndex:index, generationCount: 0})
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
            // // this.fps = value;
            this.interval = 1000 / value;
            this.setSpeed(value);
            // // console.log(this.state.fps+"zas");
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

            // this.isManualState = true;
            // this.setState({
            //     drawing:true,
            // });
            this.mode.drawing = true;
            // // let runningState = this.stopped ? false : true;
            // let runningState = this.props.stopped[boardNames.MAIN] ? false : true;
            if (!this.props.stopped[_boardNames.boardNames.MAIN]) {
                // console.log("this.squareSize")
                this.stop();
            }

            var isCellClicked = this.grid.handleClick(e);

            if (isCellClicked) {

                // this.setState((prevState) => {
                //         return {generationCount:prevState.generationCount - 1,clear:false,}
                //     });
                this.mode.clear = false;
                this.updateOnce();
            }

            //  const ctx = this.canvasBoard.getContext('2d');     
            //      // context = this.getContext('2d');

            //  const rect = this.canvasBoard.getBoundingClientRect();
            //  const cnvLeft = Math.floor(rect.left);
            //  const cnvRight = Math.floor(rect.right);
            //  const cnvTop = Math.floor(rect.top);
            //  const cnvBottom = Math.floor(rect.bottom);
            //  const currentSquareSize = this.squareSize * this.props.screen.ratio
            //  const r = currentSquareSize / 2 - 1
            //  const boardWidth=(this.gridWidth + 1) * currentSquareSize
            //  // console.log("this.squareSize")
            //  const boardHeight=(this.gridHeight + 1) * currentSquareSize
            //  let x = Math.round((getCursorPos(e)[0]-cnvLeft)/(cnvRight-cnvLeft)*boardWidth);
            //  let y = Math.round((getCursorPos(e)[1]-cnvTop)/(cnvBottom-cnvTop)*boardHeight);
            // if((x + currentSquareSize/2) % currentSquareSize !== 0 && (y + currentSquareSize/2) % currentSquareSize !== 0){
            //      // Chrome 1+


            //      const nearestX = Math.floor((x + currentSquareSize / 2) / currentSquareSize)
            //      const nearestY = Math.floor((y + currentSquareSize / 2) / currentSquareSize)
            //      //correct chrome coordinates misfunction
            //      // const isChrome = !!window.chrome && !!window.chrome.webstore 
            //      // if(isChrome) {
            //      //     if(x > nearestX && y > nearestY){
            //      //         x += 1
            //      //         y += 1
            //      //     } else if(x < nearestX && y < nearestY){
            //      //         x -= 1
            //      //         y -= 1
            //      //     }
            //      // }
            //      // console.log(`${x} - ${nearestX} - ${nearestX * currentSquareSize} - ${y} - ${nearestY} - ${nearestY * currentSquareSize} - ${Math.pow(x - nearestX * currentSquareSize, 2) + Math.pow(y - nearestY * currentSquareSize, 2)}`)
            //      if(Math.pow(x - nearestX * currentSquareSize, 2) + Math.pow(y - nearestY * currentSquareSize, 2) < Math.pow(r, 2)){

            //          const clickedCell = [nearestY - 1, nearestX - 1];


            //          this.nextGeneration.list = [];
            //          this.nextGeneration.list.push(clickedCell);
            //          this.setState((prevState) => {
            //              return {generationCount:prevState.generationCount - 1,clear:false,}
            //          });
            //          this.mode.clear=false;
            //          this.updateOnce();
            //          // if(runningState){
            //          //     this.start();
            //          // } 
            //      }

            //  }

            // console.log(Math.floor(x/this.squareSize) + " " + Math.floor(y/this.squareSize))
        }
    }, {
        key: 'start',
        value: function start() {
            var _this3 = this;

            if (!this.startPressed && !this.mode.clear) {
                //     console.log("A")
                //     // this.proceed=true;
                //     // this.isClearState = false;
                //     // this.stopped = false;
                this.changeButtonPressedStatus("start");
                this.then = Date.now();
                //     // if(this.state.drawing){
                //     //     // this.isManualState = false;
                //     //     // this.nextGenerationChangeCellsList = totalNeighborsRevision(this.valuesBoard);
                //     //     // this.nextGeneration.list = totalNeighborsRevision(this.valuesBoard);
                //     // }
                //     this.setState({
                //         drawing:false,
                //         // tick:requestAnimationFrame(() =>{this.update()}),

                //     });
                this.mode.drawing = false;
                this.setStopped(false);
                this.rAF = requestAnimationFrame(function () {
                    _this3.update();
                });
                //   // console.log("A")            
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (!this.pausePressed) {

                try {

                    // this.proceed=false;
                    // this.setStopped(true);
                    this.setStopped(true);
                    // this.stopped = true;
                    this.changeButtonPressedStatus("pause");
                    // clearTimeout(this.timeoutID);
                    cancelAnimationFrame(this.rAF);
                    // this.setState({
                    //     tick: null,

                    //   }
                    // );
                    // console.log(this.state.tick);

                    // console.log(this.state.tick);
                } catch (e) {
                    console.log(e.message);
                }
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
                // this.nextGeneration.list=totalLiveCellsRevision(this.valuesBoard);
                // this.nextGeneration.isFirst = true;
                // this.setState({
                //     generationCount:-1,
                // });

                this.updateOnce();
                // this.checkList.length = 0;
            }
        }
    }, {
        key: 'step',
        value: function step() {
            if (!this.startPressed && !this.mode.clear) {
                this.changeButtonPressedStatus("step");
                if (this.mode.drawing) {
                    // this.isManualState = false;
                    // this.setState({
                    //     drawing:false,
                    // });    
                    this.mode.drawing = false;
                    // this.nextGenerationChangeCellsList = totalNeighborsRevision(this.valuesBoard);
                    // this.nextGeneration.list = totalNeighborsRevision(this.valuesBoard);
                }
                this.updateOnce();
            }
        }

        // componentWillMount(){
        //     console.log("ssss")
        //     if (typeof window !== 'undefined'){


        //     }
        // }

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

                // console.log(ratio)
                // console.log(this.canvasBoard)
                this.grid.makeBoard(this.gridWidth, this.gridHeight, this.squareSize, ratio, this.canvasBoard, null);
                this.updateOnce();

                // this.mode.clear=false;
                // this.PatternFetcher.getPatterns(this.urlM).then(patternList => {
                //     this.setState({patternsList:patternList, generationCount:-1, clear:false,});
                //     this.nextGeneration.list = getRandomPattern(this.gridHeight,this.gridWidth);
                // // //     // console.log(this.patterns[1].pattern)
                // // //     // this.nextGeneration.list = this.patterns[1].pattern
                //     this.nextGeneration.isFirst = true
                //     this.updateOnce();
                //             this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,this.ratio,this.canvasBoard,this.props.values.liveCellsList);
                // this.updateOnce();
                //     }).catch(e => {
                //         this.handleOpen()
                //         this.setState({generationCount:-1, clear:false,})
                //     //     this.nextGeneration.list = getRandomPattern(this.gridHeight,this.gridWidth);
                //     // // //     // console.log(this.patterns[1].pattern)
                //     // // //     // this.nextGeneration.list = this.patterns[1].pattern
                //     //     this.nextGeneration.isFirst = true
                //     //     this.updateOnce();
                //             this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,this.ratio,this.canvasBoard,this.props.values.liveCellsList);
                // this.updateOnce();
                //     });
            } else {

                // this.setState({patternsList:this.props.values.patternList, generationCount:this.state.generationCount - 1, clear:false,})

                // this.nextGeneration.list = this.props.values.liveCellsList;

                // this.nextGeneration.isFirst = true;
                // this.updateOnce();
                this.mode.clear = false;
                console.log(this.props.cellsList);
                this.grid.makeBoard(this.gridWidth, this.gridHeight, this.squareSize, ratio, this.canvasBoard, this.props.cellsList);
                this.updateOnce();
            }

            // window.addEventListener('resize', this.handleWindowSizeChange);


            if (this.props.error) {
                this.handleOpenErrorDialog();
            }
            // this.updateOnce();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {

            cancelAnimationFrame(this.rAF);
            var liveCellsList = this.grid.getLiveCells();
            var size = {
                dimensionX: this.gridWidth,
                dimensionY: this.gridHeight,
                squareSize: this.squareSize
            };
            this.setGameValues(liveCellsList, size);
            // this.props.values.speed = this.state.fps;
            // this.props.values.pattern = this.state.patternNamesIndex;
            // this.props.values.patternList = this.state.patternsList;
            // this.props.values.generationCount = this.state.generationCount;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var patterns = this.props.patterns;
            // console.log(patterns)
            // const actions = [
            //   <Button
            //     label="OK"
            //     primary={true}
            //     onTouchTap={this.handleClose}
            //   />
            // ];

            // const classes = this.props.classes;
            var Loading = function Loading() {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 692
                    }
                }, 'Loading...');
            };
            // this.check++;

            // const isSmall = this.props.screen.width < 600;

            var screen = this.state.screen ? this.state.screen : {};
            console.log(this.props.fps);
            //     width: window.innerWidth,
            //     height: window.innerHeight,
            //     ratio: window.devicePixelRatio || 1,
            // };

            //         if(this.screen.width !== this.props.screen.width
            //  || this.screen.height !== this.props.screen.height
            //  || this.screen.ratio !== this.props.screen.ratio){
            //     console.log("componentWillUpdate")
            //     this.screen.width = this.props.screen.width;
            //     this.screen.height = this.props.screen.height;
            //     this.screen.ratio = this.props.screen.ratio;
            //     this.grid.handleWindowSizeChange(this.screen, this.canvasBoard);
            // }
            // console.log("reload");

            // var patternNames = ["Random"]
            // if(this.state.patternsList)
            // patternNames = patternNames.concat(this.state.patternsList.map(pattern => pattern.name))

            return _react2.default.createElement('div', {
                className: 'jsx-585749582' + ' ' + 'gameBoard',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 721
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 724
                }
            }, screen.width < screen.height || screen.width > 1280 ? _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 726
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-585749582' + ' ' + 'paddingSides',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 728
                }
            }, _react2.default.createElement(_SelectButtonsBar2.default, {
                patternNamesIndex: this.props.patternNamesIndex,
                patternNames: this.patternNames,
                changePatternEvent: function changePatternEvent(v) {
                    return _this4.changePatternEvent(v);
                },
                patternLabel: 'Pattern',
                gridSizesIndex: this.props.gridSizesIndex,
                gridSizes: this.gridSizes,
                changeBoardSizeEventHandler: function changeBoardSizeEventHandler(v) {
                    return _this4.changeBoardSizeEventHandler(v);
                },
                gridLabel: 'Board Size',
                justify: 'center',

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 729
                }
            }))) : _react2.default.createElement(_Grid2.default, { item: true, xs: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 745
                }
            }, _react2.default.createElement(_SelectButtonsBar2.default, {
                patternNamesIndex: this.props.patternNamesIndex,
                patternNames: this.patternNames,
                changePatternEvent: function changePatternEvent(v) {
                    return _this4.changePatternEvent(v);
                },
                patternLabel: 'Pattern',
                gridSizesIndex: this.props.gridSizesIndex,
                gridSizes: this.gridSizes,
                changeBoardSizeEventHandler: function changeBoardSizeEventHandler(v) {
                    return _this4.changeBoardSizeEventHandler(v);
                },
                gridLabel: 'Board Size',

                direction: 'column',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 749
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, lg: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 768
                }
            }), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 771
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 772
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, className: 'paddingSides', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 773
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
                    lineNumber: 774
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 781
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
                    lineNumber: 782
                }
            })))), _react2.default.createElement(_Grid2.default, { item: true, lg: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 795
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '585749582',
                css: '.gameBoard{text-align:center;margin-top:20px;z-index:2;}.paddingSides{padding-left:10;padding-right:10;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK3hCa0MsQUFHMkMsQUFLRixnQkFDQyxFQUxELGVBTXBCLENBTGMsVUFDYiIsImZpbGUiOiJjb21wb25lbnRzXFxHYW1lLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9CdXR0b24nO1xyXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJztcclxuaW1wb3J0IEdhbWVHcmlkIGZyb20gJy4uL2hlbHBlcnMvR2FtZUdyaWQnO1xyXG5cclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ21hdGVyaWFsLXVpL0dyaWQnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgd2l0aFJvb3QgZnJvbSAnLi93aXRoUm9vdCc7XHJcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFNlbGVjdEJ1dHRvbnNCYXIgZnJvbSAnLi9TZWxlY3RCdXR0b25zQmFyJztcclxuaW1wb3J0IFBsYXlCdXR0b25zQmFyIGZyb20gJy4vUGxheUJ1dHRvbnNCYXInO1xyXG5pbXBvcnQge2JvYXJkTmFtZXN9IGZyb20gJy4uL2hlbHBlcnMvYm9hcmROYW1lcydcclxuaW1wb3J0IERpYWxvZywge1xyXG4gIERpYWxvZ0FjdGlvbnMsXHJcbiAgRGlhbG9nQ29udGVudCxcclxuICBEaWFsb2dDb250ZW50VGV4dCxcclxuICBEaWFsb2dUaXRsZSxcclxufSBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vIHtlcnJvciwgcGF0dGVybnN9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZVBhZ2VTdGF0ZSA9IHtcclxuICAgICAgICAvLyAgICAgbGl2ZUNlbGxzOiBudWxsLFxyXG4gICAgICAgIC8vICAgICBzaXplOiBudWxsLFxyXG4gICAgICAgIC8vICAgICBzcGVlZDogbnVsbCxcclxuICAgICAgICAvLyAgICAgcGF0dGVybjogbnVsbCxcclxuICAgICAgICAvLyAgICAgcGF0dGVybkxpc3Q6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIGdlbmVyYXRpb25Db3VudDogbnVsbCxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIHRoaXMuZ3JpZFNpemVzID0gW1xyXG4gICAgICAgICAgICBcIjIwIFggMzBcIixcclxuICAgICAgICAgICAgXCI0MCBYIDYwXCIsXHJcbiAgICAgICAgICAgIFwiNjAgWCA5MFwiXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICAgICAgaWYocHJvcHMuY2VsbHNMaXN0KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuY2VsbHNMaXN0KVxyXG4gICAgICAgICAgICB0aGlzLmdyaWRXaWR0aCA9IHByb3BzLnNpemUuZGltZW5zaW9uWDtcclxuICAgICAgICAgICAgdGhpcy5ncmlkSGVpZ2h0ID0gcHJvcHMuc2l6ZS5kaW1lbnNpb25ZOyBcclxuICAgICAgICAgICAgdGhpcy5zcXVhcmVTaXplID0gcHJvcHMuc2l6ZS5zcXVhcmVTaXplO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZFdpZHRoID0gNjA7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZEhlaWdodCA9IDQwO1xyXG4gICAgICAgICAgICB0aGlzLnNxdWFyZVNpemUgPSAxMjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnBhdHRlcm5OYW1lcyA9IFtcIlJhbmRvbVwiXTtcclxuICAgICAgICBpZihwcm9wcy5wYXR0ZXJucylcclxuICAgICAgICAgICAgdGhpcy5wYXR0ZXJuTmFtZXMgPSB0aGlzLnBhdHRlcm5OYW1lcy5jb25jYXQocHJvcHMucGF0dGVybnMubWFwKHBhdHRlcm4gPT4gcGF0dGVybi5uYW1lKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMucGF0dGVybnMpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5tb2RlID0ge1xyXG4gICAgICAgICAgICBkcmF3aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xlYXI6dHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdXNlUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGVwUHJlc3NlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5NQUlOLCB0aGlzLmdyaWRXaWR0aCwgdGhpcy5ncmlkSGVpZ2h0LCB0aGlzLnNxdWFyZVNpemUpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVBhdHRlcm4gPSBpbmRleCA9PiBwcm9wcy5jaGFuZ2VQYXR0ZXJuKGluZGV4KTtcclxuICAgICAgICB0aGlzLmNoYW5nZUJvYXJkU2l6ZSA9IGluZGV4ID0+IHByb3BzLmNoYW5nZUJvYXJkU2l6ZShpbmRleCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVN0b3BwZWQgPSAoKSA9PiBwcm9wcy50b2dnbGVTdG9wcGVkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdG9wcGVkID0gc3RvcHBlZCA9PiBwcm9wcy5zZXRTdG9wcGVkKHN0b3BwZWQsIHRoaXMuZ3JpZC5uYW1lKTtcclxuICAgICAgICB0aGlzLmluY3JlbWVudEdlbmVyYXRpb24gPSAoKSA9PiBwcm9wcy5pbmNyZW1lbnRHZW5lcmF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTcGVlZCA9IGZwcyA9PiBwcm9wcy5zZXRTcGVlZChmcHMpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2xlYXIgPSAoKSA9PiBwcm9wcy5zZXRDbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc2V0R2FtZVZhbHVlcyA9ICAoY2VsbHNMaXN0LCBzaXplKSA9PiBwcm9wcy5zZXRHYW1lVmFsdWVzKGNlbGxzTGlzdCwgc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzaG93TWVzc2FnZTogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZUNhbnZhcyhjYW52YXMpIHtcclxuICAgIC8vICAgICB0aGlzLmNhbnZhc0JvYXJkID0gY2FudmFzO1xyXG4gICAgLy8gICAgIGNvbnN0IHJhdGlvID0gdGhpcy5zdGF0ZS5zY3JlZW4gPyB0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyA6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyYXRpbylcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmNhbnZhc0JvYXJkKVxyXG4gICAgLy8gICAgIHRoaXMuZ3JpZC5tYWtlQm9hcmQodGhpcy5ncmlkV2lkdGgsdGhpcy5ncmlkSGVpZ2h0LHRoaXMuc3F1YXJlU2l6ZSxyYXRpbyx0aGlzLmNhbnZhc0JvYXJkLG51bGwpO1xyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlT25jZSgpXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHJlbG9hZChkaW1lbnNpb25zLCBzcXVhcmVTaXplKXtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50WCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50WSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5jaGVja0xpc3QgPSBbXTtcclxuICAgICAgICAvLyB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmlzRmlyc3RMb29wID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0UHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF1c2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGVhclByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy50aW1lb3V0SUQ9bnVsbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLnBhdHRlcm5zID0gbnVsbDtcclxuICAgICAgICAvLyB0aGlzLm5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0PW51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5uZXh0R2VuZXJhdGlvbiA9IHtcclxuICAgICAgICAvLyAgICAgbGlzdDpudWxsLFxyXG4gICAgICAgIC8vICAgICBpc0ZpcnN0OnRydWUsXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3Q9bnVsbDtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRMaXZlQ2VsbHM9bnVsbDtcclxuICAgICAgICAvLyB0aGlzLmlzTWFudWFsU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmNvbnRleHQuc2F2ZSgpXHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdyaWRXaWR0aCwgdGhpcy5ncmlkSGVpZ2h0KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmNvbnRleHQucmVzdG9yZSgpXHJcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSBkaW1lbnNpb25zLng7XHJcbiAgICAgICAgdGhpcy5ncmlkSGVpZ2h0ID0gZGltZW5zaW9ucy55OyBcclxuICAgICAgICB0aGlzLnNxdWFyZVNpemUgPSBzcXVhcmVTaXplO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5yZWxvYWQodGhpcy5ncmlkV2lkdGgsdGhpcy5ncmlkSGVpZ2h0LHRoaXMuc3F1YXJlU2l6ZSx0aGlzLmNhbnZhc0JvYXJkKTtcclxuICAgICAgICAvLyB0aGlzLmNhbnZhc0JvYXJkLndpZHRoPSgodGhpcy5ncmlkV2lkdGggKyAxKSAqIHRoaXMuc3F1YXJlU2l6ZSkgKiB0aGlzLnByb3BzLnNjcmVlbi5yYXRpbztcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcInRoaXMuc3F1YXJlU2l6ZVwiKVxyXG4gICAgICAgIC8vIHRoaXMuY2FudmFzQm9hcmQuaGVpZ2h0PSgodGhpcy5ncmlkSGVpZ2h0ICsgMSkgKiB0aGlzLnNxdWFyZVNpemUpICogdGhpcy5wcm9wcy5zY3JlZW4ucmF0aW87XHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5zY3JlZW4ud2lkdGggPj0gNzY4KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW52YXNCb2FyZC5zdHlsZS53aWR0aD0odGhpcy5ncmlkV2lkdGggKyAxKSAqIHRoaXMuc3F1YXJlU2l6ZSArIFwicHhcIjtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcXVhcmVTaXplKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbnZhc0JvYXJkLnN0eWxlLmhlaWdodD0odGhpcy5ncmlkSGVpZ2h0ICsgMSkgKiB0aGlzLnNxdWFyZVNpemUgKyBcInB4XCI7ICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbGV0IHIgPSB0aGlzLmNhbnZhc0JvYXJkLmhlaWdodCAvIHRoaXMuY2FudmFzQm9hcmQud2lkdGg7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzQm9hcmQuc3R5bGUud2lkdGg9XCIxMDAlXCI7XHJcbiAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKHRoaXMuY2FudmFzQm9hcmQub2Zmc2V0V2lkdGgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhc0JvYXJkLnN0eWxlLmhlaWdodD10aGlzLmNhbnZhc0JvYXJkLm9mZnNldFdpZHRoICogciArIFwicHhcIjtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYW52YXNCb2FyZC5vZmZzZXRXaWR0aCAqIHIpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdmFyIGN0eCA9IHRoaXMuY2FudmFzQm9hcmQuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgICAgIC8vIGN0eC5zY2FsZSh0aGlzLnByb3BzLnNjcmVlbi5yYXRpbywgdGhpcy5wcm9wcy5zY3JlZW4ucmF0aW8pICAgIFxyXG4gICAgICAgIC8vIGRyYXdHcmlkKHRoaXMuY2FudmFzQm9hcmQsIHRoaXMuZ3JpZFdpZHRoLCB0aGlzLmdyaWRIZWlnaHQsIHRoaXMuc3F1YXJlU2l6ZSlcclxuICAgICAgICAvLyB0aGlzLm9yaWdpbmFsQ2VsbEltYWdlID0gY3R4LmdldEltYWdlRGF0YSh0aGlzLnNxdWFyZVNpemUgKiB0aGlzLnByb3BzLnNjcmVlbi5yYXRpbyAvIDIsIHRoaXMuc3F1YXJlU2l6ZSAqIHRoaXMucHJvcHMuc2NyZWVuLnJhdGlvIC8gMiwgdGhpcy5zcXVhcmVTaXplICogdGhpcy5wcm9wcy5zY3JlZW4ucmF0aW8sIHRoaXMuc3F1YXJlU2l6ZSogdGhpcy5wcm9wcy5zY3JlZW4ucmF0aW8pXHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5vcmlnaW5hbENlbGxJbWFnZSA9IGN0eC5nZXRJbWFnZURhdGEodGhpcy5zcXVhcmVTaXplIC8gMiwgdGhpcy5zcXVhcmVTaXplIC8gMiwgdGhpcy5zcXVhcmVTaXplLCB0aGlzLnNxdWFyZVNpemUpXHJcbiAgICAgICAgLy8gdGhpcy5pc0NsZWFyU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnN0IHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1cInBhdHRlcm4tbmFtZVwiXScpO1xyXG4gICAgICAgIC8vIGNvbnN0IGkgPSBzLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgLy8gcy5vcHRpb25zW3Muc2VsZWN0ZWRJbmRleF0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBzLm9wdGlvbnNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMudmFsdWVzQm9hcmQgPSBBcnJheSh0aGlzLmdyaWRIZWlnaHQpLmZpbGwobnVsbCk7XHJcbiAgICAgICAgLy8gLy8gLy8gLm1hcChhcnI9PkFycmF5KDEwMCkuZmlsbChuZXcgQ2VsbCgpKSk7XHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTx0aGlzLmdyaWRIZWlnaHQ7aSsrKXtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZXNCb2FyZFtpXSA9IEFycmF5KHRoaXMuZ3JpZFdpZHRoKS5maWxsKG51bGwpO1xyXG4gICAgICAgIC8vICAgICBmb3IobGV0IGo9MDtqPHRoaXMuZ3JpZFdpZHRoO2orKyl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZhbHVlc0JvYXJkW2ldW2pdID0gbmV3IENlbGwodGhpcy5jaGVja0xpc3QsaSxqKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBmb3IobGV0IGk9MDtpPHRoaXMuZ3JpZEhlaWdodDtpKyspe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaj0wO2o8dGhpcy5ncmlkV2lkdGg7aisrKXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKGksaik7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtpfSAke2p9IC0gJHt0aGlzLnZhbHVlc0JvYXJkW2ldW2pdLmxpc3RlbmVyc1tcInN0YXRlQ2hhbmdlXCJdLmxlbmd0aH1gKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50UGF0dGVybkJvYXJkID0gQXJyYXkodGhpcy5ncmlkSGVpZ2h0KS5maWxsKG51bGwpO1xyXG4gICAgICAgIC8vIGZvcihsZXQgaT0wO2k8dGhpcy5ncmlkSGVpZ2h0O2krKyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFBhdHRlcm5Cb2FyZFtpXSA9IEFycmF5KHRoaXMuZ3JpZEhlaWdodCkuZmlsbChudWxsKTtcclxuICAgICAgICAvLyAgICAgZm9yKGxldCBqPTA7ajx0aGlzLmdyaWRXaWR0aDtqKyspe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkJvYXJkW2ldW2pdID0gdGhpcy52YWx1ZXNCb2FyZFtpXVtqXS5zdGF0ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUGF0dGVybkV2ZW50SGFuZGxlciA9IHRoaXMuY2hhbmdlUGF0dGVybkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIGNvbnN0IHNxdWFyZXMgPSBBcnJheSh0aGlzLmdyaWRIZWlnaHQvMTApLmZpbGwobnVsbCk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHNxdWFyZXNbaV0gPSBBcnJheSh0aGlzLmdyaWRXaWR0aC8xMCk7XHJcbiAgICAgICAgLy8gICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3F1YXJlc1tpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vICAgICAgICAgc3F1YXJlc1tpXVtqXSA9IHtpc0NoYW5nZWQ6IGZhbHNlLCBjZWxsOiBbXX1cclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIHRoaXMubW9kZS5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLlxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICBnZW5lcmF0aW9uQ291bnQ6IDAsICAgXHJcbiAgICAgICAgLy8gICAgIHN0b3BwZWQ6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHBhdHRlcm5OYW1lc0luZGV4Oi0xLFxyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGVPbmNlKCl7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuZ2VuZXJhdGlvbkNvdW50ICs9IDE7XHJcbiAgICAgICAgLy8gdGhpcy5jaGVja0xpc3QubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgLy8gLy90aGlzIG9wZXJhdGlvbiBjaGFuZ2VzIHZhbHVlc0JvYXJkIGFuZCBjaGVja2xpc3RcclxuICAgICAgICAvLyBsZXQgY2hhbmdlQ2VsbExpc3QgPSBnZXRDaGFuZ2VMaXN0KHRoaXMudmFsdWVzQm9hcmQsdGhpcy5uZXh0R2VuZXJhdGlvbix0aGlzLmNoZWNrTGlzdCk7Ly90aGUgbGlzdCBvZiBjZWxscyB0aGF0IGNoYW5nZXMgY29sb3I7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZVRhYmxlKHRoaXMudmFsdWVzQm9hcmQsIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdCwgdGhpcy5jYW52YXNCb2FyZCwgdGhpcy5zcXVhcmVTaXplLCB0aGlzLmdyaWRXaWR0aCwgdGhpcy5ncmlkSGVpZ2h0LCB0aGlzLm9yaWdpbmFsQ2VsbEltYWdlLCB0aGlzLnJhdGlvKTtcclxuICAgICAgICAvLyBpZighdGhpcy5zdGF0ZS5kcmF3aW5nKXtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5jdXJyZW50R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdD10aGlzLm5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0O1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0ID0gY2hhbmdlQ2VsbExpc3Q7ICAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5pc0ZpcnN0ID0gZmFsc2UgICAgICAgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlT25jZVwiKTtcclxuICAgICAgICB0aGlzLmdyaWQudXBkYXRlKHRoaXMubW9kZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5jbGVhcik7XHJcbiAgICAgICAgaWYoIXRoaXMubW9kZS5kcmF3aW5nKVxyXG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudEdlbmVyYXRpb24oKTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgIGdlbmVyYXRpb25Db3VudDogcHJldlN0YXRlLmdlbmVyYXRpb25Db3VudCArIDEsXHJcbiAgICAgICAgLy8gICAgIC8vIGNsZWFyOmZhbHNlLFxyXG4gICAgICAgIC8vICAgICAvLyBpbml0aWFsOmZhbHNlLFxyXG4gICAgICAgIC8vIH19KTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIC8vIGlmKHRoaXMuc3RhdGUuc3RvcHBlZCl7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT57dGhpcy51cGRhdGUoKX0pO1xyXG5cclxuICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY291bnQrKylcclxuICAgICAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVsdGEgPiB0aGlzLmludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudGhlbiArPSB0aGlzLmludGVydmFsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmRlbHRhICUgdGhpcy5pbnRlcnZhbCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICB0aWNrOnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSksXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gfSk7ICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTsgXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2NyZWVuIDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UodGhpcy5jYW52YXNCb2FyZCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNhbnZhc0JvYXJkLndpZHRoPSgodGhpcy5ncmlkV2lkdGggKyAxKSAqIHRoaXMuc3F1YXJlU2l6ZSkgKiB0aGlzLnJhdGlvO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMuZ3JpZFdpZHRofSArICR7dGhpcy5zcXVhcmVTaXplfSAqICR7dGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW99YClcclxuICAgICAgICBjb25zb2xlLmxvZyhcInZ2dlwiKVxyXG4gICAgICAgIC8vIHRoaXMuY2FudmFzQm9hcmQuaGVpZ2h0PSgodGhpcy5ncmlkSGVpZ2h0ICsgMSkgKiB0aGlzLnNxdWFyZVNpemUpICogdGhpcy5yYXRpbztcclxuICAgIH07XHJcbiAgICBjaGFuZ2VQYXR0ZXJuRXZlbnQoaW5kZXgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIC8vIHZhciBuZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdDtcclxuICAgICAgICBpZihpbmRleCAhPT0gdGhpcy5wcm9wcy5wYXR0ZXJuTmFtZXNJbmRleCl7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5ncmlkLmNoYW5nZVBhdHRlcm4oaW5kZXgsIHRoaXMucHJvcHMucGF0dGVybnMsIHRoaXMubW9kZSk7XHJcbiAgICAgICAgLy8gICAgIC8vIGlmKGluZGV4PjApe1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgLy9nZXQgdGhlIGNvb3JkaW5hdGVzIG9mIGNob29zZWQgcGF0dGVybiBhZGp1c3RlZCB0byBjdXJyZW50IGJvYXJkIHNpemVcclxuICAgICAgICAvLyAgICAgLy8gICAgIG5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0PWFkanVzdFRvU2l6ZSh0aGlzLnN0YXRlLnBhdHRlcm5zTGlzdFtpbmRleC0xXS5wYXR0ZXJuLHRoaXMuZ3JpZEhlaWdodCx0aGlzLmdyaWRXaWR0aCk7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhuZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdClcclxuICAgICAgICAvLyAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIC8vcmFuZG9tIGxpdmUgY2VsbHMgaGF2ZSBpbmRleCA9IDBcclxuICAgICAgICAvLyAgICAgLy8gICAgIG5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0PWdldFJhbmRvbVBhdHRlcm4odGhpcy5ncmlkSGVpZ2h0LHRoaXMuZ3JpZFdpZHRoKTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBhdHRlcm4oaW5kZXgpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAvLyAgICAgcGF0dGVybk5hbWVzSW5kZXg6aW5kZXgsIFxyXG4gICAgICAgICAgICAvLyAgICAgZ2VuZXJhdGlvbkNvdW50OiAtMVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyAgICAgLy8gY29uc3QgcyA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAvLyAgICAgLy8gY29uc3QgaSA9IHMuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5wYXR0ZXJuTmFtZXNJbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLm1vZGUuY2xlYXIpe1xyXG4gICAgICAgICAgICAgICAgLy9ib2FyZCBpcyBjbGVhciAtIHRoZXJlIGFyZW4ndCBhbnkgbGl2ZSBjZWxscyBvbiB0aGUgYm9hcmRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2RcIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlzRmlyc3RMb29wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdCA9IG5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5uZXh0R2VuZXJhdGlvbi5pc0ZpcnN0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlLmNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNsZWFyOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vd2UgaGF2ZSB0byBjbGVhciB0aGUgcmVtYWluZWQgY2VsbHMgXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmNoYW5nZVBhdHRlcm4obmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0PWdldENoYW5nZVBhdHRlcm5DaGFuZ2VMaXN0KHRoaXMudmFsdWVzQm9hcmQsIG5ld1BhdHRlcm4pO1xyXG4gICAgICAgIC8vIC8vIHRoaXMubmV4dEdlbmVyYXRpb24uaXNGaXJzdCA9IHRydWVcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMubmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QgPSBnZXRDaGFuZ2VQYXR0ZXJuQ2hhbmdlTGlzdChuZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkrIFwiIFwiKyBuZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLnN0YXJ0KG5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0KTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNDbGVhclN0YXRlKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmKHRoaXMuaXNGaXJzdExvb3ApXHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgIGYoKTsgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcihpbmRleCl7XHJcbiAgICAgICAgaWYoaW5kZXggIT09IHRoaXMucHJvcHMuZ3JpZFNpemVzSW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGltZW5zaW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgc3F1YXJlU2l6ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMgPSB7eDogMzAsIHk6IDIwfVxyXG4gICAgICAgICAgICAgICAgc3F1YXJlU2l6ZSA9IDI0XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihpbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucyA9IHt4OiA2MCwgeTogNDB9XHJcbiAgICAgICAgICAgICAgICBzcXVhcmVTaXplID0gMTJcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zID0ge3g6IDkwLCB5OiA2MH1cclxuICAgICAgICAgICAgICAgIHNxdWFyZVNpemUgPSA4XHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbG9hZChkaW1lbnNpb25zLCBzcXVhcmVTaXplKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCb2FyZFNpemUoaW5kZXgpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2dyaWRTaXplc0luZGV4OmluZGV4LCBnZW5lcmF0aW9uQ291bnQ6IDB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlUGxheVRvZ2dsZSgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9OyAgXHJcblxyXG4gICAgc2V0SW50ZXJ2YWwodmFsdWUpe1xyXG4gICAgICAgIC8vIC8vIHRoaXMuZnBzID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbD0xMDAwL3ZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3BlZWQodmFsdWUpXHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5mcHMrXCJ6YXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhidXR0b25QcmVzc2VkKXtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdXNlUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGVwUHJlc3NlZCA9IGZhbHNlOyAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoKGJ1dHRvblByZXNzZWQpe1xyXG4gICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGF1c2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBcImNsZWFyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICBcclxuICAgICAgICAgICAgY2FzZSBcInN0ZXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5pc01hbnVhbFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgZHJhd2luZzp0cnVlLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMubW9kZS5kcmF3aW5nPXRydWU7XHJcbiAgICAgICAgLy8gLy8gbGV0IHJ1bm5pbmdTdGF0ZSA9IHRoaXMuc3RvcHBlZCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAvLyBsZXQgcnVubmluZ1N0YXRlID0gdGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZXMuTUFJTl0gPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNxdWFyZVNpemVcIilcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlzQ2VsbENsaWNrZWQgPSB0aGlzLmdyaWQuaGFuZGxlQ2xpY2soZSk7XHJcblxyXG4gICAgICAgIGlmKGlzQ2VsbENsaWNrZWQpe1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHtnZW5lcmF0aW9uQ291bnQ6cHJldlN0YXRlLmdlbmVyYXRpb25Db3VudCAtIDEsY2xlYXI6ZmFsc2UsfVxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXI9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIC8vICBjb25zdCBjdHggPSB0aGlzLmNhbnZhc0JvYXJkLmdldENvbnRleHQoJzJkJyk7ICAgICBcclxuICAgICAgIC8vICAgICAgLy8gY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBcclxuICAgICAgIC8vICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXNCb2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgIC8vICBjb25zdCBjbnZMZWZ0ID0gTWF0aC5mbG9vcihyZWN0LmxlZnQpO1xyXG4gICAgICAgLy8gIGNvbnN0IGNudlJpZ2h0ID0gTWF0aC5mbG9vcihyZWN0LnJpZ2h0KTtcclxuICAgICAgIC8vICBjb25zdCBjbnZUb3AgPSBNYXRoLmZsb29yKHJlY3QudG9wKTtcclxuICAgICAgIC8vICBjb25zdCBjbnZCb3R0b20gPSBNYXRoLmZsb29yKHJlY3QuYm90dG9tKTtcclxuICAgICAgIC8vICBjb25zdCBjdXJyZW50U3F1YXJlU2l6ZSA9IHRoaXMuc3F1YXJlU2l6ZSAqIHRoaXMucHJvcHMuc2NyZWVuLnJhdGlvXHJcbiAgICAgICAvLyAgY29uc3QgciA9IGN1cnJlbnRTcXVhcmVTaXplIC8gMiAtIDFcclxuICAgICAgIC8vICBjb25zdCBib2FyZFdpZHRoPSh0aGlzLmdyaWRXaWR0aCArIDEpICogY3VycmVudFNxdWFyZVNpemVcclxuICAgICAgIC8vICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc3F1YXJlU2l6ZVwiKVxyXG4gICAgICAgLy8gIGNvbnN0IGJvYXJkSGVpZ2h0PSh0aGlzLmdyaWRIZWlnaHQgKyAxKSAqIGN1cnJlbnRTcXVhcmVTaXplXHJcbiAgICAgICAvLyAgbGV0IHggPSBNYXRoLnJvdW5kKChnZXRDdXJzb3JQb3MoZSlbMF0tY252TGVmdCkvKGNudlJpZ2h0LWNudkxlZnQpKmJvYXJkV2lkdGgpO1xyXG4gICAgICAgLy8gIGxldCB5ID0gTWF0aC5yb3VuZCgoZ2V0Q3Vyc29yUG9zKGUpWzFdLWNudlRvcCkvKGNudkJvdHRvbS1jbnZUb3ApKmJvYXJkSGVpZ2h0KTtcclxuICAgICAgIC8vIGlmKCh4ICsgY3VycmVudFNxdWFyZVNpemUvMikgJSBjdXJyZW50U3F1YXJlU2l6ZSAhPT0gMCAmJiAoeSArIGN1cnJlbnRTcXVhcmVTaXplLzIpICUgY3VycmVudFNxdWFyZVNpemUgIT09IDApe1xyXG4gICAgICAgLy8gICAgICAvLyBDaHJvbWUgMStcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgLy8gICAgICBjb25zdCBuZWFyZXN0WCA9IE1hdGguZmxvb3IoKHggKyBjdXJyZW50U3F1YXJlU2l6ZSAvIDIpIC8gY3VycmVudFNxdWFyZVNpemUpXHJcbiAgICAgICAvLyAgICAgIGNvbnN0IG5lYXJlc3RZID0gTWF0aC5mbG9vcigoeSArIGN1cnJlbnRTcXVhcmVTaXplIC8gMikgLyBjdXJyZW50U3F1YXJlU2l6ZSlcclxuICAgICAgIC8vICAgICAgLy9jb3JyZWN0IGNocm9tZSBjb29yZGluYXRlcyBtaXNmdW5jdGlvblxyXG4gICAgICAgLy8gICAgICAvLyBjb25zdCBpc0Nocm9tZSA9ICEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmUgXHJcbiAgICAgICAvLyAgICAgIC8vIGlmKGlzQ2hyb21lKSB7XHJcbiAgICAgICAvLyAgICAgIC8vICAgICBpZih4ID4gbmVhcmVzdFggJiYgeSA+IG5lYXJlc3RZKXtcclxuICAgICAgIC8vICAgICAgLy8gICAgICAgICB4ICs9IDFcclxuICAgICAgIC8vICAgICAgLy8gICAgICAgICB5ICs9IDFcclxuICAgICAgIC8vICAgICAgLy8gICAgIH0gZWxzZSBpZih4IDwgbmVhcmVzdFggJiYgeSA8IG5lYXJlc3RZKXtcclxuICAgICAgIC8vICAgICAgLy8gICAgICAgICB4IC09IDFcclxuICAgICAgIC8vICAgICAgLy8gICAgICAgICB5IC09IDFcclxuICAgICAgIC8vICAgICAgLy8gICAgIH1cclxuICAgICAgIC8vICAgICAgLy8gfVxyXG4gICAgICAgLy8gICAgICAvLyBjb25zb2xlLmxvZyhgJHt4fSAtICR7bmVhcmVzdFh9IC0gJHtuZWFyZXN0WCAqIGN1cnJlbnRTcXVhcmVTaXplfSAtICR7eX0gLSAke25lYXJlc3RZfSAtICR7bmVhcmVzdFkgKiBjdXJyZW50U3F1YXJlU2l6ZX0gLSAke01hdGgucG93KHggLSBuZWFyZXN0WCAqIGN1cnJlbnRTcXVhcmVTaXplLCAyKSArIE1hdGgucG93KHkgLSBuZWFyZXN0WSAqIGN1cnJlbnRTcXVhcmVTaXplLCAyKX1gKVxyXG4gICAgICAgLy8gICAgICBpZihNYXRoLnBvdyh4IC0gbmVhcmVzdFggKiBjdXJyZW50U3F1YXJlU2l6ZSwgMikgKyBNYXRoLnBvdyh5IC0gbmVhcmVzdFkgKiBjdXJyZW50U3F1YXJlU2l6ZSwgMikgPCBNYXRoLnBvdyhyLCAyKSl7XHJcblxyXG4gICAgICAgLy8gICAgICAgICAgY29uc3QgY2xpY2tlZENlbGwgPSBbbmVhcmVzdFkgLSAxLCBuZWFyZXN0WCAtIDFdO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAvLyAgICAgICAgICB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3QgPSBbXTtcclxuICAgICAgIC8vICAgICAgICAgIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdC5wdXNoKGNsaWNrZWRDZWxsKTtcclxuICAgICAgIC8vICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgLy8gICAgICAgICAgICAgIHJldHVybiB7Z2VuZXJhdGlvbkNvdW50OnByZXZTdGF0ZS5nZW5lcmF0aW9uQ291bnQgLSAxLGNsZWFyOmZhbHNlLH1cclxuICAgICAgIC8vICAgICAgICAgIH0pO1xyXG4gICAgICAgLy8gICAgICAgICAgdGhpcy5tb2RlLmNsZWFyPWZhbHNlO1xyXG4gICAgICAgLy8gICAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAvLyAgICAgICAgICAvLyBpZihydW5uaW5nU3RhdGUpe1xyXG4gICAgICAgLy8gICAgICAgICAgLy8gICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgIC8vICAgICAgICAgIC8vIH0gXHJcbiAgICAgICAvLyAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAvLyAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhNYXRoLmZsb29yKHgvdGhpcy5zcXVhcmVTaXplKSArIFwiIFwiICsgTWF0aC5mbG9vcih5L3RoaXMuc3F1YXJlU2l6ZSkpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBpZighdGhpcy5zdGFydFByZXNzZWQgJiYgIXRoaXMubW9kZS5jbGVhcil7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQVwiKVxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnByb2NlZWQ9dHJ1ZTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5pc0NsZWFyU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5zdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInN0YXJ0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIC8vICAgICAvLyBpZih0aGlzLnN0YXRlLmRyYXdpbmcpe1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgLy8gdGhpcy5pc01hbnVhbFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyB0aGlzLm5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0ID0gdG90YWxOZWlnaGJvcnNSZXZpc2lvbih0aGlzLnZhbHVlc0JvYXJkKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgIC8vIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdCA9IHRvdGFsTmVpZ2hib3JzUmV2aXNpb24odGhpcy52YWx1ZXNCb2FyZCk7XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBkcmF3aW5nOmZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGljazpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT57dGhpcy51cGRhdGUoKX0pLFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUuZHJhd2luZz1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT57dGhpcy51cGRhdGUoKX0pO1xyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coXCJBXCIpICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKXtcclxuICAgICAgICBpZighdGhpcy5wYXVzZVByZXNzZWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvY2VlZD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RvcHBlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RvcHBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvblByZXNzZWRTdGF0dXMoXCJwYXVzZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJRCk7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aWNrOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS50aWNrKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGljayk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLm1vZGUuY2xlYXIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhXCIpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZS5jbGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdD10b3RhbExpdmVDZWxsc1JldmlzaW9uKHRoaXMudmFsdWVzQm9hcmQpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5leHRHZW5lcmF0aW9uLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLy8gICAgIGdlbmVyYXRpb25Db3VudDotMSxcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jaGVja0xpc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKXtcclxuICAgICAgICBpZighdGhpcy5zdGFydFByZXNzZWQgJiYgIXRoaXMubW9kZS5jbGVhcil7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInN0ZXBcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kZS5kcmF3aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzTWFudWFsU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZHJhd2luZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlLmRyYXdpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5uZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdCA9IHRvdGFsTmVpZ2hib3JzUmV2aXNpb24odGhpcy52YWx1ZXNCb2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0ID0gdG90YWxOZWlnaGJvcnNSZXZpc2lvbih0aGlzLnZhbHVlc0JvYXJkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInNzc3NcIilcclxuICAgIC8vICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG5cclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICBcclxuICAgIHRoaXMuaW50ZXJ2YWw9MTAwMC90aGlzLnByb3BzLmZwczt0aGlzLmludGVydmFsPTEwMDAvdGhpcy5wcm9wcy5mcHM7XHJcbiAgICBjb25zdCByYXRpbyA9IHRoaXMuc3RhdGUuc2NyZWVuID8gdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8gOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAgICBpZighdGhpcy5wcm9wcy5jZWxsc0xpc3Qpe1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUuY2xlYXI9ZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyYXRpbylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYW52YXNCb2FyZClcclxuICAgICAgICAgICAgdGhpcy5ncmlkLm1ha2VCb2FyZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHJhdGlvLHRoaXMuY2FudmFzQm9hcmQsbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT25jZSgpXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5tb2RlLmNsZWFyPWZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLlBhdHRlcm5GZXRjaGVyLmdldFBhdHRlcm5zKHRoaXMudXJsTSkudGhlbihwYXR0ZXJuTGlzdCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtwYXR0ZXJuc0xpc3Q6cGF0dGVybkxpc3QsIGdlbmVyYXRpb25Db3VudDotMSwgY2xlYXI6ZmFsc2UsfSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3QgPSBnZXRSYW5kb21QYXR0ZXJuKHRoaXMuZ3JpZEhlaWdodCx0aGlzLmdyaWRXaWR0aCk7XHJcbiAgICAgICAgICAgIC8vIC8vIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhdHRlcm5zWzFdLnBhdHRlcm4pXHJcbiAgICAgICAgICAgIC8vIC8vIC8vICAgICAvLyB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3QgPSB0aGlzLnBhdHRlcm5zWzFdLnBhdHRlcm5cclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubmV4dEdlbmVyYXRpb24uaXNGaXJzdCA9IHRydWVcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZ3JpZC5tYWtlQm9hcmQodGhpcy5ncmlkV2lkdGgsdGhpcy5ncmlkSGVpZ2h0LHRoaXMuc3F1YXJlU2l6ZSx0aGlzLnJhdGlvLHRoaXMuY2FudmFzQm9hcmQsdGhpcy5wcm9wcy52YWx1ZXMubGl2ZUNlbGxzTGlzdCk7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgLy8gICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5oYW5kbGVPcGVuKClcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dlbmVyYXRpb25Db3VudDotMSwgY2xlYXI6ZmFsc2UsfSlcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdCA9IGdldFJhbmRvbVBhdHRlcm4odGhpcy5ncmlkSGVpZ2h0LHRoaXMuZ3JpZFdpZHRoKTtcclxuICAgICAgICAvLyAgICAgLy8gLy8gLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGF0dGVybnNbMV0ucGF0dGVybilcclxuICAgICAgICAvLyAgICAgLy8gLy8gLy8gICAgIC8vIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdCA9IHRoaXMucGF0dGVybnNbMV0ucGF0dGVyblxyXG4gICAgICAgIC8vICAgICAvLyAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5pc0ZpcnN0ID0gdHJ1ZVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ncmlkLm1ha2VCb2FyZCh0aGlzLmdyaWRXaWR0aCx0aGlzLmdyaWRIZWlnaHQsdGhpcy5zcXVhcmVTaXplLHRoaXMucmF0aW8sdGhpcy5jYW52YXNCb2FyZCx0aGlzLnByb3BzLnZhbHVlcy5saXZlQ2VsbHNMaXN0KTtcclxuICAgICAgICAvLyB0aGlzLnVwZGF0ZU9uY2UoKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7cGF0dGVybnNMaXN0OnRoaXMucHJvcHMudmFsdWVzLnBhdHRlcm5MaXN0LCBnZW5lcmF0aW9uQ291bnQ6dGhpcy5zdGF0ZS5nZW5lcmF0aW9uQ291bnQgLSAxLCBjbGVhcjpmYWxzZSx9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdCA9IHRoaXMucHJvcHMudmFsdWVzLmxpdmVDZWxsc0xpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5uZXh0R2VuZXJhdGlvbi5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlT25jZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlLmNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNlbGxzTGlzdClcclxuICAgICAgICB0aGlzLmdyaWQubWFrZUJvYXJkKHRoaXMuZ3JpZFdpZHRoLHRoaXMuZ3JpZEhlaWdodCx0aGlzLnNxdWFyZVNpemUscmF0aW8sdGhpcy5jYW52YXNCb2FyZCx0aGlzLnByb3BzLmNlbGxzTGlzdCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVPcGVuRXJyb3JEaWFsb2coKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVPbmNlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKTsgICAgXHJcbiAgICAgICAgbGV0IGxpdmVDZWxsc0xpc3QgPSB0aGlzLmdyaWQuZ2V0TGl2ZUNlbGxzKCk7XHJcbiAgICAgICAgbGV0IHNpemUgPSB7XHJcbiAgICAgICAgICAgIGRpbWVuc2lvblg6IHRoaXMuZ3JpZFdpZHRoLCBcclxuICAgICAgICAgICAgZGltZW5zaW9uWTogdGhpcy5ncmlkSGVpZ2h0LFxyXG4gICAgICAgICAgICBzcXVhcmVTaXplOiB0aGlzLnNxdWFyZVNpemUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldEdhbWVWYWx1ZXMobGl2ZUNlbGxzTGlzdCwgc2l6ZSlcclxuICAgICAgICAvLyB0aGlzLnByb3BzLnZhbHVlcy5zcGVlZCA9IHRoaXMuc3RhdGUuZnBzO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMudmFsdWVzLnBhdHRlcm4gPSB0aGlzLnN0YXRlLnBhdHRlcm5OYW1lc0luZGV4O1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMudmFsdWVzLnBhdHRlcm5MaXN0ID0gdGhpcy5zdGF0ZS5wYXR0ZXJuc0xpc3Q7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy52YWx1ZXMuZ2VuZXJhdGlvbkNvdW50ID0gdGhpcy5zdGF0ZS5nZW5lcmF0aW9uQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3BlbkVycm9yRGlhbG9nID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNZXNzYWdlOiB0cnVlfSk7XHJcbiAgICB9OyAgIFxyXG4gICAgXHJcbiAgICBoYW5kbGVDbG9zZUVycm9yRGlhbG9nID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2xvc2VcIilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TWVzc2FnZTogZmFsc2V9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJucyA9IHRoaXMucHJvcHMucGF0dGVybnM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGF0dGVybnMpXHJcbiAgICAgICAgLy8gY29uc3QgYWN0aW9ucyA9IFtcclxuICAgICAgICAvLyAgIDxCdXR0b25cclxuICAgICAgICAvLyAgICAgbGFiZWw9XCJPS1wiXHJcbiAgICAgICAgLy8gICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgLy8gICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgLy8gICAvPlxyXG4gICAgICAgIC8vIF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcclxuICAgICAgICBjb25zdCBMb2FkaW5nID0gKCkgPT4gKDxkaXY+TG9hZGluZy4uLjwvZGl2PilcclxuICAgICAgICAvLyB0aGlzLmNoZWNrKys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc3QgaXNTbWFsbCA9IHRoaXMucHJvcHMuc2NyZWVuLndpZHRoIDwgNjAwO1xyXG5cclxuICAgICAgICBjb25zdCBzY3JlZW4gPSB0aGlzLnN0YXRlLnNjcmVlbiA/IHRoaXMuc3RhdGUuc2NyZWVuIDoge307XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5mcHMpXHJcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgLy8gICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICAvLyB9O1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGlmKHRoaXMuc2NyZWVuLndpZHRoICE9PSB0aGlzLnByb3BzLnNjcmVlbi53aWR0aFxyXG4gICAgICAgIC8vICB8fCB0aGlzLnNjcmVlbi5oZWlnaHQgIT09IHRoaXMucHJvcHMuc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIC8vICB8fCB0aGlzLnNjcmVlbi5yYXRpbyAhPT0gdGhpcy5wcm9wcy5zY3JlZW4ucmF0aW8pe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudFdpbGxVcGRhdGVcIilcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JlZW4ud2lkdGggPSB0aGlzLnByb3BzLnNjcmVlbi53aWR0aDtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JlZW4uaGVpZ2h0ID0gdGhpcy5wcm9wcy5zY3JlZW4uaGVpZ2h0O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNjcmVlbi5yYXRpbyA9IHRoaXMucHJvcHMuc2NyZWVuLnJhdGlvO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdyaWQuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSh0aGlzLnNjcmVlbiwgdGhpcy5jYW52YXNCb2FyZCk7XHJcbiAgICAgICAgLy8gfVxyXG4gLy8gY29uc29sZS5sb2coXCJyZWxvYWRcIik7XHJcblxyXG4gICAgLy8gdmFyIHBhdHRlcm5OYW1lcyA9IFtcIlJhbmRvbVwiXVxyXG4gICAgLy8gaWYodGhpcy5zdGF0ZS5wYXR0ZXJuc0xpc3QpXHJcbiAgICAvLyBwYXR0ZXJuTmFtZXMgPSBwYXR0ZXJuTmFtZXMuY29uY2F0KHRoaXMuc3RhdGUucGF0dGVybnNMaXN0Lm1hcChwYXR0ZXJuID0+IHBhdHRlcm4ubmFtZSkpXHJcbiAgICBcclxuICAgICAgXHRyZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JlZW4ud2lkdGggPCBzY3JlZW4uaGVpZ2h0IHx8ICBzY3JlZW4ud2lkdGggPiAxMjgwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1NpZGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0QnV0dG9uc0JhciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZXNJbmRleD17dGhpcy5wcm9wcy5wYXR0ZXJuTmFtZXNJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZXM9e3RoaXMucGF0dGVybk5hbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdHRlcm5FdmVudD17KHYpID0+IHRoaXMuY2hhbmdlUGF0dGVybkV2ZW50KHYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5MYWJlbD1cIlBhdHRlcm5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRTaXplc0luZGV4PXt0aGlzLnByb3BzLmdyaWRTaXplc0luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRTaXplcz17dGhpcy5ncmlkU2l6ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyPXsodikgPT4gdGhpcy5jaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXIodil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExhYmVsPVwiQm9hcmQgU2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0QnV0dG9uc0JhciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lc0luZGV4PXt0aGlzLnByb3BzLnBhdHRlcm5OYW1lc0luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWVzPXt0aGlzLnBhdHRlcm5OYW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdHRlcm5FdmVudD17KHYpID0+IHRoaXMuY2hhbmdlUGF0dGVybkV2ZW50KHYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybkxhYmVsPVwiUGF0dGVyblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkU2l6ZXNJbmRleD17dGhpcy5wcm9wcy5ncmlkU2l6ZXNJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRTaXplcz17dGhpcy5ncmlkU2l6ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VCb2FyZFNpemVFdmVudEhhbmRsZXI9eyh2KSA9PiB0aGlzLmNoYW5nZUJvYXJkU2l6ZUV2ZW50SGFuZGxlcih2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMYWJlbD1cIkJvYXJkIFNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJwYWRkaW5nU2lkZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoY2FudmFzKSA9PiB7IHRoaXMuY2FudmFzQm9hcmQgPSBjYW52YXN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlCdXR0b25zQmFyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWVzLk1BSU5dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZT17KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsoKSA9PiB0aGlzLnN0ZXAoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyPXsoKSA9PiB0aGlzLmNsZWFyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncmdiYSgwLCAwLCAwLCAuNyknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcHM9e3RoaXMucHJvcHMuZnBzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWw9eyh2KSA9PiB0aGlzLnNldEludGVydmFsKHYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAuZ2FtZUJvYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBhZGRpbmdTaWRlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FudmFzIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICA8RGlhbG9nIG9wZW49e3RoaXMuc3RhdGUuc2hvd01lc3NhZ2V9IG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZUNsb3NlRXJyb3JEaWFsb2d9PlxyXG4gICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+e1wiQ2FuYHQgZG93bmxvYWQgcGF0dGVybnNcIn08L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgc29ycnkhIEZvciBzb21lIHJlYXNvbiB3ZSBjb3VkbmB0IGRvd25sb2FkIG91ciBleGFtcGxlIHBhdHRlcm5zIGZyb20gZ2l0aHViIHNlcnZlci5cclxuICAgICAgICAgICAgICAgICAgICAgIEJ1dCBZb3UgYXJlIHdlbGNvbWVkIHRvIGRyYXcgeW91ciBwYXR0ZXJucyBvbiB0aGUgYm9hcmQgb3IgWW91IGNhbiBnZW5lcmF0ZSByYW5kb21lIHBhdHRlcm5zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VFcnJvckRpYWxvZ30gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcblxyXG5jb25zdCBUV09fTlVNQkVSU19BUlJBWSA9IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSl7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcHMucHJvcE5hbWUpIHx8IHByb3BzLnByb3BOYW1lLmxlbmd0aCAhPSAyIHx8ICFwcm9wcy5wcm9wTmFtZS5ldmVyeShOdW1iZXIuaXNJbnRlZ2VyKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYCR7cHJvcE5hbWV9IG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzYCk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5HYW1lLnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHNldFN0b3BwZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzdG9wcGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIFtib2FyZE5hbWVzLk1BSU5dOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CTE9DS106IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJPQVRdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5MT0FGXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkVFSElWRV06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJMSU5LRVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CRUFDT05dOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5UT0FEXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuR0xJREVSXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuU1BBQ0VTSElQXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuR1VOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG4gICAgc2l6ZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBkaW1lbnNpb25YOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGRpbWVuc2lvblk6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgc3F1YXJlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG4gICAgY2VsbHNMaXN0OiBUV09fTlVNQkVSU19BUlJBWSxcclxuICAgIHBhdHRlcm5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcGF0dGVybjogVFdPX05VTUJFUlNfQVJSQVlcclxuICAgICAgICB9KVxyXG4gICAgKSxcclxuICAgIGNoYW5nZVBhdHRlcm46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBjaGFuZ2VCb2FyZFNpemU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB0b2dnbGVTdG9wcGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgaW5jcmVtZW50R2VuZXJhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHNldFNwZWVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2V0Q2xlYXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzZXRHYW1lVmFsdWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcGF0dGVybk5hbWVzSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBncmlkU2l6ZXNJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGZwczogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIGdlbmVyYXRpb25Db3VudDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbiJdfQ== */\n/*@ sourceURL=components\\Game.js */'
            }), _react2.default.createElement(_Dialog2.default, { open: this.state.showMessage, onRequestClose: this.handleCloseErrorDialog, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 814
                }
            }, _react2.default.createElement(_Dialog.DialogTitle, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 815
                }
            }, "Can`t download patterns"), _react2.default.createElement(_Dialog.DialogContent, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 816
                }
            }, _react2.default.createElement(_Dialog.DialogContentText, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 817
                }
            }, 'We are sorry! For some reason we coudn`t download our example patterns from github server. But You are welcomed to draw your patterns on the board or You can generate randome patterns')), _react2.default.createElement(_Dialog.DialogActions, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 822
                }
            }, _react2.default.createElement(_Button2.default, { onClick: this.handleCloseErrorDialog, color: 'primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 823
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
    size: _propTypes2.default.shape({
        dimensionX: _propTypes2.default.number,
        dimensionY: _propTypes2.default.number,
        squareSize: _propTypes2.default.number
    }),
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
    // generationCount: PropTypes.number,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdhbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCdXR0b24iLCJOb1NTUiIsIkdhbWVHcmlkIiwid2l0aFN0eWxlcyIsIkdyaWQiLCJjb25uZWN0Iiwid2l0aFJvb3QiLCJMaW5rIiwiU2VsZWN0QnV0dG9uc0JhciIsIlBsYXlCdXR0b25zQmFyIiwiYm9hcmROYW1lcyIsIkRpYWxvZyIsIkRpYWxvZ0FjdGlvbnMiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQ29udGVudFRleHQiLCJEaWFsb2dUaXRsZSIsIkdhbWUiLCJwcm9wcyIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJzZXRTdGF0ZSIsInNjcmVlbiIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ3JpZCIsImNhbnZhc0JvYXJkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9wZW5FcnJvckRpYWxvZyIsInNob3dNZXNzYWdlIiwiaGFuZGxlQ2xvc2VFcnJvckRpYWxvZyIsImdyaWRTaXplcyIsImNlbGxzTGlzdCIsImdyaWRXaWR0aCIsInNpemUiLCJkaW1lbnNpb25YIiwiZ3JpZEhlaWdodCIsImRpbWVuc2lvblkiLCJzcXVhcmVTaXplIiwicGF0dGVybk5hbWVzIiwicGF0dGVybnMiLCJjb25jYXQiLCJtYXAiLCJwYXR0ZXJuIiwibmFtZSIsImNoZWNrTGlzdCIsIm1vZGUiLCJkcmF3aW5nIiwiY2xlYXIiLCJzdGFydFByZXNzZWQiLCJwYXVzZVByZXNzZWQiLCJjbGVhclByZXNzZWQiLCJzdGVwUHJlc3NlZCIsIk1BSU4iLCJjaGFuZ2VQYXR0ZXJuIiwiaW5kZXgiLCJjaGFuZ2VCb2FyZFNpemUiLCJzdGFydCIsImJpbmQiLCJ0b2dnbGVTdG9wcGVkIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJpbmNyZW1lbnRHZW5lcmF0aW9uIiwic2V0U3BlZWQiLCJmcHMiLCJzZXRDbGVhciIsInNldEdhbWVWYWx1ZXMiLCJzdGF0ZSIsImRpbWVuc2lvbnMiLCJzdG9wIiwieCIsInkiLCJyZWxvYWQiLCJ1cGRhdGUiLCJub3ciLCJEYXRlIiwiZGVsdGEiLCJ0aGVuIiwiaW50ZXJ2YWwiLCJ1cGRhdGVPbmNlIiwickFGIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGF0dGVybk5hbWVzSW5kZXgiLCJncmlkU2l6ZXNJbmRleCIsInZhbHVlIiwiYnV0dG9uUHJlc3NlZCIsImUiLCJpc0NlbGxDbGlja2VkIiwiaGFuZGxlQ2xpY2siLCJjaGFuZ2VCdXR0b25QcmVzc2VkU3RhdHVzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCb2FyZCIsImVycm9yIiwibGl2ZUNlbGxzTGlzdCIsImdldExpdmVDZWxscyIsIkxvYWRpbmciLCJ2IiwiY2hhbmdlUGF0dGVybkV2ZW50IiwiY2hhbmdlQm9hcmRTaXplRXZlbnRIYW5kbGVyIiwiY2FudmFzIiwiaGFuZGxlUGxheVRvZ2dsZSIsInN0ZXAiLCJzZXRJbnRlcnZhbCIsIlRXT19OVU1CRVJTX0FSUkFZIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXZlcnkiLCJFcnJvciIsInByb3BUeXBlcyIsImNsYXNzZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwiYm9vbCIsIkJMT0NLIiwiQk9BVCIsIkxPQUYiLCJCRUVISVZFIiwiQkxJTktFUiIsIkJFQUNPTiIsIlRPQUQiLCJHTElERVIiLCJTUEFDRVNISVAiLCJHVU4iLCJudW1iZXIiLCJhcnJheU9mIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7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