import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Grid, Header, Image, Form, Loader, Dimmer } from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';
import "./login.css"

export class Login extends Component {
  state = {
    loading: false
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <Fragment>
        <Segment.Group>
          <LoginHeader />
          <LoginGridLayout className = "SignInLayout"
            image={<BrandImage />}
            form={<ConnectedLoginForm onLoading={this.handleLoading} />}
            loading={this.state.loading}
          />
        </Segment.Group>
      </Fragment>
    );
  }
}

const LoginHeader = () => (
  <Header className = "AppTitle" block attached="top">
    <Header.Content>Welcome to the worlds best Would You Rather Application</Header.Content>
    <Header.Subheader>Please sign in to continue</Header.Subheader>
  </Header>
);

const LoginGridLayout = ({ image, form, loading }) => (
  <div>
    <Grid padded textAlign="center">
      <Grid.Row className="login">
        <Grid.Column>
          {loading === true && (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          )}
          {image}
          <br />
          {form}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

const BrandImage = () => (
  <Image src="/images/avatars/animals.png" size="medium" centered />
);

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
  render() {
    const { value } = this.state;
    const disabled = value === '' ? true : false;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header className = "SignIn">
          Sign In
        </Header>
        <Form.Dropdown
          placeholder="Select a Friend"
          fluid
          selection
          scrolling
          options={this.generateDropdownData()}
          value={value}
          onChange={this.onChange}
          required
        />
        <Form.Button content="Login" positive disabled={disabled} fluid />
      </Form>
    );
  }
}

const ConnectedLoginForm = connect(
  mapStateToProps,
  { setAuthUser }
)(LoginForm);

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

export default Login;