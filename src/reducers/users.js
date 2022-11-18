//Imports RECEIVE_QUESTIONS, ADD_ANSWER_TO_QUESTION and ADD_QUESTION from questions.js
import {
  RECEIVE_USERS,
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER
} from '../actions/users';

//Exports users as a function
export default function users(state = {}, action) {
  //Switch is similar to a if but runs all case statements
  switch (action.type) {
    //Case is the elif statement
    case RECEIVE_USERS:
      //Returns state and users
      return {
        ...state,
        ...action.users
      };
    //Case is the elif statement
    case ADD_ANSWER_TO_USER:
      //Defines authUser, qid, answer as equal to action
      const { authUser, qid, answer } = action;
      //Returns answers when the user is authorised
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
      };
    //Case is the elif statement
    case ADD_QUESTION_TO_USER:
      //Defines id, author as equal to action
      const { id, author } = action;
      //Returns question's that match the author
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      };
    //Returns state
    default:
      return state;
  }
}
