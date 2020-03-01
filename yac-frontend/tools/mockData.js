const messages = [
  {
    _id: 1,
    date: new Date("2020-01-01"),
    user: "luismz16",
    text: "Hello my friends"
  },
  {
    _id: 2,
    date: new Date("2020-01-02"),
    user: "delein7",
    text: "Hi, luismz16 and ilvm22"
  },
  {
    _id: 3,
    date: new Date("2020-01-03"),
    user: "ilvm22",
    text: "Hi for everybody"
  }
];

const users = [
  { _id: 1, username: "luismz16" },
  { _id: 2, username: "delein7" },
  { _id: 3, username: "ilvm22" }
];

const newMessage = {
  _id: null,
  date: "",
  user: "",
  text: ""
};

const newUser = {
  _id: null,
  username: ""
};

module.exports = {
  newUser,
  newMessage,
  users,
  messages
};
