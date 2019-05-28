import { Chip, withStyles } from '@material-ui/core';
import React from 'react';

const styles = theme => ({
  avatars: {
    display: 'flex',
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
})

function Users(props) {
  const { classes, users } = props;
  return (
    < div className={classes.avatars} >
      {users.map(user => (
        <Chip label={user.attributes.name} className={classes.chip} key={user.id} />
      ))}
    </div >
  )
}

export default withStyles(styles, { withTheme: true })(Users);
