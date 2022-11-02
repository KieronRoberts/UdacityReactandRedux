import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Responsive, Image, Grid, Button, Container} from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';
import "./nav.css"

class Nav extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  render() {
    const { authUser, users } = this.props;

    return (
      <Container>
        <Responsive cas={Menu} className = "menuContainer" pointing secondary>
          <Menu.Item name="home" as={NavLink} to="/" exact className = "navTitles"/>
          <Menu.Item name="new poll" as={NavLink} to="/add" className = "navTitles"/>
          <Menu.Item name="leader board" as={NavLink} to="/leaderboard" className = "navTitles"/>
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Image
                  className = "navImage"
                  src={users[authUser].avatarURL}
                  avatar
                  //spaced="right"
                />
                {users[authUser].name}
              </span>
            </Menu.Item>
            <Menu.Item>
              <Button
                className = "navLogout"
                content="Logout"
                basic
                compact
                icon="log out"
                onClick={this.handleLogout}
              />
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
        <Responsive as={Fragment} className ="avatarIcon">
          <Grid columns={2} padded="vertically">
            <Grid.Row>
              <Grid.Column>
                <Image
                  className = "navImage"
                  src={users[authUser].avatarURL}
                  avatar
                  //spaced="right"
                />
                {users[authUser].name}
              </Grid.Column>
              <Grid.Column className = "buttomColumn">
                <Button
                  className = "button"
                  content = "Logout"
                  labelPosition = "right"
                  basic
                  compact
                  icon = "log out"
                  onClick = {this.handleLogout}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className = "navMenu">
                <Menu pointing secondary widths={3}>
                  <Menu.Item name="home" as={NavLink} to="/" exact className = "navMenuItems"/>
                  <Menu.Item name="new poll" as={NavLink} to="/add" className = "navMenuItems"/>
                  <Menu.Item name="leader board" as={NavLink} to="/leaderboard" className = "navMenuItems"/>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>


        <Responsive as={Fragment} maxWidth={374} >
          <Grid padded="vertically" columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src={users[authUser].avatarURL}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {users[authUser].name}
                <Button
                  content="Logout"
                  labelPosition="right"
                  basic
                  compact
                  icon="log out"
                  size="mini"
                  floated="right"
                  onClick={this.handleLogout}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Menu pointing secondary widths={3}>
                  <Menu.Item name="home" as={NavLink} to="/" exact />
                  <Menu.Item name="new poll" as={NavLink} to="/add" />
                  <Menu.Item name="leader board" as={NavLink} to="/leaderboard"
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

function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users
  };
}

export default connect(
  mapStateToProps,
  { setAuthUser }
)(Nav);