import { connect } from 'react-redux';
import View from './view';

const mapStateToProps = (state, ownProps) => ({
  n: state.n,
  nthPrime: state.nthPrime,
  primeArray: state.primeArray,
  timeDifference: state.timeDifference,
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(View);