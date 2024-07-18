const express = require("express");
const { signUp, login, cart } = require("../controller/authController");

const authRouter = express.Router();

authRouter.route("/signup").post(signUp);


authRouter.route("/login").post(login);



authRouter.route("/cart").post(cart)

module.exports = authRouter;