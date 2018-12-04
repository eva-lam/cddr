import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = {
  skills: {
    padding: 20,
  },
  list: {
    marginTop: 16,
  },
};

const TechSkills = ({ classes, student: { skills } }) => (
  <div className={classes.skills}>
    <Typography variant="h4">Tech skills</Typography>
    <ul className={classes.list}>
      {skills.map(skill => (
        <li key={skill} className={classes.listItem}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default withStyles(styles)(TechSkills);
