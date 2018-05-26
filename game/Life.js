import { makeUnique, shiftPatternToCenter, getRandomPattern } from '../util/helpers';
import Cell from './Cell';
class Life {
	constructor(width, height, initialState) {
		this.gridWidth = width;
  	this.gridHeight = height;
  	this.checkList = [];
		this.change = {
      list: null,
      isFirst: true,
    };
		if (initialState != null) {
      this.change.list = initialState;
    } else {
      this.change.list = getRandomPattern(height, width);
    }
    for (let i = 0; i < this.change.list.length; i++) {
      this.checkList.push(valuesBoard[this.change.list[i][0]][this.change.list[i][1]]);
    }    
    this.board = createBoard(this.gridWidth, this.gridHeight, this.checkList, setNeighbors);
	}

	reload(width, height) {
    this.checkList = [];
    this.change = {
      list: null,
      isFirst: true,
    };
    this.gridWidth = width;
    this.gridHeight = height; 
    this.board = createBoard(this.gridWidth, this.gridHeight, this.checkList, setNeighbors);

  }

  setPattern(index, patternsList, boardIsClear) {
    let changeList;
    if (index > 0) {
      //get the coordinates of choosed pattern adjusted to current board size
      changeList = shiftPatternToCenter(patternsList[index-1].pattern, this.gridHeight, this.gridWidth);
    } else {
      //random live cells have index = 0
      changeList = getRandomPattern(this.gridHeight,this.gridWidth);
    }
    if (boardIsClear) {
      //board is clear - there aren't any live cells on the board
      this.change.list = changeList;

      this.change.isFirst = true;
    } else {
      //we have to clear the remained cells 
      this.change.list = getNewPatternChangeList(this.board, changeList);
      this.change.isFirst = true;
    }
    for (let i = 0; i < this.change.list.length; i++) {
      this.checkList.push(valuesBoard[this.change.list[i][0]][this.change.list[i][1]]);
    } 
  }

  addCell(x, y) {
    this.checkList.length = 0;
  	this.change.list = [];
    this.change.list.push([y, x]);
    const redrawList = this.change.list;
    applyChanges(this.board, this.change, this.checkList);
    this.change.list = boardTotalCheck(this.board); 
    return redrawList;
  }

  clearWorld() {
    this.checkList.length = 0;
    this.change.list = getLiveCells(this.board);
    const redrawList = this.change.list;
    applyChanges(this.board, this.change, this.checkList);
    this.change.isFirst = true;
    this.checkList.length = 0;
    return redrawList;
  }

  nextGeneration(){
    this.checkList.length = 0;
    // let redrawList = [];
    // if (boardIsClear) {
    //     this.change.list = getLiveCells(this.board);
    //     redrawList = this.change.list;
    //     applyChanges(this.board, this.change, this.checkList);
    //     this.change.isFirst = true;
    //     this.checkList.length = 0;
    // } else {
    const nextList = applyChanges(this.board,this.change,this.checkList);
    const redrawList = this.change.list;
    this.change.list = nextList;     
    this.change.isFirst = false;
    // }
    return redrawList;
	}

  getLiveCells() {
    return getLiveCells(this.board);
  }

  getBoard() {
  	return this.board;
  }
    
}

export default Life;

export function createCellsBoard(width, height, checkList) {
  const valuesBoard = Array(height).fill(null);
  for (let i = 0; i < height; i++) {
    valuesBoard[i] = Array(width).fill(null);
    for (let j = 0; j < width; j++) {
      valuesBoard[i][j] = new Cell(checkList, i, j);
    }
  }
  return valuesBoard;
}

export function createBoard(width, height, checkList, setNeighbors) {
  const board = createCellsBoard(width, height, checkList);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const neighbors = setNeighbors(board, width, height, i, j);//  setListeners(i,j);
      const stateChangeListeners = getStateChangeListeners(neighbors);
      board[i][j].addListeners("neighborStateChange", stateChangeListeners);
      const numberChangeListeners = getNumberChangeListeners(board[i][j]);
      board[i][j].addListeners("neighborsChange", numberChangeListeners);
    }
  }
  return board;
}

export function setNeighbors(valuesBoard, width, height, Y, X){
  const cellList = [];
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let tX = X + j, tY = Y + i;
      if (tY < 0) {
      	tY = height - 1;
      } else if (tY >= height) {
      	tY = 0;
      }
      if (tX < 0) {
      	tX = width - 1;
      } else if (tX >= width) {
      	tX = 0;
      }
      if (!(i === 0 && j === 0)) {
        cellList.push(valuesBoard[tY][tX]);
      }                    
    }
  }
  return cellList;
}

export function getStateChangeListeners(neighbors){
  const listeners = [];
  neighbors.forEach(c => 
    listeners.push(function(val) {
      val === 1 ? c.addNeighbor() : c.removeNeighbor();
    }));
  return listeners;
}


export function getNumberChangeListeners(cell){
  const listeners = [];
  listeners.push(function(){
    cell.checkList.push(cell);
  });
  return listeners;
}

export function applyChanges(valuesBoard, modifiedCells, checkList) {
  const nextGeneration = [];
  for (let i = 0; i < modifiedCells.list.length; i++) {
    valuesBoard[modifiedCells.list[i][0]][modifiedCells.list[i][1]].changeState();
  }
  // if (modifiedCells.isFirst) { 
  //     for (let i = 0; i < modifiedCells.list.length; i++) {
  //         checkList.push(valuesBoard[modifiedCells.list[i][0]][modifiedCells.list[i][1]]);
  //     }      
  // }
  checkList = makeUnique(checkList);
  // if(checkList.length>200){        
      
  //     nextGeneration = boardTotalCheck(valuesBoard)
  // } else {

  for (let i = 0; i < checkList.length; i++) {
    if (isGoingToChange(checkList[i])) {
      nextGeneration.push([checkList[i].Y,checkList[i].X]);
    } 
  }
          
  // }
  return nextGeneration;  
}

export function getLiveCells(valuesBoard) {
  const cells = [];
  for (let i = 0, ilen = valuesBoard.length; i < ilen; i++) {
    for (let j = 0, jlen = valuesBoard[i].length; j < jlen; j++) {
      if (valuesBoard[i][j].state === 1) {
      	cells.push([i,j]);
      }
    }
  }
  return cells;
}

export function boardTotalCheck(valuesBoard) {
  const redrawList = [];
  for (let i = 0, ilen = valuesBoard.length; i < ilen; i++) {
    for (let j = 0, jlen = valuesBoard[i].length; j < jlen; j++) {
      if (isGoingToChange(valuesBoard[i][j])) {
        redrawList.push([i,j]);
      }
    }
  }
  return redrawList;
}

export function isGoingToChange(cell){
  return (cell.state === 1 && (cell.getNeighborsCount() < 2 || cell.getNeighborsCount() > 3)) 
	    || (cell.state === 0 && cell.getNeighborsCount() === 3);
}

export function getNewPatternChangeList(valuesBoard, newPattern){
  var changeList = [];
  for (let i = 0, ilen = valuesBoard.length; i < ilen; i++) {
    for (let j = 0, jlen = valuesBoard[i].length; j < jlen; j++) {
      if (valuesBoard[i][j].state === 1) {
        const ind = newPattern.indexOf([i,j]);
        ~ind ? newPattern.splice(ind,1) : changeList.push([i,j]);
      }
    }
  }
  newPattern.forEach(x => changeList.push(x));
  return changeList;
}
