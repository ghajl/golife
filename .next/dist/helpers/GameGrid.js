'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.createCellsValuesMatrix = createCellsValuesMatrix;
exports.createGameMatrix = createGameMatrix;
exports.getNeighborsList = getNeighborsList;
exports.getNeighborStateChangeListenersList = getNeighborStateChangeListenersList;
exports.getNeighborsNumberChangeListenersList = getNeighborsNumberChangeListenersList;
exports.createCanvas = createCanvas;

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _helpers = require('./helpers');

var _colors = require('./colors');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var GameGrid = function () {
    function GameGrid(name, width, height, squareSize) {
        var isUnwrapped = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        (0, _classCallCheck3.default)(this, GameGrid);

        this.gridWidth = width;
        this.gridHeight = height;
        this.gridSquareSize = squareSize;
        this.visibleGridWidth = width;
        this.visibleGridHeight = height;
        this.gridName = name;
        this.gridIsUnwrapped = isUnwrapped;
        this.checkList = [];
        this.originalCellImage = null;
        this.cellsStateChange = {
            list: null,
            isFirst: true
        };
        if (this.gridIsUnwrapped) {
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        this.valuesBoard = createGameMatrix(this.gridWidth, this.gridHeight, this.checkList, this.gridIsUnwrapped);
    }

    (0, _createClass3.default)(GameGrid, [{
        key: 'reload',
        value: function reload(width, height, squareSize, canvas) {
            var isUnwrapped = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            this.checkList = [];
            this.cellsStateChange = {
                list: null,
                isFirst: true
            };
            this.currentLiveCells = null;
            this.isManualState = false;
            this.gridWidth = width;
            this.gridHeight = height;
            this.visibleGridWidth = width;
            this.visibleGridHeight = height;
            this.gridSquareSize = squareSize;
            this.gridIsUnwrapped = isUnwrapped;
            if (this.gridIsUnwrapped) {
                this.gridWidth = this.gridWidth + 40;
                this.gridHeight = this.gridHeight + 40;
            }
            this.canvas = createCanvas(canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize, this.ratio);
            drawGrid(this.canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize);
            var bufferCanvas = copyCanvas(this.canvas);
            var ctx = bufferCanvas.getContext('2d');
            this.originalCellImage = ctx.getImageData(this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio, this.gridSquareSize * this.ratio);

            this.valuesBoard = createGameMatrix(this.gridWidth, this.gridHeight, this.checkList, this.gridIsUnwrapped);
        }

        //= componentdidmount

    }, {
        key: 'makeBoard',
        value: function makeBoard(width, height, squareSize, ratio, canvas, savedCellsList) {
            // console.log(width)
            this.canvas = createCanvas(canvas, width, height, squareSize, ratio);
            this.ratio = ratio;
            drawGrid(this.canvas, width, height, squareSize);
            var bufferCanvas = copyCanvas(this.canvas);
            var ctx = bufferCanvas.getContext('2d');
            this.originalCellImage = ctx.getImageData(squareSize * ratio / 2, squareSize * ratio / 2, squareSize * ratio, squareSize * ratio);

            if (savedCellsList) {
                if (this.gridIsUnwrapped) {
                    savedCellsList = savedCellsList.map(function (cell) {
                        return [cell[0] + 20, cell[1] + 20];
                    });
                }
                this.cellsStateChange.list = savedCellsList;
            } else {
                this.cellsStateChange.list = (0, _helpers.getRandomPattern)(height, width);
            }
            this.cellsStateChange.isFirst = true;
        }
    }, {
        key: 'changePattern',
        value: function changePattern(index, patternsList, mode) {
            var nextGenerationChangeCellsList;
            if (index > 0) {
                //get the coordinates of choosed pattern adjusted to current board size
                nextGenerationChangeCellsList = (0, _helpers.shiftPatternToCenter)(patternsList[index - 1].pattern, this.gridHeight, this.gridWidth);
            } else {
                //random live cells have index = 0
                nextGenerationChangeCellsList = (0, _helpers.getRandomPattern)(this.gridHeight, this.gridWidth);
            }
            if (mode.clear) {
                //board is clear - there aren't any live cells on the board
                this.cellsStateChange.list = nextGenerationChangeCellsList;
                this.cellsStateChange.isFirst = true;
            } else {
                //we have to clear the remained cells 
                this.cellsStateChange.list = (0, _helpers.getNewPatternChangeList)(this.valuesBoard, nextGenerationChangeCellsList);
                this.cellsStateChange.isFirst = true;
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {

            var rect = this.canvas.getBoundingClientRect();
            var cnvLeft = Math.floor(rect.left);
            var cnvRight = Math.floor(rect.right);
            var cnvTop = Math.floor(rect.top);
            var cnvBottom = Math.floor(rect.bottom);
            var currentSquareSize = this.gridSquareSize * this.ratio;
            var r = currentSquareSize / 2 - 1;
            var boardWidth = (this.gridWidth + 1) * currentSquareSize;
            var boardHeight = (this.gridHeight + 1) * currentSquareSize;
            var x = Math.round((getCursorPos(e)[0] - cnvLeft) / (cnvRight - cnvLeft) * boardWidth);
            var y = Math.round((getCursorPos(e)[1] - cnvTop) / (cnvBottom - cnvTop) * boardHeight);
            if ((x + currentSquareSize / 2) % currentSquareSize !== 0 && (y + currentSquareSize / 2) % currentSquareSize !== 0) {
                var nearestX = Math.floor((x + currentSquareSize / 2) / currentSquareSize);
                var nearestY = Math.floor((y + currentSquareSize / 2) / currentSquareSize);
                if (Math.pow(x - nearestX * currentSquareSize, 2) + Math.pow(y - nearestY * currentSquareSize, 2) < Math.pow(r, 2)) {

                    var clickedCell = [nearestY - 1, nearestX - 1];

                    this.cellsStateChange.list = [];
                    this.cellsStateChange.list.push(clickedCell);
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'handleWindowSizeChange',
        value: function handleWindowSizeChange(canvas) {
            this.canvas = canvas;
            if (this.canvas) {
                var r = this.canvas.height / this.canvas.width;
                this.canvas.style.width = "100%";
                this.canvas.style.height = this.canvas.offsetWidth * r + "px";
            }
        }
    }, {
        key: 'getLiveCells',
        value: function getLiveCells() {
            return (0, _helpers.getLiveCells)(this.valuesBoard);
        }
    }, {
        key: 'update',
        value: function update(mode) {
            this.checkList.length = 0;

            if (mode) {
                if (mode.drawing) {
                    //this operation changes valuesBoard and checklist

                    var changeCellList = (0, _helpers.getChangeList)(this.valuesBoard, this.cellsStateChange, this.checkList); //the list of cells that changes color;

                    updateTable(this.valuesBoard, this.cellsStateChange.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);

                    this.cellsStateChange.list = (0, _helpers.boardTotalCheck)(this.valuesBoard);
                } else if (mode.clear) {

                    this.cellsStateChange.list = (0, _helpers.getLiveCells)(this.valuesBoard);
                    var _changeCellList = (0, _helpers.getChangeList)(this.valuesBoard, this.cellsStateChange, this.checkList); //the list of cells that changes color;
                    this.cellsStateChange.isFirst = true;
                    updateTable(this.valuesBoard, this.cellsStateChange.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);
                    this.checkList.length = 0;
                } else {
                    //this operation changes valuesBoard and checklist
                    var _changeCellList2 = (0, _helpers.getChangeList)(this.valuesBoard, this.cellsStateChange, this.checkList); //the list of cells that changes color;

                    updateTable(this.valuesBoard, this.cellsStateChange.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);

                    this.cellsStateChange.list = _changeCellList2;
                    this.cellsStateChange.isFirst = false;
                }
            } else {
                var _changeCellList3 = (0, _helpers.getChangeList)(this.valuesBoard, this.cellsStateChange, this.checkList); //the list of cells that changes color;
                updateTable(this.valuesBoard, this.cellsStateChange.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio, this.gridIsUnwrapped);
                this.cellsStateChange.list = _changeCellList3;
                this.cellsStateChange.isFirst = false;
            }
        }
    }, {
        key: 'width',
        get: function get() {
            return this.visibleGridWidth;
        }
    }, {
        key: 'height',
        get: function get() {
            return this.visibleGridHeight;
        }
    }, {
        key: 'squareSize',
        get: function get() {
            return this.gridSquareSize;
        }
    }, {
        key: 'name',
        get: function get() {
            return this.gridName;
        }
    }]);
    return GameGrid;
}();

exports.default = GameGrid;

function drawGrid(canvas, width, height, squareSize) {
    var ctx = canvas.getContext('2d');
    var radius = squareSize / 2 - 1;

    ctx.strokeStyle = _colors.colors.GRID;
    var w = (width + 1) * squareSize;
    var h = (height + 1) * squareSize;
    ctx.lineWidth = .2;
    for (var i = squareSize; i < h; i += squareSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.closePath();
        ctx.stroke();
    }

    for (var _i = squareSize; _i < w; _i += squareSize) {
        ctx.beginPath();
        ctx.moveTo(_i, 0);
        ctx.lineTo(_i, h);
        ctx.closePath();
        ctx.stroke();
    }

    for (var _i2 = squareSize; _i2 < h; _i2 += squareSize) {
        for (var j = squareSize; j < w; j += squareSize) {
            draw_circle(ctx, j, _i2, radius);
        }
    }
}

function createCellsValuesMatrix(width, height, checkList, isUnwrapped) {
    var valuesBoard = Array(height).fill(null);
    for (var i = 0; i < height; i++) {
        valuesBoard[i] = Array(width).fill(null);
        for (var j = 0; j < width; j++) {
            valuesBoard[i][j] = new _Cell2.default(checkList, i, j);
        }
    }

    return valuesBoard;
}

function createGameMatrix(width, height, checkList, isUnwrapped) {
    var board = createCellsValuesMatrix(width, height, checkList, isUnwrapped);

    for (var i = 0; i < height; i++) {

        for (var j = 0; j < width; j++) {

            var neighborsList = getNeighborsList(board, width, height, i, j, isUnwrapped); //  setListeners(i,j);
            var neighborStateChangeListenersList = getNeighborStateChangeListenersList(neighborsList);
            board[i][j].addListeners("neighborStateChange", neighborStateChangeListenersList);
            var neighborsNumberChangeListenersList = getNeighborsNumberChangeListenersList(board[i][j]);
            board[i][j].addListeners("neighborsChange", neighborsNumberChangeListenersList);
        }
    }
    return board;
}

function getNeighborsList(valuesBoard, width, height, Y, X, isUnwrapped) {
    var cellList = [];
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            var tX = X + j,
                tY = Y + i;
            if (isUnwrapped) {
                if (tY >= 0 && tY < height && tX >= 0 && tX < width && !(i === 0 && j === 0)) {
                    cellList.push(valuesBoard[tY][tX]);
                }
            } else {
                if (tY < 0) tY = height - 1;else if (tY >= height) tY = 0;
                if (tX < 0) tX = width - 1;else if (tX >= width) tX = 0;
                if (!(i === 0 && j === 0)) {
                    cellList.push(valuesBoard[tY][tX]);
                }
            }
        }
    }
    cellList = (0, _helpers.makeUnique)(cellList);
    return cellList;
}

function getNeighborStateChangeListenersList(neighborsList) {
    var listenersList = [];

    neighborsList.forEach(function (c) {
        return listenersList.push(function (val) {
            val === 1 ? c.addNeighbor() : c.removeNeighbor();
        });
    });
    return listenersList;
}

function getNeighborsNumberChangeListenersList(cell) {
    var listenersList = [];
    listenersList.push(function () {

        cell.checkList[cell.checkList.length] = cell;
    });
    return listenersList;
}

function createCanvas(canvas, width, height, gridSquareSize, ratio) {
    console.log(canvas);
    canvas.width = (width + 1) * gridSquareSize * ratio;
    canvas.height = (height + 1) * gridSquareSize * ratio;
    var r = canvas.height / canvas.width;
    canvas.style.width = "100%";
    canvas.style.height = canvas.offsetWidth * r + "px";

    var ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);
    return canvas;
}

function copyCanvas(original) {
    var copy;

    copy = original.cloneNode();
    copy.getContext('2d').drawImage(original, 0, 0);

    return copy;
}

function draw_circle(context, x, y, radius) {
    context.save();
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = _colors.colors.EMPTY_CELL;
    context.fill();
    context.closePath();
    context.restore();
}
function updateTable(valuesBoard, changeList, canvas, squareSize, width, height, emptyCellImage, ratio, gridIsUnwrapped) {
    // console.log("updateTable")
    changeList.forEach(function (cell) {
        // console.log("forEach")
        var Y = cell[0];
        var X = cell[1];
        if (gridIsUnwrapped) {
            if (X >= 20 && X < width - 20 && Y >= 20 && Y < height - 20) {

                X -= 20;
                Y -= 20;
                if (valuesBoard[cell[0]][cell[1]].state === 0) {
                    drawCell([Y, X], canvas, squareSize, squareSize / 2, 'empty', emptyCellImage, ratio);
                } else {
                    drawCell([Y, X], canvas, squareSize, squareSize / 2, 'full', emptyCellImage, ratio);
                }
            }
        } else {
            if (valuesBoard[cell[0]][cell[1]].state === 0) {
                drawCell(cell, canvas, squareSize, squareSize / 2, 'empty', emptyCellImage, ratio);
            } else {
                drawCell(cell, canvas, squareSize, squareSize / 2, 'full', emptyCellImage, ratio);
            }
        }
    });
}

function drawCell(cell, canvas, squareSize, radius, shape, emptyCellImage, ratio) {
    var cellRadius = radius - 1;
    var context = canvas.getContext('2d');
    var Y = (cell[0] + 1) * squareSize;
    var X = (cell[1] + 1) * squareSize;
    if (shape === 'empty') {
        context.save();
        context.putImageData(emptyCellImage, (X - radius) * ratio, (Y - radius) * ratio);
        context.restore();
    } else {
        context.save();
        context.beginPath();
        context.arc(X, Y, cellRadius, 0, Math.PI * 2, false);
        context.fillStyle = _colors.colors.LIVE_CELL;
        context.fill();
        context.closePath();
        context.restore();
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
    x1 = e.clientX;
    x2 = e.clientY;
    return [x, y, x1, x2];
}

function getCursorPos(e) {
    var x;
    var y;

    x = e.clientX;
    y = e.clientY;
    return [x, y];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXEdhbWVHcmlkLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNlbGxzVmFsdWVzTWF0cml4IiwiY3JlYXRlR2FtZU1hdHJpeCIsImdldE5laWdoYm9yc0xpc3QiLCJnZXROZWlnaGJvclN0YXRlQ2hhbmdlTGlzdGVuZXJzTGlzdCIsImdldE5laWdoYm9yc051bWJlckNoYW5nZUxpc3RlbmVyc0xpc3QiLCJjcmVhdGVDYW52YXMiLCJHYW1lR3JpZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNxdWFyZVNpemUiLCJpc1Vud3JhcHBlZCIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJncmlkU3F1YXJlU2l6ZSIsInZpc2libGVHcmlkV2lkdGgiLCJ2aXNpYmxlR3JpZEhlaWdodCIsImdyaWROYW1lIiwiZ3JpZElzVW53cmFwcGVkIiwiY2hlY2tMaXN0Iiwib3JpZ2luYWxDZWxsSW1hZ2UiLCJjZWxsc1N0YXRlQ2hhbmdlIiwibGlzdCIsImlzRmlyc3QiLCJ2YWx1ZXNCb2FyZCIsImNhbnZhcyIsImN1cnJlbnRMaXZlQ2VsbHMiLCJpc01hbnVhbFN0YXRlIiwicmF0aW8iLCJkcmF3R3JpZCIsImJ1ZmZlckNhbnZhcyIsImNvcHlDYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2V0SW1hZ2VEYXRhIiwic2F2ZWRDZWxsc0xpc3QiLCJtYXAiLCJjZWxsIiwiaW5kZXgiLCJwYXR0ZXJuc0xpc3QiLCJtb2RlIiwibmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QiLCJwYXR0ZXJuIiwiY2xlYXIiLCJlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNudkxlZnQiLCJNYXRoIiwiZmxvb3IiLCJsZWZ0IiwiY252UmlnaHQiLCJyaWdodCIsImNudlRvcCIsInRvcCIsImNudkJvdHRvbSIsImJvdHRvbSIsImN1cnJlbnRTcXVhcmVTaXplIiwiciIsImJvYXJkV2lkdGgiLCJib2FyZEhlaWdodCIsIngiLCJyb3VuZCIsImdldEN1cnNvclBvcyIsInkiLCJuZWFyZXN0WCIsIm5lYXJlc3RZIiwicG93IiwiY2xpY2tlZENlbGwiLCJwdXNoIiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsImxlbmd0aCIsImRyYXdpbmciLCJjaGFuZ2VDZWxsTGlzdCIsInVwZGF0ZVRhYmxlIiwicmFkaXVzIiwic3Ryb2tlU3R5bGUiLCJHUklEIiwidyIsImgiLCJsaW5lV2lkdGgiLCJpIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiaiIsImRyYXdfY2lyY2xlIiwiQXJyYXkiLCJmaWxsIiwiYm9hcmQiLCJuZWlnaGJvcnNMaXN0IiwibmVpZ2hib3JTdGF0ZUNoYW5nZUxpc3RlbmVyc0xpc3QiLCJhZGRMaXN0ZW5lcnMiLCJuZWlnaGJvcnNOdW1iZXJDaGFuZ2VMaXN0ZW5lcnNMaXN0IiwiWSIsIlgiLCJjZWxsTGlzdCIsInRYIiwidFkiLCJsaXN0ZW5lcnNMaXN0IiwiZm9yRWFjaCIsInZhbCIsImMiLCJhZGROZWlnaGJvciIsInJlbW92ZU5laWdoYm9yIiwiY29uc29sZSIsImxvZyIsInNjYWxlIiwib3JpZ2luYWwiLCJjb3B5IiwiY2xvbmVOb2RlIiwiZHJhd0ltYWdlIiwiY29udGV4dCIsInNhdmUiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsIkVNUFRZX0NFTEwiLCJyZXN0b3JlIiwiY2hhbmdlTGlzdCIsImVtcHR5Q2VsbEltYWdlIiwic3RhdGUiLCJkcmF3Q2VsbCIsInNoYXBlIiwiY2VsbFJhZGl1cyIsInB1dEltYWdlRGF0YSIsIkxJVkVfQ0VMTCIsImdldEN1cnNvclBvc2l0aW9uIiwieDEiLCJ4MiIsInBhZ2VYIiwidW5kZWZpbmVkIiwicGFnZVkiLCJjbGllbnRYIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFkiLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1FBcVBnQixBLDBCLEFBQUE7UUFjQSxBLG1CLEFBQUE7USxB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LEFBQVcsS0FBckIsQUFBMEIsQUFDMUI7UUFBTSxJQUFJLENBQUMsS0FBQSxBQUFLLEtBQU4sQUFBVyxLQUFyQixBQUEwQixBQUMxQjtRQUFHLFVBQUgsQUFBYSxTQUFRLEFBQ2pCO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLGFBQVIsQUFBcUIsZ0JBQWdCLENBQUMsSUFBRCxBQUFLLFVBQTFDLEFBQW9ELE9BQU8sQ0FBQyxJQUFELEFBQUssVUFBaEUsQUFBMEUsQUFDMUU7Z0JBQUEsQUFBUSxBQUNYO0FBSkQsV0FJTyxBQUNIO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxJQUFSLEFBQVksR0FBWixBQUFlLEdBQWYsQUFBa0IsWUFBbEIsQUFBOEIsR0FBRyxLQUFBLEFBQUssS0FBdEMsQUFBMkMsR0FBM0MsQUFBOEMsQUFDOUM7Z0JBQUEsQUFBUSxZQUFZLGVBQXBCLEFBQTBCLEFBQzFCO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxBQUNYO0FBQ0o7OztBQUVELFNBQUEsQUFBUyxrQkFBVCxBQUEyQixHQUFHLEFBQzFCO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUVKOztRQUFJLEVBQUEsQUFBRSxTQUFGLEFBQVcsYUFBYSxFQUFBLEFBQUUsU0FBOUIsQUFBdUMsV0FBVyxBQUM5QztZQUFJLEVBQUosQUFBTSxBQUNOO1lBQUksRUFBSixBQUFNLEFBQ1Q7QUFIRCxXQUdPLEFBRUg7O1lBQUksRUFBQSxBQUFFLFVBQVUsU0FBQSxBQUFTLEtBQXJCLEFBQTBCLGFBQWEsU0FBQSxBQUFTLGdCQUFwRCxBQUFvRSxBQUNwRTtZQUFJLEVBQUEsQUFBRSxVQUFVLFNBQUEsQUFBUyxLQUFyQixBQUEwQixZQUFZLFNBQUEsQUFBUyxnQkFBbkQsQUFBbUUsQUFDdEU7QUFDRDtTQUFLLEVBQUwsQUFBTyxBQUNQO1NBQUssRUFBTCxBQUFPLEFBQ1A7V0FBTyxDQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxJQUFkLEFBQU8sQUFBVyxBQUNyQjs7O0FBRUQsU0FBQSxBQUFTLGFBQVQsQUFBc0IsR0FBRyxBQUNyQjtRQUFBLEFBQUksQUFDSjtRQUFBLEFBQUksQUFFSjs7UUFBSSxFQUFKLEFBQU0sQUFDTjtRQUFJLEVBQUosQUFBTSxBQUNOO1dBQU8sQ0FBQSxBQUFDLEdBQVIsQUFBTyxBQUFJLEFBQ2QiLCJmaWxlIjoiR2FtZUdyaWQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==