//Imports	saveQuestionAnswer from api.js
import { saveQuestionAnswer } from '../utils/api';
//Imports	addAnswerToQuestion from questions.js
import { addAnswerToQuestion } from '../actions/questions';

//Exports RECEIVE_QUESTIONS as RECEIVE_QUESTIONS
export const RECEIVE_USERS = 'RECEIVE_USERS';
//Exports ADD_ANSWER_TO_USER as ADD_ANSWER_TO_USER
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
//Exports ADD_QUESTION_TO_USER as ADD_QUESTION_TO_USER
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

//Exports the receiveUsers function
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

//Exports the addAnswerToUser function
function addAnswerToUser(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer
  };
}

//Exports the handleSaveQuestionAnswer function
export function handleSaveQuestionAnswer(authUser, qid, answer) {
  return dispatch => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch(e => {
      console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
}

//Exports the addQuestionToUser function
export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
}
