import { connect } from 'react-redux';
import { updateIsSearching, search } from '../../../Ducks/primeHunter/primeHunter';
import View from './view';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  updateIsSearching: (isSearching) => {
    dispatch(updateIsSearching(isSearching))
  },
  search: (n) => {
    dispatch(search(n))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(View);