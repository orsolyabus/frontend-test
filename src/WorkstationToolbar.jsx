import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function WorkstationToolbar(props) {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Workstations
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default WorkstationToolbar;
