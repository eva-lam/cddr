import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import PersonalInfo from './PersonalInfo';
import AdditionalInfo from './AdditionalInfo';
import TechSkills from './TechSkills';
import Spinner from '../Spinner';

const mockStudent = {
  id: 1,
  name: 'Louise Adams',
  gender: 'Female',
  level: 'Advanced',
  email: 'account@email.com',
  phone: '+49 12345 6789',
  birthday: '1st Jan 1980',
  location: 'Berlin',
  laptop: true,
  profession: 'IT Support',
  group: 'none',
  skills: ['Java', 'Javascript', 'Python'],
};

const styles = {
  student: {
    textAlign: 'left',
    padding: 24,
  },
  heading: {
    display: 'flex',
  },
};

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://localhost:4000/students/${id}`)
      .then(student => {
        this.setState({ student });
      })
      .catch(e => {
        this.setState({
          student: mockStudent,
        });
      });
  }

  render() {
    const { classes } = this.props;
    const { student } = this.state;

    return (
      <div className={classes.student}>
        {student ? (
          <Fragment>
            <div className={classes.heading}>
              <Typography variant="h3">{student.name}</Typography>
              <Chip label={student.level} />
            </div>
            <PersonalInfo student={student} />
            <AdditionalInfo student={student} />
            <TechSkills student={student} />
          </Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Student);
