//Imports React, React Component and React Fragment from react
import React, { Component, Fragment } from 'react';
//Imports PropTypes from prop types
import PropTypes from 'prop-types';
//Imports withRouter react router dom
import { withRouter } from 'react-router-dom';
//Imports connect from react redux
import { connect } from 'react-redux';
//Imports Header, Segment, Progress, Label, Button and Icon from semantic-ui-react
import {
  Header,
  Segment,
  Progress,
  Label,
  Button,
  Icon
} from 'semantic-ui-react';
//Imports styles from helpers.js
import { styles } from '../utils/helpers';

//Sets YourVoteLabel as a constant
const YourVoteLabel = () => (
  //Sets the labels colour to blue, placed the ribbon on right and sets the class name to vote
  <Label color="blue" ribbon="right" className="vote">
    {/*Sets the icon name to check circle outline, the size to big and the classname to compact*/}
    <Icon name="check circle outline" size="big" className="compact" />
    {/*Creates a div with the style tag of float*/}
    <div style={{ float: 'right' }}>
      {/*Sets the text to Your Vote on two lines*/}
      Your
      <br />
      Vote
    </div>
  </Label>
);

//Exports PollResult with extend compents
export class PollResult extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  handleClick = () => {
    this.props.history.push('/');
  };

  render() {
    const { question, user } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];

    let option1 = styles.secondary,
      option2 = styles.secondary;
    if (optionOneVotes > optionTwoVotes) {
      option1 = styles.primary;
    } else if (optionTwoVotes > optionOneVotes) {
      option2 = styles.primary;
    }

    return (
      <Fragment>
        <Header as="h3">
          Results:
          <Header.Subheader style={{ fontWeight: 'bold' }}>
            Would you rather
          </Header.Subheader>
        </Header>
        <Segment
          color={option1.color}
          style={{ backgroundColor: `${option1.bgColor}` }}
        >
          {userVote === 'optionOne' && <YourVoteLabel />}
          <p style={{ fontWeight: 'bold' }}>{question.optionOne.text}</p>
          <Progress
            percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
            progress
            color={option1.color}
          >
            {optionOneVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        <Segment
          color={option2.color}
          style={{ backgroundColor: `${option2.bgColor}` }}
        >
          {userVote === 'optionTwo' && <YourVoteLabel />}

          <p style={{ fontWeight: 'bold' }}>{question.optionTwo.text}</p>
          <Progress
            percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
            progress
            color={option2.color}
          >
            {optionTwoVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        {/* <Form.Field> */}
        <Button size="tiny" floated="right" onClick={this.handleClick}>
          Back
        </Button>
        {/* </Form.Field> */}
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user
  };
}

export default withRouter(connect(mapStateToProps)(PollResult));
