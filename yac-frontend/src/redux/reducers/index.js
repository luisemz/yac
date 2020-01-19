import { combineReducers } from "redux";
import auth from "./authReducers";
import users from "./usersReducers";

const rootReducer = combineReducers({
  user: auth,
  users: users
});

export default rootReducer;
