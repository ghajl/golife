import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Select from './Select';
import { withStyles } from 'material-ui/styles';
import pure from 'recompose/pure';
import compose from 'recompose/compose';

const styles = {

	item: {
		width:'100%',
		maxWidth:360
	}
}

const SelectButtonsBar = (props) => {

// console.log(props.patternValue)
	return (
		
		<Grid container spacing={0} direction={props.direction} align={props.align} justify={props.justify}>
			<Grid item xs className={props.classes.item}>
                <Select
                    
                    index={props.patternNamesIndex}
                    items={props.patternNames}
                    
                    onChange={(v) => props.changePatternEvent(v)}
                    label={props.patternLabel}
                />
            </Grid>
            <Grid item xs className={props.classes.item}>
                <Select
                    
                    index={props.gridSizesIndex}
                    items={props.gridSizes}
                    
                    onChange={(v) => props.changeBoardSizeEventHandler(v)}
                    label={props.gridLabel}
                />
            </Grid>
		</Grid>
		
	);
}

export default withStyles(styles)(pure(SelectButtonsBar));


SelectButtonsBar.propTypes = {
    classes: PropTypes.object.isRequired,
    direction: PropTypes.string,
    align: PropTypes.string,
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