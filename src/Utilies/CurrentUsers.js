import { ReturnAnswer, ReturnQuestion } from "../actions/questions";
import { ReciveUsers } from "../actions/users";

export default function CurrentUsers(state = {}, process) {
  switch (process.type) {

    case ReciveUsers:
      return {
        ...state,
        ...process.users
      };

    case ReturnAnswer:
      return {
        ...state,
        [process.authedUser]: {
          ...state[process.authedUser],
          answers: {
            ...state[process.authedUser].answers,
            [process.questionid]: process.answer
          }
        }
      };

    case ReturnQuestion:
      return {
        ...state,
        [process.question.author]: {
          ...state[process.question.author],
          questions: state[process.question.author].questions.concat([
            process.question.id
          ])
        }
      };

    default:
      return state;
  }
}