import React from "react";
import Results from "./Results";
import Input from "./Input";
import CircularProgress from "@material-ui/core/CircularProgress";

const PrimeFinder = props => (
  <div>
    <Input />
    {props.isLoading && <CircularProgress />}
    {props.showResults && <Results />}
  </div>
);

export default PrimeFinder;
