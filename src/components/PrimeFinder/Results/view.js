import React from "react";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Results = ({ n, nthPrime, timeDifference, primeList, searchTime }) => (
  <div>
    <Typography>
      prime {n} is <b>{nthPrime}</b>
    </Typography>
    <Typography>the search took: {searchTime} </Typography>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Full list of primes</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {primeList}
          </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default Results;
