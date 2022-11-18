//Imports RECEIVE_QUESTIONS, ADD_ANSWER_TO_QUESTION and ADD_QUESTION from questions.js
import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION
} from '../actions/questions';

//Exports questions as a function
export default function questions(state = {}, action) {
  //Switch is similar to a if but runs all case statements
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      //Returns State and action.question
      return {
        ...state,
        ...action.questions
      };
    //Case is the elif statement
    case ADD_ANSWER_TO_QUESTION:
      //Sets authUser, qid and  answer equal to action
      const { authUser, qid, answer } = action;
      //Returns question Id and answers that are associated with votes
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser)
          }
        }
      };
    //Sets authUser, qid and  answer equal to action
    case ADD_QUESTION:
      const { question } = action;
      //Returns state in relation to question
      return {
        ...state,
        [question.id]: question
      };
    //Returns the current state
    default:
      return state;
  }
}
