//Imports	React Component and React Fragment from react
import React, { Component, Fragment } from 'react';
//Imports BrowserRouter as Router, Route, Switch from react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Imports	Grid from semantic-ui-react
import { Grid } from 'semantic-ui-react';
//Imports	handleInitialData from shared.js
import { handleInitialData } from '../actions/shared';
//Imports connect	from react-redux
import { connect } from 'react-redux';

//Imports Login from Login.js
import Login from './Login';
//Imports	Nav from Nav.js
import Nav from './Nav';
//Imports	Home from Home.js
import Home from './Home';
//Imports	UserCard from UserCard.js
import UserCard from './UserCard';
//Imports	NewPoll from NewPoll.js
import NewPoll from './NewPoll';
//Imports Leaderboard from Leaderboard.js
import Leaderboard from './Leaderboard';
//Imports	NoMatch from NoMatch.js
import NoMatch from './NoMatch';

//Defines App with extended component
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  //Renders the application
  render() {
    //Defines the authorised users
    const { authUser } = this.props;
    //Returns the applications
    return (
      //Wraps router around the application allowing the change of pages on URLs
      <Router>
        {/*Sets the application*/}
        <div className="App">
          {/*Ensures the users are authorised the use the application*/}
          {authUser === null ? (
            /*Defines what should be found on the URL path / */
            <Route
              /*Renders he Login page with a set grid location*/
              render={() => (
                <ContentGrid>
                  {/*Uses the imported Login function to render the page*/}
                  <Login />
                </ContentGrid>
              )}
            />
          ) : (
            //Fragments all the use of multiple elements
            <Fragment>
              {/*Uses the imported Nav function to render the page*/}
              <Nav />
              <ContentGrid>
                <Switch>
                  {/*Defines what should be found on the URL path / */}
                  <Route exact path="/" component={Home} />
                  {/*Defines what should be found on the URL path /questions/bad_id */}
                  <Route path="/questions/bad_id" component={NoMatch} />
                  {/*Defines what should be found on the URL path /questions/:question_id */}
                  <Route path="/questions/:question_id" component={UserCard} />
                  {/*Defines what should be found on the URL path /add */}
                  <Route path="/add" component={NewPoll} />
                  {/*Defines what should be found on the URL path /leaderboard */}
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route component={NoMatch} />
                </Switch>
              </ContentGrid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

//Defines ContentGrid
const ContentGrid = ({ children }) => (
  //Set the location and padding are ContentGrid
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      {/*sets the maximum width of the column*/}
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

//Defines ContentGrid
function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

//Defines ContentGrid
export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);
