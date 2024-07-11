const express = require("express");
const { signUp } = require("../controller/authController");


const authRouter = express.Router();

authRouter.route("/signup").post(signUp);


module.exports = authRouter;