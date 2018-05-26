import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    textAlign: 'center',
  },
	item: {
    width:'50%',
    display: 'inline-block',
		maxWidth: 360,
	},
})

const SelectButtonsBar = ({direction, ...props}) => {
  const width = direction == 'column' ? '100%' : null;
	return (
		<div className={props.classes.container} >
			<div className={props.classes.item} style={{width: width}}>
        <Select
          index={props.patternIndex}
          items={props.patterns}
          onChange={(index) => props.onPatternChange(index)}
          label={props.patternLabel}
        />
      </div>
      <div className={props.classes.item} style={{width: width}}>
        <Select
          index={props.sizeIndex}
          items={props.sizes}
          onChange={(index) => props.onBoardSizeChange(index)}
          label={props.sizeLabel}
        />
      </div>
		</div>
	);
}

export default withStyles(styles)(SelectButtonsBar);

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
