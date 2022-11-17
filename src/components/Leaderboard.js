//Imports	React Component and React Fragment from react
import React, { Component, Fragment } from 'react';
//Imports PropTypes from prop-types
import PropType from 'prop-types';
//Imports connect	from react-redux
import { connect } from 'react-redux';
//Imports Segment, Grid, Header, Image, Label, Divider from semantic-ui-react
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider
} from 'semantic-ui-react';

//Defines trophyColor as Bronze, Silver and Gold
const trophyColor = ['bronze', 'silver', 'gold'];

//Exports the Leaderboard class with extended components
export class Leaderboard extends Component {
  static propType = {
    leaderboardData: PropType.array.isRequired
  };
  //Renders the constant leaderboardData
  render() {
    const { leaderboardData } = this.props;

    //Returns the Leaderboard
    return (
      //Fragments all the use of multiple elements
      <Fragment>
        {leaderboardData.map((user, idx) => (
          <Segment.Group key={user.id}>
            {/*Defines the corner, icon and color of the the label*/}
            <Label corner="left" icon="trophy" color={trophyColor[idx]} />
            {/*Creates a grid with padded dividers*/}
            <Grid divided padded>
              <Grid.Row>
                {/*Defines the width to 4 and alignment of the the column to middle*/}
                <Grid.Column width={4} verticalAlign="middle">
                  {/*Sets the image to have the avatar URL*/}
                  <Image src={user.avatarURL} />
                </Grid.Column>
                {/*Defines the width of the column to 8*/}
                <Grid.Column width={8}>
                  {/*Sets the header to h3 and align the text to the left*/}
                  <Header as="h3" textAlign="left">
                    {/*The header outputs the user name*/}
                    {user.name}
                  </Header>
                  <Grid>
                    {/*Defines the width of the column to 12 that desplays "Answered questions"*/}
                    <Grid.Column width={12}>Answered questions</Grid.Column>
                    {/*Defines the width of the column to 4 that desplays the users answer count*/}
                    <Grid.Column width={4}>{user.answerCount}</Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid>
                    {/*Defines the width of the column to 12 that desplays "Created questions"*/}
                    <Grid.Column width={12}>Created questions</Grid.Column>
                    {/*Defines the width of the column to 4 that desplays the users question count*/}
                    <Grid.Column width={4}>{user.questionCount}</Grid.Column>
                  </Grid>
                </Grid.Column>
                {/*Defines the width to 4 and alignment of the the column to centre*/}
                <Grid.Column width={4} textAlign="center">
                  <Segment.Group>
                    {/*Sets the header to h5 the attachment location to top and the content to Score*/}
                    <Header as="h5" block attached="top" content="Score" />
                    {/*Defines a section in a document. */}
                    <Segment>
                      {}
                      {/*Set the cirrcular colour to blue and the size to big*/}
                      <Label circular color="blue" size="big">
                        {/*The label displays the users question count and answer count*/}
                        {user.questionCount + user.answerCount}
                      </Label>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        ))}
      </Fragment>
    );
  }
}

//Defines mapStateToProps as a function
function mapStateToProps({ users }) {
  const leaderboardData = Object.values(users)
    .map(user => ({
      //Sets variables to have user based attridutes
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3);
  return {
    leaderboardData
  };
}

//Exports the Home class
export default connect(mapStateToProps)(Leaderboard);
