import React from "react";
import Results from "./Results";
import Input from "./Input";

const PrimeFinder = props => console.log('state', props) || (
  <div>
    <Input />
    {!props.isSearching && (
      <Results />
    )}
  </div>
);

export default PrimeFinder;
