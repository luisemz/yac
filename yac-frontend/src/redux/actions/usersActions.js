import types from "./actionTypes";
import * as usersApi from "../../api/apiUsers";
import { beginApiCall, apiCallError } from "./apiStatusActions";

const loadUsersSuccess = users => {
  return { type: types.LOAD_USERS, users };
};

const loadUsers = () => {
  return dispatch => {
    dispatch(beginApiCall());
    return usersApi
      .users()
      .then(res => {
        dispatch(loadUsersSuccess(res.users));
      })
      .catch(err => {
        dispatch(apiCallError());
        console.error(err);
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
