import { connect } from "react-redux";
import Utils from "../../../services/Utils";
import View from "./view";
import { primeListSelector, searchTimeSelector } from "../../../ducks";

const mapStateToProps = (state, ownProps) => ({
  n: state.n,
  nthPrime: state.nthPrime,
  primeList: primeListSelector(state),
  searchTime: searchTimeSelector(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(View);
