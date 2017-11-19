import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import { red, purple } from 'material-ui/colors';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        
      
    },
  
});




class Select extends Component {
  	constructor(props){
    		super(props)
    		this.options = []
                //       <MenuItem key={1} value={-1} primaryText={this.props.items[0]} />
                // ];
            if(typeof props.items !== 'undefined'){
    	        for(let i=0;i<props.items.length;i++){
    	                this.options.push(props.items[i])
    			}	        
            }
              
  	}


  	state = {
  		anchorEl: undefined,
  		open: false,
  		// selectedIndex: this.props.index,
      
  	};

  	button = undefined;

  	handleClickListItem = event => {
  		this.setState({ open: true, anchorEl: event.currentTarget, });
  	};

  	handleMenuItemClick = (event, index) => {

  		this.setState({ open: false, });
  		this.props.onChange(index)
  	};

  	handleRequestClose = () => {
  		this.setState({ open: false });
  	};

    render() {
      const classes = this.props.classes;
      console.log("ccc");
      this.options.length = 0;
      if(typeof this.props.items !== 'undefined'){
  	        for(let i=0;i<this.props.items.length;i++){
                  this.options.push(this.props.items[i])
  		}	        
      }
      return (
        <div className={classes.root}>
          <List>
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label={this.props.label}
              onClick={this.handleClickListItem}

            >
            {this.props.index < 0 ? (
  				<ListItemText
  	              primary={this.props.label}
  	              secondary=""

  	            />
  	            ) : (
  	            <ListItemText
  	              primary={this.props.label}
  	              secondary={this.options[this.props.index]}

  	            />
  	            )}
              
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
            transitionDuration={250}

          >
            {this.options.map((option, index) =>
              <MenuItem
                key={option}
                selected={index === this.props.index}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>,
            )}
          </Menu>
        </div>
      );
    }
}

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default withStyles(styles)(Select);





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