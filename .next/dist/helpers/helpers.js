"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

exports.getChangeList = getChangeList;
exports.getLiveCells = getLiveCells;
exports.boardTotalCheck = boardTotalCheck;
exports.isGoingToChange = isGoingToChange;
exports.getNewPatternChangeList = getNewPatternChangeList;
exports.makeUnique = makeUnique;
exports.adjustToSize = adjustToSize;
exports.getRandomPattern = getRandomPattern;

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function getChangeList(valuesBoard, cellsStateChange, checkList) {

    var changeList = [];
    // console.log(cellsStateChange.list);
    for (var i = 0; i < cellsStateChange.list.length; i++) {
        valuesBoard[cellsStateChange.list[i][0]][cellsStateChange.list[i][1]].changeState();
    }
    if (cellsStateChange.isFirst) {
        for (var _i = 0; _i < cellsStateChange.list.length; _i++) {
            checkList[checkList.length] = valuesBoard[cellsStateChange.list[_i][0]][cellsStateChange.list[_i][1]];
        }
    }
    checkList = makeUnique(checkList);
    // console.log(checkList.length);
    // if(checkList.length>valuesBoard.length*valuesBoard[0].length/12){
    if (checkList.length > 200) {

        changeList = boardTotalCheck(valuesBoard);
    } else {

        // checkList = makeUnique(checkList);
        for (var _i2 = 0; _i2 < checkList.length; _i2++) {
            if (isGoingToChange(checkList[_i2])) {
                changeList[changeList.length] = [checkList[_i2].Y, checkList[_i2].X];
            }
        }
    }
    // console.log(changeList);
    return changeList;
}

// export function totalLiveCellsRevision(valuesBoard){
//     var changeList = [];
//     for(let i=0,ilen=valuesBoard.length;i<ilen;i++){
//         for(let j=0,jlen=valuesBoard[i].length;j<jlen;j++){
//             if(valuesBoard[i][j].state === 1)changeList[changeList.length] = [i,j];
//         }
//     }
//     return changeList;
// }

function getLiveCells(valuesBoard) {
    var cellList = [];
    for (var i = 0, ilen = valuesBoard.length; i < ilen; i++) {
        for (var j = 0, jlen = valuesBoard[i].length; j < jlen; j++) {
            if (valuesBoard[i][j].state === 1) cellList[cellList.length] = [i, j];
        }
    }
    return cellList;
}

function boardTotalCheck(valuesBoard) {
    var changeList = [];
    for (var i = 0, ilen = valuesBoard.length; i < ilen; i++) {
        for (var j = 0, jlen = valuesBoard[i].length; j < jlen; j++) {
            // if(valuesBoard[i][j].state === 2)changeList.push([i,j]);
            if (isGoingToChange(valuesBoard[i][j])) {
                changeList[changeList.length] = [i, j];
            }
        }
    }
    return changeList;
}

function isGoingToChange(cell) {
    return cell.state === 1 && (cell.getNeighborsCount() < 2 || cell.getNeighborsCount() > 3) || cell.state === 0 && cell.getNeighborsCount() === 3;
    // return (cell.getNeighborsCount() < 2 && cell.state === 2) || 
    //         (cell.getNeighborsCount() > 3 && cell.state === 2) ||
    //         (cell.getNeighborsCount() === 3 && cell.state === 1)
}

function getNewPatternChangeList(valuesBoard, newPattern) {
    var changeList = [];
    for (var i = 0, ilen = valuesBoard.length; i < ilen; i++) {
        for (var j = 0, jlen = valuesBoard[i].length; j < jlen; j++) {
            if (valuesBoard[i][j].state === 1) {
                var ind = newPattern.indexOf([i, j]);
                ~ind ? newPattern.splice(ind, 1) : changeList.push([i, j]);
            }
        }
    }
    newPattern.forEach(function (x) {
        return changeList.push(x);
    });
    return changeList;
}

