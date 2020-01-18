const BASE_URL = "http://localhost:8080";

async function handleResponse(response) {
  if (response.status === 200) {
    return response.json();
  } else {
    let res = await response.text();
    res = JSON.parse(res);
    return res;
  }
}

function handleError(err) {
  console.error(`Api call failed: ${err}`);
  throw err;
}

export { BASE_URL, handleResponse, handleError };
