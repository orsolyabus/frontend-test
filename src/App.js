import { withStyles } from '@material-ui/core';
import React from 'react';

import WorkstationToolbar from './WorkstationToolbar';
import Workstations from './Workstations';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <WorkstationToolbar />
      <Workstations />
    </div>
  );
}

export default withStyles(styles)(App);