// export function convertCoordinates(cellList){
//   // var cellList = cellList;
//   let res = {};
//   for(let i=0;i<cellList.length;i++){
//     const currentY = cellList[i][0];
//     const currentX = cellList[i][1];
//     const tableX = Math.floor(currentX/10);
//     const tableY = Math.floor(currentY/10);
//     const X = currentX%10;
//     const Y = currentY%10;
//     const key = [tableY,tableX].join(" ");

//     if (typeof res[key] == "undefined"){
//         res[key] = [];
//     }

//     res[key][res[key].length] = [Y,X];    
//   }
//   return res;
// }

function makeUnique(checkList) {
    return checkList.sort(function (a, b) {
        if (a.Y > b.Y) return 1;else if (a.Y === b.Y) {
            if (a.X > b.X) return 1;else if (a.X === b.X) return 0;else if (a.X < b.X) return -1;
        } else if (a.Y < b.Y) {
            return -1;
        }
    }).filter(function (c, i, arr) {
        if (i === 0) return true;else {
            if (c.Y === arr[i - 1].Y && c.X === arr[i - 1].X) return false;
        }
        return true;
    });
}

// export function getCurrentBoard(valuesBoard,changeCellsList){

// const board = valuesBoard;
//     for(let i=0;i<changeCellsList.length;i++){
//       let Y = changeCellsList[i][0];
//       let X = changeCellsList[i][1];
//       board[Y][X] = board[Y][X] === 1?0:1;
//     }
//   return board;

// }

function adjustToSize(pattern, boardHeight, boardWidth) {
    var patternSize = getPatternSize(pattern);
    var center = [Math.floor((boardHeight - 1) / 2), Math.floor((boardWidth - 1) / 2)];
    var trans = [Math.floor((patternSize.maxY - patternSize.minY) / 2), Math.floor((patternSize.maxX - patternSize.minX) / 2)];
    // console.log(patternSize)
    // console.log(`${center} ${transX} ${transY}`)
    var result = pattern.map(function (cell) {
        var y = cell[0] + center[0] - trans[0];
        // console.log(y+ "pat");
        var x = cell[1] + center[1] - trans[1];
        return [y, x];
    });

    return result;
}

// export function alterNextGenerationChangeCellsList(nextGenerationChangeCellsList,valuesBoard,clickedCell){
//     console.log(nextGenerationChangeCellsList);
//     const ind = nextGenerationChangeCellsList.indexOf(clickedCell);
//     if(~ind){
//         return clickedCell;
//     } else {

//     }
//     var cellList = nextGenerationChangeCellsList.filter(x => x === clickedCell && valuesBoard[clickedCell[0],clickedCell[1]].state === 1);
//     console.log(cellList);
//     if(cellList.length === nextGenerationChangeCellsList.length) cellList.push(clickedCell);
//     return cellList;
// }

