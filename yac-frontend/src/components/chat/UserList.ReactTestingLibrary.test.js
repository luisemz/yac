import React from "react";
import { render, cleanup } from "@testing-library/react";
import UserList from "./UserList";

import { users } from "../../../tools/mockData";

afterEach(cleanup);

const renderUserList = args => {
  const defaultProps = { myUser: {}, userList: [], loading: false };

  const props = { ...defaultProps, ...args };
  return render(<UserList {...props}></UserList>);
};

it("Renders UserList component validate contents without users", () => {
  const { getByText } = renderUserList();
  getByText("Users connected");
});

it("Renders UserList component with users", () => {
  const { getByText } = renderUserList({
    myUser: users.find(user => {
      return user._id === 1;
    }),
    userList: users
  });
  getByText("luismz16 (Me)");
  getByText("delein7");
  getByText("ilvm22");
});
