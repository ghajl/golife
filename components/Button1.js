import React from 'react';

import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Clear from 'material-ui-icons/Clear';
import SkipNext from 'material-ui-icons/SkipNext';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ToggleIcon from 'material-ui-toggle-icon';

const styles = theme => ({
  button: {
 // border: '1px solid blue',
 // padding: 0,
 // margin: 0,
  },

  icon: {
  //   [theme.breakpoints.up('sm')]: {
  //       width: 25,
  //       height: 25,
  //   },
  //   [theme.breakpoints.up('md')]: {
  //       width: 35,
  //       height: 35,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //       width: 45,
  //       height: 45,
  //   },
  //       width: 40,
  //       height: 40,

  // }
      width: 25,
      height: 25,

    }
});
// const styles = {
//   smallIcon: {
//     width: 45,
//     height: 45,
//   },
//   small: {
//     width: 52,
//     height: 52,
//     padding: 1,
//     marginTop: 20,
//     marginBottom: 20
//   }
// };

const Button1 = (props) => {
  const classes = props.classes;

    return (
      <div>
      <IconButton
           className={classes.button} aria-label="Play" onClick = {props.onClick}
        >
            {props.buttonType == 'play' &&
                <PlayArrow className={classes.icon} color = {props.color}/>
            }
            {props.buttonType == 'step' &&
                <SkipNext className={classes.icon} color = {props.color}/>
            }            
            {props.buttonType == 'pause' &&
                <Pause className={classes.icon} color = {props.color}/>
            }
            {props.buttonType == 'clear' &&
                <Clear className={classes.icon} color = {props.color}/>
            }
        </IconButton>
      </div>
    )
  
}


export default withStyles(styles)(Button1);


Button1.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
