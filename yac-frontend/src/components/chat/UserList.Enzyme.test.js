import React from "react";
import UserList from "./UserList";
import { shallow } from "enzyme";

import { users } from "../../../tools/mockData";

const renderUserList = args => {
  const defaultProps = { myUser: {}, userList: [], loading: false };

  const props = { ...defaultProps, ...args };
  return shallow(<UserList {...props}></UserList>);
};

it("Renders UserList component without users", () => {
  const wrapper = renderUserList();

  expect(wrapper.find("div").length).toBe(2);
  expect(wrapper.find(".text-muted").text()).toEqual("Users connected");
});

it("Renders UserList component with users", () => {
  const wrapper = renderUserList({
    myUser: users.find(user => {
      return user._id === 1;
    }),
    userList: users
  });

  expect(wrapper.find("div").length).toBe(5);
  expect(wrapper.find(".text-muted").text()).toEqual("Users connected");
});
