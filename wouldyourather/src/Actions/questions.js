import { saveQuestion } from '../utils/api';
import { addQuestionToUser } from '../actions/users';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestion(rquestion) {
  return {
    type: RECEIVE_QUESTION, rquestion
  };
}

export function addAnswerToQuestion(authorisedUser, questionid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION, authorisedUser, questionid, answer
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION, question
  };
}

export function handleSaveQuestion(optionOne, optionTwo, author) {
  return dispatch => {
    return saveQuestion({ optionOne, optionTwo, author }).then(
      question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}