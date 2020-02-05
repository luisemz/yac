import { combineReducers } from "redux";
import auth from "./authReducers";
import users from "./usersReducers";
import messages from "./messagesReducers";
import apiStatus from "./apiStatusReducers";

export default combineReducers({
  user: auth,
  users,
  messages,
  apiStatus
});
