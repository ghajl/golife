import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Game from '../game/Game';
import {colors as color} from '../util/colors';
import SelectButtonsBar from './SelectButtonsBar';
import PlayButtonsBar from './PlayButtonsBar';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class Main extends Component {
  constructor(props){
    super(props);
    const params = props.parameters[props.currentSize];
    this.boardWidth = params.width;
    this.boardHeight = params.height;
    this.squareSize = params.squareSize;
    this.game = new Game(this.boardWidth, this.boardHeight, this.squareSize, props.cells);
    this.setRunning = running => props.setRunning(running, 'main');
    this.state = {showMessage: false};
  }

  componentWillMount(){
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.setState(
      {
        screen: {
          width: window.innerWidth,
          height: window.innerHeight,
          ratio: window.devicePixelRatio || 1,
        }
      }
    )        
  }

  componentDidMount(){
    const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
    this.game.drawBoard(this.canvas, ratio);
    if(this.props.error){
      this.handleOpenErrorDialog()
    }
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.rAF);    
    const liveCellsList = this.game.getLiveCells();
    this.props.saveCells(liveCellsList);
  }

  handleWindowSizeChange = () => {
    this.setState({
      screen : {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      }
    });
    this.game.handleWindowSizeChange();
  };

  handlePatternChange(index){
    if(index !== this.props.currentPattern){
      this.stop();
      this.game.setPattern(index, this.props.patterns);
      this.props.changePattern(index);
    }
  }

  handleBoardSizeChange(index){
    if (index !== this.props.currentSize) {
      this.stop();
      const params = this.props.parameters[index]; 
      this.boardWidth = params.width;
      this.boardHeight = params.height; 
      this.squareSize = params.squareSize;
      this.game.reload(this.boardWidth, this.boardHeight, this.squareSize, this.canvas);
      this.props.changeBoardSize(index);
    }
  }

  handleClick(e){
    if (this.props.running['main']) {
      this.stop();
    }
    this.game.drawCell(e);
  }

  handlePlayToggle(){
    if(this.props.running['main']){
      this.stop();
    } else {
      this.start();
    }
  };  

  handleOpenErrorDialog = () => {
    this.setState({showMessage: true});
  };   
  
  handleCloseErrorDialog = () => {
    this.setState({showMessage: false});
  };
  
  setInterval(value){
    this.interval = 1000 / value;
    this.props.setSpeed(value);
  }

  start = () => {
    if (!(this.props.running['main'] || this.game.getCellCount() === 0)) {
      this.then = Date.now();
      this.setRunning(true);
      this.rAF = requestAnimationFrame(() =>{this.run()});
    }
  }

  stop() {
    if(this.props.running['main']){
      this.setRunning(false);
      cancelAnimationFrame(this.rAF);
    }
  }

  clear(){
    if (!(this.game.getCellCount() === 0)) {
      this.stop();
      this.props.setClear();
      this.game.clear();
    }
  }

  step(){
    if (!(this.props.running['main'] || this.game.getCellCount() === 0)) {
      this.updateOnce();
    }
  }
  
  updateOnce(){
    this.game.update();
    this.props.incrementGeneration();
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

  render() {
    const {screen} = this.state;
    const width = screen.width > 1280 ? '50%' : '100%';
    const hMBDisplay = screen.width < screen.height ||  screen.width > 1280 ? 'block' : 'none';
    const vMBDisplay = screen.width < screen.height ||  screen.width > 1280 ? 'none' : 'inline-block';
    const cCDisplay = screen.width < screen.height ||  screen.width > 1280 ? 'block' : 'inline-block';
    const cCWidth = screen.width < screen.height ||  screen.width > 1280 ? '100%' : '70%';
    const isRunning = this.props.running['main'] || false;
    return (
      <div className="container">
        <div className="game">
          <div className="horizontal-menu-bar">
            <div className="wrapper">
              <SelectButtonsBar 
                patternIndex={this.props.currentPattern}
                patterns={this.props.patterns}
                parameters={this.props.parameters}
                onPatternChange={(index) => this.handlePatternChange(index)}
                sizeIndex={this.props.currentSize}
                onBoardSizeChange={(index) => this.handleBoardSizeChange(index)}
              />
            </div>
          </div>
          <div className="vertical-menu-bar">
            <SelectButtonsBar 
              patternIndex={this.props.currentPattern}
              patterns={this.props.patterns}
              parameters={this.props.parameters}
              onPatternChange={(index) => this.handlePatternChange(index)}
              sizeIndex={this.props.currentSize}
              onBoardSizeChange={(index) => this.handleBoardSizeChange(index)}
              direction="column"
            />
          </div>
          <div className="canvas-controls">
            <div className="canvas">
              <div className="wrapper">
                <canvas
                  ref={(canvas) => {this.canvas = canvas}}
                  onClick={(e) => this.handleClick(e)}
                />
              </div>
            </div>
            <div className="controls">
              <PlayButtonsBar 
                on={!isRunning}
                handlePlayToggle={() => this.handlePlayToggle()}
                step={() => this.step()}
                clear={() => this.clear()}
                setInterval={(v) => this.setInterval(v)}
              />
            </div>
          </div>
        </div>
        <style jsx >{`
          .container {
              text-align: center;
              margin-top: 80px;
              z-index: 2;
          }
          .wrapper {
              padding-left: 10px;
              padding-right: 10px;
          }
          .game {
              width: ${width};
              display: inline-block;
          }
          .horizontal-menu-bar {
              display: ${hMBDisplay};
          }
          .vertical-menu-bar {
              display: ${vMBDisplay};
              width: 25%;
              padding: 2px;
              vertical-align: top;
          }
          .canvas-controls {
              display: ${cCDisplay};
              width: ${cCWidth};
          }
        `}</style>
        <Dialog open={this.state.showMessage} onRequestClose={this.handleCloseErrorDialog}>
          <DialogTitle>{"Can't download patterns"}</DialogTitle>
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


// Main.propTypes = {
//   setRunning: PropTypes.func.isRequired,
//   running: PropTypes.shape({
//     [patternNames.MAIN]: PropTypes.bool,
//     [patternNames.BLOCK]: PropTypes.bool,
//     [patternNames.BOAT]: PropTypes.bool,
//     [patternNames.LOAF]: PropTypes.bool,
//     [patternNames.BEEHIVE]: PropTypes.bool,
//     [patternNames.BLINKER]: PropTypes.bool,
//     [patternNames.BEACON]: PropTypes.bool,
//     [patternNames.TOAD]: PropTypes.bool,
//     [patternNames.GLIDER]: PropTypes.bool,
//     [patternNames.SPACESHIP]: PropTypes.bool,
//     [patternNames.GUN]: PropTypes.bool,
//   }).isRequired,
//   cells: TWO_NUMBERS_ARRAY,
//   patterns: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     pattern: TWO_NUMBERS_ARRAY
//     })
//   ),
//   changePattern: PropTypes.func.isRequired,
//   changeBoardSize: PropTypes.func.isRequired,
//   incrementGeneration: PropTypes.func.isRequired,
//   setSpeed: PropTypes.func.isRequired,
//   setClear: PropTypes.func.isRequired,
//   saveCells: PropTypes.func.isRequired,
//   currentPattern: PropTypes.number,
//   currentSize: PropTypes.number,
//   error: PropTypes.bool,
// };
