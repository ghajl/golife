import{ createCellsValuesMatrix, getNeighborsList, getNeighborStateChangeListenersList,
					getNeighborsNumberChangeListenersList, createGameMatrix } from '../util/GameGrid';
import {makeUnique} from '../util/helpers';					
import Cell from  '../util/Cell';

test('create cellsmap', () => {
    const width = 2,
    	height = 3;

    let valuesBoard = [[new Cell(checkList,0,0), new Cell(checkList,0,1)],
    			[new Cell(checkList,1,0), new Cell(checkList,1,1)],
    			[new Cell(checkList,2,0), new Cell(checkList,2,1)]];
    expect(createCellsValuesMatrix(width, height, checkList)).toEqual(valuesBoard);

});

test('state of all cells in new value board should be 0 ("dead")', () => {
    let width = 2,
    	height = 1,
    	checkList = [];  
    let valuesBoard = createCellsValuesMatrix(width, height, checkList);  
    expect(valuesBoard[0][0].state).toBe(0);
    expect(valuesBoard[0][1].state).toBe(0);	
});

test('neighbors list', () => {
	let width = 2,
	height = 2,
	checkList = []; 
	let valuesBoard = createCellsValuesMatrix(width, height, checkList);  
	let neighborsList = getNeighborsList(valuesBoard, width, height, 0, 0, false);//  setListeners(i,j);

    expect(neighborsList).toHaveLength(3);
    expect(neighborsList[0]).toBeInstanceOf(Cell);
    expect(neighborsList[1]).toBeInstanceOf(Cell);
    expect(neighborsList[2]).toBeInstanceOf(Cell);

    let cellList = neighborsList.map(c => [c.Y, c.X]);

    expect(cellList).toEqual(expect.arrayContaining([[0,1],[1,1],[1,0]]));
});

describe('listeners', () => {
    
	let width = 2,
	height = 2,
	checkList = []; 
	let valuesBoard = createCellsValuesMatrix(width, height, checkList); 
	test('set listeners', () => {
        for(let i = 0; i < height; i++){
          
            for(let j = 0; j < width; j++){
              
 
		    	let neighborsList = getNeighborsList(valuesBoard, width, height, i, j, false);//  setListeners(i,j);
		        let neighborStateChangeListenersList = getNeighborStateChangeListenersList(neighborsList);
		        valuesBoard[i][j].addListeners("neighborStateChange", neighborStateChangeListenersList);
		        let neighborsNumberChangeListenersList = getNeighborsNumberChangeListenersList(valuesBoard[i][j]);
		        valuesBoard[i][j].addListeners("neighborsChange", neighborsNumberChangeListenersList);

				
			        expect(neighborStateChangeListenersList).toHaveLength(3);
			        expect(neighborsNumberChangeListenersList).toHaveLength(1);

			    
			}
		}
        expect(valuesBoard[0][0].listeners["neighborStateChange"]).toHaveLength(3);
        expect(valuesBoard[0][0].listeners["neighborsChange"]).toHaveLength(1);
	});

 
    test('when state of some cell changes, its neighbors cells` property that counts live neighbors' + 
    		'should change too and also these cells should be put in check list of candidates on transformaton in next generation.', () => {


		        valuesBoard[0][0].changeState();
		        expect(valuesBoard[0][1].getNeighborsCount()).toBe(1);
		        expect(makeUnique(checkList)).toHaveLength(3);

		        valuesBoard[1][1].changeState();
		        expect(valuesBoard[0][1].getNeighborsCount()).toBe(2);
		        expect(makeUnique(checkList)).toHaveLength(4);

		        valuesBoard[0][0].changeState();
		        expect(valuesBoard[0][1].getNeighborsCount()).toBe(1);
		        expect(makeUnique(checkList)).toHaveLength(4);        			
    		})

   
});

test('creating game board with listeners', () => {
	let width = 2,
	height = 2,
	checkList = []; 

	let board = createGameMatrix(width, height, checkList);
	expect(board).toBeDefined();

    expect(board[0][0]).toBeInstanceOf(Cell);
    expect(board[0][0].listeners).toHaveProperty("neighborStateChange");
    expect(board[1][0].listeners).toHaveProperty("neighborsChange");

	board[0][0].changeState();
    expect(board[0][1].getNeighborsCount()).toBe(1);
    expect(makeUnique(checkList)).toHaveLength(3);
   
})

function getNeighbors(width, height, Y, X){
  const cells = [];
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
        cells.push([tY, tX]);
      }                    
    }
  }
  return cells;
}