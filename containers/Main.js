import { connect } from 'react-redux';
import { changePattern, changeBoardSize, incrementGeneration, setRunning, setSpeed, setClear, saveCells } from 'actions';
import { compose, setDisplayName } from 'recompose';
import Main from '../components/Main';

const mapDispatchToProps = dispatch => {
  return {
    changePattern: index => {
      dispatch(changePattern(index))
    },
    changeBoardSize: size => {
      dispatch(changeBoardSize(size))
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
    saveCells: (cells) => {
      dispatch(saveCells(cells))
    }
  }
}

const mapStateToProps =({ running, currentSize, cells, patterns, parameters, currentPattern, error })=> ({ running, currentSize, cells, patterns, parameters, currentPattern,  error });
export default compose(
  setDisplayName('GameContainer'),
  connect(mapStateToProps, mapDispatchToProps)
)(Main)