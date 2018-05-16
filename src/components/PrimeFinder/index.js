import { connect } from 'react-redux';
import View from './view';

const mapStateToProps = (state, ownProps) => ({
  isSearching: state.isSearching,
  showResults: state.showResults,
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(View);