import { combineReducers } from "redux";
import auth from "./authReducers";
import users from "./usersReducers";
import messages from "./messagesReducers";

export default combineReducers({
  user: auth,
  users: users,
  messages: messages
});
