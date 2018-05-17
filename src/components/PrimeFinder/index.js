import { connect } from "react-redux";
import View from "./view";

const mapStateToProps = (state, ownProps) => ({
  isSearching: state.isSearching,
  showResults: state.showResults
});

export default connect(mapStateToProps)(View);
