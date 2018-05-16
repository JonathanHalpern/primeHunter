import React from "react";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Utils from '../../../Services/Utils';

const Results = ({ primeIndex, nthPrime, timeDifference, primeArray }) => (
  <div>
    <p>
      prime number {primeIndex} is {nthPrime}{" "}
    </p>
    <p>the search took: {Utils.findSearchTime(timeDifference)} </p>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>View full list of primes</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {primeArray.join(', ')}
          </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default Results;
