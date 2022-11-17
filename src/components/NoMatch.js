//Imports React and React Component from react
import React, { Component } from 'react';
//Imports Container and  Header from semantic-ui-react
import { Container, Header } from 'semantic-ui-react';

//Exports NoMatch as a class with extended Components
export class NoMatch extends Component {
  //Renders the error message
  render() {
    //Returns the error message
    return (
      //Creates a container and centers the text within it
      <Container textAlign="center">
        {/*Sets the header size to h3 and the text within it is "No Match 404 Error" */}
        <Header as="h3">No Match 404 Error</Header>
        {/*Sets a paragraph with the text "Nothing to see here. Please use the menu to try again."*/}
        <p>Nothing to see here. Please use the menu to try again.</p>
      </Container>
    );
  }
}

//Exports NoMatch to be used across the application
export default NoMatch;
