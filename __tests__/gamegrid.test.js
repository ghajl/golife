import{ createCellsValuesMatrix, getNeighborsList, getNeighborStateChangeListenersList,
					getNeighborsNumberChangeListenersList, createGameMatrix } from '../helpers/GameGrid';
import {makeUnique} from '../helpers/helpers';					
import Cell from  '../helpers/Cell';

test('creating two-dimensional matrix of Cell objects for live/dead values of game board', () => {
    let width = 2,
    	height = 3,
    	checkList = [];

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