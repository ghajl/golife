"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChangeList = getChangeList;
exports.totalLiveCellsRevision = totalLiveCellsRevision;
exports.totalNeighborsRevision = totalNeighborsRevision;
exports.isGoingToChange = isGoingToChange;
exports.getChangePatternChangeList = getChangePatternChangeList;
exports.convertCoordinates = convertCoordinates;
exports.makeUnique = makeUnique;
exports.getLiveCells = getLiveCells;
exports.getCurrentBoard = getCurrentBoard;
exports.adjustToSize = adjustToSize;
exports.alterNextGenerationChangeCellsList = alterNextGenerationChangeCellsList;
exports.getRandomPattern = getRandomPattern;

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChangeList(valuesBoard, nextGeneration, checkList) {

    // this.valuesBoard[Y][X].setCheckList(checkList);
    var checkList = checkList;

    var changeList = [];
    // console.log(valuesBoard);
    for (var i = 0; i < nextGeneration.list.length; i++) {
        // console.log(nextGeneration.list[i][0]+ " " +nextGeneration.list[i][1]+ " " + valuesBoard[nextGeneration.list[i][0]][nextGeneration.list[i][1]]);
        valuesBoard[nextGeneration.list[i][0]][nextGeneration.list[i][1]].changeState();
    }
    // console.log(checkList.length);
    // checkList.map(x=>console.log(x.Y + "x" + x.X));
    // console.log(checkList.length+"yyy");
    if (checkList.length > valuesBoard.length * valuesBoard[0].length / 12) {
        // console.log(checkList.length+"yy");
        return totalNeighborsRevision(valuesBoard);
    } else {
        if (nextGeneration.isFirst) {
            for (var _i = 0; _i < nextGeneration.list.length; _i++) {
                checkList[checkList.length] = valuesBoard[nextGeneration.list[_i][0]][nextGeneration.list[_i][1]];
            }
        }

        // checkList.forEach(x => console.log(x.Y+"-"+x.X+"."));
        checkList = makeUnique(checkList);
        // checkList.forEach(x => console.log(x.Y+"-"+x.X+"--"));
        for (var _i2 = 0; _i2 < checkList.length; _i2++) {
            if (isGoingToChange(checkList[_i2])) {
                changeList[changeList.length] = [checkList[_i2].Y, checkList[_i2].X];
            }
        }
        return changeList;
    }

    // return totalNeighborsRevision(valuesBoard)
}

function totalLiveCellsRevision(valuesBoard) {
    var changeList = [];
    for (var i = 0, ilen = valuesBoard.length; i < ilen; i++) {
        for (var j = 0, jlen = valuesBoard[i].length; j < jlen; j++) {
            if (valuesBoard[i][j].state === 1) changeList[changeList.length] = [i, j];
        }
    }
    return changeList;
}

