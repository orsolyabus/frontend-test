import {
  // Avatar,
  Card,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import Users from './Users';

const styles = theme => ({
  card: {
    minWidth: 375,
    margin: theme.spacing.unit,
  },
  avatars: {
    display: 'flex',
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: theme.spacing.unit,
  },
  instanceType: {
    marginBottom: 12,
  },
  overline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusIndicator: {
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${
      theme.palette.type === 'light'
        ? 'rgba(0, 0, 0, 0.23)'
        : 'rgba(255, 255, 255, 0.23)'
    }`,
    padding: '5px 16px',
    fontWeight: 400,
  },
});

function Workstation(props) {
  const { classes, station, users } = props;
  const currentUsers = station.relationships.users
    .flatMap(currUser => users.filter(u => u.id===currUser.id));
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.overline}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {station.attributes.platform}
            </Typography>
          <div className={classes.statusIndicator}>
            <Typography>{station.attributes.status}</Typography>
          </div>
        </div>
        <Typography variant="h5" component="h2">
        {station.attributes.name}
        </Typography>
        <Typography className={classes.instanceType} color="textSecondary">
        {station.attributes.instance_type}
        </Typography>
        <Users users={currentUsers}/>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles, { withTheme: true })(Workstation);
