"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function () {
    function Cell(checkList, Y, X) {
        (0, _classCallCheck3.default)(this, Cell);

        this.value = 0;
        this._Y = Y;
        this._X = X;
        this.count = 0;
        this.listeners = {};

        // this.stateChangelisteners = [];
        // this.neighborsChangeListeners = [];
        // this.changeTable = checkList;
        this.checkList = checkList;
        // console.log(this.checkList.length+"ss");
    }

    (0, _createClass3.default)(Cell, [{
        key: "addNeighbor",
        value: function addNeighbor() {
            this.count += 1;
            this.listeners["neighborsChange"][0]();
        }
    }, {
        key: "removeNeighbor",
        value: function removeNeighbor() {
            this.count -= 1;
            this.listeners["neighborsChange"][0]();
        }
    }, {
        key: "getNeighborsCount",
        value: function getNeighborsCount() {
            return this.count;
        }
    }, {
        key: "changeState",
        value: function changeState() {
            this.value === 0 ? this.state = 1 : this.state = 0;
        }
    }, {
        key: "addListener",
        value: function addListener(type, listener) {
            if (typeof this.listeners[type] == "undefined") {
                this.listeners[type] = [];
            }

            this.listeners[type].push(listener);
            // console.log("x");
        }
    }, {
        key: "removeListener",
        value: function removeListener(type, listener) {
            if (Array.isArray(this.listeners[type])) {
                var listeners = this.listeners[type];
                for (var i = 0, len = listeners.length; i < len; i++) {
                    if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }, {
        key: "setCheckList",
        value: function setCheckList(checkList) {
            this.checkList = checkList;
        }
    }, {
        key: "state",
        set: function set(val) {
            if (val != this.value) {
                this.value = val;

                for (var i = 0; i < this.listeners["neighborStateChange"].length; i++) {
                    this.listeners["neighborStateChange"][i](this.value);
                }
            }
        },
        get: function get() {
            return this.value;
        }
    }, {
        key: "Y",
        get: function get() {
            return this._Y;
        }
    }, {
        key: "X",
        get: function get() {
            return this._X;
        }
    }]);

    return Cell;
}();

exports.default = Cell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXENlbGwuanMiXSwibmFtZXMiOlsiQ2VsbCIsImNoZWNrTGlzdCIsIlkiLCJYIiwidmFsdWUiLCJfWSIsIl9YIiwiY291bnQiLCJsaXN0ZW5lcnMiLCJzdGF0ZSIsInR5cGUiLCJsaXN0ZW5lciIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibGVuIiwibGVuZ3RoIiwic3BsaWNlIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCLEEsbUJBRWpCO2tCQUFZLEFBQVosV0FBc0IsQUFBdEIsR0FBd0IsQUFBeEIsR0FDQTs0Q0FDSTs7YUFBSyxBQUFMLFFBQWEsQUFBYixBQUNBO2FBQUssQUFBTCxLQUFRLEFBQVIsQUFDQTthQUFLLEFBQUwsS0FBUSxBQUFSLEFBQ0E7YUFBSyxBQUFMLFFBQWEsQUFBYixBQUNBO2FBQUssQUFBTCxZQUFpQixBQUFqQixBQUVBOztBQUNBO0FBQ0E7QUFDQTthQUFLLEFBQUwsWUFBaUIsQUFBakIsQUFDQTtBQUNIOzs7OztzQ0EyQlksQUFDVDtpQkFBSyxBQUFMLFNBQWMsQUFBZCxBQUNBO2lCQUFLLEFBQUwsVUFBZSxBQUFmLG1CQUFrQyxBQUFsQyxBQUNIOzs7O3lDQUVlLEFBQ1o7aUJBQUssQUFBTCxTQUFjLEFBQWQsQUFDQTtpQkFBSyxBQUFMLFVBQWUsQUFBZixtQkFBa0MsQUFBbEMsQUFDSDs7Ozs0Q0FFa0IsQUFDakI7bUJBQU8sS0FBSyxBQUFaLEFBQ0Q7Ozs7c0NBRVksQUFDWDtpQkFBSyxBQUFMLFVBQWUsQUFBZixJQUFrQixLQUFLLEFBQUwsUUFBYSxBQUEvQixJQUFtQyxLQUFLLEFBQUwsUUFBYSxBQUFoRCxBQUNEOzs7O29DQUVXLEEsTUFBTSxBLFVBQVMsQUFDekI7Z0JBQUksT0FBTyxLQUFLLEFBQUwsVUFBZSxBQUFmLEFBQVAsU0FBK0IsQUFBbkMsYUFBK0MsQUFDM0M7cUJBQUssQUFBTCxVQUFlLEFBQWYsUUFBdUIsQUFBdkIsQUFDSDtBQUVEOztpQkFBSyxBQUFMLFVBQWUsQUFBZixNQUFxQixBQUFyQixLQUEwQixBQUExQixBQUNBO0FBQ0Q7Ozs7dUNBRWMsQSxNQUFNLEEsVUFBUyxBQUM1QjtnQkFBSSxNQUFNLEFBQU4sUUFBYyxLQUFLLEFBQUwsVUFBZSxBQUFmLEFBQWQsQUFBSixRQUF3QyxBQUNwQztvQkFBSSxZQUFZLEtBQUssQUFBTCxVQUFlLEFBQWYsQUFBaEIsQUFDQTtxQkFBSyxJQUFJLElBQUUsQUFBTixHQUFTLE1BQUksVUFBVSxBQUE1QixRQUFvQyxJQUFJLEFBQXhDLEtBQTZDLEFBQTdDLEtBQWlELEFBQzdDO3dCQUFJLFVBQVUsQUFBVixPQUFpQixBQUFyQixVQUE4QixBQUMxQjtrQ0FBVSxBQUFWLE9BQWlCLEFBQWpCLEdBQW9CLEFBQXBCLEFBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFDRjs7OztxQ0FFWSxBLFdBQVUsQUFDckI7aUJBQUssQUFBTCxZQUFpQixBQUFqQixBQUNEOzs7OzBCQWpFUyxBLEtBQUksQUFDVjtnQkFBRyxPQUFPLEtBQUssQUFBZixPQUFxQixBQUNqQjtxQkFBSyxBQUFMLFFBQWEsQUFBYixBQUVBOztxQkFBSSxJQUFJLElBQUUsQUFBVixHQUFZLElBQUUsS0FBSyxBQUFMLFVBQWUsQUFBZix1QkFBc0MsQUFBcEQsUUFBMkQsQUFBM0QsS0FBK0QsQUFDM0Q7eUJBQUssQUFBTCxVQUFlLEFBQWYsdUJBQXNDLEFBQXRDLEdBQXlDLEtBQUssQUFBOUMsQUFDSDtBQUVKO0FBQ0o7QTs0QkFFVSxBQUNQO21CQUFPLEtBQUssQUFBWixBQUNIOzs7OzRCQUVNLEFBQ0w7bUJBQU8sS0FBSyxBQUFaLEFBQ0Q7Ozs7NEJBRU0sQUFDTDttQkFBTyxLQUFLLEFBQVosQUFDRDs7Ozs7OztrQkF2Q2dCLEEiLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9