import types from "../actions/actionTypes";

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return action.user;
    case types.LOGOUT_USER:
      return action.user;
    default:
      return state;
  }
}
