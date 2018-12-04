import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fcfcfc',
    zIndex: 50,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 64px)',
  },
  progress: {
    margin: 20,
  },
};

export const Spinner = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress className={classes.progress} color="primary" />
  </div>
);

export default withStyles(styles)(Spinner);
