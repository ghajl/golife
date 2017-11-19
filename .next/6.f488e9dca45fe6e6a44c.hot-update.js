webpackHotUpdate(6,{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Cell = __webpack_require__(578);

var _Cell2 = _interopRequireDefault(_Cell);

var _helpers = __webpack_require__(579);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXEdhbWVHcmlkLmpzIl0sIm5hbWVzIjpbIkNlbGwiLCJnZXRDaGFuZ2VMaXN0IiwiY29udmVydENvb3JkaW5hdGVzIiwibWFrZVVuaXF1ZSIsImdldExpdmVDZWxscyIsInRvdGFsTGl2ZUNlbGxzUmV2aXNpb24iLCJnZXRDdXJyZW50Qm9hcmQiLCJhZGp1c3RUb1NpemUiLCJnZXRDaGFuZ2VQYXR0ZXJuQ2hhbmdlTGlzdCIsImFsdGVyTmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QiLCJ0b3RhbE5laWdoYm9yc1JldmlzaW9uIiwiZ2V0UmFuZG9tUGF0dGVybiIsIkdhbWVHcmlkIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3F1YXJlU2l6ZSIsImlzT3BlbiIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJncmlkU3F1YXJlU2l6ZSIsInZpc2libGVHcmlkV2lkdGgiLCJ2aXNpYmxlR3JpZEhlaWdodCIsImdyaWROYW1lIiwiZ3JpZElzT3BlbiIsImNoZWNrTGlzdCIsIm9yaWdpbmFsQ2VsbEltYWdlIiwibmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QiLCJuZXh0R2VuZXJhdGlvbiIsImxpc3QiLCJpc0ZpcnN0IiwidmFsdWVzQm9hcmQiLCJBcnJheSIsImZpbGwiLCJpIiwiaiIsInNldExpc3RlbmVycyIsIlkiLCJYIiwiY2VsbExpc3QiLCJ0WCIsInRZIiwicHVzaCIsImZvckVhY2giLCJhZGRMaXN0ZW5lciIsInZhbCIsImMiLCJhZGROZWlnaGJvciIsInJlbW92ZU5laWdoYm9yIiwibGVuZ3RoIiwiY2FudmFzIiwiY3VycmVudExpdmVDZWxscyIsImlzTWFudWFsU3RhdGUiLCJyYXRpbyIsInIiLCJzdHlsZSIsIm9mZnNldFdpZHRoIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNjYWxlIiwiZHJhd0dyaWQiLCJnZXRJbWFnZURhdGEiLCJsaXZlQ2VsbHNMaXN0Iiwic2NyZWVuIiwibWFwIiwiY2VsbCIsImluZGV4IiwicGF0dGVybnNMaXN0IiwibW9kZSIsInBhdHRlcm4iLCJjbGVhciIsImUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY252TGVmdCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJjbnZSaWdodCIsInJpZ2h0IiwiY252VG9wIiwidG9wIiwiY252Qm90dG9tIiwiYm90dG9tIiwiY3VycmVudFNxdWFyZVNpemUiLCJib2FyZFdpZHRoIiwiYm9hcmRIZWlnaHQiLCJ4Iiwicm91bmQiLCJnZXRDdXJzb3JQb3MiLCJ5IiwibmVhcmVzdFgiLCJuZWFyZXN0WSIsInBvdyIsImNsaWNrZWRDZWxsIiwiZHJhd2luZyIsImNoYW5nZUNlbGxMaXN0IiwidXBkYXRlVGFibGUiLCJyYWRpdXMiLCJzdHJva2VTdHlsZSIsInciLCJoIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiZHJhd19jaXJjbGUiLCJjb250ZXh0Iiwic2F2ZSIsImFyYyIsIlBJIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJyZXN0b3JlIiwiY2hhbmdlTGlzdCIsImVtcHR5Q2VsbEltYWdlIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiZHJhd0NlbGwiLCJzaGFwZSIsImNlbGxSYWRpdXMiLCJwdXRJbWFnZURhdGEiLCJnZXRDdXJzb3JQb3NpdGlvbiIsIngxIiwieDIiLCJwYWdlWCIsInVuZGVmaW5lZCIsInBhZ2VZIiwiY2xpZW50WCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbExlZnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRZIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWUsQUFBb0IsQUFBWSxBQUN0RCxBQUF3QixBQUFpQixBQUN6QyxBQUE0QixBQUM1QixBQUF3Qjs7OztJQUdwQixBLHVCQUNGO3NCQUFBLEFBQVksTUFBWixBQUFrQixPQUFsQixBQUF5QixRQUF6QixBQUFp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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\folder\\new\\gol\\helpers\\GameGrid.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\folder\\new\\gol\\helpers\\GameGrid.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mNDg4ZTlkY2E0NWZlNmU2YTQ0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGVscGVycy9HYW1lR3JpZC5qcz9mZDIzNGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDZWxsIGZyb20gJy4vQ2VsbCc7XHJcbmltcG9ydCB7IGdldENoYW5nZUxpc3QsIGNvbnZlcnRDb29yZGluYXRlcywgbWFrZVVuaXF1ZSwgZ2V0TGl2ZUNlbGxzLCBcclxuICB0b3RhbExpdmVDZWxsc1JldmlzaW9uLCBnZXRDdXJyZW50Qm9hcmQsIGFkanVzdFRvU2l6ZSwgXHJcbiAgZ2V0Q2hhbmdlUGF0dGVybkNoYW5nZUxpc3QsIGFsdGVyTmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QsIFxyXG4gIHRvdGFsTmVpZ2hib3JzUmV2aXNpb24sIGdldFJhbmRvbVBhdHRlcm59IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5cclxuY2xhc3MgR2FtZUdyaWQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgd2lkdGgsIGhlaWdodCwgc3F1YXJlU2l6ZSwgaXNPcGVuID0gZmFsc2UpXHJcbiAgICB7XHJcblx0ICBcdHRoaXMuZ3JpZFdpZHRoID0gd2lkdGg7XHJcblx0ICBcdHRoaXMuZ3JpZEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmdyaWRTcXVhcmVTaXplID0gc3F1YXJlU2l6ZTtcclxuICAgICAgICB0aGlzLnZpc2libGVHcmlkV2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLnZpc2libGVHcmlkSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZ3JpZE5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JpZElzT3BlbiA9IGlzT3BlbjtcclxuICAgICAgICB0aGlzLmNoZWNrTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDZWxsSW1hZ2UgPSBudWxsO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdD1udWxsO1xyXG4gICAgICAgIHRoaXMubmV4dEdlbmVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgIGxpc3Q6bnVsbCxcclxuICAgICAgICAgICAgaXNGaXJzdDp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmdyaWRJc09wZW4pe1xyXG4gICAgICAgICAgICB0aGlzLmdyaWRXaWR0aCA9IHRoaXMuZ3JpZFdpZHRoICsgNDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZEhlaWdodCA9IHRoaXMuZ3JpZEhlaWdodCArIDQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbHVlc0JvYXJkID0gQXJyYXkodGhpcy5ncmlkSGVpZ2h0KS5maWxsKG51bGwpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ncmlkSGVpZ2h0O2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzQm9hcmRbaV0gPSBBcnJheSh0aGlzLmdyaWRXaWR0aCkuZmlsbChudWxsKTtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajx0aGlzLmdyaWRXaWR0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNCb2FyZFtpXVtqXSA9IG5ldyBDZWxsKHRoaXMuY2hlY2tMaXN0LGksaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmdyaWRIZWlnaHQ7aSsrKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPHRoaXMuZ3JpZFdpZHRoO2orKyl7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldExpc3RlbmVycyhpLGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuICAgIGdldCB3aWR0aCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVHcmlkV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVHcmlkSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzcXVhcmVTaXplKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFNxdWFyZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkTmFtZTtcclxuICAgIH1cclxuICAgIHNldExpc3RlbmVycyhZLFgpe1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsTGlzdD1bXTtcclxuICAgICAgICBmb3IobGV0IGk9LTE7aTwyO2krKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0tMTtqPDI7aisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB0WCA9IFgraix0WSA9IFkraTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ3JpZElzT3Blbil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodFkgPj0gMCAmJiB0WSA8IHRoaXMuZ3JpZEhlaWdodCAmJiB0WCA+PSAwICYmIHRYIDwgdGhpcy5ncmlkV2lkdGggJiYgIShpID09PTAgJiYgaiA9PT0gMCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsTGlzdC5wdXNoKHRoaXMudmFsdWVzQm9hcmRbdFldW3RYXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0WTwwKXRZPXRoaXMuZ3JpZEhlaWdodC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodFkgPj0gdGhpcy5ncmlkSGVpZ2h0KXRZPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodFg8MCl0WD10aGlzLmdyaWRXaWR0aC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodFggPj0gdGhpcy5ncmlkV2lkdGgpdFg9MDtcclxuICAgICAgICAgICAgICAgICAgICBpZighKGkgPT09MCAmJiBqID09PSAwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxMaXN0LnB1c2godGhpcy52YWx1ZXNCb2FyZFt0WV1bdFhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjZWxsTGlzdC5mb3JFYWNoKGMgPT4gdGhpcy52YWx1ZXNCb2FyZFtZXVtYXS5hZGRMaXN0ZW5lcihcIm5laWdoYm9yU3RhdGVDaGFuZ2VcIixmdW5jdGlvbih2YWwpe1xyXG4gICAgICAgICAgICB2YWw9PT0xP2MuYWRkTmVpZ2hib3IoKTpjLnJlbW92ZU5laWdoYm9yKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjID0gdGhpcy52YWx1ZXNCb2FyZFtZXVtYXTtcclxuICAgICAgICB0aGlzLnZhbHVlc0JvYXJkW1ldW1hdLmFkZExpc3RlbmVyKFwibmVpZ2hib3JzQ2hhbmdlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjLmNoZWNrTGlzdFtjLmNoZWNrTGlzdC5sZW5ndGhdID0gYztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVsb2FkKHdpZHRoLGhlaWdodCxzcXVhcmVTaXplLGNhbnZhcyxpc09wZW4pe1xyXG4gICAgICAgIHRoaXMuY2hlY2tMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdD1udWxsO1xyXG4gICAgICAgIHRoaXMubmV4dEdlbmVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgIGxpc3Q6bnVsbCxcclxuICAgICAgICAgICAgaXNGaXJzdDp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXZlQ2VsbHM9bnVsbDtcclxuICAgICAgICB0aGlzLmlzTWFudWFsU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdyaWRXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuZ3JpZEhlaWdodCA9IGhlaWdodDsgXHJcbiAgICAgICAgdGhpcy52aXNpYmxlR3JpZFdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlR3JpZEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmdyaWRTcXVhcmVTaXplID0gc3F1YXJlU2l6ZTtcclxuICAgICAgICB0aGlzLmdyaWRJc09wZW4gPSBpc09wZW47XHJcbiAgICAgICAgaWYodGhpcy5ncmlkSXNPcGVuKXtcclxuICAgICAgICAgICAgdGhpcy5ncmlkV2lkdGggPSB0aGlzLmdyaWRXaWR0aCArIDQwO1xyXG4gICAgICAgICAgICB0aGlzLmdyaWRIZWlnaHQgPSB0aGlzLmdyaWRIZWlnaHQgKyA0MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGg9KCh0aGlzLnZpc2libGVHcmlkV2lkdGggKyAxKSAqIHRoaXMuZ3JpZFNxdWFyZVNpemUpICogdGhpcy5yYXRpbztcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQ9KCh0aGlzLnZpc2libGVHcmlkSGVpZ2h0ICsgMSkgKiB0aGlzLmdyaWRTcXVhcmVTaXplKSAqIHRoaXMucmF0aW87XHJcbiAgICAgICAgbGV0IHIgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aD1cIjEwMCVcIjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQ9dGhpcy5jYW52YXMub2Zmc2V0V2lkdGggKiByICsgXCJweFwiO1xyXG5cclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgICAgICB0aGlzLmN0eC5zY2FsZSh0aGlzLnJhdGlvLCB0aGlzLnJhdGlvKSAgICBcclxuICAgICAgICBkcmF3R3JpZCh0aGlzLmNhbnZhcywgdGhpcy52aXNpYmxlR3JpZFdpZHRoLCB0aGlzLnZpc2libGVHcmlkSGVpZ2h0LCB0aGlzLmdyaWRTcXVhcmVTaXplKVxyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDZWxsSW1hZ2UgPSB0aGlzLmN0eC5nZXRJbWFnZURhdGEodGhpcy5ncmlkU3F1YXJlU2l6ZSAqIHRoaXMucmF0aW8gLyAyLCB0aGlzLmdyaWRTcXVhcmVTaXplICogdGhpcy5yYXRpbyAvIDIsIHRoaXMuZ3JpZFNxdWFyZVNpemUgKiB0aGlzLnJhdGlvLCB0aGlzLmdyaWRTcXVhcmVTaXplKiB0aGlzLnJhdGlvKVxyXG4gICAgICAgIHRoaXMudmFsdWVzQm9hcmQgPSBBcnJheSh0aGlzLmdyaWRIZWlnaHQpLmZpbGwobnVsbCk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmdyaWRIZWlnaHQ7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNCb2FyZFtpXSA9IEFycmF5KHRoaXMuZ3JpZFdpZHRoKS5maWxsKG51bGwpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPHRoaXMuZ3JpZFdpZHRoO2orKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc0JvYXJkW2ldW2pdID0gbmV3IENlbGwodGhpcy5jaGVja0xpc3QsaSxqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuZ3JpZEhlaWdodDtpKyspe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8dGhpcy5ncmlkV2lkdGg7aisrKXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKGksaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLz0gY29tcG9uZW50ZGlkbW91bnRcclxuICAgIG1ha2VCb2FyZCh3aWR0aCxoZWlnaHQsc3F1YXJlU2l6ZSxyYXRpbyxjYW52YXMsbGl2ZUNlbGxzTGlzdCxzY3JlZW4pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGg9KCh3aWR0aCArIDEpICogc3F1YXJlU2l6ZSkgKiByYXRpbztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQ9KChoZWlnaHQgKyAxKSAqIHNxdWFyZVNpemUpICogcmF0aW87ICAgICBcclxuICAgICAgICBsZXQgciA9IHRoaXMuY2FudmFzLmhlaWdodCAvIHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoPVwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodD10aGlzLmNhbnZhcy5vZmZzZXRXaWR0aCAqIHIgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmN0eC5zY2FsZShyYXRpbywgcmF0aW8pXHJcblxyXG4gICAgICAgIGRyYXdHcmlkKHRoaXMuY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBzcXVhcmVTaXplKTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ2VsbEltYWdlID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKHNxdWFyZVNpemUgKiByYXRpbyAvIDIsIHNxdWFyZVNpemUgKiByYXRpbyAvIDIsIHNxdWFyZVNpemUgKiByYXRpbywgc3F1YXJlU2l6ZSogcmF0aW8pO1xyXG5cclxuXHJcbiAgICAgICAgaWYobGl2ZUNlbGxzTGlzdCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ3JpZElzT3Blbil7XHJcbiAgICAgICAgICAgICAgICBsaXZlQ2VsbHNMaXN0ID0gbGl2ZUNlbGxzTGlzdC5tYXAoY2VsbCA9PiBbY2VsbFswXSsyMCxjZWxsWzFdKzIwXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0ID0gbGl2ZUNlbGxzTGlzdDtcclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3QgPSBnZXRSYW5kb21QYXR0ZXJuKGhlaWdodCx3aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmV4dEdlbmVyYXRpb24uaXNGaXJzdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGF0dGVybihpbmRleCwgcGF0dGVybnNMaXN0LCBtb2RlKXtcclxuICAgICAgICB2YXIgbmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3Q7XHJcbiAgICAgICAgaWYoaW5kZXg+MCl7XHJcbiAgICAgICAgICAgICAgICAvL2dldCB0aGUgY29vcmRpbmF0ZXMgb2YgY2hvb3NlZCBwYXR0ZXJuIGFkanVzdGVkIHRvIGN1cnJlbnQgYm9hcmQgc2l6ZVxyXG4gICAgICAgICAgICAgICAgbmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3Q9YWRqdXN0VG9TaXplKHBhdHRlcm5zTGlzdFtpbmRleC0xXS5wYXR0ZXJuLHRoaXMuZ3JpZEhlaWdodCx0aGlzLmdyaWRXaWR0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3JhbmRvbSBsaXZlIGNlbGxzIGhhdmUgaW5kZXggPSAwXHJcbiAgICAgICAgICAgICAgICBuZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdD1nZXRSYW5kb21QYXR0ZXJuKHRoaXMuZ3JpZEhlaWdodCx0aGlzLmdyaWRXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZihtb2RlLmNsZWFyKXtcclxuICAgICAgICAgICAgICAgIC8vYm9hcmQgaXMgY2xlYXIgLSB0aGVyZSBhcmVuJ3QgYW55IGxpdmUgY2VsbHMgb24gdGhlIGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3QgPSBuZXh0R2VuZXJhdGlvbkNoYW5nZUNlbGxzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEdlbmVyYXRpb24uaXNGaXJzdCA9IHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vd2UgaGF2ZSB0byBjbGVhciB0aGUgcmVtYWluZWQgY2VsbHMgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3Q9Z2V0Q2hhbmdlUGF0dGVybkNoYW5nZUxpc3QodGhpcy52YWx1ZXNCb2FyZCwgbmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBjbnZMZWZ0ID0gTWF0aC5mbG9vcihyZWN0LmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IGNudlJpZ2h0ID0gTWF0aC5mbG9vcihyZWN0LnJpZ2h0KTtcclxuICAgICAgICBjb25zdCBjbnZUb3AgPSBNYXRoLmZsb29yKHJlY3QudG9wKTtcclxuICAgICAgICBjb25zdCBjbnZCb3R0b20gPSBNYXRoLmZsb29yKHJlY3QuYm90dG9tKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50U3F1YXJlU2l6ZSA9IHRoaXMuZ3JpZFNxdWFyZVNpemUgKiB0aGlzLnJhdGlvO1xyXG4gICAgICAgIGNvbnN0IHIgPSBjdXJyZW50U3F1YXJlU2l6ZSAvIDIgLSAxO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkV2lkdGg9KHRoaXMuZ3JpZFdpZHRoICsgMSkgKiBjdXJyZW50U3F1YXJlU2l6ZTtcclxuICAgICAgICBjb25zdCBib2FyZEhlaWdodD0odGhpcy5ncmlkSGVpZ2h0ICsgMSkgKiBjdXJyZW50U3F1YXJlU2l6ZTtcclxuICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoKGdldEN1cnNvclBvcyhlKVswXS1jbnZMZWZ0KS8oY252UmlnaHQtY252TGVmdCkqYm9hcmRXaWR0aCk7XHJcbiAgICAgICAgbGV0IHkgPSBNYXRoLnJvdW5kKChnZXRDdXJzb3JQb3MoZSlbMV0tY252VG9wKS8oY252Qm90dG9tLWNudlRvcCkqYm9hcmRIZWlnaHQpO1xyXG4gICAgICAgaWYoKHggKyBjdXJyZW50U3F1YXJlU2l6ZS8yKSAlIGN1cnJlbnRTcXVhcmVTaXplICE9PSAwICYmICh5ICsgY3VycmVudFNxdWFyZVNpemUvMikgJSBjdXJyZW50U3F1YXJlU2l6ZSAhPT0gMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5lYXJlc3RYID0gTWF0aC5mbG9vcigoeCArIGN1cnJlbnRTcXVhcmVTaXplIC8gMikgLyBjdXJyZW50U3F1YXJlU2l6ZSlcclxuICAgICAgICAgICAgY29uc3QgbmVhcmVzdFkgPSBNYXRoLmZsb29yKCh5ICsgY3VycmVudFNxdWFyZVNpemUgLyAyKSAvIGN1cnJlbnRTcXVhcmVTaXplKVxyXG4gICAgICAgICAgICBpZihNYXRoLnBvdyh4IC0gbmVhcmVzdFggKiBjdXJyZW50U3F1YXJlU2l6ZSwgMikgKyBNYXRoLnBvdyh5IC0gbmVhcmVzdFkgKiBjdXJyZW50U3F1YXJlU2l6ZSwgMikgPCBNYXRoLnBvdyhyLCAyKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZENlbGwgPSBbbmVhcmVzdFkgLSAxLCBuZWFyZXN0WCAtIDFdO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdC5wdXNoKGNsaWNrZWRDZWxsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UoY2FudmFzKXtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICAgICAgaWYodGhpcy5jYW52YXMpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoPVwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0PXRoaXMuY2FudmFzLm9mZnNldFdpZHRoICogciArIFwicHhcIjtcclxuICAgICAgIFxyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMaXZlQ2VsbHMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0TGl2ZUNlbGxzKHRoaXMudmFsdWVzQm9hcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShtb2RlKXtcclxuICAgICAgICB0aGlzLmNoZWNrTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG1vZGUpe1xyXG4gICAgICAgICAgICBpZihtb2RlLmRyYXdpbmcpe1xyXG4gICAgICAgICAgICAgICAgLy90aGlzIG9wZXJhdGlvbiBjaGFuZ2VzIHZhbHVlc0JvYXJkIGFuZCBjaGVja2xpc3RcclxuICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VDZWxsTGlzdCA9IGdldENoYW5nZUxpc3QodGhpcy52YWx1ZXNCb2FyZCx0aGlzLm5leHRHZW5lcmF0aW9uLHRoaXMuY2hlY2tMaXN0KTsvL3RoZSBsaXN0IG9mIGNlbGxzIHRoYXQgY2hhbmdlcyBjb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUYWJsZSh0aGlzLnZhbHVlc0JvYXJkLCB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3QsIHRoaXMuY2FudmFzLCB0aGlzLmdyaWRTcXVhcmVTaXplLCB0aGlzLmdyaWRXaWR0aCwgdGhpcy5ncmlkSGVpZ2h0LCB0aGlzLm9yaWdpbmFsQ2VsbEltYWdlLCB0aGlzLnJhdGlvKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRHZW5lcmF0aW9uLmxpc3QgPSB0b3RhbE5laWdoYm9yc1JldmlzaW9uKHRoaXMudmFsdWVzQm9hcmQpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG1vZGUuY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdD10b3RhbExpdmVDZWxsc1JldmlzaW9uKHRoaXMudmFsdWVzQm9hcmQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZUNlbGxMaXN0ID0gZ2V0Q2hhbmdlTGlzdCh0aGlzLnZhbHVlc0JvYXJkLHRoaXMubmV4dEdlbmVyYXRpb24sdGhpcy5jaGVja0xpc3QpOy8vdGhlIGxpc3Qgb2YgY2VsbHMgdGhhdCBjaGFuZ2VzIGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRhYmxlKHRoaXMudmFsdWVzQm9hcmQsIHRoaXMubmV4dEdlbmVyYXRpb24ubGlzdCwgdGhpcy5jYW52YXMsIHRoaXMuZ3JpZFNxdWFyZVNpemUsIHRoaXMuZ3JpZFdpZHRoLCB0aGlzLmdyaWRIZWlnaHQsIHRoaXMub3JpZ2luYWxDZWxsSW1hZ2UsIHRoaXMucmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0xpc3QubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcyBvcGVyYXRpb24gY2hhbmdlcyB2YWx1ZXNCb2FyZCBhbmQgY2hlY2tsaXN0XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhbmdlQ2VsbExpc3QgPSBnZXRDaGFuZ2VMaXN0KHRoaXMudmFsdWVzQm9hcmQsdGhpcy5uZXh0R2VuZXJhdGlvbix0aGlzLmNoZWNrTGlzdCk7Ly90aGUgbGlzdCBvZiBjZWxscyB0aGF0IGNoYW5nZXMgY29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGFibGUodGhpcy52YWx1ZXNCb2FyZCwgdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0LCB0aGlzLmNhbnZhcywgdGhpcy5ncmlkU3F1YXJlU2l6ZSwgdGhpcy5ncmlkV2lkdGgsIHRoaXMuZ3JpZEhlaWdodCwgdGhpcy5vcmlnaW5hbENlbGxJbWFnZSwgdGhpcy5yYXRpbyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0ID0gY2hhbmdlQ2VsbExpc3Q7ICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEdlbmVyYXRpb24uaXNGaXJzdCA9IGZhbHNlICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VDZWxsTGlzdCA9IGdldENoYW5nZUxpc3QodGhpcy52YWx1ZXNCb2FyZCx0aGlzLm5leHRHZW5lcmF0aW9uLHRoaXMuY2hlY2tMaXN0KTsvL3RoZSBsaXN0IG9mIGNlbGxzIHRoYXQgY2hhbmdlcyBjb2xvcjtcclxuICAgICAgICAgICAgdXBkYXRlVGFibGUodGhpcy52YWx1ZXNCb2FyZCwgdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0LCB0aGlzLmNhbnZhcywgdGhpcy5ncmlkU3F1YXJlU2l6ZSwgdGhpcy5ncmlkV2lkdGgsIHRoaXMuZ3JpZEhlaWdodCwgdGhpcy5vcmlnaW5hbENlbGxJbWFnZSwgdGhpcy5yYXRpbywgdGhpcy5ncmlkSXNPcGVuKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0ID0gY2hhbmdlQ2VsbExpc3Q7ICAgICBcclxuICAgICAgICAgICAgdGhpcy5uZXh0R2VuZXJhdGlvbi5pc0ZpcnN0ID0gZmFsc2UgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUdyaWQ7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdHcmlkKGNhbnZhcywgd2lkdGgsIGhlaWdodCwgc3F1YXJlU2l6ZSl7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB2YXIgcmFkaXVzID0gc3F1YXJlU2l6ZS8yIC0gMTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGU9XCIjODc4Nzg5XCI7XHJcbiAgICBjb25zdCB3ID0gKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplXHJcbiAgICBjb25zdCBoID0gKGhlaWdodCArIDEpICogc3F1YXJlU2l6ZVxyXG4gICAgY3R4LmxpbmVXaWR0aCA9IC4yO1xyXG4gICAgZm9yKGxldCBpID0gc3F1YXJlU2l6ZTsgaSA8IGg7IGkgKz0gc3F1YXJlU2l6ZSl7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oMCxpKTtcclxuICAgICAgICBjdHgubGluZVRvKHcsaSk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaSA9IHNxdWFyZVNpemU7IGkgPCB3OyBpICs9IHNxdWFyZVNpemUpe1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKGksMCk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhpLGgpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGkgPSBzcXVhcmVTaXplOyBpIDwgaDsgaSArPSBzcXVhcmVTaXplKXtcclxuICAgICAgICBmb3IobGV0IGogPSBzcXVhcmVTaXplOyBqIDwgdzsgaiArPSBzcXVhcmVTaXplKXtcclxuICAgICAgICAgICAgZHJhd19jaXJjbGUoY3R4LCBqLCBpLCByYWRpdXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZHJhd19jaXJjbGUoY29udGV4dCwgeCwgeSwgcmFkaXVzKSB7XHJcbiAgICBjb250ZXh0LnNhdmUoKVxyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjM7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMkY0RjRGJztcclxuICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIGNvbnRleHQucmVzdG9yZSgpXHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlVGFibGUodmFsdWVzQm9hcmQsIGNoYW5nZUxpc3QsIGNhbnZhcywgc3F1YXJlU2l6ZSwgd2lkdGgsIGhlaWdodCwgZW1wdHlDZWxsSW1hZ2UsIHJhdGlvLCBncmlkSXNPcGVuKXtcclxuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlVGFibGVcIilcclxuICAgIGNoYW5nZUxpc3QuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZvckVhY2hcIilcclxuICAgICAgICBsZXQgWSA9IGNlbGxbMF07XHJcbiAgICAgICAgbGV0IFggPSBjZWxsWzFdO1xyXG4gICAgICAgIGlmKGdyaWRJc09wZW4pe1xyXG4gICAgICAgICAgICBpZihYID49IDIwICYmICBYIDwgd2lkdGggLSAyMCAmJiBZID49IDIwICYmICBZIDwgaGVpZ2h0IC0gMjApe1xyXG5cclxuICAgICAgICAgICAgICAgIFggLT0gMjA7XHJcbiAgICAgICAgICAgICAgICBZIC09IDIwO1xyXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzQm9hcmRbY2VsbFswXV1bY2VsbFsxXV0uc3RhdGUgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdDZWxsKFtZLFhdLCBjYW52YXMsIHNxdWFyZVNpemUsIHNxdWFyZVNpemUgLyAyLCAnZW1wdHknLCBlbXB0eUNlbGxJbWFnZSwgcmF0aW8pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdDZWxsKFtZLFhdLCBjYW52YXMsIHNxdWFyZVNpemUsIHNxdWFyZVNpemUgLyAyLCAnZnVsbCcsIGVtcHR5Q2VsbEltYWdlLCByYXRpbylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlc0JvYXJkW2NlbGxbMF1dW2NlbGxbMV1dLnN0YXRlID09PSAwKXtcclxuICAgICAgICAgICAgICAgIGRyYXdDZWxsKGNlbGwsIGNhbnZhcywgc3F1YXJlU2l6ZSwgc3F1YXJlU2l6ZSAvIDIsICdlbXB0eScsIGVtcHR5Q2VsbEltYWdlLCByYXRpbylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRyYXdDZWxsKGNlbGwsIGNhbnZhcywgc3F1YXJlU2l6ZSwgc3F1YXJlU2l6ZSAvIDIsICdmdWxsJywgZW1wdHlDZWxsSW1hZ2UsIHJhdGlvKVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZHJhd0NlbGwoY2VsbCwgY2FudmFzLCBzcXVhcmVTaXplLCByYWRpdXMsIHNoYXBlLCBlbXB0eUNlbGxJbWFnZSwgcmF0aW8pe1xyXG4gICAgY29uc3QgY2VsbFJhZGl1cyA9IChyYWRpdXMgLSAxKVxyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbiAgICBjb25zdCBZID0gKGNlbGxbMF0gKyAxKSAqIHNxdWFyZVNpemVcclxuICAgIGNvbnN0IFggPSAoY2VsbFsxXSArIDEpICogc3F1YXJlU2l6ZVxyXG4gICAgaWYoc2hhcGUgPT09ICdlbXB0eScpe1xyXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpXHJcbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoZW1wdHlDZWxsSW1hZ2UsIChYIC0gcmFkaXVzKSAqIHJhdGlvLCAoWSAtIHJhZGl1cykgKiByYXRpbyk7XHJcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGV4dC5zYXZlKClcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuYXJjKFgsIFksIGNlbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGMDAwMCc7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJzb3JQb3NpdGlvbihlKSB7XHJcbiAgICB2YXIgeDtcclxuICAgIHZhciB5O1xyXG4gICAgdmFyIHgxO1xyXG4gICAgdmFyIHgyO1xyXG5cclxuICAgIGlmIChlLnBhZ2VYICE9IHVuZGVmaW5lZCAmJiBlLnBhZ2VZICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHggPSBlLnBhZ2VYO1xyXG4gICAgICAgIHkgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICB4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIH1cclxuICAgIHgxID0gZS5jbGllbnRYXHJcbiAgICB4MiA9IGUuY2xpZW50WVxyXG4gICAgcmV0dXJuIFt4LCB5LCB4MSwgeDJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJzb3JQb3MoZSkge1xyXG4gICAgdmFyIHg7XHJcbiAgICB2YXIgeTtcclxuXHJcbiAgICB4ID0gZS5jbGllbnRYXHJcbiAgICB5ID0gZS5jbGllbnRZXHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hlbHBlcnMvR2FtZUdyaWQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUhBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQWtCQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBRUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OztBQUdBO0FBQUE7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUExQkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OztBQXZPQTtBQUFBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7OztBQWdPQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9