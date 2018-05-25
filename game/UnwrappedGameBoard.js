// import Cell from './Cell';
// import Life from './Life';
// import Canvas from './Canvas';
import GameBoard from './GameBoard';
import UnwrappedLife from './UnwrappedLife';
import {colors as color} from '../util/colors';

export default class UnwrappedGameBoard extends GameBoard {
	constructor(name, width, height, squareSize, initialState, padding) {
    	super(name, width, height, squareSize, initialState);
    	this.padding = padding;
    	this.gridWidth = width + padding * 2;
    	this.gridHidth = height + padding * 2;
        this.life = new UnwrappedLife(this.gridWidth, this.gridHidth, initialState, padding);
	}

    updateWorld(valuesBoard, redrawList){
        redrawList.forEach(cell => {
            let X = cell[1];
            let Y = cell[0];
                if(X >= this.padding &&  X < this.gridWidth - this.padding && Y >= this.padding &&  Y < this.gridHidth - this.padding){
                    X = (X - this.padding + 1) * this.squareSize;
                    Y = (Y - this.padding + 1) * this.squareSize;
                    if(valuesBoard[cell[0]][cell[1]].state === 0){
                        this.canvas.drawDeadCell(X, Y);
                    } else {
                        this.canvas.drawLiveCell(X, Y);
                    }
                }
        })
    }

}