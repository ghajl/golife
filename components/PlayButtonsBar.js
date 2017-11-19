import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button1 from './Button1';
import SpeedSlider from './SpeedSlider';
import Generation from './Generation';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Clear from 'material-ui-icons/Clear';
import SkipNext from 'material-ui-icons/SkipNext';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ToggleIcon from 'material-ui-toggle-icon';
import pure from 'recompose/pure'


const styles = theme => ({
    root: {
   		// flexGrow: 1,
        
        // width: 60,
        
    },
    root1: {
        // border: '1px solid red',
        
        // width: 60,

    },
    button: {
         // border: '1px solid blue',
         // padding: 0,
         // margin: 0,
         width: 35,
          height: 35,
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

    },
    item: {
// flexGrow: 1,
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
        // border: '1px solid',
        // borderColor: 'rgba(0,0,0,.2)',
        // borderRadius: 25,
        margin: 5,
        display: 'flex',
        justifyContent: 'space-between',
        // flexDirection: 'row',

        // 'flex-flow': 'row',
        // height: 50,
//         flex: {
//   // basis: null,
//   direction: 'row',
//   // flow: 'row',
//   // grow: null,
//   // shrink: null,
//   // wrap: null
// }
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
        color:'rgba(231,166,26,.1)',
        transform: 'skew(-10deg)',
        // boxShadow: '0px 0px 30px -8px rgba(0,0,0,0.5)',

        
    }
});

const textColor = 'white';

const PlayButtonsBar = (props) => {

    
	return (


            <div className={props.classes.bar}>
                <div className={props.classes.controls}>
                    <div  className={props.classes.item}>
                        <IconButton className={props.classes.button} aria-label="Play"  onClick = {() => props.handlePlayToggle()}>
                            <ToggleIcon
                                on={props.on}
                                onIcon={<PlayArrow className={props.classes.icon} />}
                                offIcon={<Pause className={props.classes.icon} />}
                                color = {props.color} 
                              />
                        </IconButton>
               
                    </div>
                    <div  className={props.classes.item}>
                        <IconButton className={props.classes.button} onClick = {() => props.step()} >
                            <SkipNext className={props.classes.icon} color = {props.color}/>
                        </IconButton>
                    
                    </div>
                    <div  className={props.classes.item}>
                        <IconButton className={props.classes.button} onClick = {() => props.clear()} >
                            <Clear  className={props.classes.icon} color = {props.color}/>
                        </IconButton>
                    </div>
                    <div className={props.classes.slider}>
                    <SpeedSlider value={props.fps} onChange={(v) => props.setInterval(v)}/>
                    </div>
                </div>
                <div>
                    <div className={props.classes.generation}>
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
    fps: PropTypes.number.isRequired,
    setInterval: PropTypes.func.isRequired,
    // generationCount: PropTypes.number.isRequired,
};
            // <div className={this.props.classes.bar}>
            //     <Grid container spacing={0} direction={this.props.direction} align={this.props.align} justify={this.props.justify} className={this.props.classes.root}>
            //         <Grid item  className={buttonClassNames}>
            //             <IconButton className={this.props.classes.button} aria-label="Play"  onClick = {(e) => this.handleToggle(e)}>
            //                 <ToggleIcon
            //                     on={this.state.on}
            //                     onIcon={<PlayArrow className={this.props.classes.icon} />}
            //                     offIcon={<Pause className={this.props.classes.icon} />}
            //                     color = {this.props.color} 
            //                   />
            //             </IconButton>
               
            //         </Grid>
            //         <Grid item  className={buttonClassNames}>
            //             <IconButton className={this.props.classes.button} onClick = {() => this.props.step()} >
            //                 <SkipNext className={this.props.classes.icon} color = {this.props.color}/>
            //             </IconButton>
                    
            //         </Grid>
            //         <Grid item  className={buttonClassNames}>
            //             <IconButton className={this.props.classes.button} onClick = {() => this.props.clear()} >
            //                 <Clear  className={this.props.classes.icon} color = {this.props.color}/>
            //             </IconButton>
            //         </Grid>
            //         <Grid item  className={buttonClassNames}>
            //         <SpeedSlider value={this.props.fps} onChange={(v) => this.props.setSpeed(v)}/>
            //         </Grid>
            //         <Grid item  className={this.props.classes.generation}>
            //         <Generation value={this.props.generation} size='large'/>
            //         </Grid>
            //     </Grid>
            // </div>

        // <Grid container className={props.classes.root} justify="center">
        //     <Grid item xs className={props.classes.bar}>
        //         <Grid container spacing={0} direction={props.direction} align={props.align} justify={props.justify} className={props.classes.root1}>
        //             <Grid item xs className={buttonClassNames}>
        //             <Button1 buttonType = "play" onClick={(e) => props.resume(e)} color={props.color}/>
        //             </Grid>
        //             <Grid item xs className={buttonClassNames}>
        //             <Button1 buttonType = "step" onClick={() => props.step()} color={props.color}/>
        //             </Grid>
        //             <Grid item xs className={buttonClassNames}> 
        //             <Button1 buttonType = "pause" onClick={() => props.stop()} color={props.color}/>
        //             </Grid>
        //             <Grid item xs className={buttonClassNames}>
        //             <Button1 buttonType = "clear" onClick={() => props.clear()} color={props.color}/>
        //             </Grid>
        //             <Grid item xs className={buttonClassNames}>
        //             <SpeedSlider value={props.fps} onChange={(v) => props.setSpeed(v)}/>
        //             </Grid>
        //             <Grid item xs className={props.classes.generation}>
        //             <Generation value={props.generation} size='large'/>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </Grid>