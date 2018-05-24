import { makeUnique, shiftPatternToCenter, getRandomPattern } from '../util/helpers';
import Cell from './Cell';
class Life {
	constructor(width, height, savedState, isUnwrapped = false) {
		this.gridWidth = width;
	  	this.gridHeight = height;
	  	this.gridIsUnwrapped = isUnwrapped;
		this.checkList = [];
		this.initialState = savedState;
		this.modifiedCells = {
            list: null,
            isFirst: true,
        };
		if (this.gridIsUnwrapped) {
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        if (this.initialState != null) {
            if (this.gridIsUnwrapped) {
                this.initialState = this.initialState.map(cell => [cell[0]+20,cell[1]+20]);
            }
            this.modifiedCells.list = this.initialState;
        } else {
            this.modifiedCells.list = getRandomPattern(height,width);
        }
        this.board = createBoard(this.gridWidth, this.gridHeight, this.checkList, this.gridIsUnwrapped);
	}

	reload(width ,height , isUnwrapped = false) {
        this.checkList = [];
        this.modifiedCells = {
            list: null,
            isFirst: true,
        };
        this.gridWidth = width;
        this.gridHeight = height; 
        this.gridIsUnwrapped = isUnwrapped;
        if(this.gridIsUnwrapped){
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        
        this.board = createBoard(this.gridWidth, this.gridHeight, this.checkList, this.gridIsUnwrapped);

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
            this.modifiedCells.list = changeList;
            this.modifiedCells.isFirst = true;
        } else {
            //we have to clear the remained cells 
            this.modifiedCells.list = getNewPatternChangeList(this.board, changeList);
            this.modifiedCells.isFirst = true;
        }
    }

    addCell(x, y) {
    	this.modifiedCells.list = [];
        this.modifiedCells.list.push([y, x]);
    }


    nextGeneration(mode = {}){
	    this.checkList.length = 0;
        let redrawList = [];
        if (mode.drawing) {
            redrawList = this.modifiedCells.list;
            applyChanges(this.board, this.modifiedCells, this.checkList);
            this.modifiedCells.list = boardTotalCheck(this.board);   
        } else if (mode.clear) {
            this.modifiedCells.list = getLiveCells(this.board);
            redrawList = this.modifiedCells.list;
            applyChanges(this.board, this.modifiedCells, this.checkList);
            this.modifiedCells.isFirst = true;
            this.checkList.length = 0;
        } else {
            const nextList = applyChanges(this.board,this.modifiedCells,this.checkList);
            redrawList = this.modifiedCells.list;
            this.modifiedCells.list = nextList;     
            this.modifiedCells.isFirst = false;
        }

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

export function createCellsBoard(width, height, checkList, isUnwrapped) {
    const valuesBoard = Array(height).fill(null);
    for (let i = 0; i < height; i++) {
        valuesBoard[i] = Array(width).fill(null);
        for (let j = 0; j < width; j++) {
            valuesBoard[i][j] = new Cell(checkList, i, j);
        }
    }
    return valuesBoard;
}

export function createBoard(width, height, checkList, isUnwrapped) {
    const board = createCellsBoard(width, height, checkList, isUnwrapped);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const neighbors = getNeighbors(board, width, height, i, j, isUnwrapped);//  setListeners(i,j);
            const stateChangeListeners = getStateChangeListeners(neighbors);
            board[i][j].addListeners("neighborStateChange", stateChangeListeners);
            const numberChangeListeners = getNumberChangeListeners(board[i][j]);
            board[i][j].addListeners("neighborsChange", numberChangeListeners);
        }
    }
    return board;
}

export function getNeighbors(valuesBoard, width, height, Y, X, isUnwrapped){
    let cellList = [];
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let tX = X + j, tY = Y + i;
            if (isUnwrapped) {
                if (tY >= 0 && tY < height && tX >= 0 && tX < width && !(i ===0 && j === 0)) {
                    cellList.push(valuesBoard[tY][tX]);
                }
            } else {
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
    if (modifiedCells.isFirst) { 
        for (let i = 0; i < modifiedCells.list.length; i++) {
            checkList.push(valuesBoard[modifiedCells.list[i][0]][modifiedCells.list[i][1]]);
        }      
    }
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
