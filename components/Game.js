import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import NoSSR from 'react-no-ssr';
import GameGrid from '../helpers/GameGrid';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {connect} from 'react-redux'
import withRoot from './withRoot';
// import Header from './components/Header'
import Link from 'next/link';
import SelectButtonsBar from './SelectButtonsBar';
import PlayButtonsBar from './PlayButtonsBar';
import {boardNames} from '../helpers/boardNames'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';




class Game extends Component {
// {error, patterns}
    constructor(props){
        super(props);
        // this.gamePageState = {
        //     liveCells: null,
        //     size: null,
        //     speed: null,
        //     pattern: null,
        //     patternList: null,
        //     generationCount: null,
        // };
        this.gridSizes = [
            "20 X 30",
            "40 X 60",
            "60 X 90"
        ];

        console.log(props)
        if(props.cellsList){
            console.log(props.cellsList)
            this.gridWidth = props.size.dimensionX;
            this.gridHeight = props.size.dimensionY; 
            this.squareSize = props.size.squareSize;
        } else {
            this.gridWidth = 60;
            this.gridHeight = 40;
            this.squareSize = 12;
        }


        this.patternNames = ["Random"];
        if(props.patterns)
            this.patternNames = this.patternNames.concat(props.patterns.map(pattern => pattern.name));
        console.log(props.patterns);
        this.checkList = [];
        this.mode = {
            drawing: false,
            clear:true,
        }
        this.startPressed = false;
        this.pausePressed = false;
        this.clearPressed = false;
        this.stepPressed = false;

        this.grid = new GameGrid(boardNames.MAIN, this.gridWidth, this.gridHeight, this.squareSize);

        this.changePattern = index => props.changePattern(index);
        this.changeBoardSize = index => props.changeBoardSize(index);
        this.start = this.start.bind(this);
        this.toggleStopped = () => props.toggleStopped();
        this.setStopped = stopped => props.setStopped(stopped, this.grid.name);
        this.incrementGeneration = () => props.incrementGeneration();
        this.setSpeed = fps => props.setSpeed(fps);
        this.setClear = () => props.setClear();
        this.setGameValues =  (cellsList, size) => props.setGameValues(cellsList, size);
        this.state = {showMessage: false};
    }

    // createCanvas(canvas) {
    //     this.canvasBoard = canvas;
    //     const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
    //     console.log(ratio)
    //     console.log(this.canvasBoard)
    //     this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,null);
    //     this.updateOnce()
    // }


