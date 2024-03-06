const User = require("../models/index").Users;
const bcrypt = require("bcrypt");

const getByEmail = async (email) => {
  try {
    return await User.findOne({ where: { email } });
  } catch (error) {
    console.error("Error getting user by email:", error);
    throw error; 
  }
};

const createUser = async (name, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 12); 

    return await User.create({ name, email, password: hashedPassword });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  getByEmail,
};
