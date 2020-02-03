import { BASE_URL } from "../config/initializers";
import { store } from "react-notifications-component";

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
  store.addNotification({
    message: `Api call failed: ${err}`,
    type: "danger",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true
    }
  });
  throw err;
};

export { BASE_URL, handleResponse, handleError };