    reload(dimensions, squareSize){

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
        this.grid.reload(this.gridWidth,this.gridHeight,this.squareSize,this.canvasBoard);
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



    updateOnce(){
      
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
        if(!this.mode.drawing)
            this.incrementGeneration();
        // this.setState((prevState) => {
            
        //     return {
        //     generationCount: prevState.generationCount + 1,
        //     // clear:false,
        //     // initial:false,
        // }});
        


    }

    update(){
        // if(this.state.stopped){

        //     this.stop();
        // } else {
            // requestAnimationFrame(() =>{this.update()});

             // console.log(this.count++)
            this.now = Date.now();
            this.delta = this.now - this.then;
             
            if (this.delta > this.interval) {
                
                // this.then += this.interval
                this.then = this.now - (this.delta % this.interval);


                this.updateOnce();
               
            }  
            // this.setState({
                
            //     tick:requestAnimationFrame(() =>{this.update()}),
                
            // });         
            this.rAF = requestAnimationFrame(() =>{this.update()}); 
        // }

    }


    handleWindowSizeChange = () => {
        this.setState({
            screen : {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
              }
        });
        this.grid.handleWindowSizeChange(this.canvasBoard);
        //         this.canvasBoard.width=((this.gridWidth + 1) * this.squareSize) * this.ratio;
        // console.log(`${this.gridWidth} + ${this.squareSize} * ${this.state.screen.ratio}`)
        console.log("vvv")
        // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.ratio;
    };
    changePatternEvent(index){
        
        // // var nextGenerationChangeCellsList;
        if(index !== this.props.patternNamesIndex){
            

            this.grid.changePattern(index, this.props.patterns, this.mode);
        //     // if(index>0){
        //     //     //get the coordinates of choosed pattern adjusted to current board size
        //     //     nextGenerationChangeCellsList=adjustToSize(this.state.patternsList[index-1].pattern,this.gridHeight,this.gridWidth);
        //     //     // console.log(nextGenerationChangeCellsList)
        //     // } else {
        //     //     //random live cells have index = 0
        //     //     nextGenerationChangeCellsList=getRandomPattern(this.gridHeight,this.gridWidth);
        //     // }
            this.changePattern(index)
            // this.setState({
            //     patternNamesIndex:index, 
            //     generationCount: -1
            // });
        //     // const s = event.target;
        //     // const i = s.selectedIndex;
        //     // console.log(this.state.patternNamesIndex);

            if(this.mode.clear){
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

    changeBoardSizeEventHandler(index){
        if(index !== this.props.gridSizesIndex)
        {
            let dimensions = {};
            let squareSize = null;
            if(index === 0){
                dimensions = {x: 30, y: 20}
                squareSize = 24
            } else if(index === 1) {
                dimensions = {x: 60, y: 40}
                squareSize = 12
            } else if(index === 2) {
                dimensions = {x: 90, y: 60}
                squareSize = 8
            } 

            this.reload(dimensions, squareSize);
            this.changeBoardSize(index)
            // this.setState({gridSizesIndex:index, generationCount: 0})
        }
    }


    handlePlayToggle(){
        
        
        if(this.props.stopped[boardNames.MAIN]){
            this.start();
        } else {

            this.stop();
        }
        
        
    };  

    setInterval(value){
        // // this.fps = value;
        this.interval=1000/value;
        this.setSpeed(value)
        // // console.log(this.state.fps+"zas");
    }

    changeButtonPressedStatus(buttonPressed){

        this.startPressed = false;
        this.pausePressed = false;
        this.clearPressed = false;
        this.stepPressed = false;        
        switch(buttonPressed){
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

    handleClick(e){
        
        // this.isManualState = true;
        // this.setState({
        //     drawing:true,
        // });
        this.mode.drawing=true;
        // // let runningState = this.stopped ? false : true;
        // let runningState = this.props.stopped[boardNames.MAIN] ? false : true;
        if(!this.props.stopped[boardNames.MAIN]){
            // console.log("this.squareSize")
            this.stop();
        }
        
        const isCellClicked = this.grid.handleClick(e);

        if(isCellClicked){

            // this.setState((prevState) => {
            //         return {generationCount:prevState.generationCount - 1,clear:false,}
            //     });
                this.mode.clear=false;
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



    start(){
        if(!this.startPressed && !this.mode.clear){
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
            this.mode.drawing=false;
            this.setStopped(false);
            this.rAF = requestAnimationFrame(() =>{this.update()});
        //   // console.log("A")            
        }
    }

    stop(){
        if(!this.pausePressed){
            
            try{
               
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
            } catch(e){
                console.log(e.message);
            }            
        }

    }

    clear(){
        
        if(!this.mode.clear){
            console.log("da")
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

    step(){
        if(!this.startPressed && !this.mode.clear){
            this.changeButtonPressedStatus("step");
            if(this.mode.drawing){
                    // this.isManualState = false;
                    // this.setState({
                    //     drawing:false,
                    // });    
                    this.mode.drawing=false;
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
    componentWillMount(){
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.setState({screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            }
        })        
    }

    componentDidMount(){
    
    this.interval=1000/this.props.fps;this.interval=1000/this.props.fps;
    const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
       if(!this.props.cellsList){


                this.mode.clear=false;

                
            
            // console.log(ratio)
            // console.log(this.canvasBoard)
            this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,null);
            this.updateOnce()


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
                console.log(this.props.cellsList)
        this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,this.props.cellsList);
        this.updateOnce();
        }

        // window.addEventListener('resize', this.handleWindowSizeChange);


        if(this.props.error){
                this.handleOpenErrorDialog()
            }
        // this.updateOnce();

    }


    componentWillUnmount(){
        
        cancelAnimationFrame(this.rAF);    
        let liveCellsList = this.grid.getLiveCells();
        let size = {
            dimensionX: this.gridWidth, 
            dimensionY: this.gridHeight,
            squareSize: this.squareSize,
        };
        this.setGameValues(liveCellsList, size)
        // this.props.values.speed = this.state.fps;
        // this.props.values.pattern = this.state.patternNamesIndex;
        // this.props.values.patternList = this.state.patternsList;
        // this.props.values.generationCount = this.state.generationCount;
    }

    handleOpenErrorDialog = () => {
        this.setState({showMessage: true});
    };   
    
    handleCloseErrorDialog = () => {
        // console.log("close")
        this.setState({showMessage: false});
    };
    
    render() {
        const patterns = this.props.patterns;
        // console.log(patterns)
        // const actions = [
        //   <Button
        //     label="OK"
        //     primary={true}
        //     onTouchTap={this.handleClose}
        //   />
        // ];
        
        // const classes = this.props.classes;
        const Loading = () => (<div>Loading...</div>)
        // this.check++;
        
        // const isSmall = this.props.screen.width < 600;

        const screen = this.state.screen ? this.state.screen : {};
        console.log(this.props.fps)
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
    
      	return (
            
            <div className="gameBoard">

                
                <Grid container spacing={0}>
                            {screen.width < screen.height ||  screen.width > 1280 ? (
                                <Grid item xs={12}>
                                    
                                    <div className="paddingSides">
                                        <SelectButtonsBar 
                                            patternNamesIndex={this.props.patternNamesIndex}
                                            patternNames={this.patternNames}
                                            changePatternEvent={(v) => this.changePatternEvent(v)}
                                            patternLabel="Pattern"
                                            gridSizesIndex={this.props.gridSizesIndex}
                                            gridSizes={this.gridSizes}
                                            changeBoardSizeEventHandler={(v) => this.changeBoardSizeEventHandler(v)}
                                            gridLabel="Board Size"
                                            justify="center"
                                            
                                            />
                                    </div>
                                        
                                </Grid>
                                ):(
                                <Grid item xs={4}>
                                    
                                    
                            
                                    <SelectButtonsBar 
                                        patternNamesIndex={this.props.patternNamesIndex}
                                        patternNames={this.patternNames}
                                        changePatternEvent={(v) => this.changePatternEvent(v)}
                                        patternLabel="Pattern"
                                        gridSizesIndex={this.props.gridSizesIndex}
                                        gridSizes={this.gridSizes}
                                        changeBoardSizeEventHandler={(v) => this.changeBoardSizeEventHandler(v)}
                                        gridLabel="Board Size"
                                        
                                        direction="column"
                                        />
                                    
                                
                                        
                                </Grid>
                                )
                            }

                        <Grid item lg={3}>
                            
                        </Grid>
                        <Grid item xs>
                            <Grid container spacing={0}>
                                <Grid item xs={12} className="paddingSides">
                                    <canvas
                                        ref={(canvas) => { this.canvasBoard = canvas}}
                                        onClick={(e) => this.handleClick(e)}
                                    />

                                </Grid>
                            
                                <Grid item xs={12}>
                                    <PlayButtonsBar 
                                        on={this.props.stopped[boardNames.MAIN]}
                                        handlePlayToggle={() => this.handlePlayToggle()}
                                        step={() => this.step()}
                                        clear={() => this.clear()}
                                        color='rgba(0, 0, 0, .7)'
                                        fps={this.props.fps}
                                        setInterval={(v) => this.setInterval(v)}
                                        
                                        />
                                </Grid>
                            </Grid>
                        </Grid>                               
                        <Grid item lg={3}>
                                
                        </Grid>
                 </Grid>            
                   
               <style jsx global>{`
                    .gameBoard {
                        text-align: center;
                        margin-top: 20px;
                        z-index: 2;
                     }
                    .paddingSides {
                        padding-left: 10;
                        padding-right: 10;
                    }
                    .canvas {

                    }
              `}</style>
              <Dialog open={this.state.showMessage} onRequestClose={this.handleCloseErrorDialog}>
                  <DialogTitle>{"Can`t download patterns"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      We are sorry! For some reason we coudn`t download our example patterns from github server.
                      But You are welcomed to draw your patterns on the board or You can generate randome patterns
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleCloseErrorDialog} color="primary">
                      OK
                    </Button>
                    
                  </DialogActions>
                </Dialog>
            </div>
            
        );
    }
}

export default Game;

const TWO_NUMBERS_ARRAY = function(props, propName, componentName){
    if (!Array.isArray(props.propName) || props.propName.length != 2 || !props.propName.every(Number.isInteger)) {
        return new Error(`${propName} needs to be an array of two numbers`);
    }    
}

Game.propTypes = {
    classes: PropTypes.object.isRequired,
    setStopped: PropTypes.func.isRequired,
    stopped: PropTypes.shape({
        [boardNames.MAIN]: PropTypes.bool,
        [boardNames.BLOCK]: PropTypes.bool,
        [boardNames.BOAT]: PropTypes.bool,
        [boardNames.LOAF]: PropTypes.bool,
        [boardNames.BEEHIVE]: PropTypes.bool,
        [boardNames.BLINKER]: PropTypes.bool,
        [boardNames.BEACON]: PropTypes.bool,
        [boardNames.TOAD]: PropTypes.bool,
        [boardNames.GLIDER]: PropTypes.bool,
        [boardNames.SPACESHIP]: PropTypes.bool,
        [boardNames.GUN]: PropTypes.bool,
    }).isRequired,
    size: PropTypes.shape({
        dimensionX: PropTypes.number,
        dimensionY: PropTypes.number,
        squareSize: PropTypes.number,
    }),
    cellsList: TWO_NUMBERS_ARRAY,
    patterns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        pattern: TWO_NUMBERS_ARRAY
        })
    ),
    changePattern: PropTypes.func.isRequired,
    changeBoardSize: PropTypes.func.isRequired,
    toggleStopped: PropTypes.func.isRequired,
    incrementGeneration: PropTypes.func.isRequired,
    setSpeed: PropTypes.func.isRequired,
    setClear: PropTypes.func.isRequired,
    setGameValues: PropTypes.func.isRequired,
    patternNamesIndex: PropTypes.number,
    gridSizesIndex: PropTypes.number,
    fps: PropTypes.number,
    error: PropTypes.bool,
    // generationCount: PropTypes.number,
};

