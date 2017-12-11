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
    context.globalAlpha = 0.2;
    context.fillStyle = '#2F4F4F';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXEdhbWVHcmlkLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNlbGxzVmFsdWVzTWF0cml4IiwiY3JlYXRlR2FtZU1hdHJpeCIsImdldE5laWdoYm9yc0xpc3QiLCJnZXROZWlnaGJvclN0YXRlQ2hhbmdlTGlzdGVuZXJzTGlzdCIsImdldE5laWdoYm9yc051bWJlckNoYW5nZUxpc3RlbmVyc0xpc3QiLCJjcmVhdGVDYW52YXMiLCJHYW1lR3JpZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNxdWFyZVNpemUiLCJpc1Vud3JhcHBlZCIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJncmlkU3F1YXJlU2l6ZSIsInZpc2libGVHcmlkV2lkdGgiLCJ2aXNpYmxlR3JpZEhlaWdodCIsImdyaWROYW1lIiwiZ3JpZElzVW53cmFwcGVkIiwiY2hlY2tMaXN0Iiwib3JpZ2luYWxDZWxsSW1hZ2UiLCJjZWxsc1N0YXRlQ2hhbmdlIiwibGlzdCIsImlzRmlyc3QiLCJ2YWx1ZXNCb2FyZCIsImNhbnZhcyIsImN1cnJlbnRMaXZlQ2VsbHMiLCJpc01hbnVhbFN0YXRlIiwicmF0aW8iLCJkcmF3R3JpZCIsImJ1ZmZlckNhbnZhcyIsImNvcHlDYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2V0SW1hZ2VEYXRhIiwic2F2ZWRDZWxsc0xpc3QiLCJtYXAiLCJjZWxsIiwiaW5kZXgiLCJwYXR0ZXJuc0xpc3QiLCJtb2RlIiwibmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QiLCJwYXR0ZXJuIiwiY2xlYXIiLCJlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNudkxlZnQiLCJNYXRoIiwiZmxvb3IiLCJsZWZ0IiwiY252UmlnaHQiLCJyaWdodCIsImNudlRvcCIsInRvcCIsImNudkJvdHRvbSIsImJvdHRvbSIsImN1cnJlbnRTcXVhcmVTaXplIiwiciIsImJvYXJkV2lkdGgiLCJib2FyZEhlaWdodCIsIngiLCJyb3VuZCIsImdldEN1cnNvclBvcyIsInkiLCJuZWFyZXN0WCIsIm5lYXJlc3RZIiwicG93IiwiY2xpY2tlZENlbGwiLCJwdXNoIiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsImxlbmd0aCIsImRyYXdpbmciLCJjaGFuZ2VDZWxsTGlzdCIsInVwZGF0ZVRhYmxlIiwicmFkaXVzIiwic3Ryb2tlU3R5bGUiLCJ3IiwiaCIsImxpbmVXaWR0aCIsImkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJqIiwiZHJhd19jaXJjbGUiLCJBcnJheSIsImZpbGwiLCJib2FyZCIsIm5laWdoYm9yc0xpc3QiLCJuZWlnaGJvclN0YXRlQ2hhbmdlTGlzdGVuZXJzTGlzdCIsImFkZExpc3RlbmVycyIsIm5laWdoYm9yc051bWJlckNoYW5nZUxpc3RlbmVyc0xpc3QiLCJZIiwiWCIsImNlbGxMaXN0IiwidFgiLCJ0WSIsImxpc3RlbmVyc0xpc3QiLCJmb3JFYWNoIiwidmFsIiwiYyIsImFkZE5laWdoYm9yIiwicmVtb3ZlTmVpZ2hib3IiLCJjb25zb2xlIiwibG9nIiwic2NhbGUiLCJvcmlnaW5hbCIsImNvcHkiLCJjbG9uZU5vZGUiLCJkcmF3SW1hZ2UiLCJjb250ZXh0Iiwic2F2ZSIsImFyYyIsIlBJIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJyZXN0b3JlIiwiY2hhbmdlTGlzdCIsImVtcHR5Q2VsbEltYWdlIiwic3RhdGUiLCJkcmF3Q2VsbCIsInNoYXBlIiwiY2VsbFJhZGl1cyIsInB1dEltYWdlRGF0YSIsImdldEN1cnNvclBvc2l0aW9uIiwieDEiLCJ4MiIsInBhZ2VYIiwidW5kZWZpbmVkIiwicGFnZVkiLCJjbGllbnRYIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFkiLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1FBcVBnQixBLDBCQUFBLEE7USxBQWNBLG1CQUFBLEE7USxBQW1CQSxtQixBQUFBO1EsQUF3QkEsc0NBQUEsQTtRQVdBLEEsd0MsQUFBQTtRLEFBU0EsZSxBQUFBOztBQWxVaEI7Ozs7QUFDQTs7Ozs7O0ksQUFLTSx1QkFDRjtzQkFBQSxBQUFZLE1BQVosQUFBa0IsT0FBbEIsQUFBeUIsUUFBekIsQUFBaUMsWUFDakM7WUFENkMsQUFDN0Msa0ZBRDJELEFBQzNEOzRDQUNBOzthQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjthQUFBLEFBQUssYUFBTCxBQUFrQixBQUNkO2FBQUEsQUFBSyxpQkFBTCxBQUFzQixBQUN0QjthQUFBLEFBQUssbUJBQUwsQUFBd0IsQUFDeEI7YUFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQ3pCO2FBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2hCO2FBQUEsQUFBSyxrQkFBTCxBQUF1QixBQUN2QjthQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjthQUFBLEFBQUssb0JBQUwsQUFBeUIsQUFDekI7YUFBQSxBQUFLO2tCQUFtQixBQUNmLEFBQ0w7cUJBRkosQUFBd0IsQUFFWixBQUVaO0FBSndCLEFBQ3BCO1lBR0QsS0FBSCxBQUFRLGlCQUFnQixBQUNwQjtpQkFBQSxBQUFLLFlBQVksS0FBQSxBQUFLLFlBQXRCLEFBQWtDLEFBQ2xDO2lCQUFBLEFBQUssYUFBYSxLQUFBLEFBQUssYUFBdkIsQUFBb0MsQUFDdkM7QUFDRDthQUFBLEFBQUssY0FBYyxpQkFBaUIsS0FBakIsQUFBc0IsV0FBVyxLQUFqQyxBQUFzQyxZQUFZLEtBQWxELEFBQXVELFdBQVcsS0FBckYsQUFBbUIsQUFBdUUsQUFFaEc7Ozs7OytCLEFBc0JTLE9BQU0sQSxRLEFBQU8sWSxBQUFXLFFBQTJCO2dCQUFwQixBQUFvQixrRkFBTixBQUFNLEFBQ3REOztpQkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDakI7aUJBQUEsQUFBSztzQkFBbUIsQUFDZixBQUNMO3lCQUZKLEFBQXdCLEFBRVosQUFFWjtBQUp3QixBQUNwQjtpQkFHSixBQUFLLG1CQUFMLEFBQXNCLEFBQ3RCO2lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDckI7aUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ2pCO2lCQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjtpQkFBQSxBQUFLLG1CQUFMLEFBQXdCLEFBQ3hCO2lCQUFBLEFBQUssb0JBQUwsQUFBeUIsQUFDekI7aUJBQUEsQUFBSyxpQkFBTCxBQUFzQixBQUN0QjtpQkFBQSxBQUFLLGtCQUFMLEFBQXVCLEFBQ3ZCO2dCQUFHLEtBQUgsQUFBUSxpQkFBZ0IsQUFDcEI7cUJBQUEsQUFBSyxZQUFZLEtBQUEsQUFBSyxZQUF0QixBQUFrQyxBQUNsQztxQkFBQSxBQUFLLGFBQWEsS0FBQSxBQUFLLGFBQXZCLEFBQW9DLEFBQ3ZDO0FBQ0Q7aUJBQUEsQUFBSyxTQUFTLGFBQUEsQUFBYSxRQUFRLEtBQXJCLEFBQTBCLGtCQUFrQixLQUE1QyxBQUFpRCxtQkFBbUIsS0FBcEUsQUFBeUUsZ0JBQWdCLEtBQXZHLEFBQWMsQUFBOEYsQUFDNUc7cUJBQVMsS0FBVCxBQUFjLFFBQVEsS0FBdEIsQUFBMkIsa0JBQWtCLEtBQTdDLEFBQWtELG1CQUFtQixLQUFyRSxBQUEwRSxBQUMxRTtnQkFBSSxlQUFlLFdBQVcsS0FBOUIsQUFBbUIsQUFBZ0IsQUFDbkM7Z0JBQUksTUFBTSxhQUFBLEFBQWEsV0FBdkIsQUFBVSxBQUF3QixBQUNsQztpQkFBQSxBQUFLLG9CQUFvQixJQUFBLEFBQUksYUFBYSxLQUFBLEFBQUssaUJBQWlCLEtBQXRCLEFBQTJCLFFBQTVDLEFBQW9ELEdBQUcsS0FBQSxBQUFLLGlCQUFpQixLQUF0QixBQUEyQixRQUFsRixBQUEwRixHQUFHLEtBQUEsQUFBSyxpQkFBaUIsS0FBbkgsQUFBd0gsT0FBTyxLQUFBLEFBQUssaUJBQWdCLEtBQTdLLEFBQXlCLEFBQXlKLEFBRWxMOztpQkFBQSxBQUFLLGNBQWMsaUJBQWlCLEtBQWpCLEFBQXNCLFdBQVcsS0FBakMsQUFBc0MsWUFBWSxLQUFsRCxBQUF1RCxXQUFXLEtBQXJGLEFBQW1CLEFBQXVFLEFBRTdGO0FBR0Q7Ozs7OztrQ0FDVSxBLE8sQUFBTSxRQUFPLEEsWSxBQUFXLE8sQUFBTSxRLEFBQU8sZ0JBQy9DLEFBQ0k7QUFDQTtpQkFBQSxBQUFLLFNBQVMsYUFBQSxBQUFhLFFBQWIsQUFBcUIsT0FBckIsQUFBNEIsUUFBNUIsQUFBb0MsWUFBbEQsQUFBYyxBQUFnRCxBQUM5RDtpQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO3FCQUFTLEtBQVQsQUFBYyxRQUFkLEFBQXNCLE9BQXRCLEFBQTZCLFFBQTdCLEFBQXFDLEFBQ3JDO2dCQUFJLGVBQWUsV0FBVyxLQUE5QixBQUFtQixBQUFnQixBQUNuQztnQkFBSSxNQUFNLGFBQUEsQUFBYSxXQUF2QixBQUFVLEFBQXdCLEFBQ2xDO2lCQUFBLEFBQUssb0JBQW9CLElBQUEsQUFBSSxhQUFhLGFBQUEsQUFBYSxRQUE5QixBQUFzQyxHQUFHLGFBQUEsQUFBYSxRQUF0RCxBQUE4RCxHQUFHLGFBQWpFLEFBQThFLE9BQU8sYUFBOUcsQUFBeUIsQUFBaUcsQUFHMUg7O2dCQUFBLEFBQUcsZ0JBQWUsQUFDZDtvQkFBRyxLQUFILEFBQVEsaUJBQWdCLEFBQ3BCO29EQUFpQixBQUFlLElBQUksZ0JBQUE7K0JBQVEsQ0FBQyxLQUFBLEFBQUssS0FBTixBQUFTLElBQUcsS0FBQSxBQUFLLEtBQXpCLEFBQVEsQUFBb0I7QUFBaEUsQUFBaUIsQUFDcEIscUJBRG9CO0FBRXJCO3FCQUFBLEFBQUssaUJBQUwsQUFBc0IsT0FBdEIsQUFBNkIsQUFHaEM7QUFQRCxtQkFPTyxBQUNDO3FCQUFBLEFBQUssaUJBQUwsQUFBc0IsT0FBTywrQkFBQSxBQUFpQixRQUE5QyxBQUE2QixBQUF3QixBQUM1RDtBQUNEO2lCQUFBLEFBQUssaUJBQUwsQUFBc0IsVUFBdEIsQUFBZ0MsQUFDbkM7Ozs7c0MsQUFFYSxPQUFPLEEsY0FBYyxBLE1BQUssQUFDcEM7Z0JBQUEsQUFBSSxBQUNKO2dCQUFHLFFBQUgsQUFBUyxHQUFFLEFBQ1A7QUFDQTtnREFBOEIsNEJBQWMsYUFBYSxRQUFiLEFBQW1CLEdBQWpDLEFBQW9DLFNBQVEsS0FBNUMsQUFBaUQsWUFBVyxLQUExRixBQUE4QixBQUFpRSxBQUNsRztBQUhELG1CQUdPLEFBQ0g7QUFDQTtnREFBOEIsK0JBQWlCLEtBQWpCLEFBQXNCLFlBQVcsS0FBL0QsQUFBOEIsQUFBc0MsQUFDdkU7QUFDRDtnQkFBRyxLQUFILEFBQVEsT0FBTSxBQUNWO0FBQ0E7cUJBQUEsQUFBSyxpQkFBTCxBQUFzQixPQUF0QixBQUE2QixBQUM3QjtxQkFBQSxBQUFLLGlCQUFMLEFBQXNCLFVBQXRCLEFBQWdDLEFBQ25DO0FBSkQsbUJBSU8sQUFDSDtBQUNBO3FCQUFBLEFBQUssaUJBQUwsQUFBc0IsT0FBSyxzQ0FBd0IsS0FBeEIsQUFBNkIsYUFBeEQsQUFBMkIsQUFBMEMsQUFDckU7cUJBQUEsQUFBSyxpQkFBTCxBQUFzQixVQUF0QixBQUFnQyxBQUNuQztBQUNKOzs7O29DLEFBRVcsR0FBRSxBQUVWOztnQkFBTSxPQUFPLEtBQUEsQUFBSyxPQUFsQixBQUFhLEFBQVksQUFDekI7Z0JBQU0sVUFBVSxLQUFBLEFBQUssTUFBTSxLQUEzQixBQUFnQixBQUFnQixBQUNoQztnQkFBTSxXQUFXLEtBQUEsQUFBSyxNQUFNLEtBQTVCLEFBQWlCLEFBQWdCLEFBQ2pDO2dCQUFNLFNBQVMsS0FBQSxBQUFLLE1BQU0sS0FBMUIsQUFBZSxBQUFnQixBQUMvQjtnQkFBTSxZQUFZLEtBQUEsQUFBSyxNQUFNLEtBQTdCLEFBQWtCLEFBQWdCLEFBQ2xDO2dCQUFNLG9CQUFvQixLQUFBLEFBQUssaUJBQWlCLEtBQWhELEFBQXFELEFBQ3JEO2dCQUFNLElBQUksb0JBQUEsQUFBb0IsSUFBOUIsQUFBa0MsQUFDbEM7Z0JBQU0sYUFBVyxDQUFDLEtBQUEsQUFBSyxZQUFOLEFBQWtCLEtBQW5DLEFBQXdDLEFBQ3hDO2dCQUFNLGNBQVksQ0FBQyxLQUFBLEFBQUssYUFBTixBQUFtQixLQUFyQyxBQUEwQyxBQUMxQztnQkFBTSxJQUFJLEtBQUEsQUFBSyxNQUFNLENBQUMsYUFBQSxBQUFhLEdBQWIsQUFBZ0IsS0FBakIsQUFBb0IsWUFBVSxXQUE5QixBQUF1QyxXQUE1RCxBQUFVLEFBQTJELEFBQ3JFO2dCQUFNLElBQUksS0FBQSxBQUFLLE1BQU0sQ0FBQyxhQUFBLEFBQWEsR0FBYixBQUFnQixLQUFqQixBQUFvQixXQUFTLFlBQTdCLEFBQXVDLFVBQTVELEFBQVUsQUFBMEQsQUFDcEU7Z0JBQUcsQ0FBQyxJQUFJLG9CQUFMLEFBQXVCLEtBQXZCLEFBQTRCLHNCQUE1QixBQUFrRCxLQUFLLENBQUMsSUFBSSxvQkFBTCxBQUF1QixLQUF2QixBQUE0QixzQkFBdEYsQUFBNEcsR0FBRSxBQUMxRztvQkFBTSxXQUFXLEtBQUEsQUFBSyxNQUFNLENBQUMsSUFBSSxvQkFBTCxBQUF5QixLQUFyRCxBQUFpQixBQUF5QyxBQUMxRDtvQkFBTSxXQUFXLEtBQUEsQUFBSyxNQUFNLENBQUMsSUFBSSxvQkFBTCxBQUF5QixLQUFyRCxBQUFpQixBQUF5QyxBQUMxRDtvQkFBRyxLQUFBLEFBQUssSUFBSSxJQUFJLFdBQWIsQUFBd0IsbUJBQXhCLEFBQTJDLEtBQUssS0FBQSxBQUFLLElBQUksSUFBSSxXQUFiLEFBQXdCLG1CQUF4RSxBQUFnRCxBQUEyQyxLQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsR0FBNUcsQUFBbUcsQUFBWSxJQUFHLEFBRTlHOzt3QkFBTSxjQUFjLENBQUMsV0FBRCxBQUFZLEdBQUcsV0FBbkMsQUFBb0IsQUFBMEIsQUFHOUM7O3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsT0FBdEIsQUFBNkIsQUFDN0I7eUJBQUEsQUFBSyxpQkFBTCxBQUFzQixLQUF0QixBQUEyQixLQUEzQixBQUFnQyxBQUNoQzsyQkFBQSxBQUFPLEFBQ1Y7QUFFSjtBQUNEO21CQUFBLEFBQU8sQUFDVjs7OzsrQyxBQUVzQixRQUFPLEFBQzFCO2lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ1Y7Z0JBQUcsS0FBSCxBQUFRLFFBQU8sQUFDWDtvQkFBSSxJQUFJLEtBQUEsQUFBSyxPQUFMLEFBQVksU0FBUyxLQUFBLEFBQUssT0FBbEMsQUFBeUMsQUFDekM7cUJBQUEsQUFBSyxPQUFMLEFBQVksTUFBWixBQUFrQixRQUFsQixBQUF3QixBQUN4QjtxQkFBQSxBQUFLLE9BQUwsQUFBWSxNQUFaLEFBQWtCLFNBQU8sS0FBQSxBQUFLLE9BQUwsQUFBWSxjQUFaLEFBQTBCLElBQW5ELEFBQXVELEFBRTlEO0FBQ0o7Ozs7dUNBRWEsQUFDVjttQkFBTywyQkFBYSxLQUFwQixBQUFPLEFBQWtCLEFBQzVCOzs7OytCLEFBRU0sTUFBSyxBQUNSO2lCQUFBLEFBQUssVUFBTCxBQUFlLFNBQWYsQUFBd0IsQUFFeEI7O2dCQUFBLEFBQUcsTUFBSyxBQUNKO29CQUFHLEtBQUgsQUFBUSxTQUFRLEFBQ1o7QUFFQTs7d0JBQUksaUJBQWlCLDRCQUFjLEtBQWQsQUFBbUIsYUFBWSxLQUEvQixBQUFvQyxrQkFBaUIsS0FIOUQsQUFHWixBQUFxQixBQUEwRCxZQUFXLEFBRTFGOztnQ0FBWSxLQUFaLEFBQWlCLGFBQWEsS0FBQSxBQUFLLGlCQUFuQyxBQUFvRCxNQUFNLEtBQTFELEFBQStELFFBQVEsS0FBdkUsQUFBNEUsZ0JBQWdCLEtBQTVGLEFBQWlHLFdBQVcsS0FBNUcsQUFBaUgsWUFBWSxLQUE3SCxBQUFrSSxtQkFBbUIsS0FBckosQUFBMEosQUFFMUo7O3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsT0FBTyw4QkFBZ0IsS0FBN0MsQUFBNkIsQUFBcUIsQUFFckQ7QUFURCwyQkFTVSxLQUFILEFBQVEsT0FBTyxBQUdsQjs7eUJBQUEsQUFBSyxpQkFBTCxBQUFzQixPQUFLLDJCQUFhLEtBQXhDLEFBQTJCLEFBQWtCLEFBQzdDO3dCQUFJLGtCQUFpQiw0QkFBYyxLQUFkLEFBQW1CLGFBQVksS0FBL0IsQUFBb0Msa0JBQWlCLEtBSnhELEFBSWxCLEFBQXFCLEFBQTBELFlBQVcsQUFDMUY7eUJBQUEsQUFBSyxpQkFBTCxBQUFzQixVQUF0QixBQUFnQyxBQUNoQztnQ0FBWSxLQUFaLEFBQWlCLGFBQWEsS0FBQSxBQUFLLGlCQUFuQyxBQUFvRCxNQUFNLEtBQTFELEFBQStELFFBQVEsS0FBdkUsQUFBNEUsZ0JBQWdCLEtBQTVGLEFBQWlHLFdBQVcsS0FBNUcsQUFBaUgsWUFBWSxLQUE3SCxBQUFrSSxtQkFBbUIsS0FBckosQUFBMEosQUFDMUo7eUJBQUEsQUFBSyxVQUFMLEFBQWUsU0FBZixBQUF3QixBQUMzQjtBQVJNLGlCQUFBLE1BUUEsQUFDSDtBQUNBO3dCQUFJLG1CQUFpQiw0QkFBYyxLQUFkLEFBQW1CLGFBQVksS0FBL0IsQUFBb0Msa0JBQWlCLEtBRnZFLEFBRUgsQUFBcUIsQUFBMEQsWUFBVyxBQUUxRjs7Z0NBQVksS0FBWixBQUFpQixhQUFhLEtBQUEsQUFBSyxpQkFBbkMsQUFBb0QsTUFBTSxLQUExRCxBQUErRCxRQUFRLEtBQXZFLEFBQTRFLGdCQUFnQixLQUE1RixBQUFpRyxXQUFXLEtBQTVHLEFBQWlILFlBQVksS0FBN0gsQUFBa0ksbUJBQW1CLEtBQXJKLEFBQTBKLEFBRTFKOzt5QkFBQSxBQUFLLGlCQUFMLEFBQXNCLE9BQXRCLEFBQTZCLEFBQzdCO3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsVUFBdEIsQUFBZ0MsQUFDbkM7QUFDSjtBQTNCRCxtQkEyQk8sQUFDSDtvQkFBSSxtQkFBaUIsNEJBQWMsS0FBZCxBQUFtQixhQUFZLEtBQS9CLEFBQW9DLGtCQUFpQixLQUR2RSxBQUNILEFBQXFCLEFBQTBELFlBQVcsQUFDMUY7NEJBQVksS0FBWixBQUFpQixhQUFhLEtBQUEsQUFBSyxpQkFBbkMsQUFBb0QsTUFBTSxLQUExRCxBQUErRCxRQUFRLEtBQXZFLEFBQTRFLGdCQUFnQixLQUE1RixBQUFpRyxXQUFXLEtBQTVHLEFBQWlILFlBQVksS0FBN0gsQUFBa0ksbUJBQW1CLEtBQXJKLEFBQTBKLE9BQU8sS0FBakssQUFBc0ssQUFDdEs7cUJBQUEsQUFBSyxpQkFBTCxBQUFzQixPQUF0QixBQUE2QixBQUM3QjtxQkFBQSxBQUFLLGlCQUFMLEFBQXNCLFVBQXRCLEFBQWdDLEFBQ25DO0FBRUo7Ozs7NEJBOUtVLEFBQ1A7bUJBQU8sS0FBUCxBQUFZLEFBQ2Y7Ozs7NEJBRVcsQUFDUjttQkFBTyxLQUFQLEFBQVksQUFDZjs7Ozs0QkFFZSxBQUNaO21CQUFPLEtBQVAsQUFBWSxBQUNmOzs7OzRCQUVTLEFBQ047bUJBQU8sS0FBUCxBQUFZLEFBQ2Y7Ozs7OztrQkFxS1UsQTs7QUFJZixTQUFBLEFBQVMsU0FBVCxBQUFrQixRQUFsQixBQUEwQixPQUExQixBQUFpQyxRQUFqQyxBQUF5QyxZQUFXLEFBQ2hEO1FBQUksTUFBTSxPQUFBLEFBQU8sV0FBakIsQUFBVSxBQUFrQixBQUM1QjtRQUFJLFNBQVMsYUFBQSxBQUFXLElBQXhCLEFBQTRCLEFBRTVCOztRQUFBLEFBQUksY0FBSixBQUFnQixBQUNoQjtRQUFNLElBQUksQ0FBQyxRQUFELEFBQVMsS0FBbkIsQUFBd0IsQUFDeEI7UUFBTSxJQUFJLENBQUMsU0FBRCxBQUFVLEtBQXBCLEFBQXlCLEFBQ3pCO1FBQUEsQUFBSSxZQUFKLEFBQWdCLEFBQ2hCO1NBQUksSUFBSSxJQUFSLEFBQVksWUFBWSxJQUF4QixBQUE0QixHQUFHLEtBQS9CLEFBQW9DLFlBQVcsQUFDM0M7WUFBQSxBQUFJLEFBQ0o7WUFBQSxBQUFJLE9BQUosQUFBVyxHQUFYLEFBQWEsQUFDYjtZQUFBLEFBQUksT0FBSixBQUFXLEdBQVgsQUFBYSxBQUNiO1lBQUEsQUFBSSxBQUNKO1lBQUEsQUFBSSxBQUNQO0FBRUQ7O1NBQUksSUFBSSxLQUFSLEFBQVksWUFBWSxLQUF4QixBQUE0QixHQUFHLE1BQS9CLEFBQW9DLFlBQVcsQUFDM0M7WUFBQSxBQUFJLEFBQ0o7WUFBQSxBQUFJLE9BQUosQUFBVyxJQUFYLEFBQWEsQUFDYjtZQUFBLEFBQUksT0FBSixBQUFXLElBQVgsQUFBYSxBQUNiO1lBQUEsQUFBSSxBQUNKO1lBQUEsQUFBSSxBQUNQO0FBRUQ7O1NBQUksSUFBSSxNQUFSLEFBQVksWUFBWSxNQUF4QixBQUE0QixHQUFHLE9BQS9CLEFBQW9DLFlBQVcsQUFDM0M7YUFBSSxJQUFJLElBQVIsQUFBWSxZQUFZLElBQXhCLEFBQTRCLEdBQUcsS0FBL0IsQUFBb0MsWUFBVyxBQUMzQzt3QkFBQSxBQUFZLEtBQVosQUFBaUIsR0FBakIsQUFBb0IsS0FBcEIsQUFBdUIsQUFDMUI7QUFDSjtBQUNKOzs7QUFFTSxTQUFBLEFBQVMsd0JBQVQsQUFBaUMsT0FBakMsQUFBd0MsUUFBeEMsQUFBZ0QsV0FBaEQsQUFBMkQsYUFBWSxBQUMxRTtRQUFJLGNBQWMsTUFBQSxBQUFNLFFBQU4sQUFBYyxLQUFoQyxBQUFrQixBQUFtQixBQUNyQztTQUFJLElBQUksSUFBUixBQUFZLEdBQUcsSUFBZixBQUFtQixRQUFuQixBQUEyQixLQUFJLEFBQzNCO29CQUFBLEFBQVksS0FBSyxNQUFBLEFBQU0sT0FBTixBQUFhLEtBQTlCLEFBQWlCLEFBQWtCLEFBQ25DO2FBQUksSUFBSSxJQUFSLEFBQVksR0FBRyxJQUFmLEFBQW1CLE9BQW5CLEFBQTBCLEtBQUksQUFDMUI7d0JBQUEsQUFBWSxHQUFaLEFBQWUsS0FBSyxtQkFBQSxBQUFTLFdBQVQsQUFBbUIsR0FBdkMsQUFBb0IsQUFBcUIsQUFDNUM7QUFDSjtBQUlEOztXQUFBLEFBQU8sQUFDVjs7O0FBRU0sU0FBQSxBQUFTLGlCQUFULEFBQTBCLE9BQTFCLEFBQWlDLFFBQWpDLEFBQXlDLFdBQXpDLEFBQW9ELGFBQVksQUFDL0Q7UUFBSSxRQUFRLHdCQUFBLEFBQXdCLE9BQXhCLEFBQStCLFFBQS9CLEFBQXVDLFdBQW5ELEFBQVksQUFBa0QsQUFHOUQ7O1NBQUksSUFBSSxJQUFSLEFBQVksR0FBRyxJQUFmLEFBQW1CLFFBQW5CLEFBQTJCLEtBQUksQUFFM0I7O2FBQUksSUFBSSxJQUFSLEFBQVksR0FBRyxJQUFmLEFBQW1CLE9BQW5CLEFBQTBCLEtBQUksQUFFMUI7O2dCQUFJLGdCQUFnQixpQkFBQSxBQUFpQixPQUFqQixBQUF3QixPQUF4QixBQUErQixRQUEvQixBQUF1QyxHQUF2QyxBQUEwQyxHQUZwQyxBQUUxQixBQUFvQixBQUE2QyxjQUFhLEFBQzlFO2dCQUFJLG1DQUFtQyxvQ0FBdkMsQUFBdUMsQUFBb0MsQUFDM0U7a0JBQUEsQUFBTSxHQUFOLEFBQVMsR0FBVCxBQUFZLGFBQVosQUFBeUIsdUJBQXpCLEFBQWdELEFBQ2hEO2dCQUFJLHFDQUFxQyxzQ0FBc0MsTUFBQSxBQUFNLEdBQXJGLEFBQXlDLEFBQXNDLEFBQVMsQUFDeEY7a0JBQUEsQUFBTSxHQUFOLEFBQVMsR0FBVCxBQUFZLGFBQVosQUFBeUIsbUJBQXpCLEFBQTRDLEFBRS9DO0FBQ0o7QUFDRDtXQUFBLEFBQU8sQUFDZDs7O0FBRU0sU0FBQSxBQUFTLGlCQUFULEFBQTBCLGFBQTFCLEFBQXVDLE9BQXZDLEFBQThDLFFBQTlDLEFBQXNELEdBQXRELEFBQXlELEdBQXpELEFBQTRELGFBQVksQUFDM0U7UUFBSSxXQUFKLEFBQWEsQUFDYjtTQUFJLElBQUksSUFBRSxDQUFWLEFBQVcsR0FBRSxJQUFiLEFBQWUsR0FBZixBQUFpQixLQUFJLEFBQ2pCO2FBQUksSUFBSSxJQUFFLENBQVYsQUFBVyxHQUFFLElBQWIsQUFBZSxHQUFmLEFBQWlCLEtBQUksQUFDakI7Z0JBQUksS0FBSyxJQUFULEFBQVc7Z0JBQUUsS0FBSyxJQUFsQixBQUFvQixBQUNwQjtnQkFBQSxBQUFHLGFBQVksQUFDWDtvQkFBRyxNQUFBLEFBQU0sS0FBSyxLQUFYLEFBQWdCLFVBQVUsTUFBMUIsQUFBZ0MsS0FBSyxLQUFyQyxBQUEwQyxTQUFTLEVBQUUsTUFBQSxBQUFLLEtBQUssTUFBbEUsQUFBc0QsQUFBa0IsSUFBRyxBQUN2RTs2QkFBQSxBQUFTLEtBQUssWUFBQSxBQUFZLElBQTFCLEFBQWMsQUFBZ0IsQUFDakM7QUFDSjtBQUpELG1CQUlPLEFBQ0g7b0JBQUcsS0FBSCxBQUFNLEdBQUUsS0FBRyxTQUFYLEFBQVEsQUFBVSxPQUNiLElBQUcsTUFBSCxBQUFTLFFBQU8sS0FBQSxBQUFHLEFBQ3hCO29CQUFHLEtBQUgsQUFBTSxHQUFFLEtBQUcsUUFBWCxBQUFRLEFBQVMsT0FDWixJQUFHLE1BQUgsQUFBUyxPQUFNLEtBQUEsQUFBRyxBQUN2QjtvQkFBRyxFQUFFLE1BQUEsQUFBSyxLQUFLLE1BQWYsQUFBRyxBQUFrQixJQUFHLEFBQ3BCOzZCQUFBLEFBQVMsS0FBSyxZQUFBLEFBQVksSUFBMUIsQUFBYyxBQUFnQixBQUNqQztBQUNKO0FBQ0o7QUFDSjtBQUNEO2VBQVcseUJBQVgsQUFBVyxBQUFXLEFBQ3RCO1dBQUEsQUFBTyxBQUNWOzs7QUFFTSxTQUFBLEFBQVMsb0NBQVQsQUFBNkMsZUFBYyxBQUM5RDtRQUFJLGdCQUFKLEFBQW9CLEFBRXBCOztrQkFBQSxBQUFjLFFBQVEsYUFBQTs2QkFDbEIsQUFBYyxLQUFLLFVBQUEsQUFBUyxLQUFJLEFBQzVCO29CQUFBLEFBQVEsSUFBSSxFQUFaLEFBQVksQUFBRSxnQkFBZ0IsRUFBOUIsQUFBOEIsQUFBRSxBQUNuQztBQUhpQixBQUNsQixTQUFBO0FBREosQUFJQTtXQUFBLEFBQU8sQUFDVjs7O0FBR00sU0FBQSxBQUFTLHNDQUFULEFBQStDLE1BQUssQUFDdkQ7UUFBSSxnQkFBSixBQUFvQixBQUNwQjtrQkFBQSxBQUFjLEtBQUssWUFBVSxBQUV6Qjs7YUFBQSxBQUFLLFVBQVUsS0FBQSxBQUFLLFVBQXBCLEFBQThCLFVBQTlCLEFBQXdDLEFBQzNDO0FBSEQsQUFJQTtXQUFBLEFBQU8sQUFDVjs7O0FBRU0sU0FBQSxBQUFTLGFBQVQsQUFBc0IsUUFBdEIsQUFBOEIsT0FBOUIsQUFBcUMsUUFBckMsQUFBNkMsZ0JBQTdDLEFBQTZELE9BQU0sQUFDdEU7WUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1dBQUEsQUFBTyxRQUFPLENBQUMsUUFBRCxBQUFTLEtBQVYsQUFBZSxpQkFBNUIsQUFBOEMsQUFDOUM7V0FBQSxBQUFPLFNBQVEsQ0FBQyxTQUFELEFBQVUsS0FBWCxBQUFnQixpQkFBOUIsQUFBZ0QsQUFDaEQ7UUFBSSxJQUFJLE9BQUEsQUFBTyxTQUFTLE9BQXhCLEFBQStCLEFBQy9CO1dBQUEsQUFBTyxNQUFQLEFBQWEsUUFBYixBQUFtQixBQUNuQjtXQUFBLEFBQU8sTUFBUCxBQUFhLFNBQU8sT0FBQSxBQUFPLGNBQVAsQUFBcUIsSUFBekMsQUFBNkMsQUFFN0M7O1FBQUksTUFBTSxPQUFBLEFBQU8sV0FBakIsQUFBVSxBQUFrQixBQUM1QjtRQUFBLEFBQUksTUFBSixBQUFVLE9BQVYsQUFBaUIsQUFDakI7V0FBQSxBQUFPLEFBQ1Y7OztBQUVELFNBQUEsQUFBUyxXQUFULEFBQW9CLFVBQVUsQUFDMUI7UUFBQSxBQUFJLEFBRUo7O1dBQU8sU0FBUCxBQUFPLEFBQVMsQUFDaEI7U0FBQSxBQUFLLFdBQUwsQUFBZ0IsTUFBaEIsQUFBc0IsVUFBdEIsQUFBZ0MsVUFBaEMsQUFBMEMsR0FBMUMsQUFBNkMsQUFFN0M7O1dBQUEsQUFBTyxBQUNWOzs7QUFHRCxTQUFBLEFBQVMsWUFBVCxBQUFxQixTQUFyQixBQUE4QixHQUE5QixBQUFpQyxHQUFqQyxBQUFvQyxRQUFRLEFBQ3hDO1lBQUEsQUFBUSxBQUNSO1lBQUEsQUFBUSxBQUNSO1lBQUEsQUFBUSxJQUFSLEFBQVksR0FBWixBQUFlLEdBQWYsQUFBa0IsUUFBbEIsQUFBMEIsR0FBRyxLQUFBLEFBQUssS0FBbEMsQUFBdUMsR0FBdkMsQUFBMEMsQUFDMUM7WUFBQSxBQUFRLGNBQVIsQUFBc0IsQUFDdEI7WUFBQSxBQUFRLFlBQVIsQUFBb0IsQUFDcEI7WUFBQSxBQUFRLEFBQ1I7WUFBQSxBQUFRLEFBQ1I7WUFBQSxBQUFRLEFBQ1g7O0FBQ0QsU0FBQSxBQUFTLFlBQVQsQUFBcUIsYUFBckIsQUFBa0MsWUFBbEMsQUFBOEMsUUFBOUMsQUFBc0QsWUFBdEQsQUFBa0UsT0FBbEUsQUFBeUUsUUFBekUsQUFBaUYsZ0JBQWpGLEFBQWlHLE9BQWpHLEFBQXdHLGlCQUFnQixBQUNwSDtBQUNBO2VBQUEsQUFBVyxRQUFRLGdCQUFRLEFBQ3ZCO0FBQ0E7WUFBSSxJQUFJLEtBQVIsQUFBUSxBQUFLLEFBQ2I7WUFBSSxJQUFJLEtBQVIsQUFBUSxBQUFLLEFBQ2I7WUFBQSxBQUFHLGlCQUFnQixBQUNmO2dCQUFHLEtBQUEsQUFBSyxNQUFPLElBQUksUUFBaEIsQUFBd0IsTUFBTSxLQUE5QixBQUFtQyxNQUFPLElBQUksU0FBakQsQUFBMEQsSUFBRyxBQUV6RDs7cUJBQUEsQUFBSyxBQUNMO3FCQUFBLEFBQUssQUFDTDtvQkFBRyxZQUFZLEtBQVosQUFBWSxBQUFLLElBQUksS0FBckIsQUFBcUIsQUFBSyxJQUExQixBQUE4QixVQUFqQyxBQUEyQyxHQUFFLEFBQ3pDOzZCQUFTLENBQUEsQUFBQyxHQUFWLEFBQVMsQUFBRyxJQUFaLEFBQWdCLFFBQWhCLEFBQXdCLFlBQVksYUFBcEMsQUFBaUQsR0FBakQsQUFBb0QsU0FBcEQsQUFBNkQsZ0JBQTdELEFBQTZFLEFBQ2hGO0FBRkQsdUJBRU8sQUFDSDs2QkFBUyxDQUFBLEFBQUMsR0FBVixBQUFTLEFBQUcsSUFBWixBQUFnQixRQUFoQixBQUF3QixZQUFZLGFBQXBDLEFBQWlELEdBQWpELEFBQW9ELFFBQXBELEFBQTRELGdCQUE1RCxBQUE0RSxBQUMvRTtBQUNKO0FBQ0o7QUFYRCxlQVdPLEFBQ0g7Z0JBQUcsWUFBWSxLQUFaLEFBQVksQUFBSyxJQUFJLEtBQXJCLEFBQXFCLEFBQUssSUFBMUIsQUFBOEIsVUFBakMsQUFBMkMsR0FBRSxBQUN6Qzt5QkFBQSxBQUFTLE1BQVQsQUFBZSxRQUFmLEFBQXVCLFlBQVksYUFBbkMsQUFBZ0QsR0FBaEQsQUFBbUQsU0FBbkQsQUFBNEQsZ0JBQTVELEFBQTRFLEFBQy9FO0FBRkQsbUJBRU8sQUFDSDt5QkFBQSxBQUFTLE1BQVQsQUFBZSxRQUFmLEFBQXVCLFlBQVksYUFBbkMsQUFBZ0QsR0FBaEQsQUFBbUQsUUFBbkQsQUFBMkQsZ0JBQTNELEFBQTJFLEFBQzlFO0FBQ0o7QUFFSjtBQXZCRCxBQXdCSDs7O0FBSUQsU0FBQSxBQUFTLFNBQVQsQUFBa0IsTUFBbEIsQUFBd0IsUUFBeEIsQUFBZ0MsWUFBaEMsQUFBNEMsUUFBNUMsQUFBb0QsT0FBcEQsQUFBMkQsZ0JBQTNELEFBQTJFLE9BQU0sQUFDN0U7UUFBTSxhQUFjLFNBQXBCLEFBQTZCLEFBQzdCO1FBQU0sVUFBVSxPQUFBLEFBQU8sV0FBdkIsQUFBZ0IsQUFBa0IsQUFDbEM7UUFBTSxJQUFJLENBQUMsS0FBQSxBQUFLLEtBQU4sQUFBVyxLQUFyQixBQUEwQixBQUMxQjtRQUFNLElBQUksQ0FBQyxLQUFBLEFBQUssS0FBTixBQUFXLEtBQXJCLEFBQTBCLEFBQzFCO1FBQUcsVUFBSCxBQUFhLFNBQVEsQUFDakI7Z0JBQUEsQUFBUSxBQUNSO2dCQUFBLEFBQVEsYUFBUixBQUFxQixnQkFBZ0IsQ0FBQyxJQUFELEFBQUssVUFBMUMsQUFBb0QsT0FBTyxDQUFDLElBQUQsQUFBSyxVQUFoRSxBQUEwRSxBQUMxRTtnQkFBQSxBQUFRLEFBQ1g7QUFKRCxXQUlPLEFBQ0g7Z0JBQUEsQUFBUSxBQUNSO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLElBQVIsQUFBWSxHQUFaLEFBQWUsR0FBZixBQUFrQixZQUFsQixBQUE4QixHQUFHLEtBQUEsQUFBSyxLQUF0QyxBQUEyQyxHQUEzQyxBQUE4QyxBQUM5QztnQkFBQSxBQUFRLFlBQVIsQUFBb0IsQUFDcEI7Z0JBQUEsQUFBUSxBQUNSO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLEFBQ1g7QUFDSjs7O0FBRUQsU0FBQSxBQUFTLGtCQUFULEFBQTJCLEdBQUcsQUFDMUI7UUFBQSxBQUFJLEFBQ0o7UUFBQSxBQUFJLEFBQ0o7UUFBQSxBQUFJLEFBQ0o7UUFBQSxBQUFJLEFBRUo7O1FBQUksRUFBQSxBQUFFLFNBQUYsQUFBVyxhQUFhLEVBQUEsQUFBRSxTQUE5QixBQUF1QyxXQUFXLEFBQzlDO1lBQUksRUFBSixBQUFNLEFBQ047WUFBSSxFQUFKLEFBQU0sQUFDVDtBQUhELFdBR08sQUFFSDs7WUFBSSxFQUFBLEFBQUUsVUFBVSxTQUFBLEFBQVMsS0FBckIsQUFBMEIsYUFBYSxTQUFBLEFBQVMsZ0JBQXBELEFBQW9FLEFBQ3BFO1lBQUksRUFBQSxBQUFFLFVBQVUsU0FBQSxBQUFTLEtBQXJCLEFBQTBCLFlBQVksU0FBQSxBQUFTLGdCQUFuRCxBQUFtRSxBQUN0RTtBQUNEO1NBQUssRUFBTCxBQUFPLEFBQ1A7U0FBSyxFQUFMLEFBQU8sQUFDUDtXQUFPLENBQUEsQUFBQyxHQUFELEFBQUksR0FBSixBQUFPLElBQWQsQUFBTyxBQUFXLEFBQ3JCOzs7QUFFRCxTQUFBLEFBQVMsYUFBVCxBQUFzQixHQUFHLEFBQ3JCO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUVKOztRQUFJLEVBQUosQUFBTSxBQUNOO1FBQUksRUFBSixBQUFNLEFBQ047V0FBTyxDQUFBLEFBQUMsR0FBUixBQUFPLEFBQUksQUFDZCIsImZpbGUiOiJHYW1lR3JpZC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9