//Imports	saveQuestion from api.js
import { saveQuestion } from '../utils/api';
//Imports addQuestionToUser	from users.js
import { addQuestionToUser } from '../actions/users';

//Exports RECEIVE_QUESTIONS as RECEIVE_QUESTIONS
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
//Exports ADD_ANSWER_TO_QUESTION as ADD_ANSWER_TO_QUESTION
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
//Exports ADD_QUESTION as ADD_QUESTION
export const ADD_QUESTION = 'ADD_QUESTION';

//Exports the function receiveQuestions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

//Exports the function addAnswerToQuestion
export function addAnswerToQuestion(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer
  };
}

//Exports the addQuestion
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

//Exports the handleSaveQuestion
export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}
