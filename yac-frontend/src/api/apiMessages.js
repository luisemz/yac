import { BASE_URL, handleResponse, handleError } from "./apiUtils";

function messages() {
  return fetch(`${BASE_URL}/api/v1/messages`, {
    method: "GET",
    headers: { "content-type": "application/json" }
  })
    .then(handleResponse)
    .catch(handleError);
}

function newMessage(data) {
  return fetch(`${BASE_URL}/api/v1/message`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(handleResponse)
    .catch(handleError);
}

export { messages, newMessage };
