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

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Select.js';

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNlbGVjdC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290Iiwid2lkdGgiLCJtYXhXaWR0aCIsIlNlbGVjdCIsInByb3BzIiwic3RhdGUiLCJhbmNob3JFbCIsInVuZGVmaW5lZCIsIm9wZW4iLCJidXR0b24iLCJoYW5kbGVDbGlja0xpc3RJdGVtIiwic2V0U3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNZW51SXRlbUNsaWNrIiwiaW5kZXgiLCJvbkNoYW5nZSIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIm9wdGlvbnMiLCJpdGVtcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiY2xhc3NlcyIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsIm1hcCIsIm9wdGlvbiIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJzdHJpbmciLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7OzthQUNMLEFBQ0ssQUFDUDtnQkFITyxBQUFVLEFBQ2YsQUFFUTs7QUFGUixBQUNGOztBQUZpQixBQUNyQjtBQURKOztJQWFNLEE7a0NBQ0g7O2tCQUFBLEFBQVksT0FBTTt3Q0FBQTs7c0lBQUEsQUFDVDs7VUFEUyxBQWNsQjtnQkFBUSxBQUNHLEFBQ1Y7WUFBTSxBQUNOO0FBakJpQixBQWNWOztBQUFBLEFBQ1A7VUFmaUIsQUFxQmxCLFNBckJrQixBQXFCVDs7VUFyQlMsQUF1QmxCLHNCQUFzQixpQkFBUyxBQUM5QjtZQUFBLEFBQUssU0FBUyxFQUFFLE1BQUYsQUFBUSxNQUFNLFVBQVUsTUFBdEMsQUFBYyxBQUE4QixBQUM1QztBQXpCaUI7O1VBQUEsQUEyQmxCLHNCQUFzQixVQUFBLEFBQUMsT0FBRCxBQUFRLE9BQVUs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QUFVLE9BTG5CLEFBQW1CLEFBS087QUFMUCxBQUNqQjs7a0JBT2Esd0JBQUEsQUFBVyxRLEFBQVgsQUFBbUI7O0FBTWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJTZWxlY3QuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==