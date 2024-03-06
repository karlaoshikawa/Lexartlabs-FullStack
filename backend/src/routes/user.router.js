const express = require("express");
const userController = require("../controller/user.controller");
const validateUserData = require("../middlewares/validateUserData");
const userRouter = express.Router();

userRouter.post("/login", userController.userLogin);
userRouter.post("/register", validateUserData, userController.createUser);

module.exports = userRouter;
