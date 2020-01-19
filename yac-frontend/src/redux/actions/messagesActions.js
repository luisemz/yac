import types from "./actionTypes";
import * as messagesApi from "../../api/apiMessages";

function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES, messages };
}

function loadMessages() {
  return function(dispatch) {
    return messagesApi
      .messages()
      .then(res => {
        dispatch(loadMessagesSuccess(res.messages));
      })
      .catch(err => {
        throw err;
      });
  };
}

export { loadMessages };