function getRandomPattern(height, width) {
    var min = Math.floor(Math.max(2, height * width * .05));
    var max = Math.floor(Math.max(2, height * width * .2));
    var len = getRandomInt(min, max);
    return (0, _from2.default)({ length: len }, function () {
        return [Math.floor(Math.random() * height), Math.floor(Math.random() * width)];
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPatternSize(pattern) {
    return pattern.reduce(function (acc, val, ind) {
        if (ind === 0) {
            acc.minX = acc.maxX = val[1];
            acc.minY = acc.maxY = val[0];
        } else {
            acc.minX = val[1] < acc.minX ? val[1] : acc.minX;
            acc.maxX = val[1] > acc.maxX ? val[1] : acc.maxX;
            acc.minY = val[0] < acc.minY ? val[0] : acc.minY;
            acc.maxY = val[0] > acc.maxY ? val[0] : acc.maxY;
        }

        return acc;
    }, {});
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXGhlbHBlcnMuanMiXSwibmFtZXMiOlsiZ2V0Q2hhbmdlTGlzdCIsImdldExpdmVDZWxscyIsImJvYXJkVG90YWxDaGVjayIsImlzR29pbmdUb0NoYW5nZSIsImdldE5ld1BhdHRlcm5DaGFuZ2VMaXN0IiwibWFrZVVuaXF1ZSIsImFkanVzdFRvU2l6ZSIsImdldFJhbmRvbVBhdHRlcm4iLCJ2YWx1ZXNCb2FyZCIsImNlbGxzU3RhdGVDaGFuZ2UiLCJjaGVja0xpc3QiLCJjaGFuZ2VMaXN0IiwiaSIsImxpc3QiLCJsZW5ndGgiLCJjaGFuZ2VTdGF0ZSIsImlzRmlyc3QiLCJZIiwiWCIsImNlbGxMaXN0IiwiaWxlbiIsImoiLCJqbGVuIiwic3RhdGUiLCJjZWxsIiwiZ2V0TmVpZ2hib3JzQ291bnQiLCJuZXdQYXR0ZXJuIiwiaW5kIiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJmb3JFYWNoIiwieCIsInNvcnQiLCJhIiwiYiIsImZpbHRlciIsImMiLCJhcnIiLCJwYXR0ZXJuIiwiYm9hcmRIZWlnaHQiLCJib2FyZFdpZHRoIiwicGF0dGVyblNpemUiLCJnZXRQYXR0ZXJuU2l6ZSIsImNlbnRlciIsIk1hdGgiLCJmbG9vciIsInRyYW5zIiwibWF4WSIsIm1pblkiLCJtYXhYIiwibWluWCIsInJlc3VsdCIsIm1hcCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsIm1pbiIsIm1heCIsImxlbiIsImdldFJhbmRvbUludCIsInJhbmRvbSIsInJlZHVjZSIsImFjYyIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQUNnQixBLGdCLEFBQUE7UUEyQ0EsQSxlLEFBQUE7USxBQVVBLGtCQUFBLEE7USxBQWFBLGtCLEFBQUE7UUFRQSxBLDBCLEFBQUE7USxBQW9DQSxhLEFBQUE7USxBQWtDQSxlQUFBLEE7USxBQThCQSxtQixBQUFBOzs7Ozs7QUE5S1QsU0FBQSxBQUFTLGNBQVQsQUFBdUIsYUFBdkIsQUFBbUMsa0JBQW5DLEFBQW9ELFdBQVUsQUFF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QUFBLEFBQVMsZUFBVCxBQUF3QixTQUFRLEFBQzVCO21CQUFPLEFBQVEsT0FBTyxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQU4sQUFBVyxLQUFRLEFBQ3JDO1lBQUcsUUFBSCxBQUFXLEdBQUUsQUFDVDtnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLE9BQU8sSUFBdEIsQUFBc0IsQUFBSSxBQUMxQjtnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLE9BQU8sSUFBdEIsQUFBc0IsQUFBSSxBQUU3QjtBQUpELGVBSU8sQUFDSDtnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLEtBQUssSUFBVCxBQUFhLE9BQU8sSUFBcEIsQUFBb0IsQUFBSSxLQUFLLElBQXhDLEFBQTRDLEFBQzVDO2dCQUFBLEFBQUksT0FBTyxJQUFBLEFBQUksS0FBSyxJQUFULEFBQWEsT0FBTyxJQUFwQixBQUFvQixBQUFJLEtBQUssSUFBeEMsQUFBNEMsQUFDNUM7Z0JBQUEsQUFBSSxPQUFPLElBQUEsQUFBSSxLQUFLLElBQVQsQUFBYSxPQUFPLElBQXBCLEFBQW9CLEFBQUksS0FBSyxJQUF4QyxBQUE0QyxBQUM1QztnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLEtBQUssSUFBVCxBQUFhLE9BQU8sSUFBcEIsQUFBb0IsQUFBSSxLQUFLLElBQXhDLEFBQTRDLEFBQy9DO0FBRUQ7O2VBQUEsQUFBTyxBQUNWO0FBYk0sS0FBQSxFQUFQLEFBQU8sQUFhSixBQUNOIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==