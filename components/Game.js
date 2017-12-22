import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import GameGrid from '../util/GameGrid';
import {colors as color} from '../util/colors';
import SelectButtonsBar from './SelectButtonsBar';
import PlayButtonsBar from './PlayButtonsBar';
import {boardNames} from '../util/boardNames';
import {boardSizes} from '../util/boardSizes';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';




class Game extends Component {
    constructor(props){
        super(props);
        this.currentBoardSize = boardSizes.medium;
 
        if(props.savedCellList){
            switch(props.currentGridSizeIndex){
                case 0: this.currentBoardSize = boardSizes.small; break;
                case 2: this.currentBoardSize = boardSizes.large; break;
            }
            
        }

        this.gridWidth = this.currentBoardSize.width;
        this.gridHeight = this.currentBoardSize.height;
        this.squareSize = this.currentBoardSize.squareSize;

        this.gridSizesLabel = [
            boardSizes.small.height + " X " + boardSizes.small.width,
            boardSizes.medium.height + " X " + boardSizes.medium.width,
            boardSizes.large.height + " X " + boardSizes.large.width
        ];


        this.patternNames = ["Random"];
        if(props.patterns){
            this.patternNames = this.patternNames.concat(props.patterns.map(pattern => pattern.name));
        }

        this.checkList = [];
        this.boardMode = {
            playing: false,
            stopped: false,
            drawing: false,
            clear:true,
        }
        
        this.grid = new GameGrid(boardNames.MAIN, this.gridWidth, this.gridHeight, this.squareSize);

        this.changePattern = index => props.changePattern(index);
        this.changeBoardSize = index => props.changeBoardSize(index);
        this.start = this.start.bind(this);
        this.setStopped = stopped => props.setStopped(stopped, this.grid.name);
        this.incrementGeneration = () => props.incrementGeneration();
        this.setSpeed = fps => props.setSpeed(fps);
        this.setClear = () => props.setClear();
        this.setGameValues =  (savedCellList, size) => props.setGameValues(savedCellList, size);

        this.state = {showMessage: false};
    }



    reload(boardSize){

        this.stop();
        this.currentBoardSize = boardSize;
        this.gridWidth = this.currentBoardSize.width;
        this.gridHeight = this.currentBoardSize.height; 
        this.squareSize = this.currentBoardSize.squareSize;
        this.grid.reload(this.gridWidth,this.gridHeight,this.squareSize,this.canvasBoard);
        this.boardMode.clear = true;
        this.boardMode.drawing = false;
        this.boardMode.playing = false;
        this.boardMode.stopped = false;

    }



    updateOnce(){

        this.grid.update(this.boardMode);
        if(!this.boardMode.drawing)
            this.incrementGeneration();

    }

    update(){

        this.now = Date.now();
        this.delta = this.now - this.then;
         
        if (this.delta > this.interval) {
            this.then = this.now - (this.delta % this.interval);

            this.updateOnce();
           
        }  
        this.rAF = requestAnimationFrame(() =>{this.update()}); 

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
    };


    changePatternEvent(index){
        
        if(index !== this.props.currentPatternNameIndex){

            this.grid.changePattern(index, this.props.patterns, this.boardMode);
            this.changePattern(index)
            if(this.boardMode.clear){
                this.boardMode.clear = false;
                this.updateOnce();
                
            } else {
                this.stop();
        
                this.updateOnce();
            }

        }
            
    }

    changeBoardSizeEventHandler(index){
        if(index !== this.props.currentGridSizeIndex)
        {
            let size = index === 0 ? boardSizes.small 
                    : index === 1 ? boardSizes.medium
                    : boardSizes.large;

            this.reload(size);
            this.changeBoardSize(index)
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
        
        this.interval=1000/value;
        this.setSpeed(value);
    }

    

    handleClick(e){
        
        this.boardMode.drawing=true;
        if(!this.props.stopped[boardNames.MAIN]){
            this.stop();
        }
        
        const isCellClicked = this.grid.handleClick(e);

        if(isCellClicked){
                this.boardMode.clear=false;
                this.updateOnce();
            
        }


    }



    start(){

        if(!this.boardMode.playing && !this.boardMode.clear){

            this.boardMode.playing = true;
            this.boardMode.stopped = false;
            this.then = Date.now();
            this.boardMode.drawing=false;
            this.setStopped(false);
            this.rAF = requestAnimationFrame(() =>{this.update()});
        }
    }

    stop(){
        if(!this.boardMode.stopped){
            
            this.setStopped(true);
            this.boardMode.playing = false;
            this.boardMode.stopped = true;
            cancelAnimationFrame(this.rAF);
        }

    }

    clear(){
        
        if(!this.boardMode.clear){
            this.stop();
            this.setClear();
            this.boardMode.clear = true;
            this.boardMode.drawing=false;
            this.updateOnce();
        }

    }

    step(){
        if(!this.boardMode.playing && !this.boardMode.clear){
            this.boardMode.playing = false;
            this.boardMode.stopped = true;
            if(this.boardMode.drawing){
                this.boardMode.drawing=false;
            }
            this.updateOnce();
        }
    }

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
    
        const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
        
        this.boardMode.clear = false;
        this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,this.props.savedCellList);
        this.updateOnce();
        
