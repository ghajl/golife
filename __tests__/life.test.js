import {createCellmap, makeNeighbors, applyChanges, makeChangeList} from '../game/Life';
import Cell from  '../game/Cell';
test('neighbors list', () => {
  const width = 2,
  height = 2; 
  const neighborsList = makeNeighbors(width, height, 0, 0).map(ng => ng.split(',').map(k => +k));//  setListeners(i,j);

  expect(neighborsList).toHaveLength(3);
  
  expect(neighborsList).toEqual(expect.arrayContaining([[0,1],[1,1],[1,0]]));
});

test('create cellsmap', () => {
    const width = 3;
  const height = 3;
    const cellsmap = [[new Cell(), new Cell()],
          [new Cell(), new Cell()],
          [new Cell(), new Cell()]];
    const expectedCellsmap = createCellmap(width, height, makeNeighbors);
    expect(expectedCellsmap).toHaveLength(3);
    expect(expectedCellsmap[0][0].getState()).toEqual(-1);
    expect(expectedCellsmap[0][0].getNeighborsCoordinates().length).toEqual(8);
});

test('check list', () => {
  const width = 3;
  const height = 3;
  const cellsmap = createCellmap(width, height, makeNeighbors);
  const changeList = [[1, 0], [1, 1]];
  const checkListObj = applyChanges(changeList, cellsmap, width, height);
  const checkList = [];
  const re = /\d+/g;
  Object.keys(checkListObj).forEach(cell => {
    const y = +re.exec(cell)[0];
    const x = +re.exec(cell)[0];
    re.lastIndex = 0;
    checkList.push([y, x]);
  });
  expect(checkList).toHaveLength(9);
  expect(checkList).toEqual(expect.arrayContaining([[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]));
});

test('change list', () => {
  const width = 5;
  const height = 5;
  const cellsmap = createCellmap(width, height, makeNeighbors);
  const changeList = [[2, 1], [2, 2], [2, 3]];
  const checkListObj = applyChanges(changeList, cellsmap, width, height);
  const newChangeList = makeChangeList(checkListObj, cellsmap);
  expect(newChangeList).toEqual(expect.arrayContaining([[1,2],[2,1],[2,3],[3,2]]));
});