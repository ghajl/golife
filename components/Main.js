import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import GameBoard from '../game/GameBoard';
import {colors as color} from '../util/colors';
import SelectButtonsBar from './SelectButtonsBar';
import PlayButtonsBar from './PlayButtonsBar';
import {patternNames} from '../util/patternNames';
import {boardParameters} from '../util/boardParameters';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';




class Main extends Component {
    constructor(props){
        super(props);
        let boardParams = boardParameters.medium;
        if (props.savedState != null) {
            if (props.currentGridSizeIndex === 0) {
                boardParams = boardParameters.small;
            } else if (props.currentGridSizeIndex === 2) {
                boardParams = boardParameters.large;
            }
        }
        this.boardWidth = boardParams.width;
        this.boardHeight = boardParams.height;
        this.squareSize = boardParams.squareSize;
        this.sizeLabel = [
            `${boardParameters.small.height} X ${boardParameters.small.width}`,
            `${boardParameters.medium.height} X ${boardParameters.medium.width}`,
            `${boardParameters.large.height} X ${boardParameters.large.width}`
        ];
        this.patternNameLabel = ['Random'];
        if (props.patterns) {
            this.patternNameLabel = this.patternNameLabel.concat(props.patterns.map(pattern => pattern.name));
        }
        this.playMode = {
            running: false,
            stopped: false,
            drawing: false,
            clear:true,
        }

        this.board = new GameBoard(patternNames.MAIN, this.boardWidth, this.boardHeight, this.squareSize);
        this.setStopped = stopped => props.setStopped(stopped, 'main');
        this.state = {showMessage: false};
    }

    updateOnce(){
        this.board.update(this.playMode);
        if (!this.playMode.drawing) {
            this.props.incrementGeneration();
        }
    }

    run(){
        this.now = Date.now();
        this.delta = this.now - this.then;
        if (this.delta > this.interval) {
            this.then = this.now - (this.delta % this.interval);
            this.updateOnce();
        }  
        this.rAF = requestAnimationFrame(() =>{this.run()}); 
    }


    handleWindowSizeChange = () => {
        this.setState({
            screen : {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
              }
        });
        this.board.handleWindowSizeChange(this.canvas);
    };


    handlePatternChange(index){
        if(index !== this.props.currentPatternNameIndex){
            this.board.changePattern(index, this.props.patterns, this.playMode);
            this.props.changePattern(index)
            if(this.playMode.clear){
                this.playMode.clear = false;
                this.updateOnce();
            } else {
                this.stop();
                this.updateOnce();
            }
        }
    }

    handleBoardSizeChange(index){
        if(index !== this.props.currentGridSizeIndex)
        {
            const boardParams = 
                index === 0 ? boardParameters.small 
                : index === 1 ? boardParameters.medium
                : boardParameters.large;
            this.changeBoardSize(boardParams, index);
        }
    }

    changeBoardSize(boardParameters, sizeIndex){
        this.stop();
        this.boardWidth = boardParameters.width;
        this.boardHeight = boardParameters.height; 
        this.squareSize = boardParameters.squareSize;
        this.board.reload(this.boardWidth, this.boardHeight, this.squareSize, this.canvas);
        this.playMode.clear = true;
        this.playMode.drawing = false;
        this.playMode.running = false;
        this.playMode.stopped = false;
        this.props.changeBoardSize(sizeIndex);
    }
    
    handlePlayToggle(){
        if(this.props.stopped['main']){
            this.start();
        } else {
            this.stop();
        }
    };  

    setInterval(value){
        this.interval=1000/value;
        this.props.setSpeed(value);
    }

    handleClick(e){
        this.playMode.drawing = true;
        if (!this.props.stopped['main']) {
            this.stop();
        }
        const isCircleClicked = this.board.circleClick(e);
        if (isCircleClicked) {
            this.playMode.clear = false;
            this.updateOnce();
        }
    }

