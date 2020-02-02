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

const addUser = user => {
  return { type: types.ADD_USER, user };
};

const removeUser = user => {
  return { type: types.REMOVE_USER, user };
};

export { loadUsers, addUser, removeUser };
