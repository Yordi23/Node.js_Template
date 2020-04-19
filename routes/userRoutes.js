const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");
const router = express.Router();

request.post("/signup", authController.signup);
request.post("/login", authController.login);

module.exports = router;
