import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import AuthorisedUser from './AuthorisedUser';
import questions from './Questions';
import CurrentUsers from './CurrentUsers';

export default combineReducers({
    AuthorisedUser,
    loadingBar: loadingBarReducer,
    questions,
    CurrentUsers
});
