import React from "react";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 25,
    width: "100%"
  },
  expansionPanel: {
    marginTop: 25,
    width: "100%"
  },
  primeList: {
    textAlign: "left"
  }
});

const Results = ({
  n,
  nthPrime,
  timeDifference,
  primeList,
  searchTime,
  classes
}) => (
  <div className={classes.container}>
    <Typography>
      prime {n} is <b>{nthPrime}</b>
    </Typography>
    <Typography>the search took: {searchTime} </Typography>
    <ExpansionPanel className={classes.expansionPanel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Full list of primes</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
          <Typography className={classes.primeList}>{primeList}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default withStyles(styles)(Results);
