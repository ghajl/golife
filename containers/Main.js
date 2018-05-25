import { connect } from 'react-redux';
import { changePattern, changeBoardSize, incrementGeneration, setRunning, setSpeed, setClear, saveState } from 'actions';
import { compose, setDisplayName } from 'recompose';
import Main from '../components/Main';

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
    setRunning: (running, name) => {
    	dispatch(setRunning(running, name))
    },
    setSpeed: fps => {
    	dispatch(setSpeed(fps))
    },
    setClear: () => {
    	dispatch(setClear())
    },    
    saveState: (savedState, size) => {
    	dispatch(saveState(savedState, size))
    }
  }
}

const mapStateToProps =({ running, size, savedState, patterns, currentPatternNameIndex, currentGridSizeIndex,  error })=> ({ running, size, savedState, patterns, currentPatternNameIndex, currentGridSizeIndex,  error });
export default compose(
	setDisplayName('GameContainer'),
	connect(mapStateToProps, mapDispatchToProps)
)(Main)