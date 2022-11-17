//Exports setAuthUser
export const SET_AUTH_USER = 'SET_AUTH_USER';

//Defines setAuthUser	as a function
export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id
  };
}
