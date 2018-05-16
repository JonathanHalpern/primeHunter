import React from "react";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Results = ({ primeIndex, nthPrime, searchTime, foundPrimes }) => (
  <div>
    <p>
      prime number {primeIndex} is {nthPrime}{" "}
    </p>
    <p>the search took: {searchTime} </p>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>View full list of primes</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {foundPrimes.join(', ')}
          </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default Results;
