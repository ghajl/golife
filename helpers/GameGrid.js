import Cell from './Cell';
import { getChangeList, convertCoordinates, makeUnique, getLiveCells, 
  totalLiveCellsRevision, getCurrentBoard, adjustToSize, 
  getChangePatternChangeList, alterNextGenerationChangeCellsList, 
  totalNeighborsRevision, getRandomPattern} from './helpers';


class GameGrid {
    constructor(name, width, height, squareSize, isOpen = false)
    {
	  	this.gridWidth = width;
	  	this.gridHeight = height;
        this.gridSquareSize = squareSize;
        this.visibleGridWidth = width;
        this.visibleGridHeight = height;
        this.gridName = name;
        this.gridIsOpen = isOpen;
        this.checkList = [];
        this.originalCellImage = null;
       
        this.nextGenerationChangeCellsList=null;
        this.nextGeneration = {
            list:null,
            isFirst:true,
        }
        if(this.gridIsOpen){
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        this.valuesBoard = Array(this.gridHeight).fill(null);
        for(let i=0;i<this.gridHeight;i++){
            this.valuesBoard[i] = Array(this.gridWidth).fill(null);
            for(let j=0;j<this.gridWidth;j++){
                this.valuesBoard[i][j] = new Cell(this.checkList,i,j);
            }
        }
        for(let i=0;i<this.gridHeight;i++){
          
            for(let j=0;j<this.gridWidth;j++){
              
                this.setListeners(i,j);
            }
      
        }
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
    setListeners(Y,X){

        const cellList=[];
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                let tX = X+j,tY = Y+i;
                if(this.gridIsOpen){
                    if(tY >= 0 && tY < this.gridHeight && tX >= 0 && tX < this.gridWidth && !(i ===0 && j === 0)){
                        cellList.push(this.valuesBoard[tY][tX]);
                    }
                } else {
                    if(tY<0)tY=this.gridHeight-1;
                    else if(tY >= this.gridHeight)tY=0;
                    if(tX<0)tX=this.gridWidth-1;
                    else if(tX >= this.gridWidth)tX=0;
                    if(!(i ===0 && j === 0)){
                        cellList.push(this.valuesBoard[tY][tX]);
                      
                    }                    
                }


            }
        }


        cellList.forEach(c => this.valuesBoard[Y][X].addListener("neighborStateChange",function(val){
            val===1?c.addNeighbor():c.removeNeighbor();
        }));
        
        var c = this.valuesBoard[Y][X];
        this.valuesBoard[Y][X].addListener("neighborsChange",function(){
          
            c.checkList[c.checkList.length] = c;
        })
    }



