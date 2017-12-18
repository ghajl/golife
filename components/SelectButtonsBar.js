import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Select from './Select';
import { withStyles } from 'material-ui/styles';
import pure from 'recompose/pure';
import compose from 'recompose/compose';

const styles = theme => ({
    container: {
        textAlign: 'center',
    },
	item: {
        [theme.breakpoints.up('xs')]: {
            width:'50%',
        },
        [theme.breakpoints.up('md')]: {
            width:'100%',
        },
        display: 'inline-block',
		
		maxWidth:360
	}
})

const SelectButtonsBar = ({direction, ...props}) => {
    let width = direction == 'column' ? '100%' : null;
	return (
		
		<div className={props.classes.container} >
			<div className={props.classes.item} style={{width:width}}>
                <Select
                    
                    index={props.patternNamesIndex}
                    items={props.patternNames}
                    
                    onChange={(v) => props.changePatternEvent(v)}
                    label={props.patternLabel}
                />
            </div>
            <div className={props.classes.item} style={{width:width}}>
                <Select
                    
                    index={props.gridSizesIndex}
                    items={props.gridSizesLabel}
                    
                    onChange={(v) => props.changeBoardSizeEventHandler(v)}
                    label={props.gridLabel}
                />
            </div>
		</div>
		
	);
}

export default withStyles(styles)(pure(SelectButtonsBar));


SelectButtonsBar.propTypes = {
    classes: PropTypes.object.isRequired,
    direction: PropTypes.string,
    justify: PropTypes.string,
    patternNamesIndex: PropTypes.number.isRequired,
    patternNames: PropTypes.array.isRequired,
    changePatternEvent: PropTypes.func.isRequired,
    patternLabel: PropTypes.string.isRequired,
    gridSizesIndex: PropTypes.number.isRequired,
    gridSizes: PropTypes.array.isRequired,
    changeBoardSizeEventHandler: PropTypes.func.isRequired,
    gridLabel: PropTypes.string.isRequired,
};

        // <Grid container spacing={0} direction={props.direction} justify={props.justify}>
        //     <Grid item xs className={props.classes.item}>
        //         <Select
                    
        //             index={props.patternNamesIndex}
        //             items={props.patternNames}
                    
        //             onChange={(v) => props.changePatternEvent(v)}
        //             label={props.patternLabel}
        //         />
        //     </Grid>
        //     <Grid item xs className={props.classes.item}>
        //         <Select
                    
        //             index={props.gridSizesIndex}
        //             items={props.gridSizesLabel}
                    
        //             onChange={(v) => props.changeBoardSizeEventHandler(v)}
        //             label={props.gridLabel}
        //         />
        //     </Grid>
        // </Grid>