import { getLiveCells, isGoingToChange, getNewPatternChangeList, getRandomPattern, getChangeList} from '../util/helpers';	
import { createCellsValuesMatrix, getNeighborsList, getNeighborStateChangeListenersList,
					getNeighborsNumberChangeListenersList, createGameMatrix } from '../util/GameGrid';
import Cell from  '../util/Cell';


describe('helpers', () => {
    
	let width = 3,
	height = 3,
	checkList = []; 
	let valuesBoard = createCellsValuesMatrix(width, height, checkList); 
        for(let i = 0; i < height; i++){
          
            for(let j = 0; j < width; j++){
              
 
		    	let neighborsList = getNeighborsList(valuesBoard, width, height, i, j, false);//  setListeners(i,j);
		        let neighborStateChangeListenersList = getNeighborStateChangeListenersList(neighborsList);
		        valuesBoard[i][j].addListeners("neighborStateChange", neighborStateChangeListenersList);
		        let neighborsNumberChangeListenersList = getNeighborsNumberChangeListenersList(valuesBoard[i][j]);
		        valuesBoard[i][j].addListeners("neighborsChange", neighborsNumberChangeListenersList);
			    
			}
		}

	test('get list of "live" cells from cells matrix', () => {
        valuesBoard[0][0].changeState();
        valuesBoard[1][1].changeState();
        let liveCells = getLiveCells(valuesBoard);

        expect(liveCells).toHaveLength(2);
        expect(liveCells).toEqual(expect.arrayContaining([[0,0],[1,1]]));
	});

	test('"live" cell changes its state if it has less than two or more than 3 live neighbors', () => {

		let cellToCheck = valuesBoard[1][1];

		expect(cellToCheck.getNeighborsCount()).toBe(1);
		expect(isGoingToChange(cellToCheck)).toBeTruthy();

		valuesBoard[1][0].changeState();
		valuesBoard[2][0].changeState();
		valuesBoard[2][1].changeState();

		expect(cellToCheck.getNeighborsCount()).toBe(4);
		expect(isGoingToChange(cellToCheck)).toBeTruthy();

		valuesBoard[1][0].changeState();
		expect(cellToCheck.getNeighborsCount()).toBe(3);
		expect(isGoingToChange(cellToCheck)).toBeFalsy();

		valuesBoard[2][0].changeState();
		expect(cellToCheck.getNeighborsCount()).toBe(2);
		expect(isGoingToChange(cellToCheck)).toBeFalsy();								
	}) 	

	test('edge "live" cell in wrap universe changes its state if it has less than two or more than 3 live neighbors', () => {


		let valuesBoard = createGameMatrix(width, height, checkList);

		valuesBoard[0][0].changeState();
		valuesBoard[2][0].changeState();		
		let cellToCheck = valuesBoard[2][0];

		expect(cellToCheck.getNeighborsCount()).toBe(1);
		expect(isGoingToChange(cellToCheck)).toBeTruthy();

		valuesBoard[1][0].changeState();
		valuesBoard[0][1].changeState();
		valuesBoard[1][1].changeState();

		expect(cellToCheck.getNeighborsCount()).toBe(4);
		expect(isGoingToChange(cellToCheck)).toBeTruthy();

		valuesBoard[1][0].changeState();
		expect(cellToCheck.getNeighborsCount()).toBe(3);
		expect(isGoingToChange(cellToCheck)).toBeFalsy();

		valuesBoard[0][1].changeState();
		expect(cellToCheck.getNeighborsCount()).toBe(2);
		expect(isGoingToChange(cellToCheck)).toBeFalsy();								
	}) 		

	test('"dead" cell changes its state if it has 3 live neighbors', () => {
		let valuesBoard = createGameMatrix(width, height, checkList);

		let cellToCheck = valuesBoard[1][1];
		valuesBoard[1][0].changeState();

		expect(cellToCheck.getNeighborsCount()).toBe(1);
		expect(isGoingToChange(cellToCheck)).toBeFalsy();

		valuesBoard[2][0].changeState();
		valuesBoard[2][1].changeState();

		expect(cellToCheck.getNeighborsCount()).toBe(3);
		expect(isGoingToChange(cellToCheck)).toBeTruthy();



    }) 

	test('edge "dead" cell changes its state if it has 3 live neighbors', () => {
		let valuesBoard = createGameMatrix(width, height, checkList);

		let cellToCheck = valuesBoard[2][0];
		valuesBoard[0][0].changeState();

		expect(cellToCheck.getNeighborsCount()).toBe(1);
		expect(isGoingToChange(cellToCheck)).toBeFalsy();

		valuesBoard[0][1].changeState();
		valuesBoard[1][0].changeState();

		expect(cellToCheck.getNeighborsCount()).toBe(3);
		expect(isGoingToChange(cellToCheck)).toBeTruthy();



    }) 


	test('create random pattern', () => {
		let width = 3,
		height = 3;
		let randomCells = getRandomPattern(height, width);
		expect(randomCells.length).toBeGreaterThan(0);
		let [minY, maxY, minX, maxX] = randomCells.reduce((a, c) => [Math.min(c[0], a[0]),
																	Math.max(c[0], a[1]),
																	Math.min(c[1], a[2]),
																	Math.max(c[1], a[3])], [0, 0, 0, 0]);
		expect(minY).toBeGreaterThanOrEqual(0);
		expect(maxY).toBeLessThan(height);
		expect(minX).toBeGreaterThanOrEqual(0);
		expect(maxX).toBeLessThan(width);
	})
});

