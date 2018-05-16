import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import PrimeFinderService from "../../../Services/PrimeMethods";

class PrimeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primeIndex: 10000,
      nthPrime: null,
      searching: false,
      results: {
        primeArray: [],
        nthPrime: null,
        timeDifference: null
      }
    };
    this.findNthPrime = this.findNthPrime.bind(this);
    this.updatePrimeIndex = this.updatePrimeIndex.bind(this);
  }

  setSearching(searching) {
    this.setState({
      searching
    });
  }

  findNthPrime() {
    console.log('hey')
    this.props.search();

    // PrimeFinderService.findNthPrime(this.state.primeIndex).then(results => {
    //   this.setState({
    //     results,
    //     searching: false
    //   });

    //   // this.props.updateIsSearching(false);
    // });
  }

  updatePrimeIndex(event) {
    this.setState({
      primeIndex: event.target.value,
      nthPrime: 0
    });
  }

  render() {
    return (
      <div>
        <p>Prime hunter {this.searching ? "y" : "n"}</p>
        <TextField
          id="primeIndex"
          label="nth prime number"
          value={this.state.primeIndex}
          onChange={this.updatePrimeIndex}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">n =</InputAdornment>
            )
          }}
        />
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            this.findNthPrime();
          }}
          disabled={this.state.searching}
        >
          Find
        </Button>
      </div>
    );
  }
}

export default PrimeFinder;
