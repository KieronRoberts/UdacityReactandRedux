//Imports React, React Component from react
import React, { Component } from 'react';
//Imports PropTypes from prop-types
import PropTypes from 'prop-types';
//Imports connect from react-redux
import { connect } from 'react-redux';
//Imports Redirect from react-router-dom
import { Redirect } from 'react-router-dom';
//Imports Segment, Header, Grid and Image from semantic-ui-react
import { Segment, Header, Grid, Image } from 'semantic-ui-react';
//Imports PollQuestion from PollQuestion.js
import PollQuestion from './PollQuestion';
//Imports PollResult from PollResult.js
import PollResult from './PollResult';
//Imports PollTeaser from PollTeaser.js
import PollTeaser from './PollTeaser';
//Imports colors form helpers.js
import { colors } from '../utils/helpers';

//Sets pollTypes to POLL_TEASER, POLL_QUESTION, POLL_RESULT
const pollTypes = {
  POLL_TEASER: 'POLL_TEASER',
  POLL_QUESTION: 'POLL_QUESTION',
  POLL_RESULT: 'POLL_RESULT'
};

//Sets PollContent to equal props
const PollContent = props => {
  //Sets pollType, question, unanswered to props
  const { pollType, question, unanswered } = props;

  //Switch is similar to a if but runs all case statements
  switch (pollType) {
    //Case is the elif statement
    case pollTypes.POLL_TEASER:
      //Returns PollTeaser with question and unanswered
      return <PollTeaser question={question} unanswered={unanswered} />;
    case pollTypes.POLL_QUESTION:
      //Returns PollQuestion with question
      return <PollQuestion question={question} />;
    case pollTypes.POLL_RESULT:
      //Returns PollResult with question
      return <PollResult question={question} />;
    //The default clause of a switch statement will be jumped to if no case matches the expression's value
    default:
      return;
  }
};

//Exports UserCard class with extended component
export class UserCard extends Component {
  //Sets propTypes as static
  static propTypes = {
    //Sets question to PropTypes as a object
    question: PropTypes.object,
    //Sets author to PropTypes as a object
    author: PropTypes.object,
    //Sets pollType to PropTypes as a string
    pollType: PropTypes.string,
    //Sets unanswered to PropTypes as a boolean
    unanswered: PropTypes.bool,
    //Sets question_id to PropTypes as a string
    question_id: PropTypes.string
  };
  //Renders user card
  render() {
    //Sets author, question, pollType, badPath and unanswered to null
    const {
      author,
      question,
      pollType,
      badPath,
      unanswered = null
    } = this.props;

    //If badPath is true
    if (badPath === true) {
      //Redirects to /questions/bad_id
      return <Redirect to="/questions/bad_id" />;
    }

    //Sets tabcolour equal to unanswered
    const tabColor = unanswered === true ? colors.green : colors.blue;
    const borderTop =
      unanswered === null
        ? `1px solid ${colors.grey}`
        : `2px solid ${tabColor.hex}`;
    //Returns the user card
    return (
      <Segment.Group>
        {/*Sets header*/}
        <Header
          //Sets header h5
          as="h5"
          //Alinestext to the left
          textAlign="left"
          block
          //Attaches the text to the top of the header
          attached="top"
          style={{ borderTop: borderTop }}
        >
          {/*Displays "User1 asks:" (User1 being the author of the question)*/}
          {author.name} asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            {/*Sets a column with the width of 5*/}
            <Grid.Column width={5}>
              {/*Sets image to be the authors avatar*/}
              <Image src={author.avatarURL} />
            </Grid.Column>
            {/*Sets a column with the width of 11*/}
            <Grid.Column width={11}>
              {/*Sets Poll Content to equal pollType, question and unanswered*/}
              <PollContent
                pollType={pollType}
                question={question}
                unanswered={unanswered}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

//Defines mapStateToProps as a function using users, questions, authUser and match, question_id
function mapStateToProps(
  { users, questions, authUser },
  { match, question_id }
) {
  //Sets question, author, pollType and badPath to equal false
  let question,
    author,
    pollType,
    badPath = false;
  //If question ID is defined then question is to equal questions[question_id], same for author and pollType
  if (question_id !== undefined) {
    question = questions[question_id];
    author = users[question.author];
    pollType = pollTypes.POLL_TEASER;
  } else {
    //Defines question_id = match.params
    const { question_id } = match.params;
    //Sets question to questions(question_id)
    question = questions[question_id];
    //Defines user as equal to users(authUser)
    const user = users[authUser];

    //If question equals undefined the badpath will be set to true
    if (question === undefined) {
      badPath = true;
      //Else author will equal the questions author
    } else {
      author = users[question.author];
      pollType = pollTypes.POLL_QUESTION;
      if (Object.keys(user.answers).includes(question.id)) {
        pollType = pollTypes.POLL_RESULT;
      }
    }
  }

  //Returns badPath, question, author and pollType
  return {
    badPath,
    question,
    author,
    pollType
  };
}

//Exports UserCard using mapStateToProps
export default connect(mapStateToProps)(UserCard);
