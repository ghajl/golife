import Life, {createBoard} from './Life';

export default class UnwrappedLife extends Life {
	constructor(width, height, initialState, padding) {
    	super(width, height, initialState);
    	this.padding = padding;
    	this.gridWidth = width + padding * 2;
    	this.gridHidth = height + padding * 2;
        if (initialState != null) {
            this.change.list = initialState.map(cell => [cell[0] + 20, cell[1] + 20]);
        }
        this.board = createBoard(this.gridWidth, this.gridHeight, this.checkList, setNeighbors);
	}
    
    reload(width, height) {
        this.checkList = [];
        this.change = {
            list: null,
            isFirst: true,
        };
        this.gridWidth = width + padding * 2;
        this.gridHeight = height + padding * 2;
        this.board = createBoard(this.gridWidth, this.gridHeight, this.checkList, setNeighbors);
    }

}

export function setNeighbors(valuesBoard, width, height, Y, X){
    const cellList = [];
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const tX = X + j, tY = Y + i;
            if (tY >= 0 && tY < height && tX >= 0 && tX < width && !(i ===0 && j === 0)) {
                cellList.push(valuesBoard[tY][tX]);
            }
        }
    }
    return cellList;
}