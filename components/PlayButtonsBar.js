import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import SpeedSlider from './SpeedSlider';
import Generation from './Generation';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Clear from 'material-ui-icons/Clear';
import SkipNext from 'material-ui-icons/SkipNext';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ToggleIcon from './ToggleIcon';
import pure from 'recompose/pure'
import {colors as color} from '../helpers/colors';


const styles = theme => ({
    button: {
         color:color.BUTTON,
         width: 35,
          height: 35,
          },

  icon: {
      width: 25,
      height: 25,

    },
    vertical: {
        [theme.breakpoints.up('xs')]: {
            marginTop: 10
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: 20
        }
    },
    bar: {
        margin: 5,
        display: 'flex',
        justifyContent: 'space-between',
    },
    controls: {
        display: 'flex',
    },
    slider: {
        marginTop: 10,
        marginLeft: 15,
    },

    generation: {
        align: 'flex-end',
        marginTop: 5,
        marginRight: 15,
        transform: 'skew(-10deg)',
     }
});

const textColor = 'white';

const PlayButtonsBar = (props) => {

    
	return (


            <div className={props.classes.bar}>
                <div className={props.classes.controls}>
                    <div  className={props.classes.item}>
                        <IconButton className={props.classes.button} title={props.on?"Start":"Pause"} onClick = {() => props.handlePlayToggle()}>
                            <ToggleIcon
                                on={props.on}
                                onIcon={<PlayArrow className={props.classes.icon}/>}
                                offIcon={<Pause className={props.classes.icon} />}
                                 
                              />
                        </IconButton>
               
                    </div>
                    <div  className={props.classes.item}>
                        <IconButton className={props.classes.button} title="Next Generation" onClick = {() => props.step()} >
                            <SkipNext className={props.classes.icon}/>
                        </IconButton>
                    
                    </div>
                    <div  className={props.classes.item}>
                        <IconButton className={props.classes.button} title="Clear" onClick = {() => props.clear()} >
                            <Clear  className={props.classes.icon}/>
                        </IconButton>
                    </div>
                    <div className={props.classes.slider} title="Set Speed">
                    <SpeedSlider onChange={(v) => props.setInterval(v)}/>
                    </div>
                </div>
                <div>
                    <div className={props.classes.generation} title="Generation">
                    <Generation />
                    </div>
                </div>
            </div>

		
	);
   
}

export default withStyles(styles)(pure(PlayButtonsBar));


PlayButtonsBar.propTypes = {
    classes: PropTypes.object.isRequired,
    handlePlayToggle: PropTypes.func.isRequired,
    on: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    step: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    setInterval: PropTypes.func.isRequired,
};
