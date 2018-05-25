import {colors as color} from '../util/colors';

class Canvas {
	constructor(canvas, width, height, squareSize, ratio) {

		this.canvas = canvas;
		this.width = width;
		this.height = height;
		this.squareSize = squareSize;
		this.radius = this.squareSize / 2;
		this.ratio = ratio;
	    this.canvas.width = ((width + 1) * squareSize) * ratio;
	    this.canvas.height = ((height + 1) * squareSize) * ratio;
	    const r = this.canvas.height / this.canvas.width;
	    this.canvas.style.width = '100%';
	    this.canvas.style.height = `${canvas.offsetWidth * r}px`;
	    this.context = this.canvas.getContext('2d');
		this.context.scale(ratio, ratio);
	}

	init() {
		this.drawGrid(this.width, this.height);
		console.log(`${this.width}`)
        const bufferCanvas = this.copyCanvas(this.canvas);
        const ctx = bufferCanvas.getContext('2d');         
        this.originalCellImage = ctx.getImageData(this.squareSize * this.ratio / 2, this.squareSize * this.ratio / 2, this.squareSize * this.ratio, this.squareSize * this.ratio);

	}

	// reload() {
	// 	this.canvas = createCanvas(canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize, this.ratio);
	//     this.canvasContext = this.canvas.getContext('2d');
	//     this.canvasContext.scale(this.ratio, this.ratio);
	//     drawGrid(this.canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize);
	//     let bufferCanvas = copyCanvas(this.canvas);
	//     let ctx = bufferCanvas.getContext('2d');  
	    
	//     this.originalCellImage = ctx.getImageData(this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio, this.gridSquareSize* this.ratio)

	// }

	handleWindowSizeChange() {
        // this.canvas = canvas;
        //     if(this.canvas){
        const r = this.canvas.height / this.canvas.width;
        this.canvas.style.width="100%";
        this.canvas.style.height=this.canvas.offsetWidth * r + "px";

        // }  
    };

    getClickCoordinates(e) {
        const rect = this.canvas.getBoundingClientRect();
        const cnvLeft = Math.floor(rect.left);
        const cnvRight = Math.floor(rect.right);
        const cnvTop = Math.floor(rect.top);
        const cnvBottom = Math.floor(rect.bottom);
        const currentSquareSize = this.squareSize * this.ratio;
        const r = currentSquareSize / 2 - 1;
        const boardWidth = (this.width + 1) * currentSquareSize;
        const boardHeight = (this.height + 1) * currentSquareSize;
        const x = Math.round((getCursorPos(e)[0] - cnvLeft) / (cnvRight - cnvLeft) * boardWidth);
        const y = Math.round((getCursorPos(e)[1] - cnvTop) / (cnvBottom - cnvTop) * boardHeight);
        if ((x + currentSquareSize / 2) % currentSquareSize !== 0 && (y + currentSquareSize / 2) % currentSquareSize !== 0){
            const nearestX = Math.floor((x + currentSquareSize / 2) / currentSquareSize);
            const nearestY = Math.floor((y + currentSquareSize / 2) / currentSquareSize);
            if(Math.pow(x - nearestX * currentSquareSize, 2) + Math.pow(y - nearestY * currentSquareSize, 2) < Math.pow(r, 2)){
                return {
                	X: nearestX - 1, 
                	Y: nearestY - 1,
                };
            }
        }
        return null;
    }

    drawDeadCell(X, Y){
        this.context.putImageData(this.originalCellImage, (X - this.radius) * this.ratio, (Y - this.radius) * this.ratio);
    }

    drawLiveCell(X, Y){
        this.context.beginPath();
        this.context.arc(X, Y, this.radius - 1, 0, Math.PI * 2, false);
        this.context.fillStyle = color.LIVE_CELL;
        this.context.fill();
        this.context.closePath();
    }


	drawGrid(width, height){
	    const r = this.radius - 1;

	    this.context.strokeStyle = color.GRID;
	    const w = (width + 1) * this.squareSize;
	    const h = (height + 1) * this.squareSize;
	    this.context.lineWidth = .2;
	    for (let i = this.squareSize; i < h; i += this.squareSize) {
	        this.context.beginPath();
	        this.context.moveTo(0,i);
	        this.context.lineTo(w,i);
	        this.context.closePath();
	        this.context.stroke();        
	    }

	    for (let i = this.squareSize; i < w; i += this.squareSize) {
	        this.context.beginPath();
	        this.context.moveTo(i,0);
	        this.context.lineTo(i,h);
	        this.context.closePath();
	        this.context.stroke();        
	    }

	    for (let i = this.squareSize; i < h; i += this.squareSize) {
	        for (let j = this.squareSize; j < w; j += this.squareSize) {
	            this.draw_circle(this.context, j, i, r);
	        }
	    }
	} 


	// createCanvas(canvas, width, height, gridSquareSize, ratio){
	    
	//     canvas.width=((width + 1) * gridSquareSize) * ratio;
	//     canvas.height=((height + 1) * gridSquareSize) * ratio;
	//     let r = canvas.height / canvas.width;
	//     canvas.style.width="100%";
	//     canvas.style.height=canvas.offsetWidth * r + "px";

	//     // let ctx = canvas.getContext('2d');
	//     // ctx.scale(ratio, ratio);
	//     return canvas;
	// }

	copyCanvas(original) {
	    const copy = original.cloneNode();  
	    copy.getContext('2d').drawImage(original, 0, 0);
	    return copy;
	}


	draw_circle(context, x, y, radius) {
	    context.save()
	    context.beginPath();
	    context.arc(x, y, radius, 0, Math.PI * 2, false);
	    context.fillStyle = color.EMPTY_CELL;
	    context.fill();
	    context.closePath();
	    context.restore()
	}

}

export default Canvas;

function getCursorPos(e) {
    var x;
    var y;

    x = e.clientX
    y = e.clientY
    return [x, y];
}