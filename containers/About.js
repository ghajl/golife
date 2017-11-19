import { connect } from 'react-redux';
import { setStopped } from 'actions'
// import { addCount } from 'actions'
// import { selectLight, selectLastUpdate, selectCount } from 'selectors'
// import { createSelector } from 'reselect';
import { compose, setDisplayName, pure } from 'recompose';
import About from '../components/About';


const mapDispatchToProps = dispatch => {
  return {
    setStopped: (stopped, name) => {
    	dispatch(setStopped(stopped, name))
    },

  }
}


export default compose(
  setDisplayName('AboutContainer'),
  connect(state => state, mapDispatchToProps),
  pure
)(About)