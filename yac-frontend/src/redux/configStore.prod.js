import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default initState => {
  return createStore(rootReducer, initState, applyMiddleware(thunk));
};
