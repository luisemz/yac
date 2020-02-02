import types from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_USERS:
      return action.users;
    case types.ADD_USER:
      return [...state, action.user];
    case types.REMOVE_USER:
      return [...state].filter(user => {
        return user.username !== action.user.username;
      });
    default:
      return state;
  }
};
