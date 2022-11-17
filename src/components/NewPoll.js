//Imports	React Component from react
import React, { Component } from 'react';
//Imports PropTyes from prop-types
import PropTypes from 'prop-types';
//Imports Redirect from react-router-dom
import { Redirect } from 'react-router-dom';
//Imports connect from react-redux
import { connect } from 'react-redux';
//Imports Segment, Header, Grid, Divider, Form, Dimmer, Loader from semantic-ui-react
import {
  Segment,
  Header,
  Grid,
  Divider,
  Form,
  Dimmer,
  Loader
} from 'semantic-ui-react';
//Imports handleSaveQuestion from questions.js
import { handleSaveQuestion } from '../actions/questions';

//Exports the NewPoll class with extended component
export class NewPoll extends Component {
  //Sets propTypes to authorised users and saved questions
  static propTypes = {
    authUser: PropTypes.string.isRequired,
    handleSaveQuestion: PropTypes.func.isRequired
  };
  //Sets states to equal a number of variables
  state = {
    //Valid submit equals false
    validSubmit: false,
    //Is Loaing equals false
    isLoading: false,
    //Option 1 is set to an empty array
    option1: '',
    //Option 2 is set to an empty array
    option2: ''
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { authUser, handleSaveQuestion } = this.props;
    const { option1, option2 } = this.state;

    new Promise((res, rej) => {
      this.setState({ isLoading: true });
      handleSaveQuestion(option1, option2, authUser);
      setTimeout(() => res('success'), 1000);
    }).then(() => {
      this.setState({
        option1: '',
        option2: ''
      });
      this.setState({ validSubmit: true });
    });
  };
  //Renders the new question poll
  render() {
    //Defines disabled as option1 as a blank array and option2 as a blank array
    const disabled = this.state.option1 === '' || this.state.option2 === '';
    //If the valid submit equals true then the page will return to home
    if (this.state.validSubmit === true) {
      return <Redirect to="/" />;
    }
    //Returns the New Poll
    return (
      <Segment.Group>
        {/*Sets header to h3 size, textr alignment from left and sets the colour to blue*/}
        <Header as="h3" textAlign="left" block attached="top" color="blue">
          {/*The header text is "Create a New Poll"*/}
          Create a New Poll
        </Header>
        <Grid padded>
          <Grid.Column>
            {/*Sets state to isLoading*/}
            {this.state.isLoading && (
              //While state is loading a Dimmer is activated
              <Dimmer active inverted>
                {/*Dimmers content is updating*/}
                <Loader content="Updating" />
              </Dimmer>
            )}
            {/*Sets a paragragh with the content "Complete the question"*/}
            <p>Complete the question:</p>
            {/*Sets a paragragh with the content "Would you rather..." in bold text*/}
            <p>
              <strong>Would you rather...</strong>
            </p>
            {/*Builds a form that uses the handleSubmit function on submit*/}
            <Form onSubmit={this.handleSubmit}>
              {/*Sets the forms first input*/}
              <Form.Input
                //Sets the ID of the input to "option1"
                id="option1"
                //Sets the placeholder to "Enter option one..."
                placeholder="Enter option one..."
                //Sets the value inputted to option1
                value={this.state.option1}
                //Calls the handleChange function on change
                onChange={this.handleChange}
                //Ensures the Input has a value before it can be commited
                required
              />
              {/*Sets a horizontal divider with the text "or"*/}
              <Divider horizontal>Or</Divider>
              <Form.Input
                //Sets the ID of the input to "option2"
                id="option2"
                //Sets the placeholder to "Enter option one..."
                placeholder="Enter option one..."
                //Sets the value inputted to option2
                value={this.state.option2}
                //Calls the handleChange function on change
                onChange={this.handleChange}
                //Ensures the Input has a value before it can be commited
                required
              />
              {/*Builds a button on the form*/}
              <Form.Button positive size="tiny" fluid disabled={disabled}>
                {/*Text of the button states Submit*/}
                Submit
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment.Group>
    );
  }
}

//Defines the mapStateToProps function using authUser
function mapStateToProps({ authUser }) {
  //Returns aurthorised users
  return {
    authUser
  };
}

//Exports NewPoll to be used across the application
export default connect(
  mapStateToProps,
  { handleSaveQuestion }
)(NewPoll);
