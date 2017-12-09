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
exports.shiftToCenter = shiftToCenter;
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

function shiftToCenter(pattern, boardHeight, boardWidth) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXGhlbHBlcnMuanMiXSwibmFtZXMiOlsiZ2V0Q2hhbmdlTGlzdCIsImdldExpdmVDZWxscyIsImJvYXJkVG90YWxDaGVjayIsImlzR29pbmdUb0NoYW5nZSIsImdldE5ld1BhdHRlcm5DaGFuZ2VMaXN0IiwibWFrZVVuaXF1ZSIsInNoaWZ0VG9DZW50ZXIiLCJnZXRSYW5kb21QYXR0ZXJuIiwidmFsdWVzQm9hcmQiLCJjZWxsc1N0YXRlQ2hhbmdlIiwiY2hlY2tMaXN0IiwiY2hhbmdlTGlzdCIsImkiLCJsaXN0IiwibGVuZ3RoIiwiY2hhbmdlU3RhdGUiLCJpc0ZpcnN0IiwiWSIsIlgiLCJjZWxsTGlzdCIsImlsZW4iLCJqIiwiamxlbiIsInN0YXRlIiwiY2VsbCIsImdldE5laWdoYm9yc0NvdW50IiwibmV3UGF0dGVybiIsImluZCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiZm9yRWFjaCIsIngiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXIiLCJjIiwiYXJyIiwicGF0dGVybiIsImJvYXJkSGVpZ2h0IiwiYm9hcmRXaWR0aCIsInBhdHRlcm5TaXplIiwiZ2V0UGF0dGVyblNpemUiLCJjZW50ZXIiLCJNYXRoIiwiZmxvb3IiLCJ0cmFucyIsIm1heFkiLCJtaW5ZIiwibWF4WCIsIm1pblgiLCJyZXN1bHQiLCJtYXAiLCJ5IiwiaGVpZ2h0Iiwid2lkdGgiLCJtaW4iLCJtYXgiLCJsZW4iLCJnZXRSYW5kb21JbnQiLCJyYW5kb20iLCJyZWR1Y2UiLCJhY2MiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFDZ0IsQSxnQixBQUFBO1FBMkNBLEEsZSxBQUFBO1EsQUFVQSxrQkFBQSxBO1EsQUFhQSxrQixBQUFBO1FBUUEsQSwwQixBQUFBO1EsQUFvQ0EsYSxBQUFBO1EsQUFrQ0EsZ0JBQUEsQTtRLEFBOEJBLG1CLEFBQUE7Ozs7OztBQTlLVCxTQUFBLEFBQVMsY0FBVCxBQUF1QixhQUF2QixBQUFtQyxrQkFBbkMsQUFBb0QsV0FBVSxB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LFNBQUEsQUFBUyxlQUFULEFBQXdCLFNBQVEsQUFDNUI7bUJBQU8sQUFBUSxPQUFPLFVBQUEsQUFBQyxLQUFELEFBQU0sS0FBTixBQUFXLEtBQVEsQUFDckM7WUFBRyxRQUFILEFBQVcsR0FBRSxBQUNUO2dCQUFBLEFBQUksT0FBTyxJQUFBLEFBQUksT0FBTyxJQUF0QixBQUFzQixBQUFJLEFBQzFCO2dCQUFBLEFBQUksT0FBTyxJQUFBLEFBQUksT0FBTyxJQUF0QixBQUFzQixBQUFJLEFBRTdCO0FBSkQsZUFJTyxBQUNIO2dCQUFBLEFBQUksT0FBTyxJQUFBLEFBQUksS0FBSyxJQUFULEFBQWEsT0FBTyxJQUFwQixBQUFvQixBQUFJLEtBQUssSUFBeEMsQUFBNEMsQUFDNUM7Z0JBQUEsQUFBSSxPQUFPLElBQUEsQUFBSSxLQUFLLElBQVQsQUFBYSxPQUFPLElBQXBCLEFBQW9CLEFBQUksS0FBSyxJQUF4QyxBQUE0QyxBQUM1QztnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLEtBQUssSUFBVCxBQUFhLE9BQU8sSUFBcEIsQUFBb0IsQUFBSSxLQUFLLElBQXhDLEFBQTRDLEFBQzVDO2dCQUFBLEFBQUksT0FBTyxJQUFBLEFBQUksS0FBSyxJQUFULEFBQWEsT0FBTyxJQUFwQixBQUFvQixBQUFJLEtBQUssSUFBeEMsQUFBNEMsQUFDL0M7QUFFRDs7ZUFBQSxBQUFPLEFBQ1Y7QUFiTSxLQUFBLEVBQVAsQUFBTyxBQWFKLEFBQ04iLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9