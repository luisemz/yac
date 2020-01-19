import { combineReducers } from "redux";
import auth from "./authReducers";
import users from "./usersReducers";
import messages from "./messagesReducers";

const rootReducer = combineReducers({
  user: auth,
  users: users,
  messages: messages
});

export default rootReducer;
