import { connect } from 'react-redux';
import { updateN, updateIsSearching, search } from '../../../ducks';
import View from './view';

const mapStateToProps = (state, ownProps) => ({
  isSearching: state.isSearching,
  n: state.n
});

const mapDispatchToProps = dispatch => ({
  updateN: (event) => {
    dispatch(updateN(event.target.value))
  },
  updateIsSearching: (isSearching) => {
    dispatch(updateIsSearching(isSearching))
  },
  searchForNthPrime: () => {
    dispatch(search())
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(View);