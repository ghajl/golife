import { connect } from 'react-redux';
import { changePattern, changeBoardSize, incrementGeneration, setStopped, setSpeed, setClear, saveState } from 'actions';
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
    setStopped: (stopped, name) => {
    	dispatch(setStopped(stopped, name))
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

const mapStateToProps =({ stopped, size, savedState, patterns, currentPatternNameIndex, currentGridSizeIndex,  error })=> ({ stopped, size, savedState, patterns, currentPatternNameIndex, currentGridSizeIndex,  error });
export default compose(
	setDisplayName('GameContainer'),
	connect(mapStateToProps, mapDispatchToProps)
)(Main)