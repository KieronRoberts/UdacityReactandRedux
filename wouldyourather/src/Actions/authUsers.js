export const SET_AUTHORISED_USER = 'SET_AUTHORISED_USER';

export function setAuthorisedUser(id) {
  return {
    type: SET_AUTHORISED_USER,
    id
  };
}