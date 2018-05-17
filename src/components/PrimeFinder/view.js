import React from "react";
import Results from "./Results";
import Input from "./Input";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
    margin: "auto"
  }
});

const PrimeFinder = ({ isSearching, showResults, classes }) => (
  <div className={classes.container}>
    <h1>Prime Hunter</h1>
    <Input />
    {isSearching && <CircularProgress />}
    {showResults && <Results />}
  </div>
);

export default withStyles(styles)(PrimeFinder);
