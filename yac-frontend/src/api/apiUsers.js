import { BASE_URL, handleResponse, handleError } from "./apiUtils";

const users = () => {
  return fetch(`${BASE_URL}/api/v1/users`, {
    method: "GET",
    headers: { "content-type": "application/json" }
  })
    .then(handleResponse)
    .catch(handleError);
};

export { users };
