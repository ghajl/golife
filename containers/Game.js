import { connect } from 'react-redux';
import { changePattern, changeBoardSize, toggleStopped, incrementGeneration, setStopped, setSpeed, setClear, setGameValues } from 'actions'
// import { selectLight, selectLastUpdate, selectCount } from 'selectors'
// import { createSelector } from 'reselect';
import { compose, setDisplayName, pure } from 'recompose';
import Game from '../components/Game';

const mapDispatchToProps = dispatch => {
  return {
    changePattern: index => {
        dispatch(changePattern(index))
    },
    changeBoardSize: index => {
        dispatch(changeBoardSize(index))
    },
    toggleStopped: () => {
	    dispatch(toggleStopped())
    },
    incrementGeneration: () => {
    	dispatch(incrementGeneration())
    },
    setStopped: (stopped, name) => {
    	dispatch(setStopped(stopped, name))
    },
    setSpeed: fps => {
    	dispatch(setSpeed(fps))
    },
    setClear: () => {
    	dispatch(setClear())
    },    
    setGameValues: (cellsList, size) => {
    	dispatch(setGameValues(cellsList, size))
    }
  }
}

const mapStateToProps =({ stopped, size, cellsList, patterns, patternNamesIndex, gridSizesIndex, fps, error })=> ({ stopped, size, cellsList, patterns, patternNamesIndex, gridSizesIndex, fps, error });
export default compose(
	setDisplayName('GameContainer'),
	connect(mapStateToProps, mapDispatchToProps),
	pure
)(Game)