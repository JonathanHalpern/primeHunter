import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import PrimeFinderService from "../Services/PrimeMethods";
import Results from "./Results";

class PrimeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primeIndex: 10,
      nthPrime: null,
      results: {
        foundPrimes: []
      }
    };
    this.findNthPrime = this.findNthPrime.bind(this);
    this.updatePrimeIndex = this.updatePrimeIndex.bind(this);
  }

  findNthPrime() {
    PrimeFinderService.findNthPrime(this.state.primeIndex).then(response => {
      this.setState({
        nthPrime: response.finalPrime,
        searchTime: response.searchTime,
        results: response
      });
    });

  }

  updatePrimeIndex(event) {
    this.setState({
      primeIndex: event.target.value,
      nthPrime: 0
    });
  };

  render() {
    return (
      <div>
        <p>Prime hunter</p>
        <TextField
          id="primeIndex"
          label="nth prime number"
          value={this.state.primeIndex}
          onChange={this.updatePrimeIndex}
          InputProps={{
            startAdornment: <InputAdornment position="start">n =</InputAdornment>,
          }}
        />
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.findNthPrime}
        >
          Find
        </Button>
        <Results {...this.state.results} primeIndex={this.state.primeIndex} nthPrime={this.state.nthPrime} />
      </div>
    );
  }
}

export default PrimeFinder;
