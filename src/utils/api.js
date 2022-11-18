//Imports _getUsers, _getQuestions, _saveQuestion and _saveQuestionAnswer from _DATA.js
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA';

//Exports getInitialData as a function
export function getInitialData() {
  //Returns Promise.all with _getUsers(), _getQuestions()
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

//Exports saveQuestion as a function
export function saveQuestion(question) {
  //Returns _saveQuestion
  return _saveQuestion(question);
}

//Exports saveQuestionAnswer as a function using authUser, qid, answer
export function saveQuestionAnswer(authUser, qid, answer) {
  // console.log('info', { authUser, qid, answer });
  return _saveQuestionAnswer({ authUser, qid, answer });
}
