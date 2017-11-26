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

        // this.nextGenerationChangeCellsList=null;
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
            // this.nextGenerationChangeCellsList=null;
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
            // this.canvas.width=((this.visibleGridWidth + 1) * this.gridSquareSize) * this.ratio;
            // this.canvas.height=((this.visibleGridHeight + 1) * this.gridSquareSize) * this.ratio;
            // let r = this.canvas.height / this.canvas.width;
            // this.canvas.style.width="100%";
            // this.canvas.style.height=this.canvas.offsetWidth * r + "px";

            // this.ctx.scale(this.ratio, this.ratio)    
            drawGrid(this.canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize);
            var bufferCanvas = copyCanvas(this.canvas);
            var ctx = bufferCanvas.getContext('2d');
            this.originalCellImage = ctx.getImageData(this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio, this.gridSquareSize * this.ratio);

            this.valuesBoard = createGameMatrix(this.gridWidth, this.gridHeight, this.checkList, this.gridIsOpen);

            //  = createCellsValuesMatrix(this.gridWidth, this.gridHeight, this.checkList, this.gridIsOpen);


            // for(let i = 0; i < height; i++){

            //     for(let j = 0; j < width; j++){

            //         let neighborsList = getNeighborsList(this.valuesBoard, this.gridWidth, this.gridHeight, i, j, this.gridIsOpen);//  setListeners(i,j);
            //         let neighborStateChangeListenersList = getNeighborStateChangeListenersList(neighborsList);
            //         this.valuesBoard[i][j].addListeners("neighborStateChange", neighborStateChangeListenersList);
            //         let neighborsNumberChangeListenersList = getNeighborsNumberChangeListenersList(this.valuesBoard[i][j]);
            //         this.valuesBoard[i][j].addListeners("neighborsChange", neighborsNumberChangeListenersList);

            //     }
            // }
        }

        //= componentdidmount

    }, {
        key: 'makeBoard',
        value: function makeBoard(width, height, squareSize, ratio, canvas, savedCellsList) {

            // this.canvas = canvas;

            this.canvas = createCanvas(canvas, width, height, squareSize, ratio);
            // this.canvas.width=((width + 1) * squareSize) * ratio;

            // this.canvas.height=((height + 1) * squareSize) * ratio;     
            // let r = this.canvas.height / this.canvas.width;
            // this.canvas.style.width="100%";
            // this.canvas.style.height=this.canvas.offsetWidth * r + "px";
            // this.ratio = ratio;
            // this.ctx = this.canvas.getContext('2d');
            // this.ctx.scale(ratio, ratio)
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
                nextGenerationChangeCellsList = (0, _helpers.adjustToSize)(patternsList[index - 1].pattern, this.gridHeight, this.gridWidth);
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

// eighborsList.forEach(c => valuesBoard[i][j].addListener("neighborStateChange",function(val){
//             val===1?c.addNeighbor():c.removeNeighbor();
//         }));

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
// function setListeners(Y,X){

//     const cellList=[];
//     for(let i=-1;i<2;i++){
//         for(let j=-1;j<2;j++){
//             let tX = X+j,tY = Y+i;
//             if(this.gridIsOpen){
//                 if(tY >= 0 && tY < this.gridHeight && tX >= 0 && tX < this.gridWidth && !(i ===0 && j === 0)){
//                     cellList.push(this.valuesBoard[tY][tX]);
//                 }
//             } else {
//                 if(tY<0)tY=this.gridHeight-1;
//                 else if(tY >= this.gridHeight)tY=0;
//                 if(tX<0)tX=this.gridWidth-1;
//                 else if(tX >= this.gridWidth)tX=0;
//                 if(!(i ===0 && j === 0)){
//                     cellList.push(this.valuesBoard[tY][tX]);
//                 }                    
//             }
//         }
//     }


//     cellList.forEach(c => this.valuesBoard[Y][X].addListener("neighborStateChange",function(val){
//         val===1?c.addNeighbor():c.removeNeighbor();
//     }));

//     var c = this.valuesBoard[Y][X];
//     this.valuesBoard[Y][X].addListener("neighborsChange",function(){

//         c.checkList[c.checkList.length] = c;
//     })
// }


function draw_circle(context, x, y, radius) {
    context.save();
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.globalAlpha = 0.3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXEdhbWVHcmlkLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNlbGxzVmFsdWVzTWF0cml4IiwiY3JlYXRlR2FtZU1hdHJpeCIsImdldE5laWdoYm9yc0xpc3QiLCJnZXROZWlnaGJvclN0YXRlQ2hhbmdlTGlzdGVuZXJzTGlzdCIsImdldE5laWdoYm9yc051bWJlckNoYW5nZUxpc3RlbmVyc0xpc3QiLCJjcmVhdGVDYW52YXMiLCJHYW1lR3JpZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNxdWFyZVNpemUiLCJpc09wZW5Vbml2ZXJzZSIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJncmlkU3F1YXJlU2l6ZSIsInZpc2libGVHcmlkV2lkdGgiLCJ2aXNpYmxlR3JpZEhlaWdodCIsImdyaWROYW1lIiwiZ3JpZElzT3BlbiIsImNoZWNrTGlzdCIsIm9yaWdpbmFsQ2VsbEltYWdlIiwiY2VsbHNTdGF0ZUNoYW5nZSIsImxpc3QiLCJpc0ZpcnN0IiwidmFsdWVzQm9hcmQiLCJjYW52YXMiLCJjdXJyZW50TGl2ZUNlbGxzIiwiaXNNYW51YWxTdGF0ZSIsInJhdGlvIiwiZHJhd0dyaWQiLCJidWZmZXJDYW52YXMiLCJjb3B5Q2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdldEltYWdlRGF0YSIsInNhdmVkQ2VsbHNMaXN0IiwibWFwIiwiY2VsbCIsImluZGV4IiwicGF0dGVybnNMaXN0IiwibW9kZSIsIm5leHRHZW5lcmF0aW9uQ2hhbmdlQ2VsbHNMaXN0IiwicGF0dGVybiIsImNsZWFyIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbnZMZWZ0IiwiTWF0aCIsImZsb29yIiwibGVmdCIsImNudlJpZ2h0IiwicmlnaHQiLCJjbnZUb3AiLCJ0b3AiLCJjbnZCb3R0b20iLCJib3R0b20iLCJjdXJyZW50U3F1YXJlU2l6ZSIsInIiLCJib2FyZFdpZHRoIiwiYm9hcmRIZWlnaHQiLCJ4Iiwicm91bmQiLCJnZXRDdXJzb3JQb3MiLCJ5IiwibmVhcmVzdFgiLCJuZWFyZXN0WSIsInBvdyIsImNsaWNrZWRDZWxsIiwicHVzaCIsInN0eWxlIiwib2Zmc2V0V2lkdGgiLCJsZW5ndGgiLCJkcmF3aW5nIiwiY2hhbmdlQ2VsbExpc3QiLCJ1cGRhdGVUYWJsZSIsInJhZGl1cyIsInN0cm9rZVN0eWxlIiwidyIsImgiLCJsaW5lV2lkdGgiLCJpIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiaiIsImRyYXdfY2lyY2xlIiwiQXJyYXkiLCJmaWxsIiwiYm9hcmQiLCJuZWlnaGJvcnNMaXN0IiwibmVpZ2hib3JTdGF0ZUNoYW5nZUxpc3RlbmVyc0xpc3QiLCJhZGRMaXN0ZW5lcnMiLCJuZWlnaGJvcnNOdW1iZXJDaGFuZ2VMaXN0ZW5lcnNMaXN0IiwiWSIsIlgiLCJjZWxsTGlzdCIsInRYIiwidFkiLCJsaXN0ZW5lcnNMaXN0IiwiZm9yRWFjaCIsInZhbCIsImMiLCJhZGROZWlnaGJvciIsInJlbW92ZU5laWdoYm9yIiwic2NhbGUiLCJvcmlnaW5hbCIsImNvcHkiLCJjbG9uZU5vZGUiLCJkcmF3SW1hZ2UiLCJjb250ZXh0Iiwic2F2ZSIsImFyYyIsIlBJIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJyZXN0b3JlIiwiY2hhbmdlTGlzdCIsImVtcHR5Q2VsbEltYWdlIiwic3RhdGUiLCJkcmF3Q2VsbCIsInNoYXBlIiwiY2VsbFJhZGl1cyIsInB1dEltYWdlRGF0YSIsImdldEN1cnNvclBvc2l0aW9uIiwieDEiLCJ4MiIsInBhZ2VYIiwidW5kZWZpbmVkIiwicGFnZVkiLCJjbGllbnRYIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFkiLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1FBMlJnQixBLDBCLEFBQUE7UUFjQSxBLG1CLEFBQUE7USxBQW1CQSxtQkFBQSxBO1EsQUF3QkEsc0MsQUFBQTtRQWNBLEEs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O0FBSEQsV0FHTyxBQUVIOztZQUFJLEVBQUEsQUFBRSxVQUFVLFNBQUEsQUFBUyxLQUFyQixBQUEwQixhQUFhLFNBQUEsQUFBUyxnQkFBcEQsQUFBb0UsQUFDcEU7WUFBSSxFQUFBLEFBQUUsVUFBVSxTQUFBLEFBQVMsS0FBckIsQUFBMEIsWUFBWSxTQUFBLEFBQVMsZ0JBQW5ELEFBQW1FLEFBQ3RFO0FBQ0Q7U0FBSyxFQUFMLEFBQU8sQUFDUDtTQUFLLEVBQUwsQUFBTyxBQUNQO1dBQU8sQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFKLEFBQU8sSUFBZCxBQUFPLEFBQVcsQUFDckI7OztBQUVELFNBQUEsQUFBUyxhQUFULEFBQXNCLEdBQUcsQUFDckI7UUFBQSxBQUFJLEFBQ0o7UUFBQSxBQUFJLEFBRUo7O1FBQUksRUFBSixBQUFNLEFBQ047UUFBSSxFQUFKLEFBQU0sQUFDTjtXQUFPLENBQUEsQUFBQyxHQUFSLEFBQU8sQUFBSSxBQUNkIiwiZmlsZSI6IkdhbWVHcmlkLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=