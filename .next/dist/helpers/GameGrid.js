'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameGrid = function () {
    function GameGrid(name, width, height, squareSize) {
        var isOpen = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        (0, _classCallCheck3.default)(this, GameGrid);

        this.gridWidth = width;
        this.gridHeight = height;
        this.gridSquareSize = squareSize;
        this.visibleGridWidth = width;
        this.visibleGridHeight = height;
        this.gridName = name;
        this.gridIsOpen = isOpen;
        this.checkList = [];
        this.originalCellImage = null;

        this.nextGenerationChangeCellsList = null;
        this.nextGeneration = {
            list: null,
            isFirst: true
        };
        if (this.gridIsOpen) {
            this.gridWidth = this.gridWidth + 40;
            this.gridHeight = this.gridHeight + 40;
        }
        this.valuesBoard = Array(this.gridHeight).fill(null);
        for (var i = 0; i < this.gridHeight; i++) {
            this.valuesBoard[i] = Array(this.gridWidth).fill(null);
            for (var j = 0; j < this.gridWidth; j++) {
                this.valuesBoard[i][j] = new _Cell2.default(this.checkList, i, j);
            }
        }
        for (var _i = 0; _i < this.gridHeight; _i++) {

            for (var _j = 0; _j < this.gridWidth; _j++) {

                this.setListeners(_i, _j);
            }
        }
    }

    (0, _createClass3.default)(GameGrid, [{
        key: 'setListeners',
        value: function setListeners(Y, X) {
            var _this = this;

            var cellList = [];
            for (var i = -1; i < 2; i++) {
                for (var j = -1; j < 2; j++) {
                    var tX = X + j,
                        tY = Y + i;
                    if (this.gridIsOpen) {
                        if (tY >= 0 && tY < this.gridHeight && tX >= 0 && tX < this.gridWidth && !(i === 0 && j === 0)) {
                            cellList.push(this.valuesBoard[tY][tX]);
                        }
                    } else {
                        if (tY < 0) tY = this.gridHeight - 1;else if (tY >= this.gridHeight) tY = 0;
                        if (tX < 0) tX = this.gridWidth - 1;else if (tX >= this.gridWidth) tX = 0;
                        if (!(i === 0 && j === 0)) {
                            cellList.push(this.valuesBoard[tY][tX]);
                        }
                    }
                }
            }

            cellList.forEach(function (c) {
                return _this.valuesBoard[Y][X].addListener("neighborStateChange", function (val) {
                    val === 1 ? c.addNeighbor() : c.removeNeighbor();
                });
            });

            var c = this.valuesBoard[Y][X];
            this.valuesBoard[Y][X].addListener("neighborsChange", function () {

                c.checkList[c.checkList.length] = c;
            });
        }
    }, {
        key: 'reload',
        value: function reload(width, height, squareSize, canvas, isOpen) {
            this.checkList = [];
            this.nextGenerationChangeCellsList = null;
            this.nextGeneration = {
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
            this.gridIsOpen = isOpen;
            if (this.gridIsOpen) {
                this.gridWidth = this.gridWidth + 40;
                this.gridHeight = this.gridHeight + 40;
            }
            this.canvas.width = (this.visibleGridWidth + 1) * this.gridSquareSize * this.ratio;
            this.canvas.height = (this.visibleGridHeight + 1) * this.gridSquareSize * this.ratio;
            var r = this.canvas.height / this.canvas.width;
            this.canvas.style.width = "100%";
            this.canvas.style.height = this.canvas.offsetWidth * r + "px";

            this.ctx = this.canvas.getContext('2d');
            this.ctx.scale(this.ratio, this.ratio);
            drawGrid(this.canvas, this.visibleGridWidth, this.visibleGridHeight, this.gridSquareSize);
            this.originalCellImage = this.ctx.getImageData(this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio / 2, this.gridSquareSize * this.ratio, this.gridSquareSize * this.ratio);
            this.valuesBoard = Array(this.gridHeight).fill(null);
            for (var i = 0; i < this.gridHeight; i++) {
                this.valuesBoard[i] = Array(this.gridWidth).fill(null);
                for (var j = 0; j < this.gridWidth; j++) {
                    this.valuesBoard[i][j] = new _Cell2.default(this.checkList, i, j);
                }
            }
            for (var _i2 = 0; _i2 < this.gridHeight; _i2++) {

                for (var _j2 = 0; _j2 < this.gridWidth; _j2++) {

                    this.setListeners(_i2, _j2);
                }
            }
        }

        //= componentdidmount

    }, {
        key: 'makeBoard',
        value: function makeBoard(width, height, squareSize, ratio, canvas, liveCellsList, screen) {
            this.canvas = canvas;
            this.canvas.width = (width + 1) * squareSize * ratio;

            this.canvas.height = (height + 1) * squareSize * ratio;
            var r = this.canvas.height / this.canvas.width;
            this.canvas.style.width = "100%";
            this.canvas.style.height = this.canvas.offsetWidth * r + "px";
            this.ratio = ratio;
            this.ctx = this.canvas.getContext('2d');
            this.ctx.scale(ratio, ratio);

            drawGrid(this.canvas, width, height, squareSize);
            this.originalCellImage = this.ctx.getImageData(squareSize * ratio / 2, squareSize * ratio / 2, squareSize * ratio, squareSize * ratio);

            if (liveCellsList) {
                if (this.gridIsOpen) {
                    liveCellsList = liveCellsList.map(function (cell) {
                        return [cell[0] + 20, cell[1] + 20];
                    });
                }
                this.nextGeneration.list = liveCellsList;
            } else {
                this.nextGeneration.list = (0, _helpers.getRandomPattern)(height, width);
            }
            this.nextGeneration.isFirst = true;
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
                this.nextGeneration.list = nextGenerationChangeCellsList;
                this.nextGeneration.isFirst = true;
            } else {
                //we have to clear the remained cells 
                this.nextGeneration.list = (0, _helpers.getChangePatternChangeList)(this.valuesBoard, nextGenerationChangeCellsList);
                this.nextGeneration.isFirst = true;
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

                    this.nextGeneration.list = [];
                    this.nextGeneration.list.push(clickedCell);
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
                    var changeCellList = (0, _helpers.getChangeList)(this.valuesBoard, this.nextGeneration, this.checkList); //the list of cells that changes color;

                    updateTable(this.valuesBoard, this.nextGeneration.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);

                    this.nextGeneration.list = (0, _helpers.totalNeighborsRevision)(this.valuesBoard);
                } else if (mode.clear) {

                    this.nextGeneration.list = (0, _helpers.totalLiveCellsRevision)(this.valuesBoard);
                    var _changeCellList = (0, _helpers.getChangeList)(this.valuesBoard, this.nextGeneration, this.checkList); //the list of cells that changes color;
                    this.nextGeneration.isFirst = true;
                    updateTable(this.valuesBoard, this.nextGeneration.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);
                    this.checkList.length = 0;
                } else {
                    //this operation changes valuesBoard and checklist
                    var _changeCellList2 = (0, _helpers.getChangeList)(this.valuesBoard, this.nextGeneration, this.checkList); //the list of cells that changes color;

                    updateTable(this.valuesBoard, this.nextGeneration.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio);

                    this.nextGeneration.list = _changeCellList2;
                    this.nextGeneration.isFirst = false;
                }
            } else {
                var _changeCellList3 = (0, _helpers.getChangeList)(this.valuesBoard, this.nextGeneration, this.checkList); //the list of cells that changes color;
                updateTable(this.valuesBoard, this.nextGeneration.list, this.canvas, this.gridSquareSize, this.gridWidth, this.gridHeight, this.originalCellImage, this.ratio, this.gridIsOpen);
                this.nextGeneration.list = _changeCellList3;
                this.nextGeneration.isFirst = false;
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

    for (var _i3 = squareSize; _i3 < w; _i3 += squareSize) {
        ctx.beginPath();
        ctx.moveTo(_i3, 0);
        ctx.lineTo(_i3, h);
        ctx.closePath();
        ctx.stroke();
    }

    for (var _i4 = squareSize; _i4 < h; _i4 += squareSize) {
        for (var j = squareSize; j < w; j += squareSize) {
            draw_circle(ctx, j, _i4, radius);
        }
    }
}

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
    console.log("updateTable");
    changeList.forEach(function (cell) {
        console.log("forEach");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXEdhbWVHcmlkLmpzIl0sIm5hbWVzIjpbIkNlbGwiLCJnZXRDaGFuZ2VMaXN0IiwiY29udmVydENvb3JkaW5hdGVzIiwibWFrZVVuaXF1ZSIsImdldExpdmVDZWxscyIsInRvdGFsTGl2ZUNlbGxzUmV2aXNpb24iLCJnZXRDdXJyZW50Qm9hcmQiLCJhZGp1c3RUb1NpemUiLCJnZXRDaGFuZ2VQYXR0ZXJuQ2hhbmdlTGlzdCIsImFsdGVyTmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QiLCJ0b3RhbE5laWdoYm9yc1JldmlzaW9uIiwiZ2V0UmFuZG9tUGF0dGVybiIsIkdhbWVHcmlkIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3F1YXJlU2l6ZSIsImlzT3BlbiIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJncmlkU3F1YXJlU2l6ZSIsInZpc2libGVHcmlkV2lkdGgiLCJ2aXNpYmxlR3JpZEhlaWdodCIsImdyaWROYW1lIiwiZ3JpZElzT3BlbiIsImNoZWNrTGlzdCIsIm9yaWdpbmFsQ2VsbEltYWdlIiwibmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QiLCJuZXh0R2VuZXJhdGlvbiIsImxpc3QiLCJpc0ZpcnN0IiwidmFsdWVzQm9hcmQiLCJBcnJheSIsImZpbGwiLCJpIiwiaiIsInNldExpc3RlbmVycyIsIlkiLCJYIiwiY2VsbExpc3QiLCJ0WCIsInRZIiwicHVzaCIsImZvckVhY2giLCJhZGRMaXN0ZW5lciIsInZhbCIsImMiLCJhZGROZWlnaGJvciIsInJlbW92ZU5laWdoYm9yIiwibGVuZ3RoIiwiY2FudmFzIiwiY3VycmVudExpdmVDZWxscyIsImlzTWFudWFsU3RhdGUiLCJyYXRpbyIsInIiLCJzdHlsZSIsIm9mZnNldFdpZHRoIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNjYWxlIiwiZHJhd0dyaWQiLCJnZXRJbWFnZURhdGEiLCJsaXZlQ2VsbHNMaXN0Iiwic2NyZWVuIiwibWFwIiwiY2VsbCIsImluZGV4IiwicGF0dGVybnNMaXN0IiwibW9kZSIsInBhdHRlcm4iLCJjbGVhciIsImUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY252TGVmdCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJjbnZSaWdodCIsInJpZ2h0IiwiY252VG9wIiwidG9wIiwiY252Qm90dG9tIiwiYm90dG9tIiwiY3VycmVudFNxdWFyZVNpemUiLCJib2FyZFdpZHRoIiwiYm9hcmRIZWlnaHQiLCJ4Iiwicm91bmQiLCJnZXRDdXJzb3JQb3MiLCJ5IiwibmVhcmVzdFgiLCJuZWFyZXN0WSIsInBvdyIsImNsaWNrZWRDZWxsIiwiZHJhd2luZyIsImNoYW5nZUNlbGxMaXN0IiwidXBkYXRlVGFibGUiLCJyYWRpdXMiLCJzdHJva2VTdHlsZSIsInciLCJoIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiZHJhd19jaXJjbGUiLCJjb250ZXh0Iiwic2F2ZSIsImFyYyIsIlBJIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJyZXN0b3JlIiwiY2hhbmdlTGlzdCIsImVtcHR5Q2VsbEltYWdlIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiZHJhd0NlbGwiLCJzaGFwZSIsImNlbGxSYWRpdXMiLCJwdXRJbWFnZURhdGEiLCJnZXRDdXJzb3JQb3NpdGlvbiIsIngxIiwieDIiLCJwYWdlWCIsInVuZGVmaW5lZCIsInBhZ2VZIiwiY2xpZW50WCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbExlZnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRZIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWUsQUFBb0IsQUFBWSxBQUN0RCxBQUF3QixBQUFpQixBQUN6QyxBQUE0QixBQUM1QixBQUF3Qjs7OztJQUdwQixBLHVCQUNGO3NCQUFBLEFBQVksTUFBWixBQUFrQixPQUFsQixBQUF5QixRQUF6QixBQUFpQyxZQUNqQztZQUQ2QyxBQUM3Qyw2RUFEc0QsQUFDdEQ7OzRDQUNBOzthQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjthQUFBLEFBQUssYUFBTCxBQUFrQixBQUNkO2FBQUEsQUFBSyxpQkFBTCxBQUFzQixBQUN0QjthQUFBLEFBQUssbUJBQUwsQUFBd0IsQUFDeEI7YUFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQ3pCO2FBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2hCO2FBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO2FBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ2pCO2FBQUEsQUFBSyxvQkFBTCxBQUF5QixBQUV6Qjs7YUFBQSxBQUFLLGdDQUFMLEFBQW1DLEFBQ25DO2FBQUEsQUFBSztrQkFBaUIsQUFDYixBQUNMO3FCQUZKLEFBQXNCLEFBRVYsQUFFWjtBQUpzQixBQUNsQjtZQUdELEtBQUgsQUFBUSxZQUFXLEFBQ2Y7aUJBQUEsQUFBSyxZQUFZLEtBQUEsQUFBSyxZQUF0QixBQUFrQyxBQUNsQztpQkFBQSxBQUFLLGFBQWEsS0FBQSxBQUFLLGFBQXZCLEFBQW9DLEFBQ3ZDO0FBQ0Q7YUFBQSxBQUFLLGNBQWMsTUFBTSxLQUFOLEFBQVcsWUFBWCxBQUF1QixLQUExQyxBQUFtQixBQUE0QixBQUMvQzthQUFJLElBQUksSUFBUixBQUFVLEdBQUUsSUFBRSxLQUFkLEFBQW1CLFlBQW5CLEFBQThCLEtBQUksQUFDOUI7aUJBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQUssTUFBTSxLQUFOLEFBQVcsV0FBWCxBQUFzQixLQUE1QyxBQUFzQixBQUEyQixBQUNqRDtpQkFBSSxJQUFJLElBQVIsQUFBVSxHQUFFLElBQUUsS0FBZCxBQUFtQixXQUFuQixBQUE2QixLQUFJLEFBQzdCO3FCQUFBLEFBQUssWUFBTCxBQUFpQixHQUFqQixBQUFvQixLQUFLLEFBQUksbUJBQUssS0FBVCxBQUFjLFdBQWQsQUFBd0IsR0FBakQsQUFBeUIsQUFBMEIsQUFDdEQ7QUFDSjtBQUNEO2FBQUksSUFBSSxLQUFSLEFBQVUsR0FBRSxLQUFFLEtBQWQsQUFBbUIsWUFBbkIsQUFBOEIsTUFBSSxBQUU5Qjs7aUJBQUksSUFBSSxLQUFSLEFBQVUsR0FBRSxLQUFFLEtBQWQsQUFBbUIsV0FBbkIsQUFBNkIsTUFBSSxBQUU3Qjs7cUJBQUEsQUFBSyxhQUFMLEFBQWtCLElBQWxCLEFBQW9CLEFBQ3ZCO0FBRUo7QUFDUDs7Ozs7cUMsQUFrQmUsRyxBQUFFLEdBQUU7d0JBRWI7O2dCQUFNLFdBQU4sQUFBZSxBQUNmO2lCQUFJLElBQUksSUFBRSxDQUFWLEFBQVcsR0FBRSxJQUFiLEFBQWUsR0FBZixBQUFpQixLQUFJLEFBQ2pCO3FCQUFJLElBQUksSUFBRSxDQUFWLEFBQVcsR0FBRSxJQUFiLEFBQWUsR0FBZixBQUFpQixLQUFJLEFBQ2pCO3dCQUFJLEtBQUssSUFBVCxBQUFXO3dCQUFFLEtBQUssSUFBbEIsQUFBb0IsQUFDcEI7d0JBQUcsS0FBSCxBQUFRLFlBQVcsQUFDZjs0QkFBRyxNQUFBLEFBQU0sS0FBSyxLQUFLLEtBQWhCLEFBQXFCLGNBQWMsTUFBbkMsQUFBeUMsS0FBSyxLQUFLLEtBQW5ELEFBQXdELGFBQWEsRUFBRSxNQUFBLEFBQUssS0FBSyxNQUFwRixBQUF3RSxBQUFrQixJQUFHLEFBQ3pGO3FDQUFBLEFBQVMsS0FBSyxLQUFBLEFBQUssWUFBTCxBQUFpQixJQUEvQixBQUFjLEFBQXFCLEFBQ3RDO0FBQ0o7QUFKRCwyQkFJTyxBQUNIOzRCQUFHLEtBQUgsQUFBTSxHQUFFLEtBQUcsS0FBQSxBQUFLLGFBQWhCLEFBQVEsQUFBbUIsT0FDdEIsSUFBRyxNQUFNLEtBQVQsQUFBYyxZQUFXLEtBQUEsQUFBRyxBQUNqQzs0QkFBRyxLQUFILEFBQU0sR0FBRSxLQUFHLEtBQUEsQUFBSyxZQUFoQixBQUFRLEFBQWtCLE9BQ3JCLElBQUcsTUFBTSxLQUFULEFBQWMsV0FBVSxLQUFBLEFBQUcsQUFDaEM7NEJBQUcsRUFBRSxNQUFBLEFBQUssS0FBSyxNQUFmLEFBQUcsQUFBa0IsSUFBRyxBQUNwQjtxQ0FBQSxBQUFTLEtBQUssS0FBQSxBQUFLLFlBQUwsQUFBaUIsSUFBL0IsQUFBYyxBQUFxQixBQUV0QztBQUNKO0FBR0o7QUFDSjtBQUdEOztxQkFBQSxBQUFTLFFBQVEsYUFBQTs2QkFBSyxBQUFLLFlBQUwsQUFBaUIsR0FBakIsQUFBb0IsR0FBcEIsQUFBdUIsWUFBdkIsQUFBbUMsdUJBQXNCLFVBQUEsQUFBUyxLQUFJLEFBQ3hGOzRCQUFBLEFBQU0sSUFBRSxFQUFSLEFBQVEsQUFBRSxnQkFBYyxFQUF4QixBQUF3QixBQUFFLEFBQzdCO0FBRmdCLEFBQUssaUJBQUE7QUFBdEIsQUFJQTs7Z0JBQUksSUFBSSxLQUFBLEFBQUssWUFBTCxBQUFpQixHQUF6QixBQUFRLEFBQW9CLEFBQzVCO2lCQUFBLEFBQUssWUFBTCxBQUFpQixHQUFqQixBQUFvQixHQUFwQixBQUF1QixZQUF2QixBQUFtQyxtQkFBa0IsWUFBVSxBQUUzRDs7a0JBQUEsQUFBRSxVQUFVLEVBQUEsQUFBRSxVQUFkLEFBQXdCLFVBQXhCLEFBQWtDLEFBQ3JDO0FBSEQsQUFJSDs7OzsrQixBQUlNLE9BQU0sQSxRQUFPLEEsWSxBQUFXLFFBQU8sQSxRQUFPLEFBQ3pDO2lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtpQkFBQSxBQUFLLGdDQUFMLEFBQW1DLEFBQ25DO2lCQUFBLEFBQUs7c0JBQWlCLEFBQ2IsQUFDTDt5QkFGSixBQUFzQixBQUVWLEFBRVo7QUFKc0IsQUFDbEI7aUJBR0osQUFBSyxtQkFBTCxBQUFzQixBQUN0QjtpQkFBQSxBQUFLLGdCQUFMLEFBQXFCLEFBQ3JCO2lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtpQkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbEI7aUJBQUEsQUFBSyxtQkFBTCxBQUF3QixBQUN4QjtpQkFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQ3pCO2lCQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDdEI7aUJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO2dCQUFHLEtBQUgsQUFBUSxZQUFXLEFBQ2Y7cUJBQUEsQUFBSyxZQUFZLEtBQUEsQUFBSyxZQUF0QixBQUFrQyxBQUNsQztxQkFBQSxBQUFLLGFBQWEsS0FBQSxBQUFLLGFBQXZCLEFBQW9DLEFBQ3ZDO0FBQ0Q7aUJBQUEsQUFBSyxPQUFMLEFBQVksUUFBTyxDQUFDLEtBQUEsQUFBSyxtQkFBTixBQUF5QixLQUFLLEtBQS9CLEFBQW9DLGlCQUFrQixLQUF4RSxBQUE2RSxBQUM3RTtpQkFBQSxBQUFLLE9BQUwsQUFBWSxTQUFRLENBQUMsS0FBQSxBQUFLLG9CQUFOLEFBQTBCLEtBQUssS0FBaEMsQUFBcUMsaUJBQWtCLEtBQTFFLEFBQStFLEFBQy9FO2dCQUFJLElBQUksS0FBQSxBQUFLLE9BQUwsQUFBWSxTQUFTLEtBQUEsQUFBSyxPQUFsQyxBQUF5QyxBQUN6QztpQkFBQSxBQUFLLE9BQUwsQUFBWSxNQUFaLEFBQWtCLFFBQWxCLEFBQXdCLEFBQ3hCO2lCQUFBLEFBQUssT0FBTCxBQUFZLE1BQVosQUFBa0IsU0FBTyxLQUFBLEFBQUssT0FBTCxBQUFZLGNBQVosQUFBMEIsSUFBbkQsQUFBdUQsQUFFdkQ7O2lCQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssT0FBTCxBQUFZLFdBQXZCLEFBQVcsQUFBdUIsQUFDbEM7aUJBQUEsQUFBSyxJQUFMLEFBQVMsTUFBTSxLQUFmLEFBQW9CLE9BQU8sS0FBM0IsQUFBZ0MsQUFDaEM7cUJBQVMsS0FBVCxBQUFjLFFBQVEsS0FBdEIsQUFBMkIsa0JBQWtCLEtBQTdDLEFBQWtELG1CQUFtQixLQUFyRSxBQUEwRSxBQUMxRTtpQkFBQSxBQUFLLG9CQUFvQixLQUFBLEFBQUssSUFBTCxBQUFTLGFBQWEsS0FBQSxBQUFLLGlCQUFpQixLQUF0QixBQUEyQixRQUFqRCxBQUF5RCxHQUFHLEtBQUEsQUFBSyxpQkFBaUIsS0FBdEIsQUFBMkIsUUFBdkYsQUFBK0YsR0FBRyxLQUFBLEFBQUssaUJBQWlCLEtBQXhILEFBQTZILE9BQU8sS0FBQSxBQUFLLGlCQUFnQixLQUFsTCxBQUF5QixBQUE4SixBQUN2TDtpQkFBQSxBQUFLLGNBQWMsTUFBTSxLQUFOLEFBQVcsWUFBWCxBQUF1QixLQUExQyxBQUFtQixBQUE0QixBQUMvQztpQkFBSSxJQUFJLElBQVIsQUFBVSxHQUFFLElBQUUsS0FBZCxBQUFtQixZQUFuQixBQUE4QixLQUFJLEFBQzlCO3FCQUFBLEFBQUssWUFBTCxBQUFpQixLQUFLLE1BQU0sS0FBTixBQUFXLFdBQVgsQUFBc0IsS0FBNUMsQUFBc0IsQUFBMkIsQUFDakQ7cUJBQUksSUFBSSxJQUFSLEFBQVUsR0FBRSxJQUFFLEtBQWQsQUFBbUIsV0FBbkIsQUFBNkIsS0FBSSxBQUM3Qjt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsR0FBakIsQUFBb0IsS0FBSyxBQUFJLG1CQUFLLEtBQVQsQUFBYyxXQUFkLEFBQXdCLEdBQWpELEFBQXlCLEFBQTBCLEFBQ3REO0FBQ0o7QUFDRDtpQkFBSSxJQUFJLE1BQVIsQUFBVSxHQUFFLE1BQUUsS0FBZCxBQUFtQixZQUFuQixBQUE4QixPQUFJLEFBRTlCOztxQkFBSSxJQUFJLE1BQVIsQUFBVSxHQUFFLE1BQUUsS0FBZCxBQUFtQixXQUFuQixBQUE2QixPQUFJLEFBRTdCOzt5QkFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBbEIsQUFBb0IsQUFDdkI7QUFFSjtBQUNKO0FBR0Q7Ozs7OztrQ0FDVSxBLE8sQUFBTSxRLEFBQU8sWSxBQUFXLE9BQU0sQSxRLEFBQU8sZUFBYyxBLFFBQzdELEFBQ0k7aUJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZDtpQkFBQSxBQUFLLE9BQUwsQUFBWSxRQUFPLENBQUMsUUFBRCxBQUFTLEtBQVYsQUFBZSxhQUFqQyxBQUErQyxBQUUvQzs7aUJBQUEsQUFBSyxPQUFMLEFBQVksU0FBUSxDQUFDLFNBQUQsQUFBVSxLQUFYLEFBQWdCLGFBQW5DLEFBQWlELEFBQ2pEO2dCQUFJLElBQUksS0FBQSxBQUFLLE9BQUwsQUFBWSxTQUFTLEtBQUEsQUFBSyxPQUFsQyxBQUF5QyxBQUN6QztpQkFBQSxBQUFLLE9BQUwsQUFBWSxNQUFaLEFBQWtCLFFBQWxCLEFBQXdCLEFBQ3hCO2lCQUFBLEFBQUssT0FBTCxBQUFZLE1BQVosQUFBa0IsU0FBTyxLQUFBLEFBQUssT0FBTCxBQUFZLGNBQVosQUFBMEIsSUFBbkQsQUFBdUQsQUFDdkQ7aUJBQUEsQUFBSyxRQUFMLEFBQWEsQUFDYjtpQkFBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLE9BQUwsQUFBWSxXQUF2QixBQUFXLEFBQXVCLEFBQ2xDO2lCQUFBLEFBQUssSUFBTCxBQUFTLE1BQVQsQUFBZSxPQUFmLEFBQXNCLEFBRXRCOztxQkFBUyxLQUFULEFBQWMsUUFBZCxBQUFzQixPQUF0QixBQUE2QixRQUE3QixBQUFxQyxBQUNyQztpQkFBQSxBQUFLLG9CQUFvQixLQUFBLEFBQUssSUFBTCxBQUFTLGFBQWEsYUFBQSxBQUFhLFFBQW5DLEFBQTJDLEdBQUcsYUFBQSxBQUFhLFFBQTNELEFBQW1FLEdBQUcsYUFBdEUsQUFBbUYsT0FBTyxhQUFuSCxBQUF5QixBQUFzRyxBQUcvSDs7Z0JBQUEsQUFBRyxlQUFjLEFBQ2I7b0JBQUcsS0FBSCxBQUFRLFlBQVcsQUFDZjtrREFBZ0IsQUFBYyxJQUFJLGdCQUFBOytCQUFRLENBQUMsS0FBQSxBQUFLLEtBQU4sQUFBUyxJQUFHLEtBQUEsQUFBSyxLQUF6QixBQUFRLEFBQW9CO0FBQTlELEFBQWdCLEFBQ25CLHFCQURtQjtBQUVwQjtxQkFBQSxBQUFLLGVBQUwsQUFBb0IsT0FBcEIsQUFBMkIsQUFHOUI7QUFQRCxtQkFPTyxBQUNDO3FCQUFBLEFBQUssZUFBTCxBQUFvQixPQUFPLCtCQUFBLEFBQWlCLFFBQTVDLEFBQTJCLEFBQXdCLEFBQzFEO0FBQ0Q7aUJBQUEsQUFBSyxlQUFMLEFBQW9CLFVBQXBCLEFBQThCLEFBQ2pDOzs7O3NDQUVhLEEsT0FBTyxBLGNBQWMsQSxNQUFLLEFBQ3BDO2dCQUFBLEFBQUksQUFDSjtnQkFBRyxRQUFILEFBQVMsR0FBRSxBQUNIO0FBQ0E7Z0RBQThCLDJCQUFhLGFBQWEsUUFBYixBQUFtQixHQUFoQyxBQUFtQyxTQUFRLEtBQTNDLEFBQWdELFlBQVcsS0FBekYsQUFBOEIsQUFBZ0UsQUFDakc7QUFITCxtQkFHVyxBQUNIO0FBQ0E7Z0RBQThCLCtCQUFpQixLQUFqQixBQUFzQixZQUFXLEtBQS9ELEFBQThCLEFBQXNDLEFBQ3ZFO0FBQ0w7Z0JBQUcsS0FBSCxBQUFRLE9BQU0sQUFDTjtBQUNBO3FCQUFBLEFBQUssZUFBTCxBQUFvQixPQUFwQixBQUEyQixBQUMzQjtxQkFBQSxBQUFLLGVBQUwsQUFBb0IsVUFBcEIsQUFBOEIsQUFDakM7QUFKTCxtQkFJVyxBQUNIO0FBQ0E7cUJBQUEsQUFBSyxlQUFMLEFBQW9CLE9BQUsseUNBQTJCLEtBQTNCLEFBQWdDLGFBQXpELEFBQXlCLEFBQTZDLEFBQ3RFO3FCQUFBLEFBQUssZUFBTCxBQUFvQixVQUFwQixBQUE4QixBQUNqQztBQUNSOzs7O29DQUVXLEEsR0FBRSxBQUVWOztnQkFBTSxPQUFPLEtBQUEsQUFBSyxPQUFsQixBQUFhLEFBQVksQUFDekI7Z0JBQU0sVUFBVSxLQUFBLEFBQUssTUFBTSxLQUEzQixBQUFnQixBQUFnQixBQUNoQztnQkFBTSxXQUFXLEtBQUEsQUFBSyxNQUFNLEtBQTVCLEFBQWlCLEFBQWdCLEFBQ2pDO2dCQUFNLFNBQVMsS0FBQSxBQUFLLE1BQU0sS0FBMUIsQUFBZSxBQUFnQixBQUMvQjtnQkFBTSxZQUFZLEtBQUEsQUFBSyxNQUFNLEtBQTdCLEFBQWtCLEFBQWdCLEFBQ2xDO2dCQUFNLG9CQUFvQixLQUFBLEFBQUssaUJBQWlCLEtBQWhELEFBQXFELEFBQ3JEO2dCQUFNLElBQUksb0JBQUEsQUFBb0IsSUFBOUIsQUFBa0MsQUFDbEM7Z0JBQU0sYUFBVyxDQUFDLEtBQUEsQUFBSyxZQUFOLEFBQWtCLEtBQW5DLEFBQXdDLEFBQ3hDO2dCQUFNLGNBQVksQ0FBQyxLQUFBLEFBQUssYUFBTixBQUFtQixLQUFyQyxBQUEwQyxBQUMxQztnQkFBSSxJQUFJLEtBQUEsQUFBSyxNQUFNLENBQUMsYUFBQSxBQUFhLEdBQWIsQUFBZ0IsS0FBakIsQUFBb0IsWUFBVSxXQUE5QixBQUF1QyxXQUExRCxBQUFRLEFBQTJELEFBQ25FO2dCQUFJLElBQUksS0FBQSxBQUFLLE1BQU0sQ0FBQyxhQUFBLEFBQWEsR0FBYixBQUFnQixLQUFqQixBQUFvQixXQUFTLFlBQTdCLEFBQXVDLFVBQTFELEFBQVEsQUFBMEQsQUFDbkU7Z0JBQUcsQ0FBQyxJQUFJLG9CQUFMLEFBQXVCLEtBQXZCLEFBQTRCLHNCQUE1QixBQUFrRCxLQUFLLENBQUMsSUFBSSxvQkFBTCxBQUF1QixLQUF2QixBQUE0QixzQkFBdEYsQUFBNEcsR0FBRSxBQUN6RztvQkFBTSxXQUFXLEtBQUEsQUFBSyxNQUFNLENBQUMsSUFBSSxvQkFBTCxBQUF5QixLQUFyRCxBQUFpQixBQUF5QyxBQUMxRDtvQkFBTSxXQUFXLEtBQUEsQUFBSyxNQUFNLENBQUMsSUFBSSxvQkFBTCxBQUF5QixLQUFyRCxBQUFpQixBQUF5QyxBQUMxRDtvQkFBRyxLQUFBLEFBQUssSUFBSSxJQUFJLFdBQWIsQUFBd0IsbUJBQXhCLEFBQTJDLEtBQUssS0FBQSxBQUFLLElBQUksSUFBSSxXQUFiLEFBQXdCLG1CQUF4RSxBQUFnRCxBQUEyQyxLQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsR0FBNUcsQUFBbUcsQUFBWSxJQUFHLEFBRTlHOzt3QkFBTSxjQUFjLENBQUMsV0FBRCxBQUFZLEdBQUcsV0FBbkMsQUFBb0IsQUFBMEIsQUFHOUM7O3lCQUFBLEFBQUssZUFBTCxBQUFvQixPQUFwQixBQUEyQixBQUMzQjt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsS0FBcEIsQUFBeUIsS0FBekIsQUFBOEIsQUFDOUI7MkJBQUEsQUFBTyxBQUNWO0FBRUo7QUFDRDttQkFBQSxBQUFPLEFBQ1Y7Ozs7K0NBRXNCLEEsUUFBTyxBQUMxQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxBQUNWO2dCQUFHLEtBQUgsQUFBUSxRQUFPLEFBQ1g7b0JBQUksSUFBSSxLQUFBLEFBQUssT0FBTCxBQUFZLFNBQVMsS0FBQSxBQUFLLE9BQWxDLEFBQXlDLEFBQ3pDO3FCQUFBLEFBQUssT0FBTCxBQUFZLE1BQVosQUFBa0IsUUFBbEIsQUFBd0IsQUFDeEI7cUJBQUEsQUFBSyxPQUFMLEFBQVksTUFBWixBQUFrQixTQUFPLEtBQUEsQUFBSyxPQUFMLEFBQVksY0FBWixBQUEwQixJQUFuRCxBQUF1RCxBQUU5RDtBQUNKOzs7O3VDQUVhLEFBQ1Y7bUJBQU8sMkJBQWEsS0FBcEIsQUFBTyxBQUFrQixBQUM1Qjs7OzsrQkFFTSxBLE1BQUssQUFDUjtpQkFBQSxBQUFLLFVBQUwsQUFBZSxTQUFmLEFBQXdCLEFBRXhCOztnQkFBQSxBQUFHLE1BQUssQUFDSjtvQkFBRyxLQUFILEFBQVEsU0FBUSxBQUNaO0FBQ0E7d0JBQUksaUJBQWlCLDRCQUFjLEtBQWQsQUFBbUIsYUFBWSxLQUEvQixBQUFvQyxnQkFBZSxLQUY1RCxBQUVaLEFBQXFCLEFBQXdELFlBQVcsQUFFeEY7O2dDQUFZLEtBQVosQUFBaUIsYUFBYSxLQUFBLEFBQUssZUFBbkMsQUFBa0QsTUFBTSxLQUF4RCxBQUE2RCxRQUFRLEtBQXJFLEFBQTBFLGdCQUFnQixLQUExRixBQUErRixXQUFXLEtBQTFHLEFBQStHLFlBQVksS0FBM0gsQUFBZ0ksbUJBQW1CLEtBQW5KLEFBQXdKLEFBRXhKOzt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsT0FBTyxxQ0FBdUIsS0FBbEQsQUFBMkIsQUFBNEIsQUFFMUQ7QUFSRCwyQkFRVSxLQUFILEFBQVEsT0FBTyxBQUdsQjs7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLE9BQUsscUNBQXVCLEtBQWhELEFBQXlCLEFBQTRCLEFBQ3JEO3dCQUFJLGtCQUFpQiw0QkFBYyxLQUFkLEFBQW1CLGFBQVksS0FBL0IsQUFBb0MsZ0JBQWUsS0FKdEQsQUFJbEIsQUFBcUIsQUFBd0QsWUFBVyxBQUN4Rjt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsVUFBcEIsQUFBOEIsQUFDOUI7Z0NBQVksS0FBWixBQUFpQixhQUFhLEtBQUEsQUFBSyxlQUFuQyxBQUFrRCxNQUFNLEtBQXhELEFBQTZELFFBQVEsS0FBckUsQUFBMEUsZ0JBQWdCLEtBQTFGLEFBQStGLFdBQVcsS0FBMUcsQUFBK0csWUFBWSxLQUEzSCxBQUFnSSxtQkFBbUIsS0FBbkosQUFBd0osQUFDeEo7eUJBQUEsQUFBSyxVQUFMLEFBQWUsU0FBZixBQUF3QixBQUMzQjtBQVJNLGlCQUFBLE1BUUEsQUFDSDtBQUNBO3dCQUFJLG1CQUFpQiw0QkFBYyxLQUFkLEFBQW1CLGFBQVksS0FBL0IsQUFBb0MsZ0JBQWUsS0FGckUsQUFFSCxBQUFxQixBQUF3RCxZQUFXLEFBRXhGOztnQ0FBWSxLQUFaLEFBQWlCLGFBQWEsS0FBQSxBQUFLLGVBQW5DLEFBQWtELE1BQU0sS0FBeEQsQUFBNkQsUUFBUSxLQUFyRSxBQUEwRSxnQkFBZ0IsS0FBMUYsQUFBK0YsV0FBVyxLQUExRyxBQUErRyxZQUFZLEtBQTNILEFBQWdJLG1CQUFtQixLQUFuSixBQUF3SixBQUV4Sjs7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLE9BQXBCLEFBQTJCLEFBQzNCO3lCQUFBLEFBQUssZUFBTCxBQUFvQixVQUFwQixBQUE4QixBQUNqQztBQUNKO0FBMUJELG1CQTBCTyxBQUNIO29CQUFJLG1CQUFpQiw0QkFBYyxLQUFkLEFBQW1CLGFBQVksS0FBL0IsQUFBb0MsZ0JBQWUsS0FEckUsQUFDSCxBQUFxQixBQUF3RCxZQUFXLEFBQ3hGOzRCQUFZLEtBQVosQUFBaUIsYUFBYSxLQUFBLEFBQUssZUFBbkMsQUFBa0QsTUFBTSxLQUF4RCxBQUE2RCxRQUFRLEtBQXJFLEFBQTBFLGdCQUFnQixLQUExRixBQUErRixXQUFXLEtBQTFHLEFBQStHLFlBQVksS0FBM0gsQUFBZ0ksbUJBQW1CLEtBQW5KLEFBQXdKLE9BQU8sS0FBL0osQUFBb0ssQUFDcEs7cUJBQUEsQUFBSyxlQUFMLEFBQW9CLE9BQXBCLEFBQTJCLEFBQzNCO3FCQUFBLEFBQUssZUFBTCxBQUFvQixVQUFwQixBQUE4QixBQUNqQztBQUVKOzs7OzRCQXhPVSxBQUNQO21CQUFPLEtBQVAsQUFBWSxBQUNmOzs7OzRCQUVXLEFBQ1I7bUJBQU8sS0FBUCxBQUFZLEFBQ2Y7Ozs7NEJBRWUsQUFDWjttQkFBTyxLQUFQLEFBQVksQUFDZjs7Ozs0QkFFUyxBQUNOO21CQUFPLEtBQVAsQUFBWSxBQUNmOzs7OztBQStOTDs7a0JBQUEsQUFBZTs7O0FBSWYsU0FBQSxBQUFTLFNBQVQsQUFBa0IsUUFBbEIsQUFBMEIsT0FBMUIsQUFBaUMsUUFBakMsQUFBeUMsWUFBVyxBQUNoRDtRQUFJLE1BQU0sT0FBQSxBQUFPLFdBQWpCLEFBQVUsQUFBa0IsQUFDNUI7UUFBSSxTQUFTLGFBQUEsQUFBVyxJQUF4QixBQUE0QixBQUU1Qjs7UUFBQSxBQUFJLGNBQUosQUFBZ0IsQUFDaEI7UUFBTSxJQUFJLENBQUMsUUFBRCxBQUFTLEtBQW5CLEFBQXdCLEFBQ3hCO1FBQU0sSUFBSSxDQUFDLFNBQUQsQUFBVSxLQUFwQixBQUF5QixBQUN6QjtRQUFBLEFBQUksWUFBSixBQUFnQixBQUNoQjtTQUFJLElBQUksSUFBUixBQUFZLFlBQVksSUFBeEIsQUFBNEIsR0FBRyxLQUEvQixBQUFvQyxZQUFXLEFBQzNDO1lBQUEsQUFBSSxBQUNKO1lBQUEsQUFBSSxPQUFKLEFBQVcsR0FBWCxBQUFhLEFBQ2I7WUFBQSxBQUFJLE9BQUosQUFBVyxHQUFYLEFBQWEsQUFDYjtZQUFBLEFBQUksQUFDSjtZQUFBLEFBQUksQUFDUDtBQUVEOztTQUFJLElBQUksTUFBUixBQUFZLFlBQVksTUFBeEIsQUFBNEIsR0FBRyxPQUEvQixBQUFvQyxZQUFXLEFBQzNDO1lBQUEsQUFBSSxBQUNKO1lBQUEsQUFBSSxPQUFKLEFBQVcsS0FBWCxBQUFhLEFBQ2I7WUFBQSxBQUFJLE9BQUosQUFBVyxLQUFYLEFBQWEsQUFDYjtZQUFBLEFBQUksQUFDSjtZQUFBLEFBQUksQUFDUDtBQUVEOztTQUFJLElBQUksTUFBUixBQUFZLFlBQVksTUFBeEIsQUFBNEIsR0FBRyxPQUEvQixBQUFvQyxZQUFXLEFBQzNDO2FBQUksSUFBSSxJQUFSLEFBQVksWUFBWSxJQUF4QixBQUE0QixHQUFHLEtBQS9CLEFBQW9DLFlBQVcsQUFDM0M7d0JBQUEsQUFBWSxLQUFaLEFBQWlCLEdBQWpCLEFBQW9CLEtBQXBCLEFBQXVCLEFBQzFCO0FBQ0o7QUFDSjs7O0FBSUQsU0FBQSxBQUFTLFlBQVQsQUFBcUIsU0FBckIsQUFBOEIsR0FBOUIsQUFBaUMsR0FBakMsQUFBb0MsUUFBUSxBQUN4QztZQUFBLEFBQVEsQUFDUjtZQUFBLEFBQVEsQUFDUjtZQUFBLEFBQVEsSUFBUixBQUFZLEdBQVosQUFBZSxHQUFmLEFBQWtCLFFBQWxCLEFBQTBCLEdBQUcsS0FBQSxBQUFLLEtBQWxDLEFBQXVDLEdBQXZDLEFBQTBDLEFBQzFDO1lBQUEsQUFBUSxjQUFSLEFBQXNCLEFBQ3RCO1lBQUEsQUFBUSxZQUFSLEFBQW9CLEFBQ3BCO1lBQUEsQUFBUSxBQUNSO1lBQUEsQUFBUSxBQUNSO1lBQUEsQUFBUSxBQUNYOztBQUNELFNBQUEsQUFBUyxZQUFULEFBQXFCLGFBQXJCLEFBQWtDLFlBQWxDLEFBQThDLFFBQTlDLEFBQXNELFlBQXRELEFBQWtFLE9BQWxFLEFBQXlFLFFBQXpFLEFBQWlGLGdCQUFqRixBQUFpRyxPQUFqRyxBQUF3RyxZQUFXLEFBQy9HO1lBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtlQUFBLEFBQVcsUUFBUSxnQkFBUSxBQUN2QjtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1lBQUksSUFBSSxLQUFSLEFBQVEsQUFBSyxBQUNiO1lBQUksSUFBSSxLQUFSLEFBQVEsQUFBSyxBQUNiO1lBQUEsQUFBRyxZQUFXLEFBQ1Y7Z0JBQUcsS0FBQSxBQUFLLE1BQU8sSUFBSSxRQUFoQixBQUF3QixNQUFNLEtBQTlCLEFBQW1DLE1BQU8sSUFBSSxTQUFqRCxBQUEwRCxJQUFHLEFBRXpEOztxQkFBQSxBQUFLLEFBQ0w7cUJBQUEsQUFBSyxBQUNMO29CQUFHLFlBQVksS0FBWixBQUFZLEFBQUssSUFBSSxLQUFyQixBQUFxQixBQUFLLElBQTFCLEFBQThCLFVBQWpDLEFBQTJDLEdBQUUsQUFDekM7NkJBQVMsQ0FBQSxBQUFDLEdBQVYsQUFBUyxBQUFHLElBQVosQUFBZ0IsUUFBaEIsQUFBd0IsWUFBWSxhQUFwQyxBQUFpRCxHQUFqRCxBQUFvRCxTQUFwRCxBQUE2RCxnQkFBN0QsQUFBNkUsQUFDaEY7QUFGRCx1QkFFTyxBQUNIOzZCQUFTLENBQUEsQUFBQyxHQUFWLEFBQVMsQUFBRyxJQUFaLEFBQWdCLFFBQWhCLEFBQXdCLFlBQVksYUFBcEMsQUFBaUQsR0FBakQsQUFBb0QsUUFBcEQsQUFBNEQsZ0JBQTVELEFBQTRFLEFBQy9FO0FBQ0o7QUFDSjtBQVhELGVBV08sQUFDSDtnQkFBRyxZQUFZLEtBQVosQUFBWSxBQUFLLElBQUksS0FBckIsQUFBcUIsQUFBSyxJQUExQixBQUE4QixVQUFqQyxBQUEyQyxHQUFFLEFBQ3pDO3lCQUFBLEFBQVMsTUFBVCxBQUFlLFFBQWYsQUFBdUIsWUFBWSxhQUFuQyxBQUFnRCxHQUFoRCxBQUFtRCxTQUFuRCxBQUE0RCxnQkFBNUQsQUFBNEUsQUFDL0U7QUFGRCxtQkFFTyxBQUNIO3lCQUFBLEFBQVMsTUFBVCxBQUFlLFFBQWYsQUFBdUIsWUFBWSxhQUFuQyxBQUFnRCxHQUFoRCxBQUFtRCxRQUFuRCxBQUEyRCxnQkFBM0QsQUFBMkUsQUFDOUU7QUFDSjtBQUVKO0FBdkJELEFBd0JIOzs7QUFJRCxTQUFBLEFBQVMsU0FBVCxBQUFrQixNQUFsQixBQUF3QixRQUF4QixBQUFnQyxZQUFoQyxBQUE0QyxRQUE1QyxBQUFvRCxPQUFwRCxBQUEyRCxnQkFBM0QsQUFBMkUsT0FBTSxBQUM3RTtRQUFNLGFBQWMsU0FBcEIsQUFBNkIsQUFDN0I7UUFBTSxVQUFVLE9BQUEsQUFBTyxXQUF2QixBQUFnQixBQUFrQixBQUNsQztRQUFNLElBQUksQ0FBQyxLQUFBLEFBQUssS0FBTixBQUFXLEtBQXJCLEFBQTBCLEFBQzFCO1FBQU0sSUFBSSxDQUFDLEtBQUEsQUFBSyxLQUFOLEFBQVcsS0FBckIsQUFBMEIsQUFDMUI7UUFBRyxVQUFILEFBQWEsU0FBUSxBQUNqQjtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxhQUFSLEFBQXFCLGdCQUFnQixDQUFDLElBQUQsQUFBSyxVQUExQyxBQUFvRCxPQUFPLENBQUMsSUFBRCxBQUFLLFVBQWhFLEFBQTBFLEFBQzFFO2dCQUFBLEFBQVEsQUFDWDtBQUpELFdBSU8sQUFDSDtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxBQUNSO2dCQUFBLEFBQVEsSUFBUixBQUFZLEdBQVosQUFBZSxHQUFmLEFBQWtCLFlBQWxCLEFBQThCLEdBQUcsS0FBQSxBQUFLLEtBQXRDLEFBQTJDLEdBQTNDLEFBQThDLEFBQzlDO2dCQUFBLEFBQVEsWUFBUixBQUFvQixBQUNwQjtnQkFBQSxBQUFRLEFBQ1I7Z0JBQUEsQUFBUSxBQUNSO2dCQUFBLEFBQVEsQUFDWDtBQUNKOzs7QUFFRCxTQUFBLEFBQVMsa0JBQVQsQUFBMkIsR0FBRyxBQUMxQjtRQUFBLEFBQUksQUFDSjtRQUFBLEFBQUksQUFDSjtRQUFBLEFBQUksQUFDSjtRQUFBLEFBQUksQUFFSjs7UUFBSSxFQUFBLEFBQUUsU0FBRixBQUFXLGFBQWEsRUFBQSxBQUFFLFNBQTlCLEFBQXVDLFdBQVcsQUFDOUM7WUFBSSxFQUFKLEFBQU0sQUFDTjtZQUFJLEVBQUosQUFBTSxBQUNUO0FBSEQsV0FHTyxBQUVIOztZQUFJLEVBQUEsQUFBRSxVQUFVLFNBQUEsQUFBUyxLQUFyQixBQUEwQixhQUFhLFNBQUEsQUFBUyxnQkFBcEQsQUFBb0UsQUFDcEU7WUFBSSxFQUFBLEFBQUUsVUFBVSxTQUFBLEFBQVMsS0FBckIsQUFBMEIsWUFBWSxTQUFBLEFBQVMsZ0JBQW5ELEFBQW1FLEFBQ3RFO0FBQ0Q7U0FBSyxFQUFMLEFBQU8sQUFDUDtTQUFLLEVBQUwsQUFBTyxBQUNQO1dBQU8sQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFKLEFBQU8sSUFBZCxBQUFPLEFBQVcsQUFDckI7OztBQUVELFNBQUEsQUFBUyxhQUFULEFBQXNCLEdBQUcsQUFDckI7UUFBQSxBQUFJLEFBQ0o7UUFBQSxBQUFJLEFBRUo7O1FBQUksRUFBSixBQUFNLEFBQ047UUFBSSxFQUFKLEFBQU0sQUFDTjtXQUFPLENBQUEsQUFBQyxHQUFSLEFBQU8sQUFBSSxBQUNkIiwiZmlsZSI6IkdhbWVHcmlkLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=