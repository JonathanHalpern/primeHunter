import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    padding: 25,
    display: "flex",
  },
  button: {
    marginLeft: 25
  }
});

const Input = ({ n, updateN, searchForNthPrime, isSearching, classes }) => (
  <form className={classes.container}>
    <TextField
      id="primeIndex"
      label="nth prime number"
      value={n}
      onChange={updateN}
      InputProps={{
        startAdornment: <InputAdornment position="start">n =</InputAdornment>
      }}
      className={classes.textField}
      type="number"
    />
    <Button
      variant="outlined"
      color="primary"
      onClick={searchForNthPrime}
      disabled={isSearching}
      className={classes.button}
    >
      Find
    </Button>
  </form>
);

export default withStyles(styles)(Input);
