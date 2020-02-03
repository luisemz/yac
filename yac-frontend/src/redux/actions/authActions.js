import types from "./actionTypes";
import * as authApi from "../../api/apiAuth";

const loginUserSuccess = user => {
  return { type: types.LOGIN_USER, user };
};

const logoutUserSuccess = user => {
  return { type: types.LOGOUT_USER, user };
};

const loginUser = (user, socket) => {
  return dispatch => {
    return authApi
      .login(user)
      .then(res => {
        if (res.user) {
          socket.emit("LOGIN", res.user);
          localStorage.setItem("user", JSON.stringify(res.user));
          dispatch(loginUserSuccess(res.user));
        } else {
          return res;
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
};

const logoutUser = (user, socket) => {
  return dispatch => {
    return authApi
      .logout(user)
      .then(res => {
        socket.emit("LOGOUT", res.user);
        localStorage.removeItem("user");
        dispatch(logoutUserSuccess({}));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export { loginUser, loginUserSuccess, logoutUser };
