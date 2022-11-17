//Imports React, React Component and React Fragment from react
import React, { Component, Fragment } from 'react';
//Imports PropTypes from prop-types
import PropTypes from 'prop-types';
//Imports Redirect from react-router-dom
import { Redirect } from 'react-router-dom';
//Imports Header, Button from semantic-ui-react
import { Header, Button } from 'semantic-ui-react';
//Imports colors from helpers.js
import { colors } from '../utils/helpers';

//Exports PollTeaser with extended Component
export class PollTeaser extends Component {
  static propTypes = {
    //Sets question to object and ensures it is required
    question: PropTypes.object.isRequired,
    //Sets unanswered to boolean and ensures it is required
    unanswered: PropTypes.bool.isRequired
  };
  //Sets State to viewpoll and false
  state = {
    viewPoll: false
  };
  handleClick = e => {
    this.setState(prevState => ({
      viewPoll: !prevState.viewPoll
    }));
  };
  //Renders PollTeaser
  render() {
    //Defines question, unanswered as this props
    const { question, unanswered } = this.props;
    //Defines buttonColor as unanswered and that equal to true
    const buttonColor = unanswered === true ? colors.green : colors.blue;
    //Defines buttonColor as unanswered and that equal to true
    const buttonContent = unanswered === true ? 'Answer Poll' : 'Results';
    //If viewPoll is equal to true then return questions
    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    //Returns the PollTeaser
    return (
      //Fragments all the use of multiple elements
      <Fragment>
        {/*Sets header to h5 and text alinement to left*/}
        <Header as="h5" textAlign="left">
          {/*Sets the text of header to "Would you rather"*/}
          Would you rather
        </Header>
        {/*Sets style to text alinement to center*/}
        <p style={{ textAlign: 'center' }}>
          {/*Outputs the selected questions option one as text*/}
          {question.optionOne.text}
          {/*Adds a break between the to options*/}
          <br />
          {/*Text is displayed as "or..." */}
          or...
        </p>
        {/*Builds a button*/}
        <Button
          //Sets colour to the buttons colour depending on name
          color={buttonColor.name}
          //Sets size to tiny
          size="tiny"
          fluid
          //Calls the handleClick function on click
          onClick={this.handleClick}
          //Sets the content to buttonContent
          content={buttonContent}
        />
      </Fragment>
    );
  }
}

//Exports PollTeaser
export default PollTeaser;