        if(this.props.error){
            this.handleOpenErrorDialog()
        }
    
    }


    componentWillUnmount(){
        
        cancelAnimationFrame(this.rAF);    
        let liveCellsList = this.grid.getLiveCells();
        
        this.setGameValues(liveCellsList)
    }

    handleOpenErrorDialog = () => {
        this.setState({showMessage: true});
    };   
    
    handleCloseErrorDialog = () => {
        this.setState({showMessage: false});
    };
    
    render() {
        const {screen} = this.state;
        const width = screen.width > 1280 ? '50%' : '100%';
        const horSelectBarDisplay = screen.width < screen.height ||  screen.width > 1280 ? 'block' : 'none';
        const vertSelectBarDisplay = screen.width < screen.height ||  screen.width > 1280 ? 'none' : 'inline-block';
        const canvasAndControlsDisplay = screen.width < screen.height ||  screen.width > 1280 ? 'block' : 'inline-block';
        const canvasAndControlsWidth = screen.width < screen.height ||  screen.width > 1280 ? '100%' : '70%';
        
        return (
            
            <div className="gameBoard">

                <div className="container">

                    <div className="horSelectBar">
                        <div className="paddingSides">
                            <SelectButtonsBar 
                                patternNamesIndex={this.props.currentPatternNameIndex}
                                patternNames={this.patternNames}
                                changePatternEvent={(v) => this.changePatternEvent(v)}
                                patternLabel="Pattern"
                                gridSizesIndex={this.props.currentGridSizeIndex}
                                gridSizesLabel={this.gridSizesLabel}
                                changeBoardSizeEventHandler={(v) => this.changeBoardSizeEventHandler(v)}
                                gridLabel="Board Size"
                                
                                />
                        </div>
                    </div>

                    <div className="vertSelectBar">
                        <SelectButtonsBar 
                            patternNamesIndex={this.props.currentPatternNameIndex}
                            patternNames={this.patternNames}
                            changePatternEvent={(v) => this.changePatternEvent(v)}
                            patternLabel="Pattern"
                            gridSizesIndex={this.props.currentGridSizeIndex}
                            gridSizesLabel={this.gridSizesLabel}
                            changeBoardSizeEventHandler={(v) => this.changeBoardSizeEventHandler(v)}
                            gridLabel="Board Size"
                            
                            direction="column"
                            />
                    </div>
                    <div className="canvasAndControls">
                        <div className="canvas">
                            <div className="paddingSides">
                                <canvas
                                    ref={(canvas) => { this.canvasBoard = canvas}}
                                    onClick={(e) => this.handleClick(e)}
                                />

                            </div>
                        </div>
                        <div className="controls">
                            <PlayButtonsBar 
                                on={this.props.stopped[boardNames.MAIN]}
                                handlePlayToggle={() => this.handlePlayToggle()}
                                step={() => this.step()}
                                clear={() => this.clear()}
                                setInterval={(v) => this.setInterval(v)}
                                
                            />
                        </div>
                    </div>
                    
                </div>
                
               <style jsx >{`
                    .gameBoard {
                        text-align: center;
                        margin-top: 80px;
                        z-index: 2;

                    }
                    .paddingSides {
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                    .container {
                        width: ${width};
                        display: inline-block;
                    }
                    .horSelectBar {
                        display: ${horSelectBarDisplay};
                    }
                    .vertSelectBar {
                        display: ${vertSelectBarDisplay};
                        width: 25%;
                        padding: 2px;
                        vertical-align: top;
                    }
                    .canvasAndControls {
                        display: ${canvasAndControlsDisplay};
                        width: ${canvasAndControlsWidth}
                    }
              `}</style>
              <Dialog open={this.state.showMessage} onRequestClose={this.handleCloseErrorDialog}>
                  <DialogTitle>{"Can`t download patterns"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      We are sorry! For some reason we coudn`t download our example patterns from github server.
                      But you can draw your patterns on the board
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
    savedCellList: TWO_NUMBERS_ARRAY,
    patterns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        pattern: TWO_NUMBERS_ARRAY
        })
    ),
    changePattern: PropTypes.func.isRequired,
    changeBoardSize: PropTypes.func.isRequired,
    incrementGeneration: PropTypes.func.isRequired,
    setSpeed: PropTypes.func.isRequired,
    setClear: PropTypes.func.isRequired,
    setGameValues: PropTypes.func.isRequired,
    currentPatternNameIndex: PropTypes.number,
    currentGridSizeIndex: PropTypes.number,
    error: PropTypes.bool,
};
