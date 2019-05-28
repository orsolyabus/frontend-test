import {
  withStyles,
} from '@material-ui/core';
import React from 'react';
import Workstation from './Workstation';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    display: 'flex',
  },
});

function Workstations(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Workstation/>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Workstations);
