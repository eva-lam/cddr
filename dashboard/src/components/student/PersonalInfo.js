import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = {
  personalInfo: {
    padding: 20,
  },
  information: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    marginTop: 16,
  },
};

const PersonalInfo = ({
  classes,
  student: { gender, email, phone, birthday },
}) => (
  <div className={classes.personalInfo}>
    <Typography variant="h4">Personal information</Typography>
    <div className={classes.information}>
      <div className={classes.field}>Gender: {gender}</div>
      <div className={classes.field}>Birthday: {birthday}</div>
      <div className={classes.field}>email: {email}</div>
      <div className={classes.field}>Phone: {phone}</div>
    </div>
  </div>
);

export default withStyles(styles)(PersonalInfo);
