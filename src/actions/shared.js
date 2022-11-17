//Imports getInitialData from api.js
import { getInitialData } from '../utils/api';
//Imports	receiveQuestions from questions.js
import { receiveQuestions } from '../actions/questions';
//Imports receiveUsers from users.js
import { receiveUsers } from '../actions/users';

//Exports the handleInitialData function
export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}