function totalNeighborsRevision(valuesBoard) {
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

function getChangePatternChangeList(valuesBoard, newPattern) {
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

function convertCoordinates(cellList) {
    // var cellList = cellList;
    var res = {};
    for (var i = 0; i < cellList.length; i++) {
        var currentY = cellList[i][0];
        var currentX = cellList[i][1];
        var tableX = Math.floor(currentX / 10);
        var tableY = Math.floor(currentY / 10);
        var X = currentX % 10;
        var Y = currentY % 10;
        var key = [tableY, tableX].join(" ");

        if (typeof res[key] == "undefined") {
            res[key] = [];
        }

        res[key][res[key].length] = [Y, X];
    }
    return res;
}

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

function getLiveCells(valuesBoard) {
    var cellList = [];
    for (var i = 0, ilen = valuesBoard.length; i < ilen; i++) {
        for (var j = 0, jlen = valuesBoard[i].length; j < jlen; j++) {
            if (valuesBoard[i][j].state === 1) cellList[cellList.length] = [i, j];
        }
    }
    return cellList;
}

function getCurrentBoard(valuesBoard, changeCellsList) {

    var board = valuesBoard;
    for (var i = 0; i < changeCellsList.length; i++) {
        var Y = changeCellsList[i][0];
        var X = changeCellsList[i][1];
        board[Y][X] = board[Y][X] === 1 ? 0 : 1;
    }
    return board;
}

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

function alterNextGenerationChangeCellsList(nextGenerationChangeCellsList, valuesBoard, clickedCell) {
    console.log(nextGenerationChangeCellsList);
    var ind = nextGenerationChangeCellsList.indexOf(clickedCell);
    if (~ind) {
        return clickedCell;
    } else {}
    var cellList = nextGenerationChangeCellsList.filter(function (x) {
        return x === clickedCell && valuesBoard[(clickedCell[0], clickedCell[1])].state === 1;
    });
    console.log(cellList);
    if (cellList.length === nextGenerationChangeCellsList.length) cellList.push(clickedCell);
    return cellList;
}

function getRandomPattern(height, width) {
    var min = Math.floor(height * width * .05);
    var max = Math.floor(height * width * .2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXGhlbHBlcnMuanMiXSwibmFtZXMiOlsiZ2V0Q2hhbmdlTGlzdCIsInZhbHVlc0JvYXJkIiwibmV4dEdlbmVyYXRpb24iLCJjaGVja0xpc3QiLCJjaGFuZ2VMaXN0IiwiaSIsImxpc3QiLCJsZW5ndGgiLCJjaGFuZ2VTdGF0ZSIsInRvdGFsTmVpZ2hib3JzUmV2aXNpb24iLCJpc0ZpcnN0IiwibWFrZVVuaXF1ZSIsImlzR29pbmdUb0NoYW5nZSIsIlkiLCJYIiwidG90YWxMaXZlQ2VsbHNSZXZpc2lvbiIsImlsZW4iLCJqIiwiamxlbiIsInN0YXRlIiwiY2VsbCIsImdldE5laWdoYm9yc0NvdW50IiwiZ2V0Q2hhbmdlUGF0dGVybkNoYW5nZUxpc3QiLCJuZXdQYXR0ZXJuIiwiaW5kIiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJmb3JFYWNoIiwieCIsImNvbnZlcnRDb29yZGluYXRlcyIsImNlbGxMaXN0IiwicmVzIiwiY3VycmVudFkiLCJjdXJyZW50WCIsInRhYmxlWCIsIk1hdGgiLCJmbG9vciIsInRhYmxlWSIsImtleSIsImpvaW4iLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXIiLCJjIiwiYXJyIiwiZ2V0TGl2ZUNlbGxzIiwiZ2V0Q3VycmVudEJvYXJkIiwiY2hhbmdlQ2VsbHNMaXN0IiwiYm9hcmQiLCJhZGp1c3RUb1NpemUiLCJwYXR0ZXJuIiwiYm9hcmRIZWlnaHQiLCJib2FyZFdpZHRoIiwicGF0dGVyblNpemUiLCJnZXRQYXR0ZXJuU2l6ZSIsImNlbnRlciIsInRyYW5zIiwibWF4WSIsIm1pblkiLCJtYXhYIiwibWluWCIsInJlc3VsdCIsIm1hcCIsInkiLCJhbHRlck5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0IiwibmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QiLCJjbGlja2VkQ2VsbCIsImNvbnNvbGUiLCJsb2ciLCJnZXRSYW5kb21QYXR0ZXJuIiwiaGVpZ2h0Iiwid2lkdGgiLCJtaW4iLCJtYXgiLCJsZW4i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VDtnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLE9BQU8sSUFBdEIsQUFBc0IsQUFBSSxBQUMxQjtnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLE9BQU8sSUFBdEIsQUFBc0IsQUFBSSxBQUU3QjtBQUpELGVBSU8sQUFDSDtnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLEtBQUssSUFBVCxBQUFhLE9BQU8sSUFBcEIsQUFBb0IsQUFBSSxLQUFLLElBQXhDLEFBQTRDLEFBQzVDO2dCQUFBLEFBQUksT0FBTyxJQUFBLEFBQUksS0FBSyxJQUFULEFBQWEsT0FBTyxJQUFwQixBQUFvQixBQUFJLEtBQUssSUFBeEMsQUFBNEMsQUFDNUM7Z0JBQUEsQUFBSSxPQUFPLElBQUEsQUFBSSxLQUFLLElBQVQsQUFBYSxPQUFPLElBQXBCLEFBQW9CLEFBQUksS0FBSyxJQUF4QyxBQUE0QyxBQUM1QztnQkFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLEtBQUssSUFBVCxBQUFhLE9BQU8sSUFBcEIsQUFBb0IsQUFBSSxLQUFLLElBQXhDLEFBQTRDLEFBQy9DO0FBRUQ7O2VBQUEsQUFBTyxBQUNWO0FBYk0sS0FBQSxFQUFQLEFBQU8sQUFhSixBQUNOIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==