import React from "react";
import { mount } from "enzyme";
import { Login } from "./Login";

const renderLogin = () => {
  const defaultProps = {
    history: {},
    actions: {
      loginUser: jest.fn(),
      loginUserSuccess: jest.fn(),
      logoutUser: jest.fn()
    },
    socket: {},
    user: {}
  };

  const props = { ...defaultProps };
  return mount(<Login {...props}></Login>);
};

it("Set errors when login with empty username", () => {
  const wrapper = renderLogin();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".invalid-feedback");
  expect(error.text()).toBe("Username is required.");
});
