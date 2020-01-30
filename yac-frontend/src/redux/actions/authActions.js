import types from "./actionTypes";

const loginUser = user => {
  return { type: types.LOGIN_USER, user };
};

const logoutUser = user => {
  return { type: types.LOGOUT_USER, user };
};

export { loginUser, logoutUser };
