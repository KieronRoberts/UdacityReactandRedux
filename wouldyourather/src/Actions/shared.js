import { getInitialData } from '../utils/api';
import { receiveQuestion } from '../actions/questions';
import { receiveUsers } from '../actions/users';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, rquestion }) => {
      dispatch(receiveQuestion(rquestion));
      dispatch(receiveUsers(users));
    });
  };
}