import { combineReducers } from "redux";
import auth from "./authReducers";

const rootReducer = combineReducers({
  user: auth
});

export default rootReducer;
