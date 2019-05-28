import { Avatar, withStyles } from '@material-ui/core';
import React from 'react';

const styles = theme => ({
  avatars: {
    display: 'flex',
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: theme.spacing.unit,
  },
})

function Users(props) {
  const { classes, } = props;
  return (
    < div className={classes.avatars} >
      <Avatar className={classes.avatar}>SL</Avatar>
      <Avatar className={classes.avatar}>EC</Avatar>
    </div >
  )
}

export default withStyles(styles, { withTheme: true })(Users);
