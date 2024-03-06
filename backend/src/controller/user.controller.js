const userService = require("../service/user.service.js");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const emailExists = await userService.getByEmail(email);
  if (emailExists)
    return res.status(409).json({ message: "Email already exists" });

  await userService.createUser(name, email, password);
  return res.status(201).json({ message: "User created successfully!" });
};


module.exports = {
  createUser,
};
