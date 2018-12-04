import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = {
  additionalInfo: {
    padding: 20,
  },
  information: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    marginTop: 16,
  },
};

const AdditionalInfo = ({
  classes,
  student: { location, laptop, profession, group },
}) => (
  <div className={classes.additionalInfo}>
    <Typography variant="h4">Additional information</Typography>
    <div className={classes.information}>
      <div className={classes.field}>Location: {location}</div>
      <div className={classes.field}>Laptop: {laptop}</div>
      <div className={classes.field}>Profession: {profession}</div>
      <div className={classes.field}>Group: {group}</div>
    </div>
  </div>
);

export default withStyles(styles)(AdditionalInfo);
