import { connect } from 'react-redux';
import View from './view';

const mapStateToProps = (state, ownProps) => ({
  primeArray: [],
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(View);