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

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var GameGrid = function () {
    function GameGrid(name, width, height, squareSize) {
        var isOpenUniverse = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        (0, _classCallCheck3.default)(this, GameGrid);

        this.gridWidth = width;
        this.gridHeight = height;
        this.gridSquareSize = squareSize;
        this.visibleGridWidth = width;
        this.visibleGridHeight = height;
        this.gridName = name;
        this.gridIsOpen = isOpenUniverse;
        this.checkList = [];
        this.originalCellImage = null;
        this.cellsStateChange = {
            list: null,
            isFirst: true
        };
        if (this.gridIsOpen) {
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        this.valuesBoard = createGameMatrix(this.gridWidth, this.gridHeight, this.checkList, this.gridIsOpen);
    }

    (0, _createClass3.default)(GameGrid, [{
        key: 'reload',
        value: function reload(width, height, squareSize, canvas) {
            var isOpenUniverse = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

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
            this.gridIsOpen = isOpenUniverse;
            if (this.gridIsOpen) {
                this.gridWidth = this.gridWidth + 40;
                this.gridHeight = this.gridHeight + 40;
            }
            this.canvas = createCanvas(canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize, this.ratio);
            drawGrid(this.canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize);
            var bufferCanvas = copyCanvas(this.canvas);
            var ctx = bufferCanvas.getContext('2d');
            this.originalCellImage = ctx.getImageData(this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio, this.gridSquareSize * this.ratio);

            this.valuesBoard = createGameMatrix(this.gridWidth, this.gridHeight, this.checkList, this.gridIsOpen);
        }

        //= componentdidmount

    }, {
        key: 'makeBoard',
        value: function makeBoard(width, height, squareSize, ratio, canvas, savedCellsList) {

            this.canvas = createCanvas(canvas, width, height, squareSize, ratio);
            this.ratio = ratio;
            drawGrid(this.canvas, width, height, squareSize);
            var bufferCanvas = copyCanvas(this.canvas);
            var ctx = bufferCanvas.getContext('2d');
            this.originalCellImage = ctx.getImageData(squareSize * ratio / 2, squareSize * ratio / 2, squareSize * ratio, squareSize * ratio);

            if (savedCellsList) {
                if (this.gridIsOpen) {
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
                nextGenerationChangeCellsList = (0, _helpers.shiftToCenter)(patternsList[index - 1].pattern, this.gridHeight, this.gridWidth);
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
                updateTable(this.valuesBoard, this.cellsStateChange.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio, this.gridIsOpen);
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

    ctx.strokeStyle = "#878789";
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

function createCellsValuesMatrix(width, height, checkList, isOpenUniverse) {
    var valuesBoard = Array(height).fill(null);
    for (var i = 0; i < height; i++) {
        valuesBoard[i] = Array(width).fill(null);
        for (var j = 0; j < width; j++) {
            valuesBoard[i][j] = new _Cell2.default(checkList, i, j);
        }
    }

    return valuesBoard;
}

function createGameMatrix(width, height, checkList, isOpenUniverse) {
    var board = createCellsValuesMatrix(width, height, checkList, isOpenUniverse);

    for (var i = 0; i < height; i++) {

        for (var j = 0; j < width; j++) {

            var neighborsList = getNeighborsList(board, width, height, i, j, isOpenUniverse); //  setListeners(i,j);
            var neighborStateChangeListenersList = getNeighborStateChangeListenersList(neighborsList);
            board[i][j].addListeners("neighborStateChange", neighborStateChangeListenersList);
            var neighborsNumberChangeListenersList = getNeighborsNumberChangeListenersList(board[i][j]);
            board[i][j].addListeners("neighborsChange", neighborsNumberChangeListenersList);
        }
    }
    return board;
}

function getNeighborsList(valuesBoard, width, height, Y, X, isOpenUniverse) {
    var cellList = [];
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            var tX = X + j,
                tY = Y + i;
            if (isOpenUniverse) {
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
    context.globalAlpha = 0.2;
    context.fillStyle = '#2F4F4F';
    context.fill();
    context.closePath();
    context.restore();
}
function updateTable(valuesBoard, changeList, canvas, squareSize, width, height, emptyCellImage, ratio, gridIsOpen) {
    // console.log("updateTable")
    changeList.forEach(function (cell) {
        // console.log("forEach")
        var Y = cell[0];
        var X = cell[1];
        if (gridIsOpen) {
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
        context.fillStyle = '#FF0000';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXEdhbWVHcmlkLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNlbGxzVmFsdWVzTWF0cml4IiwiY3JlYXRlR2FtZU1hdHJpeCIsImdldE5laWdoYm9yc0xpc3QiLCJnZXROZWlnaGJvclN0YXRlQ2hhbmdlTGlzdGVuZXJzTGlzdCIsImdldE5laWdoYm9yc051bWJlckNoYW5nZUxpc3RlbmVyc0xpc3QiLCJjcmVhdGVDYW52YXMiLCJHYW1lR3JpZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNxdWFyZVNpemUiLCJpc09wZW5Vbml2ZXJzZSIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJncmlkU3F1YXJlU2l6ZSIsInZpc2libGVHcmlkV2lkdGgiLCJ2aXNpYmxlR3JpZEhlaWdodCIsImdyaWROYW1lIiwiZ3JpZElzT3BlbiIsImNoZWNrTGlzdCIsIm9yaWdpbmFsQ2VsbEltYWdlIiwiY2VsbHNTdGF0ZUNoYW5nZSIsImxpc3QiLCJpc0ZpcnN0IiwidmFsdWVzQm9hcmQiLCJjYW52YXMiLCJjdXJyZW50TGl2ZUNlbGxzIiwiaXNNYW51YWxTdGF0ZSIsInJhdGlvIiwiZHJhd0dyaWQiLCJidWZmZXJDYW52YXMiLCJjb3B5Q2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdldEltYWdlRGF0YSIsInNhdmVkQ2VsbHNMaXN0IiwibWFwIiwiY2VsbCIsImluZGV4IiwicGF0dGVybnNMaXN0IiwibW9kZSIsIm5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0IiwicGF0dGVybiIsImNsZWFyIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbnZMZWZ0IiwiTWF0aCIsImZsb29yIiwibGVmdCIsImNudlJpZ2h0IiwicmlnaHQiLCJjbnZUb3AiLCJ0b3AiLCJjbnZCb3R0b20iLCJib3R0b20iLCJjdXJyZW50U3F1YXJlU2l6ZSIsInIiLCJib2FyZFdpZHRoIiwiYm9hcmRIZWlnaHQiLCJ4Iiwicm91bmQiLCJnZXRDdXJzb3JQb3MiLCJ5IiwibmVhcmVzdFgiLCJuZWFyZXN0WSIsInBvdyIsImNsaWNrZWRDZWxsIiwicHVzaCIsInN0eWxlIiwib2Zmc2V0V2lkdGgiLCJsZW5ndGgiLCJkcmF3aW5nIiwiY2hhbmdlQ2VsbExpc3QiLCJ1cGRhdGVUYWJsZSIsInJhZGl1cyIsInN0cm9rZVN0eWxlIiwidyIsImgiLCJsaW5lV2lkdGgiLCJpIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiaiIsImRyYXdfY2lyY2xlIiwiQXJyYXkiLCJmaWxsIiwiYm9hcmQiLCJuZWlnaGJvcnNMaXN0IiwibmVpZ2hib3JTdGF0ZUNoYW5nZUxpc3RlbmVyc0xpc3QiLCJhZGRMaXN0ZW5lcnMiLCJuZWlnaGJvcnNOdW1iZXJDaGFuZ2VMaXN0ZW5lcnNMaXN0IiwiWSIsIlgiLCJjZWxsTGlzdCIsInRYIiwidFkiLCJsaXN0ZW5lcnNMaXN0IiwiZm9yRWFjaCIsInZhbCIsImMiLCJhZGROZWlnaGJvciIsInJlbW92ZU5laWdoYm9yIiwic2NhbGUiLCJvcmlnaW5hbCIsImNvcHkiLCJjbG9uZU5vZGUiLCJkcmF3SW1hZ2UiLCJjb250ZXh0Iiwic2F2ZSIsImFyYyIsIlBJIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJyZXN0b3JlIiwiY2hhbmdlTGlzdCIsImVtcHR5Q2VsbEltYWdlIiwic3RhdGUiLCJkcmF3Q2VsbCIsInNoYXBlIiwiY2VsbFJhZGl1cyIsInB1dEltYWdlRGF0YSIsImdldEN1cnNvclBvc2l0aW9uIiwieDEiLCJ4MiIsInBhZ2VYIiwidW5kZWZpbmVkIiwicGFnZVkiLCJjbGllbnRYIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFkiLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1FBcVBnQixBLDBCLEFBQUE7UUFjQSxBLG1CLEFBQUE7UUFtQkEsQSxtQixBQUFBO1EsQUF3QkEsc0MsQUFBQTtRQVdBLEEs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QUEwQixBQUMxQjtRQUFHLFVBQUgsQUFBYSxTQUFRLEFBQ2pCO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLGFBQVIsQUFBcUIsZ0JBQWdCLENBQUMsSUFBRCxBQUFLLFVBQTFDLEFBQW9ELE9BQU8sQ0FBQyxJQUFELEFBQUssVUFBaEUsQUFBMEUsQUFDMUU7Z0JBQUEsQUFBUSxBQUNYO0FBSkQsV0FJTyxBQUNIO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxJQUFSLEFBQVksR0FBWixBQUFlLEdBQWYsQUFBa0IsWUFBbEIsQUFBOEIsR0FBRyxLQUFBLEFBQUssS0FBdEMsQUFBMkMsR0FBM0MsQUFBOEMsQUFDOUM7Z0JBQUEsQUFBUSxZQUFSLEFBQW9CLEFBQ3BCO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxBQUNYO0FBQ0o7OztBQUVELFNBQUEsQUFBUyxrQkFBVCxBQUEyQixHQUFHLEFBQzFCO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUVKOztRQUFJLEVBQUEsQUFBRSxTQUFGLEFBQVcsYUFBYSxFQUFBLEFBQUUsU0FBOUIsQUFBdUMsV0FBVyxBQUM5QztZQUFJLEVBQUosQUFBTSxBQUNOO1lBQUksRUFBSixBQUFNLEFBQ1Q7QUFIRCxXQUdPLEFBRUg7O1lBQUksRUFBQSxBQUFFLFVBQVUsU0FBQSxBQUFTLEtBQXJCLEFBQTBCLGFBQWEsU0FBQSxBQUFTLGdCQUFwRCxBQUFvRSxBQUNwRTtZQUFJLEVBQUEsQUFBRSxVQUFVLFNBQUEsQUFBUyxLQUFyQixBQUEwQixZQUFZLFNBQUEsQUFBUyxnQkFBbkQsQUFBbUUsQUFDdEU7QUFDRDtTQUFLLEVBQUwsQUFBTyxBQUNQO1NBQUssRUFBTCxBQUFPLEFBQ1A7V0FBTyxDQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxJQUFkLEFBQU8sQUFBVyxBQUNyQjs7O0FBRUQsU0FBQSxBQUFTLGFBQVQsQUFBc0IsR0FBRyxBQUNyQjtRQUFBLEFBQUksQUFDSjtRQUFBLEFBQUksQUFFSjs7UUFBSSxFQUFKLEFBQU0sQUFDTjtRQUFJLEVBQUosQUFBTSxBQUNOO1dBQU8sQ0FBQSxBQUFDLEdBQVIsQUFBTyxBQUFJLEFBQ2QiLCJmaWxlIjoiR2FtZUdyaWQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==