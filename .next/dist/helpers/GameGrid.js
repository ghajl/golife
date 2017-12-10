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
            // console.log(width)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXEdhbWVHcmlkLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNlbGxzVmFsdWVzTWF0cml4IiwiY3JlYXRlR2FtZU1hdHJpeCIsImdldE5laWdoYm9yc0xpc3QiLCJnZXROZWlnaGJvclN0YXRlQ2hhbmdlTGlzdGVuZXJzTGlzdCIsImdldE5laWdoYm9yc051bWJlckNoYW5nZUxpc3RlbmVyc0xpc3QiLCJjcmVhdGVDYW52YXMiLCJHYW1lR3JpZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNxdWFyZVNpemUiLCJpc09wZW5Vbml2ZXJzZSIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJncmlkU3F1YXJlU2l6ZSIsInZpc2libGVHcmlkV2lkdGgiLCJ2aXNpYmxlR3JpZEhlaWdodCIsImdyaWROYW1lIiwiZ3JpZElzT3BlbiIsImNoZWNrTGlzdCIsIm9yaWdpbmFsQ2VsbEltYWdlIiwiY2VsbHNTdGF0ZUNoYW5nZSIsImxpc3QiLCJpc0ZpcnN0IiwidmFsdWVzQm9hcmQiLCJjYW52YXMiLCJjdXJyZW50TGl2ZUNlbGxzIiwiaXNNYW51YWxTdGF0ZSIsInJhdGlvIiwiZHJhd0dyaWQiLCJidWZmZXJDYW52YXMiLCJjb3B5Q2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdldEltYWdlRGF0YSIsInNhdmVkQ2VsbHNMaXN0IiwibWFwIiwiY2VsbCIsImluZGV4IiwicGF0dGVybnNMaXN0IiwibW9kZSIsIm5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0IiwicGF0dGVybiIsImNsZWFyIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbnZMZWZ0IiwiTWF0aCIsImZsb29yIiwibGVmdCIsImNudlJpZ2h0IiwicmlnaHQiLCJjbnZUb3AiLCJ0b3AiLCJjbnZCb3R0b20iLCJib3R0b20iLCJjdXJyZW50U3F1YXJlU2l6ZSIsInIiLCJib2FyZFdpZHRoIiwiYm9hcmRIZWlnaHQiLCJ4Iiwicm91bmQiLCJnZXRDdXJzb3JQb3MiLCJ5IiwibmVhcmVzdFgiLCJuZWFyZXN0WSIsInBvdyIsImNsaWNrZWRDZWxsIiwicHVzaCIsInN0eWxlIiwib2Zmc2V0V2lkdGgiLCJsZW5ndGgiLCJkcmF3aW5nIiwiY2hhbmdlQ2VsbExpc3QiLCJ1cGRhdGVUYWJsZSIsInJhZGl1cyIsInN0cm9rZVN0eWxlIiwidyIsImgiLCJsaW5lV2lkdGgiLCJpIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiaiIsImRyYXdfY2lyY2xlIiwiQXJyYXkiLCJmaWxsIiwiYm9hcmQiLCJuZWlnaGJvcnNMaXN0IiwibmVpZ2hib3JTdGF0ZUNoYW5nZUxpc3RlbmVyc0xpc3QiLCJhZGRMaXN0ZW5lcnMiLCJuZWlnaGJvcnNOdW1iZXJDaGFuZ2VMaXN0ZW5lcnNMaXN0IiwiWSIsIlgiLCJjZWxsTGlzdCIsInRYIiwidFkiLCJsaXN0ZW5lcnNMaXN0IiwiZm9yRWFjaCIsInZhbCIsImMiLCJhZGROZWlnaGJvciIsInJlbW92ZU5laWdoYm9yIiwiY29uc29sZSIsImxvZyIsInNjYWxlIiwib3JpZ2luYWwiLCJjb3B5IiwiY2xvbmVOb2RlIiwiZHJhd0ltYWdlIiwiY29udGV4dCIsInNhdmUiLCJhcmMiLCJQSSIsImdsb2JhbEFscGhhIiwiZmlsbFN0eWxlIiwicmVzdG9yZSIsImNoYW5nZUxpc3QiLCJlbXB0eUNlbGxJbWFnZSIsInN0YXRlIiwiZHJhd0NlbGwiLCJzaGFwZSIsImNlbGxSYWRpdXMiLCJwdXRJbWFnZURhdGEiLCJnZXRDdXJzb3JQb3NpdGlvbiIsIngxIiwieDIiLCJwYWdlWCIsInVuZGVmaW5lZCIsInBhZ2VZIiwiY2xpZW50WCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbExlZnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRZIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztRQXFQZ0IsQSwwQkFBQSxBO1EsQUFjQSxtQkFBQSxBO1EsQUFtQkEsbUIsQUFBQTtRLEFBd0JB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MUI7UUFBTSxJQUFJLENBQUMsS0FBQSxBQUFLLEtBQU4sQUFBVyxLQUFyQixBQUEwQixBQUMxQjtRQUFHLFVBQUgsQUFBYSxTQUFRLEFBQ2pCO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLGFBQVIsQUFBcUIsZ0JBQWdCLENBQUMsSUFBRCxBQUFLLFVBQTFDLEFBQW9ELE9BQU8sQ0FBQyxJQUFELEFBQUssVUFBaEUsQUFBMEUsQUFDMUU7Z0JBQUEsQUFBUSxBQUNYO0FBSkQsV0FJTyxBQUNIO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxJQUFSLEFBQVksR0FBWixBQUFlLEdBQWYsQUFBa0IsWUFBbEIsQUFBOEIsR0FBRyxLQUFBLEFBQUssS0FBdEMsQUFBMkMsR0FBM0MsQUFBOEMsQUFDOUM7Z0JBQUEsQUFBUSxZQUFSLEFBQW9CLEFBQ3BCO2dCQUFBLEFBQVEsQUFDUjtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxBQUNYO0FBQ0o7OztBQUVELFNBQUEsQUFBUyxrQkFBVCxBQUEyQixHQUFHLEFBQzFCO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUVKOztRQUFJLEVBQUEsQUFBRSxTQUFGLEFBQVcsYUFBYSxFQUFBLEFBQUUsU0FBOUIsQUFBdUMsV0FBVyxBQUM5QztZQUFJLEVBQUosQUFBTSxBQUNOO1lBQUksRUFBSixBQUFNLEFBQ1Q7QUFIRCxXQUdPLEFBRUg7O1lBQUksRUFBQSxBQUFFLFVBQVUsU0FBQSxBQUFTLEtBQXJCLEFBQTBCLGFBQWEsU0FBQSxBQUFTLGdCQUFwRCxBQUFvRSxBQUNwRTtZQUFJLEVBQUEsQUFBRSxVQUFVLFNBQUEsQUFBUyxLQUFyQixBQUEwQixZQUFZLFNBQUEsQUFBUyxnQkFBbkQsQUFBbUUsQUFDdEU7QUFDRDtTQUFLLEVBQUwsQUFBTyxBQUNQO1NBQUssRUFBTCxBQUFPLEFBQ1A7V0FBTyxDQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxJQUFkLEFBQU8sQUFBVyxBQUNyQjs7O0FBRUQsU0FBQSxBQUFTLGFBQVQsQUFBc0IsR0FBRyxBQUNyQjtRQUFBLEFBQUksQUFDSjtRQUFBLEFBQUksQUFFSjs7UUFBSSxFQUFKLEFBQU0sQUFDTjtRQUFJLEVBQUosQUFBTSxBQUNOO1dBQU8sQ0FBQSxBQUFDLEdBQVIsQUFBTyxBQUFJLEFBQ2QiLCJmaWxlIjoiR2FtZUdyaWQuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==