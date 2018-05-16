import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

const PrimeFinder = props => (
  <div>
    <p>Prime Hunter</p>
    <TextField
      id="primeIndex"
      label="nth prime number"
      value={props.n}
      onChange={props.updateN}
      InputProps={{
        startAdornment: <InputAdornment position="start">n =</InputAdornment>
      }}
    />
    <Button
      variant="outlined"
      color="primary"
      onClick={props.searchForNthPrime}
      disabled={props.isSearching}
    >
      Find
    </Button>
  </div>
);

export default PrimeFinder;
