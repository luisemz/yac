import authReducer from "./authReducers";
import * as authActions from "../actions/authActions";

import { users } from "../../../tools/mockData";

it("Should add a user when passed LOGIN_USER_SUCCESS", () => {
  const [user] = users;

  const action = authActions.loginUserSuccess(user);

  const newState = authReducer({}, action);

  expect(newState._id).toBe(1);
  expect(newState.username).toEqual("luismz16");
  expect(newState).toEqual(user);
});

it("Should remove a user when passed LOGOUT_USER_SUCCESS", () => {
  const action = authActions.logoutUserSuccess({});

  const newState = authReducer({}, action);

  expect(newState._id).toBe(undefined);
  expect(newState.username).toEqual(undefined);
  expect(newState).toEqual({});
});