describe('creating lists of cells that change there color in transitions of generations', () => {
	let width = 5,
	height = 5,
	checkList = []; 

	test('get list of cells that should change state in next generation', () => {
		let valuesBoard = createGameMatrix(width, height, checkList);
		let gliderPatternFirstGeneration = [[0,2],[1,0],[1,2],[2,1],[2,2]];
		let gliderPatternSecondGeneration = [[0,1],[1,2],[1,3],[2,1],[2,2]];
		let gliderPatternThirdGeneration = [[0,2],[1,3],[2,1],[2,2],[2,3]];
		let cellsStateChange = {}
		//first generation 
		cellsStateChange.list = gliderPatternFirstGeneration; 
		cellsStateChange.isFirst = true;
		let nextGenerationExpectedChangeList = getSymmetricDifference(gliderPatternFirstGeneration, gliderPatternSecondGeneration);
		let changeList = getChangeList(valuesBoard,cellsStateChange,checkList);
		expect(changeList).toEqual(expect.arrayContaining(nextGenerationExpectedChangeList));
		//second generation
		cellsStateChange.list = changeList;
		cellsStateChange.isFirst = false;
		nextGenerationExpectedChangeList = getSymmetricDifference(gliderPatternSecondGeneration, gliderPatternThirdGeneration);
		changeList = getChangeList(valuesBoard,cellsStateChange,checkList);
		expect(changeList).toEqual(expect.arrayContaining(nextGenerationExpectedChangeList));
	})

	test('create list of cells that should change state ' + 
		'in order to show a specific set of cells (pattern) on the game board', () => {
		let valuesBoard = createGameMatrix(width, height, checkList);
		valuesBoard[0][0].changeState();
		valuesBoard[0][1].changeState();
		valuesBoard[2][0].changeState();
		valuesBoard[1][0].changeState();

		let pattern = [[0,0], [1,1], [2,2]];
		let changeList = [[1,1], [2,2], [0,1], [2,0], [1,0]];
		let list = getNewPatternChangeList(valuesBoard, pattern);
		expect(list).toEqual(expect.arrayContaining(changeList));
	})

})

function getSymmetricDifference(arr1, arr2){
	arr1.sort(compareArrays);
	arr2.sort(compareArrays);
	let res = [];
	let i = 0, j = 0;
	for (; i < arr1.length && j < arr2.length;){
		let compare = compareArrays(arr1[i], arr2[j]);
		if(compare < 0) {
			res.push(arr1[i]);
			i++;
		} else if (compare > 0) {
			res.push(arr2[j]);
			j++;
		} else {
			i++;
			j++;
		}
	}
	if (i < arr1.length) {
		res = res.concat(arr1.slice(i));

	} else if (j < arr2.length) {
		res = res.concat(arr2.slice(j));
	}
	return res;
}

function compareArrays(a, b) {

	if(a.length !== b.length){
		return a.length - b.length;
	}

	for (let i = 0, len = a.length - 1; i < len; i++){
		if(a[i] !== b[i]){
			return a[i] - b[i];
		}
	}

	return a[a.length - 1] - b[a.length - 1];
	 
}