import { makeUnique, shiftPatternToCenter, getRandomPattern } from '../util/helpers';
import Cell from './Cell';

class Life {
	constructor(width, height, initialState) {
		this.gridWidth = width;
  	this.gridHeight = height;
  	this.cellmap = null;
    this.changeList = initialState;
    this.cellmap = createCellmap(this.gridWidth, this.gridHeight, getNeighbors);
	}

	reload(width, height) {
    this.changeList = null;
    this.cellmap = null;
    this.redrawList = null;
    this.gridWidth = width;
    this.gridHeight = height; 
    this.cellmap = createCellmap(this.gridWidth, this.gridHeight, getNeighbors);
  }

  setPattern(pattern) {
    const liveCells = getLiveCells(this.cellmap);
    if (liveCells.length === 0) {
      this.changeList = pattern;
    } else {
      this.changeList = liveCells.filter(cell => pattern.indexOf(cell) === -1)
        .concat(pattern.filter(cell => liveCells.indexOf(cell) === -1));
    }
    return this.nextGeneration();
  }

  drawCell(y, x) {
    this.cellmap[y][x].changeState();
    this.changeList = totalCheck(this.cellmap);
    return [[y, x]];
  }

  clearWorld() {
    this.changeList = getLiveCells(this.cellmap);
    return this.nextGeneration();
  }

  nextGeneration(){
    const redrawList = this.changeList;
    const checkList = applyChanges(this.changeList, this.cellmap, this.gridWidth, this.gridHeight);
    this.changeList = makeChangeList(checkList, this.cellmap);
    return redrawList;
	}

  getLiveCells() {
    return getLiveCells(this.cellmap);
  }

  getCellmap() {
  	return this.cellmap;
  }
    
}

export default Life;

const nextState = {
  '-1': [-1, -1, -1, 1, -1, -1, -1, -1, -1],
  '1': [-1, -1, 1, 1, -1, -1, -1, -1, -1],
}

export function createCellmap(width, height, getNeighbors) {
  const cellmap = Array(height).fill(null);
  for (let i = 0; i < height; i++) {
    cellmap[i] = Array(width).fill(null);
    for (let j = 0; j < width; j++) {
      cellmap[i][j] = new Cell();
    }
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const neighborsCoordinates = getNeighbors(width, height, i, j);
      cellmap[i][j].setNeighborsCoordinates(neighborsCoordinates);
      cellmap[i][j].setNeighbors(neighborsCoordinates.map(coordinates => {
        const [y, x] = coordinates.split(',').map(k => +k);
        return cellmap[y][x]
      }));
    }
  }
  return cellmap;  
}

export function applyChanges(changeList, cellmap, width, height) {
  const checkList = {};
  changeList.forEach(cell => {
    const [y, x] = cell;
    cellmap[y][x].changeState();
    checkList[`${y},${x}`] = 1;
    const neighbors = cellmap[y][x].getNeighborsCoordinates()//getNeighbors(width, height, y, x);
    neighbors.forEach(neighbor => {
      checkList[neighbor] = 1;
    })
  })  
  return checkList;
}

export function makeChangeList(checkList, cellmap) {
  const changeList = [];

  Object.keys(checkList).forEach(cell => {
    // const [y, x] = cell.split(',');
    const re = /\d+/g;
    const y = +re.exec(cell)[0];
    const x = +re.exec(cell)[0];
    // console.log(`${y}-${x}`)
    const state = cellmap[y][x].getState();
    const neighborsCount = cellmap[y][x].getNeighborsCount();
    if(nextState[state][neighborsCount] !== state) {
      changeList.push([y, x]);
    }
  })
  return changeList;
}

export function totalCheck(cellmap) {
  const changeList = [];
  for (let i = 0; i < cellmap.length; i++) {
    for (let j = 0; j < cellmap[i].length; j++) {
      const state = cellmap[i][j].getState();
      const neighborsCount = cellmap[i][j].getNeighborsCount();
      if(nextState[state][neighborsCount] !== state) {
        changeList.push([i, j]);
      }
    }
  }  
  return changeList;
}

export function getNeighbors(width, height, Y, X){
  const cells = {};
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
        cells[`${tY},${tX}`] = 1;
      }                    
    }
  }
  return Object.keys(cells);
}



export function getLiveCells(cellmap) {
  const cells = [];
  for (let i = 0; i < cellmap.length; i++) {
    for (let j = 0; j < cellmap[i].length; j++) {
      if (cellmap[i][j].getState() === 1) {
      	cells.push([i, j]);
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
