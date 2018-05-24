import Cell from './Cell';
import Life from './Life';
import Canvas from './Canvas';

import {colors as color} from '../util/colors';


class GameBoard {
    constructor(name, width, height, squareSize, savedCellList, isUnwrapped = false)
    {
        this.gridSquareSize = squareSize;
        this.radius = this.gridSquareSize / 2;
        this.gridName = name;
        this.savedCellList = savedCellList;
        this.gridIsUnwrapped = isUnwrapped;
        this.life = new Life(width, height, this.savedCellList, this.gridIsUnwrapped);
	}

    reload(width, height, squareSize, canvas, isUnwrapped = false){
        this.gridSquareSize = squareSize;
        this.radius = this.gridSquareSize / 2;
        this.gridIsUnwrapped = isUnwrapped;
        this.life.reload(width, height, this.gridIsUnwrapped);
        this.drawBoard(width, height, this.gridSquareSize, this.ratio, canvas);
    }


    drawBoard(width, height, squareSize, ratio, canvas, savedCellsList)
    {
        this.ratio = ratio;
        this.canvas = new Canvas(canvas, width, height, squareSize, ratio);
        this.canvas.init();
    }

    changePattern(index, patternsList, mode){
        const boardIsClear = mode.clear;
        this.life.setPattern(index, patternsList, boardIsClear);
    }

    circleClick(e){
        const coordinates = this.canvas.getClickCoordinates(e);
        if (coordinates != null) {
            this.life.addCell(coordinates.X, coordinates.Y);
            return true;
        }
        return false;
    }
    
    handleWindowSizeChange(canvas){
        if (canvas) {
            this.canvas.handleWindowSizeChange();
        }  
    };

    getLiveCells(){
        this.life.getLiveCells();
    }

    update(mode){
        const redrawList = this.life.nextGeneration(mode);
        const board = this.life.getBoard();
        this.updateWorld(board, redrawList);
    }

    updateWorld(valuesBoard, redrawList, gridIsUnwrapped = false){
        if(gridIsUnwrapped){
            redrawList.forEach(cell => {
                let X = cell[1];
                let Y = cell[0];
                    if(X >= 20 &&  X < width - 20 && Y >= 20 &&  Y < height - 20){
                        X = (X - 19) * this.gridSquareSize;
                        Y = (Y - 19) * this.gridSquareSize;
                        if(valuesBoard[cell[0]][cell[1]].state === 0){
                            this.canvas.drawDeadCell(X, Y);
                        } else {
                            this.canvas.drawLiveCell(X, Y);
                        }
                    }
            })
        } else {
            redrawList.forEach(cell => {
                const X = (cell[1] + 1) * this.gridSquareSize;
                const Y = (cell[0] + 1) * this.gridSquareSize;
                if(valuesBoard[cell[0]][cell[1]].state === 0){
                    this.canvas.drawDeadCell(X, Y);
                } else {
                    this.canvas.drawLiveCell(X, Y);
                }            
            })    
        }
    }
}


export default GameBoard;
