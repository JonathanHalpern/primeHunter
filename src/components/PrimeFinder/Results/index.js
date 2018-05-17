import { connect } from "react-redux";
import View from "./view";
import { primeListSelector, searchTimeSelector } from "../../../ducks";

const mapStateToProps = (state, ownProps) => ({
  n: state.n,
  nthPrime: state.nthPrime,
  primeList: primeListSelector(state),
  searchTime: searchTimeSelector(state)
});

export default connect(mapStateToProps)(View);
