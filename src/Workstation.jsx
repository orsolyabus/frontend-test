// individual cards in list
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';

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
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.overline}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Linux
            </Typography>
          <div className={classes.statusIndicator}>
            <Typography>RUNNING</Typography>
          </div>
        </div>
        <Typography variant="h5" component="h2">
          Simon's computer
        </Typography>
        <Typography className={classes.instanceType} color="textSecondary">
          g3.4xlarge
        </Typography>
        <div className={classes.avatars}>
          <Avatar className={classes.avatar}>SL</Avatar>
          <Avatar className={classes.avatar}>EC</Avatar>
        </div>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles, { withTheme: true })(Workstation);

/* <Card className={classes.card}>
    <CardContent>
      <div className={classes.overline}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Linux
        </Typography>
        <div className={classes.statusIndicator}>
          <Typography>RUNNING</Typography>
        </div>
      </div>
      <Typography variant="h5" component="h2">
        Dave's computer
      </Typography>
      <Typography className={classes.instanceType} color="textSecondary">
        g3.4xlarge
      </Typography>

      <Avatar className={classes.avatar}>DN</Avatar>
    </CardContent>
  </Card>
  */