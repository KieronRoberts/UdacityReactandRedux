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
    //Sets history to an object and ensures it is required
    history: PropTypes.object.isRequired,
    //Sets question to an object and ensures it is required
    question: PropTypes.object.isRequired,
    //Sets huser to an object and ensures it is required
    user: PropTypes.object.isRequired
  };
  handleClick = () => {
    this.props.history.push('/');
  };

  //Renders the results of the poll
  render() {
    //Sets question and user to equal props
    const { question, user } = this.props;
    //Sets optionOneVotes to equal optionOne of questions number of votes
    const optionOneVotes = question.optionOne.votes.length;
    //Sets optionTwoVotes to equal optionOne of questions number of votes
    const optionTwoVotes = question.optionTwo.votes.length;
    //Sets votesTotal to equal to the total of optionOneVotes and optionTwoVotes
    const votesTotal = optionOneVotes + optionTwoVotes;
    //Sets userVote to the logged in users answer to the current question
    const userVote = user.answers[question.id];

    //Sets option one and two to equal secondary style
    let option1 = styles.secondary,
      option2 = styles.secondary;
    //If the number of votes for option one is larger that option two's then option 1's style will change to primary
    //If the number of votes for option two is larger that option one's then option 2's style will change to primary
    if (optionOneVotes > optionTwoVotes) {
      option1 = styles.primary;
    } else if (optionTwoVotes > optionOneVotes) {
      option2 = styles.primary;
    }

    //Returns the Poll's results
    return (
      //Fragments all the use of multiple elements
      <Fragment>
        {/*Sets header to size h3*/}
        <Header as="h3">
          {/*The text of header is "Results"*/}
          Results:
          {/*Sets Subheader to bold*/}
          <Header.Subheader style={{ fontWeight: 'bold' }}>
            {/*Sets the text off subheader to "Would you rather"*/}
            Would you rather
          </Header.Subheader>
        </Header>
        {/*Segment seperates option one and option two*/}
        <Segment
          //Sets color to equal option one color
          color={option1.color}
          //Sets style to equal background and background to equal option one color
          style={{ backgroundColor: `${option1.bgColor}` }}
        >
          {/*Sets userVote to be optionOne and YourVoteLabel*/}
          {userVote === 'optionOne' && <YourVoteLabel />}
          {/*Sets the style of the paragraph to have bold font and the selected question as the text*/}
          <p style={{ fontWeight: 'bold' }}>{question.optionOne.text}</p>
          <Progress
            //Sets percent to find the percentage of option one votes
            percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
            progress
            //Sets option one's colour
            color={option1.color}
          >
            {/*Outputs the text "1 out of 5 votes (1 being number of votes for option one and 5 being the total votes)" */}
            {optionOneVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        <Segment
          color={option2.color}
          style={{ backgroundColor: `${option2.bgColor}` }}
        >
          {/*Sets userVote to be optionTwo and YourVoteLabel*/}
          {userVote === 'optionTwo' && <YourVoteLabel />}
          {/*Sets the style of the paragraph to have bold font and the selected question as the text*/}
          <p style={{ fontWeight: 'bold' }}>{question.optionTwo.text}</p>
          <Progress
            //Sets percent to find the percentage of option two votes
            percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
            progress
            //Sets option two's colour
            color={option2.color}
          >
            {/*Outputs the text "1 out of 5 votes (1 being number of votes for option two and 5 being the total votes)" */}
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

//Sets mapStateToProps as a function that uses users, authUser
function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user
  };
}

//Exports PollResult
export default withRouter(connect(mapStateToProps)(PollResult));
