import types from "./actionTypes";
import * as authActions from "./authActions";
import thunk from "redux-thunk";
import fecthMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

import { users } from "../../../tools/mockData";

const middleware = [thunk],
  mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fecthMock.restore();
  });

  describe("loginUser", () => {
    it("Should create LOGIN_USER action", () => {
      const [user] = users;
      fecthMock.mock("*", {
        body: user,
        headers: { "content-type": "application/json" }
      });

      const store = mockStore({ user: {} });
      return store
        .dispatch(authActions.loginUser(user, { emit: jest.fn() }))
        .then(() => {
          expect(store.getActions()).toEqual([]);
        });
    });
  });

  describe("logoutUser", () => {
    it("Should create LOGIN_USER action", () => {
      const [user] = users;
      fecthMock.mock("*", {
        body: user,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [{ type: types.LOGOUT_USER, user: {} }];

      const store = mockStore({ user: {} });
      return store
        .dispatch(authActions.logoutUser({}, { emit: jest.fn() }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});

describe("loginUsersSuccess", () => {
  it("Should create a LOGIN_USER_SUCCESS action", () => {
    const [user] = users;
    const expectedAction = {
      type: types.LOGIN_USER,
      user
    };

    const action = authActions.loginUserSuccess(user);

    expect(action).toEqual(expectedAction);
  });
});
