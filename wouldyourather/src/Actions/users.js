import { saveQuestionAnswer } from '../utils/api';
import { addAnswerToQuestion } from '../actions/questions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user
  };
}

function addAnswerToUser(authorisedUser, questionid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authorisedUser,
    questionid,
    answer
  };
}

export function addQuestionToUser({ id, author }) {
    return {
      type: ADD_QUESTION_TO_USER,
      id,
      author
    };
}

export function handleSaveQuestionAnswer(authorisedUser, questionid, answer) {
  return dispatch => {
    dispatch(addAnswerToUser(authorisedUser, questionid, answer));
    dispatch(addAnswerToQuestion(authorisedUser, questionid, answer));

    return saveQuestionAnswer(authorisedUser, questionid, answer).catch(e => {
      console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
}
