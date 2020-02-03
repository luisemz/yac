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
        console.error(err);
      });
  };
};

const newMessage = (message, socket) => {
  return dispatch => {
    return messagesApi
      .newMessage(message)
      .then(res => {
        socket.emit("NEW_MESSAGE", res.message);
        dispatch(addMessage(res.message));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

const addMessage = message => {
  return { type: types.ADD_MESSAGE, message };
};

export { loadMessages, newMessage, addMessage };
