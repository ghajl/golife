import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import NoSSR from 'react-no-ssr';
import GameGrid from '../helpers/GameGrid';

import Grid from 'material-ui/Grid';
import {connect} from 'react-redux'
import withRoot from './withRoot';
// import Header from './components/Header'
import Link from 'next/link';
import SelectButtonsBar from './SelectButtonsBar';
import PlayButtonsBar from './PlayButtonsBar';
import {boardNames} from '../helpers/boardNames';
import {boardSizes} from '../helpers/boardSizes';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';




class Game extends Component {
    constructor(props){
        super(props);
console.log(props);
        this.currentBoardSize = boardSizes.medium;
 
        if(props.cellsList){
            switch(props.gridSizesIndex){
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



    reload(boardSize){

        this.stop();
        this.startPressed = false;
        this.pausePressed = false;
        this.clearPressed = false;
        this.stepPressed = false;
        this.currentBoardSize = boardSize;
        this.gridWidth = this.currentBoardSize.width;
        this.gridHeight = this.currentBoardSize.height; 
        this.squareSize = this.currentBoardSize.squareSize;
        this.grid.reload(this.gridWidth,this.gridHeight,this.squareSize,this.canvasBoard);
        this.mode.clear = true;
        this.mode.drawing = false;

    }



    updateOnce(){
        this.grid.update(this.mode);
        if(!this.mode.drawing)
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
        
        if(index !== this.props.patternNamesIndex){

            this.grid.changePattern(index, this.props.patterns, this.mode);
            this.changePattern(index)
            if(this.mode.clear){
                this.mode.clear = false;
                this.updateOnce();
                
            } else {
                this.stop();
        
        this.updateOnce();
            }

        }
            
    }

    changeBoardSizeEventHandler(index){
        if(index !== this.props.gridSizesIndex)
        {
            let size;

            if(index === 0){
                size = boardSizes.small;
            } else if(index === 1) {
                size = boardSizes.medium;
            } else if(index === 2) {
                size = boardSizes.large;
            } 

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
        this.setSpeed(value)
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
        
        this.mode.drawing=true;
        if(!this.props.stopped[boardNames.MAIN]){
            this.stop();
        }
        
        const isCellClicked = this.grid.handleClick(e);

        if(isCellClicked){
                this.mode.clear=false;
                this.updateOnce();
            
        }


    }



    start(){
        if(!this.startPressed && !this.mode.clear){
            this.changeButtonPressedStatus("start");
            this.then = Date.now();
            this.mode.drawing=false;
            this.setStopped(false);
            this.rAF = requestAnimationFrame(() =>{this.update()});
        }
    }

    stop(){
        if(!this.pausePressed){
            
            this.setStopped(true);
            this.changeButtonPressedStatus("pause");
            cancelAnimationFrame(this.rAF);
        }

    }

    clear(){
        
        if(!this.mode.clear){
            console.log("da")
            this.stop();
            this.setClear();
            this.mode.clear = true;
            this.mode.drawing=false;
            this.updateOnce();
        }

    }

    step(){
        if(!this.startPressed && !this.mode.clear){
            this.changeButtonPressedStatus("step");
            if(this.mode.drawing){
                this.mode.drawing=false;
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
    
    this.interval=1000/this.props.fps;this.interval=1000/this.props.fps;
    const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
       if(!this.props.cellsList){

            this.mode.clear=false;
            this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,null);
            this.updateOnce()

        } else {
            this.mode.clear = false;
            this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,this.props.cellsList);
            this.updateOnce();
        }

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
        const patterns = this.props.patterns;
        const Loading = () => (<div>Loading...</div>)
        const screen = this.state.screen ? this.state.screen : {};
    
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
                                            gridSizesLabel={this.gridSizesLabel}
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
                                        gridSizesLabel={this.gridSizesLabel}
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
};

