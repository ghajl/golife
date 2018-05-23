import Cell from './Cell';
import Life from './Life';
// import Canvas from './Canvas';

import {colors as color} from '../util/colors';


class GameGrid {
    constructor(name, width, height, squareSize, savedCellList, isUnwrapped = false)
    {
	  	this.gridWidth = width;
	  	this.gridHeight = height;
        this.gridSquareSize = squareSize;
        this.radius = this.gridSquareSize / 2;
        this.visibleGridWidth = width;
        this.visibleGridHeight = height;
        this.gridName = name;
        this.savedCellList = savedCellList;
        this.gridIsUnwrapped = isUnwrapped;
        this.life = new Life(this.width, this.height, this.savedCellList, this.gridIsUnwrapped);
        // this.canvas = new Canvas();

        // this.checkList = [];
        this.originalCellImage = null;
        // this.cellsStateChange = {
        //     list:null,
        //     isFirst:true,
        // }
        if(this.gridIsUnwrapped){
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        // this.valuesBoard = createGameMatrix(this.gridWidth, this.gridHeight, this.checkList, this.gridIsUnwrapped);

	}


    get width(){
        return this.visibleGridWidth;
    }

    get height(){
        return this.visibleGridHeight;
    }

    get squareSize(){
        return this.gridSquareSize;
    }

    get name(){
        return this.gridName;
    }




    reload(width,height,squareSize,canvas,isUnwrapped = false){
        // this.checkList = [];
        // this.cellsStateChange = {
        //     list:null,
        //     isFirst:true,
        // }
        // this.currentLiveCells=null;
        this.isManualState = false;
        this.gridWidth = width;
        this.gridHeight = height; 
        this.visibleGridWidth = width;
        this.visibleGridHeight = height;
        this.gridSquareSize = squareSize;
        this.radius = this.gridSquareSize / 2;
    
        this.gridIsUnwrapped = isUnwrapped;
        this.life.reload(this.gridWidth, this.gridHeight, this.gridIsUnwrapped);
        if(this.gridIsUnwrapped){
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        this.canvas = createCanvas(canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize, this.ratio);
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasContext.scale(this.ratio, this.ratio);
        drawGrid(this.canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize);
        let bufferCanvas = copyCanvas(this.canvas);
        let ctx = bufferCanvas.getContext('2d');  
        
        this.originalCellImage = ctx.getImageData(this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio, this.gridSquareSize* this.ratio)

        // this.valuesBoard = createGameMatrix(this.gridWidth, this.gridHeight, this.checkList, this.gridIsUnwrapped);

    }


     makeBoard(width,height,squareSize,ratio,canvas,savedCellsList)
    {
        this.canvas = createCanvas(canvas, width, height, squareSize, ratio);
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasContext.scale(ratio, ratio);
        this.ratio = ratio;
        drawGrid(this.canvas, width, height, squareSize);
        let bufferCanvas = copyCanvas(this.canvas);
        let ctx = bufferCanvas.getContext('2d');         
        this.originalCellImage = ctx.getImageData(squareSize * ratio / 2, squareSize * ratio / 2, squareSize * ratio, squareSize* ratio);


        // if(savedCellsList){
        //     if(this.gridIsUnwrapped){
        //         savedCellsList = savedCellsList.map(cell => [cell[0]+20,cell[1]+20]);
        //     }
        //     this.cellsStateChange.list = savedCellsList;
        
          
        // } else {
        //         this.cellsStateChange.list = getRandomPattern(height,width);
        // }
        // this.cellsStateChange.isFirst = true;
    }

    changePattern(index, patternsList, mode){
        const boardIsClear = mode.clear;
        this.life.setPattern(index, patternsList, boardIsClear);
        // var nextGenerationChangeCellsList;
        // if(index>0){
        //     //get the coordinates of choosed pattern adjusted to current board size
        //     nextGenerationChangeCellsList=shiftPatternToCenter(patternsList[index-1].pattern,this.gridHeight,this.gridWidth);
        // } else {
        //     //random live cells have index = 0
        //     nextGenerationChangeCellsList=getRandomPattern(this.gridHeight,this.gridWidth);
        // }
        // if(mode.clear){
        //     //board is clear - there aren't any live cells on the board
        //     this.cellsStateChange.list = nextGenerationChangeCellsList;
        //     this.cellsStateChange.isFirst = true
        // } else {
        //     //we have to clear the remained cells 
        //     this.cellsStateChange.list=getNewPatternChangeList(this.valuesBoard, nextGenerationChangeCellsList);
        //     this.cellsStateChange.isFirst = true;
        // }
    }

    handleClick(e){
        
        const rect = this.canvas.getBoundingClientRect();
        const cnvLeft = Math.floor(rect.left);
        const cnvRight = Math.floor(rect.right);
        const cnvTop = Math.floor(rect.top);
        const cnvBottom = Math.floor(rect.bottom);
        const currentSquareSize = this.gridSquareSize * this.ratio;
        const r = currentSquareSize / 2 - 1;
        const boardWidth=(this.gridWidth + 1) * currentSquareSize;
        const boardHeight=(this.gridHeight + 1) * currentSquareSize;
        const x = Math.round((getCursorPos(e)[0]-cnvLeft)/(cnvRight-cnvLeft)*boardWidth);
        const y = Math.round((getCursorPos(e)[1]-cnvTop)/(cnvBottom-cnvTop)*boardHeight);
        if((x + currentSquareSize/2) % currentSquareSize !== 0 && (y + currentSquareSize/2) % currentSquareSize !== 0){
            const nearestX = Math.floor((x + currentSquareSize / 2) / currentSquareSize)
            const nearestY = Math.floor((y + currentSquareSize / 2) / currentSquareSize)
            if(Math.pow(x - nearestX * currentSquareSize, 2) + Math.pow(y - nearestY * currentSquareSize, 2) < Math.pow(r, 2)){

                this.life.addCell(nearestX - 1, nearestY - 1);
                
                return true;
            }
      
        }
        return false;
    }
    
    handleWindowSizeChange(canvas){
        this.canvas = canvas;
            if(this.canvas){
                let r = this.canvas.height / this.canvas.width;
                this.canvas.style.width="100%";
                this.canvas.style.height=this.canvas.offsetWidth * r + "px";
       
        }  
    };

    getLiveCells(){
        this.life.getLiveCells();
    }

    update(mode){
        const redrawList = this.life.nextGeneration(mode);
        const board = this.life.getBoard();
        // this.canvas.drawBoard(redrawList, board);
        this.updateTable(board, redrawList);
            
    }
    updateTable(valuesBoard, changeList, gridIsUnwrapped = false){
        // console.log("updateTable")
        if(gridIsUnwrapped){
            changeList.forEach(cell => {
                let X = cell[1];
                let Y = cell[0];
                
                
                    if(X >= 20 &&  X < width - 20 && Y >= 20 &&  Y < height - 20){

                        X = (X - 19) * this.gridSquareSize;
                        Y = (Y - 19) * this.gridSquareSize;
                        if(valuesBoard[cell[0]][cell[1]].state === 0){
                            this.drawDeadCell(X, Y);
                        } else {
                            this.drawLiveCell(X, Y);
                        }
                    }
                

            })
        } else {
            changeList.forEach(cell => {
                // const Y = cell[0];
                // const X = cell[1];
                const X = (cell[1] + 1) * this.gridSquareSize;
                const Y = (cell[0] + 1) * this.gridSquareSize;
                
                // const cellType = valuesBoard[cell[0]][cell[1]].state === 0 ? 'empty' : 'full';
                if(valuesBoard[cell[0]][cell[1]].state === 0){
                    this.drawDeadCell(X, Y);
                } else {
                    this.drawLiveCell(X, Y);
                }            
            

            })    
        }
        
    }


    drawDeadCell(X, Y){
        // this.canvasContext.putImageData(this.originalCellImage, (X - this.radius) * this.ratio, (Y - this.radius) * this.ratio);
        this.canvasContext.beginPath();
        this.canvasContext.arc(X, Y, this.radius - 1, 0, Math.PI * 2, false);
        this.canvasContext.fillStyle = color.EMPTY_CELL;
        this.canvasContext.fill();
        this.canvasContext.closePath();
    }

    drawLiveCell(X, Y){
        this.canvasContext.beginPath();
        this.canvasContext.arc(X, Y, this.radius - 1, 0, Math.PI * 2, false);
        this.canvasContext.fillStyle = color.LIVE_CELL;
        this.canvasContext.fill();
        this.canvasContext.closePath();
    }
// drawCell(cell, type, radius){
//     const cellRadius = (radius - 1);
//     // const context = canvas.getContext('2d')
//     const Y = (cell[0] + 1) * this.gridSquareSize
//     const X = (cell[1] + 1) * this.gridSquareSize
//     if(type === 'empty'){
//         // context.save()
//         this.canvasContext.putImageData(emptyCellImage, (X - radius) * ratio, (Y - radius) * ratio);
//         // context.restore()
//     } else {
//         // context.save()
//         this.canvasContext.beginPath();
//         this.canvasContext.arc(X, Y, cellRadius, 0, Math.PI * 2, false);
//         this.canvasContext.fillStyle = color.LIVE_CELL;
//         this.canvasContext.fill();
//         this.canvasContext.closePath();
//         // context.restore()
//     }
// }

}


export default GameGrid;



function drawGrid(canvas, width, height, squareSize){
    var ctx = canvas.getContext('2d');
    var radius = squareSize/2 - 1;

    ctx.strokeStyle = color.GRID;
    const w = (width + 1) * squareSize
    const h = (height + 1) * squareSize
    ctx.lineWidth = .2;
    for(let i = squareSize; i < h; i += squareSize){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(w,i);
        ctx.closePath();
        ctx.stroke();        
    }

    for(let i = squareSize; i < w; i += squareSize){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,h);
        ctx.closePath();
        ctx.stroke();        
    }

    for(let i = squareSize; i < h; i += squareSize){
        for(let j = squareSize; j < w; j += squareSize){
            draw_circle(ctx, j, i, radius);
        }
    }
} 


export function createCanvas(canvas, width, height, gridSquareSize, ratio){
    
    canvas.width=((width + 1) * gridSquareSize) * ratio;
    canvas.height=((height + 1) * gridSquareSize) * ratio;
    let r = canvas.height / canvas.width;
    canvas.style.width="100%";
    canvas.style.height=canvas.offsetWidth * r + "px";

    // let ctx = canvas.getContext('2d');
    // ctx.scale(ratio, ratio);
    return canvas;
}

function copyCanvas(original) {
    var copy;
  
    copy = original.cloneNode();  
    copy.getContext('2d').drawImage(original, 0, 0);
  
    return copy;
}


function draw_circle(context, x, y, radius) {
    context.save()
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = color.EMPTY_CELL;
    context.fill();
    context.closePath();
    context.restore()
}

function getCursorPosition(e) {
    var x;
    var y;
    var x1;
    var x2;

    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    } else {
        
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x1 = e.clientX
    x2 = e.clientY
    return [x, y, x1, x2];
}

function getCursorPos(e) {
    var x;
    var y;

    x = e.clientX
    y = e.clientY
    return [x, y];
}
