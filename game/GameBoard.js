import Cell from './Cell';
import Life from './Life';
import Canvas from './Canvas';

import {colors as color} from '../util/colors';


class GameBoard {
    constructor(name, width, height, squareSize, initialState) {
    
        this.width = width;
        this.height = height;
        this.squareSize = squareSize;
        this.radius = this.squareSize / 2;
        this.name = name;
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
        try{
         
        const redrawList = this.life.nextGeneration(mode);
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
