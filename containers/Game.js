import { connect } from 'react-redux';
import { changePattern, changeBoardSize, incrementGeneration, setStopped, setSpeed, setClear, setGameValues } from 'actions'
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

const mapStateToProps =({ stopped, size, cellsList, patterns, patternNamesIndex, gridSizesIndex,  error })=> ({ stopped, size, cellsList, patterns, patternNamesIndex, gridSizesIndex,  error });
export default compose(
	setDisplayName('GameContainer'),
	connect(mapStateToProps, mapDispatchToProps),
	pure
)(Game)