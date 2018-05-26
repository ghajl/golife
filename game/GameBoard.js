import Cell from './Cell';
import Life from './Life';
import Canvas from './Canvas';
import {colors as color} from '../util/colors';

class GameBoard {
  constructor(width, height, squareSize, initialState) {
    this.width = width;
    this.height = height;
    this.squareSize = squareSize;
    this.radius = this.squareSize / 2;
    this.life = new Life(this.width, this.height, initialState);
	}

  reload(width, height, squareSize, canvas){
    this.width = width;
    this.height = height;
    this.squareSize = squareSize;
    this.radius = this.squareSize / 2;
    this.life.reload(width, height);
    this.drawBoard(canvas);
  }

  drawBoard(canvas, ratio)
  {
    if (ratio != null) {
      this.ratio = ratio;
    }
    this.canvas = new Canvas(canvas, this.width, this.height, this.squareSize, this.ratio);
    this.canvas.init();
  }

  drawCell(e){
    const coordinates = this.canvas.getClickCoordinates(e);
    if (coordinates != null) {
      const redrawList = this.life.addCell(coordinates.X, coordinates.Y);
      const board = this.life.getBoard();
      this.updateWorld(board, redrawList);
    }
  }

  changePattern(index, patternsList, isClear){
    const boardIsClear = isClear;
    this.life.setPattern(index, patternsList, boardIsClear);
  }

  handleWindowSizeChange(canvas){
    if (canvas) {
      this.canvas.handleWindowSizeChange();
    }  
  };

  getLiveCells(){
    return this.life.getLiveCells();
  }

  clear() {
    const redrawList = this.life.clearWorld();
    const board = this.life.getBoard();
    this.updateWorld(board, redrawList);
  }

  update(){
    try{
    const redrawList = this.life.nextGeneration();
    const board = this.life.getBoard();
    this.updateWorld(board, redrawList);
    }
    catch(e) {
      console.log(e)
    }
  }

  updateWorld(valuesBoard, redrawList){
    redrawList.forEach(cell => {
      const X = (cell[1] + 1) * this.squareSize;
      const Y = (cell[0] + 1) * this.squareSize;
      if(valuesBoard[cell[0]][cell[1]].state === 0){
        this.canvas.drawDeadCell(X, Y);
      } else {
        this.canvas.drawLiveCell(X, Y);
      }            
    })    
  }
}

export default GameBoard;
