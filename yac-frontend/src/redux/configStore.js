if (process.env.REACT_APP_NODE_ENV === "development") {
  module.exports = require("./configStore.dev");
} else {
  module.exports = require("./configStore.prod");
}
