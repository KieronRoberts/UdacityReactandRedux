import { SET_AUTHED_USER } from "../Utilies/authedUser";

export default function AuthorisedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
