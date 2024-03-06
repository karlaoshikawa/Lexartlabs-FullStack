const User = require("../models/index").Users;
const bcrypt = require("bcrypt");
const { createToken } = require("../auth/authToken");

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

const userLogin = async (userData) => {
  const { email, password } = userData;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("User Not Found");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid Password");
  }

  const token = createToken({ userId: user.id });

  return { email, token };
};

module.exports = {
  createUser,
  getByEmail,
  userLogin,
};
