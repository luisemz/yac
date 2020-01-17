import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

export default function configStore(initState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initState,
    composeEnhancer(applyMiddleware())
  );
}
