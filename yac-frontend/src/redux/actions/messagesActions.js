import types from "./actionTypes";
import * as messagesApi from "../../api/apiMessages";

const loadMessagesSuccess = messages => {
  return { type: types.LOAD_MESSAGES, messages };
};

const loadMessages = () => {
  return dispatch => {
    return messagesApi
      .messages()
      .then(res => {
        dispatch(loadMessagesSuccess(res.messages));
      })
      .catch(err => {
        throw err;
      });
  };
};

const addMessage = message => {
  return { type: types.ADD_MESSAGE, message };
};

export { loadMessages, addMessage };
