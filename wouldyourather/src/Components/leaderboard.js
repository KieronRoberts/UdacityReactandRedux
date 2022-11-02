import React, { Component, Fragment } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Grid, Header, Image, Label, Divider } from 'semantic-ui-react';
import './leaderboard.css'

const trophyColor = ['yellow', 'grey', 'orange'];

export class Leaderboard extends Component {
  static propType = {
    leaderboardData: PropType.array.isRequired
  };
  render() {
    const { leaderboardData } = this.props;

    return (
      <Fragment>
        {leaderboardData.map((user, idx) => (
          <Segment.Group key={user.id}>
            <Label corner = "left" icon = "trophy" color = {trophyColor[idx]} />
            <Grid divided padded>
              <Grid.Row>
                <Grid.Column className = "AvatarColumn">
                  <Image className = "Avatar" src={user.avatarURL} />
                </Grid.Column>
                <Grid.Column className = "UserColumn">
                  <Header className = "User">
                    {user.name}
                  </Header>
                  <Grid>
                    <Grid.Column className = "AnsweredColumn">Answered questions</Grid.Column>
                    <Grid.Column className = "AnswerCount">{user.answerCount}</Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid>
                    <Grid.Column className = "CreatedColumn">Created questions</Grid.Column>
                    <Grid.Column className = "QuestionCount">{user.questionCount}</Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column className = "ScoreColumn" textAlign="center">
                  <Segment.Group>
                    <Header className = "Score" block attached="top" content="Score" />
                    <Segment>
                      <Label circular color="green" size="big">
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
function mapStateToProps({ users }) {
    const leaderboardData = Object.values(users)
      .map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.rquestion.length,
        total: Object.values(user.answers).length + user.rquestions.length
      }))
      .sort((a, b) => a.total - b.total)
      .reverse()
      .slice(0, 3);
    return {
      leaderboardData
    };
  }
  
  export default connect(mapStateToProps)(Leaderboard);