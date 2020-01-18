import { BASE_URL, handleResponse, handleError } from "./apiUtils";

function login(user) {
  return fetch(`${BASE_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

function logout(user) {
  return fetch(`${BASE_URL}/api/v1/auth/logout`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export { login, logout };
