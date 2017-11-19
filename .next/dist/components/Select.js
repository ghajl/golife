'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _colors = require('material-ui/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Select.js';


var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360

    }

  };
};

var Select = function (_Component) {
  (0, _inherits3.default)(Select, _Component);

  function Select(props) {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

    _this.state = {
      anchorEl: undefined,
      open: false
      // selectedIndex: this.props.index,

    };
    _this.button = undefined;

    _this.handleClickListItem = function (event) {
      _this.setState({ open: true, anchorEl: event.currentTarget });
    };

    _this.handleMenuItemClick = function (event, index) {

      _this.setState({ open: false });
      _this.props.onChange(index);
    };

    _this.handleRequestClose = function () {
      _this.setState({ open: false });
    };

    _this.options = [];
    //       <MenuItem key={1} value={-1} primaryText={this.props.items[0]} />
    // ];
    if (typeof props.items !== 'undefined') {
      for (var i = 0; i < props.items.length; i++) {
        _this.options.push(props.items[i]);
      }
    }

    return _this;
  }

  (0, _createClass3.default)(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      console.log("ccc");
      this.options.length = 0;
      if (typeof this.props.items !== 'undefined') {
        for (var i = 0; i < this.props.items.length; i++) {
          this.options.push(this.props.items[i]);
        }
      }
      return _react2.default.createElement('div', { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_List2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_List.ListItem, {
        button: true,
        'aria-haspopup': 'true',
        'aria-controls': 'lock-menu',
        'aria-label': this.props.label,
        onClick: this.handleClickListItem,

        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, this.props.index < 0 ? _react2.default.createElement(_List.ListItemText, {
        primary: this.props.label,
        secondary: '',

        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }) : _react2.default.createElement(_List.ListItemText, {
        primary: this.props.label,
        secondary: this.options[this.props.index],

        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), _react2.default.createElement(_Menu2.default, {
        id: 'lock-menu',
        anchorEl: this.state.anchorEl,
        open: this.state.open,
        onRequestClose: this.handleRequestClose,
        transitionDuration: 250,

        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.options.map(function (option, index) {
        return _react2.default.createElement(_Menu.MenuItem, {
          key: option,
          selected: index === _this2.props.index,
          onClick: function onClick(event) {
            return _this2.handleMenuItemClick(event, index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, option);
      })));
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  items: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  label: _propTypes2.default.string.isRequired,
  index: _propTypes2.default.number.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Select);

// export default class Select extends Component {
// 	constructor(props){
// 		super(props)
// 		this.items = []
//             //       <MenuItem key={1} value={-1} primaryText={this.props.items[0]} />
//             // ];
//         if(typeof this.props.items !== 'undefined'){
// 	        for(let i=0;i<this.props.items.length;i++){
// 	                this.items.push(<MenuItem key={i} value={i} primaryText={this.props.items[i]} />)
// 			}	        
//         }

// 	}
// 	shouldComponentUpdate(nextProps) {
// 		// console.log(nextProps.items + "it" + this.props.items)
// 		// console.log(nextProps.items !== this.props.items)
//         return nextProps.value !== this.props.value || nextProps.size !== this.props.size || nextProps.items !== this.props.items;
//     }

// 	render() {
// 		this.items.length = 0
//         if(typeof this.props.items !== 'undefined'){

//         }		
// 		return (
// 	    <div>  


// 	    </div>
// 	    );
// 	  }
// }


// 	constructor(props){
// 		super(props)
// 		this.items = []
//             //       <MenuItem key={1} value={-1} primaryText={this.props.items[0]} />
//             // ];
//         if(typeof this.props.items !== 'undefined'){
// 	        for(let i=0;i<this.props.items.length;i++){
// 	                this.items.push(<MenuItem key={i} value={i} primaryText={this.props.items[i]} />)
// 			}
//         }

// 	}
// 	shouldComponentUpdate(nextProps) {
// 		// console.log(nextProps.items + "it" + this.props.items)
// 		// console.log(nextProps.items !== this.props.items)
//         return nextProps.value !== this.props.value || nextProps.size !== this.props.size || nextProps.items !== this.props.items;
//     }

// 	render() {
// 		this.items.length = 0
//         if(typeof this.props.items !== 'undefined'){
// 	        for(let i=0;i<this.props.items.length;i++){
// 	                this.items.push(<MenuItem key={i} value={i} primaryText={this.props.items[i]} />)
// 			}
//         }		
// 		return (
// 	    <div>  
// 	    {this.props.size == 'small'? (

// 	        <SelectField

// 	        	underlineStyle = {style}

// 	        	autoWidth={false}
// 	        	style={rootStyle}
// 	        	value={this.props.value}
// 		        onChange={(event, index, value) => this.props.onChange(value)}
// 		        floatingLabelText={this.props.floatingLabelText}
// 	        >
// 	          {this.items}
// 	        </SelectField>

// 	    	) : (
// 	        <SelectField

// 	        	underlineStyle = {style}

// 	        	value={this.props.value}
// 		        onChange={(event, index, value) => this.props.onChange(value)}
// 		        floatingLabelText={this.props.floatingLabelText}
// 	        >
// 	          {this.items}
// 	        </SelectField>
// 	    	)}

// 	    </div>
// 	    );
// 	  }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNlbGVjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIndpdGhTdHlsZXMiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbVRleHQiLCJNZW51IiwiTWVudUl0ZW0iLCJyZWQiLCJwdXJwbGUiLCJzdHlsZXMiLCJyb290Iiwid2lkdGgiLCJtYXhXaWR0aCIsIlNlbGVjdCIsInByb3BzIiwic3RhdGUiLCJhbmNob3JFbCIsInVuZGVmaW5lZCIsIm9wZW4iLCJidXR0b24iLCJoYW5kbGVDbGlja0xpc3RJdGVtIiwic2V0U3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNZW51SXRlbUNsaWNrIiwiaW5kZXgiLCJvbkNoYW5nZSIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIm9wdGlvbnMiLCJpdGVtcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiY2xhc3NlcyIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsIm1hcCIsIm9wdGlvbiIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJzdHJpbmciLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFRLEFBQVU7Ozs7QUFDekIsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFLOzs7Ozs7O0FBRWQsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBOzs7YUFDTCxBQUNLLEFBQ1A7Z0JBSE8sQUFBVSxBQUNmLEFBRVE7O0FBRlIsQUFDRjs7QUFGaUIsQUFDckI7QUFESjs7SUFhTSxBO2tDQUNIOztrQkFBQSxBQUFZLE9BQU07d0NBQUE7O3NJQUFBLEFBQ1Q7O1VBRFMsQUFjbEI7Z0JBQVEsQUFDRyxBQUNWO1lBQU0sQUFDTjtBQWpCaUIsQUFjVjs7QUFBQSxBQUNQO1VBZmlCLEFB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cENSLEFBQ0UsQUEwQkUsQUFRRyxBQVlSOzs7OztBLEFBOUZnQjs7QUFpR3JCLE9BQUEsQUFBTztXQUNJLG9CQUFBLEFBQVUsT0FERixBQUNTLEFBQzFCO1NBQU8sb0JBQUEsQUFBVSxNQUZBLEFBRU0sQUFDdkI7WUFBVSxvQkFBQSxBQUFVLEtBSEgsQUFHUSxBQUN6QjtTQUFPLG9CQUFBLEFBQVUsT0FKQSxBQUlPLEFBQ3hCO1NBQU8sb0JBQUEsQUFBVSxPQUxuQixBQUFtQixBQUtPLEFBRzFCO0FBUm1CLEFBQ2pCOztrQkFPYSx3QkFBQSxBQUFXLFFBQTFCLEFBQWUsQUFBbUI7O0FBTWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJTZWxlY3QuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==