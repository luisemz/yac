import types from "./actionTypes";

function loginUser(user) {
  return { type: types.LOGIN_USER, user };
}

function logoutUser(user) {
  return { type: types.LOGOUT_USER, user };
}

export { loginUser, logoutUser };
