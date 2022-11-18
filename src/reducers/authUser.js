//Imports  SET_AUTH_USER from authUser.js
import { SET_AUTH_USER } from '../actions/authUser';

//Exports authUser function
export default function authUser(state = null, action) {
  //Finds whether a user is classed as an authorised user
  if (action.type === SET_AUTH_USER) {
    return action.id;
  }
  return state;
}
