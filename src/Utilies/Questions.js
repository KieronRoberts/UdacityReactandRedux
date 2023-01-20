import {ReceiveQuestions, ReturnAnswer, ReturnQuestions} from "../actions/questions";
  
  export default function questions(state = {}, process) {
    switch (process.type) {

      case ReceiveQuestions:
        return {
          ...state,
          ...process.questions
        };

      case ReturnAnswer:
        return {
          ...state,
          [process.questionid]: {
            ...state[process.questionid],
            [process.answer]: {
              ...state[process.questionid][process.answer],
              votes: state[process.questionid][process.answer].votes.concat([
                process.authedUser
              ])
            }
          }
        };

      case ReturnQuestions:
        return {
          ...state,
          [process.question.id]: process.question
        };

      default:
        return state;
    }
  }