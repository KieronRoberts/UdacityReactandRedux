//Imports	React Component and React Fragment from react
import React, { Component, Fragment } from 'react';
//Imports PropTypes from prop-types
import PropTypes from 'prop-types';
//Imports connect	from react-redux
import { connect } from 'react-redux';
//Imports Segment, Grid, Header, Image, Label, Divider from semantic-ui-react
import {
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Loader,
  Dimmer
} from 'semantic-ui-react';
//Imports setAuthUser from authUser.js
import { setAuthUser } from '../actions/authUser';

//Exports the Login class with extended component
export class Login extends Component {
  //Sets the state of loading to false and changes it to true as required
  state = {
    loading: false
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };

  //Renders the Login page
  render() {
    //Returns the Login page
    return (
      //Fragments all the use of multiple elements
      <Fragment>
        <Segment.Group>
          {/*Uses the imported LoginHeader function to render the page*/}
          <LoginHeader />
          {/*Uses the imported LoginGridLayout function to render the page*/}
          <LoginGridLayout
            //Sets image to BrandImage
            image={<BrandImage />}
            //Sets form to ConnectedLoginForm
            form={<ConnectedLoginForm onLoading={this.handleLoading} />}
            loading={this.state.loading}
          />
        </Segment.Group>
        {/*Builds the footer shown on the Login page*/}
        <footer className="footer">
          {/*Set the paragraph to display on in the footer*/}
          <p>
            Would you rather game build for the Udacity React Fundamentals Nanodegree.
          </p>
        </footer>
      </Fragment>
    );
  }
}

//Defines LogininHeader as a constant
const LoginHeader = () => (
  //Sets header to h4, attaches it to the top and centre aligns the text
  <Header as="h4" block attached="top" textAlign="center" color="blue">
    {/*The header content is set to "Welcome to the Would You Rather App!"*/}
    <Header.Content>Welcome to the Would You Rather App!</Header.Content>
    {/*The header subheader is smaller and set to "Please sign in to continue"*/}
    <Header.Subheader>Please sign in to continue</Header.Subheader>
  </Header>
);

//Defines LoginGridLayout as a constant
const LoginGridLayout = ({ image, form, loading }) => (
  <div>
    {/*Sets the grid to have padded text thats aligned to the centre*/}
    <Grid padded textAlign="center">
      {/*Sets teh row's classname to login*/}
      <Grid.Row className="login">
        {/*Sets the column's width to 16*/}
        <Grid.Column width={16}>
          {loading === true && (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          )}
          {/*Loads the image above a break and the the form*/}
          {image}
          <br />
          {form}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

//Defines the BrandImage constant as the animals.png file, then centres it.
const BrandImage = () => (
  <Image src="/images/avatars/animals.png" size="medium" centered />
);

//Defines LoginForm with extended component
class LoginForm extends Component {
  static propTypes = {
    onLoading: PropTypes.func.isRequired
  };
  state = {
    value: ''
  };
  onChange = (e, { value }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { onLoading, setAuthUser } = this.props;
    const authUser = this.state.value;

    new Promise((res, rej) => {
      onLoading();
      setTimeout(() => res(), 500);
    }).then(() => setAuthUser(authUser));
  };
  generateDropdownData = () => {
    const { users } = this.props;

    return users.map(user => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL }
    }));
  };
  //Renders the out form
  render() {
    //Sets value as equal to state
    const { value } = this.state;
    //Sets disabled as equal to value that is true or false
    const disabled = value === '' ? true : false;
    //Returns the form
    return (
      //Submits the handleSubmit form
      <Form onSubmit={this.handleSubmit}>
        {/*Sets the header size to h2 and the colour to blue*/}
        <Header as="h2" color="blue">
          {/*The header text is "Sign In"*/}
          Sign In
        </Header>
        {/*Displays the dropdown form*/}
        <Form.Dropdown
          //The placeholder for the this dropdown is "Select a Friend"
          placeholder="Select a Friend"
          fluid
          selection
          //Adds the scrollable feature to the dropdown
          scrolling
          //Sets the options to generateDropdownData
          options={this.generateDropdownData()}
          //Sets the value to the users selection
          value={value}
          //Allows the value to change a change on selection
          onChange={this.onChange}
          //Ensures the form has a selection
          required
        />
        {/*Gives the form a button that once clicked submits the form*/}
        <Form.Button
          //Sets the content of the button to login
          content="Login"
          //Sets the colour to blue
          color="blue"
          positive
          disabled={disabled}
          fluid
        />
      </Form>
    );
  }
}

//Set ConnnectedLogin as a constant
const ConnectedLoginForm = connect(
  mapStateToProps,
  { setAuthUser }
)(LoginForm);

//Defines the mapStateToProps as a function
function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

//Exports the Login function
export default Login;
