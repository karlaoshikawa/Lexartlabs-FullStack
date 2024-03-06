const userService = require("../service/user.service.js");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const emailExists = await userService.getByEmail(email);
  if (emailExists)
    return res.status(409).json({ message: "Email already exists" });

  await userService.createUser(name, email, password);
  return res.status(201).json({ message: "User created successfully!" });
};

const userLogin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const login = await userService.userLogin(req.body);
    res.status(200).json(login);
  } catch (error) {
    res.status(400).json({ message: "Invalid email or password" });
  }
};


module.exports = {
  createUser,
  userLogin,
};
