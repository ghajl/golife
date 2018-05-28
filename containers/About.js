import { connect } from 'react-redux';
import { setRunning } from 'actions'
import { compose, setDisplayName, pure } from 'recompose';
import About from '../components/About';

const mapDispatchToProps = dispatch => {
  return {
    setRunning: (running, name) => {
      dispatch(setRunning(running, name))
    },
  }
}

export default compose(
  setDisplayName('AboutContainer'),
  connect(state => state, mapDispatchToProps),
  pure
)(About)