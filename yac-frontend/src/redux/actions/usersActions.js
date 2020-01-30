import types from "./actionTypes";
import * as usersApi from "../../api/apiUsers";

const loadUsersSuccess = users => {
  return { type: types.LOAD_USERS, users };
};

const loadUsers = () => {
  return dispatch => {
    return usersApi
      .users()
      .then(res => {
        dispatch(loadUsersSuccess(res.users));
      })
      .catch(err => {
        throw err;
      });
  };
};

export { loadUsers };
