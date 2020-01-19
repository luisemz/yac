import types from "./actionTypes";
import * as usersApi from "../../api/apiUsers";

function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS, users };
}

function loadUsers() {
  return function(dispatch) {
    return usersApi
      .users()
      .then(res => {
        dispatch(loadUsersSuccess(res.users));
      })
      .catch(err => {
        throw err;
      });
  };
}

export { loadUsers };
