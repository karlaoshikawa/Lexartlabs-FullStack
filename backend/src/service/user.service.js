const { User } = require("../models/index");

const createUser = async (name, email, password) => {
  return await User.create({ name, email, password });
};

module.exports = {
  createUser,
};
