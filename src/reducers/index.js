//Imports combineReducers from redux
import { combineReducers } from 'redux';
//Imports authUser from authUser.js
import authUser from '../reducers/authUser';
//Imports questoins from questions.js
import questions from '../reducers/questions';
//Imports Users from users.js
import users from '../reducers/users';

//Exports combineReducers using authUser, questions and users
export default combineReducers({
  authUser,
  questions,
  users
});
