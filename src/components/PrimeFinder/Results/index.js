import { connect } from 'react-redux';
import Utils from '../../../services/Utils'
import View from './view';

const mapStateToProps = (state, ownProps) => ({
  n: state.n,
  nthPrime: state.nthPrime,
  primeArray: state.primeArray,
  searchTime: Utils.findSearchTime(state.timeDifference),
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(View);