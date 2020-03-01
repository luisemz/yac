import { createStore } from "redux";
import rootReducer from "./reducers";
import * as authActions from "./actions/authActions";
import * as messagesActions from "./actions/messagesActions";

import { users, messages } from "../../tools/mockData";

const initState = {
  user: {},
  users: [],
  messages: [],
  apiStatus: 0
};

it("Should handle login user", () => {
  const store = createStore(rootReducer, initState);
  const [user] = users;

  const action = authActions.loginUserSuccess(user);
  store.dispatch(action);

  const userLogin = store.getState().user;
  expect(userLogin).toEqual(user);
});

it("Should handle new message", () => {
  const store = createStore(rootReducer, initState);
  const [message] = messages;

  const action = messagesActions.addMessage(message);
  store.dispatch(action);

  const newState = store.getState();
  const newMessage = store.getState().messages[0];
  expect(newState.messages.length).toBe(1);
  expect(newMessage).toEqual(message);
});
