//Imports React, React Component and React Fragment from react
import React, { Component, Fragment } from 'react';
//Imports PropTypes from prop-types
import PropTypes from 'prop-types';
//Imports connect from prop-types
import { connect } from 'react-redux';
//Imports Header, Button, Form and Radio from semantic-ui-react
import { Header, Button, Form, Radio } from 'semantic-ui-react';
//Imports handleSaveQuestionAnswermform user.js
import { handleSaveQuestionAnswer } from '../actions/users';

//Exports PollQuestion with extended Component
export class PollQuestion extends Component {
  static propTypes = {
    //Sets PropTyes to a string and then matches it to authUser
    authUser: PropTypes.string.isRequired,
    //Sets PropTyes to a function and then matches it to handleSaveQuestionAnswer
    handleSaveQuestionAnswer: PropTypes.func.isRequired,
    //Sets PropTyes to an object and then matches it to question
    question: PropTypes.object.isRequired
  };
  //Sets state to equal values assosiated array
  state = {
    value: ''
  };
  //Sets handleChange
  handleChange = (e, { value }) => this.setState({ value });

  //Sets handleSubmit
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value !== '') {
      const { authUser, question, handleSaveQuestionAnswer } = this.props;
      handleSaveQuestionAnswer(authUser, question.id, this.state.value);
    }
  };

  //Renders the questions
  render() {
    //Sets question to equal props
    const { question } = this.props;
    //Sets disabled to equal value and that equal and empty array
    const disabled = this.state.value === '' ? true : false;

    //Returns the question
    return (
      //Fragments all the use of multiple elements
      <Fragment>
        {/*Gives the header a size of h4 and gives it the text of "Would you rather"*/}
        <Header as="h4">Would you rather</Header>
        {/*Builds a form that calls the handleSubmit function onSubmit*/}
        <Form onSubmit={this.handleSubmit}>
          {/*Builds the form field*/}
          <Form.Field>
            {/*Builds a selection button*/}
            <Radio
              //Sets the label to equal the first option of the question
              label={question.optionOne.text}
              //Sets the name to "radioGroup"
              name="radioGroup"
              //Sets the value to "optionOne"
              value="optionOne"
              //Sets checked to the value equal to optionOne
              checked={this.state.value === 'optionOne'}
              //Sets the onchange to call the handleChange
              onChange={this.handleChange}
            />
            <br />
            <Radio
              //Sets the label to equal the second option of the question
              label={question.optionTwo.text}
              //Sets the name to "radioGroup"
              name="radioGroup"
              //Sets the value to "optionOne"
              value="optionTwo"
              //Sets checked to the value equal to optionTwo
              checked={this.state.value === 'optionTwo'}
              //Sets the onchange to call the handleChange
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            {/*Builds a button*/}
            <Button
              //Sets colour to blue
              color="blue"
              //Sets size to medium
              size="medium"
              fluid
              positive
              //Sets disabled to disabled
              disabled={disabled}
              //Sets content to submit
              content="Submit"
            />
          </Form.Field>
        </Form>
      </Fragment>
    );
  }
}

//Sets mapStateToProps as a function that uses authUser
function mapStateToProps({ authUser }, { match }) {
  return {
    authUser
  };
}

//Exports default PollQuestion
export default connect(
  mapStateToProps,
  { handleSaveQuestionAnswer }
)(PollQuestion);
