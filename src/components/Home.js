//Imports	React Component from react
import React, { Component } from 'react';
//Imports PropTypes from prop-types
import PropTypes from 'prop-types';
//Imports connect from react-redux
import { connect } from 'react-redux';
//Imports Tab from semantic-ui-react
import { Tab } from 'semantic-ui-react';
//Imports UserCard from UserCard.js
import UserCard from './UserCard';

//Defines Home with extended component
export class Home extends Component {
  //Sets PropTypes as static
  static propTypes = {
    userQuestionData: PropTypes.object.isRequired
  };
  //Renders the following code
  render() {
    //Defines userQuestionData to equal this.props
    const { userQuestionData } = this.props;

    return <Tab panes={panes({ userQuestionData })} className="tab" />;
  }
}

//Defiones panes to equal props
const panes = props => {
  //Defines userQuestionData to equal props
  const { userQuestionData } = props;
  return [
    {
      //Defines questions categorise as Unanswered
      menuItem: 'Unanswered',
      //Renders the Unanswered Tab
      render: () => (
        <Tab.Pane>
          {userQuestionData.answered.map(question => (
            //Builds UserCards with key equal to question.id, question_id equal to question.id and unanswered equal to true
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={true}
            />
          ))}
        </Tab.Pane>
      )
    },
    {
      //Defines questions categorise as Answered
      menuItem: 'Answered',
      //Renders the Answered Tab
      render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.map(question => (
            //Builds UserCards with key equal to question.id, question_id equal to question.id and unanswered equal to false
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={false}
            />
          ))}
        </Tab.Pane>
      )
    }
  ];
};

//Defines mapStateToProps as a funcation
function mapStateToProps({ authUser, users, questions }) {
  //Defines answeredIds as equal to Object.keys(users[authUser].answers)
  const answeredIds = Object.keys(users[authUser].answers);
  //Defines answered as equal to Object.values(questions)
  const answered = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  //Defines unanswered as equal to Object.values(questions)
  const unanswered = Object.values(questions)
    .filter(question => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  //Returns both answered and unanwersed when set by userQuestionData
  return {
    userQuestionData: {
      answered,
      unanswered
    }
  };
}

//Exports the Home class
export default connect(mapStateToProps)(Home);
