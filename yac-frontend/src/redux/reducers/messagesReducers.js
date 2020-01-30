import types from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};