    start = () => {
        if(!this.playMode.running && !this.playMode.clear){
            this.playMode.running = true;
            this.playMode.stopped = false;
            this.then = Date.now();
            this.playMode.drawing = false;
            this.setStopped(false);
            this.rAF = requestAnimationFrame(() =>{this.run()});
        }
    }

    stop() {
        if(!this.playMode.stopped){
            this.setStopped(true);
            this.playMode.running = false;
            this.playMode.stopped = true;
            cancelAnimationFrame(this.rAF);
        }
    }

    clear(){
        if(!this.playMode.clear){
            this.stop();
            this.props.setClear();
            this.playMode.clear = true;
            this.playMode.drawing=false;
            this.updateOnce();
        }
    }

    step(){
        if(!this.playMode.running && !this.playMode.clear){
            this.playMode.running = false;
            this.playMode.stopped = true;
            if(this.playMode.drawing){
                this.playMode.drawing=false;
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
        this.playMode.clear = false;
        this.board.drawBoard(this.boardWidth, this.boardHeight, this.squareSize, ratio, this.canvas, this.props.savedState);
        this.updateOnce();
        if(this.props.error){
            this.handleOpenErrorDialog()
        }
    }


    componentWillUnmount(){
        cancelAnimationFrame(this.rAF);    
        const liveCellsList = this.board.getLiveCells();
        this.props.saveState(liveCellsList)
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
                                patternNames={this.patternNameLabel}
                                changePatternEvent={(v) => this.handlePatternChange(v)}
                                patternLabel="Pattern"
                                gridSizesIndex={this.props.currentGridSizeIndex}
                                gridSizesLabel={this.sizeLabel}
                                changeBoardSizeEventHandler={(v) => this.handleBoardSizeChange(v)}
                                gridLabel="Board Size"
                                
                                />
                        </div>
                    </div>

                    <div className="vertSelectBar">
                        <SelectButtonsBar 
                            patternNamesIndex={this.props.currentPatternNameIndex}
                            patternNames={this.patternNameLabel}
                            changePatternEvent={(v) => this.handlePatternChange(v)}
                            patternLabel="Pattern"
                            gridSizesIndex={this.props.currentGridSizeIndex}
                            gridSizesLabel={this.sizeLabel}
                            changeBoardSizeEventHandler={(v) => this.handleBoardSizeChange(v)}
                            gridLabel="Board Size"
                            
                            direction="column"
                            />
                    </div>
                    <div className="canvasAndControls">
                        <div className="canvas">
                            <div className="paddingSides">
                                <canvas
                                    ref={(canvas) => { this.canvas = canvas}}
                                    onClick={(e) => this.handleClick(e)}
                                />

                            </div>
                        </div>
                        <div className="controls">
                            <PlayButtonsBar 
                                on={this.props.stopped['main']}
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

export default Main;

const TWO_NUMBERS_ARRAY = function(props, propName, componentName){
    if (!Array.isArray(props.propName) || props.propName.length != 2 || !props.propName.every(Number.isInteger)) {
        return new Error(`${propName} needs to be an array of two numbers`);
    }    
}


Main.propTypes = {
    setStopped: PropTypes.func.isRequired,
    stopped: PropTypes.shape({
        [patternNames.MAIN]: PropTypes.bool,
        [patternNames.BLOCK]: PropTypes.bool,
        [patternNames.BOAT]: PropTypes.bool,
        [patternNames.LOAF]: PropTypes.bool,
        [patternNames.BEEHIVE]: PropTypes.bool,
        [patternNames.BLINKER]: PropTypes.bool,
        [patternNames.BEACON]: PropTypes.bool,
        [patternNames.TOAD]: PropTypes.bool,
        [patternNames.GLIDER]: PropTypes.bool,
        [patternNames.SPACESHIP]: PropTypes.bool,
        [patternNames.GUN]: PropTypes.bool,
    }).isRequired,
    savedState: TWO_NUMBERS_ARRAY,
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
    saveState: PropTypes.func.isRequired,
    currentPatternNameIndex: PropTypes.number,
    currentGridSizeIndex: PropTypes.number,
    error: PropTypes.bool,
};