    reload(width,height,squareSize,canvas,isOpen){
        this.checkList = [];
        this.nextGenerationChangeCellsList=null;
        this.nextGeneration = {
            list:null,
            isFirst:true,
        }
        this.currentLiveCells=null;
        this.isManualState = false;
        this.gridWidth = width;
        this.gridHeight = height; 
        this.visibleGridWidth = width;
        this.visibleGridHeight = height;
        this.gridSquareSize = squareSize;
        this.gridIsOpen = isOpen;
        if(this.gridIsOpen){
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        this.canvas.width=((this.visibleGridWidth + 1) * this.gridSquareSize) * this.ratio;
        this.canvas.height=((this.visibleGridHeight + 1) * this.gridSquareSize) * this.ratio;
        let r = this.canvas.height / this.canvas.width;
        this.canvas.style.width="100%";
        this.canvas.style.height=this.canvas.offsetWidth * r + "px";

        this.ctx = this.canvas.getContext('2d')
        this.ctx.scale(this.ratio, this.ratio)    
        drawGrid(this.canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize)
        this.originalCellImage = this.ctx.getImageData(this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio, this.gridSquareSize* this.ratio)
        this.valuesBoard = Array(this.gridHeight).fill(null);
        for(let i=0;i<this.gridHeight;i++){
            this.valuesBoard[i] = Array(this.gridWidth).fill(null);
            for(let j=0;j<this.gridWidth;j++){
                this.valuesBoard[i][j] = new Cell(this.checkList,i,j);
            }
        }
        for(let i=0;i<this.gridHeight;i++){
          
            for(let j=0;j<this.gridWidth;j++){
              
                this.setListeners(i,j);
            }
      
        }
    }


    //= componentdidmount
    makeBoard(width,height,squareSize,ratio,canvas,liveCellsList,screen)
    {
        this.canvas = canvas;
        this.canvas.width=((width + 1) * squareSize) * ratio;
        
        this.canvas.height=((height + 1) * squareSize) * ratio;     
        let r = this.canvas.height / this.canvas.width;
        this.canvas.style.width="100%";
        this.canvas.style.height=this.canvas.offsetWidth * r + "px";
        this.ratio = ratio;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(ratio, ratio)

        drawGrid(this.canvas, width, height, squareSize);
        this.originalCellImage = this.ctx.getImageData(squareSize * ratio / 2, squareSize * ratio / 2, squareSize * ratio, squareSize* ratio);


        if(liveCellsList){
            if(this.gridIsOpen){
                liveCellsList = liveCellsList.map(cell => [cell[0]+20,cell[1]+20]);
            }
            this.nextGeneration.list = liveCellsList;
        
          
        } else {
                this.nextGeneration.list = getRandomPattern(height,width);
        }
        this.nextGeneration.isFirst = true;
    }

    changePattern(index, patternsList, mode){
        var nextGenerationChangeCellsList;
        if(index>0){
                //get the coordinates of choosed pattern adjusted to current board size
                nextGenerationChangeCellsList=adjustToSize(patternsList[index-1].pattern,this.gridHeight,this.gridWidth);
            } else {
                //random live cells have index = 0
                nextGenerationChangeCellsList=getRandomPattern(this.gridHeight,this.gridWidth);
            }
        if(mode.clear){
                //board is clear - there aren't any live cells on the board
                this.nextGeneration.list = nextGenerationChangeCellsList;
                this.nextGeneration.isFirst = true
            } else {
                //we have to clear the remained cells 
                this.nextGeneration.list=getChangePatternChangeList(this.valuesBoard, nextGenerationChangeCellsList);
                this.nextGeneration.isFirst = true;
            }
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
        let x = Math.round((getCursorPos(e)[0]-cnvLeft)/(cnvRight-cnvLeft)*boardWidth);
        let y = Math.round((getCursorPos(e)[1]-cnvTop)/(cnvBottom-cnvTop)*boardHeight);
       if((x + currentSquareSize/2) % currentSquareSize !== 0 && (y + currentSquareSize/2) % currentSquareSize !== 0){
            const nearestX = Math.floor((x + currentSquareSize / 2) / currentSquareSize)
            const nearestY = Math.floor((y + currentSquareSize / 2) / currentSquareSize)
            if(Math.pow(x - nearestX * currentSquareSize, 2) + Math.pow(y - nearestY * currentSquareSize, 2) < Math.pow(r, 2)){

                const clickedCell = [nearestY - 1, nearestX - 1];
        
    
                this.nextGeneration.list = [];
                this.nextGeneration.list.push(clickedCell);
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
        return getLiveCells(this.valuesBoard);
    }

    update(mode){
        this.checkList.length = 0;
        
        if(mode){
            if(mode.drawing){
                //this operation changes valuesBoard and checklist
                let changeCellList = getChangeList(this.valuesBoard,this.nextGeneration,this.checkList);//the list of cells that changes color;

                updateTable(this.valuesBoard, this.nextGeneration.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);
            
                this.nextGeneration.list = totalNeighborsRevision(this.valuesBoard);   
                     
            } else if(mode.clear) {
                

                this.nextGeneration.list=totalLiveCellsRevision(this.valuesBoard);
                let changeCellList = getChangeList(this.valuesBoard,this.nextGeneration,this.checkList);//the list of cells that changes color;
                this.nextGeneration.isFirst = true;
                updateTable(this.valuesBoard, this.nextGeneration.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);
                this.checkList.length = 0;
            } else {
                //this operation changes valuesBoard and checklist
                let changeCellList = getChangeList(this.valuesBoard,this.nextGeneration,this.checkList);//the list of cells that changes color;

                updateTable(this.valuesBoard, this.nextGeneration.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);
            
                this.nextGeneration.list = changeCellList;     
                this.nextGeneration.isFirst = false  
            }
        } else {
            let changeCellList = getChangeList(this.valuesBoard,this.nextGeneration,this.checkList);//the list of cells that changes color;
            updateTable(this.valuesBoard, this.nextGeneration.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio, this.gridIsOpen);
            this.nextGeneration.list = changeCellList;     
            this.nextGeneration.isFirst = false  
        }

    }

}


export default GameGrid;



function drawGrid(canvas, width, height, squareSize){
    var ctx = canvas.getContext('2d');
    var radius = squareSize/2 - 1;

    ctx.strokeStyle="#878789";
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



function draw_circle(context, x, y, radius) {
    context.save()
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.globalAlpha = 0.3;
    context.fillStyle = '#2F4F4F';
    context.fill();
    context.closePath();
    context.restore()
}
function updateTable(valuesBoard, changeList, canvas, squareSize, width, height, emptyCellImage, ratio, gridIsOpen){
    console.log("updateTable")
    changeList.forEach(cell => {
        console.log("forEach")
        let Y = cell[0];
        let X = cell[1];
        if(gridIsOpen){
            if(X >= 20 &&  X < width - 20 && Y >= 20 &&  Y < height - 20){

                X -= 20;
                Y -= 20;
                if(valuesBoard[cell[0]][cell[1]].state === 0){
                    drawCell([Y,X], canvas, squareSize, squareSize / 2, 'empty', emptyCellImage, ratio)
                } else {
                    drawCell([Y,X], canvas, squareSize, squareSize / 2, 'full', emptyCellImage, ratio)
                }
            }
        } else {
            if(valuesBoard[cell[0]][cell[1]].state === 0){
                drawCell(cell, canvas, squareSize, squareSize / 2, 'empty', emptyCellImage, ratio)
            } else {
                drawCell(cell, canvas, squareSize, squareSize / 2, 'full', emptyCellImage, ratio)
            }            
        }

    })
}



function drawCell(cell, canvas, squareSize, radius, shape, emptyCellImage, ratio){
    const cellRadius = (radius - 1)
    const context = canvas.getContext('2d')
    const Y = (cell[0] + 1) * squareSize
    const X = (cell[1] + 1) * squareSize
    if(shape === 'empty'){
        context.save()
        context.putImageData(emptyCellImage, (X - radius) * ratio, (Y - radius) * ratio);
        context.restore()
    } else {
        context.save()
        context.beginPath();
        context.arc(X, Y, cellRadius, 0, Math.PI * 2, false);
        context.fillStyle = '#FF0000';
        context.fill();
        context.closePath();
        context.restore()
    }
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
