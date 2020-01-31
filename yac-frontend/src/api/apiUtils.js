import { BASE_URL } from "../config/initializers";

const handleResponse = async response => {
  if (response.status === 200) {
    return response.json();
  } else {
    let res = await response.text();
    res = JSON.parse(res);
    return res;
  }
};

const handleError = err => {
  console.error(`Api call failed: ${err}`);
  throw err;
};

export { BASE_URL, handleResponse, handleError };
