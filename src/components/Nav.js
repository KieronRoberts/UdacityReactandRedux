//Imports	React Component and React Fragment from react
import React, { Component, Fragment } from 'react';
//Imports NavLink form react-router-dom
import { NavLink } from 'react-router-dom';
//Imports Connect form react-redux
import { connect } from 'react-redux';
//Imports Menu, Responsive, Image, Grid, Button and Container from semantic-ui-react
import {
  Menu,
  Responsive,
  Image,
  Grid,
  Button,
  Container
} from 'semantic-ui-react';
//Imports setAuthUser from authUser.js
import { setAuthUser } from '../actions/authUser';

//Sets the Nav class with extended components
class Nav extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  //Renders the navigation bar
  render() {
    //Defines authUser and users as equal to props
    const { authUser, users } = this.props;

    //Returns the navigation bar
    return (
      //Sets the container to group the navigation bar
      <Container>
        {/*Sets the navigation bar to a responsive with a minimum width of 651*/}
        <Responsive as={Menu} minWidth={651} pointing secondary>
          {/*Sets the menu item home to link to / */}
          <Menu.Item name="home" as={NavLink} to="/" exact />
          {/*Sets the menu item new poll to link to /add*/}
          <Menu.Item name="new poll" as={NavLink} to="/add" />
          {/*Sets the menu item leader board to link to /leaderboard*/}
          <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
          {/*Sets the location of the menu to right*/}
          <Menu.Menu position="right">
            {/*Sets another menu item*/}
            <Menu.Item>
              <span>
                <Image
                  //Sets a image to have the users avatar
                  src={users[authUser].avatarURL}
                  //Sets a image to have the icon of avatar
                  avatar
                  //Sets a image to have space to the right
                  spaced="right"
                  //Sets the image to have alightment from the bottom
                  verticalAlign="bottom"
                />
                {/*Gives the users active name*/}
                {users[authUser].name}
              </span>
            </Menu.Item>
            {/*Sets another menu item*/}
            <Menu.Item>
              {/*Builds a button*/}
              <Button
                //Sets the content as Logout
                content="Logout"
                //Sets the possition of the text to right
                labelPosition="right"
                basic
                compact
                //Sets the incon to "log out"
                icon="log out"
                //Sets the size to "mini"
                size="mini"
                //Sets the colour to blue
                color="blue"
                //Once the button is clicked the handleLogout function will run
                onClick={this.handleLogout}
              />
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
        {/*Sets the fragment to change the location*/}
        {/*Sets the minimum width to 375 and the max width to 650*/}
        <Responsive as={Fragment} minWidth={375} maxWidth={650}>
          {/*Sets the number of columns to 2 and padds the vertically*/}
          <Grid columns={2} padded="vertically">
            <Grid.Row>
              <Grid.Column>
                {/*Sets the image to  */}
                <Image
                  //Sets a image to have the users avatar
                  src={users[authUser].avatarURL}
                  //Sets a image to have the icon of avatar
                  avatar
                  //Sets a image to have space to the right
                  spaced="right"
                  //Sets the image to have alightment from the bottom
                  verticalAlign="bottom"
                />
                {/*Gives the users active name*/}
                {users[authUser].name}
              </Grid.Column>
              {/*Sets the coloumn to alinement to bottom and text alinement to right*/}
              <Grid.Column verticalAlign="bottom" textAlign="right">
                {/*Builds a button*/}
                <Button
                  //Sets the content as Logout
                  content="Logout"
                  //Sets the possition of the text to right
                  labelPosition="right"
                  basic
                  compact
                  //Sets the incon to "log out"
                  icon="log out"
                  //Sets the size to "mini"
                  size="mini"
                  //Sets the colour to blue
                  color="blue"
                  //Once the button is clicked the handleLogout function will run
                  onClick={this.handleLogout}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {/*Sets the column width to 16*/}
              <Grid.Column width={16}>
                {/*Sets the menus secondary withs to 3*/}
                <Menu pointing secondary widths={3}>
                  {/*Sets the menu item home to link to / */}
                  <Menu.Item name="home" as={NavLink} to="/" exact />
                  {/*Sets the menu item new poll to link to /add */}
                  <Menu.Item name="new poll" as={NavLink} to="/add" />
                  {/*Sets the menu item leader board to link to /leaderboard*/}
                  <Menu.Item
                    name="leader board"
                    as={NavLink}
                    to="/leaderboard"
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        {/*Sets the fragment to change the location*/}
        {/*Sets the minimum width to 374 and the max width to 650*/}
        <Responsive as={Fragment} maxWidth={374}>
          {/* Sets the coloumn to alinement to bottom and creates 1 coloumn*/}
          <Grid padded="vertically" columns={1}>
            <Grid.Row>
              <Grid.Column>
                {/*Sets the image to  */}
                <Image
                  //Sets a image to have the users avatar
                  src={users[authUser].avatarURL}
                  //Sets a image to have the icon of avatar
                  avatar
                  //Sets a image to have space to the right
                  spaced="right"
                  //Sets the image to have alightment from the bottom
                  verticalAlign="bottom"
                />
                {/*Gives the users active name*/}
                {users[authUser].name}
                <Button
                  //Sets the content as Logout
                  content="Logout"
                  //Sets the possition of the text to right
                  labelPosition="right"
                  basic
                  compact
                  //Sets the incon to "log out"
                  icon="log out"
                  //Sets the size to "mini"
                  size="mini"
                  //Sets the colour to blue
                  color="blue"
                  //Once the button is clicked the handleLogout function will run
                  onClick={this.handleLogout}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {/*Sets the column*/}
              <Grid.Column>
                {/*Sets the menus secondary withs to 3*/}
                <Menu pointing secondary widths={3}>
                  {/*Sets the menu item home to link to / */}
                  <Menu.Item name="home" as={NavLink} to="/" exact />
                  {/*Sets the menu item new poll to link to /add */}
                  <Menu.Item name="new poll" as={NavLink} to="/add" />
                  {/*Sets the menu item leader board to link to /leaderboard*/}
                  <Menu.Item
                    name="leader board"
                    as={NavLink}
                    to="/leaderboard"
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    );
  }
}

//Defines mapStateToProps as a function
function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users
  };
}

//Exports Nav with the connections mapStateToProps as setAuthUser
export default connect(
  mapStateToProps,
  { setAuthUser }
)(Nav);
